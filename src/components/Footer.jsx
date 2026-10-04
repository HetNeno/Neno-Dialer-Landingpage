import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Footer({ onOpenDemo }) {
  return (
    <footer className="w-full bg-[#FFFFFF] border-t border-[#E2E8F0] pt-16 pb-12 font-body text-[#0F172A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <a href="#overview" className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Neno Dialer Logo"
                className="w-9 h-9 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-xl font-headline font-bold tracking-tight text-[#0F172A]">
                  Neno Dialer
                </span>
                <span className="text-[10px] font-label uppercase tracking-widest text-[#475569] font-semibold -mt-1">
                  by Neno Technology
                </span>
              </div>
            </a>

            <p className="text-xs text-[#475569] leading-relaxed max-w-sm">
              Intelligent business call management software unifying WebRTC calling, automated call distribution, supervisor oversight, and CRM sync.
            </p>

            <div className="pt-2 text-xs text-[#64748B] space-y-1 font-mono">
              <p>Support: support@nenotechnology.com</p>
              <p>Neno Technology • India &amp; Global Operations</p>
            </div>
          </div>

          {/* Quick Links Column 1 */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-widest text-[#0F172A] font-label">
              Product Links
            </h4>
            <ul className="space-y-2 text-xs text-[#475569]">
              <li><a href="#overview" className="hover:text-[#2563EB] transition-colors">Home</a></li>
              <li><a href="#pricing" className="hover:text-[#2563EB] transition-colors">Plan &amp; Pricing</a></li>
              <li><a href="#what-is-neno" className="hover:text-[#2563EB] transition-colors">What is Neno Dialer</a></li>
              <li><a href="#roadmap" className="hover:text-[#2563EB] transition-colors">15-Min Call Roadmap</a></li>
              <li><a href="#faq" className="hover:text-[#2563EB] transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Quick Links Column 2 */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-widest text-[#0F172A] font-label">
              1-on-1 Walkthrough
            </h4>
            <p className="text-xs text-[#475569] leading-relaxed">
              Book a complete 15-minute dedicated mentor session for ₹49 + GST.
            </p>
            <button
              onClick={onOpenDemo}
              className="px-5 py-2.5 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-xs transition-colors shadow-xs inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Book Demo for ₹49 + GST</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-8 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <p>© {new Date().getFullYear()} Neno Technology. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#faq" className="hover:text-[#2563EB] transition-colors">Privacy Policy</a>
            <a href="#faq" className="hover:text-[#2563EB] transition-colors">Terms of Service</a>
            <a href="#faq" className="hover:text-[#2563EB] transition-colors">Contact Support</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
