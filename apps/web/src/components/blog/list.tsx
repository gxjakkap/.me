import { Link } from "@tanstack/react-router"
import type { BlogPostItem } from "api"
import { formatTags, localeDateString } from "../../lib/format"

export const BlogList = ({ data }: { data: BlogPostItem[] }) => (
	<div className="mt-10 flex w-full flex-col gap-y-4 font-inter">
		{data.map((ea) => (
			<Link to="/blog/$slug" params={{ slug: ea.slug }} key={ea.slug}>
				<div className="mt-4 flex cursor-pointer flex-col gap-y-[0.35rem] lg:gap-y-1">
					<h3 className="text-xl font-medium text-[#313638] dark:text-[#e0e0e0] lg:text-2xl">{ea.title}</h3>
					<p className="text-sm text-[#525a5e] dark:text-[#a0a8ab] lg:text-base">
						{localeDateString(ea.date)} - {formatTags(ea.tags)}
					</p>
					<p className="text-sm text-[#525a5e] dark:text-[#a0a8ab] lg:text-base">{ea.metaDesc}</p>
					<hr className="mt-1 text-[#525a5e] dark:text-[#a0a8ab]" />
				</div>
			</Link>
		))}
	</div>
)
