import fs from 'fs'
import { join } from 'path'
import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"
import { getParsedFileContentBySlug, renderMd } from '../../lib/md'
import GitHubIconForButton from '../../components/svgs/githubforbutton'
import Head from 'next/head'
import Image from 'next/image'

const POST_PATH = join(process.cwd(), '_projects')

export const getStaticPaths = async() => {
    const paths = fs
        .readdirSync(POST_PATH)
        .map((path) => path.replace(/\.mdx?$/, ''))
        .map((slug) => ({ params: { slug } }))

        return {
            paths,
            fallback: false
        }

}

export const getStaticProps = async({params}) => {
    const mdContent = getParsedFileContentBySlug(params.slug, POST_PATH)
    const html = await renderMd(mdContent.content)
    return {
        props: {
            frontMatter: mdContent.frontMatter,
            content: html
        }
    }
}

function openInNewTab(url){
    window.open(url, '_blank', 'noopener,noreferrer')
}

export function ButtonGroup({frontMatter}){
    if (frontMatter.projectLink && frontMatter.githubLink){
        return (
            <div className="flex justify-center mt-8 space-x-6 sm:mt-12">
                <button className="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg" onClick={() => openInNewTab(frontMatter.projectLink)}>Check it out here!</button>
                <button className="btn bg-gray-900 text-gray-50 hover:bg-gray-800 sm:btn-sm md:btn-md lg:btn-lg" onClick={() => openInNewTab(frontMatter.githubLink)}><GitHubIconForButton />GitHub</button>
            </div>
        )
    }
    else if (frontMatter.projectLink) {
            return (
                <div className="flex justify-center mt-8 space-x-6 sm:mt-12">
                    <button className="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg" onClick={() => openInNewTab(frontMatter.projectLink)}>Check it out here!</button>
                </div>
            )
        }
    else if (frontMatter.githubLink){
        return (
            <div className="flex justify-center mt-8 space-x-6 sm:mt-12">
                <button className="btn bg-gray-900 text-gray-50 hover:bg-gray-800 sm:btn-sm md:btn-md lg:btn-lg" onClick={() => openInNewTab(frontMatter.githubLink)}><GitHubIconForButton />GitHub</button>
            </div>
        )
    }
    else {
        return <></>
    }
}


export default function BlogPage({frontMatter, content}){
    return (
        <main>
            <Head>
                <title>{`${frontMatter.metaTitle} - GuntxJakka`}</title>
                <meta charset="UTF-8"/>
                <meta name="description" content={frontMatter.metaDesc} />
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="keywords" content={frontMatter.tags.toString()}/>
                <meta name="author" content="Jakkaphat Chalermphanaphan"/>
                <meta property="og:title" content={`${frontMatter.metaTitle}  - GuntxJakka`} />
                <meta property="og:description" content={frontMatter.metaDesc}  />
                <meta property="og:type" content="website" />
                <meta property="og:image" content={frontMatter.socialImage} />
                <meta property="og:site_name" content="GuntxJakka" />
                <meta property="og:description" content={frontMatter.metaDesc} />
                <meta name="twitter:card" content="summary_large_immage" />
                <meta name="twitter:title" content={`${frontMatter.metaTitle}  - GuntxJakka`} />
                <meta name="twitter:description" content={frontMatter.metaDesc} />
                <meta name="twitter:site" content="@GuntxJakka" />
                <meta name="twitter:image" content={frontMatter.socialImage} />
            </Head>
            <NavBar />
            <div className="w-full">
                <article className="max-w-screen-md px-4 py-6 mx-auto sm:px-6 lg:px-8 sm:py-10 md:py-16 lg:py-20">
                    <div className="mb-10">
                        <h1 className="text-5xl sm:text-3xl md:text-5xl lg:text-5xl text-center mb-2">{frontMatter.title}</h1>
                        <h3 className="text-lg sm:text-lg md:text-xl lg:text-xl text-center py-5">{frontMatter.metaDesc}</h3>
                        <Image className="scale-80 content-center ml-auto mr-auto" src={frontMatter.thumbnail} alt="Project Thumbnail"/>
                        <ButtonGroup frontMatter={frontMatter}/>
                    </div>
                    <div className="text-neutral" dangerouslySetInnerHTML={{__html: content}}/>
                </article>
            </div>
            <Footer />
        </main>
    )
}