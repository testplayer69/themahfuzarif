"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Sparkles, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function CoTrainerRegisterPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <header className="border-b border-zinc-800 bg-black py-4">
        <div className="container flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-amber-500" />
            <span className="text-lg font-semibold">Mahfuz Arif</span>
          </Link>
          <Link href="/co-trainers" className="flex items-center gap-1 text-sm text-zinc-400 hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            Back to Co-Trainers
          </Link>
        </div>
      </header>
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold">Become a Co-Trainer</h1>
              <p className="text-zinc-400 mt-2">
                Join our team of professional mindset trainers and help others transform their lives
              </p>
            </div>

            {!formSubmitted ? (
              <Card className="bg-zinc-950 border-zinc-800">
                <CardHeader>
                  <CardTitle>Co-Trainer Application</CardTitle>
                  <CardDescription className="text-zinc-400">
                    Please fill out the form below to apply. All applications are reviewed by our team.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Personal Information</h3>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input
                            id="firstName"
                            placeholder="Enter your first name"
                            required
                            className="bg-zinc-900 border-zinc-800 text-white"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input
                            id="lastName"
                            placeholder="Enter your last name"
                            required
                            className="bg-zinc-900 border-zinc-800 text-white"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          required
                          className="bg-zinc-900 border-zinc-800 text-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="Enter your phone number"
                          required
                          className="bg-zinc-900 border-zinc-800 text-white"
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Professional Information</h3>
                      <div className="space-y-2">
                        <Label htmlFor="specialty">Area of Specialty</Label>
                        <select
                          id="specialty"
                          className="w-full h-10 rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2 text-white"
                          required
                        >
                          <option value="">Select your specialty</option>
                          <option value="mindset">Mindset Transformation</option>
                          <option value="relationship">Relationship Coaching</option>
                          <option value="career">Career Development</option>
                          <option value="stress">Stress Management</option>
                          <option value="personal">Personal Development</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="experience">Years of Experience</Label>
                        <select
                          id="experience"
                          className="w-full h-10 rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2 text-white"
                          required
                        >
                          <option value="">Select years of experience</option>
                          <option value="0-1">Less than 1 year</option>
                          <option value="1-3">1-3 years</option>
                          <option value="3-5">3-5 years</option>
                          <option value="5-10">5-10 years</option>
                          <option value="10+">10+ years</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="certifications">Certifications (if any)</Label>
                        <Input
                          id="certifications"
                          placeholder="List your relevant certifications"
                          className="bg-zinc-900 border-zinc-800 text-white"
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Additional Information</h3>
                      <div className="space-y-2">
                        <Label htmlFor="bio">Professional Bio</Label>
                        <Textarea
                          id="bio"
                          placeholder="Tell us about yourself and your approach to mindset training"
                          className="min-h-[120px] bg-zinc-900 border-zinc-800 text-white"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="motivation">Why do you want to join our team?</Label>
                        <Textarea
                          id="motivation"
                          placeholder="Share your motivation for becoming a co-trainer"
                          className="min-h-[120px] bg-zinc-900 border-zinc-800 text-white"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Upload Resume/CV</Label>
                        <div className="border border-dashed border-zinc-800 rounded-md p-6 text-center">
                          <Upload className="h-8 w-8 mx-auto text-zinc-500 mb-2" />
                          <p className="text-sm text-zinc-400 mb-2">PDF, DOC, or DOCX up to 5MB</p>
                          <Button
                            type="button"
                            variant="outline"
                            className="border-zinc-800 text-white hover:bg-zinc-800"
                          >
                            Select File
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <input type="checkbox" id="terms" className="mt-1" required />
                        <Label htmlFor="terms" className="text-sm">
                          I agree to the{" "}
                          <Link href="#" className="text-amber-500 hover:underline">
                            Terms of Service
                          </Link>{" "}
                          and{" "}
                          <Link href="#" className="text-amber-500 hover:underline">
                            Privacy Policy
                          </Link>
                        </Label>
                      </div>
                    </div>

                    <Button type="submit" className="w-full bg-amber-500 text-black hover:bg-amber-400">
                      Submit Application
                    </Button>
                  </form>
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-zinc-950 border-zinc-800">
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
                  <h3 className="text-xl font-bold mb-2">Application Submitted!</h3>
                  <p className="text-zinc-400 mb-6">
                    Thank you for your interest in becoming a co-trainer. Our team will review your application and
                    contact you within 3-5 business days.
                  </p>
                  <div className="space-y-4">
                    <p className="text-zinc-400">
                      If you have any questions, please email us at:
                      <a href="mailto:talktomahfuzarif@gmail.com" className="block text-amber-500 hover:underline mt-1">
                        talktomahfuzarif@gmail.com
                      </a>
                    </p>
                    <Button variant="outline" className="border-zinc-800 text-white hover:bg-zinc-800" asChild>
                      <Link href="/co-trainers">Return to Co-Trainers Page</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
      <footer className="border-t border-zinc-800 bg-black py-6">
        <div className="container px-4 md:px-6 text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} Mahfuz Arif. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

