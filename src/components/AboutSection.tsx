import React from 'react';
import { Gauge, Palette, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 px-5 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Left Image Container */}
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl amber-glow aspect-4/3 md:aspect-square max-h-[500px]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOx_i-mWdAN2Z-FZUoUbMTL2rEhgv3jUH0TKjsS6BsyRJCiIz4BRdK2_hVmUPxMO4HEmhwAP7JoJp7lPOYJyHd6UpLaHolaZdj2D5cZGSctFnbb9fV7giJHD60G9cmSprwQDf20phcCwMLNqGAM5Qgt3H3vz9V_INkQq6BDc4EAl-7bsCbTImvf_VQvJgIhJD-pg_ln5LH1wBPhUJC0-rKyTS_vbNAT6kROdg6ve_OEE78b13zIFxq"
              alt="Surya Dev Studio Workspace with Flutter Code"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            
            {/* Live Stats Badge */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3.5 rounded-xl border border-white/40 shadow-lg flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-['Hanken_Grotesk'] text-xs font-bold text-[#1a1c1c] uppercase tracking-wider">
                  Official Flutter Partners
                </span>
              </div>
              <span className="font-['Hanken_Grotesk'] text-xs font-extrabold text-[#795900] bg-[#ffbf00]/20 px-2.5 py-1 rounded">
                100% Quality Assurance
              </span>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="space-y-6">
          <span className="text-[#795900] font-bold uppercase tracking-widest font-['Hanken_Grotesk'] text-xs">
            — PROFIL KAMI
          </span>

          <h2 className="font-['Hanken_Grotesk'] text-3xl md:text-4xl font-bold text-[#1a1c1c] leading-tight">
            Membangun Masa Depan Digital Melalui <span className="text-[#795900]">Kode Berkualitas.</span>
          </h2>

          <p className="font-['Plus_Jakarta_Sans'] text-base text-[#5f5e5e] leading-relaxed">
            Surya Dev Studio adalah butik pengembangan aplikasi mobile yang berfokus pada ekosistem Flutter. Kami percaya bahwa aplikasi yang hebat tidak hanya tentang fungsionalitas, tetapi juga tentang kecepatan, estetika, dan kemudahan penggunaan.
          </p>

          <div className="space-y-4 pt-2">
            {/* High Performance Card */}
            <div className="flex items-start gap-4 p-4 bg-[#eeeeee] rounded-xl border-l-4 border-[#ffbf00] transition-all hover:bg-[#e8e8e8]">
              <div className="p-2.5 bg-[#ffbf00]/20 text-[#795900] rounded-lg shrink-0 mt-0.5">
                <Gauge className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-['Hanken_Grotesk'] font-bold text-[#1a1c1c] text-base">Performa Tinggi</h3>
                <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#5f5e5e] mt-0.5">
                  Optimasi kode untuk memastikan aplikasi berjalan mulus di berbagai perangkat.
                </p>
              </div>
            </div>

            {/* Modern UI/UX Card */}
            <div className="flex items-start gap-4 p-4 bg-[#eeeeee] rounded-xl border-l-4 border-[#ffbf00] transition-all hover:bg-[#e8e8e8]">
              <div className="p-2.5 bg-[#ffbf00]/20 text-[#795900] rounded-lg shrink-0 mt-0.5">
                <Palette className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-['Hanken_Grotesk'] font-bold text-[#1a1c1c] text-base">UI/UX Modern</h3>
                <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#5f5e5e] mt-0.5">
                  Desain antarmuka yang intuitif dan memanjakan mata pengguna Anda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
