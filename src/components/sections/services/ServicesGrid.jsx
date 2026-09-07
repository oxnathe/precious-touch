import { motion } from "motion/react";

import {
  ArrowUpRight,
  Building2,
  CarFront,
  Factory,
  Home,
  Shirt,
  WashingMachine,
  Armchair,
} from "lucide-react";

const whatsappNumber = "2349019028248";

const services = [
  {
    number: "01",
    title: "Residential Cleaning",
    description:
      "Professional cleaning support for homes that deserve a consistently fresh and comfortable environment.",
    icon: Home,
    accent: "cyan",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=85",
  },

  {
    number: "02",
    title: "Commercial Cleaning",
    description:
      "Cleaning solutions for offices, workspaces, and commercial environments that need to stay presentable and welcoming.",
    icon: Building2,
    accent: "blue",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85",
  },

  {
    number: "03",
    title: "Industrial Cleaning",
    description:
      "Practical cleaning support for larger working environments where cleanliness and organisation matter.",
    icon: Factory,
    accent: "gold",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=85",
  },

  {
    number: "04",
    title: "Laundry & Dry Cleaning",
    description:
      "Professional care for your clothes and fabrics, helping keep everyday wear fresh, clean, and ready.",
    icon: Shirt,
    accent: "cyan",
    image:
      "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=1200&q=85",
  },

  {
    number: "05",
    title: "Cleaning & Ironing",
    description:
      "A convenient combination of cleaning and ironing support for clients who want more done in one service.",
    icon: WashingMachine,
    accent: "gold",
    image:
      "https://images.unsplash.com/photo-1489274495757-95c7c837b101?auto=format&fit=crop&w=1200&q=85",
  },

  {
    number: "06",
    title: "Upholstery Services",
    description:
      "We restore, refresh, repair, and transform sofas, chairs, cushions, headboards, car seats, and other upholstered furniture with quality finishing and attention to detail.",
    icon: Armchair,
    accent: "cyan",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=85",
  },

  {
    number: "07",
    title: "Car Wash Services",
    description:
      "Professional exterior and interior vehicle cleaning including washing, vacuuming, dashboard care, tyre care, and detailed finishing for a spotless, polished result.",
    icon: CarFront,
    accent: "blue",
    image:
      "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=1200&q=85",
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
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-15rem] top-[15%] h-[30rem] w-[30rem] rounded-full bg-precious-cyan/10 blur-[120px]" />

        <div className="absolute right-[-15rem] bottom-[5%] h-[32rem] w-[32rem] rounded-full bg-[#d4af37]/10 blur-[120px]" />

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
        {/* INTRO */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-precious-blue/10 bg-white px-4 py-2 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-precious-cyan" />

              <span className="font-montserrat text-[10px] font-semibold uppercase tracking-[0.25em] text-precious-blue">
                Our Services
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2 className="font-oswald text-5xl font-semibold uppercase leading-[0.95] tracking-tight text-precious-dark sm:text-6xl lg:text-7xl">
              Care for your
              <span className="block bg-gradient-to-r from-precious-blue via-precious-cyan to-[#d4af37] bg-clip-text text-transparent">
                space & routine.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl font-poppins text-sm leading-7 text-precious-dark/55 sm:text-base">
              Whether you need help keeping your home fresh, your workplace
              clean, your clothes properly cared for, your furniture restored,
              or your vehicle looking its best, choose the service that fits
              your needs.
            </p>
          </motion.div>
        </div>

        {/* SERVICE CARDS */}
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -7 }}
                className={`group relative overflow-hidden rounded-[2rem] border bg-white p-7 shadow-lg transition-all duration-500 md:col-span-1 ${
                  index === 0 || index === 1
                    ? "lg:col-span-2"
                    : index === 2
                      ? "lg:col-span-2"
                      : "lg:col-span-3"
                } ${
                  service.accent === "gold"
                    ? "border-[#d4af37]/20 hover:border-[#d4af37]/50 hover:shadow-[#d4af37]/10"
                    : "border-precious-cyan/15 hover:border-precious-cyan/40 hover:shadow-precious-cyan/10"
                }`}
              >
                {/* SERVICE IMAGE */}
                <div className="relative mb-7 h-48 overflow-hidden rounded-[1.4rem]">
                  <img
                    src={service.image}
                    alt={`${service.title} - Precious Touch`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading={index > 1 ? "lazy" : "eager"}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-precious-dark/60 via-precious-dark/10 to-transparent" />

                  <div className="absolute bottom-4 left-4">
                    <span className="rounded-full bg-white/90 px-3 py-1 font-montserrat text-[9px] font-semibold uppercase tracking-[0.18em] text-precious-blue backdrop-blur-sm">
                      Precious Touch
                    </span>
                  </div>
                </div>

                {/* CARD GLOW */}
                <div
                  className={`pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full blur-3xl opacity-40 transition-opacity duration-500 group-hover:opacity-80 ${
                    service.accent === "gold"
                      ? "bg-[#d4af37]/15"
                      : "bg-precious-cyan/10"
                  }`}
                />

                {/* NUMBER + ICON */}
                <div className="relative flex items-start justify-between">
                  <span className="font-montserrat text-[10px] font-semibold tracking-[0.2em] text-precious-blue/35">
                    {service.number}
                  </span>

                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-500 group-hover:rotate-6 ${
                      service.accent === "gold"
                        ? "bg-[#d4af37]/10 text-[#b08d21]"
                        : "bg-precious-cyan/10 text-precious-blue"
                    }`}
                  >
                    <Icon size={21} strokeWidth={1.7} />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="relative mt-10">
                  <h3 className="max-w-sm font-oswald text-3xl font-semibold uppercase leading-[0.95] text-precious-dark sm:text-4xl">
                    {service.title}
                  </h3>

                  <p className="mt-5 max-w-xl font-poppins text-sm leading-6 text-precious-dark/55">
                    {service.description}
                  </p>
                </div>

                {/* CTA */}
                <button
                  type="button"
                  onClick={() => handleServiceClick(service.title)}
                  className={`relative mt-8 inline-flex items-center gap-3 rounded-full px-5 py-3 font-poppins text-xs font-semibold transition-all duration-300 ${
                    service.accent === "gold"
                      ? "bg-[#d4af37]/10 text-[#8f7118] hover:bg-[#d4af37] hover:text-precious-dark"
                      : "bg-precious-blue/5 text-precious-blue hover:bg-precious-blue hover:text-white"
                  }`}
                >
                  Ask About This Service
                  <ArrowUpRight size={16} />
                </button>

                {/* BOTTOM LINE */}
                <div
                  className={`absolute bottom-0 left-7 right-7 h-[2px] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100 ${
                    service.accent === "gold"
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

export default ServicesGrid;