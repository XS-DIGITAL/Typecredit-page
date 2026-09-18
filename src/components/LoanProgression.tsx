import React, { useState } from 'react';
import { LOAN_TIERS } from '../data';
import { TrendingUp, ShieldCheck, CheckCircle2, ChevronRight, Award, Sparkles } from 'lucide-react';

interface LoanProgressionProps {
  onOpenDownload: () => void;
}

export const LoanProgression: React.FC<LoanProgressionProps> = ({ onOpenDownload }) => {
  const [amount, setAmount] = useState<number>(50000);
  const [tenureDays, setTenureDays] = useState<number>(30);

  // Transparent calculation (e.g., 5% per 30 days)
  const interestRate = tenureDays === 14 ? 0.03 : tenureDays === 30 ? 0.05 : tenureDays === 60 ? 0.09 : 0.12;
  const interestAmount = Math.round(amount * interestRate);
  const totalRepayment = amount + interestAmount;
  const dailyEquivalent = Math.round(totalRepayment / tenureDays);

  // Determine current tier
  const currentTier = LOAN_TIERS.find(
    (tier) => amount >= tier.minAmount && amount <= tier.maxAmount
  ) || LOAN_TIERS[0];

  const quickAmounts = [20000, 50000, 100000, 150000, 200000, 300000];

  const formatNaira = (val: number) => {
    return '₦' + val.toLocaleString('en-NG');
  };

  return (
    <section id="loan-progression-section" className="py-16 md:py-24 border-b border-[#e4f0e4] bg-[#fdfefd]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1e6b1e] uppercase tracking-wider bg-[#eaf7ea] px-3 py-1 rounded-full border border-[#c3e6c3] mb-3">
            Flexible Loan Range
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#112811] tracking-tight">
            Start At ₦20k, Grow To ₦300k
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#2d512d] opacity-90 leading-relaxed">
            Every on-time repayment automatically raises your credit ceiling. Test the interactive calculator below to explore your terms.
          </p>
        </div>

        {/* 2-Column Bento Grid: Interactive Calculator + Growth Illustration */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Interactive Loan Calculator */}
          <div className="lg:col-span-7 bg-white rounded-[32px] p-6 sm:p-8 border border-[#d8ecd8] shadow-[0_12px_32px_rgba(46,125,50,0.07)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-[#edf4ed]">
                <div>
                  <div className="text-xs font-semibold text-[#486e48]">Select Loan Amount</div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#144f14] tracking-tight mt-0.5">
                    {formatNaira(amount)}
                  </div>
                </div>
                <div className="text-right">
                  <div className="inline-flex items-center gap-1.5 bg-[#e8f5e8] text-[#1a621a] text-xs font-bold px-3 py-1 rounded-full border border-[#c8e5c8]">
                    <Award className="w-3.5 h-3.5" />
                    <span>Tier {currentTier.level}: {currentTier.title}</span>
                  </div>
                  <div className="text-[11px] text-[#527952] mt-1">
                    Limit increases with repayment
                  </div>
                </div>
              </div>

              {/* Range Slider */}
              <div className="my-6">
                <input
                  id="loan-amount-range-input"
                  type="range"
                  min="20000"
                  max="300000"
                  step="5000"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full h-3 bg-[#e0f2e0] rounded-lg appearance-none cursor-pointer accent-[#2e7d32]"
                />
                <div className="flex justify-between text-xs font-semibold text-[#4a6e4a] mt-2">
                  <span>₦20,000 (Min starting)</span>
                  <span>₦150,000</span>
                  <span>₦300,000 (Max limit)</span>
                </div>
              </div>

              {/* Quick Amount Buttons */}
              <div className="flex flex-wrap gap-2 mb-6">
                {quickAmounts.map((q) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => setAmount(q)}
                    className={`text-xs font-bold px-3 py-1.5 rounded-full transition-all border ${
                      amount === q
                        ? 'bg-[#2e7d32] text-white border-[#2e7d32] shadow-sm'
                        : 'bg-[#f4faf4] text-[#1e541e] border-[#cce4cc] hover:bg-[#eaf4ea]'
                    }`}
                  >
                    {formatNaira(q)}
                  </button>
                ))}
              </div>

              {/* Tenure Selection */}
              <div className="mb-6">
                <label className="block text-xs font-bold text-[#2d522d] uppercase tracking-wider mb-2">
                  Repayment Duration
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[14, 30, 60, 90].map((days) => (
                    <button
                      key={days}
                      type="button"
                      onClick={() => setTenureDays(days)}
                      className={`py-2 text-xs sm:text-sm font-bold rounded-xl border transition-all ${
                        tenureDays === days
                          ? 'bg-[#1b5e20] text-white border-[#1b5e20] shadow-sm'
                          : 'bg-[#f8fcf8] text-[#2b4c2b] border-[#d8ebd8] hover:bg-[#ebf7eb]'
                      }`}
                    >
                      {days} Days
                    </button>
                  ))}
                </div>
              </div>

              {/* Calculation Summary Table */}
              <div className="bg-[#f4fbf4] rounded-2xl p-4 sm:p-5 border border-[#d6ecdel] space-y-2.5 text-xs sm:text-sm">
                <div className="flex justify-between text-[#3b5e3b]">
                  <span>Principal Loan:</span>
                  <span className="font-bold text-[#143014]">{formatNaira(amount)}</span>
                </div>
                <div className="flex justify-between text-[#3b5e3b]">
                  <span>Fixed Flat Interest ({Math.round(interestRate * 100)}%):</span>
                  <span className="font-bold text-[#143014]">{formatNaira(interestAmount)}</span>
                </div>
                <div className="flex justify-between text-[#3b5e3b]">
                  <span>Origination / Processing Fee:</span>
                  <span className="font-bold text-[#2e7d32]">₦0 (Free)</span>
                </div>
                <div className="pt-2 border-t border-[#d8edd8] flex justify-between items-center">
                  <div>
                    <span className="font-extrabold text-sm sm:text-base text-[#0f2a0f]">Total Repayment:</span>
                    <div className="text-[11px] text-[#4d704d]">Approx. {formatNaira(dailyEquivalent)} / day</div>
                  </div>
                  <span className="font-black text-xl sm:text-2xl text-[#1a621a]">
                    {formatNaira(totalRepayment)}
                  </span>
                </div>
              </div>
            </div>

            {/* Apply Button */}
            <div className="mt-6">
              <button
                id="apply-calculated-loan-btn"
                onClick={onOpenDownload}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#2e7d32] hover:bg-[#236b27] text-white font-bold text-base py-3.5 rounded-full shadow-[0_8px_20px_rgba(46,125,50,0.25)] transition-all hover:scale-[1.01] active:scale-[0.99]"
              >
                <span>Apply for {formatNaira(amount)} in APK</span>
                <ChevronRight className="w-4 h-4" />
              </button>
              <div className="text-center mt-2.5 text-[11px] text-[#4d6d4d] flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#2e7d32]" />
                <span>Zero hidden deductions · Disbursed instantly to your bank account</span>
              </div>
            </div>
          </div>

          {/* Right: Real 3D Graphic Image + Loan Tier Milestones */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Visual Image Card */}
            <div className="relative rounded-[32px] overflow-hidden border border-[#d6ecd6] shadow-md bg-white">
              <img
                src="/src/assets/images/loan_growth_visual_1789731849861.jpg"
                alt="Visual credit limit progression from 20k to 300k"
                className="w-full h-56 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-4 bg-white/95 border-t border-[#e2efe2]">
                <div className="flex items-center justify-between">
                  <div className="font-extrabold text-base text-[#112d11]">
                    ₦20,000 → ₦300,000
                  </div>
                  <span className="text-xs font-bold text-[#1e6b1e] bg-[#e6f4e6] px-2.5 py-0.5 rounded-full">
                    100% Digital
                  </span>
                </div>
                <p className="text-xs text-[#3b5e3b] mt-1">
                  Limits grow seamlessly with every cycle. Build your financial credibility.
                </p>
              </div>
            </div>

            {/* Quick Progression Badges */}
            <div className="bg-[#f5faf5] rounded-[28px] p-5 border border-[#d5ead5] space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-[#1e591e] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#2e7d32]" />
                <span>Credit Growth Tiers</span>
              </div>

              <div className="space-y-2">
                {LOAN_TIERS.map((tier) => (
                  <div
                    key={tier.level}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-[#dcecdc] text-xs"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-lg bg-[#e2f3e2] text-[#1b5e20] font-extrabold flex items-center justify-center text-[11px]">
                        {tier.level}
                      </span>
                      <div>
                        <div className="font-bold text-[#143014]">{tier.title}</div>
                        <div className="text-[10px] text-[#4d704d]">{tier.amountRange}</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-semibold text-[#285e28] bg-[#f0faf0] px-2 py-0.5 rounded-md border border-[#cbe4cb]">
                      {tier.tenure}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
