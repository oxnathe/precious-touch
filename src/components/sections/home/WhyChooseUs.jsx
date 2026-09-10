import { motion } from "motion/react";

import {
  BadgeCheck,
  Clock3,
  HeartHandshake,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const image = "/images/home/why.png";

const reasons = [
  {
    icon: Sparkles,
    title: "Laundry & Ironing",
    description:
      "From washing and drying to folding and ironing, we give your clothes the careful treatment they deserve.",
  },
  {
    icon: BadgeCheck,
    title: "Home & Office Cleaning",
    description:
      "We keep homes and workplaces fresh, spotless, and welcoming with detailed professional cleaning.",
  },
  {
    icon: HeartHandshake,
    title: "Fumigation & Pest Control",
    description:
      "Reliable fumigation and pest control solutions designed to keep your spaces clean, safe, and protected.",
  },
  {
    icon: Clock3,
    title: "Care You Can Trust",
    description:
      "Dependable service, clear communication, and attention to detail from the moment you choose Precious Touch.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-precious-dark py-24 md:py-32">
      {/* BACKGROUND ATMOSPHERE */}
      <div className="pointer-events-none absolute inset-0">
        {/* Cyan glow */}
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-precious-cyan/5 blur-[110px]" />

        {/* Gold glow — matching Plans */}
        <div className="absolute -right-40 bottom-0 h-[32rem] w-[32rem] rounded-full bg-[#d4af37]/10 blur-[120px]" />

        {/* Soft center gold atmosphere */}
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d4af37]/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-20">
          {/* =========================================================
              LEFT SIDE
          ========================================================= */}
          <div className="lg:sticky lg:top-28">
            {/* SECTION LABEL */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-gradient-to-r from-precious-cyan to-[#d4af37]" />

              <span className="font-montserrat text-[10px] font-semibold uppercase tracking-[0.25em] text-precious-cyan">
                Why Precious Touch
              </span>

              {/* Gold dot like Plans */}
              <span className="h-1.5 w-1.5 rounded-full bg-[#d4af37] shadow-[0_0_12px_rgba(212,175,55,0.6)]" />
            </motion.div>

            {/* HEADING */}
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="max-w-xl font-oswald text-5xl font-medium leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              More than clean.
              <span className="block bg-gradient-to-r from-precious-cyan via-precious-cyan to-[#d4af37] bg-clip-text text-transparent">
                It&apos;s care.
              </span>
            </motion.h2>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-7 max-w-lg font-poppins text-sm leading-7 text-white/60 md:text-base"
            >
              From laundry and ironing to home and office cleaning, fumigation,
              and pest control, we bring professional care together with
              dependable service and attention to detail.
            </motion.p>

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="group relative mt-10 overflow-hidden rounded-[2rem] border border-white/10"
            >
              <img
                src={image}
                alt="Precious Touch professional cleaning and laundry service"
                className="h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-[380px]"
                loading="lazy"
              />

              {/* IMAGE OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-precious-dark/80 via-transparent to-transparent" />

              {/* GOLD EDGE GLOW */}
              <div className="pointer-events-none absolute inset-0 rounded-[2rem] border border-[#d4af37]/0 transition-all duration-500 group-hover:border-[#d4af37]/30" />

              {/* BADGE */}
              <div className="absolute bottom-5 left-5">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/40 bg-white/95 px-4 py-2 font-montserrat text-[9px] font-semibold uppercase tracking-[0.18em] text-[#b08d21] shadow-[0_8px_30px_rgba(212,175,55,0.12)] backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#d4af37]" />
                  Precious Touch
                </span>
              </div>
            </motion.div>
          </div>

          {/* =========================================================
              RIGHT SIDE
          ========================================================= */}
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
                  className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[#d4af37]/30 hover:bg-white/[0.065]"
                >
                  {/* =================================================
                      GOLD AMBIENT GLOW
                  ================================================= */}
                  <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#d4af37]/5 blur-3xl transition-all duration-700 group-hover:bg-[#d4af37]/15" />

                  {/* CYAN AMBIENT GLOW */}
                  <div className="pointer-events-none absolute -bottom-10 -left-10 h-28 w-28 rounded-full bg-precious-cyan/5 blur-3xl transition-all duration-700 group-hover:bg-precious-cyan/10" />

                  {/* =================================================
                      TOP GOLD DETAIL
                  ================================================= */}
                  <div className="absolute right-7 top-7 flex items-center gap-2 opacity-40 transition-all duration-500 group-hover:opacity-100">
                    <span className="font-montserrat text-[8px] font-semibold uppercase tracking-[0.15em] text-[#f1d77b]">
                      0{index + 1}
                    </span>

                    <span className="h-px w-5 bg-[#d4af37]/50" />
                  </div>

                  {/* =================================================
                      ICON
                  ================================================= */}
                  <div className="relative mb-8 flex h-12 w-12 items-center justify-center rounded-2xl border border-precious-cyan/20 bg-precious-cyan/10 text-precious-cyan transition-all duration-500 group-hover:border-[#d4af37]/40 group-hover:bg-[#d4af37]/10 group-hover:text-[#f1d77b] group-hover:shadow-[0_0_25px_rgba(212,175,55,0.12)]">
                    <Icon
                      size={20}
                      strokeWidth={1.6}
                      className="transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* =================================================
                      TITLE
                  ================================================= */}
                  <h3 className="relative font-oswald text-2xl font-medium uppercase text-white transition-colors duration-300 group-hover:text-[#f1d77b]">
                    {reason.title}
                  </h3>

                  {/* =================================================
                      DESCRIPTION
                  ================================================= */}
                  <p className="relative mt-4 font-poppins text-sm leading-7 text-white/50">
                    {reason.description}
                  </p>

                  {/* =================================================
                      BOTTOM ACCENT
                  ================================================= */}
                  <div className="absolute bottom-0 left-7 h-px w-12 bg-gradient-to-r from-precious-cyan to-[#d4af37] opacity-60 transition-all duration-500 group-hover:w-24 group-hover:opacity-100" />

                  {/* =================================================
                      ARROW DETAIL
                  ================================================= */}
                  <div className="absolute bottom-6 right-6 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/30 transition-all duration-500 group-hover:border-[#d4af37]/40 group-hover:bg-[#d4af37]/10 group-hover:text-[#f1d77b]">
                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* =========================================================
            BOTTOM LUXURY DETAIL
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.8 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="mt-16 flex items-center justify-center gap-4"
        >
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-[#d4af37]/30" />

          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-precious-cyan" />
            <span className="font-montserrat text-[8px] font-semibold uppercase tracking-[0.3em] text-white/30">
              Professional care
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#d4af37]" />
          </span>

          <span className="h-px flex-1 bg-gradient-to-l from-transparent via-white/10 to-[#d4af37]/30" />
        </motion.div>
      </div>
    </section>
  );
}