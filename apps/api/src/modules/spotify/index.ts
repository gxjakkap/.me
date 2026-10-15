import Elysia from "elysia"
import { dr } from "../../schemas"
import { getHeavyRotation, getListeningToModel } from "./model"
import * as spotify from "./services"

export const spotifyModules = new Elysia({ prefix: "/spotify" })
	// CORS is handled by the cors() plugin in src/index.ts; an ACAO header here leaked to every route
	.headers({ "Referrer-Policy": "no-referrer" })
	.get(
		"/heavyrotation",
		async ({ status }) => {
			const res = await spotify.getHeavyRotation()
			if (res.error !== null) return status(500, { code: 500, message: `Internal Server Error: ${res.error}` })

			return { data: { items: res.data }, error: null }
		},
		{
			response: dr(getHeavyRotation.response),
		}
	)
	.get(
		"/listeningto",
		async ({ status }) => {
			const res = await spotify.getListeningTo()
			if (res.error !== null) return status(500, { code: 500, message: `Internal Server Error: ${res.error}` })

			return { data: res.data, error: null }
		},
		{
			response: dr(getListeningToModel.response),
		}
	)
