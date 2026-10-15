import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react"
import { Link } from "@tanstack/react-router"

export const PAGE_SIZE = 5

// route validateSearch: ?page=N, omitted (not "1") on the first page
export const validatePageSearch = (search: Record<string, unknown>): { page?: number } => {
	const page = Math.floor(Number(search.page))
	return page > 1 ? { page } : {}
}

const linkClass = "flex items-center gap-x-1 text-[#313638] hover:underline dark:text-[#e0e0e0]"

export const Pager = ({ to, page, totalPages }: { to: "/blog" | "/project"; page: number; totalPages: number }) => {
	if (totalPages <= 1) return null
	return (
		<nav className="mt-8 flex items-center justify-between font-inter text-[#525a5e] dark:text-[#a0a8ab]">
			{page > 1 ? (
				<Link to={to} search={page === 2 ? {} : { page: page - 1 }} className={linkClass}>
					<CaretLeftIcon aria-hidden />
					<span>Newer</span>
				</Link>
			) : (
				<span />
			)}
			<span>
				Page {page} of {totalPages}
			</span>
			{page < totalPages ? (
				<Link to={to} search={{ page: page + 1 }} className={linkClass}>
					<span>Older</span>
					<CaretRightIcon aria-hidden />
				</Link>
			) : (
				<span />
			)}
		</nav>
	)
}
