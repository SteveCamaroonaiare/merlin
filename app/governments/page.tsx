import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Building2, FileText, TrendingUp, Shield } from "lucide-react"
import Link from "next/link"

export default function GovernmentsPage() {
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
        <div className="absolute inset-0 bg-[oklch(0.45_0.20_25)]/95" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white/10 backdrop-blur-sm rounded-lg mb-6 border-2 border-white/30">
              <span className="text-white font-serif font-bold text-3xl">CG</span>
            </div>
            <h1 className="font-serif font-bold text-4xl lg:text-6xl text-white mb-6 text-balance">
              CEROS Governments
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 font-serif mb-8 leading-relaxed text-balance">
              Stratégies nationales de développement et accompagnement des décideurs publics
            </p>
            <p className="text-lg text-white/80 leading-relaxed max-w-3xl mx-auto">
              Notre division Governments élabore des stratégies de développement national, des études sectorielles et
              des propositions stratégiques pour accompagner les gouvernements et institutions publiques.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif font-bold text-3xl lg:text-4xl text-[oklch(0.45_0.20_25)] mb-12 text-center">
              Nos Domaines d'Intervention
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <Card className="p-8 border-2 border-[oklch(0.45_0.20_25)]/20 hover:border-[oklch(0.45_0.20_25)] transition-all hover:shadow-xl">
                <Building2 className="w-12 h-12 text-[oklch(0.45_0.20_25)] mb-4" />
                <h3 className="font-serif font-bold text-2xl text-foreground mb-4">Études Sectorielles</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Analyses approfondies par secteur ministériel (santé, éducation, infrastructure, économie) pour
                  identifier les leviers de développement prioritaires.
                </p>
              </Card>

              <Card className="p-8 border-2 border-[oklch(0.45_0.20_25)]/20 hover:border-[oklch(0.45_0.20_25)] transition-all hover:shadow-xl">
                <FileText className="w-12 h-12 text-[oklch(0.45_0.20_25)] mb-4" />
                <h3 className="font-serif font-bold text-2xl text-foreground mb-4">Propositions Stratégiques</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Élaboration de plans stratégiques nationaux et régionaux basés sur des méthodologies éprouvées et
                  adaptées aux contextes locaux.
                </p>
              </Card>

              <Card className="p-8 border-2 border-[oklch(0.45_0.20_25)]/20 hover:border-[oklch(0.45_0.20_25)] transition-all hover:shadow-xl">
                <TrendingUp className="w-12 h-12 text-[oklch(0.45_0.20_25)] mb-4" />
                <h3 className="font-serif font-bold text-2xl text-foreground mb-4">Veille Gouvernementale</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Suivi et analyse des meilleures pratiques internationales en matière de gouvernance et de politiques
                  publiques pour inspirer l'innovation institutionnelle.
                </p>
              </Card>

              <Card className="p-8 border-2 border-[oklch(0.45_0.20_25)]/20 hover:border-[oklch(0.45_0.20_25)] transition-all hover:shadow-xl">
                <Shield className="w-12 h-12 text-[oklch(0.45_0.20_25)] mb-4" />
                <h3 className="font-serif font-bold text-2xl text-foreground mb-4">Archives de Politiques</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Base de données documentaire des politiques publiques africaines et internationales pour faciliter la
                  recherche et le benchmarking.
                </p>
              </Card>
            </div>

            {/* Featured Studies */}
            <h3 className="font-serif font-bold text-2xl lg:text-3xl text-foreground mb-8">Études Récentes</h3>

            <div className="space-y-6 mb-12">
              <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-[oklch(0.45_0.20_25)]">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="inline-block bg-[oklch(0.45_0.20_25)]/10 text-[oklch(0.45_0.20_25)] px-3 py-1 rounded-full text-xs font-semibold mb-3">
                      Développement Économique
                    </div>
                    <h4 className="font-serif font-bold text-xl text-foreground mb-2">
                      Stratégie Nationale d'Industrialisation pour le Cameroun 2025-2035
                    </h4>
                  </div>
                </div>
                <p className="text-sm text-foreground/60 mb-3">Mars 2024</p>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Une feuille de route complète pour transformer l'économie camerounaise à travers une industrialisation
                  inclusive, durable et génératrice d'emplois qualifiés.
                </p>
                <Button
                  variant="outline"
                  className="border-[oklch(0.45_0.20_25)] text-[oklch(0.45_0.20_25)] bg-transparent"
                >
                  Télécharger l'étude
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-[oklch(0.45_0.20_25)]">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="inline-block bg-[oklch(0.45_0.20_25)]/10 text-[oklch(0.45_0.20_25)] px-3 py-1 rounded-full text-xs font-semibold mb-3">
                      Santé Publique
                    </div>
                    <h4 className="font-serif font-bold text-xl text-foreground mb-2">
                      Réforme du Système de Santé : Vers une Couverture Universelle
                    </h4>
                  </div>
                </div>
                <p className="text-sm text-foreground/60 mb-3">Février 2024</p>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Propositions pour une réforme structurelle du système de santé visant à garantir un accès équitable
                  aux soins de qualité pour tous les citoyens.
                </p>
                <Button
                  variant="outline"
                  className="border-[oklch(0.45_0.20_25)] text-[oklch(0.45_0.20_25)] bg-transparent"
                >
                  Télécharger l'étude
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-[oklch(0.45_0.20_25)]">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="inline-block bg-[oklch(0.45_0.20_25)]/10 text-[oklch(0.45_0.20_25)] px-3 py-1 rounded-full text-xs font-semibold mb-3">
                      Éducation
                    </div>
                    <h4 className="font-serif font-bold text-xl text-foreground mb-2">
                      Transformation Numérique de l'Éducation Nationale
                    </h4>
                  </div>
                </div>
                <p className="text-sm text-foreground/60 mb-3">Janvier 2024</p>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Plan stratégique pour intégrer les technologies numériques dans le système éducatif et préparer la
                  jeunesse aux défis du 21ème siècle.
                </p>
                <Button
                  variant="outline"
                  className="border-[oklch(0.45_0.20_25)] text-[oklch(0.45_0.20_25)] bg-transparent"
                >
                  Télécharger l'étude
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-[oklch(0.45_0.20_25)]">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="inline-block bg-[oklch(0.45_0.20_25)]/10 text-[oklch(0.45_0.20_25)] px-3 py-1 rounded-full text-xs font-semibold mb-3">
                      Infrastructure
                    </div>
                    <h4 className="font-serif font-bold text-xl text-foreground mb-2">
                      Plan Directeur des Infrastructures de Transport 2024-2040
                    </h4>
                  </div>
                </div>
                <p className="text-sm text-foreground/60 mb-3">Décembre 2023</p>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Stratégie intégrée pour moderniser et développer les infrastructures de transport routier,
                  ferroviaire, portuaire et aérien.
                </p>
                <Button
                  variant="outline"
                  className="border-[oklch(0.45_0.20_25)] text-[oklch(0.45_0.20_25)] bg-transparent"
                >
                  Télécharger l'étude
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-[oklch(0.45_0.20_25)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif font-bold text-3xl lg:text-4xl text-white mb-6 text-balance">
              Accompagnons votre vision stratégique
            </h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Vous êtes décideur public ou représentez une institution ? Découvrez comment CEROS MKP peut vous
              accompagner dans l'élaboration et la mise en œuvre de vos stratégies de développement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="bg-white text-[oklch(0.45_0.20_25)] hover:bg-white/90">
                  Demander un accompagnement
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
