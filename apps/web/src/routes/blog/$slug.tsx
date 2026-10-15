import { createFileRoute, notFound } from "@tanstack/react-router"
import { BlogContent } from "../../components/blog/content-layout"
import { ContentLoading } from "../../components/content-loading"
import { api } from "../../lib/api"
import { metadataTemplate } from "../../lib/meta"

export const Route = createFileRoute("/blog/$slug")({
	loader: async ({ params }) => {
		const res = await api.content.blog({ slug: params.slug }).get()
		if (res.error) throw res.error.status === 404 ? notFound() : res.error
		return res.data
	},
	head: ({ loaderData }) => ({
		meta: metadataTemplate({
			title: loaderData?.frontMatter.title ?? "not found",
			description: loaderData?.frontMatter.metaDesc ?? "",
			thumbnail: loaderData?.frontMatter.socialImage,
			addSiteNameInSocialTitle: false,
		}),
	}),
	pendingComponent: ContentLoading,
	component: BlogPage,
})

function BlogPage() {
	return <BlogContent data={Route.useLoaderData()} />
}
