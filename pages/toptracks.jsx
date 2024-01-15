import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Head from "next/head"
import Link from "next/link"
import { useEffect, useState } from "react"

const TopTracksGridElement = ({ tracks }) => {
    return (
        <div className="grid-container">
            {tracks.map((data, i) => (
                <Link key={data.uri} href={data.link}>
                    <div className="card w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={data.image_link} alt={`${data.album}'s album cover`} /></figure>
                        {/* <Image width={96} height={96} src={data.image_link} alt={`${data.album}'s album cover`} /> */}
                        <div className="card-body">
                            <h2 className="card-title text-3xl">#{(i + 1).toString()}</h2>
                            <p>{data.artist} - {data.name}</p>
                        </div>
                    </div>
                </Link>
                
            ))}
    </div>
    )
}

const LoadingSpiner = () => {
    return (
        <div className="mx-auto justify-center flex flex-col">
            <div className="grid-container">
                <div className="skeleton w-96 h-96"></div>
                <div className="skeleton w-96 h-96"></div>
                <div className="skeleton w-96 h-96"></div>
                <div className="skeleton w-96 h-96"></div>
                <div className="skeleton w-96 h-96"></div>
            </div>
        </div>
    )
}

export default function TopTracks(){
    const [tracks, setTracks] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        let apiOrigin = "https://guntxjakka.me"
        if (process.env.NODE_ENV == "development"){
            apiOrigin = window.location.origin
            console.log(window.location.origin)
        }
        fetch(`${apiOrigin}/api/toptracks`)
            .then(res => {
                res.json().then(ttd => {
                    console.log(ttd)
                    setTracks(ttd.items)
                    setIsLoading(false)
                })
            })
            .catch((err) => {
                console.log(err)
                setIsLoading(false)
                setIsError(true)
            })
    }, [])

    return (
        <main className="min-h-screen flex flex-col">
            <Head>
                <title>Top Tracks - GuntxJakka</title>
                <meta charSet="UTF-8"/>
                <meta name="description" content="GuntxJakka's top tracks on Spotify" />
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="keywords" content="guntxjakka, jakkaphat chalermphanaphan, jakkaphat, chalermphanaphan, gunt, gxjakkap"/>
                <meta name="author" content="Jakkaphat Chalermphanaphan"/>
                <meta property="og:title" content="Top Tracks - GuntxJakka" />
                <meta property="og:description" content="GuntxJakka's top tracks on Spotify" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://res.cloudinary.com/dynrld3nm/image/upload/v1657876472/guntxjakka.me/website_thumb.webp" />
                <meta property="og:site_name" content="GuntxJakka" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content="Top Tracks - GuntxJakka" />
                <meta name="twitter:description" content="GuntxJakka's top tracks on Spotify" />
                <meta name="twitter:site" content="@GuntxJakka" />
                <meta name="twitter:image" content="https://res.cloudinary.com/dynrld3nm/image/upload/v1657876472/guntxjakka.me/website_thumb.webp" />
            </Head>
            <NavBar />
            <div className="w-full mb-auto">
                <div className="mx-auto w-full max-w-screen-lg py-12 xl:max-w-screen-xl">
                    <div className="text-center">
                        <h2 className="text-4xl font-semibold tracking-tight text-neutral md:text-5xl">
                            <a href="https://open.spotify.com/user/21fpxgayxg7cu4zyesfrv3tya" className="link">Jakka</a>'s Top Tracks
                        </h2>
                        <h3 className="text-xl tracking-tight text-neutral md:text-2xl mt-2">Period: Short Term (4w)</h3>
                    </div>
                    { isLoading ? (<LoadingSpiner />) : isError ? (<p>Error.</p>) : (
                        <TopTracksGridElement tracks={tracks} />
                    ) }
                </div>
            </div>
            <Footer />
        </main>
    )
}