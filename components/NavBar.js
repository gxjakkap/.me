import DarkModeButton from "./darkModeButton"
import Link from "next/link"
import styles from '../styles/Navbar.module.css'

const NavList = ({isMobile}) => {
    const Icons = {
        home: (<svg className={styles.dropdownIcons} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z"/></svg>),
        projects: (<svg className={styles.dropdownIcons} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M256 0v128h128L256 0zM224 128L224 0H48C21.49 0 0 21.49 0 48v416C0 490.5 21.49 512 48 512h288c26.51 0 48-21.49 48-48V160h-127.1C238.3 160 224 145.7 224 128zM272 416h-160C103.2 416 96 408.8 96 400C96 391.2 103.2 384 112 384h160c8.836 0 16 7.162 16 16C288 408.8 280.8 416 272 416zM272 352h-160C103.2 352 96 344.8 96 336C96 327.2 103.2 320 112 320h160c8.836 0 16 7.162 16 16C288 344.8 280.8 352 272 352zM288 272C288 280.8 280.8 288 272 288h-160C103.2 288 96 280.8 96 272C96 263.2 103.2 256 112 256h160C280.8 256 288 263.2 288 272z"/></svg>),
        blog: (<svg className={styles.dropdownIcons} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M448 336v-288C448 21.49 426.5 0 400 0H96C42.98 0 0 42.98 0 96v320c0 53.02 42.98 96 96 96h320c17.67 0 32-14.33 32-31.1c0-11.72-6.607-21.52-16-27.1v-81.36C441.8 362.8 448 350.2 448 336zM143.1 128h192C344.8 128 352 135.2 352 144C352 152.8 344.8 160 336 160H143.1C135.2 160 128 152.8 128 144C128 135.2 135.2 128 143.1 128zM143.1 192h192C344.8 192 352 199.2 352 208C352 216.8 344.8 224 336 224H143.1C135.2 224 128 216.8 128 208C128 199.2 135.2 192 143.1 192zM384 448H96c-17.67 0-32-14.33-32-32c0-17.67 14.33-32 32-32h288V448z"/></svg>),
        linktree: (<svg className={styles.dropdownIcons} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M285.4 197.1L191.3 244.1C191.8 248 191.1 251.1 191.1 256C191.1 260 191.8 263.1 191.3 267.9L285.4 314.9C302.6 298.2 326.1 288 352 288C405 288 448 330.1 448 384C448 437 405 480 352 480C298.1 480 256 437 256 384C256 379.1 256.2 376 256.7 372.1L162.6 325.1C145.4 341.8 121.9 352 96 352C42.98 352 0 309 0 256C0 202.1 42.98 160 96 160C121.9 160 145.4 170.2 162.6 186.9L256.7 139.9C256.2 135.1 256 132 256 128C256 74.98 298.1 32 352 32C405 32 448 74.98 448 128C448 181 405 224 352 224C326.1 224 302.6 213.8 285.4 197.1L285.4 197.1z"/></svg>)
    }

    const mobileNav = (
        <>
            <li><Link href="/"><a>{Icons.home}Home</a></Link></li>
            <li><Link href="/projects"><a>{Icons.projects}Projects</a></Link></li>
            <li><Link href="/blog"><a>{Icons.blog}Blog</a></Link></li>
            <li><Link href="/links"><a>{Icons.linktree}Links</a></Link></li>
        </>
    )

    const desktopNav  = (
        <>
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/projects"><a>Projects</a></Link></li>
            <li><Link href="/blog"><a>Blog</a></Link></li>
            <li><Link href="/links"><a>Links</a></Link></li>
        </>
    )

    return isMobile ? mobileNav : desktopNav
}

export default function NavBar(){
    return (
        <div className="navbar bg-gray-800 text-base-100 dark:text-neutral">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-normal dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-gray-800 dark:text-neutral">
                        <NavList isMobile={true} />
                    </ul>
                </div>
                <button className="btn btn-ghost normal-case text-xl"><Link href="/"><picture><img className="mt-1 w-11 h-11" alt="GuntxJakka's logo" src="https://res.cloudinary.com/dynrld3nm/image/upload/v1657915322/guntxjakka.me/logo_c2x50a.png"/></picture></Link></button>
            </div>
            {/* <div className="navbar-center ">
                
            </div> */}
            <div className="navbar-end hidden lg:flex">
                {/* <button><DarkModeButton/></button> */}
                <ul className="menu menu-horizontal p-0">
                    <NavList isMobile={false} />
                </ul>
            </div>
        </div>
    )
}