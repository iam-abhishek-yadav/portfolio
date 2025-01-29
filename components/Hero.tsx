"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"

export default function Hero() {
	return (
		<section className="flex flex-col items-center justify-center min-h-screen text-center px-4">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}>
				<h1 className="text-5xl font-bold mb-4">Abhishek Yadav</h1>
				<h2 className="text-3xl mb-6">
					I&apos;m a{" "}
					<TypeAnimation
						sequence={["Full-Stack Developer", 2000, "DevOps Engineer", 2000]}
						wrapper="span"
						speed={50}
						repeat={Number.POSITIVE_INFINITY}
						className="text-blue-400"
					/>
				</h2>
				<motion.a
					href="#contact"
					className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}>
					Get in Touch
				</motion.a>
			</motion.div>
		</section>
	)
}
