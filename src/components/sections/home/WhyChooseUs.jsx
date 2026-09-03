import { motion } from "motion/react";
import {
  ArrowUpRight,
  Check,
  Clock3,
  ShieldCheck,
  Sparkles,
  Waves,
} from "lucide-react";
import { Link } from "react-router-dom";

const reasons = [
  {
    number: "01",
    title: "Professional Care",
    description:
      "We approach every cleaning and laundry task with care, consistency, and attention to detail.",
    icon: Sparkles,
  },
  {
    number: "02",
    title: "Fresh Results",
    description:
      "From your living space to your wardrobe, our goal is simple: cleaner, fresher, better.",
    icon: Waves,
  },
  {
    number: "03",
    title: "Reliable Service",
    description:
      "A professional service experience built around clear communication and dependable care.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Your Time Matters",
    description:
      "Let us handle the cleaning and laundry while you spend your time on the things that matter most.",
    icon: Clock3,
  },
];

function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-precious-dark py-24 text-white sm:py-28 lg:py-36">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[30rem] w-[30rem] rounded-full bg-precious-cyan/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[35rem] w-[35rem] rounded-full bg-precious-blue/40 blur-[120px]" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] [background-size:80px_80px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75 }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-precious-cyan" />

              <span className="font-montserrat text-xs font-semibold uppercase tracking-[0.25em] text-precious-cyan">
                Why Precious Touch
              </span>
            </div>

            <h2 className="mt-6 font-oswald text-5xl font-semibold uppercase leading-[0.9] tracking-tight sm:text-6xl lg:text-7xl">
              More than
              <br />
              <span className="text-precious-cyan">clean.</span>
              <br />
              It&apos;s care.
            </h2>

            <p className="mt-8 max-w-md font-poppins text-sm leading-8 text-white/50 sm:text-base">
              Clean spaces and fresh clothes can change how your day feels.
              Precious Touch is built around making that experience easier,
              better, and more dependable.
            </p>

            <Link
              to="/contact"
              className="group mt-8 inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py-4 font-poppins text-sm font-semibold text-white transition-all duration-300 hover:border-precious-cyan hover:bg-precious-cyan hover:text-precious-dark"
            >
              Experience the difference

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </motion.div>

          {/* Right side */}
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <motion.div
                  key={reason.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.08,
                  }}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-precious-cyan/30 hover:bg-white/[0.06] sm:p-8"
                >
                  <div className="flex items-start justify-between">
                    <span className="font-montserrat text-xs tracking-[0.15em] text-white/25">
                      {reason.number}
                    </span>

                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 transition-all duration-500 group-hover:border-precious-cyan group-hover:bg-precious-cyan group-hover:text-precious-dark">
                      <Icon size={19} strokeWidth={1.5} />
                    </div>
                  </div>

                  <h3 className="mt-16 font-oswald text-3xl font-medium uppercase leading-none">
                    {reason.title}
                  </h3>

                  <p className="mt-5 font-poppins text-sm leading-7 text-white/45">
                    {reason.description}
                  </p>

                  <div className="mt-8 flex items-center gap-2 font-montserrat text-[9px] uppercase tracking-[0.2em] text-precious-cyan">
                    <Check size={13} />
                    Precious Touch standard
                  </div>

                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-precious-cyan transition-all duration-500 group-hover:w-full" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;