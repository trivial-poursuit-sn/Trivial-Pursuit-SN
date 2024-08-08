import Link from "next/link"
import { ModeToggle } from "./ModeToggle"

export function Navbar() {
  return (
    <header className="flex items-center justify-between bg-background px-4 py-3 shadow-sm sm:px-6">
      <Link href="/" className="text-2xl font-bold" prefetch={false}>
        Trivial Pursuit SN
      </Link>
      <nav className="flex items-center space-x-4 text-sm font-medium">
        <Link href="/devblog" className="hover:text-primary" prefetch={false}>
            Devblog
        </Link>
        <Link href="#equipe" className="hover:text-primary" prefetch={false}>
            Équipes
        </Link>
        <Link href="#contact" className="hover:text-primary" prefetch={false}>
          Contact
        </Link>
        <ModeToggle/>
      </nav>
    </header>
  )
}
