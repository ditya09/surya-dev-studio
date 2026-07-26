import React, { useState } from 'react';
import { Mail, Code, MapPin, Send, CheckCircle, Calculator, Copy, Check } from 'lucide-react';
import { ContactFormData } from '../types';

interface ContactSectionProps {
  onOpenEstimator: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenEstimator }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    serviceType: 'Pembuatan Aplikasi Mobile Baru',
    budgetRange: 'Rp 25 jt - Rp 50 jt',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 px-5 max-w-7xl mx-auto">
      <div className="bg-white border border-[#e2e2e2] rounded-2xl overflow-hidden shadow-xl">
        <div className="flex flex-col lg:flex-row">
          {/* Left Info & Form Column */}
          <div className="p-8 md:p-12 flex-1 space-y-8">
            <div>
              <h2 className="font-['Hanken_Grotesk'] text-3xl md:text-4xl font-bold text-[#1a1c1c] mb-3">
                Mulai Proyek Anda Sekarang
              </h2>
              <p className="font-['Plus_Jakarta_Sans'] text-base text-[#5f5e5e]">
                Diskusikan kebutuhan teknologi Anda dengan tim ahli kami dan dapatkan penawaran terbaik.
              </p>
            </div>

            {/* Quick Contact Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-y border-[#eeeeee] py-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-[#ffbf00]/15 text-[#795900] rounded-full shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-['Hanken_Grotesk'] text-xs text-[#5f5e5e] font-bold uppercase">
                    EMAIL
                  </p>
                  <button
                    onClick={() => copyToClipboard('hello@suryadev.id')}
                    className="font-['Plus_Jakarta_Sans'] text-sm font-semibold text-[#1a1c1c] hover:text-[#795900] flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    hello@suryadev.id
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 opacity-60" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-3 bg-[#ffbf00]/15 text-[#795900] rounded-full shrink-0">
                  <Code className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-['Hanken_Grotesk'] text-xs text-[#5f5e5e] font-bold uppercase">
                    GITHUB
                  </p>
                  <a
                    href="https://github.com/suryadevstudio"
                    target="_blank"
                    rel="noreferrer"
                    className="font-['Plus_Jakarta_Sans'] text-sm font-semibold text-[#1a1c1c] hover:text-[#795900] transition-colors"
                  >
                    github.com/suryadevstudio
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-3 bg-[#ffbf00]/15 text-[#795900] rounded-full shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-['Hanken_Grotesk'] text-xs text-[#5f5e5e] font-bold uppercase">
                    LOKASI
                  </p>
                  <p className="font-['Plus_Jakarta_Sans'] text-sm font-semibold text-[#1a1c1c]">
                    Kuta Selatan, Bali, Indonesia
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Form or Confirmation */}
            {submitted ? (
              <div className="bg-[#ffbf00]/10 border border-[#ffbf00]/40 rounded-xl p-6 text-center space-y-3 animate-in fade-in duration-300">
                <div className="w-12 h-12 bg-[#ffbf00] text-[#6d5000] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <h3 className="font-['Hanken_Grotesk'] text-xl font-bold text-[#1a1c1c]">
                  Pesan Anda Terkirim!
                </h3>
                <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#5f5e5e]">
                  Terima kasih <span className="font-bold text-[#1a1c1c]">{formData.name}</span>. Tim engineer kami akan menghubungi Anda di <span className="font-bold text-[#1a1c1c]">{formData.email}</span> dalam kurun waktu kurang dari 24 jam.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-xs font-['Hanken_Grotesk'] font-bold text-[#795900] underline uppercase cursor-pointer"
                >
                  Kirim Pesan Lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-['Hanken_Grotesk'] font-bold text-[#1a1c1c] uppercase mb-1">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Contoh: Budi Santoso"
                      className="w-full px-4 py-2.5 bg-[#f9f9f9] border border-[#e2e2e2] rounded-lg text-sm text-[#1a1c1c] focus:outline-none focus:border-[#ffbf00]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-['Hanken_Grotesk'] font-bold text-[#1a1c1c] uppercase mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="budi@company.id"
                      className="w-full px-4 py-2.5 bg-[#f9f9f9] border border-[#e2e2e2] rounded-lg text-sm text-[#1a1c1c] focus:outline-none focus:border-[#ffbf00]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-['Hanken_Grotesk'] font-bold text-[#1a1c1c] uppercase mb-1">
                      Jenis Layanan
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#f9f9f9] border border-[#e2e2e2] rounded-lg text-sm text-[#1a1c1c] focus:outline-none focus:border-[#ffbf00]"
                    >
                      <option value="Pembuatan Aplikasi Mobile Baru">Pembuatan Aplikasi Mobile Baru</option>
                      <option value="Redesign UI/UX Aplikasi">Redesign UI/UX Aplikasi</option>
                      <option value="Audit & Maintenance Codebase">Audit & Maintenance Codebase</option>
                      <option value="Konsultasi Arsitektur Flutter">Konsultasi Arsitektur Flutter</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-['Hanken_Grotesk'] font-bold text-[#1a1c1c] uppercase mb-1">
                      Perkiraan Anggaran
                    </label>
                    <select
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#f9f9f9] border border-[#e2e2e2] rounded-lg text-sm text-[#1a1c1c] focus:outline-none focus:border-[#ffbf00]"
                    >
                      <option value="< Rp 25 jt">&lt; Rp 25 Juta</option>
                      <option value="Rp 25 jt - Rp 50 jt">Rp 25 Juta - Rp 50 Juta</option>
                      <option value="Rp 50 jt - Rp 100 jt">Rp 50 Juta - Rp 100 Juta</option>
                      <option value="> Rp 100 jt">&gt; Rp 100 Juta</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-['Hanken_Grotesk'] font-bold text-[#1a1c1c] uppercase mb-1">
                    Detail Kebutuhan Proyek *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Ceritakan gambaran umum aplikasi, target pengguna, dan fitur utama yang diinginkan..."
                    className="w-full px-4 py-2.5 bg-[#f9f9f9] border border-[#e2e2e2] rounded-lg text-sm text-[#1a1c1c] focus:outline-none focus:border-[#ffbf00]"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="submit"
                    className="flex-1 bg-[#ffbf00] text-[#6d5000] py-3 px-6 rounded-lg font-['Hanken_Grotesk'] text-xs font-bold uppercase tracking-widest hover:bg-[#ffbf00]/90 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <Send className="w-4 h-4" />
                    KIRIM PESAN KONSULTASI
                  </button>

                  <button
                    type="button"
                    onClick={onOpenEstimator}
                    className="bg-[#1a1c1c] text-white py-3 px-5 rounded-lg font-['Hanken_Grotesk'] text-xs font-bold uppercase tracking-widest hover:bg-black transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Calculator className="w-4 h-4 text-[#ffbf00]" />
                    SIMULASI ESTIMASI
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Map Image Column */}
          <div className="lg:w-2/5 min-h-[350px] relative bg-[#e8e8e8]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsDya1hfc2jxZL9fNnvxTabT0lFCWykcFKlX64QhqxEE3mFnB8fOL1N2vcyRFG1OnpgdNjE2Hy6sZ_LKeJ3Wiidk1rnMmwMNsugLJpqSCqQL63zecqcb0H8KegyWwjBXINu3ocyG6FfPVFCEfwrjaHNptpDtOJsZDCIMP9QH2OL4vVIdrHqu1XGAs8-Dowf1YgoXZl1K4_FDwif9OLBE1b5CiyMo9WLc9UVH_vUHduUGfhgZjeIw4j"
              alt="Surya Dev Studio Location in Kuta Selatan Bali"
              className="w-full h-full object-cover grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-[#795900]/20 pointer-events-none" />

            <div className="absolute bottom-6 right-6 bg-[#1a1c1c] text-white px-5 py-2.5 rounded-full flex items-center gap-2.5 shadow-2xl border border-white/20">
              <MapPin className="w-4 h-4 text-[#ffbf00] animate-pulse fill-[#ffbf00]" />
              <span className="font-['Hanken_Grotesk'] text-xs font-bold tracking-wide">
                Visit Our Studio
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
