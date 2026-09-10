import { motion } from "motion/react";

import {
  ArrowUpRight,
  Bug,
  Check,
  Home,
  Shirt,
} from "lucide-react";

const whatsappNumber = "2349019028248";

const services = [
  {
    number: "01",
    title: "Laundry & Ironing",
    shortTitle: "Fresh clothes. Professional care.",
    description:
      "Complete laundry and ironing care designed to keep your clothes clean, fresh, neatly finished, and ready to wear.",
    icon: Shirt,
    accent: "cyan",

    // YOUR IMAGE:
    image: "/images/services/iron.webp",

    includes: [
      "Washing & drying",
      "Folding & packaging",
      "Professional ironing",
      "Dry cleaning & fabric care",
      "Everyday clothing care",
    ],
  },

  {
    number: "02",
    title: "Home & Office Cleaning",
    shortTitle: "Spotless spaces. Better living.",
    description:
      "Professional cleaning for homes, offices, and everyday spaces, with detailed care that leaves your environment fresh, comfortable, and presentable.",
    icon: Home,
    accent: "blue",

    // YOUR IMAGE:
    image: "/images/services/cleaning.jpeg",

    includes: [
      "Residential cleaning",
      "Office & commercial cleaning",
      "Deep cleaning",
      "Upholstery cleaning",
      "General space maintenance",
    ],
  },

  {
    number: "03",
    title: "Fumigation & Pest Control",
    shortTitle: "Protection beyond clean.",
    description:
      "Practical fumigation and pest control solutions that help protect homes, offices, and other environments from unwanted pests and infestations.",
    icon: Bug,
    accent: "gold",

    // YOUR IMAGE:
    image: "/images/services/fumigation.jpg",

    includes: [
      "Fumigation services",
      "Pest treatment",
      "Cockroach & insect control",
      "Preventive pest protection",
      "Home & business protection",
    ],
  },
];

