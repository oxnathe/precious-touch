import { motion } from "motion/react";
import { ArrowUpRight, Phone, MessageCircle } from "lucide-react";

const whatsappNumber = "2349019028248";
const phoneNumber = "09019028248";

function CTA() {
  const whatsappMessage = encodeURIComponent(
    "Hello Precious Touch, I would like to book a cleaning or laundry service."
  );

  return (
    <section className="relative overflow-hidden bg-precious-dark py-24 text-white sm:py-28 lg:py-36">
      {/* Background glow */}
      <div className="absolute -left-40 top-1/2 h-[30rem] w-[30rem] -translate-y-1/2 rounded-full bg-precious-cyan/10 blur-[120px]" />

      <div className="absolute -right-40 top-0 h-[30rem] w-[30rem] rounded-full bg-precious-blue/50 blur-[120px]" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] [background-size:80px_80px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] px-7 py-14 text-center sm:px-12 sm:py-20 lg:px-20 lg:py-24"
        >
          {/* Decorative circles */}
          <div className="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-precious-cyan/10" />

          <div className="absolute left-1/2 top-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />

          <div className="relative">
            <div className="mx-auto flex w-fit items-center gap-3">
              <span className="h-px w-8 bg-precious-cyan" />

              <span className="font-montserrat text-[10px] font-semibold uppercase tracking-[0.3em] text-precious-cyan">
                Your space deserves the touch
              </span>

              <span className="h-px w-8 bg-precious-cyan" />
            </div>

            <h2 className="mx-auto mt-7 max-w-5xl font-oswald text-[clamp(3.5rem,8vw,7rem)] font-semibold uppercase leading-[0.85] tracking-tight">
              Let&apos;s make
              <br />
              <span className="text-precious-cyan">fresh</span> happen.
            </h2>

            <p className="mx-auto mt-8 max-w-xl font-poppins text-sm leading-8 text-white/50 sm:text-base">
              Whether it&apos;s your home, your workplace, or your wardrobe,
              Precious Touch is ready to help you get things feeling fresh
              again.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-precious-cyan px-7 py-4 font-poppins text-sm font-semibold text-precious-dark transition-all duration-300 hover:-translate-y-1 hover:bg-white"
              >
                <MessageCircle size={18} />

                WhatsApp Us

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href={`tel:${phoneNumber}`}
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 px-7 py-4 font-poppins text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-precious-cyan hover:text-precious-cyan"
              >
                <Phone size={17} />

                Call 0901 902 8248
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CTA;