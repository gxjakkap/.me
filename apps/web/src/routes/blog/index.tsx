import { BookOpenIcon } from "@phosphor-icons/react"
import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { createFileRoute } from "@tanstack/react-router"
import { BlogList } from "../../components/blog/list"
import { BlogListLoading } from "../../components/blog/list-loading"
import { PAGE_SIZE, Pager, validatePageSearch } from "../../components/pager"
import { api, unwrap } from "../../lib/api"
import { PAGE_META } from "../../lib/meta"

export const Route = createFileRoute("/blog/")({
	validateSearch: validatePageSearch,
	head: () => ({ meta: PAGE_META["/blog"] }),
	component: BlogHome,
})

function BlogHome() {
	const { page = 1 } = Route.useSearch()
	const { data, isError, isLoading } = useQuery({
		queryKey: ["blog-list", page],
		queryFn: () => unwrap(api.content.blog.list.get({ query: { page, limit: PAGE_SIZE } })),
		placeholderData: keepPreviousData,
	})

	return (
		<main className="mx-auto flex w-3/4 grow flex-col pb-28 pt-4 lg:ml-[25%] lg:mr-0 lg:mt-14 lg:w-1/2 lg:pt-10">
			<h1 className="flex gap-x-1 text-center font-inter text-4xl font-medium lg:mt-4 lg:text-left lg:text-3xl">
				My Blog <BookOpenIcon size={36} className="pt-1" />
			</h1>
			<div className="flex w-full">
				{isLoading ? (
					<BlogListLoading />
				) : isError || !data ? (
					<p className="mt-10 font-inter">Error loading data.</p>
				) : data.items.length === 0 ? (
					<p className="mt-10 font-inter">No posts here.</p>
				) : (
					<BlogList data={data.items} />
				)}
			</div>
			{data && <Pager to="/blog" page={page} totalPages={data.totalPages} />}
		</main>
	)
}
