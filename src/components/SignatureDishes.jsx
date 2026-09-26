import { motion } from "framer-motion"

import filetParmesan from "../assets/menu/filet-parmesan.jpg.jpg"
import entrecotePoivre from "../assets/menu/entrecote-poivre.jpg.jpg"
import filetMignon from "../assets/menu/filet-mignon.jpg.jpg"
import eminceBoeuf from "../assets/menu/emince-boeuf.jpg.jpg"
import filetGrille from "../assets/menu/filet-grille.jpg.jpg"
import roquefort from "../assets/menu/roquefort.jpg.jpg"
import champignons from "../assets/menu/champignons.jpg.jpg"
import ojjaMerguez from "../assets/menu/ojja-merguez.jpg.jpg"
import spaghettiBolognaise from "../assets/menu/spaghetti-bolognaise.jpg.jpg"

const dishes = [
  {
    category: "Steaks",
    name: "Filet au Parmesan",
    description: "Filet tendre accompagné d'une délicate sauce au parmesan.",
    image: filetParmesan,
  },
  {
    category: "Steaks",
    name: "Entrecôte au Poivre",
    description: "Entrecôte grillée servie avec une sauce au poivre.",
    image: entrecotePoivre,
  },
  {
    category: "Steaks",
    name: "Filet Mignon",
    description: "Une pièce de viande tendre, grillée avec soin.",
    image: filetMignon,
  },
  {
    category: "Signature",
    name: "Émincé de Bœuf",
    description: "Notre spécialité autour du bœuf et de ses sauces.",
    image: eminceBoeuf,
  },
  {
    category: "Steaks",
    name: "Filet Grillé",
    description: "Un filet grillé à la perfection pour une expérience savoureuse.",
    image: filetGrille,
  },
  {
    category: "Sauces",
    name: "Filet Sauce Roquefort",
    description: "Filet tendre accompagné d'une sauce Roquefort onctueuse.",
    image: roquefort,
  },
  {
    category: "Sauces",
    name: "Filet Sauce Champignons",
    description: "Filet accompagné d'une sauce crémeuse aux champignons.",
    image: champignons,
  },
  {
    category: "Tradition",
    name: "Ojja Merguez",
    description: "Une spécialité généreuse aux merguez et aux saveurs tunisiennes.",
    image: ojjaMerguez,
  },
  {
    category: "Pasta",
    name: "Spaghetti Bolognaise",
    description: "Spaghetti accompagnés d'une généreuse sauce bolognaise.",
    image: spaghettiBolognaise,
  },
]

function SignatureDishes() {
  return (
    <section
      id="menu"
      className="bg-[#0b0b0b] px-6 py-24 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="text-sm uppercase tracking-[0.5em] text-amber-400">
            La carte
          </p>

          <h2 className="mt-4 text-5xl font-bold md:text-7xl">
            Notre{" "}
            <span className="text-amber-400">
              Menu
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            Découvrez nos spécialités préparées avec passion
            autour du goût et de la qualité.
          </p>
        </motion.div>

        {/* CATEGORIES */}

        <div className="mb-12 flex flex-wrap justify-center gap-3">

          <button className="rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-black">
            Tous
          </button>

          <button className="rounded-full border border-white/10 px-6 py-3 text-sm uppercase tracking-wider text-gray-400 transition hover:border-amber-400 hover:text-amber-400">
            Steaks
          </button>

          <button className="rounded-full border border-white/10 px-6 py-3 text-sm uppercase tracking-wider text-gray-400 transition hover:border-amber-400 hover:text-amber-400">
            Sauces
          </button>

          <button className="rounded-full border border-white/10 px-6 py-3 text-sm uppercase tracking-wider text-gray-400 transition hover:border-amber-400 hover:text-amber-400">
            Tradition
          </button>

          <button className="rounded-full border border-white/10 px-6 py-3 text-sm uppercase tracking-wider text-gray-400 transition hover:border-amber-400 hover:text-amber-400">
            Pasta
          </button>

        </div>

        {/* MENU */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {dishes.map((dish, index) => (
            <motion.article
              key={dish.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
              whileHover={{ y: -10 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#111111]"
            >

              {/* IMAGE */}

              <div className="relative h-72 overflow-hidden">

                <img
                  src={dish.image}
                  alt={dish.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />

                <div className="absolute left-4 top-4 rounded-full bg-black/70 px-4 py-2 text-xs uppercase tracking-wider text-amber-400 backdrop-blur">
                  {dish.category}
                </div>

              </div>

              {/* TEXT */}

              <div className="p-6">

                <h3 className="text-xl font-semibold transition group-hover:text-amber-400">
                  {dish.name}
                </h3>

                <p className="mt-3 min-h-[72px] text-sm leading-6 text-gray-500">
                  {dish.description}
                </p>

                <div className="mt-6 flex items-center justify-between">

                  <span className="text-xs uppercase tracking-[0.2em] text-gray-600">
                    Steak Haus
                  </span>

                  <button className="text-sm font-semibold uppercase tracking-wider text-amber-400 transition hover:text-amber-300">
                    Découvrir →
                  </button>

                </div>

              </div>

            </motion.article>
          ))}

        </div>

      </div>
    </section>
  )
}

export default SignatureDishes