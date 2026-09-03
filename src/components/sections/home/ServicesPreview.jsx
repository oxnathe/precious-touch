import { motion } from "motion/react";
import {
  ArrowUpRight,
  Building2,
  Factory,
  Shirt,
  Sparkles,
  Home as HomeIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    number: "01",
    title: "Residential Cleaning",
    description:
      "Thoughtful cleaning for homes, apartments, and everyday living spaces.",
    icon: HomeIcon,
  },
  {
    number: "02",
    title: "Commercial Cleaning",
    description:
      "Professional cleaning solutions that keep your business environment fresh and presentable.",
    icon: Building2,
  },
  {
    number: "03",
    title: "Industrial Cleaning",
    description:
      "Reliable cleaning support for larger facilities and demanding work environments.",
    icon: Factory,
  },
  {
    number: "04",
    title: "Laundry & Dry Cleaning",
    description:
      "Carefully handled laundry and garment cleaning to keep your clothes fresh and ready.",
    icon: Shirt,
  },
  {
    number: "05",
    title: "Cleaning & Ironing",
    description:
      "A polished finish for your clothes, with professional cleaning and ironing care.",
    icon: Sparkles,
  },
];

function ServicesPreview() {
  return (
    <section className="relative overflow-hidden bg-white py-24 text-precious-dark sm:py-28 lg:py-36">
      {/* Background details */}
      <div className="pointer-events-none absolute right-0 top-0 h-[30rem] w-[30rem] rounded-full bg-precious-cyan/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-precious-cyan" />

              <span className="font-montserrat text-xs font-semibold uppercase tracking-[0.25em] text-precious-blue">
                What we do
              </span>
            </div>

            <h2 className="mt-5 font-oswald text-5xl font-semibold uppercase leading-[0.9] tracking-tight sm:text-6xl lg:text-7xl">
              The
              <br />
              <span className="text-precious-blue">Precious</span>
              <br />
              Touch.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-2xl lg:ml-auto"
          >
            <p className="font-poppins text-base leading-8 text-precious-dark/60 sm:text-lg">
              From the spaces you live in to the spaces you work in, we bring
              professional care, attention to detail, and a fresh standard of
              cleanliness.
            </p>

            <Link
              to="/services"
              className="group mt-7 inline-flex items-center gap-3 font-montserrat text-xs font-semibold uppercase tracking-[0.2em] text-precious-dark"
            >
              Explore all services

              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-precious-dark/15 transition-all duration-300 group-hover:border-precious-cyan group-hover:bg-precious-cyan">
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Services */}
        <div className="mt-20 border-t border-precious-dark/10">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                }}
                className="group border-b border-precious-dark/10"
              >
                <Link
                  to="/services"
                  className="relative flex flex-col gap-6 py-8 transition-all duration-500 sm:py-10 lg:flex-row lg:items-center lg:gap-8"
                >
                  {/* Number */}
                  <span className="w-12 shrink-0 font-montserrat text-xs font-semibold tracking-[0.15em] text-precious-dark/35">
                    {service.number}
                  </span>

                  {/* Icon */}
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-precious-dark/10 transition-all duration-500 group-hover:border-precious-cyan group-hover:bg-precious-cyan group-hover:text-precious-dark">
                    <Icon
                      size={23}
                      strokeWidth={1.5}
                      className="transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="font-oswald text-3xl font-medium uppercase leading-none transition-all duration-500 group-hover:translate-x-2 group-hover:text-precious-blue sm:text-4xl lg:w-[34%] lg:text-5xl">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="max-w-md font-poppins text-sm leading-7 text-precious-dark/50 lg:ml-auto lg:w-[30%]">
                    {service.description}
                  </p>

                  {/* Arrow */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-precious-dark/10 transition-all duration-500 group-hover:border-precious-blue group-hover:bg-precious-blue group-hover:text-white lg:ml-4">
                    <ArrowUpRight
                      size={20}
                      className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>

                  {/* Hover line */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-[2px] bg-precious-cyan"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.45 }}
                  />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mt-12 flex flex-col gap-5 rounded-3xl bg-precious-light p-7 sm:p-9 md:flex-row md:items-center md:justify-between"
        >
          <div>
            <p className="font-oswald text-2xl font-medium uppercase sm:text-3xl">
              Need a cleaner space?
            </p>

            <p className="mt-2 font-poppins text-sm leading-6 text-precious-dark/50">
              Tell us what you need and let&apos;s take care of the rest.
            </p>
          </div>

          <Link
            to="/contact"
            className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-precious-blue px-6 py-4 font-poppins text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-precious-dark"
          >
            Book a Service

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

export default ServicesPreview;