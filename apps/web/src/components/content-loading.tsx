export const ContentLoading = () => (
	<article className="mx-auto flex w-3/4 grow flex-col pb-28 pt-4 lg:ml-[25%] lg:mr-0 lg:mt-14 lg:w-1/2 lg:pt-10">
		<div className="flex animate-pulse flex-col gap-y-4 lg:gap-y-2">
			<div className="mx-auto h-7 w-52 rounded-2xl bg-zinc-200 lg:mx-0" />
			<div className="mx-auto h-4 w-48 rounded-2xl bg-zinc-200 lg:mx-0" />
			<div className="mx-auto h-[150px] w-[250px] rounded-2xl bg-zinc-200 lg:mx-0 lg:h-[350px] lg:w-[450px]" />
			<div className="flex flex-col gap-y-2">
				{Array.from({ length: 11 }, (_, i) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: static skeleton rows
					<div key={i} className="mx-auto h-4 w-full rounded-2xl bg-zinc-200 lg:mx-0" />
				))}
			</div>
		</div>
	</article>
)
