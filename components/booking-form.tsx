"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export function BookingForm() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  return (
    <Card className="bg-zinc-950 border-zinc-800">
      {!formSubmitted ? (
        <>
          <CardHeader>
            <CardTitle>Book Your Session</CardTitle>
            <CardDescription className="text-zinc-400">
              Fill out the form below to schedule your session
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  className="bg-zinc-900 border-zinc-800 text-white"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="bg-zinc-900 border-zinc-800 text-white"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  className="bg-zinc-900 border-zinc-800 text-white"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="service">Service Interested In</Label>
                <Select>
                  <SelectTrigger className="bg-zinc-900 border-zinc-800 text-white">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-900 border-zinc-800 text-white">
                    <SelectItem value="mindset">Mindset Transformation</SelectItem>
                    <SelectItem value="anger">Anger Management</SelectItem>
                    <SelectItem value="relationship">Relationship Coaching</SelectItem>
                    <SelectItem value="personal">Personal Development</SelectItem>
                    <SelectItem value="hearmeout">Hear Me Out Program</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us a bit about what you're looking for"
                  className="min-h-[120px] bg-zinc-900 border-zinc-800 text-white"
                />
              </div>
              <Button type="submit" className="w-full bg-amber-500 text-black hover:bg-amber-400">
                Submit
              </Button>
            </form>
          </CardContent>
        </>
      ) : (
        <CardContent className="p-6 flex flex-col items-center justify-center min-h-[400px] text-center">
          <div className="rounded-full bg-amber-500/10 p-3 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-amber-500"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Thank You!</h3>
          <p className="text-zinc-400 mb-4">
            Your booking request has been submitted successfully. Mahfuz will contact you within 24 hours to confirm
            your session.
          </p>
          <p className="text-zinc-400 mb-6">
            If you have any immediate questions, please email:
            <a href="mailto:talktomahfuzarif@gmail.com" className="block text-amber-500 hover:underline mt-1">
              talktomahfuzarif@gmail.com
            </a>
          </p>
          <Button
            variant="outline"
            className="border-zinc-800 text-white hover:bg-zinc-800"
            onClick={() => setFormSubmitted(false)}
          >
            Book Another Session
          </Button>
        </CardContent>
      )}
    </Card>
  )
}

