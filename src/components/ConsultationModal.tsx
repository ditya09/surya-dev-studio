import React, { useState } from 'react';
import { X, Wrench, CheckCircle, Calculator, Cpu, ShieldAlert, Sparkles, FileText, Check } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'audit' | 'estimate'>('estimate');

  // Interactive Estimate States
  const [platform, setPlatform] = useState<'mobile' | 'both'>('both');
  const [complexity, setComplexity] = useState<'mvp' | 'business' | 'enterprise'>('business');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'Auth & Biometric',
    'REST API & State Mgmt',
    'Push Notification',
  ]);

  if (!isOpen) return null;

  const featuresList = [
    { id: 'Auth & Biometric', price: 5000000 },
    { id: 'REST API & State Mgmt', price: 8000000 },
    { id: 'Push Notification', price: 3000000 },
    { id: 'Payment Gateway (Midtrans/Xendit)', price: 7000000 },
    { id: 'GPS Location & Maps API', price: 6000000 },
    { id: 'Offline Sync & Local DB', price: 8000000 },
    { id: 'Real-time Chat / WebSocket', price: 9000000 },
    { id: 'Analytics & Admin Dashboard', price: 10000000 },
  ];

  const basePrice = complexity === 'mvp' ? 18000000 : complexity === 'business' ? 35000000 : 65000000;
  const platformMultiplier = platform === 'both' ? 1.15 : 1.0;

  const featuresCost = selectedFeatures.reduce((acc, feat) => {
    const item = featuresList.find((f) => f.id === feat);
    return acc + (item ? item.price : 0);
  }, 0);

  const totalEstimate = Math.round((basePrice + featuresCost) * platformMultiplier);
  const estimatedWeeks = complexity === 'mvp' ? '3 - 5 MINGGU' : complexity === 'business' ? '6 - 9 MINGGU' : '10 - 14 MINGGU';

  const toggleFeature = (id: string) => {
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#1a1c1c] border border-white/20 rounded-2xl max-w-3xl w-full text-white shadow-2xl overflow-hidden my-8 animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-6 bg-[#2f3131] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-[#ffbf00] text-[#6d5000] rounded-lg">
              <Calculator className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-['Hanken_Grotesk'] text-xl font-bold text-white">
                Kalkulator Estimasi & Consultation Studio
              </h2>
              <p className="font-['Plus_Jakarta_Sans'] text-xs text-gray-400">
                Hitung perkiraan biaya & durasi pengerjaan proyek Flutter Anda secara transparan.
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

        {/* Tab Selection */}
        <div className="p-4 bg-[#1a1c1c] border-b border-white/10 flex gap-2">
          <button
            onClick={() => setActiveTab('estimate')}
            className={`flex-1 py-2.5 rounded-lg text-xs font-['Hanken_Grotesk'] font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all ${
              activeTab === 'estimate'
                ? 'bg-[#ffbf00] text-[#6d5000]'
                : 'bg-white/5 text-gray-300 hover:bg-white/10'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            Simulasi Biaya Proyek Baru
          </button>

          <button
            onClick={() => setActiveTab('audit')}
            className={`flex-1 py-2.5 rounded-lg text-xs font-['Hanken_Grotesk'] font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all ${
              activeTab === 'audit'
                ? 'bg-[#ffbf00] text-[#6d5000]'
                : 'bg-white/5 text-gray-300 hover:bg-white/10'
            }`}
          >
            <Wrench className="w-4 h-4" />
            Audit & Maintenance Codebase
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 max-h-[60vh] overflow-y-auto space-y-6">
          {activeTab === 'estimate' ? (
            <div className="space-y-6">
              {/* Scale Choice */}
              <div>
                <label className="block text-xs font-['Hanken_Grotesk'] font-bold text-[#ffbf00] uppercase mb-2">
                  1. Skala Skala Aplikasi:
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'mvp', title: 'MVP / Startup', desc: 'Fitur inti, rilis cepat 1 bulan' },
                    { id: 'business', title: 'Business Pro', desc: 'Fitur lengkap, arsitektur modular' },
                    { id: 'enterprise', title: 'Enterprise Scale', desc: 'High security & Custom Backend' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setComplexity(item.id as any)}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        complexity === item.id
                          ? 'border-[#ffbf00] bg-[#ffbf00]/15 text-white'
                          : 'border-white/10 bg-white/5 text-gray-300'
                      }`}
                    >
                      <p className="font-['Hanken_Grotesk'] text-xs font-bold">{item.title}</p>
                      <p className="font-['Plus_Jakarta_Sans'] text-[11px] text-gray-400 mt-1">{item.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Platform Choice */}
              <div>
                <label className="block text-xs font-['Hanken_Grotesk'] font-bold text-[#ffbf00] uppercase mb-2">
                  2. Target Platform Target Deployment:
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setPlatform('both')}
                    className={`p-3 rounded-xl border text-left cursor-pointer ${
                      platform === 'both' ? 'border-[#ffbf00] bg-[#ffbf00]/15' : 'border-white/10 bg-white/5'
                    }`}
                  >
                    <p className="font-['Hanken_Grotesk'] text-xs font-bold text-white">Android & iOS (Cross-Platform Flutter)</p>
                    <p className="font-['Plus_Jakarta_Sans'] text-[11px] text-gray-400">Rilis simultan untuk kedua toko aplikasi</p>
                  </button>

                  <button
                    onClick={() => setPlatform('mobile')}
                    className={`p-3 rounded-xl border text-left cursor-pointer ${
                      platform === 'mobile' ? 'border-[#ffbf00] bg-[#ffbf00]/15' : 'border-white/10 bg-white/5'
                    }`}
                  >
                    <p className="font-['Hanken_Grotesk'] text-xs font-bold text-white">Single OS Priority (Android Only / iOS Only)</p>
                    <p className="font-['Plus_Jakarta_Sans'] text-[11px] text-gray-400">Fokus pada satu OS spesifik terlebih dahulu</p>
                  </button>
                </div>
              </div>

              {/* Features Multi-Select */}
              <div>
                <label className="block text-xs font-['Hanken_Grotesk'] font-bold text-[#ffbf00] uppercase mb-2">
                  3. Fitur Utama Yang Dibutuhkan:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {featuresList.map((f) => {
                    const active = selectedFeatures.includes(f.id);
                    return (
                      <button
                        key={f.id}
                        onClick={() => toggleFeature(f.id)}
                        className={`p-2.5 rounded-lg border text-left text-xs font-['Plus_Jakarta_Sans'] flex items-center justify-between cursor-pointer transition-all ${
                          active
                            ? 'bg-[#ffbf00]/20 border-[#ffbf00] text-white font-semibold'
                            : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'
                        }`}
                      >
                        <span>{f.id}</span>
                        {active && <Check className="w-4 h-4 text-[#ffbf00]" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Calculation Result Card */}
              <div className="bg-[#2f3131] border border-[#ffbf00]/40 p-5 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-4">
                <div>
                  <span className="text-[11px] font-['Hanken_Grotesk'] text-gray-400 uppercase font-bold">
                    Estimasi Investasi Proyek:
                  </span>
                  <p className="text-2xl sm:text-3xl font-['Hanken_Grotesk'] font-extrabold text-[#ffbf00]">
                    Rp {totalEstimate.toLocaleString('id-ID')}
                  </p>
                  <p className="text-xs text-gray-300 font-['Plus_Jakarta_Sans'] mt-1">
                    Est. Durasi pengerjaan: <span className="font-bold text-white">{estimatedWeeks}</span>
                  </p>
                </div>

                <a
                  href="#contact"
                  onClick={onClose}
                  className="bg-[#ffbf00] text-[#6d5000] px-6 py-3 rounded-lg font-['Hanken_Grotesk'] text-xs font-bold uppercase tracking-widest hover:bg-[#ffbf00]/90 transition-all text-center cursor-pointer whitespace-nowrap"
                >
                  Ajukan Draf Proyek Ini
                </a>
              </div>
            </div>
          ) : (
            /* Audit Codebase Tab */
            <div className="space-y-4">
              <div className="bg-amber-500/10 border border-amber-500/30 p-4 rounded-xl flex items-start gap-3 text-amber-200">
                <ShieldAlert className="w-6 h-6 shrink-0 mt-0.5" />
                <div className="text-xs space-y-1">
                  <p className="font-bold text-white font-['Hanken_Grotesk']">
                    Punya Aplikasi Flutter Yang Lambat atau Banyak Bug?
                  </p>
                  <p className="text-gray-300">
                    Tim engineer kami siap melakukan Code Audit komprehensif, Refactoring Clean Architecture, Upgrade versi Flutter 3.x, serta optimasi memory leak.
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                {[
                  { title: 'Layanan Health Check Codebase', desc: 'Pemeriksaan linting, keamanan API key, dan performa UI render frame.' },
                  { title: 'Upgrade Library & Dependency', desc: 'Memperbarui package deprecated tanpa merusak logic fungsional.' },
                  { title: 'Refactoring State Management', desc: 'Restrukturisasi dari legacy setState ke BLoC / Provider / Riverpod.' },
                  { title: 'Memory Leak & Jank Fixing', desc: 'Mengeliminasi stuttering dan konsumsi RAM yang tinggi saat aplikasi berjalan.' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 p-4 rounded-xl space-y-1">
                    <p className="font-['Hanken_Grotesk'] font-bold text-sm text-[#ffbf00]">
                      {item.title}
                    </p>
                    <p className="font-['Plus_Jakarta_Sans'] text-xs text-gray-300">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-4 text-center">
                <a
                  href="#contact"
                  onClick={onClose}
                  className="inline-block bg-[#ffbf00] text-[#6d5000] px-8 py-3 rounded-lg font-['Hanken_Grotesk'] font-bold text-xs uppercase tracking-widest hover:bg-[#ffbf00]/90 transition-colors cursor-pointer"
                >
                  Jadwalkan Sesi Audit Kode Kode
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