function ServicesGrid() {
  const handleServiceClick = (serviceName) => {
    const message = encodeURIComponent(
      `Hello Precious Touch, I am interested in your ${serviceName} service. I would like to know more about the service and pricing.`
    );

    window.open(
      `https://wa.me/${whatsappNumber}?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      id="services-list"
      className="relative overflow-hidden bg-precious-light py-24 sm:py-28 lg:py-32"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}
      <div className="pointer-events-none absolute inset-0">
        {/* Cyan atmosphere */}
        <div className="absolute left-[-15rem] top-[10%] h-[30rem] w-[30rem] rounded-full bg-precious-cyan/10 blur-[120px]" />

        {/* Gold atmosphere */}
        <div className="absolute right-[-15rem] bottom-[5%] h-[32rem] w-[32rem] rounded-full bg-[#d4af37]/10 blur-[120px]" />

        {/* Blue atmosphere */}
        <div className="absolute left-1/2 top-[45%] h-[25rem] w-[25rem] -translate-x-1/2 rounded-full bg-precious-blue/5 blur-[120px]" />

        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#062a4d 1px, transparent 1px), linear-gradient(90deg, #062a4d 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* =========================================================
            INTRO
        ========================================================= */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-precious-blue/10 bg-white px-4 py-2 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-precious-cyan" />

              <span className="font-montserrat text-[10px] font-semibold uppercase tracking-[0.25em] text-precious-blue">
                Our Services
              </span>

              <span className="h-1.5 w-1.5 rounded-full bg-[#d4af37]" />
            </div>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2 className="font-oswald text-5xl font-semibold uppercase leading-[0.95] tracking-tight text-precious-dark sm:text-6xl lg:text-7xl">
              Complete care.
              <span className="block bg-gradient-to-r from-precious-blue via-precious-cyan to-[#d4af37] bg-clip-text text-transparent">
                One trusted touch.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl font-poppins text-sm leading-7 text-precious-dark/55 sm:text-base">
              From caring for your clothes and keeping your spaces spotless
              to protecting your environment, Precious Touch brings essential
              cleaning, laundry, and protection services together.
            </p>
          </motion.div>
        </div>

        {/* =========================================================
            THREE CORE SERVICES
        ========================================================= */}
        <div className="mt-20 space-y-7">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isGold = service.accent === "gold";

            return (
              <motion.article
                key={service.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -5 }}
                className={`group relative overflow-hidden rounded-[2rem] border bg-white shadow-lg transition-all duration-500 ${
                  isGold
                    ? "border-[#d4af37]/20 hover:border-[#d4af37]/50 hover:shadow-[#d4af37]/10"
                    : "border-precious-cyan/15 hover:border-precious-cyan/40 hover:shadow-precious-cyan/10"
                }`}
              >
                {/* =================================================
                    CARD GLOW
                ================================================= */}
                <div
                  className={`pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full blur-3xl opacity-50 transition-all duration-700 group-hover:opacity-100 ${
                    isGold
                      ? "bg-[#d4af37]/10 group-hover:bg-[#d4af37]/15"
                      : "bg-precious-cyan/10 group-hover:bg-precious-cyan/15"
                  }`}
                />

                <div className="relative grid lg:grid-cols-[0.9fr_1.1fr]">
                  {/* =================================================
                      YOUR IMAGE
                  ================================================= */}
                  <div className="relative min-h-[300px] overflow-hidden bg-precious-dark/5 lg:min-h-[430px]">
                    <img
                      src={service.image}
                      alt={`${service.title} - Precious Touch`}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading={index === 0 ? "eager" : "lazy"}
                    />

                    {/* Image overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-precious-dark/80 via-precious-dark/20 to-transparent" />

                    {/* Desktop side gradient */}
                    <div className="absolute inset-y-0 right-0 hidden w-32 bg-gradient-to-l from-white/10 to-transparent lg:block" />

                    {/* Service number */}
                    <div className="absolute left-6 top-6 flex items-center gap-3">
                      <span
                        className={`font-montserrat text-[10px] font-bold tracking-[0.2em] ${
                          isGold
                            ? "text-[#f1d77b]"
                            : "text-precious-cyan"
                        }`}
                      >
                        {service.number}
                      </span>

                      <span
                        className={`h-px w-8 ${
                          isGold
                            ? "bg-[#d4af37]/60"
                            : "bg-precious-cyan/60"
                        }`}
                      />
                    </div>

                    {/* Image badge */}
                    <div className="absolute bottom-6 left-6">
                      <span
                        className={`inline-flex items-center gap-2 rounded-full border bg-white/95 px-4 py-2 font-montserrat text-[9px] font-semibold uppercase tracking-[0.18em] backdrop-blur-sm ${
                          isGold
                            ? "border-[#d4af37]/40 text-[#b08d21]"
                            : "border-precious-cyan/30 text-precious-blue"
                        }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            isGold
                              ? "bg-[#d4af37]"
                              : "bg-precious-cyan"
                          }`}
                        />

                        Precious Touch
                      </span>
                    </div>
                  </div>

                  {/* =================================================
                      CONTENT
                  ================================================= */}
                  <div className="relative flex flex-col justify-center p-7 sm:p-9 lg:p-12">
                    {/* Icon + arrow */}
                    <div className="flex items-start justify-between">
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-2xl border transition-all duration-500 group-hover:scale-105 ${
                          isGold
                            ? "border-[#d4af37]/30 bg-[#d4af37]/10 text-[#b08d21] group-hover:border-[#d4af37]/50 group-hover:bg-[#d4af37]/15 group-hover:text-[#8f7118]"
                            : "border-precious-cyan/20 bg-precious-cyan/10 text-precious-blue group-hover:border-precious-cyan/40 group-hover:bg-precious-cyan/15"
                        }`}
                      >
                        <Icon size={23} strokeWidth={1.6} />
                      </div>

                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-500 ${
                          isGold
                            ? "border-[#d4af37]/20 text-[#b08d21] group-hover:border-[#d4af37]/40 group-hover:bg-[#d4af37]/10"
                            : "border-precious-blue/10 text-precious-blue/50 group-hover:border-precious-cyan/30 group-hover:bg-precious-cyan/5"
                        }`}
                      >
                        <ArrowUpRight size={17} />
                      </div>
                    </div>

                    {/* =================================================
                        TITLE + DESCRIPTION
                    ================================================= */}
                    <div className="mt-9">
                      <p
                        className={`font-montserrat text-[10px] font-semibold uppercase tracking-[0.2em] ${
                          isGold
                            ? "text-[#b08d21]"
                            : "text-precious-blue"
                        }`}
                      >
                        {service.shortTitle}
                      </p>

                      <h3 className="mt-3 max-w-2xl font-oswald text-4xl font-semibold uppercase leading-[0.92] tracking-tight text-precious-dark sm:text-5xl">
                        {service.title}
                      </h3>

                      <p className="mt-6 max-w-2xl font-poppins text-sm leading-7 text-precious-dark/55 sm:text-base">
                        {service.description}
                      </p>
                    </div>

                    {/* =================================================
                        WHAT WE OFFER
                    ================================================= */}
                    <div className="mt-9">
                      <div className="mb-4 flex items-center gap-3">
                        <span className="font-montserrat text-[9px] font-bold uppercase tracking-[0.2em] text-precious-dark/40">
                          What we offer
                        </span>

                        <span
                          className={`h-px w-10 ${
                            isGold
                              ? "bg-[#d4af37]/40"
                              : "bg-precious-cyan/40"
                          }`}
                        />
                      </div>

                      <div className="grid gap-3 sm:grid-cols-2">
                        {service.includes.map((item) => (
                          <div
                            key={item}
                            className="flex items-center gap-3"
                          >
                            <span
                              className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                                isGold
                                  ? "bg-[#d4af37]/10 text-[#b08d21]"
                                  : "bg-precious-cyan/10 text-precious-blue"
                              }`}
                            >
                              <Check size={13} strokeWidth={2.2} />
                            </span>

                            <span className="font-poppins text-xs font-medium text-precious-dark/65">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* =================================================
                        CTA
                    ================================================= */}
                    <button
                      type="button"
                      onClick={() => handleServiceClick(service.title)}
                      className={`mt-10 inline-flex w-fit items-center gap-3 rounded-full px-6 py-3.5 font-poppins text-xs font-semibold transition-all duration-300 ${
                        isGold
                          ? "bg-[#d4af37]/10 text-[#8f7118] hover:-translate-y-1 hover:bg-[#d4af37] hover:text-precious-dark"
                          : "bg-precious-blue/5 text-precious-blue hover:-translate-y-1 hover:bg-precious-blue hover:text-white"
                      }`}
                    >
                      Ask About This Service

                      <ArrowUpRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </button>

                    {/* Bottom accent */}
                    <div
                      className={`absolute bottom-0 left-9 right-9 h-[2px] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100 ${
                        isGold
                          ? "bg-gradient-to-r from-[#d4af37] to-[#f1d77b]"
                          : "bg-gradient-to-r from-precious-cyan to-precious-blue"
                      }`}
                    />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* =========================================================
            BOTTOM CTA
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mt-12 flex flex-col gap-5 rounded-[2rem] border border-[#d4af37]/15 bg-white p-7 shadow-sm sm:p-9 md:flex-row md:items-center md:justify-between"
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-precious-cyan" />

              <p className="font-montserrat text-[9px] font-semibold uppercase tracking-[0.2em] text-precious-blue">
                Need something specific?
              </p>

              <span className="h-1.5 w-1.5 rounded-full bg-[#d4af37]" />
            </div>

            <p className="mt-3 font-oswald text-2xl font-medium uppercase text-precious-dark sm:text-3xl">
              Tell us what you need.
            </p>

            <p className="mt-2 font-poppins text-sm leading-6 text-precious-dark/50">
              We&apos;ll help you choose the right service for your home,
              clothes, office, or environment.
            </p>
          </div>

          <button
            type="button"
            onClick={() => handleServiceClick("Precious Touch services")}
            className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-precious-blue px-6 py-4 font-poppins text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-precious-dark"
          >
            Book a Service

            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default ServicesGrid;
