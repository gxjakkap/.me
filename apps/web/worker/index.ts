import { treaty } from "@elysiajs/eden"
import type { App } from "api"
import { type MetaTag, metadataTemplate, NOT_FOUND_META, PAGE_META } from "../src/lib/meta"

type Meta = MetaTag[]

const API_CACHE_TTL = 300

const escapeAttr = (s: string) =>
	s.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")

const renderMeta = (meta: Meta) =>
	meta
		.map((m) =>
			"title" in m
				? `<title>${escapeAttr(m.title)}</title>`
				: `<meta ${"property" in m ? "property" : "name"}="${escapeAttr("property" in m ? m.property : m.name)}" content="${escapeAttr(m.content)}">`
		)
		.join("")

async function resolveMeta(env: Env, pathname: string): Promise<Meta | null> {
	const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname
	if (path in PAGE_META) return PAGE_META[path as keyof typeof PAGE_META]

	const match = path.match(/^\/(blog|project)\/([^/]+)$/)
	if (!match) return null
	const [, kind, rawSlug] = match
	const slug = decodeURIComponent(rawSlug)

	const api = treaty<App>(env.API_BASE_URL, {
		fetcher: ((url, init) =>
			fetch(url, { ...init, cf: { cacheTtl: API_CACHE_TTL, cacheEverything: true } })) as typeof fetch,
	})

	if (kind === "blog") {
		const { data } = await api.content.blog({ slug }).get()
		if (!data) return null
		return metadataTemplate({
			title: data.frontMatter.title,
			description: data.frontMatter.metaDesc,
			thumbnail: data.frontMatter.socialImage,
			addSiteNameInSocialTitle: false,
		})
	}
	const { data } = await api.content.project({ slug }).get()
	if (!data) return null
	return metadataTemplate({
		title: data.title,
		description: data.description,
		thumbnail: data.thumbnail,
		addSiteNameInSocialTitle: false,
	})
}

export default {
	async fetch(request, env) {
		const url = new URL(request.url)
		// SPA path
		const shell = await env.ASSETS.fetch(new URL("/", url))

		let meta: Meta | null
		try {
			meta = await resolveMeta(env, url.pathname)
		} catch (e) {
			console.error(e)
			return shell
		}

		return new HTMLRewriter()
			.on("head > title", {
				element(el) {
					el.remove()
				},
			})
			.on("head", {
				element(el) {
					el.append(renderMeta(meta ?? NOT_FOUND_META), { html: true })
				},
			})
			.transform(new Response(shell.body, { status: meta ? 200 : 404, headers: shell.headers }))
	},
} satisfies ExportedHandler<Env>
