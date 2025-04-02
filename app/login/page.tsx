"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
  const [showOTP, setShowOTP] = useState(false)
  const [userType, setUserType] = useState("trainee")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [otp, setOtp] = useState(["", "", "", ""])
  const [loginMethod, setLoginMethod] = useState("password") // 'password' or 'otp'

  const handleSendOTP = (e: React.FormEvent) => {
    e.preventDefault()
    setShowOTP(true)
  }

  const handlePasswordLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would verify the password here
    alert("Login successful!")
  }

  const handleOtpChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newOtp = [...otp]
      newOtp[index] = value
      setOtp(newOtp)

      // Auto focus next input
      if (value && index < 3) {
        const nextInput = document.getElementById(`otp-${index + 1}`)
        if (nextInput) nextInput.focus()
      }
    }
  }

  const handleVerifyOTP = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would verify the OTP here
    alert("OTP verified successfully!")
  }

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <header className="border-b border-zinc-800 bg-black py-4">
        <div className="container flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-amber-500" />
            <span className="text-lg font-semibold">Mahfuz Arif</span>
          </Link>
          <Link href="/" className="flex items-center gap-1 text-sm text-zinc-400 hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {!showOTP ? (
            <Card className="bg-zinc-950 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-2xl">Login</CardTitle>
                <CardDescription className="text-zinc-400">Sign in to your account</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="trainee" className="w-full" onValueChange={setUserType}>
                  <TabsList className="grid grid-cols-3 mb-6 bg-zinc-900">
                    <TabsTrigger value="trainee">Trainee</TabsTrigger>
                    <TabsTrigger value="trainer">Trainer</TabsTrigger>
                    <TabsTrigger value="admin">Admin</TabsTrigger>
                  </TabsList>

                  <Tabs defaultValue="password" className="w-full" onValueChange={setLoginMethod}>
                    <TabsList className="grid grid-cols-2 mb-6 bg-zinc-900">
                      <TabsTrigger value="password">Password</TabsTrigger>
                      <TabsTrigger value="otp">OTP</TabsTrigger>
                    </TabsList>

                    <TabsContent value="password">
                      <form onSubmit={handlePasswordLogin} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="name@example.com"
                            required
                            className="bg-zinc-900 border-zinc-800 text-white"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <Label htmlFor="password">Password</Label>
                            <Link href="#" className="text-xs text-amber-500 hover:underline">
                              Forgot password?
                            </Link>
                          </div>
                          <Input
                            id="password"
                            type="password"
                            placeholder="••••••••"
                            required
                            className="bg-zinc-900 border-zinc-800 text-white"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                        <Button type="submit" className="w-full bg-amber-500 text-black hover:bg-amber-400">
                          Sign In
                        </Button>
                        {userType === "trainee" && (
                          <div className="text-center text-sm text-zinc-400">
                            Don't have an account?{" "}
                            <Link href="/register" className="text-amber-500 hover:underline">
                              Register
                            </Link>
                          </div>
                        )}
                        {userType === "trainer" && (
                          <div className="text-center text-sm text-zinc-400">
                            Want to become a co-trainer?{" "}
                            <Link href="/co-trainers/register" className="text-amber-500 hover:underline">
                              Apply here
                            </Link>
                          </div>
                        )}
                      </form>
                    </TabsContent>

                    <TabsContent value="otp">
                      <form onSubmit={handleSendOTP} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="email-otp">Email</Label>
                          <Input
                            id="email-otp"
                            type="email"
                            placeholder="name@example.com"
                            required
                            className="bg-zinc-900 border-zinc-800 text-white"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <Button type="submit" className="w-full bg-amber-500 text-black hover:bg-amber-400">
                          Send OTP
                        </Button>
                        {userType === "trainee" && (
                          <div className="text-center text-sm text-zinc-400">
                            Don't have an account?{" "}
                            <Link href="/register" className="text-amber-500 hover:underline">
                              Register
                            </Link>
                          </div>
                        )}
                        {userType === "trainer" && (
                          <div className="text-center text-sm text-zinc-400">
                            Want to become a co-trainer?{" "}
                            <Link href="/co-trainers/register" className="text-amber-500 hover:underline">
                              Apply here
                            </Link>
                          </div>
                        )}
                      </form>
                    </TabsContent>
                  </Tabs>
                </Tabs>
              </CardContent>
            </Card>
          ) : (
            <Card className="bg-zinc-950 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-2xl">Verify OTP</CardTitle>
                <CardDescription className="text-zinc-400">Enter the one-time password sent to {email}</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleVerifyOTP} className="space-y-6">
                  <div className="flex justify-center gap-2">
                    {otp.map((digit, index) => (
                      <Input
                        key={index}
                        id={`otp-${index}`}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        className="w-12 h-12 text-center text-xl bg-zinc-900 border-zinc-800 text-white"
                      />
                    ))}
                  </div>
                  <Button type="submit" className="w-full bg-amber-500 text-black hover:bg-amber-400">
                    Verify & Login
                  </Button>
                  <div className="text-center text-sm text-zinc-400">
                    Didn't receive the code?{" "}
                    <button type="button" onClick={() => setShowOTP(true)} className="text-amber-500 hover:underline">
                      Resend
                    </button>
                  </div>
                  <div className="text-center text-sm text-zinc-400">
                    <button type="button" onClick={() => setShowOTP(false)} className="text-amber-500 hover:underline">
                      Change email
                    </button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
      <footer className="border-t border-zinc-800 bg-black py-4">
        <div className="container text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} Mahfuz Arif. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

