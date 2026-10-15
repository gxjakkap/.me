import { t } from "elysia"
import { RichTextDocument } from "../models"

export const ProjectItem = t.Object({
	slug: t.String(),
	title: t.String(),
	description: t.String(),
	thumbnail: t.String(),
	tags: t.Array(t.String()),
	date: t.String(),
})

export const ProjectStackItem = t.Object({
	name: t.String(),
	image: t.String(),
})

export const GetProjectListModel = {
	query: t.Object({
		limit: t.Optional(t.Number()),
		page: t.Optional(t.Number()),
	}),
	response: t.Object({
		page: t.Number(),
		totalPages: t.Number(),
		items: t.Array(ProjectItem),
	}),
}

export const GetProjectModel = {
	params: t.Object({
		slug: t.String(),
	}),
	response: t.Object({
		title: t.String(),
		description: t.String(),
		thumbnail: t.String(),
		githubLink: t.Nullable(t.String()),
		projectLink: t.Nullable(t.String()),
		tags: t.Array(t.String()),
		content: RichTextDocument,
		stack: t.Nullable(t.Array(ProjectStackItem)),
	}),
}
