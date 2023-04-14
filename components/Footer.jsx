import { useEffect, useState } from 'react'
import SpotifyIcon from './svgs/spotifyicon'
import {FBForFooter, YTForFooter, TwitterForFooter, TWTVForFooter, EmailForFooter, GitHubForFooter } from './svgs/footericons'

function getYear(){
    const today = new Date()
    return (2022 !== today.getFullYear()) ? (<span> - {today.getFullYear()} </span>) : (<span> </span>)
}

export default function Footer(){
    const [nowPlaying, setNowPlayingData] = useState(null)
    useEffect(() => {
        if (nowPlaying) return
        let apiOrigin = "https://www.guntxjakka.me"
        if (process.env.NODE_ENV == "development"){
            apiOrigin = "http://localhost:3000"
        }
        fetch(`${apiOrigin}/api/listeningto`)
            .then(res => {
                res.json().then(bd => {
                    setNowPlayingData(bd)
                    console.log(bd)
                })
            })
    }, [])
    return (
        <footer className="footer p-10 bg-neutral dark:bg-base-100 text-neutral-content dark:text-neutral">
            <div>
            <picture><img className="w-[2.6rem] h-[2.6rem]" alt="GuntxJakka's logo" src="https://res.cloudinary.com/dynrld3nm/image/upload/v1657915322/guntxjakka.me/logo_c2x50a.png"/></picture>
                <p>© 2022{getYear()}- GuntxJakka</p>
            </div> 
            <div>
                <span className="footer-title">Links</span> 
                <div className="grid grid-flow-col gap-4">
                    <a href="https://github.com/gxjakkap"><GitHubForFooter/></a> 
                    <a href="https://fb.me/guntchalermphanaphan"><FBForFooter/></a> 
                    <a href="https://youtube.com/channel/UCuhb0ovLdYPxw-K0a6d3Dzw"><YTForFooter/></a> 
                    <a href="https://twitter.com/guntxjakka"><TwitterForFooter/></a>
                    <a href="https://twitch.tv/guntxjakka"><TWTVForFooter/></a>
                    <a href="mailto:gunt@guntxjakka.me"><EmailForFooter/></a>
                </div>
            </div>
            {(nowPlaying && nowPlaying.artist !== "") && 
                <div className="flex mt-5 items-center">
                    <SpotifyIcon />
                    <div className="flex flex-col ml-1">
                        <span className="footer-title mb-0">Now Playing</span>
                        <a className="text-md promptfont hover:underline hover:text-blue-500 mt-[2px]" href={nowPlaying.song_url}><span className="font-bold">{nowPlaying.artist}</span> - {nowPlaying.title}</a>
                    </div>
                </div>
            }
        </footer>
    )
}