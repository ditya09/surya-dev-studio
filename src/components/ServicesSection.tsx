import React from 'react';
import { Smartphone, PenTool, Wrench, ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceType: 'katalog' | 'portfolio' | 'konsultasi') => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const services = [
    {
      id: 'katalog',
      type: 'katalog' as const,
      icon: Smartphone,
      title: 'Pembuatan Aplikasi Mobile',
      desc: 'Development native-performance untuk Android & iOS menggunakan framework Flutter.',
      cta: 'Katalog Proyek',
    },
    {
      id: 'portfolio',
      type: 'portfolio' as const,
      icon: PenTool,
      title: 'Desain UI/UX & Prototyping',
      desc: 'Perancangan pengalaman pengguna yang berpusat pada kenyamanan dan konversi bisnis.',
      cta: 'Portfolio Desain',
    },
    {
      id: 'konsultasi',
      type: 'konsultasi' as const,
      icon: Wrench,
      title: 'Perbaikan & Maintenance',
      desc: 'Optimasi performa, update library, dan perbaikan bug khusus untuk codebase Flutter.',
      cta: 'Konsultasi Kode',
    },
  ];

  return (
    <section id="services" className="py-20 bg-[#1a1c1c] text-white">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center space-y-3 mb-14">
          <h2 className="font-['Hanken_Grotesk'] text-3xl md:text-4xl font-bold tracking-tight">
            Layanan & Keahlian Kami
          </h2>
          <p className="font-['Plus_Jakarta_Sans'] text-base text-gray-400 max-w-xl mx-auto">
            Kami menyediakan solusi end-to-end untuk kebutuhan aplikasi mobile bisnis Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                onClick={() => onSelectService(service.type)}
                className="group bg-[#3d3d3d] p-8 rounded-xl border border-white/10 hover:border-[#ffbf00] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 cursor-pointer shadow-lg"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-[#ffbf00] flex items-center justify-center rounded-lg mb-4 text-[#6d5000] shadow-md group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-['Hanken_Grotesk'] text-2xl font-bold text-white group-hover:text-[#ffbf00] transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-['Plus_Jakarta_Sans'] text-sm text-gray-300 leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-2 text-[#ffbf00] font-bold font-['Hanken_Grotesk'] text-sm group-hover:translate-x-1 transition-transform">
                  <span>{service.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
