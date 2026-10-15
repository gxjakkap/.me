import { env } from "@repo/env/api"
import { createClient } from "contentful"

export const client = createClient({
	space: env.CONTENTFUL_SPACE_ID,
	accessToken: env.CONTENTFUL_ACCESS_TOKEN,
	environment: "master",
})
