"use client"

import { motion } from "framer-motion"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si"

const profiles = [
	{
		name: "GitHub",
		icon: FaGithub,
		link: "https://github.com/iam-abhishek-yadav",
	},
	{
		name: "LinkedIn",
		icon: FaLinkedin,
		link: "https://www.linkedin.com/in/abhisheky97/",
	},
	{
		name: "LeetCode",
		icon: SiLeetcode,
		link: "https://leetcode.com/u/abhisheky97/",
	},
	{
		name: "GeeksForGeeks",
		icon: SiGeeksforgeeks,
		link: "https://www.geeksforgeeks.org/user/abhishek_yadav_class_of_21/",
	},
]

export default function Profiles() {
	return (
		<section
			id="profiles"
			className="py-20 px-4 max-w-4xl mx-auto">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}>
				<h2 className="text-3xl font-bold mb-6 text-center">
					Professional Profiles
				</h2>
				<div className="grid grid-cols-2 md:grid-cols-3 gap-6">
					{profiles.map((profile, index) => (
						<motion.a
							key={index}
							href={profile.link}
							target="_blank"
							rel="noopener noreferrer"
							className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}>
							<profile.icon
								size={40}
								className="text-blue-400 mb-2"
							/>
							<span className="text-center">{profile.name}</span>
						</motion.a>
					))}
				</div>
			</motion.div>
		</section>
	)
}
