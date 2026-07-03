import { Phone, Mail, MapPin, Heart, ArrowUp } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Our Team', href: '#team' },
  { label: 'Book Session', href: '#booking' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  'Emergency Dialysis (24/7)',
  'Pre-Dialysis Counseling',
  'Nephrology Dietetics',
  'Patient Medical Dashboard',
  'TPA & Insurance Support',
  'Lab & Investigation Services',
  'Quota / Package Management',
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#061230] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-700 rounded-xl flex items-center justify-center shadow-md">
                <span className="text-white font-black text-lg font-montserrat">N</span>
              </div>
              <div>
                <div className="font-black text-white text-xl font-montserrat leading-none">NEPHROCARE</div>
                <div className="text-teal-400 text-[10px] font-semibold tracking-widest uppercase font-inter">Advanced Kidney Care</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 font-inter">
              Delhi's premier specialized kidney care & dialysis center. Clinically excellent, compassionately delivered, 24/7.
            </p>
            <div className="space-y-3">
              <a href="tel:+916398311550" className="flex items-start gap-3 group">
                <Phone size={15} className="text-teal-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm group-hover:text-teal-400 transition-colors font-inter">+91 6398311550</span>
              </a>
              <a href="tel:+918447145027" className="flex items-start gap-3 group">
                <Phone size={15} className="text-teal-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm group-hover:text-teal-400 transition-colors font-inter">+91 8447145027 (Manager)</span>
              </a>
              <a href="mailto:mohammedfahadkhan410@gmail.com" className="flex items-start gap-3 group">
                <Mail size={15} className="text-teal-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-400 text-xs group-hover:text-teal-400 transition-colors font-inter break-all">mohammedfahadkhan410@gmail.com</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={15} className="text-teal-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm font-inter">3rd Floor, Adarsh Hospital, Panchsheel Vihar, Malviya Nagar, New Delhi – 110 017</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm font-montserrat uppercase tracking-widest mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-slate-400 text-sm hover:text-teal-400 transition-colors font-inter flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-teal-500/50 rounded-full" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm font-montserrat uppercase tracking-widest mb-5">Our Services</h4>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-slate-400 text-sm font-inter flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-teal-500/50 rounded-full flex-shrink-0" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Emergency + Certifications */}
          <div>
            <h4 className="text-white font-bold text-sm font-montserrat uppercase tracking-widest mb-5">Emergency Care</h4>
            <div className="bg-red-600/20 border border-red-500/30 rounded-2xl p-5 mb-5">
              <p className="text-red-300 text-xs font-semibold mb-2 font-inter">🚨 Medical Emergency?</p>
              <a href="tel:+916398311550" className="text-white font-black text-xl font-montserrat hover:text-teal-300 transition-colors">
                +91 6398311550
              </a>
              <p className="text-slate-400 text-xs mt-1 font-inter">Available 24 hours, 7 days a week</p>
            </div>

            <h5 className="text-white font-bold text-xs font-montserrat uppercase tracking-widest mb-3">Certifications</h5>
            <div className="space-y-2">
              {[
                '✓ State Medical Council Registered',
                '✓ NABH-Aligned Protocols',
                '✓ Dialysis-Grade RO Certified',
                '✓ CGHS Empanelment (Applied)',
                '✓ GST Compliant Billing',
              ].map((cert) => (
                <div key={cert} className="text-slate-400 text-xs font-inter">{cert}</div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs font-inter text-center sm:text-left">
            © {new Date().getFullYear()} Nephrocare – Advanced Kidney Care Center, New Delhi. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <p className="text-slate-500 text-xs font-inter flex items-center gap-1">
              Made with <Heart size={11} className="text-red-400" /> for better kidney health
            </p>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 bg-teal-600 hover:bg-teal-500 rounded-lg flex items-center justify-center transition-colors shadow-md"
            >
              <ArrowUp size={14} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
