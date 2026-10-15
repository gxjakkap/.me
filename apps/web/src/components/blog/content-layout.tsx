import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import type { BlogPost } from "api"
import { renderOptions } from "../../lib/contentful-renderer-override"
import { localeDateString } from "../../lib/format"

export const BlogContent = ({ data }: { data: BlogPost }) => (
	<article className="mx-auto flex w-3/4 grow flex-col pb-28 pt-4 lg:ml-[25%] lg:mr-0 lg:mt-14 lg:w-1/2 lg:pt-10">
		<div className="flex flex-col gap-y-4 lg:gap-y-2">
			<h1 className="text-center font-inter text-4xl font-medium text-[#313638] dark:text-[#e0e0e0] lg:mt-4 lg:text-left lg:text-3xl">
				{data.frontMatter.title}
			</h1>
			<div className="flex flex-col gap-y-[0.1rem] text-center text-[#525a5e] dark:text-[#a0a8ab] lg:inline-flex lg:flex-row lg:gap-x-[0.4rem] lg:gap-y-0 lg:text-left">
				<span>Jakkaphat Chalermphanaphan</span>
				<span className="hidden lg:inline">-</span>
				<span>{localeDateString(data.frontMatter.date)}</span>
				<span className="hidden lg:inline">-</span>
				<span>{data.readTime}</span>
			</div>
			<img
				loading="lazy"
				alt="thumbnail"
				width={450}
				className="mx-auto my-2 bg-zinc-200 lg:mx-0"
				src={data.frontMatter.socialImage || "https://cdn.statically.io/og/OOPS.jpg"}
			/>
			<div className="font-inter text-base">{documentToReactComponents(data.content, renderOptions)}</div>
		</div>
	</article>
)
