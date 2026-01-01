import { Suspense } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, FileText, Search, Download, Users } from "lucide-react"
import Link from "next/link"

function AnalyticsContent() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative pt-24 pb-16 lg:pt-32 lg:pb-24"
        style={{
          backgroundImage: 'url("/images/image.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[oklch(0.35_0.14_250)]/95" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white/10 backdrop-blur-sm rounded-lg mb-6 border-2 border-white/30">
              <span className="text-white font-serif font-bold text-3xl">CA</span>
            </div>
            <h1 className="font-serif font-bold text-4xl lg:text-6xl text-white mb-6 text-balance">CEROS Analytics</h1>
            <p className="text-xl lg:text-2xl text-white/90 font-serif mb-8 leading-relaxed text-balance">
              Analyse stratégique et systémique pour la prise de décision éclairée
            </p>
            <p className="text-lg text-white/80 leading-relaxed max-w-3xl mx-auto">
              Notre division Analytics fournit des articles scientifiques, des outils analytiques et des modèles d'aide
              à la décision basés sur des méthodologies rigoureuses et éprouvées.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[oklch(0.35_0.14_250)] mb-12 text-center">
              Nos Services Analytiques
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <Card className="p-8 border-2 border-[oklch(0.35_0.14_250)]/20 hover:border-[oklch(0.35_0.14_250)] transition-all hover:shadow-xl">
                <FileText className="w-12 h-12 text-[oklch(0.35_0.14_250)] mb-4" />
                <h3 className="font-serif font-bold text-2xl text-foreground mb-4">Publications Scientifiques</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Accédez à notre base de données d'articles scientifiques couvrant l'optimisation stratégique,
                  l'ingénierie décisionnelle et les systèmes complexes.
                </p>
              </Card>

              <Card className="p-8 border-2 border-[oklch(0.35_0.14_250)]/20 hover:border-[oklch(0.35_0.14_250)] transition-all hover:shadow-xl">
                <Search className="w-12 h-12 text-[oklch(0.35_0.14_250)] mb-4" />
                <h3 className="font-serif font-bold text-2xl text-foreground mb-4">Outils d'Analyse</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Découvrez nos outils analytiques propriétaires conçus pour faciliter l'analyse de données complexes et
                  la modélisation décisionnelle.
                </p>
              </Card>

              <Card className="p-8 border-2 border-[oklch(0.35_0.14_250)]/20 hover:border-[oklch(0.35_0.14_250)] transition-all hover:shadow-xl">
                <Download className="w-12 h-12 text-[oklch(0.35_0.14_250)] mb-4" />
                <h3 className="font-serif font-bold text-2xl text-foreground mb-4">Rapports & Études</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Téléchargez nos rapports d'analyse approfondie et nos études de cas sur des problématiques
                  stratégiques contemporaines.
                </p>
              </Card>

              <Card className="p-8 border-2 border-[oklch(0.35_0.14_250)]/20 hover:border-[oklch(0.35_0.14_250)] transition-all hover:shadow-xl">
                <Users className="w-12 h-12 text-[oklch(0.35_0.14_250)] mb-4" />
                <h3 className="font-serif font-bold text-2xl text-foreground mb-4">Espace Membres</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Rejoignez notre communauté de chercheurs et praticiens pour accéder à du contenu exclusif et des
                  ressources avancées.
                </p>
              </Card>
            </div>

            {/* Featured Articles */}
            <h3 className="font-serif font-bold text-2xl lg:text-3xl text-foreground mb-8">Articles Récents</h3>

            <div className="space-y-6 mb-12">
              <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-[oklch(0.35_0.14_250)]">
                <h4 className="font-serif font-bold text-xl text-foreground mb-2">
                  Optimisation Multi-Critères dans les Systèmes Décisionnels Complexes
                </h4>
                <p className="text-sm text-foreground/60 mb-3">Publié le 15 Mars 2024</p>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Une analyse approfondie des méthodologies d'optimisation multi-critères appliquées aux systèmes
                  décisionnels complexes dans le contexte africain.
                </p>
                <Button
                  variant="outline"
                  className="border-[oklch(0.35_0.14_250)] text-[oklch(0.35_0.14_250)] bg-transparent"
                >
                  Lire l'article
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-[oklch(0.35_0.14_250)]">
                <h4 className="font-serif font-bold text-xl text-foreground mb-2">
                  L'Ingénierie Décisionnelle au Service de la Gouvernance
                </h4>
                <p className="text-sm text-foreground/60 mb-3">Publié le 8 Mars 2024</p>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Comment l'ingénierie décisionnelle systémique peut transformer les processus de gouvernance et
                  améliorer l'efficacité des politiques publiques.
                </p>
                <Button
                  variant="outline"
                  className="border-[oklch(0.35_0.14_250)] text-[oklch(0.35_0.14_250)] bg-transparent"
                >
                  Lire l'article
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-[oklch(0.35_0.14_250)]">
                <h4 className="font-serif font-bold text-xl text-foreground mb-2">
                  Modélisation Systémique pour le Développement Durable
                </h4>
                <p className="text-sm text-foreground/60 mb-3">Publié le 1 Mars 2024</p>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Exploration des approches de modélisation systémique pour concevoir des stratégies de développement
                  durable et résilientes.
                </p>
                <Button
                  variant="outline"
                  className="border-[oklch(0.35_0.14_250)] text-[oklch(0.35_0.14_250)] bg-transparent"
                >
                  Lire l'article
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-[oklch(0.35_0.14_250)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif font-bold text-3xl lg:text-4xl text-white mb-6 text-balance">
              Accédez à nos ressources analytiques
            </h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Rejoignez notre espace membres pour bénéficier d'un accès complet à nos publications, outils et analyses
              stratégiques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-[oklch(0.35_0.14_250)] hover:bg-white/90"
                >
                  Devenir membre
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
    </>
  )
}

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Suspense fallback={null}>
        <AnalyticsContent />
      </Suspense>
      <Footer />
    </div>
  )
}
