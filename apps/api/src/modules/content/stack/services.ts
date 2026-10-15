import type { Entry, UnresolvedLink } from "contentful"
import { assetUrl } from "../asset"
import { client } from "../client"
import type { GetStackServiceResponse, HomeSkillsSkeleton, StackItem, TechStackSkeleton } from "./types"

type LinkedStack =
	| Entry<TechStackSkeleton, undefined>
	| Entry<TechStackSkeleton, "WITHOUT_UNRESOLVABLE_LINKS">
	| UnresolvedLink<"Entry">
	| undefined

// Links to unpublished or deleted stacks (or their icons) come back unresolved
// (or undefined) and are dropped. Fetch with include: 2 so icons resolve.
export const toStackItems = (list: LinkedStack[] = []): StackItem[] =>
	list.flatMap((e) => {
		const image = e && "fields" in e ? assetUrl(e.fields.image) : null
		if (!e || !("fields" in e) || !image) return []
		return [{ name: e.fields.name, image, image_dark: assetUrl(e.fields.imageDark), xp: e.fields.xp }]
	})

export async function getStackService(): Promise<GetStackServiceResponse> {
	const res = await client.withoutUnresolvableLinks.getEntries<HomeSkillsSkeleton>({
		content_type: "homeSkills",
		limit: 1,
		include: 2,
	})
	const f = res.items[0]?.fields
	return { front: toStackItems(f?.front), back: toStackItems(f?.back), tools: toStackItems(f?.tools) }
}
