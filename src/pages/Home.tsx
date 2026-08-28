import { motion } from 'framer-motion';
import { 
  Download, 
  Fingerprint, 
  CheckCircle2,
  ChevronRight,
  BarChart3,
  Sparkles,
  Clock,
  RotateCcw,
  FileSpreadsheet,
  Search,
  Sparkle,
  Layers,
  Zap,
  type LucideIcon
} from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, delay }: { icon: LucideIcon, title: string, description: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 hover:border-blue-500/50 transition-all hover:shadow-2xl hover:shadow-blue-500/10 group"
  >
    <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      <Icon className="text-blue-600 dark:text-blue-400 w-7 h-7" />
    </div>
    <h3 className="text-xl font-bold mb-3 dark:text-white">{title}</h3>
    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{description}</p>
  </motion.div>
);

export default function Home() {
  return (
    <div className="pt-12 md:pt-20">
      {/* Hero Section */}
      <section className="pt-12 md:pt-20 pb-12 md:pb-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6 md:border border-blue-100 dark:border-blue-800">
              <Sparkle size={14} />
              <span>Version 2.2.0 Major Release</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 md:mb-8 leading-tight tracking-tight text-slate-900 dark:text-white">
              Take Control of Your <span className="text-blue-600">College Life.</span>
            </h1>
            <p className="text-base md:text-xl text-slate-600 dark:text-slate-400 mb-8 md:mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
              The ultimate attendance tracker built for students. Biometric fingerprint security, 1-tap quick marking, 10 modular settings hubs, timetable QR sharing, and a 100% pure vector UI that respects your privacy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="/bunkcalc.apk" className="bg-blue-600 hover:bg-blue-700 text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl flex items-center justify-center gap-3 font-bold text-base md:text-lg transition-all shadow-xl shadow-blue-500/25 active:scale-95 group">
                <Download size={24} />
                <span>Download APK v2.2.0</span>
                <ChevronRight className="hidden sm:block group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex items-center justify-center gap-3 px-2 text-xs md:text-sm font-semibold text-slate-500 dark:text-slate-400">
                <CheckCircle2 className="text-green-500 flex-shrink-0" />
                <span>No Ads. No Tracking. 100% Free.</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: "spring" }}
            className="relative flex justify-center lg:justify-end mt-10 lg:mt-0"
          >
            {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[400px] aspect-square bg-blue-500/10 md:bg-blue-500/20 blur-[60px] md:blur-[100px] rounded-full -z-10"></div>
            
            {/* Phone Mockup - Scaled for Mobile */}
            <div className="w-[260px] md:w-[320px] h-[520px] md:h-[640px] bg-slate-900 rounded-[40px] md:rounded-[50px] p-3 md:p-4 shadow-2xl border-4 md:border-8 border-slate-800 relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 md:w-40 h-6 md:h-8 bg-slate-900 rounded-b-2xl md:rounded-b-3xl z-10"></div>
              <div className="w-full h-full bg-white dark:bg-slate-950 rounded-[30px] md:rounded-[35px] overflow-hidden flex flex-col">
                <div className="p-6 md:p-8 pt-10 md:pt-12">
                  <div className="flex justify-between items-center mb-6 md:mb-8">
                    <span className="text-lg md:text-xl font-black italic text-blue-600 uppercase">BunkCalc</span>
                    <span className="text-[10px] font-black bg-blue-500/20 text-blue-500 px-2 py-0.5 rounded-full">v2.2.0</span>
                  </div>
                  
                  <div className="bg-blue-600 rounded-2xl md:rounded-3xl p-4 md:p-6 mb-6 md:mb-8 text-white shadow-lg shadow-blue-600/30">
                    <p className="text-[8px] md:text-[10px] font-bold opacity-80 uppercase tracking-widest mb-1">Upcoming Next</p>
                    <h3 className="text-base md:text-xl font-bold mb-1">Software Engg</h3>
                    <div className="bg-white/20 px-2 py-0.5 md:py-1 rounded text-[8px] md:text-[10px] font-bold inline-block">09:00 AM • Room 302</div>
                  </div>

                  <div className="space-y-3 md:space-y-4">
                    {[
                      { name: 'Computer Networks', pct: '88.5%', status: 'Safe' },
                      { name: 'Database Systems', pct: '74.2%', status: 'At Risk' },
                      { name: 'Algorithm Lab', pct: '92.0%', status: 'Safe' }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between bg-slate-50 dark:bg-slate-900/50 p-3 md:p-4 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-100 dark:bg-blue-900/40 rounded-lg md:rounded-xl flex items-center justify-center font-bold text-xs text-blue-600">
                            {item.name[0]}
                          </div>
                          <div>
                            <p className="text-xs font-bold dark:text-white">{item.name}</p>
                            <p className="text-[10px] text-slate-400">{item.pct} Attendance</p>
                          </div>
                        </div>
                        <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${item.status === 'Safe' ? 'bg-emerald-500/10 text-emerald-600' : 'bg-red-500/10 text-red-600'}`}>
                          {item.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-16 md:py-24 px-4 md:px-6 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-black mb-4 dark:text-white">What's New in Version 2.2.0</h2>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              BunkCalc v2.2.0 brings Native Biometric Security, 1-Tap Attendance & Batch Marking, 10 Modular Settings Hubs, Instant Subject Filtering, and 100% Vector Icons.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <FeatureCard 
              icon={Fingerprint}
              title="Biometric Fingerprint Unlock"
              description="Secure your attendance data with native Android BiometricPrompt (Fingerprint / Face ID) and 4-digit PIN fallback."
              delay={0.1}
            />
            <FeatureCard 
              icon={Zap}
              title="1-Tap Attendance & Batch Marking"
              description="Mark classes in 1 tap directly from the dashboard or use 'Mark All Present' with real-time daily progress tracking."
              delay={0.2}
            />
            <FeatureCard 
              icon={Layers}
              title="10 Modular Settings Hubs"
              description="Clean, modular sub-page architecture with live contextual badges, search bar, and custom tactile PIN keypad modal."
              delay={0.3}
            />
            <FeatureCard 
              icon={Search}
              title="Subject Filter Chips & 4-Way Sort"
              description="Instant search by room or faculty, quick filter chips (In Danger, Safe, Labs), and multi-criteria sorting."
              delay={0.4}
            />
            <FeatureCard 
              icon={Sparkles}
              title="Timetable Cloud & QR Sharing"
              description="Share complete section schedules in 1 second with 6-letter short codes or camera-scannable QR codes."
              delay={0.5}
            />
            <FeatureCard 
              icon={BarChart3}
              title="Weekly Bunk Strategy"
              description="Smart 7-day tactical roadmap showing safe skips and exact consecutive classes needed for recovery."
              delay={0.6}
            />
            <FeatureCard 
              icon={Clock}
              title="Mid-Semester Past Attendance"
              description="Joined mid-semester? Enter attended and missed classes on import or edit anytime in Subject Details."
              delay={0.7}
            />
            <FeatureCard 
              icon={RotateCcw}
              title="Interactive Holiday Manager"
              description="Create and manage semester breaks directly with automated reminder rescheduling and timetable sync."
              delay={0.8}
            />
            <FeatureCard 
              icon={FileSpreadsheet}
              title="CSV & PDF Exports"
              description="Download complete attendance logs as spreadsheets or export printable PDF reports locally."
              delay={0.9}
            />
          </div>
        </div>
      </section>

      {/* Hero-like Banner */}
      <section id="hero-banner" className="py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-4xl mx-auto bg-blue-600 rounded-[32px] md:rounded-[40px] p-8 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-500/30">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black mb-6">Designed for Excellence.</h2>
            <p className="text-lg md:text-xl opacity-90 mb-10 leading-relaxed">
              BunkCalc v2.2.0 is the complete attendance tracking companion — secure, fast, private, and fully offline.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-white flex-shrink-0" />
                <span className="font-bold text-sm md:text-base">Biometric Security</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-white flex-shrink-0" />
                <span className="font-bold text-sm md:text-base">Zero Data Collection</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-white flex-shrink-0" />
                <span className="font-bold text-sm md:text-base">100% Offline Ready</span>
              </div>
            </div>
            <a href="/bunkcalc.apk" className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 md:px-10 py-4 md:py-5 rounded-2xl font-black text-lg md:text-xl hover:bg-slate-50 transition-all active:scale-95 shadow-xl w-full sm:w-auto justify-center">
              <Download size={24} />
              <span>Get the APK v2.2.0</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
