import React, { useState } from 'react';
import { X, Smartphone, Check, ExternalLink, Filter } from 'lucide-react';
import { ProjectItem } from '../types';

interface CatalogModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: 'all' | 'apps' | 'uiux' | 'maintenance';
}

export const CatalogModal: React.FC<CatalogModalProps> = ({ isOpen, onClose, defaultTab = 'all' }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(defaultTab);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  if (!isOpen) return null;

  const projects: ProjectItem[] = [
    {
      id: 'p1',
      title: 'RetailGo - E-Commerce & POS App',
      category: 'apps',
      description: 'Aplikasi belanja retail & Kasir POS omnichannel berkinerja tinggi dengan sinkronisasi stok offline-first dan sistem pembayaran QRIS terintegrasi.',
      image: 'https://images.unsplash.com/photo-1556742049-0a675409b766?auto=format&fit=crop&w=800&q=80',
      tags: ['Flutter 3.x', 'Bloc State', 'QRIS Payment', 'Offline Sync'],
      metrics: '50,000+ Active Users • 99.9% Uptime',
      client: 'RetailGo Indonesia',
    },
    {
      id: 'p2',
      title: 'FinTech Solutions - Mobile Wealth & Wallet',
      category: 'apps',
      description: 'Aplikasi manajemen keuangan pribadi & investasi reksadana dengan keamanan biometric e-KYC serta analisis pengeluaran berbasis grafik interaktif.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
      tags: ['Flutter Web/Mobile', 'Clean Architecture', 'Biometric Auth', 'Recharts'],
      metrics: 'Rp 120M+ Volume Transaksi Bulanan',
      client: 'FinTech Solutions Bali',
    },
    {
      id: 'p3',
      title: 'Aura Health - Telemedicine & Consultation',
      category: 'uiux',
      description: 'Desain UI/UX & prototyping antarmuka konsultasi dokter langsung, pemesanan resep obat cepat, serta penjadwalan janji temu rumah sakit.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
      tags: ['Figma Prototype', 'User Research', 'Design System', 'Accessibility'],
      metrics: 'Peningkatan Conversion Rate +42%',
      client: 'Aura Care Group',
    },
    {
      id: 'p4',
      title: 'LogiFleet - Real-time Delivery & Fleet Tracking',
      category: 'apps',
      description: 'Aplikasi manajemen armada pengiriman logistik dengan peta GPS rute optimal, bukti penerimaan foto digital, serta notifikasi push real-time.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      tags: ['Flutter Background Service', 'Google Maps API', 'WebSockets', 'Hive DB'],
      metrics: 'Menghemat Efisiensi Rute hingga 28%',
      client: 'LogiFleet Asia',
    },
    {
      id: 'p5',
      title: 'SmartHome IoT Control Center',
      category: 'maintenance',
      description: 'Optimasi performa & refactoring arsitektur codebase Flutter untuk pengontrol perangkat pintar rumah tangga melalui konektivitas Bluetooth LE & WiFi.',
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80',
      tags: ['Code Optimization', 'BLE Protocol', 'Memory Leak Fix', 'Flutter 3 Upgrade'],
      metrics: 'Ukuran APK Berkurang 35% • Frame Drop 0%',
      client: 'HomeTech Global',
    },
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#1a1c1c] border border-white/20 rounded-2xl max-w-4xl w-full text-white shadow-2xl overflow-hidden my-8 animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-6 bg-[#2f3131] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-[#ffbf00] text-[#6d5000] rounded-lg">
              <Smartphone className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-['Hanken_Grotesk'] text-xl font-bold text-white">
                Katalog & Portfolio Proyek Flutter
              </h2>
              <p className="font-['Plus_Jakarta_Sans'] text-xs text-gray-400">
                Eksplorasi karya aplikasi mobile yang telah kami bangun dengan standar performa terbaik.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 text-gray-400 hover:text-white rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Categories Tabs */}
        <div className="px-6 py-4 bg-[#1a1c1c] border-b border-white/10 flex items-center gap-2 overflow-x-auto">
          <span className="text-xs text-gray-400 font-bold uppercase tracking-wider flex items-center gap-1 mr-2">
            <Filter className="w-3.5 h-3.5" /> Kategori:
          </span>
          {[
            { id: 'all', label: 'Semua Proyek' },
            { id: 'apps', label: 'Aplikasi Mobile' },
            { id: 'uiux', label: 'UI/UX Design' },
            { id: 'maintenance', label: 'Maintenance & Code Audit' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-['Hanken_Grotesk'] font-bold transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === cat.id
                  ? 'bg-[#ffbf00] text-[#6d5000]'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Body Content */}
        <div className="p-6 max-h-[65vh] overflow-y-auto">
          {selectedProject ? (
            /* Detailed Project View */
            <div className="space-y-6 animate-in fade-in duration-200">
              <button
                onClick={() => setSelectedProject(null)}
                className="text-xs text-[#ffbf00] font-bold font-['Hanken_Grotesk'] uppercase tracking-wider flex items-center gap-1 hover:underline cursor-pointer"
              >
                ← Kembali ke Daftar Katalog
              </button>

              <div className="grid md:grid-cols-2 gap-6 items-start">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-xl border border-white/10 shadow-lg"
                />

                <div className="space-y-4">
                  <span className="bg-[#ffbf00]/20 text-[#ffbf00] px-3 py-1 rounded-full text-xs font-bold uppercase font-['Hanken_Grotesk']">
                    Klien: {selectedProject.client}
                  </span>
                  <h3 className="font-['Hanken_Grotesk'] text-2xl font-bold text-white">
                    {selectedProject.title}
                  </h3>
                  <p className="font-['Plus_Jakarta_Sans'] text-sm text-gray-300 leading-relaxed">
                    {selectedProject.description}
                  </p>

                  <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-2">
                    <p className="text-xs font-bold text-[#ffbf00] uppercase font-['Hanken_Grotesk']">
                      Key Impact & Result:
                    </p>
                    <p className="text-sm font-semibold text-white">
                      {selectedProject.metrics}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase font-['Hanken_Grotesk'] mb-2">
                      Teknologi Yang Digunakan:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((t, idx) => (
                        <span key={idx} className="bg-white/10 text-gray-200 text-xs px-2.5 py-1 rounded border border-white/10">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Grid of Projects */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProjects.map((proj) => (
                <div
                  key={proj.id}
                  onClick={() => setSelectedProject(proj)}
                  className="bg-[#2f3131] border border-white/10 rounded-xl overflow-hidden hover:border-[#ffbf00] transition-all cursor-pointer group shadow-md flex flex-col"
                >
                  <div className="h-44 relative overflow-hidden">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-xs text-[#ffbf00] px-2.5 py-1 rounded text-xs font-bold uppercase font-['Hanken_Grotesk']">
                      {proj.category}
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <h4 className="font-['Hanken_Grotesk'] font-bold text-lg text-white group-hover:text-[#ffbf00] transition-colors">
                        {proj.title}
                      </h4>
                      <p className="font-['Plus_Jakarta_Sans'] text-xs text-gray-400 mt-1 line-clamp-2">
                        {proj.description}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-[#ffbf00] font-bold">
                      <span>{proj.metrics}</span>
                      <ExternalLink className="w-4 h-4 opacity-80" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer CTA */}
        <div className="p-4 bg-[#2f3131] border-t border-white/10 flex justify-between items-center">
          <span className="text-xs text-gray-400 font-['Plus_Jakarta_Sans']">
            Memiliki ide aplikasi serupa?
          </span>
          <button
            onClick={onClose}
            className="bg-[#ffbf00] text-[#6d5000] px-5 py-2 rounded-lg font-['Hanken_Grotesk'] font-bold text-xs uppercase tracking-widest hover:bg-[#ffbf00]/90 transition-colors cursor-pointer"
          >
            Tutup & Konsultasi Sekarang
          </button>
        </div>
      </div>
    </div>
  );
};
