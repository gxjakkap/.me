import { type TSchema, t } from "elysia"

export const ErrorModel = t.Object({
	code: t.Number(),
	message: t.String(),
	details: t.Optional(t.Any()),
})

export const dr = <T extends TSchema>(successShape: T) => ({
	200: successShape,
	400: ErrorModel,
	404: ErrorModel,
	500: ErrorModel,
})
