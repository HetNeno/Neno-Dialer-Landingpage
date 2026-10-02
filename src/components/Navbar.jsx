import React, { useState, useEffect } from 'react';
import { Headphones, ArrowRight, Menu, X, ShieldCheck } from 'lucide-react';

export default function Navbar({ onOpenDemo }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = ['overview', 'call-management', 'calling-modes', 'call-audit', 'integrations', 'industries', 'workforce', 'faq'];
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
    { name: 'Overview', href: '#overview', id: 'overview' },
    { name: 'Call Management', href: '#call-management', id: 'call-management' },
    { name: 'Inbound & Outbound', href: '#calling-modes', id: 'calling-modes' },
    { name: 'Quality & Audit', href: '#call-audit', id: 'call-audit' },
    { name: 'Integrations', href: '#integrations', id: 'integrations' },
    { name: 'Industries', href: '#industries', id: 'industries' },
    { name: 'Workforce', href: '#workforce', id: 'workforce' },
    { name: 'FAQ', href: '#faq', id: 'faq' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#faf5ee]/95 backdrop-blur-md shadow-[0_2px_16px_rgba(58,48,42,0.06)] border-b border-[#d8d0c8]/50 py-3' 
        : 'bg-[#faf5ee]/80 backdrop-blur-sm py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-6">
        
        {/* Brand Logo */}
        <a href="#overview" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-[#c2652a] text-white flex items-center justify-center font-headline font-bold text-xl shadow-sm group-hover:bg-[#e08850] transition-colors">
            ND
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-headline font-bold tracking-tight text-[#3a302a] group-hover:text-[#c2652a] transition-colors">
              Neno Dialer
            </span>
            <span className="text-[10px] font-label uppercase tracking-widest text-[#605850] font-semibold -mt-1">
              by Neno Technology
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`text-xs font-label transition-colors font-medium hover:text-[#c2652a] ${
                  isActive ? 'text-[#c2652a] font-bold border-b-2 border-[#c2652a] pb-0.5' : 'text-[#605850]'
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
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-[#c2652a] text-white font-label text-xs font-semibold hover:bg-[#e08850] transition-all shadow-sm hover:shadow-md cursor-pointer gap-2"
          >
            <span>Book a Demo</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-[#3a302a] hover:text-[#c2652a] transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#faf5ee] border-b border-[#d8d0c8] px-6 py-6 space-y-3 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-label font-medium text-[#3a302a] hover:text-[#c2652a]"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-[#d8d0c8]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="w-full py-3 rounded-lg bg-[#c2652a] text-white font-label text-sm font-semibold text-center shadow-sm"
            >
              Book a Demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
