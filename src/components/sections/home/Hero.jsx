import { motion } from "motion/react";

import { ArrowUpRight, Phone, Droplets, Sparkles } from "lucide-react";

const whatsappNumber = "2349019028248";

const phoneNumber = "09019028248";

function Hero() {
  const whatsappMessage = encodeURIComponent(
    "Hello Precious Touch, I would like to book a cleaning or laundry service."
  );

  return (
    <section className="relative min-h-screen overflow-hidden bg-precious-dark text-white">
      {/* Background atmosphere */}
      <div className="absolute inset-0">
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-precious-cyan/10 blur-3xl" />
        <div className="absolute -right-20 top-1/3 h-[28rem] w-[28rem] rounded-full bg-precious-blue/50 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-precious-cyan/5 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] [background-size:80px_80px]" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-16 pt-32 sm:px-8 lg:px-10">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          {/* HERO CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="mb-7 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-precious-cyan" />

              <span className="font-montserrat text-xs font-semibold uppercase tracking-[0.25em] text-precious-cyan">
                Cleaning • Laundry • Care
              </span>
            </motion.div>

            <h1 className="font-oswald text-[clamp(3.5rem,8vw,7.5rem)] font-semibold uppercase leading-[0.88] tracking-tight">
              A cleaner
              <br />
              <span className="text-precious-cyan">space.</span>
              <br />
              A fresher
              <br />
              <span className="text-white/35">you.</span>
            </h1>

            <p className="mt-8 max-w-xl font-poppins text-base leading-8 text-white/60 sm:text-lg">
              Professional cleaning and laundry services for homes and
              businesses in Lagos. We take care of the details so you can
              focus on what matters.
            </p>

            {/* CTA BUTTONS */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-precious-cyan px-7 py-4 font-poppins text-sm font-semibold text-precious-dark transition-all duration-300 hover:-translate-y-1 hover:bg-white"
              >
                Book a Service

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href={`tel:${phoneNumber}`}
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 px-7 py-4 font-poppins text-sm font-medium text-white transition-all duration-300 hover:border-precious-cyan hover:text-precious-cyan"
              >
                <Phone size={17} />
                Call Us
              </a>
            </div>

            {/* CONTACT MICRO DETAIL */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-8 flex items-center gap-3"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-precious-cyan opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-precious-cyan" />
              </span>

              <span className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-white/35">
                Serving homes & businesses in Lagos
              </span>
            </motion.div>
          </motion.div>

          {/* HERO VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.25,
              duration: 0.9,
              ease: "easeOut",
            }}
            className="relative mx-auto w-full max-w-xl"
          >
            <div className="relative aspect-square">
              {/* LARGE AMBIENT GLOW */}
              <div className="absolute left-1/2 top-1/2 h-[65%] w-[65%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-precious-cyan/10 blur-[90px]" />

              {/* OUTER ROTATING RING */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 32,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-[3%] rounded-full border border-precious-cyan/20"
              >
                <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-precious-cyan shadow-[0_0_18px_rgba(0,217,255,0.9)]" />
              </motion.div>

              {/* SECOND ROTATING RING */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 42,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-[11%] rounded-full border border-white/10 border-dashed"
              >
                <span className="absolute bottom-[4%] left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-white/50" />
              </motion.div>

              {/* INNER RING */}
              <div className="absolute inset-[16%] rounded-full border border-precious-cyan/10" />

              {/* MAIN EMBLEM */}
              <div className="absolute inset-[19%] overflow-hidden rounded-full border border-precious-cyan/25 bg-gradient-to-br from-precious-blue via-precious-dark to-black shadow-[0_0_100px_rgba(0,217,255,0.14)]">
                {/* Water glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_25%,rgba(0,217,255,0.3),transparent_32%)]" />

                {/* Animated water wave */}
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                    scale: [1, 1.04, 1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-20 left-1/2 h-[65%] w-[150%] -translate-x-1/2 rounded-[45%] border border-precious-cyan/10 bg-precious-cyan/[0.035]"
                />

                {/* Central mark */}
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 flex flex-col items-center justify-center"
                >
                  {/* PT MARK */}
                  <div className="relative flex h-24 w-24 items-center justify-center">
                    <div className="absolute inset-0 rounded-full border border-precious-cyan/30" />

                    <div className="absolute inset-2 rounded-full border border-white/10" />

                    <Droplets
                      size={19}
                      strokeWidth={1.5}
                      className="absolute right-1 top-0 text-precious-cyan"
                    />

                    <span className="font-oswald text-5xl font-semibold tracking-[-0.08em] text-white">
                      P<span className="text-precious-cyan">T</span>
                    </span>
                  </div>

                  {/* FRESH WORDMARK */}
                  <div className="mt-5 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <Sparkles
                        size={13}
                        strokeWidth={1.5}
                        className="text-precious-cyan"
                      />

                      <p className="font-oswald text-4xl font-semibold uppercase leading-none tracking-wide text-white sm:text-5xl">
                        Fresh
                      </p>

                      <Sparkles
                        size={13}
                        strokeWidth={1.5}
                        className="text-precious-cyan"
                      />
                    </div>

                    <p className="mt-2 font-montserrat text-[9px] font-medium uppercase tracking-[0.45em] text-precious-cyan">
                      Every Time
                    </p>
                  </div>
                </motion.div>

                {/* Small shine */}
                <motion.div
                  animate={{
                    x: ["-120%", "120%"],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-y-0 w-20 -skew-x-12 bg-white/10 blur-xl"
                />
              </div>

              {/* TOP FLOATING CARD */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute right-0 top-[12%] rounded-2xl border border-white/10 bg-white/10 px-5 py-4 shadow-2xl backdrop-blur-xl"
              >
                <p className="font-montserrat text-[9px] uppercase tracking-[0.2em] text-white/45">
                  Your space
                </p>

                <p className="mt-1 font-oswald text-xl uppercase text-white">
                  Deserves better.
                </p>
              </motion.div>

              {/* BOTTOM FLOATING CARD */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-[12%] left-0 rounded-2xl border border-precious-cyan/20 bg-precious-blue/80 px-5 py-4 shadow-2xl backdrop-blur-xl"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-precious-cyan text-precious-dark">
                    <Droplets size={17} />
                  </span>

                  <div>
                    <p className="font-poppins text-xs font-semibold text-white">
                      Professional care
                    </p>

                    <p className="font-montserrat text-[9px] uppercase tracking-[0.15em] text-white/40">
                      Home & business
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        animate={{ y: [0, 7, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-3 md:flex"
      >
        <span className="font-montserrat text-[9px] uppercase tracking-[0.3em] text-white/30">
          Scroll to explore
        </span>

        <span className="h-8 w-px bg-white/20" />
      </motion.div>
    </section>
  );
}

export default Hero;