import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"  
export function Footer() {
  return (
    <footer
    id="contact-footer" 
    className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">

          {/* Contact */}
          <div>
            <h3 className="font-serif font-bold text-xl mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Avenue King Akwa, Douala – Cameroun</span>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:merlink@cerosmkp.org" className="hover:underline">
                  merlink@cerosmkp.org
                </a>
              </div>

              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+237696343737" className="hover:underline">
                    (+237) 696 34 37 37
                  </a>
                  <a href="tel:+237670369494" className="hover:underline">
                    (+237) 670 36 94 94
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-serif font-bold text-xl mb-4">Nos Rubriques</h3>
            <div className="space-y-2 text-sm">
              <Link href="/analytics" className="block hover:underline">
                CEROS Analytics
              </Link>
              <Link href="/innovations" className="block hover:underline">
                CEROS Innovations
              </Link>
              <Link href="/governments" className="block hover:underline">
                CEROS Governments
              </Link>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="font-serif font-bold text-xl mb-4">À propos</h3>
            <p className="text-sm leading-relaxed opacity-90">
              Centre de Recherche en Optimisation Stratégique & Bureau de Négoce de
              Biens Industriels et Commerciaux.
            </p>
          </div>

          {/* WhatsApp QR */}
          <div className="flex flex-col items-center gap-4">

            {/* 🔰 Emblème Cameroun */}
            <Image
              src="/images/im2.jpg"
              alt="Emblème du Cameroun"
              width={120}
              height={120}
            />

            {/* QR Code */}
            <div className="border-4 border-green-900 p-2">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://wa.me/237696343737"
                alt="QR Code WhatsApp"
                className="w-[180px] h-[180px]"
              />
            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 pt-6 text-center text-sm opacity-90">
          <p>
            &copy; {new Date().getFullYear()} CEROS MKP. Tous droits réservés.
          </p>
        </div>

      </div>
    </footer>
  )
}
