import { DiscordLogoIcon, EnvelopeIcon, type Icon, InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react"
import { createFileRoute } from "@tanstack/react-router"
import { metadataTemplate } from "../lib/meta"

const CONTACTS: { label: string; href: string; icon: Icon }[] = [
	{ label: "@guntxjakka", href: "https://discordapp.com/users/480228633525354506", icon: DiscordLogoIcon },
	{ label: "@guntxjakka", href: "https://instagram.com/guntxjakka", icon: InstagramLogoIcon },
	{ label: "@jchalermphanaphan", href: "https://www.linkedin.com/in/jchalermphanaphan/", icon: LinkedinLogoIcon },
	{ label: "gunt@guntxjakka.me", href: "mailto:gunt@guntxjakka.me", icon: EnvelopeIcon },
]

export const Route = createFileRoute("/contact")({
	head: () => ({
		meta: metadataTemplate({
			title: "contact",
			description: "Means of contact for jakka",
			addSiteNameInSocialTitle: true,
		}),
	}),
	component: ContactPage,
})

function ContactPage() {
	return (
		<main className="mx-auto flex w-3/4 grow flex-col pt-4 lg:ml-[25%] lg:mr-0 lg:mt-14 lg:w-1/2 lg:pt-10">
			<h1 className="text-center font-inter text-4xl font-medium lg:text-left lg:text-3xl">Contact me 📥</h1>
			<div className="mt-7 mb-3 flex flex-col gap-y-2 lg:flex-row lg:gap-x-8">
				{CONTACTS.map(({ label, href, icon: Icon }) => {
					const external = href.startsWith("http")
					return (
						<a
							key={href}
							className="flex items-center gap-x-3 font-inter"
							href={href}
							{...(external && { target: "_blank", rel: "noopener noreferrer" })}>
							<Icon size={32} aria-hidden className="text-[#525a5e] dark:text-[#a0a8ab]" />
							<p>{label}</p>
						</a>
					)
				})}
			</div>
		</main>
	)
}
