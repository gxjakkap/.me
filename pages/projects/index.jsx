import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"
import { getAllProjects } from "../../lib/contentful"
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"

import { runtimeConfig } from "../../runtimeConfig"

export const config = runtimeConfig

export const getServerSideProps = async () => {
    const dataArray = await getAllProjects()
    return {
        props: {
            dataArray: dataArray,
        }
    }
}

const BadgeGroup = ({tagsArray}) => {
    return (
        <div className="mb-5">
            {tagsArray.map(tag => (
                <div key={tag} className="badge-primary badge mx-1 h-5 justify-center">{tag}</div>
            ))}
        </div>
    )
}

const ProjectGridElement = ({dataArray}) => {
    return (
        <div className="grid-container">
            {dataArray.map(data => (
                <Link key={data.slug} href={`/projects/${data.slug}`}>
                    <div className="card w-96 bg-base-100 shadow-xl">                        
                        <Image src={data.thumbnail} width={384} height={216} alt={`${data.title}'s Thumbnail`} className="rounded-t-xl object-contain " />
                        <div className="card-body">
                            <h2 className="card-title">{data.title}</h2>
                            <p>{data.description}</p>
                            <BadgeGroup tagsArray={data.tags}/>
                        </div>
                    </div>
                </Link>
                
            ))}
    </div>
    )
}

export default function ProjectHome({dataArray}){
    return (
        <main>
            <Head>
                <title>Projects - GuntxJakka</title>
                <meta charSet="UTF-8"/>
                <meta name="description" content="GuntxJakka's project list. I spend a lot of time on these things so please check them out." />
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="keywords" content="guntxjakka, jakkaphat chalermphanaphan, jakkaphat, chalermphanaphan, gunt, gxjakkap, project, projects, programming"/>
                <meta name="author" content="Jakkaphat Chalermphanaphan"/>
                <meta property="og:title" content="Projects - GuntxJakka" />
                <meta property="og:description" content="GuntxJakka's project list. I spend a lot of time on these things so please check them out." />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://res.cloudinary.com/dynrld3nm/image/upload/v1657876472/guntxjakka.me/website_thumb.webp" />
                <meta property="og:site_name" content="GuntxJakka" />
                <meta property="og:description" content="GuntxJakka's project list. I spend a lot of time on these things so please check them out." />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content="Projects - GuntxJakka" />
                <meta name="twitter:description" content="GuntxJakka's project list. I spend a lot of time on these things so please check them out." />
                <meta name="twitter:site" content="@GuntxJakka" />
                <meta name="twitter:image" content="https://res.cloudinary.com/dynrld3nm/image/upload/v1657876472/guntxjakka.me/website_thumb.webp" />
            </Head>
            <NavBar />
            <div className="w-full">
                <div className="mx-auto w-full max-w-screen-lg px-4 py-14 sm:py-20 md:py-28 lg:py-32 xl:max-w-screen-xl">
                    <div className="text-center">
                        <h2 className="text-4xl font-semibold tracking-tight text-neutral md:text-5xl">
                            My Projects
                        </h2>
                    </div>
                    <ProjectGridElement dataArray={dataArray} />
                </div>
            </div>
            <Footer />
        </main>
    )
}