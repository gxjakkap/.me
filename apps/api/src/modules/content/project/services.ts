import { client } from "../client"
import type {
	GetProjectListServiceParams,
	GetProjectListServiceResponse,
	GetProjectServiceResponse,
	ProjectSkeleton,
} from "./types"

export async function getProjectListService({
	page = 1,
	limit = 10,
}: GetProjectListServiceParams): Promise<GetProjectListServiceResponse> {
	const res = await client.getEntries<ProjectSkeleton>({
		content_type: "projects",
		limit,
		skip: (page - 1) * limit,
		order: ["-sys.createdAt"],
	})
	return {
		page,
		totalPages: Math.ceil(res.total / limit),
		items: res.items.map(({ fields: f, sys }) => ({
			slug: f.slug,
			title: f.title,
			description: f.description,
			thumbnail: f.thumbnail,
			tags: f.tags,
			date: sys.createdAt,
		})),
	}
}

export async function getProjectService(slug: string): Promise<GetProjectServiceResponse | null> {
	const res = await client.getEntries<ProjectSkeleton>({
		"fields.slug": slug,
		content_type: "projects",
	})

	if (res.items.length < 1) return null

	const f = res.items[0].fields

	return {
		title: f.title,
		description: f.description,
		thumbnail: f.thumbnail,
		githubLink: f.githubLink ?? null,
		projectLink: f.projectLink ?? null,
		tags: f.tags,
		content: f.content,
		stack: f.stack ?? null,
	}
}
