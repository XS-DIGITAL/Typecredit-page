import React from 'react';
import { Zap, Unlock, TrendingUp, Clock, ShieldCheck, Banknote } from 'lucide-react';

export const Features: React.FC = () => {
  const features = [
    {
      icon: Zap,
      emoji: '⚡',
      title: 'Instant approval',
      desc: 'Get a real-time lending decision in 2 minutes after finishing the simple in-app setup.',
      badge: 'Zero Waiting',
    },
    {
      icon: Unlock,
      emoji: '🔓',
      title: 'Everyone eligible',
      desc: 'No credit history? No collateral? No problem. TypeCredit is designed for every Nigerian.',
      badge: '100% Inclusive',
    },
    {
      icon: TrendingUp,
      emoji: '₦',
      title: '₦20k – ₦300k limit',
      desc: 'Start immediately at ₦20,000 and watch your limit naturally expand to ₦300,000.',
      badge: 'Grow Together',
    },
    {
      icon: Clock,
      emoji: '⏱️',
      title: '2-Minute Setup',
      desc: 'Only 3 short screens. No extensive paperwork, physical appointments, or long queues.',
      badge: 'Frictionless',
    },
    {
      icon: Banknote,
      emoji: '🏦',
      title: 'Direct Bank Transfer',
      desc: 'Money is deposited directly to your Nigerian commercial bank or fintech account.',
      badge: 'Instant NIBSS',
    },
    {
      icon: ShieldCheck,
      emoji: '🛡️',
      title: 'No Hidden Charges',
      desc: 'Transparent repayment terms upfront. No surprises, late traps, or aggressive callers.',
      badge: 'High Integrity',
    },
  ];

  return (
    <section id="features-section" className="py-16 md:py-24 border-b border-[#e4f0e4] bg-[#fdfefd]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1e6b1e] uppercase tracking-wider bg-[#eaf7ea] px-3 py-1 rounded-full border border-[#c3e6c3] mb-3">
            Why Nigerians Choose TypeCredit
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#112811] tracking-tight">
            Transparent, Instant, & Built For Everyone
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#2d512d] opacity-90 leading-relaxed">
            Minimal and straightforward lending. We replaced traditional bank hurdles with an effortless 3-step digital process.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <div
                key={index}
                id={`feature-card-${index}`}
                className="group relative bg-[#f8fcf8] hover:bg-white p-6 sm:p-7 rounded-[28px] border border-[#dceadc] hover:border-[#b8dbb8] transition-all duration-200 hover:shadow-[0_12px_30px_-10px_rgba(46,125,50,0.12)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#eaf6ea] group-hover:bg-[#2e7d32] group-hover:text-white text-[#1a621a] flex items-center justify-center transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-[#2d612d] bg-[#e9f4e9] px-2.5 py-1 rounded-full border border-[#cde5cd]">
                      {feat.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#112811] mb-2 group-hover:text-[#185e18] transition-colors">
                    {feat.title}
                  </h3>

                  <p className="text-sm text-[#3d583d] leading-relaxed">
                    {feat.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#eaf2ea] flex items-center gap-2 text-xs font-semibold text-[#1e6b1e]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2e7d32]"></span>
                  <span>Active on Android APK</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
