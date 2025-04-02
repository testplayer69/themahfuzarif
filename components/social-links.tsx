import Link from "next/link"
import { Facebook, Instagram, Mail, Youtube } from "lucide-react"

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <Link
        href="mailto:talktomahfuzarif@gmail.com"
        className="text-zinc-400 hover:text-amber-500 transition-colors"
        aria-label="Email"
      >
        <Mail className="h-5 w-5" />
      </Link>
      <Link
        href="https://www.facebook.com/profile.php?id=100088085047205"
        target="_blank"
        rel="noopener noreferrer"
        className="text-zinc-400 hover:text-amber-500 transition-colors"
        aria-label="Facebook"
      >
        <Facebook className="h-5 w-5" />
      </Link>
      <Link
        href="https://www.instagram.com/mahfuz_arif13?igsh=MWpmZjVjcGh6OHJwdg=="
        target="_blank"
        rel="noopener noreferrer"
        className="text-zinc-400 hover:text-amber-500 transition-colors"
        aria-label="Instagram"
      >
        <Instagram className="h-5 w-5" />
      </Link>
      <Link
        href="https://www.youtube.com/@Mahfuz_arif"
        target="_blank"
        rel="noopener noreferrer"
        className="text-zinc-400 hover:text-amber-500 transition-colors"
        aria-label="YouTube"
      >
        <Youtube className="h-5 w-5" />
      </Link>
    </div>
  )
}

