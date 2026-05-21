import { motion } from 'framer-motion';
import { 
  Download, 
  ShieldCheck, 
  TrendingUp, 
  BellRing, 
  Smartphone, 
  CloudLightning, 
  CalendarDays,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, delay }: { icon: any, title: string, description: string, delay: number }) => (
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
              <ShieldCheck size={14} />
              <span>Version 1.1.0 Official Edition</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 md:mb-8 leading-tight tracking-tight text-slate-900 dark:text-white">
              Take Control of Your <span className="text-blue-600">College Life.</span>
            </h1>
            <p className="text-base md:text-xl text-slate-600 dark:text-slate-400 mb-8 md:mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
              The ultimate attendance tracker built for students. Smart math, proactive alerts, and a modern UI that respects your time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="/bunkcalc.apk" className="bg-blue-600 hover:bg-blue-700 text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl flex items-center justify-center gap-3 font-bold text-base md:text-lg transition-all shadow-xl shadow-blue-500/25 active:scale-95 group">
                <Download size={24} />
                <span>Download APK</span>
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
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-slate-100 dark:bg-slate-900 rounded-lg md:rounded-xl"></div>
                  </div>
                  
                  <div className="bg-blue-600 rounded-2xl md:rounded-3xl p-4 md:p-6 mb-6 md:mb-8 text-white">
                    <p className="text-[8px] md:text-[10px] font-bold opacity-80 uppercase tracking-widest mb-1">Upcoming Next</p>
                    <h3 className="text-base md:text-xl font-bold mb-1">Software Engg</h3>
                    <div className="bg-white/20 px-2 py-0.5 md:py-1 rounded text-[8px] md:text-[10px] font-bold inline-block">09:00 AM</div>
                  </div>

                  <div className="space-y-3 md:space-y-4">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="flex items-center gap-3 md:gap-4 bg-slate-50 dark:bg-slate-900/50 p-3 md:p-4 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-100 dark:bg-blue-900/40 rounded-lg md:rounded-xl flex-shrink-0" />
                        <div className="flex-1 space-y-1">
                          <div className="h-2.5 md:h-3 bg-slate-200 dark:bg-slate-700 rounded w-3/4" />
                          <div className="h-1.5 md:h-2 bg-slate-100 dark:bg-slate-800 rounded w-1/2" />
                        </div>
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
            <h2 className="text-3xl md:text-4xl font-black mb-4 dark:text-white">Everything You Need.</h2>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              BunkCalc is more than just a counter. It's an intelligent companion that helps you balance academics and fun.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <FeatureCard 
              icon={TrendingUp}
              title="Proactive Calculations"
              description="Know exactly how many classes to attend to reach 75% or see how many you can safely skip."
              delay={0.1}
            />
            <FeatureCard 
              icon={BellRing}
              title="Smart Notifications"
              description="Pre-class reminders and post-class prompts ensure your attendance records are always accurate."
              delay={0.2}
            />
            <FeatureCard 
              icon={Smartphone}
              title="Native Experience"
              description="Built with Capacitor for smooth haptics, dark mode, and seamless Android integration."
              delay={0.3}
            />
            <FeatureCard 
              icon={CloudLightning}
              title="Fast & Offline"
              description="Your data is stored locally. No internet needed to mark attendance or check your stats."
              delay={0.4}
            />
            <FeatureCard 
              icon={CalendarDays}
              title="History & Archives"
              description="Keep track of your performance across semesters with automated archiving and global history."
              delay={0.5}
            />
            <FeatureCard 
              icon={ShieldCheck}
              title="Private & Secure"
              description="No servers, no tracking. Your attendance data is yours alone. Export and import via JSON anytime."
              delay={0.6}
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
              BunkCalc (v1.1.0) is the result of months of student feedback. 
              We've refined the algorithms and polished the interface to give you the best experience possible.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-white flex-shrink-0" />
                <span className="font-bold text-sm md:text-base">Android 14+ Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-white flex-shrink-0" />
                <span className="font-bold text-sm md:text-base">Optimized for Students</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-white flex-shrink-0" />
                <span className="font-bold text-sm md:text-base">Zero Data Usage</span>
              </div>
            </div>
            <a href="/bunkcalc.apk" className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 md:px-10 py-4 md:py-5 rounded-2xl font-black text-lg md:text-xl hover:bg-slate-50 transition-all active:scale-95 shadow-xl w-full sm:w-auto justify-center">
              <Download size={24} />
              <span>Get the APK</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
