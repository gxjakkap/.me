'use client'

import { useState, useEffect, useRef, MutableRefObject } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
//import { usePathname } from "next/navigation"

export default function Navbar(){
    const [cur, setCur] = useState<"home" | "more" | "edu" | "proj" | "skills" | "blog" | "contact" | null>(null)
    /* const pathName = usePathname()

    useEffect(() => {
        if (pathName.startsWith("/#education")) setCur("edu")
        else if (pathName.startsWith("/#more")) setCur("more")
        else if (pathName.startsWith("/project")) setCur("proj")
        else if (pathName.startsWith("/#skills")) setCur("skills")
        else if (pathName.startsWith("/blog")) setCur("blog")
        else if (pathName.startsWith("/contact")) setCur("contact")
        else if (pathName === "/") setCur("home")
        else setCur(null)
    }, [pathName]) */

    const Links = ({ cur, menuRef }: {cur: string | null, menuRef: MutableRefObject<HTMLInputElement | null>}) => {
        const closeMenu = () => {(menuRef as MutableRefObject<HTMLInputElement>).current.checked = false}
        return (
            <>
                <li><Link className={`text-[#313638] ${cur === "home" ? "underline underline-offset-4 decoration-1" : ""}`} href="/" onClick={closeMenu}>Home</Link></li>
                <li><Link className={`text-[#313638] ${cur === "more" ? "underline underline-offset-4 decoration-1" : ""}`} href="/#more" onClick={closeMenu}>About</Link></li>
                <li><Link className={`text-[#313638] ${cur === "edu" ? "underline underline-offset-4 decoration-1" : ""}`} href="/#education" onClick={closeMenu}>Education</Link></li>
                <li><Link className={`text-[#313638] ${cur === "skills" ? "underline underline-offset-4 decoration-1" : ""}`} href="/#skills" onClick={closeMenu}>Skills</Link></li>
                <li><Link className={`text-[#313638] ${cur === "proj" ? "underline underline-offset-4 decoration-1" : ""}`} href="/project" onClick={closeMenu}>Projects</Link></li>
                <li><Link className={`text-[#313638] ${cur === "blog" ? "underline underline-offset-4 decoration-1" : ""}`} href="/blog" onClick={closeMenu}>Blog</Link></li>
                <li><Link className={`text-[#313638] ${cur === "contact" ? "underline underline-offset-4 decoration-1" : ""}`} href="/contact" onClick={closeMenu}>Contact</Link></li>
            </>
        )
    }

    const mobileMenuRef = useRef(null)

    return (
        <>
            <header className="flex md:hidden fixed z-50 w-full bg-[#f2f2f2] pt-6 pl-[85%]">
                <label className="relative z-40 cursor-pointer" htmlFor="mobile-menu">
                    <input className="peer hidden" type="checkbox" id="mobile-menu" ref={mobileMenuRef} />
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
                                <Links cur={cur} menuRef={mobileMenuRef} />
                            </menu>
                        </div>
                    </div>
                </label>

            </header>
            <header className="md:flex fixed w-full bg-[#f2f2f2] pb-3 z-50 hidden pt-6">
                <div className="flex ml-auto mr-[10%]">
                    <ul className="flex gap-x-5 list-none font-inter text-base lg:text-[1rem]">
                        <Links cur={cur} menuRef={mobileMenuRef} />
                    </ul>
                </div>
            </header>
        </>
    )
}