"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-20 px-4 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
        <p className="text-lg mb-4">
          I am a full-stack developer with 3+ years of experience designing and building scalable, high-performance web applications. I specialize in creating seamless user experiences with React and Next.js, alongside building reliable backend services using Node.js and cloud platforms.
        </p>
        <p className="text-lg mb-4">
          Throughout my career, I’ve delivered impactful projects ranging from AI-driven analytics dashboards processing millions of data points to robust e-commerce systems supporting thousands of concurrent users. I incorporate DevOps best practices and leverage AWS and GCP to ensure solutions are resilient, secure, and production-ready.
        </p>
        <p className="text-lg">
          Beyond coding, I actively contribute to open-source projects, write technical articles, and stay at the forefront of emerging technologies in web development, cloud computing, and AI. I’m passionate about writing clean, maintainable code that drives meaningful results.
        </p>
      </motion.div>
    </section>
  )
}
