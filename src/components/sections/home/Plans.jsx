import { motion } from "motion/react";
import {
  ArrowUpRight,
  Check,
  Sparkles,
  Crown,
  Gem,
} from "lucide-react";

const whatsappNumber = "2349019028248";

const plans = [
  {
    number: "01",
    name: "Essential",
    label: "EVERYDAY CARE",
    description:
      "A simple recurring plan for keeping your space and routine consistently fresh.",
    icon: Sparkles,
    features: [
      "Regular cleaning support",
      "Laundry & ironing support",
      "Flexible monthly scheduling",
      "WhatsApp service support",
    ],
    featured: false,
    accent: "cyan",
  },
  {
    number: "02",
    name: "Signature",
    label: "MOST POPULAR",
    description:
      "Our balanced plan for busy people who want more consistency with less to worry about.",
    icon: Crown,
    features: [
      "More frequent service",
      "Cleaning + laundry support",
      "Professional ironing",
      "Priority scheduling",
      "Flexible monthly service",
      "WhatsApp priority support",
    ],
    featured: true,
    accent: "signature",
  },
  {
    number: "03",
    name: "Prestige",
    label: "PREMIUM CARE",
    description:
      "A higher level of recurring care designed for clients who expect a more complete experience.",
    icon: Gem,
    features: [
      "Comprehensive monthly service",
      "Regular cleaning support",
      "Laundry & ironing",
      "Priority scheduling",
      "Premium service coordination",
      "Custom service requests",
    ],
    featured: false,
    accent: "gold",
  },
];

