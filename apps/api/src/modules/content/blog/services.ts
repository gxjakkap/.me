import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer"
import readingTime from "reading-time"
import { assetUrl } from "../asset"
import { client } from "../client"
import type {
	BlogPostSkeleton,
	GetBlogPostListServiceParams,
	GetBlogPostListServiceResponse,
	GetBlogPostServiceResponse,
} from "./types"

export async function getBlogPostListService({
	page = 1,
	limit = 10,
}: GetBlogPostListServiceParams): Promise<GetBlogPostListServiceResponse> {
	const res = await client.getEntries<BlogPostSkeleton>({
		content_type: "blogPost",
		limit: limit,
		skip: (page - 1) * limit,
		order: ["-fields.date"],
	})
	return {
		page,
		totalPages: Math.ceil(res.total / limit),
		items: res.items.map(({ fields: f }) => ({
			slug: f.slug,
			title: f.name,
			metaDesc: f.description,
			socialImage: assetUrl(f.thumbnailAsset),
			date: f.date,
			tags: f.tags,
		})),
	}
}

export async function getBlogPostService(slug: string): Promise<GetBlogPostServiceResponse | null> {
	const res = await client.getEntries<BlogPostSkeleton>({
		"fields.slug": slug,
		content_type: "blogPost",
	})

	if (res.items.length < 1) return null

	const { name, description, thumbnailAsset, date, tags, content } = res.items[0].fields

	const data = {
		title: name,
		metaDesc: description,
		socialImage: assetUrl(thumbnailAsset),
		date: date,
		tags: tags,
	}

	const stats = readingTime(documentToPlainTextString(content))

	return {
		frontMatter: data,
		content: content,
		readTime: stats.text,
	}
}

export async function getLatestBlogPostService(): Promise<string | null> {
	const res = await client.getEntries<BlogPostSkeleton>({
		content_type: "blogPost",
		limit: 1,
		order: ["-fields.date"],
	})

	return res.items[0]?.fields.slug ?? null
}
