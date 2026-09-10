import { motion } from "motion/react";

import {
  ArrowDown,
  Droplets,
} from "lucide-react";

import { SiWhatsapp } from "@icons-pack/react-simple-icons";

function ContactHero() {
  const scrollToContact = () => {
    document.getElementById("contact-options")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative flex min-h-[78vh] items-center overflow-hidden bg-precious-dark pt-28 text-white sm:min-h-[82vh] lg:min-h-[88vh]">
      {/* HERO BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center lg:bg-[center_15%]"
        style={{
          backgroundImage: "url('/images/contact/boss.png')",
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-precious-dark/75" />

      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-15rem] top-[-12rem] h-[36rem] w-[36rem] rounded-full bg-precious-blue/50 blur-[120px]" />

        <div className="absolute right-[-12rem] top-[10%] h-[34rem] w-[34rem] rounded-full bg-precious-cyan/10 blur-[130px]" />

        <div className="absolute bottom-[-14rem] left-[30%] h-[30rem] w-[30rem] rounded-full bg-[#d4af37]/10 blur-[120px]" />

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
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
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
                Get In Touch
              </span>

              <span className="h-1.5 w-1.5 rounded-full bg-[#d4af37]" />
            </motion.div>

            {/* HEADING */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="max-w-4xl font-oswald text-6xl font-semibold uppercase leading-[0.9] tracking-tight sm:text-7xl lg:text-8xl"
            >
              Cleaner
              <span className="block text-precious-cyan">
                clothes.
              </span>

              Fresher
              <span className="block bg-gradient-to-r from-white via-white to-[#d4af37] bg-clip-text text-transparent">
                spaces.
              </span>

              Protected
              <span className="block text-white/40">
                homes.
              </span>
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-7 max-w-2xl font-poppins text-sm leading-7 text-white/60 sm:text-base"
            >
              From laundry and ironing to professional home and office
              cleaning, fumigation, and pest control  Precious Touch has
              you covered.
            </motion.p>

            {/* CTA */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              type="button"
              onClick={scrollToContact}
              className="group mt-9 inline-flex items-center gap-3 rounded-full bg-precious-cyan px-6 py-4 font-poppins text-sm font-semibold text-precious-dark transition-all duration-300 hover:-translate-y-1 hover:bg-white"
            >
              Contact Precious Touch

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black/5 transition-transform duration-300 group-hover:translate-y-1">
                <ArrowDown size={16} />
              </span>
            </motion.button>
          </div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative mx-auto w-full max-w-md lg:ml-auto"
          >
            <div className="relative aspect-square">
              {/* OUTER RING */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 26,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-[7%] rounded-full border border-precious-cyan/20"
              />

              {/* SECOND RING */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 34,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-[17%] rounded-full border border-[#d4af37]/20 border-dashed"
              />

              {/* GLOW */}
              <div className="absolute inset-[23%] rounded-full bg-precious-cyan/10 blur-[70px]" />

              {/* MAIN CIRCLE */}
              <div className="absolute inset-[25%] rounded-full bg-gradient-to-br from-precious-blue via-precious-dark to-precious-blue shadow-[0_0_100px_rgba(0,217,255,0.14)]" />

              {/* CENTER */}
              <div className="absolute inset-[32%] flex items-center justify-center rounded-full border border-white/10 bg-white/[0.035] backdrop-blur-sm">
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
                  {/* REAL WHATSAPP ICON */}
                  <SiWhatsapp
                    className="mx-auto text-precious-cyan"
                    size={40}
                    color="currentColor"
                  />

                  <p className="mt-4 font-oswald text-2xl font-semibold uppercase">
                    Talk
                  </p>

                  <p className="font-montserrat text-[9px] uppercase tracking-[0.3em] text-[#d4af37]">
                    To Us
                  </p>
                </motion.div>
              </div>

              {/* FRESH FLOATING CARD */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-0 top-[22%] rounded-2xl border border-white/10 bg-white/[0.07] p-4 shadow-2xl backdrop-blur-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-precious-cyan/10 text-precious-cyan">
                    <Droplets size={21} strokeWidth={1.5} />
                  </div>

                  <div>
                    <p className="font-oswald text-sm uppercase">
                      Fresh
                    </p>

                    <p className="font-montserrat text-[8px] uppercase tracking-wider text-white/40">
                      Starts here
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* WHATSAPP FLOATING CARD */}
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
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#25D366]/10 text-[#25D366]">
                    <SiWhatsapp
                      size={21}
                      color="currentColor"
                    />
                  </div>

                  <div>
                    <p className="font-oswald text-sm uppercase">
                      WhatsApp
                    </p>

                    <p className="font-montserrat text-[8px] uppercase tracking-wider text-white/40">
                      Quick response
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

export default ContactHero;
