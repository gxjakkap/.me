import { cache, Suspense } from "react"
import { Metadata } from "next"
import { FolderIcon } from "@heroicons/react/16/solid"

import { getAllProjects } from "@/lib/contentful"
import { ProjectListLoading } from "@/components/projects/home/loading"
import { ProjectList } from "@/components/projects/home/projects-list"

export const metadata: Metadata = {
    title: "projects - jakka",
    description: "list of projects by jakka. might or might not be useful.",
    authors: { name: "Jakkaphat Chalermphanaphan", url: "https://guntxjakka.me" },
    openGraph: {
        title: "projects - jakka",
        description: "list of projects by jakka. might or might not be useful.",
        type: "website",
        images: "https://res.cloudinary.com/dynrld3nm/image/upload/f_auto,q_auto/guntxjakka.me/me_2024",
        siteName: "jakka"
    },
    twitter: {
        card: "summary",
        title: "projects - jakka",
        description: "list of projects by jakka. might or might not be useful.",
        site: "@guntxjakka",
        images: "https://res.cloudinary.com/dynrld3nm/image/upload/f_auto,q_auto/guntxjakka.me/me_2024",
        
    }
}

const getData = cache(getAllProjects)

export default async function ProjectHome() {
    const data = await getData()
    return (
        <main className="flex flex-col flex-grow mx-auto lg:ml-[25%] lg:mr-0 pt-4 lg:pt-10 lg:mt-14 w-3/4 lg:w-1/2 pb-28">
            <h1 className="font-inter font-medium text-4xl lg:text-3xl lg:mt-4 text-center lg:text-left flex gap-x-2">My Projects <FolderIcon className="text-[#f7b81d] w-8" /></h1>
            <div className="flex w-full">
                <Suspense fallback={ProjectListLoading()}>
                    <ProjectList data={data} />
                </Suspense>
            </div>
        </main>
    )
}
