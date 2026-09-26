import { motion } from "framer-motion"
import { ArrowDown, MapPin, Phone } from "lucide-react"
import heroImage from "./assets/steak-hero.png.jpg"
import SignatureDishes from "./components/SignatureDishes"
import Reviews from "./components/Reviews"
import Reservation from "./components/Reservation"
import Location from "./components/Location"
import Footer from "./components/Footer"

function App() {
  return (
    <main className="min-h-screen bg-black text-white">

      <section
        className="relative min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <nav className="relative z-10 flex items-center justify-between px-8 py-6 md:px-16">

          <div className="text-2xl font-bold tracking-[0.2em]">
            STEAK HAUS
          </div>

          <div className="hidden gap-8 text-sm uppercase tracking-widest md:flex">
            <a href="#" className="transition hover:text-amber-400">
              Accueil
            </a>

            <a href="#menu" className="transition hover:text-amber-400">
              Menu
            </a>

            <a href="#about" className="transition hover:text-amber-400">
              À propos
            </a>

            <a href="#contact" className="transition hover:text-amber-400">
              Contact
            </a>
          </div>

          <a
            href="#reservation"
            className="rounded-full border border-amber-400 px-5 py-2 text-sm uppercase tracking-wider transition hover:bg-amber-400 hover:text-black"
          >
            Réserver
          </a>

        </nav>

        <div className="relative z-10 flex min-h-[calc(100vh-100px)] items-center px-8 md:px-16">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-3xl"
          >

            <p className="mb-5 text-sm uppercase tracking-[0.5em] text-amber-400">
              Steakhouse · Tunis
            </p>

            <h1 className="text-6xl font-bold leading-none md:text-8xl">
              THE ART OF
              <span className="block text-amber-400">
                PERFECT STEAK
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-gray-300">
              Une expérience autour de la viande, du goût et du savoir-faire
              au cœur de Tunis.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="#menu"
                className="rounded-full bg-amber-400 px-8 py-4 font-semibold text-black transition hover:scale-105"
              >
                Découvrir le menu
              </a>

              <a
                href="#reservation"
                className="rounded-full border border-white/40 px-8 py-4 font-semibold transition hover:border-amber-400 hover:text-amber-400"
              >
                Réserver une table
              </a>

            </div>

            <div className="mt-12 flex flex-wrap gap-6 text-sm text-gray-300">

              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-amber-400" />
                Tunis · Bab Bhar
              </div>

              <div className="flex items-center gap-2">
                <Phone size={18} className="text-amber-400" />
                +216 52 207 379
              </div>

            </div>

          </motion.div>

        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-amber-400"
        >
          <ArrowDown size={28} />
        </motion.div>

      </section>

      <section
        id="about"
        className="relative overflow-hidden bg-[#0b0b0b] px-8 py-24 md:px-16 lg:px-24"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <p className="mb-4 text-sm uppercase tracking-[0.4em] text-amber-400">
              Bienvenue chez Steak Haus
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Une passion pour
              <span className="block text-amber-400">
                la viande
              </span>
            </h2>

            <p className="mt-8 leading-8 text-gray-400">
              Chez Steak Haus, chaque assiette est pensée autour d'une
              expérience simple : une viande de qualité, une cuisson maîtrisée
              et des saveurs qui donnent envie de revenir.
            </p>

            <p className="mt-5 leading-8 text-gray-400">
              Situé au cœur de Tunis, Steak Haus vous accueille dans une
              ambiance chaleureuse pour partager un bon repas autour de la
              passion du steak et de la cuisine.
            </p>

            <div className="mt-8 flex gap-10">

              <div>
                <p className="text-3xl font-bold text-amber-400">
                  12:00
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Ouverture
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold text-amber-400">
                  02:00
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Fermeture
                </p>
              </div>

            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >

            <div className="absolute -inset-4 rounded-3xl border border-amber-400/20" />

            <img
              src={heroImage}
              alt="Steak Haus"
              className="relative h-[500px] w-full rounded-2xl object-cover"
            />

          </motion.div>

        </div>
      </section>

      <SignatureDishes />

      <Reviews />

      <Reservation />

      <Location />
      
      <Footer />


    </main>
  )
}

export default App