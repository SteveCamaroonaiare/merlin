import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero section */}
      <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-b from-primary/10 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif font-bold text-5xl lg:text-6xl text-primary mb-6 text-balance">
              À Propos du CEROS MKP
            </h1>
            <p className="text-xl lg:text-2xl text-foreground/80 leading-relaxed text-balance">
              Centre de Recherche en Optimisation Stratégique & Bureau de Négoce de Biens Industriels et Commerciaux
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="font-serif font-bold text-4xl text-primary mb-6">Notre Mission</h2>
                <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                  Le CEROS MKP se voue à l'accompagnement stratégique des gouvernements, institutions et décideurs
                  publics dans la résolution de leurs enjeux les plus complexes. Nous apportons une expertise en
                  ingénierie décisionnelle systémique.
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Par la science de la décision, nous permettons aux pouvoirs d'exister et de prospérer dans un contexte
                  d'incertitude et de complexité.
                </p>
              </div>

              <div>
                <h2 className="font-serif font-bold text-4xl text-primary mb-6">Notre Vision</h2>
                <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                  Devenir le centre de référence africain en matière d'optimisation stratégique et d'aide à la décision
                  gouvernementale.
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Nous aspirons à créer un écosystème où la rigueur analytique et la vision stratégique transforment les
                  défis en opportunités de développement durable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="py-20 lg:py-28 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="font-serif font-bold text-4xl text-primary mb-6">Fondateur & Directeur</h2>
                <h3 className="font-serif font-bold text-3xl text-foreground mb-4">Merlin Kamto</h3>
                <p className="text-primary font-semibold text-lg mb-6">Conseiller Stratégique</p>

                <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                  Expert reconnu en optimisation stratégique et ingénierie décisionnelle, Merlin Kamto a consacré sa
                  carrière à accompagner les plus hautes sphères décisionnelles dans leurs transformations stratégiques
                  majeures.
                </p>

                <p className="text-lg text-foreground/80 leading-relaxed">
                  Sa conviction que « la science de la décision permet aux pouvoirs d'exister » guide chaque initiative
                  du CEROS MKP vers l'excellence et l'impact durable.
                </p>
              </div>

            <div className="relative w-full max-w-md mx-auto">
  <Card className="overflow-hidden shadow-2xl border-0 p-0 bg-white">
    <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[480px]">
      <Image
        src="/images/image.png"
        alt="Merlin Kamto - Conseiller Stratégique - Fondateur CEROS MKP"
        fill
        className="object-cover"
        priority
      />
    </div>
  </Card>
</div>

            </div>
          </div>
        </div>
      </section>

      {/* Values section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif font-bold text-4xl text-primary mb-16 text-center">Nos Valeurs</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-8 bg-primary/5 border-primary/20">
                <h3 className="font-serif font-bold text-2xl text-primary mb-4">Excellence</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Chaque analyse, chaque recommandation, chaque solution est produite selon les plus hauts standards
                  d'excellence académique et professionnelle.
                </p>
              </Card>

              <Card className="p-8 bg-primary/5 border-primary/20">
                <h3 className="font-serif font-bold text-2xl text-primary mb-4">Rigueur</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Nous nous appuyons sur une méthodologie robuste, des données fiables et une analyse systémique pour
                  produire des insights probants.
                </p>
              </Card>

              <Card className="p-8 bg-primary/5 border-primary/20">
                <h3 className="font-serif font-bold text-2xl text-primary mb-4">Impact</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Nos travaux visent à générer un impact stratégique mesurable et durable pour nos partenaires et la
                  société.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}