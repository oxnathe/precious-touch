import { motion } from "motion/react";
import {
  BadgeCheck,
  Clock3,
  HeartHandshake,
  Sparkles,
} from "lucide-react";

const image = "v";

const reasons = [
  {
    icon: BadgeCheck,
    title: "Professional Care",
    description:
      "Our team approaches every space with attention to detail, care, and professionalism.",
  },
  {
    icon: Sparkles,
    title: "Fresh Results",
    description:
      "We don't just clean. We leave your home, office, and belongings feeling genuinely refreshed.",
  },
  {
    icon: HeartHandshake,
    title: "Reliable Service",
    description:
      "Clear communication, dependable service, and a team you can trust every time.",
  },
  {
    icon: Clock3,
    title: "Your Time Matters",
    description:
      "Let us handle the cleaning while you focus on the people and things that matter most.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-precious-dark py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-20">
          
          {/* LEFT */}
          <div className="lg:sticky lg:top-28">
            <span className="mb-5 inline-flex items-center gap-2 font-montserrat text-[10px] font-semibold uppercase tracking-[0.25em] text-precious-cyan">
              <span className="h-1.5 w-1.5 rounded-full bg-precious-cyan" />
              Why Precious Touch
            </span>

            <h2 className="max-w-xl font-oswald text-5xl font-medium leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
              More than clean.
              <span className="block text-precious-cyan">It's care.</span>
            </h2>

            <p className="mt-7 max-w-lg font-poppins text-sm leading-7 text-white/60 md:text-base">
              We bring professional cleaning and laundry care together with
              dependable service, attention to detail, and a genuine commitment
              to making your everyday life easier.
            </p>

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="relative mt-10 overflow-hidden rounded-[2rem]"
            >
              <img
                src={image}
                alt="Precious Touch professional cleaning service"
                className="h-[320px] w-full object-cover transition-transform duration-700 hover:scale-105 md:h-[380px]"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-precious-dark/60 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5">
                <span className="rounded-full bg-white/90 px-4 py-2 font-montserrat text-[9px] font-semibold uppercase tracking-[0.18em] text-precious-blue backdrop-blur-sm">
                  Precious Touch
                </span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT */}
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  className="group rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-7 transition-all duration-500 hover:border-precious-cyan/30 hover:bg-white/[0.07]"
                >
                  <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl border border-precious-cyan/20 bg-precious-cyan/10 text-precious-cyan transition-transform duration-500 group-hover:scale-110">
                    <Icon size={20} strokeWidth={1.6} />
                  </div>

                  <h3 className="font-oswald text-2xl text-white">
                    {reason.title}
                  </h3>

                  <p className="mt-4 font-poppins text-sm leading-7 text-white/50">
                    {reason.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}