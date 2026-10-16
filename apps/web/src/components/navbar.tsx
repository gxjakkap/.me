import { CaretDownIcon, ListIcon, MoonIcon, SunIcon, XIcon } from "@phosphor-icons/react"
import { Link, type LinkProps, useLocation } from "@tanstack/react-router"
import { useTheme } from "next-themes"
import { useState } from "react"

type CurState = "home" | "more" | "edu" | "proj" | "skills" | "blog" | "contact" | null

const LINKS: { cur: CurState; label: string; to: LinkProps["to"]; hash?: string }[] = [
	{ cur: "home", label: "Home", to: "/", hash: "main" },
	{ cur: "more", label: "About", to: "/", hash: "more" },
	{ cur: "proj", label: "Projects", to: "/project" },
	{ cur: "blog", label: "Blog", to: "/blog" },
	{ cur: "contact", label: "Contact", to: "/contact" },
	{ cur: null, label: "CV", to: "/cv" },
]

function getCur(pathname: string, hash: string): CurState {
	if (pathname === "/") {
		if (hash === "education") return "edu"
		if (hash === "more") return "more"
		if (hash === "skills") return "skills"
		return "home"
	}
	if (pathname.startsWith("/project")) return "proj"
	if (pathname.startsWith("/blog")) return "blog"
	if (pathname.startsWith("/contact")) return "contact"
	return null
}

const Links = ({ onNavigate }: { onNavigate?: () => void }) => {
	const { pathname, hash } = useLocation()
	const cur = getCur(pathname, hash)
	return LINKS.map((l) => (
		<li key={l.label}>
			<Link
				className={`text-[#313638] dark:text-[#e0e0e0] ${cur === l.cur ? "underline decoration-1 underline-offset-4" : ""}`}
				to={l.to}
				hash={l.hash}
				onClick={onNavigate}>
				{l.label}
			</Link>
		</li>
	))
}

const ThemeToggle = ({ size }: { size: number }) => {
	const { resolvedTheme, setTheme } = useTheme()
	const isDark = resolvedTheme === "dark"
	return (
		<button
			type="button"
			className="cursor-pointer"
			aria-label="Toggle theme"
			onClick={() => setTheme(isDark ? "light" : "dark")}>
			{isDark ? (
				<SunIcon size={size} className="text-[#e0e0e0]" />
			) : (
				<MoonIcon size={size} className="text-[#313638]" />
			)}
		</button>
	)
}

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false)
	const closeMenu = () => setMenuOpen(false)

	return (
		<>
			<header className="fixed z-50 flex w-full bg-[#f2f2f2] pl-[85%] pt-6 text-[#313638] dark:bg-[#1a1a1a] dark:text-[#e0e0e0] md:hidden">
				<label className="relative z-40 cursor-pointer" htmlFor="mobile-menu">
					<input
						className="peer hidden"
						type="checkbox"
						id="mobile-menu"
						checked={menuOpen}
						onChange={(e) => setMenuOpen(e.target.checked)}
					/>
					<ListIcon size={32} className="text-[#313638] dark:text-[#e0e0e0]" />
					<div className="fixed inset-0 z-40 hidden size-full bg-black/50 backdrop-blur-sm peer-checked:block">
						&nbsp;
					</div>
					<div className="fixed right-0 top-0 z-40 size-full translate-x-full overflow-y-auto overscroll-y-none transition duration-500 peer-checked:translate-x-0">
						<div className="float-right min-h-full w-[85%] bg-[#f2f2f2] px-6 pt-12 font-inter shadow-2xl dark:bg-[#1a1a1a]">
							<XIcon size={32} className="ml-auto text-[#313638] dark:text-[#e0e0e0]" />
							<div className="text-center text-lg font-bold">jakka</div>
							<div className="font-bold">Pages</div>
							<menu>
								<Links onNavigate={closeMenu} />
							</menu>
							<div className="mt-10 font-bold">ETC</div>
							<Link className="text-[#313638] dark:text-[#e0e0e0]" to="/etc/heavyrotation" onClick={closeMenu}>
								Heavy Rotation
							</Link>
							<div className="mt-32">
								<ThemeToggle size={32} />
							</div>
						</div>
					</div>
				</label>
			</header>
			<header className="fixed z-50 hidden w-full bg-[#f2f2f2] pb-3 pt-6 text-[#313638] dark:bg-[#1a1a1a] dark:text-[#e0e0e0] md:flex">
				<div className="ml-auto mr-[10%] flex">
					<ul className="flex list-none gap-x-5 font-inter text-base lg:text-[1rem]">
						<Links />
						<li className="group relative break-keep font-inter">
							<p className="flex items-center gap-x-1 text-[#313638] dark:text-[#e0e0e0]">
								ETC <CaretDownIcon size={16} className="text-[#313638] dark:text-[#e0e0e0]" />
							</p>
							<div className="absolute z-10 hidden p-2 group-hover:flex">
								<ul>
									<li>
										<Link to="/etc/heavyrotation">
											<div className="flex gap-x-1 text-[#313638] dark:text-[#e0e0e0]">
												<span>Heavy</span>
												<span>Rotation</span>
											</div>
										</Link>
									</li>
								</ul>
							</div>
						</li>
						<li>
							<ThemeToggle size={24} />
						</li>
					</ul>
				</div>
			</header>
		</>
	)
}
