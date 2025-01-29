import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Abhishek Yadav - Full-Stack Developer Portfolio",
	description:
		"Professional portfolio of a skilled full-stack developer specializing in React, Next.js, and modern web technologies.",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html
			lang="en"
			className="scroll-smooth">
			<body className={`${inter.className} bg-gray-900 text-white`}>
				{children}
			</body>
		</html>
	)
}
