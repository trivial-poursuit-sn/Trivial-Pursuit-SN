import Link from "next/link"

export function Footer() {

  const date = new Date().getFullYear()

  return (
    <footer className="bg-muted p-6 md:py-12 w-full mt-auto">
      <div className="container max-w-7xl flex flex-col items-center gap-4 text-sm text-muted-foreground md:flex-row md:justify-between">
        <p>
            © {date} Trivial Pursuit SN. Tous droits réservés.
        </p>
        <Link href="https://github.com/trivial-poursuit-sn" className="hover:underline" prefetch={false}>
          Suivez-nous sur GitHub
        </Link>
      </div>
    </footer>
  )
}