import Elysia from "elysia"
import { blogModule } from "./blog"
import { projectModule } from "./project"

export const contentModule = new Elysia({ prefix: "/content" }).use(blogModule).use(projectModule)
