import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Award, Users, Globe, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="relative pt-20 pb-16 lg:pt-28 lg:pb-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto mb-20">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      
      {/* Left content */}
      <div className="space-y-6">
        <div>
          <p className="text-primary font-semibold text-sm tracking-wider mb-2">
            FONDATEUR & DIRECTEUR
          </p>
          <h2 className="font-serif font-bold text-4xl lg:text-5xl text-foreground mb-4">
            Merlin Kamto
          </h2>
          <p className="text-xl text-foreground/80 font-serif italic mb-6">
            Conseiller Stratégique
          </p>
        </div>

        <p className="text-lg text-foreground/80 leading-relaxed">
          Expert en optimisation stratégique et ingénierie décisionnelle, le Professeur Kamto dirige le CEROS
          MKP avec pour mission d'accompagner les gouvernements et institutions dans leurs défis stratégiques
          majeurs.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Link href="/about">
            <Button className="bg-black hover:bg-black/90 text-white px-8 py-6 text-base font-semibold">
              Lire la lettre complète
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>

<Link href="#contact-footer">
            <Button
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary/10 px-8 py-6 bg-transparent"
            >
              Nous contacter
            </Button>
          </Link>
        </div>
      </div>

      {/* Right content */}
      <div className="relative w-full max-w-md mx-auto">
        <Card className="overflow-hidden shadow-2xl border-0 p-0 bg-white">
          <div className="relative w-full h-[420px]">
            <Image
              src="/images/im6.jpeg"
              alt="Merlin Kamto - Conseiller Stratégique - Fondateur CEROS MKP"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </Card>
      </div>

    </div>
  </div>

  {/* Section Stats */}
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
    <Card className="p-6 text-center bg-white border-primary/20">
      <Globe className="w-8 h-8 text-primary mx-auto mb-3" />
      <p className="text-3xl font-bold text-primary mb-1">7+</p>
      <p className="text-sm text-foreground/70">Années d'expertise</p>
    </Card>

    <Card className="p-6 text-center bg-white border-primary/20">
      <Users className="w-8 h-8 text-primary mx-auto mb-3" />
      <p className="text-3xl font-bold text-primary mb-1">15+</p>
      <p className="text-sm text-foreground/70">Projets stratégiques</p>
    </Card>

    <Card className="p-6 text-center bg-white border-primary/20">
      <Award className="w-8 h-8 text-primary mx-auto mb-3" />
      <p className="text-3xl font-bold text-primary mb-1">100%</p>
      <p className="text-sm text-foreground/70">Excellence</p>
    </Card>

    <Card className="p-6 text-center bg-white border-primary/20">
      <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
      <p className="text-3xl font-bold text-primary mb-1">3</p>
      <p className="text-sm text-foreground/70">Domaines clés</p>
    </Card>
  </div>
        </div>
        
      </section>

      <section className="py-20 lg:py-28 bg-primary/8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold text-sm tracking-wider mb-4">NOS EXPERTISES</p>
            <h2 className="font-serif font-bold text-4xl lg:text-5xl text-primary mb-6 text-balance">
              Domaines d'Excellence
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              Trois piliers stratégiques pour accompagner institutions, gouvernements et décideurs dans leurs enjeux
              majeurs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* CEROS Analytics */}
            <Link href="/analytics" className="group">
              <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-[oklch(0.35_0.14_250)] cursor-pointer bg-white hover:-translate-y-2">
                <div
                  className="h-48 relative"
                  style={{
                    backgroundImage: 'url("/images/image.png")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-[oklch(0.35_0.14_250)]/90 flex items-center justify-center">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-[oklch(0.35_0.14_250)] rounded-lg mb-3 border-2 border-white">
                        <span className="text-white font-serif font-bold text-xl">CA</span>
                      </div>
                      <p className="text-white font-serif text-sm tracking-wider">CEROS ANALYTICS</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif font-bold text-2xl text-[oklch(0.35_0.14_250)] mb-3">
                    Analyse stratégique et systémique
                  </h3>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    Articles scientifiques, outils analytiques et modèles d'aide à la décision pour une analyse
                    stratégique et systémique rigoureuse.
                  </p>
                  <div className="flex items-center text-[oklch(0.35_0.14_250)] font-semibold group-hover:gap-2 transition-all">
                    En savoir plus
                    <ArrowRight className="ml-1 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Card>
            </Link>

            {/* CEROS Innovations */}
            <Link href="/innovations" className="group">
              <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-[oklch(0.65_0.18_45)] cursor-pointer bg-white hover:-translate-y-2">
                <div
                  className="h-48 relative"
                  style={{
                    backgroundImage: 'url("/images/image.png")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-[oklch(0.65_0.18_45)]/90 flex items-center justify-center">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-[oklch(0.65_0.18_45)] rounded-lg mb-3 border-2 border-white">
                        <span className="text-white font-serif font-bold text-xl">CI</span>
                      </div>
                      <p className="text-white font-serif text-sm tracking-wider">CEROS INNOVATIONS</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif font-bold text-2xl text-[oklch(0.65_0.18_45)] mb-3">
                    Générateur de Solutions contextuelles
                  </h3>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    Présentation de solutions innovantes, produits, idées et prototypes pour répondre aux défis
                    contemporains.
                  </p>
                  <div className="flex items-center text-[oklch(0.65_0.18_45)] font-semibold group-hover:gap-2 transition-all">
                    En savoir plus
                    <ArrowRight className="ml-1 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Card>
            </Link>

            {/* CEROS Governments */}
            <Link href="/governments" className="group">
              <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-[oklch(0.45_0.20_25)] cursor-pointer bg-white hover:-translate-y-2">
                <div
                  className="h-48 relative"
                  style={{
                    backgroundImage: 'url("/images/image.png")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-[oklch(0.45_0.20_25)]/90 flex items-center justify-center">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-[oklch(0.45_0.20_25)] rounded-lg mb-3 border-2 border-white">
                        <span className="text-white font-serif font-bold text-xl">CG</span>
                      </div>
                      <p className="text-white font-serif text-sm tracking-wider">CEROS GOVERNMENTS</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif font-bold text-2xl text-[oklch(0.45_0.20_25)] mb-3">
                    Stratégie nationale de développement
                  </h3>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    Publication d'études sectorielles et propositions stratégiques pour les décideurs publics et
                    institutions.
                  </p>
                  <div className="flex items-center text-[oklch(0.45_0.20_25)] font-semibold group-hover:gap-2 transition-all">
                    En savoir plus
                    <ArrowRight className="ml-1 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-b from-primary/5 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 lg:p-12 bg-primary text-primary-foreground shadow-2xl">
              <div className="text-center">
                <Award className="w-12 h-12 mx-auto mb-6 opacity-90" />
                <h2 className="font-serif font-bold text-3xl lg:text-5xl mb-6 text-balance">
                  Transformez vos défis en opportunités stratégiques
                </h2>
                <p className="text-lg lg:text-xl mb-8 leading-relaxed opacity-95 max-w-2xl mx-auto">
                  Institutions, partenaires et décideurs publics, découvrez comment CEROS MKP peut vous accompagner dans
                  vos enjeux de gouvernance et d'optimisation stratégique.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" className="bg-white text-primary hover:bg-white/90 w-full sm:w-auto">
                      Planifier une consultation
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-white text-white hover:bg-white/10 w-full sm:w-auto bg-transparent"
                    >
                      Notre approche
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
