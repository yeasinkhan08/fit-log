import React from "react";
import footerLogo from "@/assets/Vector (2).png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full border-t border-dotted border-white/20 bg-[#0A0C10]">
      <div className="container mx-auto flex flex-col items-center gap-3 px-4 py-6 text-center sm:px-6 md:flex-row md:justify-between md:text-left">
        <div className="flex items-center gap-2">
          <Image src={footerLogo} alt="FitLog logo" className="h-6 w-auto" />
          <h3 className="text-sm font-bold uppercase tracking-wide text-white">
            FITLOG
          </h3>
        </div>

        <p className="text-xs text-[#6B7280] sm:text-sm">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
