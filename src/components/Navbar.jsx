import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

export default function Navbar({ onOpenDemo }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = ['overview', 'pricing', 'demo-video', 'what-is-neno', 'why-explore', 'help-with', 'where-it-fits', 'roadmap', 'faq'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#overview', id: 'overview' },
    { name: 'Consultation', href: '#pricing', id: 'pricing' },
    { name: 'FAQ', href: '#faq', id: 'faq' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#FFFFFF]/95 backdrop-blur-md shadow-xs border-b border-[#E2E8F0] py-2.5 sm:py-3' 
        : 'bg-[#FFFFFF]/90 backdrop-blur-sm py-3 sm:py-4 border-b border-[#E2E8F0]/50'
    }`}>
      <div className="max-w-[1400px] mx-auto px-3.5 sm:px-5 lg:px-12 flex items-center justify-between gap-1.5 sm:gap-3 lg:gap-6 w-full">
        
        {/* Brand Logo & Unclipped Text Container */}
        <a href="#overview" className="flex items-center gap-2 sm:gap-3 group shrink-0">
          <img
            src="/logo.png"
            alt="Neno Dialer Logo"
            className="w-7 h-7 sm:w-9 sm:h-9 object-contain transition-transform duration-200 group-hover:scale-105 shrink-0"
          />
          <div className="hidden sm:flex flex-col overflow-visible whitespace-nowrap">
            <span className="text-[18px] sm:text-[20px] md:text-2xl font-logo font-extrabold tracking-tight text-[#0F172A] group-hover:text-[#2563EB] transition-colors leading-[1.1] pt-0.5">
              Neno Dialer
            </span>
            <span className="text-[9px] sm:text-[10px] font-label uppercase tracking-wider sm:tracking-widest text-[#475569] font-semibold mt-0.5">
              by Neno Technology
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 shrink-0">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`text-xs font-label transition-colors font-medium hover:text-[#2563EB] ${
                  isActive ? 'text-[#2563EB] font-bold' : 'text-[#475569]'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons & Mobile Menu Toggle */}
        <div className="flex items-center gap-1.5 sm:gap-3 lg:gap-4 shrink-0">
          <button
            onClick={onOpenDemo}
            className="btn-press-effect active:scale-97 inline-flex items-center justify-center px-2 xs:px-2.5 sm:px-4 py-1.5 xs:py-2 sm:py-2.5 rounded-lg bg-[#2563EB] text-white font-label text-[10px] xs:text-[11px] sm:text-xs font-bold hover:bg-[#1D4ED8] active:bg-[#1E40AF] transition-all shadow-xs cursor-pointer gap-1 sm:gap-2 whitespace-nowrap shrink-0"
          >
            <span>Book a Demo for ₹49</span>
            <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden min-w-[36px] min-h-[36px] sm:min-w-[44px] sm:min-h-[44px] flex items-center justify-center text-[#0F172A] hover:text-[#2563EB] transition-colors shrink-0 -mr-1"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFFFFF] border-b border-[#E2E8F0] px-4 sm:px-6 py-6 space-y-3 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-label font-medium text-[#0F172A] hover:text-[#2563EB]"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-[#E2E8F0]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="btn-press-effect active:scale-97 w-full py-3 rounded-lg bg-[#2563EB] text-white font-label text-xs font-bold text-center shadow-xs cursor-pointer"
            >
              Book a Demo for ₹49
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
