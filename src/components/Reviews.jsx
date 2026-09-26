import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const reviews = [
  {
    name: "Client Steak Haus",
    rating: 5,
    text: "Une très belle expérience. La viande est tendre, bien cuite et les sauces sont excellentes.",
  },
  {
    name: "Client Steak Haus",
    rating: 5,
    text: "Très bonne adresse à Tunis. Service agréable, ambiance chaleureuse et plats généreux.",
  },
  {
    name: "Client Steak Haus",
    rating: 5,
    text: "Le filet est excellent et la cuisson est parfaitement maîtrisée. Une adresse à découvrir.",
  },
]

function Reviews() {
  return (
    <section
      id="reviews"
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
            Avis clients
          </p>

          <h2 className="mt-4 text-5xl font-bold md:text-7xl">
            Ils parlent de{" "}
            <span className="text-amber-400">nous</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            Découvrez les impressions de nos clients après leur expérience
            chez Steak Haus.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              whileHover={{ y: -8 }}
              className="relative rounded-2xl border border-white/10 bg-[#111111] p-8"
            >
              <Quote
                size={42}
                className="absolute right-6 top-6 text-amber-400/20"
              />

              <div className="flex gap-1">
                {[...Array(review.rating)].map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    size={18}
                    fill="currentColor"
                    className="text-amber-400"
                  />
                ))}
              </div>

              <p className="mt-6 min-h-[120px] leading-7 text-gray-400">
                “{review.text}”
              </p>

              <div className="mt-8 border-t border-white/10 pt-5">
                <p className="font-semibold text-white">
                  {review.name}
                </p>

                <p className="mt-1 text-xs uppercase tracking-wider text-amber-400">
                  Client vérifié
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-[#111111] px-6 py-3">
            <Star
              size={20}
              fill="currentColor"
              className="text-amber-400"
            />

            <span className="text-sm text-gray-300">
              Une expérience autour du goût et de la qualité
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Reviews