import cors from "@elysiajs/cors"
import { env } from "@repo/env/api"
import { Elysia, redirect } from "elysia"
import { contentModule } from "./modules/content"
import { spotifyModules } from "./modules/spotify"

const app = new Elysia()
	.use(cors({ origin: env.NODE_ENV === "production" ? env.CORS_ORIGIN : true }))
	.get("/", () => redirect(env.WEB_BASE_URL))
	.use(spotifyModules)
	.use(contentModule)
	.listen(env.PORT)

export type App = typeof app
export type {
	BlogPostItem,
	GetBlogPostServiceResponse as BlogPost,
} from "./modules/content/blog/types"
export type {
	GetProjectServiceResponse as Project,
	ProjectItem,
} from "./modules/content/project/types"

console.log(`API running at ${app.server?.hostname}:${app.server?.port}`)
