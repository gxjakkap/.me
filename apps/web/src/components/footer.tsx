import { useQuery } from "@tanstack/react-query"
import { api } from "../lib/api"

export default function SiteFooter() {
	const {
		data: npData,
		isError: npError,
		isLoading: npLoading,
	} = useQuery({
		queryKey: ["now-playing"],
		queryFn: async () => {
			const res = await api.spotify.listeningto.get()
			if (res.status !== 200 || !res.data) {
				throw new Error()
			}
			return res.data.data
		},
	})

	return (
		<footer className="mx-auto flex w-1/2 flex-col pb-5 text-[#a5a5a5] dark:text-zinc-500 lg:flex-row">
			<span className="mx-auto lg:ml-0 lg:mr-auto">jakka - 2026</span>
			{!npError && !npLoading && npData && npData.title.length > 0 && (
				<div className="font-inter hover:underline">
					<a
						href={npData.song_url}
						target="blank"
						rel="noopener,noreferrer"
						className="flex flex-col gap-x-[0.2rem] text-center lg:flex-row">
						<div>listening to</div>
						<div>
							{npData.title} by {npData.artist}
						</div>
					</a>
				</div>
			)}
			<div className="mx-auto flex gap-x-3 font-inter underline lg:ml-auto lg:mr-0">
				<a href="https://linkedin.com/in/jchalermphanaphan" target="_blank" rel="noopener noopener,noreferrer">
					linkedin
				</a>
				<a href="https://github.com/gxjakkap" target="_blank" rel="noopener noopener,noreferrer">
					github
				</a>
				<a href="https://tree.guntxjakka.me/" target="_blank" rel="noopener noopener,noreferrer">
					links
				</a>
			</div>
		</footer>
	)
}
