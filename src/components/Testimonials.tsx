import React from 'react';
import { TESTIMONIALS } from '../data';
import { Star, ShieldCheck, Users, ThumbsUp, CheckCircle } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials-section" className="py-16 md:py-24 border-b border-[#e4f0e4] bg-[#f9fcf9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1e6b1e] uppercase tracking-wider bg-[#e2f3e2] px-3 py-1 rounded-full border border-[#b8dbb8] mb-3">
            Real Stories from Lagos & Abuja
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#112811] tracking-tight">
            Trusted by Over 10,000 Everyday Nigerians
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#2d512d] opacity-90 leading-relaxed">
            From petty traders and entrepreneurs to salary earners and students, hear how TypeCredit powers daily ambitions.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              id={`testimonial-card-${t.id}`}
              className="bg-white rounded-[32px] p-6 sm:p-8 border border-[#d5ead5] shadow-[0_8px_24px_rgba(46,125,50,0.06)] flex flex-col justify-between"
            >
              <div>
                {/* Top row: stars + loan limit pill */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="bg-[#e8f6e8] text-[#1b5e20] text-xs font-extrabold px-3 py-1 rounded-full border border-[#c5e4c5]">
                    {t.amount}
                  </span>
                </div>

                {/* Comment quote */}
                <blockquote className="text-base sm:text-lg text-[#163016] italic font-medium leading-relaxed mb-6">
                  {t.comment}
                </blockquote>
              </div>

              {/* Author info with real avatar image */}
              <div className="pt-4 border-t border-[#edf4ed] flex items-center gap-3.5">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-13 h-13 rounded-full object-cover border-2 border-[#2e7d32]/30 shadow-sm"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-extrabold text-base text-[#112d11]">{t.name}</span>
                    <CheckCircle className="w-4 h-4 text-[#2e7d32]" />
                  </div>
                  <div className="text-xs text-[#3b5e3b]">{t.role} · {t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-8">
          <div className="inline-flex items-center gap-2 bg-[#f0faf0] px-4 py-2 rounded-full border border-[#d0ead0] text-xs sm:text-sm font-bold text-[#1a4d1a]">
            <span className="text-amber-500">⭐</span>
            <span>4.8 / 5 Overall Satisfaction</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-[#f0faf0] px-4 py-2 rounded-full border border-[#d0ead0] text-xs sm:text-sm font-bold text-[#1a4d1a]">
            <Users className="w-4 h-4 text-[#2e7d32]" />
            <span>10,000+ Active Users</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-[#f0faf0] px-4 py-2 rounded-full border border-[#d0ead0] text-xs sm:text-sm font-bold text-[#1a4d1a]">
            <ShieldCheck className="w-4 h-4 text-[#2e7d32]" />
            <span>100% Secure Lending</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-[#f0faf0] px-4 py-2 rounded-full border border-[#d0ead0] text-xs sm:text-sm font-bold text-[#1a4d1a]">
            <ThumbsUp className="w-4 h-4 text-[#2e7d32]" />
            <span>98.6% Same-Day Approval Rate</span>
          </div>
        </div>

      </div>
    </section>
  );
};
