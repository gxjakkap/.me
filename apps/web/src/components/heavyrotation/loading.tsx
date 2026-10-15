export const HeavyRotationLoading = () => (
	<div className="flex animate-pulse flex-col gap-y-2">
		{Array.from({ length: 15 }, (_, i) => (
			// biome-ignore lint/suspicious/noArrayIndexKey: static skeleton rows
			<div key={i} className="h-5 w-52 rounded-2xl bg-zinc-200" />
		))}
	</div>
)
