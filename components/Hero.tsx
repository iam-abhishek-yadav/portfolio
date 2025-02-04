"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { FaEnvelope } from "react-icons/fa"

export default function Hero() {
	return (
		<section className="flex flex-col items-center justify-center min-h-screen text-center px-4">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}>
				{/* Name heading */}
				<h1 className="text-5xl font-bold mb-4">Abhishek Yadav</h1>

				{/* Animated role/title text */}
				<h2 className="text-3xl mb-6">
					I&apos;m a{" "}
					<TypeAnimation
						sequence={[
							"Full-Stack Developer",
							2000,
							"DevOps Engineer",
							2000,
							"Web3 Enthusiast",
							2000,
						]}
						wrapper="span"
						speed={50}
						repeat={Number.POSITIVE_INFINITY}
						className="text-blue-400"
					/>
				</h2>

				<div className="flex gap-4 justify-center">
					{/* Email button */}
					<motion.a
						href="mailto:abhishekyadav.recs@gmail.com"
						className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}>
						<FaEnvelope className="mr-2" />
						Get in Touch
					</motion.a>

					{/* Resume download button */}
					<motion.a
						href="https://drive.google.com/uc?export=download&id=1tgc_udyYaic3R3ZajjXF-63-D3e1n43B"
						download
						className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}>
						<svg
							className="w-5 h-5 mr-2"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M10 3V16M10 16L14 12M10 16L6 12"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
						Download Resume
					</motion.a>
				</div>
			</motion.div>
		</section>
	)
}
