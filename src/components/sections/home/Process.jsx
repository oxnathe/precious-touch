import { motion } from "motion/react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const image = " /images/home/process.jpeg";

const steps = [
  {
    number: "01",
    title: "Tell us what you need",
    description:
      "Send us a message and let us know what needs cleaning, washing, ironing, or refreshing.",
  },
  {
    number: "02",
    title: "We understand the job",
    description:
      "We discuss the details, understand your requirements, and arrange the service around you.",
  },
  {
    number: "03",
    title: "We get to work",
    description:
      "Our team arrives ready to deliver a professional clean with the attention your space deserves.",
  },
];

export default function Process() {
  const whatsappNumber = "2349019028248";

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hello Precious Touch, I would like to book a cleaning service."
    );

    window.open(
      `https://wa.me/${whatsappNumber}?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* HEADER */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <span className="mb-5 inline-flex items-center gap-2 font-montserrat text-[10px] font-semibold uppercase tracking-[0.25em] text-precious-blue">
              <span className="h-1.5 w-1.5 rounded-full bg-precious-cyan" />
              How It Works
            </span>

            <h2 className="font-oswald text-5xl font-medium leading-[0.95] tracking-tight text-precious-dark sm:text-6xl lg:text-7xl">
              Clean.
              <span className="block text-precious-blue">Simple.</span>
              <span className="block">Done.</span>
            </h2>
          </div>

          <p className="max-w-xl font-poppins text-sm leading-7 text-black/55 lg:ml-auto lg:text-base">
            Getting professional cleaning and laundry care should not be
            complicated. Tell us what you need, and we take care of the rest.
          </p>
        </div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative mt-14 h-[280px] overflow-hidden rounded-[2rem] md:h-[380px]"
        >
          <img
            src={image}
            alt="Precious Touch cleaning service"
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            loading="lazy"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-precious-dark/70 via-precious-dark/20 to-transparent" />

          <div className="absolute inset-y-0 left-0 flex max-w-lg items-center p-7 md:p-12">
            <div>
              <p className="font-montserrat text-[10px] font-semibold uppercase tracking-[0.25em] text-precious-cyan">
                Professional service
              </p>

              <h3 className="mt-3 font-oswald text-3xl leading-tight text-white md:text-5xl">
                We handle the work.
                <br />
                You enjoy the fresh.
              </h3>
            </div>
          </div>
        </motion.div>

        {/* STEPS */}
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="group rounded-[1.75rem] border border-black/10 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-precious-cyan/40 hover:shadow-xl"
            >
              <div className="flex items-start justify-between">
                <span className="font-oswald text-5xl font-medium text-precious-blue/20 transition-colors duration-500 group-hover:text-precious-cyan/30">
                  {step.number}
                </span>

                <CheckCircle2
                  size={21}
                  strokeWidth={1.5}
                  className="text-precious-cyan"
                />
              </div>

              <h3 className="mt-8 font-oswald text-2xl text-precious-dark">
                {step.title}
              </h3>

              <p className="mt-4 font-poppins text-sm leading-7 text-black/50">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 flex flex-col items-start justify-between gap-6 rounded-[1.75rem] bg-precious-dark p-7 md:flex-row md:items-center md:p-9"
        >
          <div>
            <p className="font-montserrat text-[10px] font-semibold uppercase tracking-[0.22em] text-precious-cyan">
              Ready when you are
            </p>

            <h3 className="mt-2 font-oswald text-2xl text-white md:text-3xl">
              Let's get your space feeling fresh.
            </h3>
          </div>

          <button
            type="button"
            onClick={handleWhatsApp}
            className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 font-montserrat text-xs font-semibold uppercase tracking-[0.12em] text-precious-dark transition-all duration-300 hover:bg-precious-cyan"
          >
            Book a Service
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </button>
        </motion.div>
      </div>
    </section>
  );
}