import Link from "next/link"
import { ArrowLeft, ArrowRight, Sparkles, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function CoTrainersPage() {
  const trainers = [
    {
      id: 1,
      name: "S. Mishra",
      specialty: "Linguistic Trainer",
      rating: 4.8,
      reviews: 42,
      image: "/placeholder.svg?height=200&width=200",
      bio: "Specializing in language development and communication strategies with expertise in multiple languages.",
    },
    {
      id: 2,
      name: "S. Manna",
      specialty: "Relationship Coach",
      rating: 4.9,
      reviews: 37,
      image: "/placeholder.svg?height=200&width=200",
      bio: "Helping individuals and couples navigate relationship dynamics and build stronger connections.",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <header className="border-b border-zinc-800 bg-black py-4">
        <div className="container flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-amber-500" />
            <span className="text-lg font-semibold">Mahfuz Arif</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-sm text-zinc-400 hover:text-white">
              Home
            </Link>
            <Button className="bg-amber-500 text-black hover:bg-amber-400" asChild>
              <Link href="/co-trainers/register">Become a Co-Trainer</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <div className="inline-flex h-6 items-center rounded-full border border-amber-500/20 bg-amber-500/10 px-3 text-sm text-amber-500">
                Our Team
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet Our Co-Trainers</h1>
              <p className="max-w-[700px] text-zinc-400 md:text-xl">
                Experienced professionals trained in the Mahfuz Arif methodology to help you on your journey.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {trainers.map((trainer) => (
                <Card key={trainer.id} className="bg-zinc-950 border-zinc-800 overflow-hidden">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={trainer.image || "/placeholder.svg"}
                      alt={trainer.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{trainer.name}</CardTitle>
                    <CardDescription className="text-zinc-400">{trainer.specialty}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-zinc-300">{trainer.bio}</p>
                    <div className="flex items-center gap-1">
                      <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                      <span className="font-medium">{trainer.rating}</span>
                      <span className="text-sm text-zinc-400">({trainer.reviews} reviews)</span>
                    </div>
                    <Button className="w-full bg-zinc-800 hover:bg-zinc-700" asChild>
                      <Link href={`#book-${trainer.id}`}>Book a Session</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16 text-center">
              <h2 className="text-2xl font-bold mb-6">Join Our Team of Co-Trainers</h2>
              <p className="max-w-[700px] mx-auto text-zinc-400 mb-8">
                Are you passionate about helping others transform their mindset? Join our team of co-trainers and make a
                difference in people's lives.
              </p>
              <Button size="lg" className="bg-amber-500 text-black hover:bg-amber-400" asChild>
                <Link href="/co-trainers/register">
                  Apply to Become a Co-Trainer
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-zinc-800 bg-black py-6">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-amber-500" />
              <span className="text-lg font-semibold">Mahfuz Arif</span>
            </div>
            <p className="text-center text-sm text-zinc-500">
              © {new Date().getFullYear()} Mahfuz Arif. All rights reserved.
            </p>
            <Link href="/" className="flex items-center gap-1 text-sm text-zinc-400 hover:text-white">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

