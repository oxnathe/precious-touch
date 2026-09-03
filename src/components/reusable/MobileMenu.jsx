import { useLocation, useNavigate } from "react-router-dom";
import { X, ArrowUpRight } from "lucide-react";

import { siteConfig } from "../../data/site";

const whatsappNumber = "2349019028248";

function MobileMenu({ isOpen, onClose }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (href) => {
    onClose();

    if (location.pathname === href) {
      window.setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, 50);

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
    const message = encodeURIComponent(
      "Hello Precious Touch, I would like to book a cleaning or laundry service."
    );

    window.open(
      `https://wa.me/${whatsappNumber}?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );

    onClose();
  };

  return (
    <div
      className={`fixed inset-0 z-[60] transition-all duration-500 md:hidden ${
        isOpen
          ? "pointer-events-auto visible"
          : "pointer-events-none invisible"
      }`}
    >
      {/* BACKDROP */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close navigation menu"
        className={`absolute inset-0 bg-precious-dark/80 backdrop-blur-sm transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* MENU PANEL */}
      <div
        className={`absolute right-0 top-0 flex h-full w-[88%] max-w-md flex-col bg-precious-blue px-7 py-7 transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* MENU HEADER */}
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => handleNavigation("/")}
            className="font-oswald text-xl font-semibold uppercase tracking-wide text-white"
          >
            Precious{" "}
            <span className="text-precious-cyan">
              Touch
            </span>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-precious-cyan hover:text-precious-cyan"
            aria-label="Close navigation menu"
          >
            <X size={22} />
          </button>
        </div>

        {/* NAVIGATION */}
        <div className="mt-20 flex flex-col">
          {siteConfig.navigation.map((item, index) => {
            const isActive = location.pathname === item.href;

            return (
              <button
                key={item.href}
                type="button"
                onClick={() => handleNavigation(item.href)}
                className="group flex items-center justify-between border-b border-white/10 py-6 text-left"
              >
                <div className="flex items-center gap-5">
                  <span className="font-montserrat text-xs text-precious-cyan">
                    0{index + 1}
                  </span>

                  <span
                    className={`font-oswald text-4xl uppercase transition-colors ${
                      isActive
                        ? "text-precious-cyan"
                        : "text-white group-hover:text-precious-cyan"
                    }`}
                  >
                    {item.label}
                  </span>
                </div>

                <ArrowUpRight
                  size={22}
                  className="text-white/40 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-precious-cyan"
                />
              </button>
            );
          })}
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-auto">
          <p className="mb-4 font-montserrat text-xs uppercase tracking-[0.2em] text-white/50">
            Need a cleaner space?
          </p>

          <button
            type="button"
            onClick={handleWhatsApp}
            className="flex w-full items-center justify-between rounded-full bg-precious-cyan px-6 py-4 font-poppins font-semibold text-precious-dark transition-all duration-300 hover:bg-white"
          >
            Book a Service
            <ArrowUpRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;