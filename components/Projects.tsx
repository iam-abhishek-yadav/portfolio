"use client"

import { motion } from "framer-motion"

const projects = [
	{
		title: "AI Analytics Dashboard",
		description:
			"A comprehensive analytics platform that provides real-time insights and visualizations for business metrics, helping teams make data-driven decisions.",
		tech: ["Next.js", "TypeScript", "PostgreSQL", "FastAPI", "Zustand"],
		link: "#",
	},
	{
		title: "Promptverse",
		description:
			"A dynamic platform for discovering, sharing, and managing AI-generated prompts, enabling users to explore and refine their creative workflows with ease.",
		tech: ["Next.js", "NextAuth", "MongoDB"],
		link: "https://promptverse-mu.vercel.app/",
	},
]

const workInProgress = {
	title: "Mudra-X",
	description:
		"A work-in-progress Web3 wallet built with Next.js 15 and Radix UI. Currently focusing on secure key management and Solana blockchain integration, with plans to develop a sleek, accessible interface featuring advanced UI components like accordions, tooltips, and modals.",
	tech: ["Next.js 15", "TypeScript", "Solana Web3", "Zustand"],
	link: "https://mudra-x.vercel.app/",
}

export default function Projects() {
	return (
		<section
			id="projects"
			className="py-20 px-4 max-w-6xl mx-auto">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}>
				{/* Work in Progress Section */}
				<div className="mb-16">
					<h2 className="text-2xl font-bold mb-6 text-center text-blue-400">
						Work in Progress
					</h2>
					<motion.div
						className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-lg flex flex-col border-2 border-blue-500/50 shadow-blue-500/20"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						whileHover={{ 
							scale: 1.02,
							transition: { duration: 0.2 }
						}}
						whileTap={{ scale: 0.98 }}>
						<div className="p-6 flex flex-col flex-grow">
							<div className="flex items-center gap-2 mb-2">
								<h3 className="text-xl font-semibold">{workInProgress.title}</h3>
								<span className="px-2 py-1 text-xs bg-blue-500/20 text-blue-400 rounded-full">In Development</span>
							</div>
							<p className="text-gray-400 mb-4 flex-grow">
								{workInProgress.description}
							</p>
							<div className="flex flex-wrap gap-2 mb-4">
								{workInProgress.tech.map((tech, techIndex) => (
									<motion.span
										key={tech}
										className="bg-blue-500/20 text-blue-400 text-xs px-2 py-1 rounded"
										initial={{ opacity: 0, scale: 0.8 }}
										animate={{ opacity: 1, scale: 1 }}
										transition={{ 
											duration: 0.3, 
											delay: techIndex * 0.1 
										}}
										whileHover={{ scale: 1.1 }}
										whileTap={{ scale: 0.9 }}>
										{tech}
									</motion.span>
								))}
							</div>
							<motion.a
								href={workInProgress.link}
								className="text-blue-400 hover:text-blue-300 transition duration-300"
								target="_blank"
								rel="noopener noreferrer"
								whileHover={{ x: 5 }}
								transition={{ type: "spring", stiffness: 400, damping: 10 }}>
								View Project →
							</motion.a>
						</div>
					</motion.div>
				</div>

				{/* Completed Projects Section */}
				<h2 className="text-3xl font-bold mb-6 text-center">
					Featured Projects
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
					{projects.map((project, index) => (
						<motion.div
							key={project.title}
							className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-lg flex flex-col border border-gray-700 hover:border-gray-600 transition-colors duration-300"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							whileHover={{ 
								scale: 1.02,
								transition: { duration: 0.2 }
							}}
							whileTap={{ scale: 0.98 }}>
							<div className="p-6 flex flex-col flex-grow">
								<h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
									{project.title}
								</h3>
								<p className="text-gray-400 mb-4 flex-grow">
									{project.description}
								</p>
								<div className="flex flex-wrap gap-2 mb-4">
									{project.tech.map((tech, techIndex) => (
										<motion.span
											key={tech}
											className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded hover:bg-gray-600 transition-colors duration-300"
											initial={{ opacity: 0, scale: 0.8 }}
											animate={{ opacity: 1, scale: 1 }}
											transition={{ 
												duration: 0.3, 
												delay: index * 0.1 + techIndex * 0.1 
											}}
											whileHover={{ scale: 1.1 }}
											whileTap={{ scale: 0.9 }}>
											{tech}
										</motion.span>
									))}
								</div>
								<motion.a
									href={project.link !== "#" ? project.link : undefined}
									className={`text-gray-400 hover:text-white transition duration-300 ${
										project.link === "#" ? "opacity-50 cursor-not-allowed" : ""
									}`}
									target="_blank"
									rel="noopener noreferrer"
									whileHover={{ x: 5 }}
									transition={{ type: "spring", stiffness: 400, damping: 10 }}>
									View Project →
								</motion.a>
							</div>
						</motion.div>
					))}
				</div>
			</motion.div>
		</section>
	)
}
