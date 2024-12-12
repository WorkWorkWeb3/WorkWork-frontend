'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the form submission
    setIsSubmitted(true)
  }

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
        {isSubmitted ? (
          <div className="text-center p-6 bg-blue-800 bg-opacity-50 rounded-lg animate-fade-in-down">
            <h3 className="text-2xl font-bold mb-4">Thank you for your message!</h3>
            <p>We'll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 animate-fade-in-up">
            <Input type="text" placeholder="Your Name" required />
            <Input type="email" placeholder="Your Email" required />
            <Textarea placeholder="Your Message" required />
            <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 transition-colors duration-300">
              Send Message
            </Button>
          </form>
        )}
      </div>
    </section>
  )
}

