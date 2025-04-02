import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-flex h-6 items-center rounded-full border border-amber-500/20 bg-amber-500/10 px-3 text-sm text-amber-500">
              Success Stories
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Client Testimonials</h2>
            <p className="mx-auto max-w-[700px] text-zinc-400 md:text-xl">
              Hear from people who have transformed their lives through our sessions.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-zinc-950 border-zinc-800">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="mb-4 text-zinc-300">
                  "Working with Mahfuz has completely transformed my mindset. I've overcome limiting beliefs that were
                  holding me back for years. His guidance has been invaluable."
                </p>
                <div className="flex items-center gap-4">
                  <div className="rounded-full overflow-hidden border border-zinc-800 h-10 w-10">
                    <img
                      src="/placeholder.svg?height=40&width=40"
                      alt="Client"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Rahul Sharma</p>
                    <p className="text-xs text-zinc-500">Mindset Transformation</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-zinc-950 border-zinc-800">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="mb-4 text-zinc-300">
                  "The Hear Me Out program helped me navigate a difficult relationship challenge. Mahfuz's approach of
                  truly listening before offering guidance made all the difference."
                </p>
                <div className="flex items-center gap-4">
                  <div className="rounded-full overflow-hidden border border-zinc-800 h-10 w-10">
                    <img
                      src="/placeholder.svg?height=40&width=40"
                      alt="Client"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Anindita Chatterjee</p>
                    <p className="text-xs text-zinc-500">Hear Me Out Program</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-zinc-950 border-zinc-800">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="mb-4 text-zinc-300">
                  "I've achieved goals I never thought possible. Mahfuz helped me create a clear vision and actionable
                  steps to get there. His coaching has been transformative."
                </p>
                <div className="flex items-center gap-4">
                  <div className="rounded-full overflow-hidden border border-zinc-800 h-10 w-10">
                    <img
                      src="/placeholder.svg?height=40&width=40"
                      alt="Client"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Soumitra Banerjee</p>
                    <p className="text-xs text-zinc-500">Personal Development</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-col items-center gap-4 pt-4">
            <div className="flex items-center gap-1">
              <Star className="h-6 w-6 fill-amber-500 text-amber-500" />
              <span className="text-xl font-bold">4.9 out of 5</span>
              <span className="text-zinc-400 ml-2">based on 120+ reviews</span>
            </div>
            <Button className="bg-zinc-800 text-white hover:bg-zinc-700" asChild>
              <Link href="#contact">Experience the Transformation</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

