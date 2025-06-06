"use client"

import { motion } from "framer-motion"
import { FaCertificate } from "react-icons/fa"

const certifications = [
	{
		name: "AWS Cloud Practitioner Essentials",
		issuer: "Amazon Web Services",
		date: "2024",
		link: "https://drive.google.com/file/d/1rc6cihTUaMxa8p-ihS10oqv1wCz6_ARo/view",
	},
	{
		name: "AWS Techincal Essentials",
		issuer: "Amazon Web Services",
		date: "2024",
		link: "https://drive.google.com/file/d/1wh4zuRLu4KTXtaQzFPHLaeBX8dSWofps/view",
	},
	{
		name: "System Operations on AWS",
		issuer: "Amazon Web Services",
		date: "2022",
		link: "https://drive.google.com/file/d/1X7FhYHoXgvOyL-OPBgStDEC3pYXnooHj/view",
	},
	{
		name: "Google Cloud Fundamentals - Core Infrastructure",
		issuer: "Google Cloud",
		date: "2024",
		link: "https://www.cloudskillsboost.google/public_profiles/cea11df5-77b1-4b29-96e4-f5de6118b414/badges/7881783",
	},
	{
		name: "Prompt Design in Vertex AI",
		issuer: "Google Cloud",
		date: "2025",
		link: "https://www.cloudskillsboost.google/public_profiles/4c0006cb-facb-4d8a-a8db-7d8740cd6338/badges/13837222",
	},

	{
		name: "Machine Learning Operations (MLOps) in Generative AI",
		issuer: "Google Cloud",
		date: "2025",
		link: "https://www.cloudskillsboost.google/public_profiles/4c0006cb-facb-4d8a-a8db-7d8740cd6338/badges/13837439",
	},
]

export default function Certifications() {
	return (
		<section
			id="certifications"
			className="py-20 px-4 max-w-4xl mx-auto">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}>
				<h2 className="text-3xl font-bold mb-6 text-center">Certifications</h2>
				<div className="space-y-6">
					{certifications.map((cert, index) => (
						<motion.div
							key={index}
							className="bg-gray-800 rounded-lg p-6 shadow-lg"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							whileHover={{ 
								scale: 1.02,
								transition: { duration: 0.2 }
							}}
							whileTap={{ scale: 0.98 }}>
							<div className="flex items-center mb-2">
								<motion.div
									whileHover={{ rotate: 360 }}
									transition={{ duration: 0.5 }}>
									<FaCertificate
										className="text-blue-400 mr-2"
										size={24}
									/>
								</motion.div>
								<h3 className="text-xl font-semibold">{cert.name}</h3>
							</div>
							<p className="text-gray-400 mb-2">
								{cert.issuer} | {cert.date}
							</p>
							<motion.a
								href={cert.link}
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-400 hover:text-blue-300 transition duration-300"
								whileHover={{ x: 5 }}
								transition={{ type: "spring", stiffness: 400, damping: 10 }}>
								View Certificate →
							</motion.a>
						</motion.div>
					))}
				</div>
			</motion.div>
		</section>
	)
}
