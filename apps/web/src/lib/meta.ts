interface MetadataTemplateArguments {
	title: string
	description: string
	thumbnail?: string | null
	addSiteNameInSocialTitle: boolean
	isHome?: boolean
}

export type MetaTag = { title: string } | { name: string; content: string } | { property: string; content: string }

const SOCIAL_DEFAULT_IMAGE = "https://objects.guntxjakka.me/web/me-2026.webp"

// TanStack Router `head().meta` entries. Social crawlers don't run JS, so og/twitter tags only
// reach them if the page is prerendered; browsers still pick up title/description.
export const metadataTemplate = ({
	title,
	description,
	thumbnail,
	addSiteNameInSocialTitle,
	isHome,
}: MetadataTemplateArguments): MetaTag[] => {
	const pageTitle = isHome ? "jakka" : `${title} - jakka`
	const socialTitle = isHome ? "jakka" : addSiteNameInSocialTitle ? pageTitle : title
	const image = thumbnail || SOCIAL_DEFAULT_IMAGE

	return [
		{ title: pageTitle },
		{ name: "description", content: description },
		{ name: "author", content: "Jakkaphat Chalermphanaphan" },
		{ property: "og:title", content: socialTitle },
		{ property: "og:description", content: description },
		{ property: "og:type", content: "website" },
		{ property: "og:image", content: image },
		{ property: "og:site_name", content: "jakka" },
		{ name: "twitter:card", content: "summary" },
		{ name: "twitter:title", content: socialTitle },
		{ name: "twitter:description", content: description },
		{ name: "twitter:site", content: "@guntxjakka" },
		{ name: "twitter:image", content: image },
	]
}

// static pages' meta, shared by the routes' head() and the Cloudflare Worker (worker/index.ts)
export const PAGE_META = {
	"/": metadataTemplate({
		title: "",
		description: "An aspiring Computer Engineering student.",
		addSiteNameInSocialTitle: false,
		isHome: true,
	}),
	"/blog": metadataTemplate({
		title: "blog",
		description: "jakka's blog. might contains yapperino.",
		addSiteNameInSocialTitle: true,
	}),
	"/project": metadataTemplate({
		title: "projects",
		description: "list of projects by jakka. might or might not be useful.",
		addSiteNameInSocialTitle: true,
	}),
	"/etc/heavyrotation": metadataTemplate({
		title: "heavy rotation",
		description: "jakka's heavy rotation.",
		addSiteNameInSocialTitle: true,
	}),
}

export const NOT_FOUND_META = metadataTemplate({
	title: "not found",
	description: "This page could not be found",
	addSiteNameInSocialTitle: true,
})
