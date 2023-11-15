import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"
import overrideOptions from "../../lib/contentfulRendererOverride"
import { getPostData } from "../../lib/contentful"
import RichText from '@madebyconnor/rich-text-to-jsx'
import Head from 'next/head'

import { runtimeConfig } from "../../lib/runtimeConfig"

export const config = runtimeConfig

export async function getServerSideProps({req, res, params}){
    const slug = params.slug
    const postData = await getPostData(slug)

    if (postData.error){
        if (postData.errorCode === 404){
            return {
                notFound: true
            }
        }
        else {
            throw new Error('Internal Server Error')
        }
    }

    return {
        props: {
            frontMatter: postData.frontMatter,
            content: postData.content,
            readTime: postData.readTime
        }
    }
}

function BadgeGroup({tagsArray}){
    return (
        <div className="mb-3 h-7 text-center">
            {tagsArray.map(tag => (
                <div key={tag} className="badge-primary badge mx-1 h-5 justify-center">{tag}</div>
            ))}
        </div>
    )
}

export default function BlogPage({frontMatter, content, readTime}){
    const localeDateString = (date) => {
        let epdate = new Date(date)
        return epdate.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "2-digit"
        })
    }
    const postDate = new Date(frontMatter.date)
    const postDateString = localeDateString(postDate)

    return (
        <main>
            <Head>
                <title>{`${frontMatter.title} - GuntxJakka`}</title>
                <meta charSet="UTF-8"/>
                <meta name="description" content={frontMatter.metaDesc} />
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="keywords" content={frontMatter.tags.toString()}/>
                <meta name="author" content="Jakkaphat Chalermphanaphan"/>
                <meta property="og:title" content={`${frontMatter.title}  - GuntxJakka`} />
                <meta property="og:description" content={frontMatter.metaDesc}  />
                <meta property="og:type" content="blog" />
                <meta property="og:image" content={frontMatter.socialImage} />
                <meta property="og:site_name" content="GuntxJakka" />
                <meta property="og:description" content={frontMatter.metaDesc} />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content={`${frontMatter.title}  - GuntxJakka`} />
                <meta name="twitter:description" content={frontMatter.metaDesc} />
                <meta name="twitter:site" content="@GuntxJakka" />
                <meta name="twitter:image" content={frontMatter.socialImage} />
            </Head>
            <NavBar />
            <div className="w-full">
                <div className="mx-auto max-w-screen-md px-4 py-6 sm:px-6 sm:py-10 md:py-16 lg:px-8 lg:py-20">
                    <div className="mb-10">
                        <div className="mx-auto">
                            <h1 className="mb-2 text-center text-5xl font-bold sm:text-3xl md:text-5xl lg:text-5xl">{frontMatter.title}</h1>
                            <h3 className="mt-5 text-center text-lg sm:text-lg md:text-xl lg:text-xl">{postDateString}</h3>
                            <h3 className="mb-5 text-center text-base sm:text-base md:text-base lg:text-base">{readTime}</h3>
                        </div>
                        <BadgeGroup className="text-center" tagsArray={frontMatter.tags} />
                        <picture><img className="mx-auto content-center rounded-xl" src={frontMatter.socialImage} alt="Blog Thumbnail"/></picture>
                    </div>
                    <article className="text-base-content lg:mt-20">
                        <RichText 
                            richText={content} 
                            overrides={overrideOptions}
                        />
                    </article>
                </div>
            </div>
            <Footer />
        </main>
    )
}