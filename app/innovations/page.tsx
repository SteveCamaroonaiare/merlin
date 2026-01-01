import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Lightbulb, Rocket, Handshake, Send } from "lucide-react"
import Link from "next/link"

export default function InnovationsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section
        className="relative pt-24 pb-16 lg:pt-32 lg:pb-24"
        style={{
          backgroundImage: 'url("/images/image.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[oklch(0.65_0.18_45)]/95" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white/10 backdrop-blur-sm rounded-lg mb-6 border-2 border-white/30">
              <span className="text-white font-serif font-bold text-3xl">CI</span>
            </div>
            <h1 className="font-serif font-bold text-4xl lg:text-6xl text-white mb-6 text-balance">
              CEROS Innovations
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 font-serif mb-8 leading-relaxed text-balance">
              Générateur de solutions contextuelles pour les défis contemporains
            </p>
            <p className="text-lg text-white/80 leading-relaxed max-w-3xl mx-auto">
              Notre division Innovations conçoit et présente des solutions innovantes, produits, idées et prototypes
              adaptés aux réalités africaines et aux enjeux globaux.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[oklch(0.65_0.18_45)] mb-12 text-center">
              Notre Approche Innovation
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <Card className="p-8 border-2 border-[oklch(0.65_0.18_45)]/20 hover:border-[oklch(0.65_0.18_45)] transition-all hover:shadow-xl">
                <Lightbulb className="w-12 h-12 text-[oklch(0.65_0.18_45)] mb-4" />
                <h3 className="font-serif font-bold text-2xl text-foreground mb-4">Galerie d'Innovations</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Explorez notre portfolio de solutions innovantes conçues pour résoudre des problèmes concrets dans
                  divers secteurs d'activité.
                </p>
              </Card>

              <Card className="p-8 border-2 border-[oklch(0.65_0.18_45)]/20 hover:border-[oklch(0.65_0.18_45)] transition-all hover:shadow-xl">
                <Rocket className="w-12 h-12 text-[oklch(0.65_0.18_45)] mb-4" />
                <h3 className="font-serif font-bold text-2xl text-foreground mb-4">Projets Pilotes</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Découvrez nos projets pilotes en cours de développement et les prototypes testés sur le terrain avec
                  des partenaires stratégiques.
                </p>
              </Card>

              <Card className="p-8 border-2 border-[oklch(0.65_0.18_45)]/20 hover:border-[oklch(0.65_0.18_45)] transition-all hover:shadow-xl">
                <Handshake className="w-12 h-12 text-[oklch(0.65_0.18_45)] mb-4" />
                <h3 className="font-serif font-bold text-2xl text-foreground mb-4">Appels à Partenariats</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Consultez nos opportunités de collaboration et rejoignez-nous pour co-développer des solutions
                  innovantes à fort impact.
                </p>
              </Card>

              <Card className="p-8 border-2 border-[oklch(0.65_0.18_45)]/20 hover:border-[oklch(0.65_0.18_45)] transition-all hover:shadow-xl">
                <Send className="w-12 h-12 text-[oklch(0.65_0.18_45)] mb-4" />
                <h3 className="font-serif font-bold text-2xl text-foreground mb-4">Soumission de Projets</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Proposez vos idées innovantes et bénéficiez de notre accompagnement pour transformer vos concepts en
                  solutions viables.
                </p>
              </Card>
            </div>

            {/* Featured Innovations */}
            <h3 className="font-serif font-bold text-2xl lg:text-3xl text-foreground mb-8">Innovations Phares</h3>

            <div className="space-y-8 mb-12">
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="md:flex">
                  <div
                    className="md:w-1/3 h-64 md:h-auto"
                    style={{
                      backgroundImage: 'url("/images/image.png")',
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="w-full h-full bg-[oklch(0.65_0.18_45)]/80" />
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="inline-block bg-[oklch(0.65_0.18_45)]/10 text-[oklch(0.65_0.18_45)] px-4 py-1 rounded-full text-sm font-semibold mb-4">
                      Technologie Numérique
                    </div>
                    <h4 className="font-serif font-bold text-2xl text-foreground mb-3">
                      Plateforme de Gouvernance Intelligente
                    </h4>
                    <p className="text-foreground/80 leading-relaxed mb-4">
                      Un système intégré d'aide à la décision utilisant l'intelligence artificielle pour optimiser la
                      gestion des ressources publiques et améliorer la transparence gouvernementale.
                    </p>
                    <Button
                      variant="outline"
                      className="border-[oklch(0.65_0.18_45)] text-[oklch(0.65_0.18_45)] bg-transparent"
                    >
                      Découvrir le projet
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="md:flex">
                  <div
                    className="md:w-1/3 h-64 md:h-auto"
                    style={{
                      backgroundImage: 'url("/images/image.png")',
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="w-full h-full bg-[oklch(0.65_0.18_45)]/80" />
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="inline-block bg-[oklch(0.65_0.18_45)]/10 text-[oklch(0.65_0.18_45)] px-4 py-1 rounded-full text-sm font-semibold mb-4">
                      Développement Durable
                    </div>
                    <h4 className="font-serif font-bold text-2xl text-foreground mb-3">
                      Modèle Économique Circulaire pour l'Afrique
                    </h4>
                    <p className="text-foreground/80 leading-relaxed mb-4">
                      Un framework innovant pour implémenter des modèles d'économie circulaire adaptés aux réalités
                      économiques et sociales africaines, favorisant la durabilité et la création d'emplois.
                    </p>
                    <Button
                      variant="outline"
                      className="border-[oklch(0.65_0.18_45)] text-[oklch(0.65_0.18_45)] bg-transparent"
                    >
                      Découvrir le projet
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="md:flex">
                  <div
                    className="md:w-1/3 h-64 md:h-auto"
                    style={{
                      backgroundImage: 'url("/images/image.png")',
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="w-full h-full bg-[oklch(0.65_0.18_45)]/80" />
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="inline-block bg-[oklch(0.65_0.18_45)]/10 text-[oklch(0.65_0.18_45)] px-4 py-1 rounded-full text-sm font-semibold mb-4">
                      Innovation Sociale
                    </div>
                    <h4 className="font-serif font-bold text-2xl text-foreground mb-3">
                      Système d'Éducation Adaptative
                    </h4>
                    <p className="text-foreground/80 leading-relaxed mb-4">
                      Une solution d'apprentissage personnalisé utilisant des données contextuelles pour adapter les
                      contenus éducatifs aux besoins spécifiques de chaque apprenant.
                    </p>
                    <Button
                      variant="outline"
                      className="border-[oklch(0.65_0.18_45)] text-[oklch(0.65_0.18_45)] bg-transparent"
                    >
                      Découvrir le projet
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-[oklch(0.65_0.18_45)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif font-bold text-3xl lg:text-4xl text-white mb-6 text-balance">
              Collaborons pour innover
            </h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Vous avez une idée innovante ou souhaitez devenir partenaire ? Contactez-nous pour explorer ensemble des
              opportunités de collaboration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="bg-white text-[oklch(0.65_0.18_45)] hover:bg-white/90">
                  Soumettre un projet
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 hover:text-white bg-transparent"
                >
                  Retour à l'accueil
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
