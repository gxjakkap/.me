import Elysia from "elysia"
import { dr } from "../../../schemas"
import { GetProjectListModel, GetProjectModel } from "./models"
import { getProjectListService, getProjectService } from "./services"

export const projectModule = new Elysia({ prefix: "/project" })
	.get("/list", ({ query }) => getProjectListService(query), {
		query: GetProjectListModel.query,
		response: dr(GetProjectListModel.response),
	})
	.get(
		"/:slug",
		async ({ params, status }) => {
			const res = await getProjectService(params.slug)
			if (!res) return status(404, { code: 404, message: "Not Found" })
			return res
		},
		{
			params: GetProjectModel.params,
			response: dr(GetProjectModel.response),
		}
	)
