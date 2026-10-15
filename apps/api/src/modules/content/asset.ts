import type { Asset, UnresolvedLink } from "contentful"

export type LinkedAsset = Asset<undefined> | Asset<"WITHOUT_UNRESOLVABLE_LINKS"> | UnresolvedLink<"Asset"> | undefined

// asset URLs come back protocol-relative ("//images.ctfassets.net/..."); unresolved links give null
export const assetUrl = (a: LinkedAsset) => {
	const url = a && "fields" in a ? a.fields.file?.url : undefined
	return url ? `https:${url}` : null
}
