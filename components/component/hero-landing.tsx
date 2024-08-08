import Link from "next/link"

export function HeroLanding() {
  return (
    <section
      className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('/assets/images/hero (3).png')` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.6)]" />
      <div className="relative z-10 text-center text-white max-w-3xl px-4">
        <div className="drop-shadow-lg backdrop-blur-sm bg-black/30 p-4 rounded-lg m-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Trivial Pursuit SN</h1>
          <p className="text-lg md:text-xl mb-8 font-semibold text-white">
            Testez vos connaissances en informatique avec ce jeu de questions-réponses pour les Premières et Terminale SN.
          </p>
        </div>
        <Link
          href="/"
          className="inline-flex items-center justify-center h-12 px-6 rounded-md bg-primary text-primary-foreground font-medium transition-colors hover:bg-primary/90 focus:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          prefetch={false}
        >
          Télécharger l'application dès maintenant (Coming soon)
        </Link>
      </div>
    </section>
  )
}
