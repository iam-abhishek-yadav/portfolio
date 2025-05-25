"use client"

import { motion } from "framer-motion"
import {
	// Languages
	SiHtml5,
	SiCss3,
	SiJavascript,
	SiTypescript,

	// FrontEnd Development
	SiReact,
	SiNextdotjs,
	SiTailwindcss,
	SiShadcnui,

	// Backend Development
	SiNodedotjs,
	SiExpress,
	SiPrisma,
	SiOpenapiinitiative,

	// Databases
	SiPostgresql,
	SiMongodb,

	// DevOps
	SiGit,
	SiDocker,
	SiKubernetes,
	SiTerraform,
	SiJenkins,
	SiAnsible,
	SiPrometheus,
	SiGrafana,
	SiAmazonwebservices,
	SiGooglecloud,

	// Testing
	SiJest,
	SiVitest,
	SiCypress,

	// Additional Tools and Technologies
	SiTurborepo,
} from "react-icons/si"

const skills = [
	// Languages
	{ name: "HTML", icon: SiHtml5, color: "text-yellow-500" },
	{ name: "CSS", icon: SiCss3, color: "text-blue-500" },
	{ name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
	{ name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },

	// FrontEnd Development
	{ name: "React", icon: SiReact, color: "text-blue-400" },
	{ name: "Next.js", icon: SiNextdotjs, color: "text-white" },
	{ name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-500" },
	{ name: "Shadcn UI", icon: SiShadcnui, color: "text-sky-500" },

	// Backend Development
	{ name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
	{ name: "Express.js", icon: SiExpress, color: "text-gray-500" },
	{ name: "Prisma", icon: SiPrisma, color: "text-blue-500" },
	{ name: "OpenAPI", icon: SiOpenapiinitiative, color: "text-green-500" },

	// Databases
	{ name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-300" },
	{ name: "MongoDB", icon: SiMongodb, color: "text-green-500" },

	// DevOps
	{ name: "Git", icon: SiGit, color: "text-orange-500" },
	{ name: "Docker", icon: SiDocker, color: "text-blue-500" },
	{ name: "Kubernetes", icon: SiKubernetes, color: "text-blue-600" },
	{ name: "Terraform", icon: SiTerraform, color: "text-purple-500" },
	{ name: "Jenkins", icon: SiJenkins, color: "text-orange-500" },
	{ name: "Ansible", icon: SiAnsible, color: "text-orange-500" },
	{ name: "Prometheus", icon: SiPrometheus, color: "text-yellow-500" },
	{ name: "Grafana", icon: SiGrafana, color: "text-yellow-500" },
	{ name: "AWS", icon: SiAmazonwebservices, color: "text-orange-500" },
	{ name: "GCP", icon: SiGooglecloud, color: "text-blue-500" },

	// Testing
	{ name: "Jest", icon: SiJest, color: "text-green-500" },
	{ name: "Vitest", icon: SiVitest, color: "text-green-500" },
	{ name: "Cypress", icon: SiCypress, color: "text-green-500" },

	// Additional Tools and Technologies
	{ name: "Turborepo", icon: SiTurborepo, color: "text-blue-500" },
]

export default function Skills() {
	return (
		<section
			id="skills"
			className="py-20 px-4 max-w-4xl mx-auto">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}>
				<h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
					{skills.map((skill, index) => (
						<motion.div
							key={skill.name}
							className="flex flex-col items-center"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							whileHover={{ 
								scale: 1.1,
								transition: { duration: 0.2 }
							}}
							whileTap={{ scale: 0.95 }}>
							<motion.div
								whileHover={{ rotate: 360 }}
								transition={{ duration: 0.5 }}>
								<skill.icon className={`text-4xl ${skill.color} mb-2`} />
							</motion.div>
							<motion.span 
								className="text-sm"
								whileHover={{ scale: 1.1 }}
								transition={{ type: "spring", stiffness: 400, damping: 10 }}>
								{skill.name}
							</motion.span>
						</motion.div>
					))}
				</div>
			</motion.div>
		</section>
	)
}
