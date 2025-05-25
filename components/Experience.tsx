"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { FaBriefcase } from "react-icons/fa"

const experiences = [
	{
		title: "Software Engineer",
		company: "Virtual Employee",
		period: "Aug 2024 – Present",
		location: "Noida, Uttar Pradesh",
		description:
			"• Built scalable UIs with Next.js, Tailwind, and ShadCN, optimizing Supabase calls and RPCs, resulting in a 35% increase in data retrieval efficiency and reducing UI load times by 40%. \n" +
			"• Delivered 5+ demo applications, including a fully functional e-commerce app with cart functionalities, React, React Native, and .NET apps, to test AI-powered error analysis integration with Sentry. \n" +
			"• Integrated AI solutions to automate error tracking, reducing manual effort and improving error resolution times by 45% by using AI-generated error titles instead of session replays. \n" +
			"• Automated testing with Playwright and streamlined CI/CD pipelines with GitHub Actions, cutting testing time by 50% and reducing deployment cycles by 40%, leading to faster releases. \n" +
			"• Implemented custom analytics with PostHog and integrated rrweb player for video playback, driving a 60% improvement in user behavior insights and significantly boosting product demo effectiveness.",
	},
	{
		title: "Web Development Trainee",
		company: "100xDevs",
		period: "Dec 2023 – Aug 2024",
		location: "Remote",
		description:
			"• Built full-stack apps with JavaScript, TypeScript, React (Redux, Context API), Node.js, Express, MongoDB, and PostgreSQL, using Prisma for database optimization, Redis for caching, and tools like Turborepo, Docker, Kubernetes, and OpenAPI, with strong focus on testing.",
	},
	{
		title: "Delivery Engineer",
		company: "Smarsh",
		period: "Dec 2021 — Oct 2023",
		location: "Bangalore, Karnataka",
		description:
			"• Built a scalable frontend with React, Redux, and Tailwind for 10,000+ users, improving UI load times by 25% and enhancing user experience. \n" +
			"• Developed REST APIs with Node.js and Express, reducing data retrieval times by 30% and optimized both MongoDB and PostgreSQL performance, achieving 40% faster queries. \n" +
			"• Boosted app scalability by 35% by integrating Redis for caching and messaging, and reduced deployment time by 30% through streamlined CI/CD pipelines with Jenkins, GitHub Actions, and Docker. \n" +
			"• Improved infrastructure efficiency by automating tasks with Terraform and Ansible, cutting manual work by 40%, and reducing issue resolution time by 50% with enhanced monitoring through Prometheus, Grafana, and Datadog.",
	},
]

export default function Experience() {
	const containerRef = useRef(null)
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start end", "end start"]
	})

	const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
	const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100])

	return (
		<section
			id="experience"
			className="py-20 px-4 max-w-4xl mx-auto"
			ref={containerRef}>
			<motion.div
				style={{ opacity, y }}
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}>
				<motion.h2 
					className="text-3xl font-bold mb-12 text-center"
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}>
					Experience
				</motion.h2>
				<div className="space-y-8">
					{experiences.map((exp, index) => (
						<motion.div
							key={index}
							className="group relative"
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ 
								duration: 0.5, 
								delay: index * 0.2,
								type: "spring",
								stiffness: 100
							}}
							whileHover={{ 
								scale: 1.02,
								transition: { duration: 0.2 }
							}}>
							<motion.div 
								className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-blue-400"
								whileHover={{ 
									boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
								}}>
								<div className="flex items-start justify-between mb-4">
									<div className="flex items-center">
										<motion.div 
											className="bg-blue-400/10 p-3 rounded-lg mr-4"
											whileHover={{ 
												scale: 1.1,
												backgroundColor: "rgba(96, 165, 250, 0.2)"
											}}
											transition={{ duration: 0.2 }}>
											<FaBriefcase
												className="text-blue-400"
												size={24}
											/>
										</motion.div>
										<div>
											<motion.h3 
												className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors"
												whileHover={{ scale: 1.05 }}
												transition={{ duration: 0.2 }}>
												{exp.title}
											</motion.h3>
											<motion.p 
												className="text-gray-400"
												initial={{ opacity: 0 }}
												animate={{ opacity: 1 }}
												transition={{ delay: index * 0.2 + 0.3 }}>
												{exp.company}
											</motion.p>
										</div>
									</div>
									<motion.div 
										className="text-right"
										initial={{ opacity: 0, x: 20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: index * 0.2 + 0.4 }}>
										<p className="text-blue-400 font-medium">
											{exp.period}
										</p>
										<p className="text-gray-400 text-sm">
											{exp.location}
										</p>
									</motion.div>
								</div>
								<motion.div 
									className="border-t border-gray-700 pt-4"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: index * 0.2 + 0.5 }}>
									<p className="text-gray-300 whitespace-pre-line leading-relaxed">
										{exp.description}
									</p>
								</motion.div>
							</motion.div>
						</motion.div>
					))}
				</div>
			</motion.div>
		</section>
	)
}
