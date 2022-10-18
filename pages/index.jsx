import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import GitHubIconForButton from "../components/svgs/githubforbutton"
import Name from "../components/nameTypeWriter"
import EducationGrid from "../components/grid/Education"
import TechStackGrid from "../components/grid/TechStack"
import Head from "next/head"
import Link from "next/link"
import { fetchJSON } from "../lib/json"
import GetAge from "../lib/birthDay"
import {join} from 'path'

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


export default function Home(props) {
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
      </Head>
      <NavBar />
      <div className="w-full">
        <section className="home-bg">
          <div className="w-full py-10 text-center sm:py-20 md:py-25 lg:py-5 mx-auto px-4 max-w-screen-lg xl:max-w-screen-xl ">
            <picture>
              <img
              src="https://avatars.githubusercontent.com/u/55027998"
              alt="GuntxJakka's Portrait"
              className="justify-center ml-auto mr-auto mb-5 rounded-full scale-80"
              />
            </picture>
            <h1 className="text-4xl text-center dark:text-gray-400 font-bold tracking-tight text-neutral sm:text-5xl md:text-6xl">
              Hey, I'm <span className="text-primary"><Name alt="Gunt" /></span>
            </h1>
            <p className="max-w-xl mx-auto mt-6 text-center text-lg text-gray-500 dark:text-gray-400 md:max-w-2xl md:text-xl lg:text-2xl sm:mt-10">
              A lost student interested in coding, photographing and video editing.
              Scroll down to learn more about me
            </p>
            <div className="flex justify-center mt-8 space-x-4 sm:space-x-4 md:space-x-6 lg:space-x-6 sm:mt-12">
              <button className="btn btn-primary btn-sm sm:btn-sm md:btn-md lg:btn-lg"><Link href="/projects">My Projects</Link></button>
              <button className="btn bg-gray-900 text-gray-50 border-0 hover:bg-gray-800  btn-sm sm:btn-sm md:btn-md lg:btn-lg" onClick={() => openInNewTab('https://github.com/gxjakkap')}><GitHubIconForButton />My GitHub</button>
              <button className="btn btn-secondary btn-sm sm:btn-sm md:btn-md lg:btn-lg"><Link href="/blog">My Blog</Link></button>
              {/* <button className="btn bg-sky-800 btn-sm sm:btn-sm md:btn-md lg:btn-lg text-white"><Link href="/links">My Links</Link></button> */}
            </div>
            {/* <div className="flex justify-center mt-8 space-x-4 sm:space-x-4 md:space-x-6 lg:space-x-6 sm:mt-12 space-y-4 w-3/4 ml-auto mr-auto flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row">
              <button className="btn btn-primary btn-sm sm:btn-sm md:btn-md lg:btn-lg"><Link href="/projects">My Projects</Link></button>
              <button className="btn bg-gray-900 text-gray-50 border-0 hover:bg-gray-800  btn-sm sm:btn-sm md:btn-md lg:btn-lg" onClick={() => openInNewTab('https://github.com/gxjakkap')}><GitHubIconForButton />My GitHub</button>
              <button className="btn btn-secondary btn-sm sm:btn-sm md:btn-md lg:btn-lg"><Link href="/blog">My Blog</Link></button>
              <button className="btn bg-sky-800 btn-sm sm:btn-sm md:btn-md lg:btn-lg text-white"><Link href="/links">My Links</Link></button>
            </div> */}
          </div>
        </section>
        <section className="even:bg-primary">
          <div className="w-full mx-auto px-4 max-w-screen-lg xl:max-w-screen-xl py-14 sm:py-20 md:py-28 lg:py-32">
            <div className="text-center">
              <h2 className="text-4xl font-semibold tracking-tight text-gray-50 md:text-5xl">
                About Me.
              </h2>
            </div>
            <div className="grid gap-6 mt-10 text-lg text-gray-100 md:text-xl sm:mt-12 md:mt-16 sm:grid-cols-2 md:grid-cols-3">
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
                  Check it out {<Link href="/projects"><a className="underline">here</a></Link>}.
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
        <section className="home-bg">
          <div className="w-full mx-auto px-4 max-w-screen-lg xl:max-w-screen-xl py-14 sm:py-20 md:py-28 lg:py-32">
            <div className="text-center">
              <h2 className="text-4xl font-semibold tracking-tight text-gray-800 dark:text-neutral md:text-5xl">
              Education Background
              </h2>
            </div>
            <EducationGrid educationDataArray={props.educationDataArray}/>
          </div>
        </section>
        <section className="even:bg-primary">
          <div className="w-full mx-auto px-4 max-w-screen-lg xl:max-w-screen-xl py-14 sm:py-20 md:py-28 lg:py-32">
            <div className="text-center">
                <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
                  My Tech Stack
                </h2>
            </div>
            <TechStackGrid techStackDataArray={props.techStackDataArray} />
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
