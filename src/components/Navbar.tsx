import React, { useState, useEffect } from 'react';
import { Bolt, Menu, X, Rocket } from 'lucide-react';

interface NavbarProps {
  onOpenEstimator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEstimator }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Tentang', href: '#about' },
    { name: 'Layanan', href: '#services' },
    { name: 'Testimoni', href: '#testimonials' },
    { name: 'Kontak', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 z-50 w-full transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-[#e2e2e2] ${isScrolled ? 'shadow-md py-2' : 'py-3'}`}>
      <div className="flex justify-between items-center w-full px-5 md:px-8 max-w-7xl mx-auto">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded bg-[#ffbf00] flex items-center justify-center text-[#6d5000] font-bold shadow-sm group-hover:scale-105 transition-transform">
            <Bolt className="w-5 h-5 fill-current" />
          </div>
          <span className="font-['Hanken_Grotesk'] text-xl font-extrabold tracking-tight text-[#1a1c1c]">
            Surya Dev Studio
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#5f5e5e] hover:text-[#795900] transition-colors font-['Hanken_Grotesk'] text-sm font-semibold tracking-wide"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={onOpenEstimator}
            className="bg-[#ffbf00] text-[#6d5000] hover:bg-[#795900] hover:text-white px-5 py-2 rounded font-['Hanken_Grotesk'] text-xs font-bold uppercase tracking-widest transition-all duration-200 shadow-sm flex items-center gap-2 cursor-pointer"
          >
            <Rocket className="w-3.5 h-3.5" />
            GET IN TOUCH
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#1a1c1c] hover:bg-[#eeeeee] rounded-lg transition-colors cursor-pointer"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white w-full border-t border-[#e2e2e2] px-6 py-4 flex flex-col gap-4 shadow-lg animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#5f5e5e] hover:text-[#795900] font-['Hanken_Grotesk'] text-sm font-semibold py-1 border-b border-[#f3f3f4]"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenEstimator();
            }}
            className="w-full mt-2 bg-[#ffbf00] text-[#6d5000] py-3 rounded font-['Hanken_Grotesk'] text-xs font-bold uppercase tracking-widest text-center shadow cursor-pointer flex items-center justify-center gap-2"
          >
            <Rocket className="w-4 h-4" />
            KONSULTASI / ESTIMASI PROYEK
          </button>
        </div>
      )}
    </nav>
  );
};
