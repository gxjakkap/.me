import { useEffect, useState } from 'react'
import SpotifyIcon from './svgs/spotifyicon'
import {FBForFooter, YTForFooter, TwitterForFooter, TWTVForFooter, EmailForFooter, GitHubForFooter } from './svgs/footericons'

function getYear(){
    const today = new Date()
    return (2022 !== today.getFullYear()) ? (<span> - {today.getFullYear()} </span>) : (<span> </span>)
}

function truncateGitHash(hash) {
    return hash.substring(0, 7)
}
export default function Footer(){
    const [nowPlaying, setNowPlayingData] = useState(null)
    const [currentCommit, setCurrentCommit] = useState("")
    const [currentCommitMsg, setCurrentCommitMsg] = useState("")

    useEffect(() => {
        if (nowPlaying) return
        let apiOrigin = "https://guntxjakka.me"
        if (process.env.NODE_ENV == "development"){
            apiOrigin = window.location.origin
            console.log(window.location.origin)
        }
        fetch(`${apiOrigin}/api/listeningto`)
            .then(res => {
                res.json().then(bd => {
                    setNowPlayingData(bd)
                    console.log(bd)
                })
            })
    }, [nowPlaying])

    useEffect(() => {
        console.log(`ENV: ${process.env.NEXT_PUBLIC_VERCEL_ENV}`)
        console.log(`SHA: ${process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA}`)
        if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview' || process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'){
            setCurrentCommit(process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA)
            setCurrentCommitMsg(process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_MESSAGE)
        }
        else {
            setCurrentCommit('local')
        }
    }, [currentCommit])

    return (
        <footer className="footer bg-gray-800 p-10 text-slate-200">
            <div>
            <picture><img className="h-[2.6rem] w-[2.6rem]" alt="GuntxJakka's logo" src="https://res.cloudinary.com/dynrld3nm/image/upload/v1657915322/guntxjakka.me/logo_c2x50a.png"/></picture>
                <p>© 2022{getYear()} Jakkaphat Ch.</p>
                <p>Currently {(currentCommit !== 'local') ? 'at' : 'on'} <a className={`${currentCommitMsg ? "tooltip tooltip-top tooltip-primary" : ""} mt-[2px] hover:text-blue-500 hover:underline`} data-tip={currentCommitMsg} href={(currentCommit !== 'local') ? `https://github.com/gxjakkap/.me/commit/${currentCommit}` : 'https://youtu.be/BbeeuzU5Qc8'} target="_blank" rel="noreferrer">{truncateGitHash(currentCommit)}</a></p>
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
                <div className="mt-5 flex items-center">
                    <SpotifyIcon />
                    <div className="ml-1 flex flex-col">
                        <span className="footer-title mb-0">Now Playing</span>
                        <a className="tooltip tooltip-bottom tooltip-primary mt-[2px] text-base hover:text-blue-500 hover:underline" data-tip="Click to play on Spotify" href={nowPlaying.song_url} target="_blank" rel="noreferrer"><span className="font-bold">{nowPlaying.artist}</span> - {nowPlaying.title}</a>
                    </div>
                </div>
            }
        </footer>
    )
}