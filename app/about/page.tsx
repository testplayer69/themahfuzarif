import Link from "next/link"
import { Award, BookOpen, ChevronRight, Heart, Lightbulb, MessageCircle, Sparkles, Target, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Mahfuz Arif</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium text-primary hover:underline underline-offset-4">
              About
            </Link>
            <Link href="/#services" className="text-sm font-medium hover:underline underline-offset-4">
              Services
            </Link>
            <Link href="/#ilisten" className="text-sm font-medium hover:underline underline-offset-4">
              Ilisten Program
            </Link>
          </nav>
          <Button asChild>
            <Link href="/#contact">Book a Session</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  About Your Trainer
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet Mahfuz Arif</h1>
                <p className="text-muted-foreground md:text-xl">
                  Certified Mindset Trainer dedicated to helping you transform your life through personalized guidance
                  and the power of active listening.
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-1 text-sm bg-background rounded-full px-3 py-1 border">
                    <Award className="h-4 w-4 text-primary" />
                    <span>Certified Trainer</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm bg-background rounded-full px-3 py-1 border">
                    <Users className="h-4 w-4 text-primary" />
                    <span>Relationship Expert</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm bg-background rounded-full px-3 py-1 border">
                    <MessageCircle className="h-4 w-4 text-primary" />
                    <span>Creator of "Ilisten"</span>
                  </div>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="Mahfuz Arif - Mindset Trainer"
                  className="aspect-square object-cover w-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Journey Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Journey</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  The path that led me to becoming a mindset trainer and how I discovered my passion for helping others.
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-primary/20 p-1">
                      <Heart className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Personal Transformation</h3>
                  </div>
                  <p className="text-muted-foreground">
                    My own journey of overcoming limiting beliefs and negative thought patterns inspired me to help
                    others. After experiencing the transformative power of mindset work firsthand, I dedicated myself to
                    mastering techniques that create lasting change.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-primary/20 p-1">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Professional Certifications</h3>
                  </div>
                  <p className="text-muted-foreground">
                    I am certified in Mindset Training, Relationship Coaching, and Neuro-Linguistic Programming (NLP). I
                    continuously update my skills through advanced workshops and training programs to provide the most
                    effective guidance to my clients.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-primary/20 p-1">
                      <Lightbulb className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">The Birth of "Ilisten"</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Through years of working with clients, I discovered that the most powerful transformations occurred
                    when people felt truly heard. This realization led me to develop the "Ilisten" program, a unique
                    approach centered on deep, active listening combined with personalized guidance.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-primary/20 p-1">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Client Success Stories</h3>
                  </div>
                  <p className="text-muted-foreground">
                    I am helping individuals and groups to transform their mindsets, improve their relationships, and
                    achieve their personal and professional goals. Each success story fuels my passion for this work.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-primary/20 p-1">
                      <Target className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">My Mission</h3>
                  </div>
                  <p className="text-muted-foreground">
                    My mission is to empower individuals to break free from limiting beliefs, develop healthier
                    relationships, and create lives filled with purpose and fulfillment. I believe that with the right
                    mindset and guidance, anyone can transform their life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Areas of Expertise</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Specialized knowledge and skills I bring to our sessions.
                </p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-background">
                <CardContent className="p-6 space-y-4">
                  <div className="rounded-full bg-primary/20 p-3 w-fit">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Mindset Transformation</h3>
                  <p className="text-muted-foreground">
                    Identifying and reshaping limiting beliefs, developing growth mindset patterns, and creating
                    positive thought habits that support your goals.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background">
                <CardContent className="p-6 space-y-4">
                  <div className="rounded-full bg-primary/20 p-3 w-fit">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Relationship Dynamics</h3>
                  <p className="text-muted-foreground">
                    Understanding attachment styles, improving communication patterns, resolving conflicts, and building
                    deeper connections in all types of relationships.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background">
                <CardContent className="p-6 space-y-4">
                  <div className="rounded-full bg-primary/20 p-3 w-fit">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Goal Achievement</h3>
                  <p className="text-muted-foreground">
                    Setting meaningful goals, creating actionable plans, overcoming obstacles, and developing the habits
                    and mindset necessary for success.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background">
                <CardContent className="p-6 space-y-4">
                  <div className="rounded-full bg-primary/20 p-3 w-fit">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Active Listening</h3>
                  <p className="text-muted-foreground">
                    Creating a safe space for expression, practicing deep empathy, and providing insights based on what
                    is said and unsaid.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background">
                <CardContent className="p-6 space-y-4">
                  <div className="rounded-full bg-primary/20 p-3 w-fit">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Emotional Intelligence</h3>
                  <p className="text-muted-foreground">
                    Developing awareness of emotions, managing emotional responses, and using emotional information to
                    guide thinking and behavior.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background">
                <CardContent className="p-6 space-y-4">
                  <div className="rounded-full bg-primary/20 p-3 w-fit">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Personal Development</h3>
                  <p className="text-muted-foreground">
                    Holistic approaches to self-improvement, including stress management, confidence building, and
                    creating work-life balance.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Approach</h2>
                <p className="text-muted-foreground md:text-xl">
                  I believe in a personalized, holistic approach that addresses the unique needs and goals of each
                  individual.
                </p>

                <div className="space-y-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="font-bold mb-2">1. Deep Understanding</h3>
                    <p className="text-muted-foreground">
                      Every journey begins with listening. I take the time to truly understand your unique situation,
                      challenges, and aspirations before offering guidance.
                    </p>
                  </div>

                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="font-bold mb-2">2. Personalized Strategies</h3>
                    <p className="text-muted-foreground">
                      I don't believe in one-size-fits-all solutions. Together, we'll develop strategies tailored to
                      your specific needs, personality, and circumstances.
                    </p>
                  </div>

                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="font-bold mb-2">3. Practical Application</h3>
                    <p className="text-muted-foreground">
                      Theory without practice has limited value. I focus on actionable steps you can implement in your
                      daily life to create lasting change.
                    </p>
                  </div>

                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="font-bold mb-2">4. Ongoing Support</h3>
                    <p className="text-muted-foreground">
                      Transformation is a journey, not a destination. I provide continuous support and adjustments as
                      you progress toward your goals.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg?height=600&width=800"
                    alt="Mahfuz Arif working with a client"
                    className="aspect-video object-cover w-full rounded-lg"
                  />
                </div>

                <div className="bg-primary/10 p-6 rounded-lg">
                  <h3 className="font-bold text-xl mb-3">My Philosophy</h3>
                  <p className="italic text-muted-foreground mb-4">
                    "I believe that every person has the innate capacity for growth and transformation. My role is not
                    to provide answers, but to help you discover your own wisdom and strengths. Through deep listening
                    and targeted guidance, I create a space where insights emerge and change becomes possible."
                  </p>
                  <p className="font-medium">— Mahfuz Arif</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Personal Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Beyond the Training Room
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Get to know me on a more personal level.
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg?height=400&width=400"
                    alt="Mahfuz hiking in nature"
                    className="aspect-square object-cover w-full rounded-lg"
                  />
                </div>
                <h3 className="font-bold text-xl">Nature Enthusiast</h3>
                <p className="text-muted-foreground">
                  When I'm not working with clients, you'll often find me hiking in the mountains or meditating by the
                  ocean. Nature is my greatest teacher and source of renewal.
                </p>
              </div>

              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg?height=400&width=400"
                    alt="Mahfuz reading books"
                    className="aspect-square object-cover w-full rounded-lg"
                  />
                </div>
                <h3 className="font-bold text-xl">Lifelong Learner</h3>
                <p className="text-muted-foreground">
                  I'm passionate about continuous learning and growth. I read extensively across disciplines and
                  regularly attend workshops and conferences to expand my knowledge.
                </p>
              </div>

              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg?height=400&width=400"
                    alt="Mahfuz volunteering in the community"
                    className="aspect-square object-cover w-full rounded-lg"
                  />
                </div>
                <h3 className="font-bold text-xl">Community Volunteer</h3>
                <p className="text-muted-foreground">
                  I believe in giving back. I regularly volunteer with local organizations that support mental health
                  awareness and provide resources to underserved communities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
          <div className="container px-4 md:px-6 text-center">
            <div className="mx-auto max-w-[800px] space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Begin Your Journey?
              </h2>
              <p className="text-muted-foreground md:text-xl">
                I'm here to support you every step of the way. Let's work together to transform your mindset and create
                the life you desire.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/#contact">Book a Session</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/#ilisten">
                    Learn About Ilisten
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="text-lg font-semibold">Mahfuz Arif</span>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Mahfuz Arif. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Terms
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

