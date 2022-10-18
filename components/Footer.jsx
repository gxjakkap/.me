import {FBForFooter, YTForFooter, TwitterForFooter, TWTVForFooter, EmailForFooter, GitHubForFooter} from './svgs/footericons'

function getYear(){
    const today = new Date()
    

    return (2022 !== today.getFullYear()) ? (<span> - {today.getFullYear()} </span>) : (<span> </span>)
}

export default function Footer(){
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
        </footer>
    )
}