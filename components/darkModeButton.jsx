import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

function MoonIcon () {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 mr-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
        </svg>
    )
}

function SunIcon () {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 mr-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
    )
}

export default function DarkModeButton(){
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
    return null
    }

    /* <select className="select w-full max-w-[6rem] select-ghost" value={theme} onChange={e => setTheme(e.target.value)}>
            <option value="light"><SunIcon /> Light</option>
            <option value="dark"><MoonIcon /> Dark</option>
        </select> */
    return (
        
        <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost rounded-btn normal-case">{(theme === "light") ? (<><SunIcon /> Light</>) : (<><MoonIcon /> Dark</>)}</label>
            <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                <li><a onClick={() => {setTheme('light')}} className="text-neutral"><SunIcon /> Light</a></li> 
                <li><a onClick={() => {setTheme('dark')}} className="text-neutral"><MoonIcon /> Dark</a></li>
            </ul>
        </div>
    )
}