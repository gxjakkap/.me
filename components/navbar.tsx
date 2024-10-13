'use client'

import { useState, useEffect } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

/* const HamMenu = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
    )

} */

export default function Navbar({ pathName }: {pathName: string}){
    const [cur, setCur] = useState<"home" | "more" | "edu" | "proj" | "skills" | "blog" | "contact" | null>(null)

    useEffect(() => {
        if (pathName.startsWith("/#education")) setCur("edu")
        else if (pathName.startsWith("/#more")) setCur("more")
        else if (pathName.startsWith("/projects")) setCur("proj")
        else if (pathName.startsWith("/#skills")) setCur("skills")
        else if (pathName.startsWith("/blog")) setCur("blog")
        else if (pathName.startsWith("/contact")) setCur("contact")
        else if (pathName === "/") setCur("home")
        else setCur(null)
    }, [pathName])

    const Links = ({ cur }: {cur: string | null}) => {
        return (
            <>
                <li><Link className={`text-[#313638] ${cur === "home" ? "underline underline-offset-4 decoration-1" : ""}`} href="/">Home</Link></li>
                <li><Link className={`text-[#313638] ${cur === "more" ? "underline underline-offset-4 decoration-1" : ""}`} href="/#more">About</Link></li>
                <li><Link className={`text-[#313638] ${cur === "edu" ? "underline underline-offset-4 decoration-1" : ""}`} href="/#education">Education</Link></li>
                <li><Link className={`text-[#313638] ${cur === "skills" ? "underline underline-offset-4 decoration-1" : ""}`} href="/#skills">Skills</Link></li>
                <li><Link className={`text-[#313638] ${cur === "proj" ? "underline underline-offset-4 decoration-1" : ""}`} href="/projects">Projects</Link></li>
                <li><Link className={`text-[#313638] ${cur === "blog" ? "underline underline-offset-4 decoration-1" : ""}`} href="/blog">Blog</Link></li>
                <li><Link className={`text-[#313638] ${cur === "contact" ? "underline underline-offset-4 decoration-1" : ""}`} href="/contact">Contact</Link></li>
            </>
        )
    }

    return (
        <>
            <header className="flex md:hidden ml-auto mr-[10%] mt-6">
                <label className="relative z-40 cursor-pointer" htmlFor="mobile-menu">
                    <input className="peer hidden" type="checkbox" id="mobile-menu" />
                    <Bars3Icon className="size-8 text-[#313638]" />
                    <div className="fixed inset-0 z-40 hidden h-full w-full bg-black/50 backdrop-blur-sm peer-checked:block">
                        &nbsp;
                    </div>
                    <div className="fixed top-0 right-0 z-40 h-full w-full translate-x-full overflow-y-auto overscroll-y-none transition duration-500 peer-checked:translate-x-0">
                        <div className="float-right min-h-full w-[85%] bg-white px-6 pt-12 shadow-2xl font-inter">
                            <XMarkIcon className="ml-auto size-8 text-[#313638]" />
                            <div className="text-center font-bold text-lg">jakka  </div>
                            <div className="font-medium">Pages</div>
                            <menu>
                                <Links cur={cur} />
                            </menu>
                        </div>
                    </div>
                </label>

            </header>
            <header className="md:flex fixed w-full bg-[#f2f2f2] pb-3 z-50 hidden pt-6">
                <div className="flex ml-auto mr-[10%]">
                    <ul className="flex gap-x-5 list-none font-inter text-base lg:text-[1rem]">
                        <Links cur={cur} />
                    </ul>
                </div>
            </header>
        </>
    )
}