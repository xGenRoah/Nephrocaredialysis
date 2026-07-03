import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Our Team', href: '#team' },
  { label: 'Book Session', href: '#booking' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-[#0a1f44] text-white text-xs py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <span className="text-teal-400">📍</span>
              3rd Floor, Adarsh Hospital, Panchsheel Vihar, Malviya Nagar, New Delhi
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-teal-400">📧</span>
              mohammedfahadkhan410@gmail.com
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-teal-400 font-medium">24/7 Emergency Care Available</span>
            <a href="tel:+916398311550" className="flex items-center gap-1.5 bg-teal-600 hover:bg-teal-500 transition-colors px-3 py-1 rounded-full text-white font-medium">
              <Phone size={11} />
              +91 6398311550
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm shadow-md'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavClick('#home')}>
              <div className="w-10 h-10 bg-gradient-to-br from-[#0a1f44] to-teal-600 rounded-xl flex items-center justify-center shadow-md">
                <span className="text-white font-black text-lg font-montserrat">N</span>
              </div>
              <div>
                <div className="font-black text-[#0a1f44] text-xl font-montserrat leading-none">NEPHROCARE</div>
                <div className="text-teal-600 text-[10px] font-semibold tracking-widest uppercase font-inter">Advanced Kidney Care</div>
              </div>
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map(link => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className={`nav-link px-4 py-2 text-sm font-semibold font-inter transition-colors rounded-md
                    ${activeSection === link.href.replace('#', '')
                      ? 'text-teal-600'
                      : 'text-slate-600 hover:text-[#0a1f44]'
                    }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-3">
              <a href="tel:+916398311550" className="flex items-center gap-2 bg-[#0a1f44] hover:bg-[#0d2a5c] text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-all shadow-md hover:shadow-lg">
                <Phone size={14} />
                Emergency
              </a>
              <button
                onClick={() => handleNavClick('#booking')}
                className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all shadow-md hover:shadow-lg"
              >
                Book Session
              </button>
            </div>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 shadow-xl">
            <div className="px-4 py-3 border-b border-slate-100 bg-slate-50">
              <p className="text-xs text-slate-500">📍 3rd Floor, Adarsh Hospital, Malviya Nagar, New Delhi</p>
            </div>
            {navLinks.map(link => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left px-6 py-3.5 text-sm font-semibold text-slate-700 hover:bg-teal-50 hover:text-teal-700 border-b border-slate-50 transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="p-4 flex gap-3">
              <a href="tel:+916398311550" className="flex-1 flex items-center justify-center gap-2 bg-[#0a1f44] text-white text-sm font-semibold py-3 rounded-xl">
                <Phone size={14} /> Emergency
              </a>
              <button
                onClick={() => handleNavClick('#booking')}
                className="flex-1 flex items-center justify-center gap-2 bg-teal-600 text-white text-sm font-semibold py-3 rounded-xl"
              >
                Book Now
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
