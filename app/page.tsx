import About from "@/components/About"
import Blog from "@/components/Blog"
import Certifications from "@/components/Certification"
import Contact from "@/components/Contact"
import Experience from "@/components/Experience"
import Hero from "@/components/Hero"
import Profiles from "@/components/Profiles"
// import Projects from "@/components/Projects"
import Resume from "@/components/Resume"
import Skills from "@/components/Skills"
import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "Abhishek Yadav | Full-Stack Developer",
	description:
		"Professional portfolio of a skilled full-stack developer specializing in React, Next.js, and modern web technologies.",
}

export default function Home() {
	return (
		<main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
			<Hero />
			<About />
			<Skills />
			{/* <Projects /> */}
			<Experience />
			<Certifications />
			<Profiles />
			<Blog />
			<Resume />
			<Contact />
		</main>
	)
}
