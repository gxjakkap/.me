import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import GitHubIconForButton from "../components/svgs/githubforbutton"
import Name from "../components/nameTypeWriter"
import EducationGrid from "../components/grid/Education"
import TechStackGrid from "../components/grid/TechStack"
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import { useTheme } from 'next-themes'
import { fetchJSON } from "../lib/json"
import GetAge from "../lib/birthDay"
import {join} from 'path'

import styles from "../styles/Index.module.css"


const DataPath = join(process.cwd(), 'data')

export async function getStaticProps() {
  const educationDataArray = await fetchJSON(join(DataPath, 'education.json'))
  const techStackDataArray = await fetchJSON(join(DataPath, 'techstack.json'))
  return {
    props : {
      educationDataArray,
      techStackDataArray
    }
  }
}



function openInNewTab(url){
  window.open(url, '_blank', 'noopener,noreferrer')
}


export default function Home ({ educationDataArray, techStackDataArray}) {
  const { theme, setTheme } = useTheme()
  return (
    <main>
      <Head>
        <title>Home - GuntxJakka</title>
        <meta charSet="UTF-8"/>
        <meta name="description" content="Hi, My name is Gunt. I'm a student interested in overall programming and computer stuff. Currently located in Thailand." />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="keywords" content="guntxjakka, jakkaphat chalermphanaphan, jakkaphat, chalermphanaphan, gunt, gxjakkap"/>
        <meta name="author" content="Jakkaphat Chalermphanaphan"/>
        <meta property="og:title" content="Home - GuntxJakka" />
        <meta property="og:description" content="A lost student interested in coding, photographing and video editing." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://res.cloudinary.com/dynrld3nm/image/upload/v1657876472/guntxjakka.me/website_thumb.webp" />
        <meta property="og:site_name" content="GuntxJakka" />
        <meta property="og:description" content="A lost student interested in coding, photographing and video editing." />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Home - GuntxJakka" />
        <meta name="twitter:description" content="A lost student interested in coding, photographing and video editing." />
        <meta name="twitter:site" content="@GuntxJakka" />
        <meta name="twitter:image" content="https://res.cloudinary.com/dynrld3nm/image/upload/v1657876472/guntxjakka.me/website_thumb.webp" />
        <link href="https://mastodon.social/@jakka" rel="me" />
      </Head>
      <NavBar />
      <div className="w-full">
        <section className={`hero min-h-screen ${styles.homebg}`}>
            {/* eslint-disable-next-line tailwindcss/migration-from-tailwind-2*/}
            <div className="hero-overlay bg-opacity-5"></div>
            <div className="hero-content flex-col lg:flex-row">
              <Image src="https://avatars.githubusercontent.com/u/55027998" width={460} height={460} className="max-w-sm scale-75 rounded-lg shadow-2xl lg:transform-none" alt="GuntxJakka's Portrait" />
              <div className="ml-5">
                <h1 className="text-center text-4xl font-bold tracking-tight text-neutral sm:text-5xl md:text-6xl lg:text-left">
                  Hey, I'm <span className="text-primary"><Name /></span>
                </h1>
                <p className="py-6 text-lg">
                  A lost student interested in coding, photographing and video editing.
                  Scroll down to learn more about me
                </p>
                <div className="flex justify-center space-x-4 sm:mt-12 sm:space-x-4 md:space-x-6 lg:justify-start lg:space-x-6">
                  <button className="btn-primary btn-sm btn sm:btn-sm md:btn-md lg:btn-lg"><Link href="/projects">My Projects</Link></button>
                  <button className="btn-sm btn border-0 bg-gray-900 text-gray-50  sm:btn-sm md:btn-md lg:btn-lg hover:bg-gray-800" onClick={() => openInNewTab('https://github.com/gxjakkap')}><GitHubIconForButton />My GitHub</button>
                  <button className="btn-secondary btn-sm btn sm:btn-sm md:btn-md lg:btn-lg"><Link href="/blog">My Blog</Link></button>
                </div>
              </div>
            </div>
        </section>
        <section className=" even:bg-primary">
          <div className="mx-auto w-full max-w-screen-lg px-4 py-14 sm:py-20 md:py-28 lg:py-32 xl:max-w-screen-xl">
            <div className="text-center">
              <h2 className="text-4xl font-semibold tracking-tight text-gray-50 md:text-5xl">
                About Me.
              </h2>
            </div>
            <div className="mt-10 grid gap-6 text-lg text-gray-100 sm:mt-12 sm:grid-cols-2 md:mt-16 md:grid-cols-3 md:text-xl">
              <div>
                <p className="leading-relaxed">
                  Hey, I'm Jakkaphat "Gunt" Chalermphanaphan. A
                  <span> {GetAge()}</span>-year-old boy interested in coding and computer stuff. Currently
                  located in Thailand.
                </p>
              </div>
              <div>
                <p className="leading-relaxed">
                  I enjoy playing video games, programming and photographing.   
                  Programming has always piqued my curiosity. Particularly for web applications. 
                  I've worked on a variety of projects throughout the years. 
                  Check it out {<Link href="/projects" className="underline">here</Link>}.
                </p>
              </div>
              <div>
                <p className="leading-relaxed">
                  Now I'm learning and paving my way throught web development. Both
                  frontend and backend. Now I'm somewhat familiar with
                  <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> Tailwindcss </a>
                  and currently learning
                  <a href="https://vuejs.org/" target="_blank" rel="noreferrer"> Vue.js</a>, <a href="https://svelte.dev/" target="_blank" rel="noreferrer"> Svelte.js</a> and <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> React.js</a>. I also
                  love making Discord bot and some other random stuff.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={` ${styles.homebg}`}>
          <div className="mx-auto w-full max-w-screen-lg px-4 py-14 sm:py-20 md:py-28 lg:py-32 xl:max-w-screen-xl">
            <div className="text-center">
              <h2 className="tracking-tightmd:text-5xl text-4xl font-semibold">
              Education Background
              </h2>
            </div>
            <EducationGrid educationDataArray={educationDataArray}/>
          </div>
        </section>
        <section className="even:bg-primary">
          <div className="mx-auto w-full max-w-screen-lg px-4 py-14 sm:py-20 md:py-28 lg:py-32 xl:max-w-screen-xl">
            <div className="text-center">
                <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
                  My Tech Stack
                </h2>
            </div>
            <TechStackGrid techStackDataArray={techStackDataArray} theme={theme} />
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}