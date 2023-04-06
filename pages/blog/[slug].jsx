import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"
import { renderMd } from '../../lib/md'
import { getPostData } from "../../lib/contentful"
import Head from 'next/head'

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

    const htmlArr = await Promise.all(postData.content.map(async (c) => {
        const htmlc = await renderMd(c.content[0].value)
        console.log(htmlc)
        return htmlc
    }))
    
    return {
        props: {
            frontMatter: postData.frontMatter,
            content: htmlArr,
            readTime: postData.readTime
        }
    }
}

function BadgeGroup({tagsArray}){
    return (
        <div className="text-center h-7 mb-3">
            {tagsArray.map(tag => (
                <div key={tag} className="badge badge-primary justify-center mx-1 h-5">{tag}</div>
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
                <article className="max-w-screen-md px-4 py-6 mx-auto sm:px-6 lg:px-8 sm:py-10 md:py-16 lg:py-18">
                    <div className="mb-10">
                        <div className="ml-auto mr-auto">
                            <h1 className="text-5xl sm:text-3xl md:text-5xl lg:text-5xl text-center mb-2 ">{frontMatter.title}</h1>
                            <h3 className="text-lg sm:text-lg md:text-xl lg:text-xl text-center mt-5">{postDateString}</h3>
                            <h3 className="text-base sm:text-base md:text-base lg:text-base text-center mb-5">{readTime}</h3>
                        </div>
                        <BadgeGroup className="text-center" tagsArray={frontMatter.tags} />
                        <picture><img className="rounded-xl scale-80 content-center ml-auto mr-auto" src={frontMatter.socialImage} alt="Blog Thumbnail"/></picture>
                    </div>
                    {content.map((paragraphcontent, k) => (
                        <>
                            <div className="text-neutral" key={k} dangerouslySetInnerHTML={{__html: paragraphcontent}}/>
                            <br />
                        </>
                        
                    ))}
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