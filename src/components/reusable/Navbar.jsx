import { useEffect, useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";

import { Menu } from "lucide-react";

import { siteConfig } from "../../data/site";

const whatsappNumber = "2349019028248";

function Navbar({ onMenuOpen }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    }, 50);
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
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "border-b border-precious-blue/10 bg-white/95 shadow-[0_8px_30px_rgba(4,28,51,0.08)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-500 sm:px-8 lg:px-10 ${
          isScrolled ? "py-3.5" : "py-5"
        }`}
      >
        {/* LOGO */}
        <button
          type="button"
          onClick={() => handleNavigation("/")}
          className="group flex items-center gap-3"
          aria-label="Precious Touch Home"
        >
          <div
            className={`flex h-11 w-11 items-center justify-center overflow-hidden rounded-full transition-all duration-500 ${
              isScrolled
                ? "bg-precious-light shadow-sm"
                : "bg-white"
            }`}
          >
            <img
              src="/logo/precious-touch-logo.webp"
              alt="Precious Touch Cleaning & Laundry Services"
              className="h-full w-full object-contain"
            />
          </div>

          <div className="hidden sm:block">
            <div
              className={`font-oswald text-xl font-semibold uppercase tracking-wide transition-colors duration-500 ${
                isScrolled ? "text-precious-dark" : "text-white"
              }`}
            >
              Precious Touch
            </div>

            <div className="font-montserrat text-[9px] uppercase tracking-[0.25em] text-precious-cyan">
              Cleaning & Laundry
            </div>
          </div>
        </button>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-8 md:flex">
          {siteConfig.navigation.map((item) => {
            const isActive = location.pathname === item.href;

            return (
              <button
                key={item.href}
                type="button"
                onClick={() => handleNavigation(item.href)}
                className={`relative py-2 font-poppins text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-precious-cyan"
                    : isScrolled
                      ? "text-precious-dark hover:text-precious-blue"
                      : "text-white hover:text-precious-cyan"
                }`}
              >
                {item.label}

                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-precious-cyan transition-all duration-300 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </button>
            );
          })}

          {/* WHATSAPP CTA */}
          <button
            type="button"
            onClick={handleWhatsApp}
            className="rounded-full bg-precious-cyan px-6 py-3 font-poppins text-sm font-semibold text-precious-dark transition-all duration-300 hover:-translate-y-0.5 hover:bg-precious-blue hover:text-white"
          >
            Book a Service
          </button>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          type="button"
          onClick={onMenuOpen}
          className={`flex h-11 w-11 items-center justify-center rounded-full border backdrop-blur-md transition-all duration-300 md:hidden ${
            isScrolled
              ? "border-precious-blue/15 bg-precious-blue/10 text-precious-blue hover:border-precious-cyan hover:text-precious-cyan"
              : "border-white/20 bg-white/10 text-white hover:border-precious-cyan hover:text-precious-cyan"
          }`}
          aria-label="Open navigation menu"
        >
          <Menu size={22} strokeWidth={1.8} />
        </button>
      </nav>
    </header>
  );
}

export default Navbar;