import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"
import { getAllBlogInfo } from "../../lib/md"
import { join } from 'path'
import Head from "next/head"
import Link from "next/link"

const POST_PATH = join(process.cwd(), '_blog')

export async function getStaticProps() {
    const dataArray = await getAllBlogInfo(POST_PATH)
    return {
        props: {
            dataArray: dataArray,
        }
    }
}

const BlogGridElement = ({dataArray}) => {
    return (
        <div className="grid gap-6 mt-10 sm:mt-12 md:mt-16 sm:grid-cols-2 lg:grid-cols-3">
            {dataArray.map(data => (
                <div key={data.slug} className="card w-96 bg-base-100 shadow-xl">
                    <figure><picture><img src={data.socialImage} className="object-contain" alt="Thumbnail" /></picture></figure>
                    <div className="card-body">
                        <h2 className="card-title">{data.title}</h2>
                        <p>{data.metaDesc}</p>
                        <div className="card-actions justify-end"> 
                            <Link href={`/blog/${data.slug}`}><button className={"btn btn-primary"}>Read</button></Link>
                        </div>
                    </div>
              </div>
            ))}
    </div>
    )
}


export default function BlogHome({dataArray}){
    return (
        <main>
            <Head>
                <title>Blog - GuntxJakka</title>
                <meta charSet="UTF-8"/>
                <meta name="description" content="GuntxJakka's blog. Where he mostly document his life." />
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="keywords" content="guntxjakka, jakkaphat chalermphanaphan, jakkaphat, chalermphanaphan, gunt, gxjakkap, blog"/>
                <meta name="author" content="Jakkaphat Chalermphanaphan"/>
                <meta property="og:title" content="Blog - GuntxJakka" />
                <meta property="og:description" content="GuntxJakka's blog. Where he mostly document his life." />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://res.cloudinary.com/dynrld3nm/image/upload/v1657876472/guntxjakka.me/website_thumb.webp" />
                <meta property="og:site_name" content="GuntxJakka" />
                <meta property="og:description" content="GuntxJakka's blog. Where he mostly document his life." />
                <meta name="twitter:card" content="summary_large_immage" />
                <meta name="twitter:title" content="Blog - GuntxJakka" />
                <meta name="twitter:description" content="GuntxJakka's blog. Where he mostly document his life." />
                <meta name="twitter:site" content="@GuntxJakka" />
                <meta name="twitter:image" content="https://res.cloudinary.com/dynrld3nm/image/upload/v1657876472/guntxjakka.me/website_thumb.webp" />
            </Head>
            <NavBar />
            <div className="w-full">
                <div className="w-full mx-auto px-4 max-w-screen-lg xl:max-w-screen-xl py-14 sm:py-20 md:py-28 lg:py-32">
                    <div className="text-center">
                        <h2 className="text-4xl font-semibold tracking-tight text-neutral md:text-5xl">
                            My Blog
                        </h2>
                    </div>
                    <BlogGridElement dataArray={dataArray} />
                </div>
            </div>
            <Footer />
        </main>
    )
}