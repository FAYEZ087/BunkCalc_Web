import { Link } from 'react-router-dom';
import { Download, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-black italic text-blue-600 tracking-tighter uppercase">BunkCalc</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 font-semibold text-sm">
          <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <Link to="/support" className="hover:text-blue-600 transition-colors">Support</Link>
          <a href="/bunkcalc.apk" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full flex items-center gap-2 transition-all shadow-lg shadow-blue-500/20 active:scale-95">
            <Download size={18} />
            <span>Download APK</span>
          </a>
        </div>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-0 w-full bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800 p-6 flex flex-col gap-4"
        >
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/support" onClick={() => setIsMenuOpen(false)}>Support</Link>
          <a href="/bunkcalc.apk" className="bg-blue-600 text-white px-6 py-3 rounded-xl flex items-center justify-center gap-2">
            <Download size={18} />
            <span>Download APK</span>
          </a>
        </motion.div>
      )}
    </nav>
  );
}
