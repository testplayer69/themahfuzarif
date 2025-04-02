import { ArrowRight } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export function Services() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-navy-100 px-3 py-1 text-sm text-navy-900 dark:bg-navy-800 dark:text-navy-100">
              Our Services
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Premium Solutions</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore our range of premium services designed to meet your needs with excellence.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="group relative overflow-hidden rounded-lg border border-navy-200 bg-white transition-all hover:shadow-lg dark:border-navy-800 dark:bg-navy-950">
            <div className="absolute inset-0 bg-gradient-to-b from-navy-900/10 to-navy-900/0 opacity-0 transition-opacity group-hover:opacity-100"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold">Custom Design</h3>
              <p className="mt-2 text-muted-foreground">
                Tailored design solutions that perfectly align with your brand identity and goals.
              </p>
              <Link
                href="#"
                className="mt-4 inline-flex items-center text-sm font-medium text-navy-900 dark:text-navy-100"
              >
                Learn more
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg border border-navy-200 bg-white transition-all hover:shadow-lg dark:border-navy-800 dark:bg-navy-950">
            <div className="absolute inset-0 bg-gradient-to-b from-navy-900/10 to-navy-900/0 opacity-0 transition-opacity group-hover:opacity-100"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold">Premium Development</h3>
              <p className="mt-2 text-muted-foreground">
                Cutting-edge development services that bring your vision to life with precision.
              </p>
              <Link
                href="#"
                className="mt-4 inline-flex items-center text-sm font-medium text-navy-900 dark:text-navy-100"
              >
                Learn more
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg border border-navy-200 bg-white transition-all hover:shadow-lg dark:border-navy-800 dark:bg-navy-950">
            <div className="absolute inset-0 bg-gradient-to-b from-navy-900/10 to-navy-900/0 opacity-0 transition-opacity group-hover:opacity-100"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold">Strategic Consulting</h3>
              <p className="mt-2 text-muted-foreground">
                Expert guidance to help you navigate challenges and capitalize on opportunities.
              </p>
              <Link
                href="#"
                className="mt-4 inline-flex items-center text-sm font-medium text-navy-900 dark:text-navy-100"
              >
                Learn more
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg border border-navy-200 bg-white transition-all hover:shadow-lg dark:border-navy-800 dark:bg-navy-950">
            <div className="absolute inset-0 bg-gradient-to-b from-navy-900/10 to-navy-900/0 opacity-0 transition-opacity group-hover:opacity-100"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold">Brand Identity</h3>
              <p className="mt-2 text-muted-foreground">
                Comprehensive branding solutions that establish a strong and memorable presence.
              </p>
              <Link
                href="#"
                className="mt-4 inline-flex items-center text-sm font-medium text-navy-900 dark:text-navy-100"
              >
                Learn more
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg border border-navy-200 bg-white transition-all hover:shadow-lg dark:border-navy-800 dark:bg-navy-950">
            <div className="absolute inset-0 bg-gradient-to-b from-navy-900/10 to-navy-900/0 opacity-0 transition-opacity group-hover:opacity-100"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold">Premium Support</h3>
              <p className="mt-2 text-muted-foreground">
                Dedicated support services to ensure your continued success and satisfaction.
              </p>
              <Link
                href="#"
                className="mt-4 inline-flex items-center text-sm font-medium text-navy-900 dark:text-navy-100"
              >
                Learn more
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg border border-navy-200 bg-white transition-all hover:shadow-lg dark:border-navy-800 dark:bg-navy-950">
            <div className="absolute inset-0 bg-gradient-to-b from-navy-900/10 to-navy-900/0 opacity-0 transition-opacity group-hover:opacity-100"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold">Quality Assurance</h3>
              <p className="mt-2 text-muted-foreground">
                Rigorous testing and quality control to deliver flawless products and services.
              </p>
              <Link
                href="#"
                className="mt-4 inline-flex items-center text-sm font-medium text-navy-900 dark:text-navy-100"
              >
                Learn more
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Button className="bg-navy-900 hover:bg-navy-800 text-white">View All Services</Button>
        </div>
      </div>
    </section>
  )
}

