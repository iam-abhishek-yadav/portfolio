"use client"

import { motion } from "framer-motion"
import { FaFileDownload } from "react-icons/fa"

export default function Resume() {
	return (
		<section
			id="resume"
			className="py-20 px-4 max-w-4xl mx-auto">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}>
				<h2 className="text-3xl font-bold mb-6 text-center">Resume</h2>
				<div className="flex justify-center">
					<motion.a
						href="https://drive.google.com/uc?export=download&id=1tgc_udyYaic3R3ZajjXF-63-D3e1n43B"
						download="YourName_Resume.pdf"
						className="inline-flex items-center px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}>
						<FaFileDownload className="mr-2" />
						Download Resume
					</motion.a>
				</div>
				<p className="mt-4 text-center text-gray-400">
					Get a detailed overview of my skills and experiences in a downloadable
					format.
				</p>
			</motion.div>
		</section>
	)
}
