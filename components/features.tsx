import { Check, Gem, Shield, Star } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Features() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-navy-100 px-3 py-1 text-sm text-navy-900 dark:bg-navy-800 dark:text-navy-100">
              Key Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Premium Quality & Excellence</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover the features that set our premium services apart from the rest.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <Card className="border-navy-200 bg-white dark:bg-navy-950 dark:border-navy-800">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-navy-100 p-1 dark:bg-navy-800">
                  <Gem className="h-6 w-6 text-navy-900 dark:text-navy-100" />
                </div>
                <CardTitle className="text-xl">Premium Materials</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                We use only the highest quality materials to ensure durability and elegance in every product.
              </CardDescription>
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-navy-900 dark:text-navy-100" />
                  <span className="text-sm text-muted-foreground">Ethically sourced</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-navy-900 dark:text-navy-100" />
                  <span className="text-sm text-muted-foreground">Sustainable production</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-navy-900 dark:text-navy-100" />
                  <span className="text-sm text-muted-foreground">Exceptional durability</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-navy-200 bg-white dark:bg-navy-950 dark:border-navy-800">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-navy-100 p-1 dark:bg-navy-800">
                  <Star className="h-6 w-6 text-navy-900 dark:text-navy-100" />
                </div>
                <CardTitle className="text-xl">Expert Craftsmanship</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Our team of skilled artisans brings decades of experience to create exceptional products.
              </CardDescription>
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-navy-900 dark:text-navy-100" />
                  <span className="text-sm text-muted-foreground">Meticulous attention to detail</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-navy-900 dark:text-navy-100" />
                  <span className="text-sm text-muted-foreground">Precision engineering</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-navy-900 dark:text-navy-100" />
                  <span className="text-sm text-muted-foreground">Handcrafted excellence</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-navy-200 bg-white dark:bg-navy-950 dark:border-navy-800">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-navy-100 p-1 dark:bg-navy-800">
                  <Shield className="h-6 w-6 text-navy-900 dark:text-navy-100" />
                </div>
                <CardTitle className="text-xl">Lifetime Guarantee</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                We stand behind our products with a comprehensive lifetime guarantee for your peace of mind.
              </CardDescription>
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-navy-900 dark:text-navy-100" />
                  <span className="text-sm text-muted-foreground">Free repairs</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-navy-900 dark:text-navy-100" />
                  <span className="text-sm text-muted-foreground">Replacement options</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-navy-900 dark:text-navy-100" />
                  <span className="text-sm text-muted-foreground">Transferable warranty</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

