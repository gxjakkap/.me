import path, { join } from 'path'
import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"
import GitHubIconForButton from '../../components/svgs/githubforbutton'
import { TechStackGridForProjectPage } from '../../components/grid/TechStack'
import { fetchJSON } from '../../lib/json'
import Head from 'next/head'

const DataPath = join(process.cwd(), 'data')

export const getStaticPaths = async() => {
    const paths = []
    const data = await fetchJSON(join(DataPath, 'projects.json'))
    data.forEach(element => {
        paths.push({params: {slug: element.slug}})
    });
    return {
        paths,
        fallback: false
    }

}

export const getStaticProps = async({params}) => {
    const projectsDataArray = await fetchJSON(join(DataPath, 'projects.json'))
    const projectData = projectsDataArray.find(obj => obj.slug === params.slug)
    return {
        props: {
            frontMatter: {
                title: projectData.title,
                metaTitle: projectData.metatitle,
                metaDesc: projectData.metaDesc,
                socialImage: projectData.socialImage,
                thumbnail: projectData.thumbnail,
                githubLink: projectData.githubLink,
                projectLink: projectData.projectLink,
                tags: projectData.tags,
            },
            content: projectData.content,
            stack: projectData.stack
        }
    }
}

function openInNewTab(url){
    window.open(url, '_blank', 'noopener,noreferrer')
}

function TechStackGrid({stack}){
    if (stack){
        return (
            <div className="w-full">
                <h2 className="text-3xl sm:text-2xl md:text-3xl text-center mt-10">Tech Stack</h2>
                <TechStackGridForProjectPage techStackDataArray={stack} />
            </div>
        )
    }
    else return <></>
}

function ButtonGroup({frontMatter}){
    if (frontMatter.projectLink && frontMatter.githubLink){
        return (
            <div className="flex justify-center mt-8 space-x-4 sm:space-x-4 md:space-x-6 lg:space-x-6 sm:mt-12">
                <button className="btn btn-primary btn-sm sm:btn-sm md:btn-md lg:btn-lg" onClick={() => openInNewTab(frontMatter.projectLink)}>Check it out here!</button>
                <button className="btn bg-gray-900 text-gray-50 hover:bg-gray-800  btn-sm sm:btn-sm md:btn-md lg:btn-lg" onClick={() => openInNewTab(frontMatter.githubLink)}><GitHubIconForButton />GitHub</button>
            </div>
        )
    }
    else if (frontMatter.projectLink) {
            return (
                <div className="flex justify-center mt-8 space-x-4 sm:space-x-4 md:space-x-6 lg:space-x-6 sm:mt-12">
                    <button className="btn btn-primary btn-sm sm:btn-sm md:btn-md lg:btn-lg" onClick={() => openInNewTab(frontMatter.projectLink)}>Check it out here!</button>
                </div>
            )
        }
    else if (frontMatter.githubLink){
        return (
            <div className="flex justify-center mt-8 space-x-4 sm:space-x-4 md:space-x-6 lg:space-x-6 sm:mt-12">
                <button className="btn bg-gray-900 text-gray-50 hover:bg-gray-800  btn-sm sm:btn-sm md:btn-md lg:btn-lg" onClick={() => openInNewTab(frontMatter.githubLink)}><GitHubIconForButton />GitHub</button>
            </div>
        )
    }
    else {
        return <></>
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


export default function BlogPage({frontMatter, content, stack}){
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
                <meta property="og:type" content="website" />
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
                        <h3 className="text-lg sm:text-lg md:text-xl lg:text-xl text-center py-5">{frontMatter.metaDesc}</h3>
                        <BadgeGroup className="text-center" tagsArray={frontMatter.tags} />
                        <picture><img className="scale-80 content-center ml-auto mr-auto" src={frontMatter.thumbnail} alt="Project Thumbnail"/></picture>
                        <ButtonGroup frontMatter={frontMatter}/>
                    </div>
                    <div className="text-neutral">
                        {content}
                    </div>
                    <TechStackGrid stack={stack} />
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