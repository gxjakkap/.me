import { createRootRoute, HeadContent, Outlet } from "@tanstack/react-router"
import { ThemeProvider } from "next-themes"
import SiteFooter from "../components/footer"
import Navbar from "../components/navbar"
import { NotFound } from "../components/not-found"

export const Route = createRootRoute({
	// unknown URLs and notFound() thrown from loaders (e.g. bad /blog/$slug) land here
	notFoundComponent: NotFound,
	component: () => (
		<ThemeProvider attribute="class" enableSystem={false}>
			<HeadContent />
			<Navbar />
			<div className="mt-12 flex flex-1 grow flex-col lg:mt-0">
				<Outlet />
			</div>
			<SiteFooter />
		</ThemeProvider>
	),
})
