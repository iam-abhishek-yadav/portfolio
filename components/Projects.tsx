"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const projects = [
	{
		title: "Decipher AI App",
		description:
			"Built a responsive UI with Next.js and integrated AI-powered error tracking with Sentry, reducing manual tracking time by 40%.",
		image: "/placeholder.svg?height=300&width=400",
		tech: ["Next.js", "ShadCN", "PostgreSQL", "Sentry"],
		link: "#",
	},
	{
		title: "Promptverse",
		description:
			"Developed secure authentication with NextAuth, improving sign-in reliability by 35%, and increased user engagement by 40%.",
		image: "/placeholder.svg?height=300&width=400",
		tech: ["Next.js", "NextAuth", "MongoDB"],
		link: "#",
	},
	{
		title: "E-commerce Platform",
		description:
			"Implemented a scalable e-commerce solution using microservices architecture, resulting in a 50% improvement in system reliability.",
		image: "/placeholder.svg?height=300&width=400",
		tech: ["Node.js", "React", "Docker", "Kubernetes"],
		link: "#",
	},
]

export default function Projects() {
	return (
		<section
			id="projects"
			className="py-20 px-4 max-w-6xl mx-auto">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}>
				<h2 className="text-3xl font-bold mb-6 text-center">
					Featured Projects
				</h2>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project, index) => (
						<motion.div
							key={project.title}
							className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}>
							<Image
								src={project.image || "/placeholder.svg"}
								alt={project.title}
								width={400}
								height={300}
								className="w-full h-48 object-cover"
							/>
							<div className="p-6">
								<h3 className="text-xl font-semibold mb-2">{project.title}</h3>
								<p className="text-gray-400 mb-4">{project.description}</p>
								<div className="flex flex-wrap gap-2 mb-4">
									{project.tech.map((tech) => (
										<span
											key={tech}
											className="bg-blue-500 text-white text-xs px-2 py-1 rounded">
											{tech}
										</span>
									))}
								</div>
								{/* <a
									href={project.link}
									className="text-blue-400 hover:text-blue-300 transition duration-300"
									target="_blank"
									rel="noopener noreferrer">
									View Project →
								</a> */}
							</div>
						</motion.div>
					))}
				</div>
			</motion.div>
		</section>
	)
}
