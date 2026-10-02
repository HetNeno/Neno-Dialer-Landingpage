import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer({ onOpenDemo }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#3a302a] text-[#faf5ee] pt-16 pb-12 border-t border-[#605850]/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Final CTA Banner inside Footer */}
        <div className="bg-[#c2652a] text-white rounded-2xl p-8 lg:p-12 shadow-xl mb-16 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left max-w-xl">
            <h3 className="font-headline text-3xl sm:text-4xl font-bold tracking-tight">
              Make Every Call Easier to Manage.
            </h3>
            <p className="text-sm opacity-90 leading-relaxed font-body">
              Neno Dialer brings calling workflows, queue distribution, supervisor visibility, call recording, and CRM integration into one structured platform.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={onOpenDemo}
              className="w-full sm:w-auto px-7 py-3 rounded-lg bg-white text-[#3a302a] font-label text-xs font-bold hover:bg-[#faf5ee] transition-colors shadow-sm cursor-pointer"
            >
              Book a Demo
            </button>
            <a
              href="#overview"
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-black/20 hover:bg-black/30 text-white font-label text-xs font-semibold text-center transition-colors border border-white/20"
            >
              Explore the Platform
            </a>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#605850]/40">
          
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#c2652a] text-white flex items-center justify-center font-headline font-bold text-lg">
                ND
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-headline font-bold text-white tracking-tight">
                  Neno Dialer
                </span>
                <span className="text-[10px] font-label uppercase tracking-widest text-[#d8d0c8] font-semibold -mt-1">
                  by Neno Technology
                </span>
              </div>
            </div>

            <p className="text-xs text-[#d8d0c8] max-w-sm leading-relaxed">
              Enterprise business communication, automated call distribution, supervisor oversight, and CRM workflow management platform.
            </p>
          </div>

          {/* Quick Links (4 cols) */}
          <div className="md:col-span-4 space-y-2">
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#f0a878] font-label">
              Platform Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#d8d0c8]">
              <li><a href="#overview" className="hover:text-white transition-colors">Product Overview</a></li>
              <li><a href="#call-management" className="hover:text-white transition-colors">Call Management &amp; ACD</a></li>
              <li><a href="#calling-modes" className="hover:text-white transition-colors">Inbound &amp; Outbound Modes</a></li>
              <li><a href="#call-audit" className="hover:text-white transition-colors">Call Quality &amp; Auditing</a></li>
              <li><a href="#integrations" className="hover:text-white transition-colors">Software Integrations</a></li>
              <li><a href="#industries" className="hover:text-white transition-colors">Vertical Industries</a></li>
              <li><a href="#workforce" className="hover:text-white transition-colors">Workforce Visibility</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Legal & Compliance (3 cols) */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#f0a878] font-label">
              Legal &amp; Architecture
            </h4>
            <ul className="space-y-2 text-xs text-[#d8d0c8]">
              <li><a href="#overview" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#overview" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#overview" className="hover:text-white transition-colors">WebRTC Compliance</a></li>
              <li><a href="#overview" className="hover:text-white transition-colors">Security Controls</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#d8d0c8]">
          <p>© {new Date().getFullYear()} Neno Technology. All rights reserved. Neno Dialer™.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#f0a878] hover:underline cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
