import React from 'react';
import { Logo } from './Logo';
import { Download, Shield, Sparkles, Smartphone, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenDownload: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDownload }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Final Pre-Footer CTA Section */}
      <section id="final-cta-section" className="py-16 md:py-24 bg-[#f2faf2] border-t border-[#c6dfc6] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full border border-[#b8dbb8] text-xs font-bold text-[#1d541d] mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#2e7d32]" />
            <span>Ready in under 2 minutes</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#0d260d] tracking-tight mb-4">
            Ready to get started?
          </h2>

          <p className="text-base sm:text-lg text-[#2a4f2a] max-w-lg mx-auto mb-8 leading-relaxed">
            Download TypeCredit now and access your loan from ₦20,000 up to ₦300,000 directly on your phone today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              id="final-download-cta-btn"
              onClick={onOpenDownload}
              className="inline-flex items-center justify-center gap-3 bg-[#1d6b1d] hover:bg-[#155415] text-white font-extrabold text-base sm:text-lg px-8 py-4 rounded-full shadow-[0_12px_28px_-8px_rgba(29,107,29,0.45)] border border-[#2d7a2d] transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <Download className="w-5 h-5 animate-bounce" />
              <span>Download typecredit-app.apk</span>
            </button>
          </div>

          <div className="mt-8 flex flex-wrap justify-center items-center gap-3 text-xs font-semibold text-[#255225]">
            <span className="bg-white px-3.5 py-1.5 rounded-full border border-[#c2dcc2] shadow-sm">
              ₦20k – ₦300k
            </span>
            <span className="bg-white px-3.5 py-1.5 rounded-full border border-[#c2dcc2] shadow-sm">
              ✅ everyone eligible
            </span>
            <span className="bg-white px-3.5 py-1.5 rounded-full border border-[#c2dcc2] shadow-sm">
              ⚡ Instant 2-min alert
            </span>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="bg-[#ffffff] border-t border-[#d4e6d4] py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#e5f0e5]">
            <div className="flex flex-col items-center md:items-start gap-2">
              <Logo size="md" />
              <p className="text-xs text-[#4d704d]">
                Instant digital credit for everyday Nigerians · Minimal, transparent, and fair.
              </p>
            </div>

            <div className="flex items-center gap-4 text-xs font-semibold text-[#2b592b]">
              <button
                type="button"
                onClick={onOpenDownload}
                className="hover:text-[#186218] transition-colors"
              >
                Download APK
              </button>
              <span>·</span>
              <a href="#how-it-works-section" className="hover:text-[#186218] transition-colors">
                How It Works
              </a>
              <span>·</span>
              <a href="#faq-section" className="hover:text-[#186218] transition-colors">
                FAQs
              </a>
              <span>·</span>
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-1 hover:text-[#186218] transition-colors"
              >
                <ArrowUp className="w-3.5 h-3.5" /> Back to top
              </button>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#4d6b4d]">
            <span>© 2026 TypeCredit · minimal loan app</span>
            <span>📍 typecredit-app.apk (24.6 MB) · Android Package</span>
            <span className="inline-flex items-center gap-1">
              <span>🇳🇬</span>
              <span>T + ₦ + C overlay</span>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};
