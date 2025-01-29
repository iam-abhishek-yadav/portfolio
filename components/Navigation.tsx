"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function Navigation() {
	const [isScrolled, setIsScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20)
		}
		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	return (
		<motion.nav
			className={`fixed top-0 left-0 right-0 z-50 ${
				isScrolled ? "bg-gray-900 shadow-lg" : "bg-transparent"
			}`}
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}>
			<div className="container mx-auto px-6 py-3">
				<div className="flex items-center justify-between">
					<motion.a
						href="#"
						className="text-2xl font-bold text-white"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}>
						JD
					</motion.a>
					<div className="hidden md:flex space-x-4">
						{["About", "Experience", "Skills", "Projects", "Contact"].map(
							(item) => (
								<motion.a
									key={item}
									href={`#${item.toLowerCase()}`}
									className="text-white hover:text-blue-400 transition duration-300"
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.9 }}>
									{item}
								</motion.a>
							)
						)}
					</div>
				</div>
			</div>
		</motion.nav>
	)
}
