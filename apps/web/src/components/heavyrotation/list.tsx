import { XIcon } from "@phosphor-icons/react"
import { useQuery } from "@tanstack/react-query"
import { useEffect, useRef, useState } from "react"
import { api, unwrap } from "../../lib/api"
import { HeavyRotationLoading } from "./loading"

type Track = NonNullable<Awaited<ReturnType<typeof fetchHeavyRotation>>>[number]

const fetchHeavyRotation = async () => (await unwrap(api.spotify.heavyrotation.get())).data.items

// spotify:track:<id>
const getTrackId = (spotifyUri: string) => spotifyUri.split(":")[2]

const TrackDialog = ({ track, onClose }: { track: Track | null; onClose: () => void }) => {
	const ref = useRef<HTMLDialogElement>(null)

	useEffect(() => {
		if (track) ref.current?.showModal()
		else ref.current?.close()
	}, [track])

	return (
		// biome-ignore lint/a11y/useKeyWithClickEvents: Esc is handled natively by <dialog>
		<dialog
			ref={ref}
			onClose={onClose}
			// click on the backdrop lands on the dialog element itself
			onClick={(e) => e.target === e.currentTarget && onClose()}
			className="m-auto aspect-square w-full max-w-md overflow-hidden rounded-lg bg-black p-0 text-white backdrop:bg-black/50">
			{track && (
				<div className="relative size-full">
					<div
						className="absolute inset-0 bg-cover bg-center"
						style={{ backgroundImage: `url('${track.image_link || "https://placehold.co/400"}')` }}
					/>
					<div className="absolute inset-0 bg-black/60" />
					<div className="relative z-10 flex h-full flex-col p-6">
						<div className="mb-4 flex items-center justify-between">
							<h2 className="font-inter text-xl font-bold text-[#e0e0e0]">{track.name}</h2>
							<button type="button" onClick={onClose} className="cursor-pointer text-[#e0e0e0]" aria-label="Close">
								<XIcon size={24} />
							</button>
						</div>
						<p className="text-[#e0e0e0]">by {track.artist}</p>
						<div className="grow" />
						<div className="pb-2 lg:pb-10">
							<iframe
								title={track.name}
								className="rounded-2xl"
								src={`https://open.spotify.com/embed/track/${getTrackId(track.uri)}`}
								width="100%"
								height="152"
								allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
								loading="lazy"
							/>
						</div>
					</div>
				</div>
			)}
		</dialog>
	)
}

export const HeavyRotationList = () => {
	const { data, isError, isLoading } = useQuery({ queryKey: ["heavy-rotation"], queryFn: fetchHeavyRotation })
	const [selected, setSelected] = useState<Track | null>(null)

	if (isLoading) return <HeavyRotationLoading />
	if (isError || !data)
		return (
			<p className="text-center font-inter lg:text-left">
				Error loading Jakka&apos;s heavy rotation. Please try again.
			</p>
		)

	return (
		<>
			<ol className="flex flex-col gap-y-2 pb-10">
				{data.map((track, i) => (
					<li key={track.uri}>
						<button
							type="button"
							className="cursor-pointer text-left font-inter hover:underline"
							onClick={() => setSelected(track)}>
							{i + 1}. {track.artist} - <span className="font-bold">{track.name}</span>
						</button>
					</li>
				))}
			</ol>
			<TrackDialog track={selected} onClose={() => setSelected(null)} />
		</>
	)
}
