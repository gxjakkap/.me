import { createFileRoute, notFound } from "@tanstack/react-router"
import { ContentLoading } from "../../components/content-loading"
import { ProjectContent } from "../../components/project/content-layout"
import { api } from "../../lib/api"
import { metadataTemplate } from "../../lib/meta"

export const Route = createFileRoute("/project/$slug")({
	loader: async ({ params }) => {
		const res = await api.content.project({ slug: params.slug }).get()
		if (res.error) throw res.error.status === 404 ? notFound() : res.error
		return res.data
	},
	head: ({ loaderData }) => ({
		meta: metadataTemplate({
			title: loaderData?.title ?? "not found",
			description: loaderData?.description ?? "",
			thumbnail: loaderData?.thumbnail,
			addSiteNameInSocialTitle: false,
		}),
	}),
	pendingComponent: ContentLoading,
	component: ProjectPage,
})

function ProjectPage() {
	return <ProjectContent data={Route.useLoaderData()} />
}
