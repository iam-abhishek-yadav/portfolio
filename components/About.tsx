"use client"

import { motion } from "framer-motion"

export default function About() {
	return (
		<section
			id="about"
			className="py-20 px-4 max-w-4xl mx-auto">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}>
				<h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
				<p className="text-lg mb-4">
					I&apos;m a passionate full-stack developer with a strong focus on
					creating efficient, scalable, and user-friendly web applications. With
					extensive experience in React, Next.js, and modern web technologies, I
					strive to build innovative solutions that make a real impact.
				</p>
				<p className="text-lg mb-4">
					My journey in web development has led me to work on diverse projects,
					from AI-powered applications to robust e-commerce platforms. I&apos;m
					constantly learning and adapting to new technologies to stay at the
					forefront of web development.
				</p>
				<p className="text-lg">
					When I&apos;m not coding, you can find me contributing to open-source
					projects, writing technical articles, or exploring the latest trends
					in web development and AI.
				</p>
			</motion.div>
		</section>
	)
}
