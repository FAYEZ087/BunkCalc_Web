import { Link } from 'react-router-dom';
import { Download, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

const GithubIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="inline-block">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

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
          <a 
            href="https://github.com/FAYEZ087" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors flex items-center gap-1.5 font-bold"
          >
            <GithubIcon size={16} />
            <span>FAYEZ087</span>
          </a>
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
          <a 
            href="https://github.com/FAYEZ087" 
            target="_blank" 
            rel="noopener noreferrer" 
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center gap-2 font-bold text-blue-600 dark:text-blue-400"
          >
            <GithubIcon size={18} />
            <span>GitHub (@FAYEZ087)</span>
          </a>
          <a href="/bunkcalc.apk" className="bg-blue-600 text-white px-6 py-3 rounded-xl flex items-center justify-center gap-2">
            <Download size={18} />
            <span>Download APK</span>
          </a>
        </motion.div>
      )}
    </nav>
  );
}
