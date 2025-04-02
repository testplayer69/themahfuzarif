import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t bg-navy-950 text-white">
      <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-20">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-navy-400 to-navy-200">
                PREMIUM
              </span>
            </Link>
            <p className="text-navy-300 max-w-xs">
              Elevating brands with premium design and strategic solutions since 2023.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-navy-300 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-navy-300 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-navy-300 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-navy-300 hover:text-white">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-navy-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-navy-300 hover:text-white">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="#" className="text-navy-300 hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-navy-300 hover:text-white">
                  Press
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-navy-300 hover:text-white">
                  Custom Design
                </Link>
              </li>
              <li>
                <Link href="#" className="text-navy-300 hover:text-white">
                  Development
                </Link>
              </li>
              <li>
                <Link href="#" className="text-navy-300 hover:text-white">
                  Consulting
                </Link>
              </li>
              <li>
                <Link href="#" className="text-navy-300 hover:text-white">
                  Brand Identity
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="space-y-2">
              <li className="text-navy-300">
                123 Premium Avenue
                <br />
                New York, NY 10001
              </li>
              <li>
                <Link href="mailto:info@premium.com" className="text-navy-300 hover:text-white">
                  info@premium.com
                </Link>
              </li>
              <li>
                <Link href="tel:+1234567890" className="text-navy-300 hover:text-white">
                  +1 (234) 567-890
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-navy-800 pt-8 text-center text-navy-300">
          <p>© {new Date().getFullYear()} Premium. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

