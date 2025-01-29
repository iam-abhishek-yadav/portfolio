"use client"

import { motion } from "framer-motion"
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
	return (
		<section
			id="experience"
			className="py-20 px-4 max-w-4xl mx-auto">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}>
				<h2 className="text-3xl font-bold mb-6 text-center">Experience</h2>
				<div className="space-y-8">
					{experiences.map((exp, index) => (
						<motion.div
							key={index}
							className="bg-gray-800 rounded-lg p-6 shadow-lg"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}>
							<div className="flex items-center mb-4">
								<FaBriefcase
									className="text-blue-400 mr-2"
									size={24}
								/>
								<h3 className="text-xl font-semibold">{exp.title}</h3>
							</div>
							<p className="text-gray-400 mb-2">
								{exp.company} | {exp.period} | {exp.location}
							</p>
							<p className="text-gray-300 whitespace-pre-line">
								{exp.description}
							</p>
						</motion.div>
					))}
				</div>
			</motion.div>
		</section>
	)
}
