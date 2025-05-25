"use client"

import { motion } from "framer-motion"

const blogPosts = [
	{
		title: "Grind 75 Leetcode Problems",
		excerpt:
			"Follow a structured approach to master 75 Leetcode problems and boost your problem-solving skills for interviews.",
		link: "https://leetcode.com/discuss/general-discussion/5346886/grind-75-leetcode-questions",
	},
]

export default function Blog() {
	return (
		<section
			id="blog"
			className="py-20 px-4 max-w-4xl mx-auto">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}>
				<h2 className="text-3xl font-bold mb-6 text-center">Latest Articles</h2>
				<div className="space-y-6">
					{blogPosts.map((post, index) => (
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
							<h3 className="text-xl font-semibold mb-2">{post.title}</h3>
							<p className="text-gray-400 mb-4">{post.excerpt}</p>
							<motion.a
								href={post.link}
								className="text-blue-400 hover:text-blue-300 transition duration-300"
								target="_blank"
								rel="noopener noreferrer"
								whileHover={{ x: 5 }}
								transition={{ type: "spring", stiffness: 400, damping: 10 }}>
								Read More →
							</motion.a>
						</motion.div>
					))}
				</div>
			</motion.div>
		</section>
	)
}
