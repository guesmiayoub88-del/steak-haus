import { motion } from "framer-motion"
import { MapPin, Phone, Clock, Navigation } from "lucide-react"

function Location() {
  return (
    <section
      id="contact"
      className="bg-[#0b0b0b] px-6 py-24 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="text-sm uppercase tracking-[0.5em] text-amber-400">
            Nous trouver
          </p>

          <h2 className="mt-4 text-5xl font-bold md:text-7xl">
            Venez chez{" "}
            <span className="text-amber-400">
              Steak Haus
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            Retrouvez-nous au cœur de Tunis pour une expérience autour
            de la viande et du goût.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl border border-white/10 bg-[#111111] p-8 md:p-10"
          >
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-amber-400/10">
                  <MapPin className="text-amber-400" size={24} />
                </div>

                <div>
                  <p className="text-sm uppercase tracking-wider text-gray-500">
                    Adresse
                  </p>

                  <p className="mt-2 text-lg text-white">
                    31 Rue Bab Bhar
                  </p>

                  <p className="mt-1 text-gray-400">
                    Tunis, Tunisie
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-amber-400/10">
                  <Phone className="text-amber-400" size={24} />
                </div>

                <div>
                  <p className="text-sm uppercase tracking-wider text-gray-500">
                    Téléphone
                  </p>

                  <a
                    href="tel:+21652207379"
                    className="mt-2 block text-lg text-white transition hover:text-amber-400"
                  >
                    +216 52 207 379
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-amber-400/10">
                  <Clock className="text-amber-400" size={24} />
                </div>

                <div>
                  <p className="text-sm uppercase tracking-wider text-gray-500">
                    Horaires
                  </p>

                  <p className="mt-2 text-lg text-white">
                    Tous les jours
                  </p>

                  <p className="mt-1 text-gray-400">
                    12:00 — 02:00
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Steak+Haus+31+Rue+Bab+Bhar+Tunis"
              target="_blank"
              rel="noreferrer"
              className="mt-10 flex w-full items-center justify-center gap-3 rounded-xl bg-amber-400 px-6 py-4 font-semibold uppercase tracking-wider text-black transition hover:bg-amber-300"
            >
              <Navigation size={20} />
              Itinéraire
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="min-h-[450px] overflow-hidden rounded-3xl border border-white/10"
          >
            <iframe
              title="Steak Haus Tunis"
              src="https://www.google.com/maps?q=31%20Rue%20Bab%20Bhar%2C%20Tunis&output=embed"
              className="h-full min-h-[450px] w-full border-0 grayscale"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Location