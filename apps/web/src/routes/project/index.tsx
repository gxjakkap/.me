import { FolderIcon } from "@phosphor-icons/react"
import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { createFileRoute } from "@tanstack/react-router"
import { PAGE_SIZE, Pager, validatePageSearch } from "../../components/pager"
import { ProjectList } from "../../components/project/list"
import { ProjectListLoading } from "../../components/project/list-loading"
import { api, unwrap } from "../../lib/api"
import { PAGE_META } from "../../lib/meta"

export const Route = createFileRoute("/project/")({
	head: () => ({ meta: PAGE_META["/project"] }),
	validateSearch: validatePageSearch,
	component: ProjectHome,
})

function ProjectHome() {
	const { page = 1 } = Route.useSearch()
	const { data, isError, isLoading } = useQuery({
		queryKey: ["project-list", page],
		queryFn: () => unwrap(api.content.project.list.get({ query: { page, limit: PAGE_SIZE } })),
		placeholderData: keepPreviousData,
	})

	return (
		<main className="mx-auto flex w-3/4 grow flex-col pb-28 pt-4 lg:ml-[25%] lg:mr-0 lg:mt-14 lg:w-1/2 lg:pt-10">
			<h1 className="flex gap-x-2 text-center font-inter text-4xl font-medium lg:mt-4 lg:text-left lg:text-3xl">
				My Projects <FolderIcon size={32} className="text-[#f7b81d]" />
			</h1>
			<div className="flex w-full">
				{isLoading ? (
					<ProjectListLoading />
				) : isError || !data ? (
					<p className="mt-10 font-inter">Error loading data.</p>
				) : data.items.length === 0 ? (
					<p className="mt-10 font-inter">No projects here.</p>
				) : (
					<ProjectList data={data.items} />
				)}
			</div>
			{data && <Pager to="/project" page={page} totalPages={data.totalPages} />}
		</main>
	)
}
