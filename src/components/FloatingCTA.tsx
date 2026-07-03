import { useState } from 'react';
import { Phone, X, MessageCircle, CalendarDays } from 'lucide-react';

export default function FloatingCTA() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Expanded options */}
      {expanded && (
        <div className="flex flex-col gap-3 items-end animate-in fade-in slide-in-from-bottom-3">
          <a
            href="tel:+916398311550"
            className="flex items-center gap-3 bg-[#0a1f44] text-white text-sm font-semibold px-5 py-3 rounded-2xl shadow-xl hover:bg-[#0d2a5c] transition-all whitespace-nowrap"
          >
            <Phone size={16} className="text-teal-400" />
            Emergency: +91 6398311550
          </a>
          <button
            onClick={() => { document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' }); setExpanded(false); }}
            className="flex items-center gap-3 bg-teal-600 text-white text-sm font-semibold px-5 py-3 rounded-2xl shadow-xl hover:bg-teal-700 transition-all whitespace-nowrap"
          >
            <CalendarDays size={16} />
            Book a Session
          </button>
          <a
            href="https://wa.me/916398311550?text=Hello%20Nephrocare%2C%20I%20need%20information%20about%20dialysis%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-green-600 text-white text-sm font-semibold px-5 py-3 rounded-2xl shadow-xl hover:bg-green-700 transition-all whitespace-nowrap"
          >
            <MessageCircle size={16} />
            WhatsApp Us
          </a>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300
          ${expanded ? 'bg-slate-700 rotate-0' : 'bg-teal-600 hover:bg-teal-500'}
        `}
      >
        {expanded ? (
          <X size={22} className="text-white" />
        ) : (
          <Phone size={22} className="text-white" />
        )}
        {!expanded && (
          <span className="absolute w-14 h-14 rounded-full bg-teal-500 opacity-60 pulse-ring" />
        )}
      </button>
    </div>
  );
}
