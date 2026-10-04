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
    { name: 'Plan & Pricing', href: '#pricing', id: 'pricing' },
    { name: 'FAQ', href: '#faq', id: 'faq' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#FFFFFF]/95 backdrop-blur-md shadow-xs border-b border-[#E2E8F0] py-3' 
        : 'bg-[#FFFFFF]/90 backdrop-blur-sm py-4 border-b border-[#E2E8F0]/50'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-6">
        
        {/* Brand Logo with exact rounded logo font styling */}
        <a href="#overview" className="flex items-center gap-3 group">
          <img
            src="/logo.png"
            alt="Neno Dialer Logo"
            className="w-9 h-9 object-contain transition-transform duration-200 group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="text-xl font-logo font-extrabold tracking-tight text-[#0F172A] group-hover:text-[#2563EB] transition-colors leading-none">
              Neno Dialer
            </span>
            <span className="text-[10px] font-label uppercase tracking-widest text-[#475569] font-semibold mt-0.5">
              by Neno Technology
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
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

        {/* Action Buttons */}
        <div className="flex items-center gap-4 shrink-0">
          <button
            onClick={onOpenDemo}
            className="hidden sm:inline-block text-xs font-label font-semibold text-[#475569] hover:text-[#0F172A] transition-colors cursor-pointer px-2"
          >
            Login
          </button>

          <button
            onClick={onOpenDemo}
            className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-[#2563EB] text-white font-label text-xs font-bold hover:bg-[#1D4ED8] active:bg-[#1E40AF] transition-all shadow-xs cursor-pointer gap-2"
          >
            <span>Book a Demo for ₹49</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#0F172A] hover:text-[#2563EB] transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFFFFF] border-b border-[#E2E8F0] px-6 py-6 space-y-3 shadow-lg">
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
          <div className="pt-4 border-t border-[#E2E8F0] space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="w-full py-2.5 rounded-lg bg-[#F5F8FC] text-[#0F172A] font-label text-xs font-bold text-center border border-[#E2E8F0]"
            >
              Login
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="w-full py-3 rounded-lg bg-[#2563EB] text-white font-label text-xs font-bold text-center shadow-xs"
            >
              Book a Demo for ₹49
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
