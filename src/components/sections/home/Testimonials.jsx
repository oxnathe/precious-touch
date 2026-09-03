import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Your experience with Precious Touch belongs here. We are building this section to showcase genuine customer feedback as the brand grows.",
    name: "Customer Review",
    role: "Coming soon",
  },
  {
    quote:
      "Real experiences will be featured here so future customers can see what people are saying about the Precious Touch service.",
    name: "Customer Review",
    role: "Coming soon",
  },
  {
    quote:
      "This space is reserved for authentic customer feedback about cleaning, laundry, care, and the overall service experience.",
    name: "Customer Review",
    role: "Coming soon",
  },
];

function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-white py-24 text-precious-dark sm:py-28 lg:py-36">
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-precious-cyan/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end"
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-precious-cyan" />

              <span className="font-montserrat text-xs font-semibold uppercase tracking-[0.25em] text-precious-blue">
                The experience
              </span>
            </div>

            <h2 className="mt-6 font-oswald text-5xl font-semibold uppercase leading-[0.9] tracking-tight sm:text-6xl lg:text-7xl">
              Fresh words
              <br />
              from <span className="text-precious-blue">our</span>
              <br />
              customers.
            </h2>
          </div>

          <p className="max-w-md font-poppins text-sm leading-7 text-precious-dark/50">
            As Precious Touch grows, this space will showcase genuine
            experiences from the people and businesses we serve.
          </p>
        </motion.div>

        {/* Reviews */}
        <div className="mt-20 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name + index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.65,
                delay: index * 0.1,
              }}
              className="group relative rounded-3xl border border-precious-dark/10 bg-precious-light p-7 transition-all duration-500 hover:-translate-y-1 hover:border-precious-cyan/40 sm:p-8"
            >
              <div className="flex items-center justify-between">
                <Quote
                  size={28}
                  strokeWidth={1.4}
                  className="text-precious-cyan"
                />

                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={13}
                      className="fill-precious-cyan text-precious-cyan"
                    />
                  ))}
                </div>
              </div>

              <p className="mt-10 font-poppins text-sm leading-8 text-precious-dark/55">
                “{testimonial.quote}”
              </p>

              <div className="mt-10 border-t border-precious-dark/10 pt-5">
                <p className="font-oswald text-xl uppercase">
                  {testimonial.name}
                </p>

                <p className="mt-1 font-montserrat text-[9px] uppercase tracking-[0.2em] text-precious-dark/35">
                  {testimonial.role}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;