import Elysia from "elysia"
import { dr } from "../../../schemas"
import { GetStackModel } from "./models"
import { getStackService } from "./services"

export const stackModule = new Elysia({ prefix: "/stack" }).get("/", () => getStackService(), {
	response: dr(GetStackModel.response),
})
