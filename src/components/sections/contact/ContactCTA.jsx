import { motion } from "motion/react";

import {
  ArrowUpRight,
  MessageCircle,
  Sparkles,
} from "lucide-react";

const whatsappNumber = "2349019028248";

function ContactCTA() {
  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hello Precious Touch, I would like to book a cleaning or laundry service."
    );

    window.open(
      `https://wa.me/${whatsappNumber}?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="relative overflow-hidden bg-precious-dark py-24 sm:py-28 lg:py-32">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-12rem] top-[-12rem] h-[32rem] w-[32rem] rounded-full bg-precious-cyan/10 blur-[120px]" />

        <div className="absolute right-[-12rem] bottom-[-14rem] h-[35rem] w-[35rem] rounded-full bg-[#d4af37]/10 blur-[130px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.04] px-7 py-14 text-center backdrop-blur-xl sm:px-12 sm:py-16 lg:px-20 lg:py-20"
        >
          {/* DECORATIVE CIRCLES */}
          <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full border border-precious-cyan/10" />

          <div className="pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full border border-[#d4af37]/10" />

          <div className="relative">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-precious-cyan/20 bg-precious-cyan/10 text-precious-cyan">
              <MessageCircle size={24} strokeWidth={1.5} />
            </div>

            <p className="mt-7 font-montserrat text-[10px] font-semibold uppercase tracking-[0.3em] text-precious-cyan">
              Your fresh start
            </p>

            <h2 className="mx-auto mt-4 max-w-4xl font-oswald text-5xl font-semibold uppercase leading-[0.92] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Ready for the
              <span className="block bg-gradient-to-r from-precious-cyan via-white to-[#d4af37] bg-clip-text text-transparent">
                Precious Touch?
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl font-poppins text-sm leading-7 text-white/55 sm:text-base">
              Send us a message on WhatsApp and tell us what you need. We’ll
              help you take the next step.
            </p>

            <button
              type="button"
              onClick={handleWhatsApp}
              className="group mt-9 inline-flex items-center gap-3 rounded-full bg-precious-cyan px-7 py-4 font-poppins text-sm font-semibold text-precious-dark transition-all duration-300 hover:-translate-y-1 hover:bg-white"
            >
              Book a Service

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black/5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                <ArrowUpRight size={18} />
              </span>
            </button>

            {/* SMALL TRUST LINE */}
            <div className="mt-8 flex items-center justify-center gap-2 text-white/35">
              <Sparkles size={14} />

              <span className="font-montserrat text-[9px] uppercase tracking-[0.2em]">
                Cleaning • Laundry • Care
              </span>

              <Sparkles size={14} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactCTA;