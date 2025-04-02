import Link from "next/link"
import {
  ArrowRight,
  Award,
  Calendar,
  Check,
  ChevronRight,
  Clock,
  Heart,
  HeartHandshake,
  MessageCircle,
  Quote,
  Sparkles,
  Star,
  Users,
  Mail,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Testimonials } from "@/components/testimonials"
import { BookingForm } from "@/components/booking-form"
import { SocialLinks } from "@/components/social-links"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="sticky top-0 z-40 border-b border-zinc-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-amber-400" />
            <span className="text-xl font-bold">Mahfuz Arif</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#about" className="text-sm font-medium text-zinc-400 transition-colors hover:text-white">
              About
            </Link>
            <Link href="#expertise" className="text-sm font-medium text-zinc-400 transition-colors hover:text-white">
              Expertise
            </Link>
            <Link href="#hearmeout" className="text-sm font-medium text-zinc-400 transition-colors hover:text-white">
              Hear Me Out
            </Link>
            <Link href="#testimonials" className="text-sm font-medium text-zinc-400 transition-colors hover:text-white">
              Testimonials
            </Link>
            <Link href="/co-trainers" className="text-sm font-medium text-zinc-400 transition-colors hover:text-white">
              Co-Trainers
            </Link>
          </nav>
          <div className="hidden md:flex items-center gap-4">
            <SocialLinks />
            <Button className="bg-amber-500 text-black hover:bg-amber-400" asChild>
              <Link href="#contact">Book a Session</Link>
            </Button>
            <Button variant="outline" className="border-zinc-800 text-white hover:bg-zinc-800" asChild>
              <Link href="/login">Login</Link>
            </Button>
          </div>
          <div className="flex md:hidden items-center gap-2">
            <Button className="bg-amber-500 text-black hover:bg-amber-400" asChild>
              <Link href="#contact">Book</Link>
            </Button>
            <Button variant="outline" size="icon" className="border-zinc-800 text-white hover:bg-zinc-800" asChild>
              <Link href="/login">
                <Users className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-black to-zinc-900">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-flex items-center rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-sm text-amber-500">
                  <Sparkles className="mr-1 h-3.5 w-3.5" />
                  <span>Mindset Trainer</span>
                </div>
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Transform Your Mindset, Transform Your Life
                  </h1>
                  <p className="max-w-[600px] text-zinc-400 md:text-xl">
                    Personalized online and offline sessions for mindset transformation, relationship coaching, and
                    personal growth with Mahfuz Arif.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-amber-500 text-black hover:bg-amber-400" asChild>
                    <Link href="#contact">
                      Book Your Session
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-zinc-800 text-white hover:bg-zinc-800" asChild>
                    <Link href="#hearmeout">Discover Hear Me Out Program</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 via-transparent to-amber-500/10 rounded-3xl blur-3xl"></div>
                <div className="relative overflow-hidden rounded-3xl border border-zinc-800">
                  <div className="aspect-square md:aspect-[4/3] lg:aspect-square overflow-hidden">
                    <img
                      src="/images/profile.png"
                      alt="Mahfuz Arif - Mindset Trainer"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex h-6 items-center rounded-full border border-amber-500/20 bg-amber-500/10 px-3 text-sm text-amber-500">
                  About Mahfuz Arif
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet Your Trainer</h2>
                <p className="mx-auto max-w-[700px] text-zinc-400 md:text-xl">
                  Professional Mindset Trainer with expertise in personal development, relationship coaching, and mental
                  wellness.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl gap-6 py-8 md:grid-cols-3">
                <Card className="bg-zinc-950 border-zinc-800">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-amber-500" />
                      <CardTitle>Mindset Trainer</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="text-zinc-400">
                    <p>
                      Specialized in transforming limiting beliefs into empowering mindsets through personalized
                      coaching and proven techniques.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-zinc-950 border-zinc-800">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-amber-500" />
                      <CardTitle>Expert Trainer</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="text-zinc-400">
                    <p>
                      Professional training in mindset development and personal growth coaching with years of
                      experience.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-zinc-950 border-zinc-800">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <HeartHandshake className="h-5 w-5 text-amber-500" />
                      <CardTitle>Relationship Specialist</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="text-zinc-400">
                    <p>
                      Specialized in helping clients navigate relationship challenges and build stronger connections.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="relative mt-8 w-full max-w-3xl rounded-xl border border-zinc-800 bg-zinc-950 p-6 md:p-8">
                <Quote className="absolute -top-4 -left-4 h-8 w-8 text-amber-500" />
                <blockquote className="relative z-10">
                  <p className="mb-4 italic text-zinc-300 md:text-lg">
                    "My mission is to help you unlock your full potential by transforming limiting beliefs into
                    empowering mindsets. Through personalized guidance and active listening, we'll work together to
                    create lasting positive change in your life."
                  </p>
                  <footer className="flex flex-col items-center gap-4">
                    <div className="h-10 w-10 overflow-hidden rounded-full border border-zinc-800">
                      <img src="/images/profile.png" alt="Mahfuz Arif" className="h-full w-full object-cover" />
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="bg-gradient-to-r from-amber-400 to-amber-600 p-1 rounded-lg mb-1">
                        <img
                          src="/images/signature-gold.png"
                          alt="Mahfuz Arif Signature"
                          className="h-16 filter brightness-0 invert"
                        />
                      </div>
                      <p className="text-sm text-zinc-400">Mindset Trainer</p>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        <section id="expertise" className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex h-6 items-center rounded-full border border-amber-500/20 bg-amber-500/10 px-3 text-sm text-amber-500">
                  Areas of Expertise
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Specialized Training</h2>
                <p className="mx-auto max-w-[700px] text-zinc-400 md:text-xl">
                  Discover the transformative services designed to help you overcome challenges and achieve your goals.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl gap-8 py-8 md:grid-cols-2 lg:grid-cols-3">
                <Card className="bg-zinc-950 border-zinc-800 overflow-hidden">
                  <div className="h-2 bg-amber-500"></div>
                  <CardHeader>
                    <CardTitle>Mindset Transformation</CardTitle>
                    <CardDescription className="text-zinc-400">
                      Reshape limiting beliefs and develop a growth mindset
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-amber-500" />
                      <span className="text-sm text-zinc-400">60-minute sessions</span>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                        <span className="text-zinc-300">Identify and overcome mental blocks</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                        <span className="text-zinc-300">Develop positive thought patterns</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                        <span className="text-zinc-300">Create actionable strategies for growth</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="bg-zinc-950 border-zinc-800 overflow-hidden">
                  <div className="h-2 bg-amber-500"></div>
                  <CardHeader>
                    <CardTitle>Anger Management</CardTitle>
                    <CardDescription className="text-zinc-400">
                      Learn to control and channel emotions effectively
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-amber-500" />
                      <span className="text-sm text-zinc-400">60-minute sessions</span>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                        <span className="text-zinc-300">Identify anger triggers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                        <span className="text-zinc-300">Develop healthy coping mechanisms</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                        <span className="text-zinc-300">Transform negative emotions into positive action</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="bg-zinc-950 border-zinc-800 overflow-hidden">
                  <div className="h-2 bg-amber-500"></div>
                  <CardHeader>
                    <CardTitle>Relationship Coaching</CardTitle>
                    <CardDescription className="text-zinc-400">
                      Build healthier and more fulfilling relationships
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-amber-500" />
                      <span className="text-sm text-zinc-400">60-minute sessions</span>
                    </div>
                    <div className="aspect-video rounded-md overflow-hidden mb-4">
                      <img
                        src="/images/relationship-coaching.jpeg"
                        alt="Relationship Coaching"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                        <span className="text-zinc-300">Improve communication skills</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                        <span className="text-zinc-300">Resolve conflicts effectively</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                        <span className="text-zinc-300">Develop deeper connections</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="bg-zinc-950 border-zinc-800 overflow-hidden">
                  <div className="h-2 bg-amber-500"></div>
                  <CardHeader>
                    <CardTitle>Personal Development</CardTitle>
                    <CardDescription className="text-zinc-400">
                      Achieve your goals and unlock your potential
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-amber-500" />
                      <span className="text-sm text-zinc-400">60-minute sessions</span>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                        <span className="text-zinc-300">Set meaningful goals</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                        <span className="text-zinc-300">Develop action plans</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                        <span className="text-zinc-300">Build habits for success</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="hearmeout" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-zinc-900 to-black">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 via-transparent to-amber-500/10 rounded-3xl blur-3xl"></div>
                <div className="relative overflow-hidden rounded-3xl border border-zinc-800">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src="/images/hear-me-out.jpeg"
                      alt="Hear Me Out Program"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="inline-flex h-6 items-center rounded-full border border-amber-500/20 bg-amber-500/10 px-3 text-sm text-amber-500">
                  Special Program
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  The "Hear Me Out" Experience
                </h2>
                <p className="text-zinc-400 md:text-xl">
                  A unique program designed to provide deep, attentive listening and personalized guidance for your
                  specific challenges.
                </p>
                <Separator className="my-4 bg-zinc-800" />
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-amber-500/10 p-2 mt-1">
                      <MessageCircle className="h-5 w-5 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Judgment-Free Space</h3>
                      <p className="text-zinc-400">
                        Express yourself freely in a safe environment where you'll be truly heard without judgment or
                        interruption.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-amber-500/10 p-2 mt-1">
                      <Sparkles className="h-5 w-5 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Personalized Insights</h3>
                      <p className="text-zinc-400">
                        Receive tailored guidance and actionable advice based on your unique situation and specific
                        goals.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-amber-500/10 p-2 mt-1">
                      <Heart className="h-5 w-5 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Ongoing Support</h3>
                      <p className="text-zinc-400">
                        Benefit from continuous support between sessions to help you implement changes and overcome
                        obstacles.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pt-4">
                  <Button size="lg" className="bg-amber-500 text-black hover:bg-amber-400" asChild>
                    <Link href="#contact">
                      Book Hear Me Out Session
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Testimonials />

        <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex h-6 items-center rounded-full border border-amber-500/20 bg-amber-500/10 px-3 text-sm text-amber-500">
                  Share Your Experience
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Submit Your Testimonial</h2>
                <p className="mx-auto max-w-[700px] text-zinc-400 md:text-xl">
                  Have you worked with Mahfuz Arif? Share your experience to help others on their journey.
                </p>
              </div>
              <div className="w-full max-w-2xl mt-8">
                <Card className="bg-zinc-950 border-zinc-800">
                  <CardHeader>
                    <CardTitle>Submit a Testimonial</CardTitle>
                    <CardDescription className="text-zinc-400">
                      Your testimonial will be reviewed before being published
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="grid gap-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Full Name
                        </label>
                        <input
                          id="name"
                          placeholder="Your name"
                          className="flex h-10 w-full rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-white"
                          required
                        />
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          placeholder="Your email"
                          className="flex h-10 w-full rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-white"
                          required
                        />
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="service" className="text-sm font-medium">
                          Service Used
                        </label>
                        <select
                          id="service"
                          className="flex h-10 w-full rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-white"
                          required
                        >
                          <option value="">Select a service</option>
                          <option value="mindset">Mindset Transformation</option>
                          <option value="anger">Anger Management</option>
                          <option value="relationship">Relationship Coaching</option>
                          <option value="personal">Personal Development</option>
                          <option value="hearmeout">Hear Me Out Program</option>
                        </select>
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="rating" className="text-sm font-medium">
                          Rating
                        </label>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <button
                              key={i}
                              type="button"
                              className="text-zinc-400 hover:text-amber-500 focus:text-amber-500"
                            >
                              <Star className="h-6 w-6" />
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="testimonial" className="text-sm font-medium">
                          Your Testimonial
                        </label>
                        <textarea
                          id="testimonial"
                          placeholder="Share your experience..."
                          className="flex min-h-[120px] w-full rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-white"
                          required
                        />
                      </div>
                      <div className="text-xs text-zinc-400">
                        Your testimonial will be reviewed by our team before being published on the website.
                      </div>
                      <Button type="submit" className="w-full bg-amber-500 text-black hover:bg-amber-400">
                        Submit Testimonial
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-zinc-950">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-flex h-6 items-center rounded-full border border-amber-500/20 bg-amber-500/10 px-3 text-sm text-amber-500">
                    Get Started
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Book Your Session</h2>
                  <p className="text-zinc-400 md:text-xl">
                    Take the first step toward transformation. Schedule your personalized session with Mahfuz Arif
                    today.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-amber-500" />
                    <span>Flexible scheduling to fit your needs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-amber-500" />
                    <span>One-on-one personalized attention</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5 text-amber-500" />
                    <span>Secure online sessions from anywhere</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-amber-500" />
                    <a href="mailto:talktomahfuzarif@gmail.com" className="hover:text-amber-500 transition-colors">
                      talktomahfuzarif@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4 pt-4">
                  <div className="flex -space-x-2">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="h-10 w-10 rounded-full border-2 border-zinc-950 overflow-hidden">
                        <img
                          src={`/placeholder.svg?height=40&width=40&text=${i + 1}`}
                          alt="Client"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                    <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                    <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                    <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                    <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                    <span className="ml-2 text-sm text-zinc-400">
                      <strong className="text-white">4.9</strong> (120+ reviews)
                    </span>
                  </div>
                </div>
              </div>
              <BookingForm />
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t border-zinc-800 bg-black py-6 md:py-8">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-amber-500" />
                <span className="text-lg font-semibold">Mahfuz Arif</span>
              </div>
              <p className="text-zinc-400 text-sm">
                Professional Mindset Trainer specializing in personalized online and offline sessions for mindset
                transformation, relationship coaching, and personal growth.
              </p>
              <SocialLinks />
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-zinc-400">
                  <Mail className="h-4 w-4 text-amber-500" />
                  <a href="mailto:talktomahfuzarif@gmail.com" className="hover:text-white transition-colors">
                    talktomahfuzarif@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="grid grid-cols-2 gap-2">
                <li>
                  <Link href="#about" className="text-zinc-400 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#expertise" className="text-zinc-400 hover:text-white transition-colors">
                    Expertise
                  </Link>
                </li>
                <li>
                  <Link href="#hearmeout" className="text-zinc-400 hover:text-white transition-colors">
                    Hear Me Out
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="text-zinc-400 hover:text-white transition-colors">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-zinc-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/co-trainers" className="text-zinc-400 hover:text-white transition-colors">
                    Co-Trainers
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-center text-sm text-zinc-500">
              © {new Date().getFullYear()} Mahfuz Arif. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-zinc-500 hover:text-white text-sm">
                Terms
              </Link>
              <Link href="#" className="text-zinc-500 hover:text-white text-sm">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

