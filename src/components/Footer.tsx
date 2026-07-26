import React, { useState } from 'react';
import { Bolt, ShieldCheck, FileText } from 'lucide-react';

interface FooterProps {
  onSelectService: (serviceType: 'katalog' | 'portfolio' | 'konsultasi') => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectService }) => {
  const [modalPolicy, setModalPolicy] = useState<'privacy' | 'terms' | null>(null);

  return (
    <footer className="bg-[#1a1c1c] text-white border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-[#ffbf00] flex items-center justify-center text-[#6d5000]">
              <Bolt className="w-4 h-4 fill-current" />
            </div>
            <span className="font-['Hanken_Grotesk'] text-xl font-extrabold text-[#ffdfa0]">
              Surya Dev Studio
            </span>
          </div>
          <p className="font-['Plus_Jakarta_Sans'] text-sm text-gray-400">
            © 2024 Surya Dev Studio. Technically Precise Mobile Solutions.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          <button
            onClick={() => onSelectService('portfolio')}
            className="text-gray-300 hover:text-[#ffbf00] transition-colors font-['Hanken_Grotesk'] text-xs font-semibold uppercase tracking-widest cursor-pointer"
          >
            PORTFOLIO
          </button>
          <a
            href="#services"
            className="text-gray-300 hover:text-[#ffbf00] transition-colors font-['Hanken_Grotesk'] text-xs font-semibold uppercase tracking-widest"
          >
            SERVICES
          </a>
          <button
            onClick={() => setModalPolicy('privacy')}
            className="text-gray-300 hover:text-[#ffbf00] transition-colors font-['Hanken_Grotesk'] text-xs font-semibold uppercase tracking-widest cursor-pointer"
          >
            PRIVACY POLICY
          </button>
          <button
            onClick={() => setModalPolicy('terms')}
            className="text-gray-300 hover:text-[#ffbf00] transition-colors font-['Hanken_Grotesk'] text-xs font-semibold uppercase tracking-widest cursor-pointer"
          >
            TERMS
          </button>
        </div>
      </div>

      {/* Policy Modal */}
      {modalPolicy && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#1a1c1c] border border-white/20 rounded-2xl max-w-lg w-full p-6 text-white space-y-4 shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                {modalPolicy === 'privacy' ? (
                  <ShieldCheck className="w-5 h-5 text-[#ffbf00]" />
                ) : (
                  <FileText className="w-5 h-5 text-[#ffbf00]" />
                )}
                <h3 className="font-['Hanken_Grotesk'] font-bold text-lg">
                  {modalPolicy === 'privacy' ? 'Kebijakan Privasi' : 'Syarat & Ketentuan Service'}
                </h3>
              </div>
              <button
                onClick={() => setModalPolicy(null)}
                className="text-gray-400 hover:text-white p-1 rounded-lg text-sm cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 font-['Plus_Jakarta_Sans'] text-xs text-gray-300 max-h-60 overflow-y-auto leading-relaxed pr-1">
              {modalPolicy === 'privacy' ? (
                <>
                  <p>Surya Dev Studio menghargai kerahasiaan data dan hak privasi semua klien dan pengguna akhir aplikasi mobile.</p>
                  <p><strong>1. Pengumpulan Data:</strong> Kami hanya mengumpulkan informasi spesifikasi teknis dan komunikasi proyek yang diberikan secara sukarela melalui formulir konsultasi.</p>
                  <p><strong>2. Keamanan Source Code:</strong> Semua hak kekayaan intelektual (IP) dan kerahasiaan source code Flutter dijamin melalui kesepakatan NDA resmi sebelum pengerjaan proyek.</p>
                  <p><strong>3. Penggunaan Informasi:</strong> Informasi kontak hanya digunakan untuk keperluan koordinasi teknis, pengiriman laporan berkala, serta konsultasi arsitektur aplikasi.</p>
                </>
              ) : (
                <>
                  <p>Syarat & Ketentuan standar layanan pengembangan aplikasi oleh Surya Dev Studio:</p>
                  <p><strong>1. Ruang Lingkup Kerja:</strong> Pengembangan aplikasi mobile dilaksanakan berdasarkan dokumen spesifikasi teknis (SOW) yang disetujui bersama.</p>
                  <p><strong>2. Garansi & Maintenance:</strong> Kami menyediakan garansi bug-fixing gratis selama 30-90 hari setelah peluncuran aplikasi ke Google Play Store dan Apple App Store.</p>
                  <p><strong>3. Standar Kode:</strong> Setiap penulisan kode mengacu pada standar Flutter Clean Architecture & SOLID Principles untuk menjamin kemudahan skala bisnis jangka panjang.</p>
                </>
              )}
            </div>

            <button
              onClick={() => setModalPolicy(null)}
              className="w-full bg-[#ffbf00] text-[#6d5000] py-2.5 rounded-lg font-['Hanken_Grotesk'] font-bold text-xs uppercase tracking-widest hover:bg-[#ffbf00]/90 transition-all cursor-pointer"
            >
              Saya Mengerti
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
