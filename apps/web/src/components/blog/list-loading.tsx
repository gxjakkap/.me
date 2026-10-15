export const BlogListLoading = () => (
	<div className="mt-10 flex w-full flex-col font-inter">
		{Array.from({ length: 4 }, (_, i) => (
			// biome-ignore lint/suspicious/noArrayIndexKey: static skeleton rows
			<div key={i} className="mt-4 flex animate-pulse flex-col gap-y-1">
				<div className="h-7 w-52 rounded-2xl bg-zinc-200" />
				<div className="h-4 w-48 rounded-2xl bg-zinc-200" />
				<div className="h-4 w-full rounded-2xl bg-zinc-200" />
				<hr className="mt-1 text-[#525a5e]" />
			</div>
		))}
	</div>
)
