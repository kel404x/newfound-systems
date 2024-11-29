"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-900">Thank you for your message!</h3>
        <p className="mt-4 text-lg text-gray-500">We&apos;ll get back to you as soon as possible.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <div className="mt-1">
          <Input 
            type="text" 
            name="name" 
            id="name" 
            autoComplete="name" 
            required 
            className="focus:border-[#FF6B35] focus:ring-[#FF6B35]"
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <div className="mt-1">
          <Input 
            type="email" 
            name="email" 
            id="email" 
            autoComplete="email" 
            required 
            className="focus:border-[#FF6B35] focus:ring-[#FF6B35]"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message
        </label>
        <div className="mt-1">
          <Textarea 
            id="message" 
            name="message" 
            rows={4} 
            required 
            className="focus:border-[#FF6B35] focus:ring-[#FF6B35]"
          />
        </div>
      </div>
      <div>
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="bg-[#FF6B35] hover:bg-[#E85D2F] text-white w-full"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </div>
    </form>
  )
}