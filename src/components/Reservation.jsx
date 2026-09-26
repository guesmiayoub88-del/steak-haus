import { motion } from "framer-motion"
import { CalendarDays, Clock, Users, Phone, User, Check } from "lucide-react"
import { useState } from "react"

function Reservation() {
  const [success, setSuccess] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSuccess(true)
  }

  return (
    <section
      id="reservation"
      className="relative overflow-hidden bg-[#0b0b0b] px-6 py-24 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm uppercase tracking-[0.5em] text-amber-400">
              Réservation
            </p>

            <h2 className="mt-4 text-5xl font-bold leading-tight md:text-7xl">
              Réservez votre
              <span className="block text-amber-400">
                table
              </span>
            </h2>

            <p className="mt-8 max-w-xl leading-8 text-gray-400">
              Préparez votre prochaine expérience chez Steak Haus.
              Choisissez votre date, votre heure et le nombre de personnes.
            </p>

            <div className="mt-10 space-y-5">

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-amber-400/20 bg-amber-400/10">
                  <Check size={20} className="text-amber-400" />
                </div>

                <span className="text-gray-300">
                  Viandes sélectionnées avec soin
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-amber-400/20 bg-amber-400/10">
                  <Check size={20} className="text-amber-400" />
                </div>

                <span className="text-gray-300">
                  Ambiance chaleureuse
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-amber-400/20 bg-amber-400/10">
                  <Check size={20} className="text-amber-400" />
                </div>

                <span className="text-gray-300">
                  Service de qualité
                </span>
              </div>

            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl border border-white/10 bg-[#111111] p-6 md:p-10"
          >

            {success ? (
              <div className="flex min-h-[500px] flex-col items-center justify-center text-center">

                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-amber-400/10">
                  <Check
                    size={40}
                    className="text-amber-400"
                  />
                </div>

                <h3 className="mt-8 text-3xl font-bold">
                  Réservation envoyée
                </h3>

                <p className="mt-4 max-w-md leading-7 text-gray-400">
                  Merci pour votre réservation chez Steak Haus.
                  Nous avons bien reçu votre demande.
                </p>

                <button
                  onClick={() => setSuccess(false)}
                  className="mt-8 rounded-full border border-amber-400 px-6 py-3 text-sm uppercase tracking-wider text-amber-400 transition hover:bg-amber-400 hover:text-black"
                >
                  Nouvelle réservation
                </button>

              </div>
            ) : (

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >

                <div className="grid gap-6 md:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-sm text-gray-400">
                      Nom
                    </label>

                    <div className="relative">
                      <User
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                      />

                      <input
                        type="text"
                        required
                        placeholder="Votre nom"
                        className="w-full rounded-xl border border-white/10 bg-[#0b0b0b] py-4 pl-12 pr-4 text-white outline-none transition placeholder:text-gray-600 focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-gray-400">
                      Téléphone
                    </label>

                    <div className="relative">
                      <Phone
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                      />

                      <input
                        type="tel"
                        required
                        placeholder="+216 XX XXX XXX"
                        className="w-full rounded-xl border border-white/10 bg-[#0b0b0b] py-4 pl-12 pr-4 text-white outline-none transition placeholder:text-gray-600 focus:border-amber-400"
                      />
                    </div>
                  </div>

                </div>

                <div className="grid gap-6 md:grid-cols-3">

                  <div>
                    <label className="mb-2 block text-sm text-gray-400">
                      Date
                    </label>

                    <div className="relative">
                      <CalendarDays
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                      />

                      <input
                        type="date"
                        required
                        className="w-full rounded-xl border border-white/10 bg-[#0b0b0b] py-4 pl-12 pr-3 text-white outline-none transition focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-gray-400">
                      Heure
                    </label>

                    <div className="relative">
                      <Clock
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                      />

                      <input
                        type="time"
                        required
                        className="w-full rounded-xl border border-white/10 bg-[#0b0b0b] py-4 pl-12 pr-3 text-white outline-none transition focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-gray-400">
                      Personnes
                    </label>

                    <div className="relative">
                      <Users
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                      />

                      <select
                        required
                        className="w-full appearance-none rounded-xl border border-white/10 bg-[#0b0b0b] py-4 pl-12 pr-3 text-white outline-none transition focus:border-amber-400"
                      >
                        <option value="1">1 personne</option>
                        <option value="2">2 personnes</option>
                        <option value="3">3 personnes</option>
                        <option value="4">4 personnes</option>
                        <option value="5">5 personnes</option>
                        <option value="6">6 personnes</option>
                        <option value="7">7 personnes</option>
                        <option value="8">8 personnes</option>
                        <option value="9">9 personnes</option>
                        <option value="10">10 personnes</option>
                      </select>
                    </div>
                  </div>

                </div>

                <div>
                  <label className="mb-2 block text-sm text-gray-400">
                    Message
                  </label>

                  <textarea
                    rows="4"
                    placeholder="Une demande particulière ?"
                    className="w-full resize-none rounded-xl border border-white/10 bg-[#0b0b0b] px-4 py-4 text-white outline-none transition placeholder:text-gray-600 focus:border-amber-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-amber-400 py-4 font-semibold uppercase tracking-wider text-black transition hover:bg-amber-300"
                >
                  Réserver une table
                </button>

              </form>
            )}

          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Reservation