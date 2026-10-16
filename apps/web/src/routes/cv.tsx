import { createFileRoute } from "@tanstack/react-router"
import { MetaRedirect } from "../components/meta-redirect"

export const Route = createFileRoute("/cv")({
	component: CVRedirect,
})

function CVRedirect() {
	return <MetaRedirect dest="https://objects.guntxjakka.me/cv.pdf" />
}
