import type { Metadata } from "next"
import { NextRequest } from "next/server"

import { metadataTemplate } from "@/lib/meta"

export const dynamic = 'force-static'

export const metadata: Metadata = metadataTemplate({
    title: "projects",
    description: "list of projects by jakka. might or might not be useful.",
    addSiteNameInSocialTitle: true
})

export async function GET(req: NextRequest) {
    return Response.redirect(new URL(`${req.nextUrl.origin}/project`))
}