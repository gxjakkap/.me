import type { Metadata } from "next"
import { NextRequest } from "next/server"

import { metadataTemplate } from "@/lib/meta"

export const dynamic = 'force-static'

export const metadata: Metadata = metadataTemplate({
    title: "heavy routation",
    description: "jakka's heavy rotation.",
    addSiteNameInSocialTitle: true
})

export async function GET(req: NextRequest) {
    return Response.redirect(new URL(`${req.nextUrl.origin}/etc/heavyrotation`))
}