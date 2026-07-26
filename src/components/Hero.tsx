import React from 'react';
import { Rocket, ChevronDown } from 'lucide-react';

interface HeroProps {
  onOpenEstimator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEstimator }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[720px] md:min-h-[780px] flex flex-col justify-center items-center px-5 pt-28 pb-16 overflow-hidden bg-[#f3f3f4] border-b border-[#e2e2e2]"
    >
      {/* Decorative ambient background accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#ffbf00]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl text-center space-y-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#ffbf00]/20 px-4 py-1.5 rounded-full border border-[#ffbf00]/40 shadow-xs">
          <Rocket className="w-4 h-4 text-[#795900]" />
          <span className="font-['Hanken_Grotesk'] text-xs text-[#6d5000] font-bold uppercase tracking-widest">
            Flutter Specialized Agency
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-['Hanken_Grotesk'] text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#1a1c1c] leading-tight tracking-tight">
          Wujudkan Ide Aplikasi <span className="text-[#795900]">Mobile Anda</span> Bersama Kami
        </h1>

        {/* Subtitle */}
        <p className="font-['Plus_Jakarta_Sans'] text-base sm:text-lg text-[#5f5e5e] max-w-2xl mx-auto leading-relaxed">
          Kami menghadirkan solusi digital yang mengedepankan performa tinggi dan pengalaman pengguna yang luar biasa melalui teknologi Flutter terbaru.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 max-w-md mx-auto sm:max-w-none">
          <a
            href="#services"
            className="bg-[#ffbf00] text-[#6d5000] px-8 py-3.5 font-['Hanken_Grotesk'] text-sm font-bold uppercase tracking-widest rounded shadow-md hover:-translate-y-0.5 hover:bg-[#ffbf00]/90 transition-all duration-200 text-center cursor-pointer"
          >
            Lihat Layanan
          </a>
          <button
            onClick={onOpenEstimator}
            className="border-2 border-[#1a1c1c] text-[#1a1c1c] px-8 py-3.5 font-['Hanken_Grotesk'] text-sm font-bold uppercase tracking-widest rounded hover:bg-[#1a1c1c] hover:text-white transition-all duration-200 text-center cursor-pointer"
          >
            Hubungi Kami
          </button>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-[#5f5e5e] hover:text-[#795900] transition-colors p-2 inline-block" aria-label="Scroll to about">
          <ChevronDown className="w-8 h-8" />
        </a>
      </div>
    </section>
  );
};
