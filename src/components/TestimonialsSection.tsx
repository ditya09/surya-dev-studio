import React from 'react';
import { Star } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        '"Surya Dev Studio berhasil mengubah visi kami menjadi aplikasi Flutter yang sangat responsif dan elegan. Performa aplikasinya luar biasa di Android maupun iOS."',
      name: 'Budi Santoso',
      role: 'CEO TECH STARTUP',
    },
    {
      id: 2,
      quote:
        '"Desain UI/UX yang mereka buat sangat intuitif. Pengguna kami memberikan feedback positif mengenai kemudahan navigasi aplikasi baru kami."',
      name: 'Siti Aminah',
      role: 'PRODUCT MANAGER, RETAILGO',
    },
    {
      id: 3,
      quote:
        '"Tim yang sangat profesional dan ahli dalam Flutter. Maintenance dan update library dilakukan dengan sangat cepat tanpa mengganggu operasional bisnis."',
      name: 'Andi Wijaya',
      role: 'CTO, FINTECH SOLUTIONS',
    },
  ];

  return (
    <section id="testimonials" className="py-20 px-5 max-w-7xl mx-auto">
      <div className="text-center space-y-3 mb-14">
        <h2 className="font-['Hanken_Grotesk'] text-3xl md:text-4xl font-bold text-[#1a1c1c]">
          Apa Kata Klien Kami
        </h2>
        <p className="font-['Plus_Jakarta_Sans'] text-base text-[#5f5e5e] max-w-xl mx-auto">
          Kepercayaan klien adalah prioritas utama kami dalam menghadirkan solusi Flutter terbaik.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="bg-[#f3f3f4] p-8 rounded-xl border border-[#e2e2e2] flex flex-col justify-between hover:shadow-md transition-shadow"
          >
            <div>
              {/* 5 Stars */}
              <div className="flex gap-1 mb-4 text-[#ffbf00]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#ffbf00] text-[#ffbf00]" />
                ))}
              </div>

              <p className="font-['Plus_Jakarta_Sans'] text-sm md:text-base text-[#1a1c1c] italic leading-relaxed mb-6">
                {t.quote}
              </p>
            </div>

            <div className="border-t border-[#e2e2e2] pt-4">
              <p className="font-['Hanken_Grotesk'] font-bold text-[#1a1c1c] text-base">
                {t.name}
              </p>
              <p className="font-['Hanken_Grotesk'] text-xs font-semibold text-[#5f5e5e] uppercase tracking-wider mt-0.5">
                {t.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
