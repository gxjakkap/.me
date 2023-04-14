import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

export default function DarkModeButton(){
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
    return null
    }

    return (
        <select className="select w-full max-w-[6rem] select-ghost" value={theme} onChange={e => setTheme(e.target.value)}>
            <option value="lightTheme">Light</option>
            <option value="darkTheme">Dark</option>
        </select>
    )
}