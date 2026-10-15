import { t } from "elysia"
import { RichTextDocument } from "../models"

export const BlogPostItem = t.Object({
	slug: t.String(),
	title: t.String(),
	metaDesc: t.String(),
	socialImage: t.String(),
	date: t.String(),
	tags: t.Array(t.String()),
})

export const GetBlogListModel = {
	query: t.Object({
		limit: t.Optional(t.Number()),
		page: t.Optional(t.Number()),
	}),
	response: t.Object({
		page: t.Number(),
		totalPages: t.Number(),
		items: t.Array(BlogPostItem),
	}),
}

export const GetBlogPostModel = {
	params: t.Object({
		slug: t.String(),
	}),
	response: t.Object({
		frontMatter: t.Omit(BlogPostItem, ["slug"]),
		readTime: t.String(),
		content: RichTextDocument,
	}),
}

export const getLatestBlogPostModel = {
	response: t.Object({
		slug: t.String(),
	}),
}