function Plans() {
  const handlePlanClick = (planName) => {
    const message = encodeURIComponent(
      `Hello Precious Touch, I am interested in the ${planName} Monthly Plan. I would like to know more about the pricing and what is included.`
    );

    window.open(
      `https://wa.me/${whatsappNumber}?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="relative overflow-hidden bg-precious-light py-24 sm:py-28 lg:py-32">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-12rem] top-[8%] h-[28rem] w-[28rem] rounded-full bg-precious-cyan/10 blur-[110px]" />

        <div className="absolute right-[-10rem] top-[35%] h-[30rem] w-[30rem] rounded-full bg-[#d4af37]/10 blur-[120px]" />

        <div className="absolute bottom-[-14rem] left-[30%] h-[28rem] w-[28rem] rounded-full bg-precious-blue/10 blur-[110px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#062a4d 1px, transparent 1px), linear-gradient(90deg, #062a4d 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* SECTION HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex items-center gap-3 rounded-full border border-precious-blue/10 bg-white px-4 py-2 shadow-sm"
          >
            <span className="h-2 w-2 rounded-full bg-precious-cyan" />

            <span className="font-montserrat text-[10px] font-semibold uppercase tracking-[0.25em] text-precious-blue">
              Precious Touch Plans
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-oswald text-5xl font-semibold uppercase leading-[0.95] tracking-tight text-precious-dark sm:text-6xl lg:text-7xl"
          >
            Your home deserves
            <span className="block bg-gradient-to-r from-precious-blue via-precious-cyan to-[#d4af37] bg-clip-text text-transparent">
              consistent care.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl font-poppins text-sm leading-7 text-precious-dark/60 sm:text-base"
          >
            Choose a monthly service plan that takes cleaning and laundry
            off your mental list — so you can spend more time on what matters.
          </motion.p>
        </div>

        {/* PLANS */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, index) => {
            const Icon = plan.icon;

            return (
              <motion.article
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                }}
                whileHover={{ y: -8 }}
                className={`group relative overflow-hidden rounded-[2rem] border p-7 transition-all duration-500 sm:p-8 ${
                  plan.featured
                    ? "border-precious-cyan/40 bg-precious-blue text-white shadow-2xl shadow-precious-blue/25"
                    : plan.accent === "gold"
                      ? "border-[#d4af37]/30 bg-white text-precious-dark shadow-lg shadow-[#d4af37]/5 hover:border-[#d4af37]/60 hover:shadow-2xl hover:shadow-[#d4af37]/10"
                      : "border-precious-cyan/20 bg-white text-precious-dark shadow-lg shadow-precious-blue/5 hover:border-precious-cyan/50 hover:shadow-2xl hover:shadow-precious-blue/10"
                }`}
              >
                {/* TOP GLOW */}
                <div
                  className={`pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full blur-3xl transition-opacity duration-500 group-hover:opacity-100 ${
                    plan.featured
                      ? "bg-precious-cyan/20 opacity-70"
                      : plan.accent === "gold"
                        ? "bg-[#d4af37]/15 opacity-50"
                        : "bg-precious-cyan/10 opacity-50"
                  }`}
                />

                {/* FEATURED BADGE */}
                {plan.featured && (
                  <div className="absolute right-6 top-6 flex items-center gap-2 rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 px-3 py-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#d4af37]" />

                    <span className="font-montserrat text-[8px] font-bold uppercase tracking-[0.15em] text-[#f1d77b]">
                      Recommended
                    </span>
                  </div>
                )}

                {/* TOP */}
                <div className="relative flex items-start justify-between">
                  <div>
                    <p
                      className={`font-montserrat text-[10px] font-semibold tracking-[0.2em] ${
                        plan.featured
                          ? "text-precious-cyan"
                          : plan.accent === "gold"
                            ? "text-[#b08d21]"
                            : "text-precious-blue/50"
                      }`}
                    >
                      {plan.number} / {plan.label}
                    </p>

                    <h3
                      className={`mt-3 font-oswald text-4xl font-semibold uppercase ${
                        plan.featured
                          ? "text-white"
                          : "text-precious-dark"
                      }`}
                    >
                      {plan.name}
                    </h3>
                  </div>

                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:rotate-6 ${
                      plan.featured
                        ? "bg-precious-cyan/10 text-precious-cyan"
                        : plan.accent === "gold"
                          ? "bg-[#d4af37]/10 text-[#b08d21]"
                          : "bg-precious-cyan/10 text-precious-blue"
                    }`}
                  >
                    <Icon size={21} strokeWidth={1.7} />
                  </div>
                </div>

                {/* DESCRIPTION */}
                <p
                  className={`relative mt-6 min-h-[72px] font-poppins text-sm leading-6 ${
                    plan.featured
                      ? "text-white/60"
                      : "text-precious-dark/55"
                  }`}
                >
                  {plan.description}
                </p>

                {/* DECORATIVE LINE */}
                <div className="relative my-7 flex items-center gap-3">
                  <div
                    className={`h-px flex-1 ${
                      plan.featured
                        ? "bg-white/10"
                        : "bg-precious-blue/10"
                    }`}
                  />

                  <div
                    className={`h-1.5 w-1.5 rotate-45 ${
                      plan.featured
                        ? "bg-[#d4af37]"
                        : plan.accent === "gold"
                          ? "bg-[#d4af37]"
                          : "bg-precious-cyan"
                    }`}
                  />

                  <div
                    className={`h-px flex-1 ${
                      plan.featured
                        ? "bg-white/10"
                        : "bg-precious-blue/10"
                    }`}
                  />
                </div>

                {/* FEATURES */}
                <div className="relative space-y-4">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-3"
                    >
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          plan.featured
                            ? "bg-precious-cyan text-precious-dark"
                            : plan.accent === "gold"
                              ? "bg-[#d4af37]/10 text-[#b08d21]"
                              : "bg-precious-cyan/10 text-precious-blue"
                        }`}
                      >
                        <Check size={12} strokeWidth={2.5} />
                      </span>

                      <span
                        className={`font-poppins text-sm ${
                          plan.featured
                            ? "text-white/75"
                            : "text-precious-dark/65"
                        }`}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button
                  type="button"
                  onClick={() => handlePlanClick(plan.name)}
                  className={`relative mt-8 flex w-full items-center justify-between rounded-full px-5 py-4 font-poppins text-sm font-semibold transition-all duration-300 ${
                    plan.featured
                      ? "bg-precious-cyan text-precious-dark hover:bg-white"
                      : plan.accent === "gold"
                        ? "bg-[#d4af37] text-[#041c33] hover:bg-[#e5c45b]"
                        : "bg-precious-dark text-white hover:bg-precious-blue"
                  }`}
                >
                  Ask About {plan.name}

                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-full ${
                      plan.featured
                        ? "bg-black/5"
                        : plan.accent === "gold"
                          ? "bg-white/20"
                          : "bg-white/10"
                    }`}
                  >
                    <ArrowUpRight size={17} />
                  </span>
                </button>
              </motion.article>
            );
          })}
        </div>

        {/* CUSTOM PLAN */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto mt-8 max-w-4xl overflow-hidden rounded-[2rem] border border-[#d4af37]/20 bg-white p-7 text-center shadow-lg shadow-[#d4af37]/5 sm:p-9 md:flex md:items-center md:justify-between md:gap-8 md:text-left"
        >
          {/* GOLD ACCENT */}
          <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-full bg-[#d4af37]/10 blur-3xl" />

          <div className="relative">
            <div className="flex items-center justify-center gap-2 md:justify-start">
              <span className="h-1.5 w-1.5 rounded-full bg-[#d4af37]" />

              <p className="font-montserrat text-[10px] font-semibold uppercase tracking-[0.2em] text-[#b08d21]">
                Need something different?
              </p>
            </div>

            <h3 className="mt-2 font-oswald text-2xl font-semibold uppercase text-precious-dark sm:text-3xl">
              Build a plan around your lifestyle.
            </h3>

            <p className="mt-2 max-w-xl font-poppins text-sm leading-6 text-precious-dark/55">
              Tell us what you need and we can discuss a recurring service
              arrangement that fits your home or routine.
            </p>
          </div>

          <button
            type="button"
            onClick={() => handlePlanClick("Custom")}
            className="relative mt-6 inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-precious-blue px-6 py-4 font-poppins text-sm font-semibold text-white transition-all duration-300 hover:bg-precious-dark md:mt-0"
          >
            Talk to Us
            <ArrowUpRight size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default Plans;