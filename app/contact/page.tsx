'use client'

import { useState } from "react"
import type { Metadata } from "next"

import { handleFormSubmit } from "./actions"
import { ContactForm } from "@/components/contact/contact-form"

/* export const metadata: Metadata = {
    title: "contact - jakka",
    description: "Means of contact for jakka",
    authors: { name: "Jakkaphat Chalermphanaphan", url: "https://guntxjakka.me" },
    openGraph: {
        title: "contact - jakka",
        description: "Means of contact for jakka",
        type: "website",
        images: "https://res.cloudinary.com/dynrld3nm/image/upload/f_auto,q_auto/guntxjakka.me/me_2024",
        siteName: "jakka"
    },
    twitter: {
        card: "summary",
        title: "contact - jakka",
        description: "Means of contact for jakka",
        site: "@guntxjakka",
        images: "https://res.cloudinary.com/dynrld3nm/image/upload/f_auto,q_auto/guntxjakka.me/me_2024",
        
    }
} */

export default function Contact() {
    const [turnstileStatus, setTurnstileStatus] = useState<"success" | "error" | "expired" | "required">("required")
    const [formStatus, setFormStatus] = useState<"success" | "failed" | "pending" | "loading">("pending")
    
    return (
        <main className="flex flex-col flex-grow mx-auto lg:ml-[25%] lg:mr-0 mt-12 w-3/4 lg:w-1/2">
            <h1 className="font-inter font-medium text-4xl lg:text-3xl mt-4 text-center lg:text-left">Contact me📥</h1>
            <div className="flex flex-col mt-2">
                {(formStatus === "pending") && <ContactForm sa={handleFormSubmit} stts={setTurnstileStatus} />}
                {(formStatus === "success")}
            </div>
        </main>
    )
}