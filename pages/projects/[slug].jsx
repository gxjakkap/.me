import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"
import GitHubIconForButton from '../../components/svgs/githubforbutton'
import { TechStackGridForProjectPage } from '../../components/grid/TechStack'
import { getProjectData } from '../../lib/contentful'
import overrideOptions from "../../lib/contentfulRendererOverride"
import RichText from '@madebyconnor/rich-text-to-jsx'
import Head from 'next/head'

export const getServerSideProps = async ({req, res, params}) => {
    const slug = params.slug
    const data = await getProjectData(slug)

    if (data.error){
        if (data.errorCode === 404){
            return {
                notFound: true
            }
        }
        else {
            throw new Error('Internal Server Error')
        }
    }

    const projectData = data.data

    return {
        props: {
            frontMatter: {
                title: projectData.title,
                metaTitle: projectData.title,
                metaDesc: projectData.description,
                socialImage: projectData.thumbnail,
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
                <h2 className="mt-10 text-center text-3xl sm:text-2xl md:text-3xl">Tech Stack</h2>
                <TechStackGridForProjectPage techStackDataArray={stack} />
            </div>
        )
    }
    else return <></>
}

function ButtonGroup({frontMatter}){
    if (frontMatter.projectLink && frontMatter.githubLink){
        return (
            <div className="mt-8 flex justify-center space-x-4 sm:mt-12 sm:space-x-4 md:space-x-6 lg:space-x-6">
                <button className="btn-primary btn-sm btn sm:btn-sm md:btn-md lg:btn-lg" onClick={() => openInNewTab(frontMatter.projectLink)}>Check it out here!</button>
                <button className="btn-sm btn bg-gray-900 text-gray-50  sm:btn-sm md:btn-md lg:btn-lg hover:bg-gray-800" onClick={() => openInNewTab(frontMatter.githubLink)}><GitHubIconForButton />GitHub</button>
            </div>
        )
    }
    else if (frontMatter.projectLink) {
            return (
                <div className="mt-8 flex justify-center space-x-4 sm:mt-12 sm:space-x-4 md:space-x-6 lg:space-x-6">
                    <button className="btn-primary btn-sm btn sm:btn-sm md:btn-md lg:btn-lg" onClick={() => openInNewTab(frontMatter.projectLink)}>Check it out here!</button>
                </div>
            )
        }
    else if (frontMatter.githubLink){
        return (
            <div className="mt-8 flex justify-center space-x-4 sm:mt-12 sm:space-x-4 md:space-x-6 lg:space-x-6">
                <button className="btn-sm btn bg-gray-900 text-gray-50  sm:btn-sm md:btn-md lg:btn-lg hover:bg-gray-800" onClick={() => openInNewTab(frontMatter.githubLink)}><GitHubIconForButton />GitHub</button>
            </div>
        )
    }
    else {
        return <></>
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
                <article className="mx-auto max-w-screen-md px-4 py-6 sm:px-6 sm:py-10 md:py-16 lg:px-8 lg:py-20">
                    <div className="mb-10">
                        <h1 className="mb-2 text-center text-5xl sm:text-3xl md:text-5xl lg:text-5xl">{frontMatter.title}</h1>
                        <h3 className="py-5 text-center text-lg sm:text-lg md:text-xl lg:text-xl">{frontMatter.metaDesc}</h3>
                        <BadgeGroup className="text-center" tagsArray={frontMatter.tags} />
                        <picture><img className="mx-auto content-center" src={frontMatter.thumbnail} alt="Project Thumbnail"/></picture>
                        <ButtonGroup frontMatter={frontMatter}/>
                    </div>
                    <div className="text-lg">
                        <RichText 
                            richText={content} 
                            overrides={overrideOptions}
                        />
                    </div>
                    <TechStackGrid stack={stack} />
                </article>
            </div>
            <Footer />
        </main>
    )
}