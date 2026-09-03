import { motion } from "motion/react";

import {
  ArrowUpRight,
  Phone,
} from "lucide-react";

import {
  SiInstagram,
  SiWhatsapp,
} from "@icons-pack/react-simple-icons";

const whatsappNumber = "2349019028248";
const phoneNumber = "09019028248";

const contactOptions = [
  {
    number: "01",
    title: "WhatsApp",
    description:
      "The quickest way to tell us what you need and get help choosing the right service.",
    label: "Start a Conversation",
    accent: "cyan",
    icon: SiWhatsapp,
    iconColor: "text-[#25D366]",
    action: () => {
      const message = encodeURIComponent(
        "Hello Precious Touch, I would like to book a cleaning or laundry service."
      );

      window.open(
        `https://wa.me/${whatsappNumber}?text=${message}`,
        "_blank",
        "noopener,noreferrer"
      );
    },
  },
  {
    number: "02",
    title: "Call Us",
    description:
      "Prefer speaking directly? Give us a call and let's discuss the service you need.",
    label: "Give Us a Call",
    accent: "blue",
    icon: Phone,
    iconColor: "text-precious-blue",
    action: () => {
      window.location.href = `tel:${phoneNumber}`;
    },
  },
  {
    number: "03",
    title: "Instagram",
    description:
      "Follow Precious Touch for updates, cleaning inspiration, and more from our brand.",
    label: "Follow Us",
    accent: "gold",
    icon: SiInstagram,
    iconColor: "text-[#E1306C]",
    action: () => {
      window.open(
        "https://www.instagram.com/precioustouchclean?igsi=MTNubnZjcWs2ZGxvdQ==",
        "_blank",
        "noopener,noreferrer"
      );
    },
  },
];

function ContactOptions() {
  return (
    <section
      id="contact-options"
      className="relative overflow-hidden bg-precious-light py-24 sm:py-28 lg:py-32"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-14rem] top-[10%] h-[30rem] w-[30rem] rounded-full bg-precious-cyan/10 blur-[120px]" />

        <div className="absolute right-[-14rem] bottom-[5%] h-[32rem] w-[32rem] rounded-full bg-[#d4af37]/10 blur-[120px]" />

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
        {/* SECTION INTRO */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-precious-blue/10 bg-white px-4 py-2 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-precious-cyan" />

            <span className="font-montserrat text-[10px] font-semibold uppercase tracking-[0.25em] text-precious-blue">
              Choose Your Way
            </span>
          </div>

          <h2 className="mt-7 font-oswald text-5xl font-semibold uppercase leading-[0.95] tracking-tight text-precious-dark sm:text-6xl lg:text-7xl">
            Let’s talk about
            <span className="block bg-gradient-to-r from-precious-blue via-precious-cyan to-[#d4af37] bg-clip-text text-transparent">
              what you need.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl font-poppins text-sm leading-7 text-precious-dark/55 sm:text-base">
            No complicated forms. No unnecessary steps. Just choose the
            easiest way to reach Precious Touch and tell us what you need.
          </p>
        </motion.div>

        {/* CONTACT CARDS */}
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {contactOptions.map((option, index) => {
            const Icon = option.icon;

            return (
              <motion.article
                key={option.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -7 }}
                className={`group relative overflow-hidden rounded-[2rem] border bg-white p-7 shadow-lg transition-all duration-500 ${
                  option.accent === "gold"
                    ? "border-[#d4af37]/20 hover:border-[#d4af37]/50 hover:shadow-[#d4af37]/10"
                    : "border-precious-cyan/15 hover:border-precious-cyan/40 hover:shadow-precious-cyan/10"
                }`}
              >
                {/* CARD GLOW */}
                <div
                  className={`pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full blur-3xl opacity-40 transition-opacity duration-500 group-hover:opacity-80 ${
                    option.accent === "gold"
                      ? "bg-[#d4af37]/15"
                      : "bg-precious-cyan/10"
                  }`}
                />

                {/* TOP */}
                <div className="relative flex items-start justify-between">
                  <span className="font-montserrat text-[10px] font-semibold tracking-[0.2em] text-precious-blue/35">
                    {option.number}
                  </span>

                  {/* REAL BRAND / CONTACT ICON */}
                  <motion.div
                    whileHover={{ rotate: 6, scale: 1.05 }}
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-500 ${
                      option.accent === "gold"
                        ? "bg-[#d4af37]/10"
                        : "bg-precious-cyan/10"
                    } ${option.iconColor}`}
                  >
                    <Icon
                      size={27}
                      strokeWidth={
                        option.title === "Call Us" ? 1.6 : undefined
                      }
                    />
                  </motion.div>
                </div>

                {/* CONTENT */}
                <div className="relative mt-10">
                  <h3 className="font-oswald text-4xl font-semibold uppercase leading-none text-precious-dark">
                    {option.title}
                  </h3>

                  <p className="mt-5 min-h-[96px] font-poppins text-sm leading-6 text-precious-dark/55">
                    {option.description}
                  </p>
                </div>

                {/* ACTION */}
                <button
                  type="button"
                  onClick={option.action}
                  className={`relative mt-8 inline-flex items-center gap-3 rounded-full px-5 py-3 font-poppins text-xs font-semibold transition-all duration-300 ${
                    option.accent === "gold"
                      ? "bg-[#d4af37]/10 text-[#8f7118] hover:bg-[#d4af37] hover:text-precious-dark"
                      : "bg-precious-blue/5 text-precious-blue hover:bg-precious-blue hover:text-white"
                  }`}
                >
                  {option.label}

                  <ArrowUpRight size={16} />
                </button>

                {/* BOTTOM ACCENT */}
                <div
                  className={`absolute bottom-0 left-7 right-7 h-[2px] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100 ${
                    option.accent === "gold"
                      ? "bg-[#d4af37]"
                      : "bg-precious-cyan"
                  }`}
                />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ContactOptions;