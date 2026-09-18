import React, { useState } from 'react';
import { Download, Smartphone, CheckCircle, ArrowRight, ShieldCheck, Banknote } from 'lucide-react';

interface HowItWorksProps {
  onOpenDownload: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenDownload }) => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps = [
    {
      stepNumber: 1,
      title: 'Download & Install the App',
      description: 'Grab the lightweight typecredit-app.apk file (14.8 MB) directly to your Android device with 1-click.',
      detail: 'Installs securely on Android 8.0 and above. No Google Play delays or regional geo-restrictions.',
      icon: Download,
    },
    {
      stepNumber: 2,
      title: 'Quick 3-Step Profile Setup',
      description: 'Input your active mobile phone number, verify with SMS OTP, and select your bank account.',
      detail: 'Zero physical paperwork, no utility bills required, and zero intrusive contact permissions.',
      icon: Smartphone,
    },
    {
      stepNumber: 3,
      title: 'Instant Credit In Your Bank Account',
      description: 'Pick your loan amount starting from ₦20,000, confirm tenure, and receive instant alert in minutes.',
      detail: 'Funds are sent directly to GTBank, Zenith, Access, Kuda, OPay, Palmpay, Moniepoint, or any Nigerian bank.',
      icon: Banknote,
    },
  ];

  return (
    <section id="how-it-works-section" className="py-16 md:py-24 border-b border-[#e4f0e4] bg-[#f9fcf9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="inline-block text-xs font-bold text-[#1e6b1e] uppercase tracking-wider bg-[#e2f3e2] px-3 py-1 rounded-full border border-[#b8dbb8] mb-3">
              Simple 3-Step Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#112811] tracking-tight">
              How TypeCredit Works
            </h2>
          </div>
          <p className="text-base text-[#2d512d] max-w-md opacity-90">
            No collateral, no guarantor, no paperwork — just download the APK and receive funds in minutes.
          </p>
        </div>

        {/* Content Layout: Interactive Steps on Left, Real App Mockup Image on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Steps List */}
          <div className="lg:col-span-7 space-y-4">
            {steps.map((item) => {
              const isSelected = activeStep === item.stepNumber;
              const StepIcon = item.icon;

              return (
                <div
                  key={item.stepNumber}
                  id={`step-card-${item.stepNumber}`}
                  onClick={() => setActiveStep(item.stepNumber)}
                  className={`cursor-pointer rounded-2xl p-5 sm:p-6 transition-all border ${
                    isSelected
                      ? 'bg-white border-[#2e7d32] shadow-[0_8px_24px_rgba(46,125,50,0.1)] ring-1 ring-[#2e7d32]'
                      : 'bg-[#f4faf4] border-[#dcecdc] hover:bg-white hover:border-[#b8dcb8]'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    {/* Number Badge */}
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center font-extrabold text-base transition-colors shrink-0 ${
                        isSelected
                          ? 'bg-[#2e7d32] text-white'
                          : 'bg-[#e0f0e0] text-[#1d541d]'
                      }`}
                    >
                      {item.stepNumber}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold text-[#112811]">
                          {item.title}
                        </h3>
                        {isSelected && (
                          <span className="text-xs font-semibold text-[#1e6b1e] bg-[#e5f5e5] px-2.5 py-0.5 rounded-full">
                            Step {item.stepNumber} of 3
                          </span>
                        )}
                      </div>

                      <p className="mt-1 text-sm text-[#2f4a2f] leading-relaxed">
                        {item.description}
                      </p>

                      {isSelected && (
                        <div className="mt-3 pt-3 border-t border-[#eaf2ea] text-xs text-[#3b633b] flex items-center gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-[#2e7d32] shrink-0" />
                          <span>{item.detail}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Quick Trigger Button */}
            <div className="pt-3">
              <button
                id="how-it-works-download-btn"
                onClick={onOpenDownload}
                className="inline-flex items-center gap-2.5 bg-[#1a591a] hover:bg-[#134413] text-white font-bold text-sm px-6 py-3 rounded-full shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Download className="w-4 h-4" />
                <span>Start Step 1 (Download APK)</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>

          {/* Right Column: Real Smartphone App Screen Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px] bg-white rounded-[32px] p-3 border-2 border-[#d5ead5] shadow-[0_20px_40px_-10px_rgba(25,60,25,0.15)]">
              
              {/* Device Frame */}
              <div className="relative rounded-[24px] overflow-hidden bg-slate-900 border border-slate-200">
                <img
                  src="/assets/images/app_screen_mockup_1789731836684.jpg"
                  alt="TypeCredit Mobile App Screen showing loan approval"
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />

                {/* Micro floating live status chip */}
                <div className="absolute top-3 right-3 bg-black/65 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full border border-white/20 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <span>Instant Disbursal</span>
                </div>
              </div>

              {/* Bottom Card Caption */}
              <div className="mt-3 p-3 rounded-xl bg-[#f2faf2] border border-[#dcecdc] text-center">
                <div className="text-xs font-bold text-[#143014]">
                  Official Android Client (v2.4.1)
                </div>
                <div className="text-[11px] text-[#3d663d]">
                  Optimized for low data usage · 14.8 MB
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
