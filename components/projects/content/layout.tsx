'use client'

import RichText from '@madebyconnor/rich-text-to-jsx'
import { FolderIcon, LinkIcon } from "@heroicons/react/16/solid"

import { ProjectData } from "@/lib/contentful"
import overrideOptions from "@/lib/contentfulRendererOverride"

export const ProjectContent = ({ data }: { data: ProjectData["data"] }) => {
    return (
        <article className="flex flex-col flex-grow mx-auto lg:ml-[25%] lg:mr-0 pt-4 lg:pt-10 lg:mt-14 w-3/4 lg:w-1/2 pb-28">
            <div className="flex flex-col gap-y-4 lg:gap-y-2">
                <h1 className="text-[#313638] font-inter font-medium text-4xl lg:text-3xl lg:mt-4 text-center lg:text-left">
                    {data?.title}
                </h1>
                <img width={450} className="max-w-screen my-2 mx-auto lg:mx-0" src={data?.thumbnail || "https://cdn.statically.io/og/OOPS.jpg"} alt="thumbnail" />
                <div className="flex mx-auto lg:mx-0 my-2 gap-x-4">
                    {(typeof data?.githubLink !== null) && (<button className="bg-[#3333331a] text-[#333333] border-0 rounded-lg cursor-pointer inline-block font-inter font-medium text-base leading-5 list-none m-0 px-3 py-3 text-center align-baseline whitespace-nowrap select-none touch-manipulation"><a href={data?.githubLink || "#"} className="flex gap-x-1" target='_blank' rel='noopener,noreferrer'> <FolderIcon className="w-5" /> Repo</a></button>)}
                    {(data?.projectLink) && (<button className="bg-[#3333331a] text-[#333333] border-0 rounded-lg cursor-pointer inline-block font-inter font-medium text-base leading-5 list-none m-0 px-3 py-3 text-center align-baseline whitespace-nowrap select-none touch-manipulation"><a href={data?.projectLink || "#"} className="flex gap-x-1" target='_blank' rel='noopener,noreferrer'><LinkIcon className="w-5" /> Link</a></button>)}
                </div>
                <div className="font-inter text-base-content">
                    <RichText richText={data?.content} overrides={overrideOptions}/>
                </div>
                {((typeof data?.stack !== undefined) && (typeof data?.stack !== null)) && (
                    <div className="flex flex-col w-full gap-y-1">
                        <h4 className="text-xl font-inter font-medium">Stack / Tools</h4>
                        <div className="flex gap-y-2 gap-x-6">
                            {data?.stack?.map(ea => (
                                <div className="font-inter flex flex-col gap-y-1">
                                    <img className="max-w-[50px] mx-auto" src={ea.image} alt={`${ea.name} icon`} />
                                    <p className="text-center text-[#525a5e]">{ea.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </article>
    )
}