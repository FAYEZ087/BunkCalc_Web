import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="py-20 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <span className="text-2xl font-black italic text-blue-600 tracking-tighter uppercase">BunkCalc</span>
            <p className="mt-4 text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-xs">
              Empowering students with proactive attendance tracking and smart analytics. Designed specifically for the university ecosystem.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-widest text-slate-900 dark:text-white mb-6">Product</h4>
            <ul className="space-y-4 text-sm font-semibold text-slate-500 dark:text-slate-400">
              <li><Link to="/#features" className="hover:text-blue-600 transition-colors">Features</Link></li>
              <li><a href="/bunkcalc.apk" className="hover:text-blue-600 transition-colors">Download APK</a></li>
              <li><Link to="/#hero-banner" className="hover:text-blue-600 transition-colors">About Edition</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-widest text-slate-900 dark:text-white mb-6">Support</h4>
            <ul className="space-y-4 text-sm font-semibold text-slate-500 dark:text-slate-400">
              <li><Link to="/support#setup" className="hover:text-blue-600 transition-colors">Setup Guide</Link></li>
              <li><Link to="/support#faq" className="hover:text-blue-600 transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-widest text-slate-900 dark:text-white mb-6">Legal</h4>
            <ul className="space-y-4 text-sm font-semibold text-slate-500 dark:text-slate-400">
              <li><Link to="/privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-blue-600 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:row justify-between items-center gap-4">
          <div className="text-xs text-slate-400 font-bold uppercase tracking-widest">
            © 2026 BunkCalc. Optimized for Students.
          </div>
        </div>
      </div>
    </footer>
  );
}
