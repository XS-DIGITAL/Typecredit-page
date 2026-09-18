import React from 'react';
import { Download, Sparkles } from 'lucide-react';

interface FloatingMobileBarProps {
  onOpenDownload: () => void;
}

export const FloatingMobileBar: React.FC<FloatingMobileBarProps> = ({ onOpenDownload }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-[#d8ecd8] p-3 px-4 shadow-[0_-8px_20px_rgba(0,0,0,0.06)]">
      <div className="flex items-center justify-between gap-3">
        <div>
          <div className="text-xs font-bold text-[#143d14] flex items-center gap-1">
            <span>₦20k – ₦300k</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
          </div>
          <div className="text-[10px] text-[#4d734d]">2 min setup · all eligible</div>
        </div>

        <button
          type="button"
          onClick={onOpenDownload}
          className="inline-flex items-center gap-2 bg-[#2e7d32] active:bg-[#236b27] text-white font-bold text-xs px-5 py-2.5 rounded-full shadow-md transition-all shrink-0"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Download typecredit-app.apk</span>
        </button>
      </div>
    </div>
  );
};
