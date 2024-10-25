import { cache, Suspense } from "react"
import { Metadata } from "next"

import { getAllBlogInfo } from "@/lib/contentful"
import { BlogListLoading } from "@/components/blog/home/loading"
import { BlogContentList } from "@/components/blog/home/content-list"

export const metadata: Metadata = {
    title: "blog - jakka",
    description: "jakka's blog. might contains yapperino.",
    authors: { name: "Jakkaphat Chalermphanaphan", url: "https://guntxjakka.me" },
    openGraph: {
        title: "blog - jakka",
        description: "jakka's blog. might contains yapperino.",
        type: "website",
        images: "https://res.cloudinary.com/dynrld3nm/image/upload/f_auto,q_auto/guntxjakka.me/me_2024",
        siteName: "jakka"
    },
    twitter: {
        card: "summary",
        title: "blog - jakka",
        description: "jakka's blog. might contains yapperino.",
        site: "@guntxjakka",
        images: "https://res.cloudinary.com/dynrld3nm/image/upload/f_auto,q_auto/guntxjakka.me/me_2024",
        
    }
}

const getData = cache(getAllBlogInfo)

export default async function BlogHome() {
    const data = await getData()
    return (
        <main className="flex flex-col flex-grow mx-auto lg:ml-[25%] lg:mr-0 pt-4 lg:pt-10 lg:mt-14 w-3/4 lg:w-1/2 pb-28">
            <h1 className="font-inter font-medium text-4xl lg:text-3xl lg:mt-4 text-center lg:text-left">My Blog</h1>
            <div className="flex w-full">
                <Suspense fallback={BlogListLoading()}>
                    <BlogContentList data={data} />
                </Suspense>
            </div>
        </main>
    )
}
