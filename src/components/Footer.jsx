
import { motion } from "framer-motion"
import { MapPin, Phone, Clock, ArrowUp } from "lucide-react"

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="border-t border-white/10 bg-[#070707]">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 lg:px-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold tracking-[0.2em]">
              STEAK <span className="text-amber-400">HAUS</span>
            </h3>

            <p className="mt-6 max-w-xs leading-7 text-gray-500">
              Une expérience autour de la viande, du goût et du savoir-faire
              au cœur de Tunis.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:border-amber-400 hover:text-amber-400"
              >
                <span className="text-sm font-bold">IG</span>
              </a>

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:border-amber-400 hover:text-amber-400"
              >
                <span className="text-sm font-bold">FB</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
              Navigation
            </h4>

            <div className="mt-6 flex flex-col gap-4">
              <a href="#" className="text-gray-400 transition hover:text-amber-400">
                Accueil
              </a>

              <a href="#menu" className="text-gray-400 transition hover:text-amber-400">
                Menu
              </a>

              <a href="#about" className="text-gray-400 transition hover:text-amber-400">
                À propos
              </a>

              <a href="#reservation" className="text-gray-400 transition hover:text-amber-400">
                Réservation
              </a>

              <a href="#contact" className="text-gray-400 transition hover:text-amber-400">
                Contact
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
              Contact
            </h4>

            <div className="mt-6 space-y-5">
              <div className="flex items-start gap-4">
                <MapPin size={20} className="mt-1 shrink-0 text-amber-400" />

                <div>
                  <p className="text-gray-300">31 Rue Bab Bhar</p>
                  <p className="mt-1 text-sm text-gray-500">Tunis, Tunisie</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Phone size={20} className="shrink-0 text-amber-400" />

                <a
                  href="tel:+21652207379"
                  className="text-gray-300 transition hover:text-amber-400"
                >
                  +216 52 207 379
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
              Horaires
            </h4>

            <div className="mt-6 flex items-start gap-4">
              <Clock size={20} className="mt-1 shrink-0 text-amber-400" />

              <div>
                <p className="text-gray-300">Tous les jours</p>

                <p className="mt-2 text-lg font-semibold text-white">
                  12:00 — 02:00
                </p>

                <p className="mt-2 text-sm text-gray-500">
                  Ouvert tous les jours
                </p>
              </div>
            </div>

            <a
              href="#reservation"
              className="mt-8 inline-block rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-black transition hover:bg-amber-300"
            >
              Réserver
            </a>
          </motion.div>

        </div>

        <div className="mt-16 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Steak Haus. Tous droits réservés.
            </p>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-sm uppercase tracking-wider text-gray-500 transition hover:text-amber-400"
            >
              Retour en haut
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer