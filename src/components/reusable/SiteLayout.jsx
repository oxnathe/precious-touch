import { useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";
import Footer from "./Footer";

function SiteLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar onMenuOpen={() => setIsMenuOpen(true)} />

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default SiteLayout;