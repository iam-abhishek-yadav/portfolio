"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
	CardFooter,
} from "@/components/ui/card"

export default function ContactForm() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	})

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target
		setFormData((prevState) => ({ ...prevState, [name]: value }))
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		// Here you would typically send the form data to a server
		console.log("Form submitted:", formData)
		// Reset form after submission
		setFormData({ name: "", email: "", message: "" })
	}

	return (
		<section
			id="contact"
			className="mb-16">
			<h2 className="mb-6 text-2xl font-bold text-center">Contact Me</h2>
			<Card>
				<form onSubmit={handleSubmit}>
					<CardHeader>
						<CardTitle>Get in Touch</CardTitle>
						<CardDescription>
							Fill out the form below to send me a message.
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4">
						<div>
							<label
								htmlFor="name"
								className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
								Name
							</label>
							<Input
								type="text"
								id="name"
								name="name"
								value={formData.name}
								onChange={handleChange}
								required
							/>
						</div>
						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
								Email
							</label>
							<Input
								type="email"
								id="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								required
							/>
						</div>
						<div>
							<label
								htmlFor="message"
								className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
								Message
							</label>
							<Textarea
								id="message"
								name="message"
								rows={4}
								value={formData.message}
								onChange={handleChange}
								required
							/>
						</div>
					</CardContent>
					<CardFooter>
						<Button type="submit">Send Message</Button>
					</CardFooter>
				</form>
			</Card>
		</section>
	)
}
