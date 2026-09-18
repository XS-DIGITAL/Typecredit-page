import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ size = 'md', showText = true, className = '' }) => {
  const sizeMap = {
    sm: {
      t: 'text-xl',
      c: 'text-xl',
      naira: 'text-sm px-0.5',
      text: 'text-lg',
      box: 'h-8',
    },
    md: {
      t: 'text-2xl',
      c: 'text-2xl',
      naira: 'text-base px-0.5',
      text: 'text-xl',
      box: 'h-10',
    },
    lg: {
      t: 'text-4xl',
      c: 'text-4xl',
      naira: 'text-2xl px-1',
      text: 'text-2xl',
      box: 'h-14',
    },
    xl: {
      t: 'text-5xl md:text-6xl',
      c: 'text-5xl md:text-6xl',
      naira: 'text-3xl md:text-4xl px-1.5',
      text: 'text-3xl md:text-4xl',
      box: 'h-20',
    },
  };

  const s = sizeMap[size];

  return (
    <div id="typecredit-brand-logo" className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Emblem with T + ₦ + C overlay */}
      <div className={`relative flex items-center justify-center font-bold tracking-tight text-[#143014] ${s.box}`}>
        <div className="relative flex items-center">
          <span className={`font-extrabold text-[#143014] tracking-tighter ${s.t}`}>T</span>
          {/* Overlayed ₦ symbol with frosted glass look */}
          <span
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-[#1a6b1a] bg-white/80 backdrop-blur-[2px] rounded-full leading-none shadow-[0_0_10px_rgba(180,230,180,0.4)] border border-[#b8dbb8]/50 ${s.naira}`}
          >
            ₦
          </span>
          <span className={`font-extrabold text-[#143014] tracking-tighter ${s.c}`}>C</span>
        </div>
      </div>

      {showText && (
        <div className="flex items-center gap-1.5">
          <span className={`font-extrabold tracking-tight text-[#0f2a0f] ${s.text}`}>
            TypeCredit
          </span>
          <span className="bg-[#e2f3e2] text-[#1d541d] text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-[#b8dbb8]/60">
            ₦
          </span>
        </div>
      )}
    </div>
  );
};
