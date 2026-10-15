import { t } from "elysia"

export const StackItem = t.Object({
	name: t.String(),
	image: t.String(),
	image_dark: t.Nullable(t.String()),
	xp: t.Number(),
})

export const GetStackModel = {
	response: t.Object({
		front: t.Array(StackItem),
		back: t.Array(StackItem),
		tools: t.Array(StackItem),
	}),
}
