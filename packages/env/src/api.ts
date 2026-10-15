/// <reference types="bun-types" />

import { createEnv } from "@t3-oss/env-core"
import { z } from "zod"

export const env = createEnv({
	server: {
		NODE_ENV: z.enum(["development", "production"]).default("development"),
		PORT: z.coerce.number().default(3000),
		CONTENTFUL_SPACE_ID: z.string().min(1),
		CONTENTFUL_ACCESS_TOKEN: z.string().min(1),
		SPOTIFY_CLIENT_ID: z.string().min(1),
		SPOTIFY_CLIENT_SECRET: z.string().min(1),
		SPOTIFY_REFRESH_TOKEN: z.string().min(1),
		WEB_BASE_URL: z.string().min(1),
		CORS_ORIGIN: z.string().min(1),
	},
	runtimeEnv: process.env,
	emptyStringAsUndefined: true,
})
