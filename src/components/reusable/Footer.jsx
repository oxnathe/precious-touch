import { useLocation, useNavigate } from "react-router-dom";

import { ArrowUpRight } from "lucide-react";

import { SiInstagram, SiWhatsapp } from "@icons-pack/react-simple-icons";

import { siteConfig } from "../../data/site";

function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (href) => {
    if (location.pathname === href) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    navigate(href);

    window.setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
  };

  const handleWhatsApp = () => {
    const whatsappNumber = "2349019028248";

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
    <footer className="relative overflow-hidden bg-precious-dark text-white">
      {/* PREMIUM BLUE + GOLD TOP LINE */}
      <div className="absolute inset-x-0 top-0 h-[3px]">
        <div className="h-full w-full bg-gradient-to-r from-precious-blue via-precious-cyan via-50% to-[#d4af37]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* BRAND */}
          <div className="lg:col-span-2">
            <button
              type="button"
              onClick={() => handleNavigation("/")}
              className="group inline-flex items-center gap-4 text-left"
              aria-label="Precious Touch Home"
            >
              <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-white">
                <img
                  src="/logo/precious-touch-logo.webp"
                  alt="Precious Touch Cleaning & Laundry Services"
                  className="h-full w-full object-contain"
                />
              </div>

              <div>
                <h2 className="font-oswald text-4xl font-semibold uppercase tracking-wide">
                  Precious{" "}
                  <span className="text-precious-cyan">
                    Touch
                  </span>
                </h2>

                <p className="mt-1 font-montserrat text-[9px] uppercase tracking-[0.25em] text-precious-cyan">
                  Cleaning & Laundry
                </p>
              </div>
            </button>

            <p className="mt-5 max-w-md font-poppins text-sm leading-7 text-white/60">
              Professional cleaning and laundry services designed to give your
              home and business the fresh, clean feeling they deserve.
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <p className="font-montserrat text-xs font-semibold uppercase tracking-[0.2em] text-precious-cyan">
              Navigate
            </p>

            <div className="mt-5 flex flex-col gap-3">
              {siteConfig.navigation.map((item) => (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => handleNavigation(item.href)}
                  className="w-fit font-poppins text-sm text-white/70 transition-colors hover:text-precious-cyan"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* GET STARTED */}
          <div>
            <p className="font-montserrat text-xs font-semibold uppercase tracking-[0.2em] text-precious-cyan">
              Get Started
            </p>

            <p className="mt-5 font-poppins text-sm leading-6 text-white/60">
              Ready to experience the Precious Touch?
            </p>

            {/* WHATSAPP CTA */}
            <button
              type="button"
              onClick={handleWhatsApp}
              className="mt-5 inline-flex items-center gap-3 rounded-full bg-precious-cyan px-5 py-3 font-poppins text-sm font-semibold text-precious-dark transition-all duration-300 hover:bg-white"
            >
              {/* REAL WHATSAPP ICON */}
              <SiWhatsapp
                size={18}
                color="currentColor"
              />

              Book a Service

              <ArrowUpRight size={17} />
            </button>

            {/* INSTAGRAM */}
            <div className="mt-5 block w-full">
              <a
                href="https://www.instagram.com/precioustouchclean?igsi=MTNubnZjcWs2ZGxvdQ=="
                target="_blank"
                rel="noreferrer"
                aria-label="Follow Precious Touch on Instagram"
                className="group inline-flex items-center gap-3 font-poppins text-sm text-white/60 transition-colors hover:text-white"
              >
                {/* REAL INSTAGRAM ICON */}
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-red-500/20 bg-red-500/5 text-red-500 transition-all duration-300 group-hover:border-red-500 group-hover:bg-red-500 group-hover:text-white">
                  <SiInstagram
                    size={18}
                    color="currentColor"
                  />
                </span>

                <span>PreciousTouchClean</span>
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-montserrat text-xs text-white/40">
            © {new Date().getFullYear()} Precious Touch. All rights reserved.
          </p>

          <p className="font-montserrat text-xs uppercase tracking-[0.15em] text-white/30">
            Cleaning • Laundry • Care
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;