import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Head from 'next/head'
import Image from "next/image"
import { useRouter } from "next/router"

const NotFound = () => {
    const router = useRouter()
    return (
        <main className="flex h-screen w-full flex-col">
            <Head>
                <title>Not Found - GuntxJakka</title>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="author" content="Jakkaphat Chalermphanaphan"/>
                <meta property="og:title" content="Not Found - GuntxJakka"/>
                <meta property="og:type" content="blog" />
                <meta property="og:site_name" content="GuntxJakka" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content="Not Found - GuntxJakka"/>
                <meta name="twitter:site" content="@GuntxJakka" />
            </Head>
            <NavBar />
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                    <h1 className="mb-6 text-5xl font-bold">404</h1>
                    <Image src={'https://res.cloudinary.com/dynrld3nm/image/upload/v1666128740/guntxjakka.me/404_fdi8fx.jpg'} width="300" height="300" alt="404 cat meme"/>
                    <p className="py-6 text-xl">This page does not exist...</p>
                    <button className="btn-primary btn" onClick={() => {router.push('/')}}>Go back to homepage</button>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}

export default NotFound