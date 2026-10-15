import Elysia from "elysia"
import { dr } from "../../../schemas"
import { GetBlogListModel, GetBlogPostModel, getLatestBlogPostModel } from "./models"
import { getBlogPostListService, getBlogPostService, getLatestBlogPostService } from "./services"

export const blogModule = new Elysia({ prefix: "/blog" })
	.get(
		"/list",
		async ({ query }) => {
			const res = await getBlogPostListService({ page: query.page, limit: query.limit })
			return res
		},
		{
			query: GetBlogListModel.query,
			response: dr(GetBlogListModel.response),
		}
	)
	.get(
		"/:slug",
		async ({ params, status }) => {
			const res = await getBlogPostService(params.slug)
			if (!res) return status(404, { code: 404, message: "Not Found" })
			return res
		},
		{
			params: GetBlogPostModel.params,
			response: dr(GetBlogPostModel.response),
		}
	)
	.get(
		"/latest",
		async ({ status }) => {
			const slug = await getLatestBlogPostService()
			if (!slug) return status(404, { code: 404, message: "Not Found" })
			return { slug }
		},
		{
			response: dr(getLatestBlogPostModel.response),
		}
	)
