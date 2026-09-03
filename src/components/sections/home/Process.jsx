import { motion } from "motion/react";
import {
  ArrowUpRight,
  MessageCircle,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    number: "01",
    title: "Tell us what you need",
    description:
      "Reach out through WhatsApp or phone and tell us about the cleaning or laundry service you need.",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "We understand the job",
    description:
      "We discuss the service details with you and make sure we understand exactly what you need.",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "We get to work",
    description:
      "Once everything is clear, our team gets to work delivering the care your space or clothes need.",
    icon: CheckCircle2,
  },
];

function Process() {
  return (
    <section className="relative overflow-hidden bg-precious-light py-24 text-precious-dark sm:py-28 lg:py-36">
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-precious-cyan/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-precious-cyan" />

            <span className="font-montserrat text-xs font-semibold uppercase tracking-[0.25em] text-precious-blue">
              Simple process
            </span>
          </div>

          <h2 className="mt-6 font-oswald text-5xl font-semibold uppercase leading-[0.9] tracking-tight sm:text-6xl lg:text-7xl">
            Clean.
            <br />
            Simple.
            <br />
            <span className="text-precious-blue">Done.</span>
          </h2>

          <p className="mt-7 max-w-xl font-poppins text-sm leading-8 text-precious-dark/55 sm:text-base">
            Getting professional cleaning and laundry care should not feel
            complicated. Tell us what you need and we&apos;ll take it from
            there.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative mt-20">
          <div className="absolute left-[8%] right-[8%] top-16 hidden h-px bg-precious-dark/10 lg:block" />

          <div className="grid gap-6 lg:grid-cols-3">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.1,
                  }}
                  className="group relative rounded-3xl border border-precious-dark/10 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-precious-cyan/50 hover:shadow-xl sm:p-8"
                >
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-precious-dark font-montserrat text-xs font-semibold text-white transition-all duration-500 group-hover:bg-precious-cyan group-hover:text-precious-dark">
                      {step.number}
                    </span>

                    <Icon
                      size={22}
                      strokeWidth={1.5}
                      className="text-precious-blue/35 transition-colors duration-500 group-hover:text-precious-cyan"
                    />
                  </div>

                  <h3 className="mt-14 font-oswald text-3xl font-medium uppercase leading-none sm:text-4xl">
                    {step.title}
                  </h3>

                  <p className="mt-5 font-poppins text-sm leading-7 text-precious-dark/50">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mt-12 flex flex-col gap-6 rounded-3xl bg-precious-blue p-8 text-white sm:p-10 md:flex-row md:items-center md:justify-between"
        >
          <div>
            <p className="font-oswald text-3xl uppercase leading-none sm:text-4xl">
              Ready when you are.
            </p>

            <p className="mt-3 max-w-lg font-poppins text-sm leading-7 text-white/50">
              Start with a simple message and let&apos;s discuss what you
              need.
            </p>
          </div>

          <Link
            to="/contact"
            className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-precious-cyan px-6 py-4 font-poppins text-sm font-semibold text-precious-dark transition-all duration-300 hover:-translate-y-1 hover:bg-white"
          >
            Get Started

            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Process;