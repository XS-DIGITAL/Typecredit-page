import React from 'react';
import { Logo } from './Logo';
import { Download, Sparkles, CheckCircle2, Shield, Smartphone, Zap, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenDownload: () => void;
  onOpenEligibility: () => void;
  onScrollToCalculator: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenDownload,
  onOpenEligibility,
  onScrollToCalculator,
}) => {
  return (
    <section
      id="hero-section"
      className="relative overflow-hidden pt-8 pb-14 md:pt-14 md:pb-20 bg-gradient-to-b from-[#ffffff] via-[#f7fcf7] to-[#f0faf0] border-b border-[#dcefdc]"
    >
      {/* Decorative ambient backdrop */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-100/40 rounded-full blur-3xl pointer-events-none -z-0"></div>
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-green-100/30 rounded-full blur-3xl pointer-events-none -z-0"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 bg-[#e2f3e2] px-3.5 py-1.5 rounded-full border border-[#b8dbb8] text-xs font-semibold text-[#1d541d]">
              <Sparkles className="w-3.5 h-3.5 text-[#2e7d32]" />
              <span>✨ everyone eligible · 2 min setup</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold text-[#0f2a0f] tracking-tight leading-[1.12]">
              Get loan <br />
              <span className="inline-block bg-[#e5f5e5] px-3 py-0.5 rounded-2xl text-[#1e6b1e] border border-[#c5e6c5] mt-1 shadow-sm">
                ₦20k – ₦300k
              </span> <br />
              instantly
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#2f4a2f] max-w-xl leading-relaxed opacity-90">
              Complete the app setup with zero paperwork and no long queues. TypeCredit gives every Nigerian access to instant mobile funds from day one.
            </p>

            {/* Loan amount visual chip */}
            <div className="inline-flex flex-wrap items-center gap-2.5 sm:gap-4 bg-[#eaf7ea] px-4 sm:px-6 py-2.5 rounded-full border border-[#b8dcb8] shadow-sm">
              <span className="font-extrabold text-lg sm:text-2xl text-[#1a591a]">₦20,000</span>
              <span className="text-[#6c9a6c] font-medium">—</span>
              <span className="font-extrabold text-lg sm:text-2xl text-[#1a591a]">₦300,000</span>
              <span className="text-xs sm:text-sm font-medium text-[#2d612d] bg-white/70 px-2.5 py-0.5 rounded-full border border-[#b8dcb8]">
                starting limit
              </span>
            </div>

            {/* CTA Group: Download APK & Secondary Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                id="hero-download-primary-btn"
                onClick={onOpenDownload}
                className="inline-flex items-center justify-center gap-3 bg-[#2e7d32] hover:bg-[#236b27] text-white font-bold text-lg px-8 py-3.5 rounded-full shadow-[0_12px_24px_-8px_rgba(46,125,50,0.4)] border border-[#3f9443] transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <Download className="w-5 h-5 animate-bounce" />
                <span>Download app (APK)</span>
              </button>

              <button
                id="hero-calculate-btn"
                onClick={onScrollToCalculator}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#f3faf3] text-[#1a591a] font-semibold text-sm sm:text-base px-5 py-3.5 rounded-full border border-[#c2dec2] shadow-sm transition-all"
              >
                <span>Calculate Repayment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Sub-label for apk safety */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#436343] pt-1">
              <span className="inline-flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-[#2e7d32]" />
                typecredit-app.apk ready (24.6 MB) · Android 8.0+
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-[#2e7d32]" />
                NDPR Compliant & 256-bit SSL
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2e7d32]" />
                100% Digital Payout
              </span>
            </div>
          </div>

          {/* Right Hero Column: Real Images & Visual Phone Mockup */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Main Lifestyle Card with Real Nigerian User Photo */}
            <div className="relative w-full max-w-[380px]">
              
              {/* Photo Frame */}
              <div className="relative rounded-[36px] overflow-hidden border-4 border-white shadow-[0_24px_50px_-12px_rgba(30,70,30,0.22)] bg-white">
                <img
                  src="/assets/images/hero_typecredit_1789731820441.jpg"
                  alt="Delighted Nigerian professional receiving instant loan on TypeCredit"
                  className="w-full h-[360px] object-cover object-center"
                  referrerPolicy="no-referrer"
                />

                {/* Gradient overlay at bottom for card readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 pointer-events-none"></div>

                {/* Overlay Badge at bottom of image */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-white/80 shadow-md flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-[#e5f5e5] border border-[#c1e2c1] flex items-center justify-center text-[#1a6b1a] font-bold">
                      ₦
                    </div>
                    <div>
                      <div className="text-[11px] font-medium text-[#4b6d4b]">Instant Credit Alert</div>
                      <div className="text-sm font-extrabold text-[#0f2a0f]">₦300,000 Disbursed</div>
                    </div>
                  </div>
                  <span className="bg-[#e2f3e2] text-[#1d541d] text-[11px] font-bold px-2 py-0.5 rounded-full">
                    Just now
                  </span>
                </div>
              </div>

              {/* Floating Phone App Mockup Badge (Preserves user's iconic original phone element) */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute -top-6 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md rounded-2xl p-3 border border-[#d1e8d1] shadow-[0_16px_32px_-8px_rgba(20,50,20,0.18)] flex flex-col items-center text-center w-36"
              >
                <div className="bg-[#f2faf2] rounded-xl p-2 w-full border border-[#dcecdc]">
                  {/* The signature T + ₦ + C Logo */}
                  <Logo size="sm" showText={false} className="mx-auto" />
                  <div className="mt-1 font-extrabold text-sm text-[#1d621d]">₦20k</div>
                  <div className="text-[10px] font-semibold text-[#3b6a3b] bg-[#e3f0e3] rounded-full px-1.5 py-0.5 inline-block">
                    → ₦300k
                  </div>
                </div>
                <div className="mt-2 text-[10px] font-bold text-[#143014] flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-[#2e7d32]" />
                  <span>3 steps · all eligible</span>
                </div>
              </motion.div>

              {/* Trust pill floating on bottom left */}
              <div className="absolute -bottom-4 -left-4 sm:-left-6 bg-white rounded-full px-3.5 py-2 border border-[#d1e8d1] shadow-lg flex items-center gap-2">
                <div className="flex -space-x-1.5">
                  <img
                    src="/assets/images/avatar_amara_1789731864203.jpg"
                    alt="Amara borrower"
                    className="w-6 h-6 rounded-full border border-white object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <img
                    src="/assets/images/avatar_tunde_1789731882199.jpg"
                    alt="Tunde borrower"
                    className="w-6 h-6 rounded-full border border-white object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="text-[11px] font-bold text-[#1a401a]">
                  10k+ Nigerians Approved
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
