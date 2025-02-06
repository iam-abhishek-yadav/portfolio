"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const projects = [
	{
		title: "Decipher AI App",
		description:
			"An advanced AI-powered error tracking tool that automatically analyzes session replays, identifies issues, and provides actionable insights to streamline debugging and improve software quality.",
		image: "/projects/decipher.png",
		tech: ["Next.js", "ShadCN", "PostgreSQL", "Sentry"],
		link: "#",
	},
	{
		title: "Promptverse",
		description:
			"A dynamic platform for discovering, sharing, and managing AI-generated prompts, enabling users to explore and refine their creative workflows with ease.",
		image: "/projects/promptverse.png",
		tech: ["Next.js", "NextAuth", "MongoDB"],
		link: "https://promptverse-mu.vercel.app/",
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
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
					{projects.map((project, index) => (
						<motion.div
							key={project.title}
							className="bg-gray-800 rounded-lg overflow-hidden shadow-lg flex flex-col"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}>
							<Image
								src={project.image}
								alt={project.title}
								width={400}
								height={300}
								className="w-full h-48 object-center object-cover"
							/>
							<div className="p-6 flex flex-col flex-grow">
								<h3 className="text-xl font-semibold mb-2">{project.title}</h3>
								<p className="text-gray-400 mb-4 flex-grow">
									{project.description}
								</p>
								<div className="flex flex-wrap gap-2 mb-4">
									{project.tech.map((tech) => (
										<span
											key={tech}
											className="bg-blue-500 text-white text-xs px-2 py-1 rounded">
											{tech}
										</span>
									))}
								</div>
								<a
									href={project.link !== "#" ? project.link : undefined}
									className={`text-blue-400 hover:text-blue-300 transition duration-300 ${
										project.link === "#" ? "opacity-50 cursor-not-allowed" : ""
									}`}
									target="_blank"
									rel="noopener noreferrer">
									View Project →
								</a>
							</div>
						</motion.div>
					))}
				</div>
			</motion.div>
		</section>
	)
}
