import { motion } from "motion/react";

import {
  ArrowDown,
  Droplets,
  WashingMachine,
} from "lucide-react";


function ServicesHero() {
  const scrollToServices = () => {
    document.getElementById("services-list")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative flex min-h-[78vh] items-center overflow-hidden bg-precious-dark pt-28 text-white sm:min-h-[82vh] lg:min-h-[88vh]">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-15rem] top-[-10rem] h-[35rem] w-[35rem] rounded-full bg-precious-blue/50 blur-[120px]" />

        <div className="absolute right-[-12rem] top-[15%] h-[32rem] w-[32rem] rounded-full bg-precious-cyan/10 blur-[120px]" />

        <div className="absolute bottom-[-15rem] left-[35%] h-[30rem] w-[30rem] rounded-full bg-[#d4af37]/10 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          {/* LEFT */}
          <div>
            {/* EYEBROW */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md"
            >
              <span className="h-2 w-2 rounded-full bg-precious-cyan shadow-[0_0_14px_rgba(0,217,255,0.8)]" />

              <span className="font-montserrat text-[10px] font-semibold uppercase tracking-[0.25em] text-white/70">
                What We Do
              </span>
            </motion.div>

            {/* HEADING */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="max-w-4xl font-oswald text-6xl font-semibold uppercase leading-[0.9] tracking-tight sm:text-7xl lg:text-8xl"
            >
              Clean spaces.

              <span className="block text-precious-cyan">
                Fresh clothes.
              </span>

              <span className="block bg-gradient-to-r from-white via-white to-[#d4af37] bg-clip-text text-transparent">
                Better living.
              </span>
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-7 max-w-2xl font-poppins text-sm leading-7 text-white/60 sm:text-base"
            >
              From everyday home cleaning to professional laundry care,
              Precious Touch helps keep your spaces, clothes, and routines
              looking and feeling their best.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <button
                type="button"
                onClick={scrollToServices}
                className="group inline-flex items-center gap-3 rounded-full bg-precious-cyan px-6 py-4 font-poppins text-sm font-semibold text-precious-dark transition-all duration-300 hover:-translate-y-1 hover:bg-white"
              >
                Explore Services

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black/5 transition-transform duration-300 group-hover:translate-y-1">
                  <ArrowDown size={16} />
                </span>
              </button>
            </motion.div>
          </div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative mx-auto w-full max-w-md lg:ml-auto"
          >
            {/* MAIN ORB */}
            <div className="relative aspect-square">
              {/* OUTER RING */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 24,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-[8%] rounded-full border border-precious-cyan/20"
              />

              {/* SECOND RING */}
              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-[17%] rounded-full border border-[#d4af37]/20 border-dashed"
              />

              {/* CYAN GLOW */}
              <div className="absolute inset-[23%] rounded-full bg-precious-cyan/10 blur-[70px]" />

              {/* MAIN CIRCLE */}
              <div className="absolute inset-[25%] rounded-full bg-gradient-to-br from-precious-blue via-precious-dark to-precious-blue shadow-[0_0_100px_rgba(0,217,255,0.12)]" />

              {/* CENTER */}
              <div className="absolute inset-[32%] flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm">
                <motion.div
                  animate={{
                    y: [-3, 3, -3],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="text-center"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-precious-cyan/20 bg-precious-cyan/10 text-precious-cyan">
                    <Droplets
                      size={25}
                      strokeWidth={1.5}
                    />
                  </div>

                  <p className="mt-4 font-oswald text-2xl font-semibold uppercase">
                    Precious
                  </p>

                  <p className="font-montserrat text-[9px] uppercase tracking-[0.3em] text-[#d4af37]">
                    Touch
                  </p>
                </motion.div>
              </div>

              {/* FLOATING CARD 1 — CLEANING */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-0 top-[20%] rounded-2xl border border-white/10 bg-white/[0.07] p-4 shadow-2xl backdrop-blur-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-precious-cyan/10 text-precious-cyan">
                    <Droplets
                      size={21}
                      strokeWidth={1.5}
                    />
                  </div>

                  <div>
                    <p className="font-oswald text-sm uppercase">
                      Cleaning
                    </p>

                    <p className="font-montserrat text-[8px] uppercase tracking-wider text-white/40">
                      Fresh spaces
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* FLOATING CARD 2 — LAUNDRY */}
              <motion.div
                animate={{ y: [8, -8, 8] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-[17%] right-0 rounded-2xl border border-white/10 bg-white/[0.07] p-4 shadow-2xl backdrop-blur-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#d4af37]/10 text-[#d4af37]">
                    <WashingMachine
                      size={19}
                      strokeWidth={1.5}
                    />
                  </div>

                  <div>
                    <p className="font-oswald text-sm uppercase">
                      Laundry
                    </p>

                    <p className="font-montserrat text-[8px] uppercase tracking-wider text-white/40">
                      Fresh clothes
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ServicesHero;