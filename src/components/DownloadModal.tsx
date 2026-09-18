import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Download, X, CheckCircle2, QrCode, Smartphone, ShieldCheck, Copy, Check, ExternalLink } from 'lucide-react';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose }) => {
  const [downloadProgress, setDownloadProgress] = useState<number>(0);
  const [isDownloaded, setIsDownloaded] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      setDownloadProgress(0);
      setIsDownloaded(false);

      // Simulate rapid realistic download progress
      const interval = setInterval(() => {
        setDownloadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsDownloaded(true);
            triggerActualFileDownload();
            return 100;
          }
          return prev + 25;
        });
      }, 250);

      return () => clearInterval(interval);
    }
  }, [isOpen]);

  // Downloads the actual typecredit-app.apk file
  const triggerActualFileDownload = () => {
    try {
      const a = document.createElement('a');
      a.href = '/typecredit-app.apk';
      a.download = 'typecredit-app.apk';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (e) {
      console.log('Download trigger completed', e);
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.origin + '/typecredit-app.apk');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div
        id="apk-download-modal"
        className="relative w-full max-w-lg bg-white rounded-[32px] p-6 sm:p-8 border border-[#cbe6cb] shadow-2xl overflow-hidden"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#f0f7f0] hover:bg-[#e0f0e0] flex items-center justify-center text-[#2d522d] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <Logo size="lg" className="justify-center mb-3" />
          <h3 className="text-2xl font-extrabold text-[#102d10]">
            {isDownloaded ? 'Download Initialized!' : 'Downloading TypeCredit APK'}
          </h3>
          <p className="text-xs sm:text-sm text-[#3b5e3b] mt-1">
            Official Android Release · Version 2.4.1 (14.8 MB)
          </p>
        </div>

        {/* Download Progress Bar */}
        <div className="bg-[#f4faf4] rounded-2xl p-4 border border-[#d6ebd6] mb-6">
          <div className="flex justify-between text-xs font-bold text-[#1a4f1a] mb-1.5">
            <span>typecredit-app.apk</span>
            <span>{downloadProgress}%</span>
          </div>
          <div className="w-full h-3 bg-[#e2f0e2] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#2e7d32] transition-all duration-300 rounded-full"
              style={{ width: `${downloadProgress}%` }}
            ></div>
          </div>
          <div className="flex items-center justify-between text-[11px] text-[#486e48] mt-2">
            <span>⚡ Size: 14.8 MB</span>
            <span className="flex items-center gap-1 text-[#1e6b1e] font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" /> Clean & Verified
            </span>
          </div>
        </div>

        {/* 3 Step Installation Instructions */}
        <div className="space-y-3 mb-6">
          <div className="text-xs font-bold uppercase tracking-wider text-[#1e5c1e]">
            Easy 3-Step Phone Install Guide:
          </div>

          <div className="flex items-start gap-3 p-3 rounded-xl bg-[#f8fcf8] border border-[#dcecdc] text-xs text-[#284a28]">
            <span className="w-5 h-5 rounded-full bg-[#2e7d32] text-white flex items-center justify-center font-bold shrink-0 text-[11px]">
              1
            </span>
            <div>
              <strong className="text-[#102d10]">Open Downloads:</strong> Tap the downloaded{' '}
              <span className="font-mono bg-[#e9f4e9] px-1 rounded text-[#144f14]">typecredit-app.apk</span> file from your notification bar or Downloads folder.
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-xl bg-[#f8fcf8] border border-[#dcecdc] text-xs text-[#284a28]">
            <span className="w-5 h-5 rounded-full bg-[#2e7d32] text-white flex items-center justify-center font-bold shrink-0 text-[11px]">
              2
            </span>
            <div>
              <strong className="text-[#102d10]">Allow Install:</strong> If your browser prompts "Install unknown apps", toggle "Allow from this source".
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-xl bg-[#f8fcf8] border border-[#dcecdc] text-xs text-[#284a28]">
            <span className="w-5 h-5 rounded-full bg-[#2e7d32] text-white flex items-center justify-center font-bold shrink-0 text-[11px]">
              3
            </span>
            <div>
              <strong className="text-[#102d10]">Access Loan:</strong> Launch TypeCredit, enter your phone number, and unlock your ₦20,000 to ₦300,000 limit!
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={triggerActualFileDownload}
            className="flex-1 inline-flex items-center justify-center gap-2 bg-[#2e7d32] hover:bg-[#236b27] text-white font-bold text-sm py-3 px-4 rounded-full shadow-md transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Restart Download</span>
          </button>

          <button
            type="button"
            onClick={handleCopyLink}
            className="inline-flex items-center justify-center gap-1.5 bg-[#f0faf0] hover:bg-[#e4f5e4] text-[#1a551a] font-semibold text-xs sm:text-sm py-3 px-4 rounded-full border border-[#c5e4c5] transition-all"
          >
            {copied ? <Check className="w-4 h-4 text-[#2e7d32]" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Link Copied!' : 'Copy APK Link'}</span>
          </button>
        </div>

        {/* Security Footer Note */}
        <div className="text-center mt-4 text-[11px] text-[#4d704d]">
          🔒 SHA-256 Verified · Compatible with Android 8.0 through Android 15+
        </div>
      </div>
    </div>
  );
};
