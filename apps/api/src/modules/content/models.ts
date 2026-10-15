import type { Document } from "@contentful/rich-text-types"
import { t } from "elysia"

export const RichTextDocument = t.Unsafe<Document>(
	t.Object({
		nodeType: t.Literal("document"),
		data: t.Record(t.String(), t.Any()),
		content: t.Array(t.Any()),
	})
)
