import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { Logo } from './Logo';

interface EligibilityModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProceedToDownload: () => void;
}

export const EligibilityModal: React.FC<EligibilityModalProps> = ({
  isOpen,
  onClose,
  onProceedToDownload,
}) => {
  const [ageConfirmed, setAgeConfirmed] = useState<boolean>(true);
  const [bankAccountConfirmed, setBankAccountConfirmed] = useState<boolean>(true);
  const [nigeriaResident, setNigeriaResident] = useState<boolean>(true);

  if (!isOpen) return null;

  const isEligible = ageConfirmed && bankAccountConfirmed && nigeriaResident;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div
        id="eligibility-modal"
        className="relative w-full max-w-md bg-white rounded-[32px] p-6 sm:p-8 border border-[#cbe6cb] shadow-2xl overflow-hidden"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#f0f7f0] hover:bg-[#e0f0e0] flex items-center justify-center text-[#2d522d] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <Logo size="md" className="justify-center mb-2" />
          <h3 className="text-2xl font-extrabold text-[#112d11]">
            Instant Eligibility Check
          </h3>
          <p className="text-xs sm:text-sm text-[#3b5e3b] mt-1">
            Confirm 3 quick questions. Everyone qualifies from day one.
          </p>
        </div>

        <div className="space-y-3 mb-6">
          <label className="flex items-center justify-between p-3.5 rounded-2xl bg-[#f8fcf8] border border-[#dcecdc] cursor-pointer hover:bg-[#f0faf0] transition-colors">
            <span className="text-sm font-medium text-[#1a381a]">
              Are you 18 years or older?
            </span>
            <input
              type="checkbox"
              checked={ageConfirmed}
              onChange={(e) => setAgeConfirmed(e.target.checked)}
              className="w-5 h-5 rounded text-[#2e7d32] accent-[#2e7d32] cursor-pointer"
            />
          </label>

          <label className="flex items-center justify-between p-3.5 rounded-2xl bg-[#f8fcf8] border border-[#dcecdc] cursor-pointer hover:bg-[#f0faf0] transition-colors">
            <span className="text-sm font-medium text-[#1a381a]">
              Do you have an active Nigerian bank account?
            </span>
            <input
              type="checkbox"
              checked={bankAccountConfirmed}
              onChange={(e) => setBankAccountConfirmed(e.target.checked)}
              className="w-5 h-5 rounded text-[#2e7d32] accent-[#2e7d32] cursor-pointer"
            />
          </label>

          <label className="flex items-center justify-between p-3.5 rounded-2xl bg-[#f8fcf8] border border-[#dcecdc] cursor-pointer hover:bg-[#f0faf0] transition-colors">
            <span className="text-sm font-medium text-[#1a381a]">
              Do you have a working Nigerian mobile phone?
            </span>
            <input
              type="checkbox"
              checked={nigeriaResident}
              onChange={(e) => setNigeriaResident(e.target.checked)}
              className="w-5 h-5 rounded text-[#2e7d32] accent-[#2e7d32] cursor-pointer"
            />
          </label>
        </div>

        {/* Result Card */}
        {isEligible ? (
          <div className="bg-[#eaf8ea] rounded-2xl p-4 border border-[#b8e2b8] mb-6 flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-[#2e7d32] shrink-0 mt-0.5" />
            <div>
              <div className="font-extrabold text-sm text-[#144f14]">
                🎉 You are 100% Eligible!
              </div>
              <p className="text-xs text-[#2e622e] mt-0.5">
                Your pre-approved starter limit of <strong>₦20,000</strong> is ready. Grow up to <strong>₦300,000</strong> with on-time repayments.
              </p>
            </div>
          </div>
        ) : (
          <div className="bg-[#fff8ea] rounded-2xl p-4 border border-[#fae2b8] mb-6 text-xs text-[#6e4e1a]">
            Please confirm all requirements above to proceed with instant loan disbursal.
          </div>
        )}

        <button
          type="button"
          disabled={!isEligible}
          onClick={() => {
            onClose();
            onProceedToDownload();
          }}
          className="w-full inline-flex items-center justify-center gap-2 bg-[#2e7d32] hover:bg-[#236b27] disabled:opacity-50 text-white font-bold text-sm sm:text-base py-3.5 px-6 rounded-full shadow-md transition-all cursor-pointer"
        >
          <span>Claim ₦20k – ₦300k in App</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
