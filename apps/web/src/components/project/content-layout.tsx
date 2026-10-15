"use client"

import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { ArrowSquareOutIcon, FolderIcon } from "@phosphor-icons/react"

import type { Project } from "api"
import { renderOptions } from "../../lib/contentful-renderer-override"

export const ProjectContent = ({ data }: { data: Project }) => {
	return (
		<article className="mx-auto flex w-3/4 grow flex-col pb-28 pt-4 lg:ml-[25%] lg:mr-0 lg:mt-14 lg:w-1/2 lg:pt-10">
			<div className="flex flex-col gap-y-4 lg:gap-y-2">
				<h1 className="text-center font-inter text-4xl font-medium text-[#313638] dark:text-[#e0e0e0] lg:mt-4 lg:text-left lg:text-3xl">
					{data.title}
				</h1>
				<img
					loading="lazy"
					alt="thumbnail"
					width={450}
					className="mx-auto my-2 bg-zinc-200 lg:mx-0"
					src={data.thumbnail || "https://cdn.statically.io/og/OOPS.jpg"}
				/>
				<div className="mx-auto my-2 flex gap-x-4 lg:mx-0">
					{data.githubLink && (
						<button
							type="button"
							className="m-0 inline-block cursor-pointer touch-manipulation select-none list-none  whitespace-nowrap rounded-lg border-0 bg-[#3333331a] p-3 text-center align-baseline font-inter text-base font-medium leading-5 text-[#333333] hover:bg-[#33333333] dark:bg-[#e0e0e01a] dark:text-[#e0e0e0] dark:hover:bg-[#e0e0e033]">
							<a href={data.githubLink} className="flex gap-x-1" target="_blank" rel="noopener noopener,noreferrer">
								{" "}
								<FolderIcon size={20} weight="fill" /> Repo
							</a>
						</button>
					)}
					{data.projectLink && (
						<button
							type="button"
							className="m-0 inline-block cursor-pointer touch-manipulation select-none list-none  whitespace-nowrap rounded-lg border-0 bg-[#3333331a] p-3 text-center align-baseline font-inter text-base font-medium leading-5 text-[#333333] hover:bg-[#33333333] dark:bg-[#e0e0e01a] dark:text-[#e0e0e0] dark:hover:bg-[#e0e0e033]">
							{/** biome-ignore lint/a11y/noAmbiguousAnchorText: <> */}
							<a href={data.projectLink} className="flex gap-x-1" target="_blank" rel="noopener noreferrer">
								<ArrowSquareOutIcon size={20} /> Link
							</a>
						</button>
					)}
				</div>
				<div className="font-inter text-base">{documentToReactComponents(data.content, renderOptions)}</div>
				{data.stack && (
					<div className="flex w-full flex-col gap-y-1">
						<h4 className="font-inter text-xl font-medium">Stack / Tools</h4>
						<div className="my-4 flex max-w-screen-sm flex-wrap gap-x-8 gap-y-6 md:max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-screen-2xl">
							{data.stack.map((ea) => (
								<div className="flex flex-col gap-y-1 font-inter" key={ea.name}>
									<img className="mx-auto max-w-12.5" src={ea.image} alt={`${ea.name} icon`} />
									<p className="text-center text-[#525a5e] dark:text-[#e0e0e0]">{ea.name}</p>
								</div>
							))}
						</div>
					</div>
				)}
			</div>
		</article>
	)
}
