import React from 'react';
import { Logo } from './Logo';
import { Download, Sparkles, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenDownload: () => void;
  onOpenEligibility: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDownload, onOpenEligibility }) => {
  return (
    <header id="site-header" className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#e4efe4] transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#" className="hover:opacity-95 transition-opacity">
          <Logo size="md" />
        </a>

        {/* Center pill: quick stats */}
        <div className="hidden md:flex items-center gap-4 text-xs font-medium text-[#2f552f]">
          <span className="inline-flex items-center gap-1.5 bg-[#f0faf0] px-3 py-1 rounded-full border border-[#d2ecd2]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Instant approval · 2 min setup
          </span>
          <span className="inline-flex items-center gap-1.5 text-[#375a37]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#2e7d32]" />
            No paperwork or collateral
          </span>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2.5">
          <button
            id="nav-check-eligibility-btn"
            onClick={onOpenEligibility}
            className="hidden sm:inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-[#1d541d] hover:bg-[#eaf5ea] px-3.5 py-2 rounded-full border border-[#c1e2c1] transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#2e7d32]" />
            Check Eligibility
          </button>

          <button
            id="nav-download-apk-btn"
            onClick={onOpenDownload}
            className="inline-flex items-center gap-1.5 bg-[#2e7d32] hover:bg-[#236b27] text-white font-bold text-xs sm:text-sm px-4 py-2 rounded-full shadow-[0_4px_12px_rgba(46,125,50,0.25)] transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download app now</span>
          </button>
        </div>
      </div>
    </header>
  );
};
