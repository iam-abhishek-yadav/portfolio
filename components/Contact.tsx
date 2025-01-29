"use client"

import { motion } from "framer-motion"
import { FaEnvelope } from "react-icons/fa"

export default function Contact() {
	return (
		<section
			id="contact"
			className="py-20 px-4 max-w-4xl mx-auto">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}>
				<h2 className="text-3xl font-bold mb-6 text-center">Get in Touch</h2>
				<div className="text-center">
					<p className="text-lg text-gray-600 mb-4">
						Feel free to email me for any inquiries:
					</p>
					<a
						href="mailto:abhishekyadav.recs@gmail.com"
						className="inline-flex items-center px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out">
						<FaEnvelope className="mr-2" />
						Send an Email
					</a>
				</div>
				<p className="mt-4 text-center text-gray-400">
					Or, you can also contact me via social media.
				</p>
			</motion.div>
		</section>
	)
}
