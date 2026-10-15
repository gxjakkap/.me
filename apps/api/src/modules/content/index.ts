import Elysia from "elysia"
import { blogModule } from "./blog"
import { projectModule } from "./project"
import { stackModule } from "./stack"

export const contentModule = new Elysia({ prefix: "/content" }).use(blogModule).use(projectModule).use(stackModule)
