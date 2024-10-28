import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import Link from "next/link"

import stack from "@/data/techstack.json"
import { Metadata } from "next"
import { metadataTemplate } from "@/lib/meta"
import style from "./home.module.css"
import { Skills, StackImageWithDark } from "@/components/home/stack"
import { Education } from "@/components/home/edu"

const calcAge = () => {
  'use client'
  const birthDay = new Date('September 25, 2005, 00:00:00')
  const today = new Date()
  const diff = ((today.getTime() - birthDay.getTime()) / 1000) / (60*60*24)
  return Math.abs(Math.floor(diff / 365.25))
}

export const metadata: Metadata = metadataTemplate({
    title: "",
    description: "An aspiring Computer Engineering student.",
    addSiteNameInSocialTitle: false,
    isHome: true
})

export default function Home() {
  
  return (
    <main className="flex flex-col flex-grow mx-auto lg:ml-[25%] lg:mr-0 pt-4 lg:pt-10 lg:mt-14 w-3/4 lg:w-1/2">
      <h1 className="font-inter font-medium text-4xl lg:text-3xl lg:mt-4 xl:mt-20 text-center lg:text-left">Hi! I'm <span className={style.hometitlename}>j</span><span className={style.hometitlename}>a</span><span className={style.hometitlename}>k</span><span className={style.hometitlename}>k</span><span className={style.hometitlename}>a</span><span className={style.hometitlehand}>👋🏼</span></h1>
      <section className="flex flex-col pb-6 lg:pb-52 lg:gap-y-32 scroll-mt-24 lg:scroll-mt-48 xl:scroll-mt-56" id="main">
          <div className="flex flex-col-reverse lg:flex-row gap-x-8">
            <div className="flex flex-col-reverse lg:flex-col my-8">
                <p className="font-inter">
                    &emsp;A <span>{calcAge()}</span>-year-old Computer Engineering student at <a href="https://kmutt.ac.th" target="_blank" rel="noopener,noreferrer" className="text-blue-500 hover:underline ">KMUTT</a>. I enjoy playing video games, programming, and photography. Over the years, I've worked on various projects, mainly focused on both frontend and backend development. I'm quite familiar with Tailwind CSS and currently learning frameworks like React. Additionally, I love creating Discord bots and experimenting with random tech projects.
                </p>
                <div className="flex mx-auto my-2 xl:mt-12 gap-x-6">
                    <button className="bg-[#3333331a] text-[#333333] hover:bg-[#33333333] dark:bg-[#e0e0e01a] dark:text-[#e0e0e0] dark:hover:bg-[#e0e0e033] border-0 rounded-lg cursor-pointer inline-block font-inter font-medium text-base leading-5 list-none m-0 px-3 py-3 text-center align-baseline whitespace-nowrap select-none touch-manipulation"><Link href={'/projects'}>What I did</Link></button>
                    <button className="bg-[#3333331a] text-[#333333] hover:bg-[#33333333] dark:bg-[#e0e0e01a] dark:text-[#e0e0e0] dark:hover:bg-[#e0e0e033]  border-0 rounded-lg cursor-pointer inline-block font-inter font-medium text-base leading-5 list-none m-0 px-3 py-3 text-center align-baseline whitespace-nowrap select-none touch-manipulation"><Link href={'/contact'}>Contact me</Link></button>
                </div>
            </div>
            <Image src="https://res.cloudinary.com/dynrld3nm/image/upload/f_auto,q_auto/guntxjakka.me/me_2024" width={"350"} height={"350"} alt="me" className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[350px] lg:h-[350px] mt-[18px] mx-auto drop-shadow-lg" />
          </div>
          <div className="flex flex-col mx-auto text-[#525a5e] text-sm text-center cursor-pointer">
            <Link href={"#more"}>
              <p className="font-inter text-[#313638] dark:text-[#e0e0e0]">Scroll down to learn more about me</p>
              <ChevronDoubleDownIcon className="w-7 mx-auto text-[#313638] dark:text-[#e0e0e0]" />
            </Link>
          </div>
      </section>
      <section className="flex flex-col-reverse lg:flex-row-reverse gap-x-8 pb-52 lg:pb-56 scroll-mt-14 lg:scroll-mt-48" id="more">
        <div className="flex flex-col gap-y-3">
          <h2 className="font-inter font-medium text-3xl mt-4 text-center lg:text-right">
            More about me🙋🏼‍♂️
          </h2>
          <p className="font-inter">&emsp;I was introduced to computer when I was a kid. And it sparked my interest in them ever since kindergarten. I was excited by flash games on Facebook, fascinated by how computers could do whatever you told them to.</p>
          <p className="font-inter">&emsp;In middle school, learning Scratch and Python sparked my interest in programming. In 11th grade, I built Parcetrace, learning full-stack development and UI design, and joined competitions. I also created projects like g;ode Project and Rankbot.</p>
          <p className="font-inter">&emsp;Now, I'm currently in a Computer Engineering program, exploring various fields and trying everything to figure out what my specialty is.</p>
        </div>
        <Image src="https://res.cloudinary.com/dynrld3nm/image/upload/f_auto,q_auto/guntxjakka.me/me-2.jpg" width={"350"} height={350} alt="me" className="w-[250px] lg:w-[350px] lg:h-[350px] aspect-square lg:mt-[65px] mx-auto drop-shadow-lg" />
      </section>
      <Education />
      <Skills data={stack} />
    </main>
  )
}
