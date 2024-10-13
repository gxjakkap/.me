'use client'

import { usePathname } from 'next/navigation'
import { Inter, Prompt } from 'next/font/google'

import Navbar from "@/components/navbar"

import "./globals.css"
import SiteFooter from "@/components/footer"

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: "--font-inter" })
const promptReg = Prompt({ subsets: ['thai'], display: 'swap', weight: '400', variable: "--font-prompt-regular" })
const promptMed = Prompt({ subsets: ['thai'], display: 'swap', weight: '500', variable: "--font-prompt-medium" })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname()
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${promptReg.variable} ${promptMed.variable} antialiased flex flex-col flex-grow bg-[#f2f2f2] min-h-screen`}>
        <Navbar pathName={pathname} />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
