import fs from 'fs'
import { join } from 'path'
import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"
import { getParsedFileContentBySlug, renderMd } from '../../lib/md'
import Head from 'next/head'

const POST_PATH = join(process.cwd(), '_blog')

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



export default function BlogPage({frontMatter, content}){
    return (
        <main>
            <Head>
                <title>{`${frontMatter.metaTitle} - GuntxJakka`}</title>
                <meta charSet="UTF-8"/>
                <meta name="description" content={frontMatter.metaDesc} />
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="keywords" content={frontMatter.tags.toString()}/>
                <meta name="author" content="Jakkaphat Chalermphanaphan"/>
                <meta property="og:title" content={`${frontMatter.metaTitle}  - GuntxJakka`} />
                <meta property="og:description" content={frontMatter.metaDesc}  />
                <meta property="og:type" content="blog" />
                <meta property="og:image" content={frontMatter.socialImage} />
                <meta property="og:site_name" content="GuntxJakka" />
                <meta property="og:description" content={frontMatter.metaDesc} />
                <meta name="twitter:card" content="summary" />
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
                        <h3 className="text-lg sm:text-lg md:text-xl lg:text-xl text-center py-5">{frontMatter.date}</h3>
                        <picture><img className="scale-80 content-center ml-auto mr-auto" src={frontMatter.socialImage} alt="Blog Thumbnail"/></picture>
                    </div>
                    <div className="text-neutral" dangerouslySetInnerHTML={{__html: content}}/>
                </article>
            </div>
            <Footer />
            <style jsx>
                {`
                    a {
                        @apply underline
                    }
                `}
            </style>
        </main>
    )
}