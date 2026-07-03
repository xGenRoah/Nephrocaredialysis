import { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertTriangle } from 'lucide-react';

const contactCards = [
  {
    icon: <Phone size={22} className="text-teal-400" />,
    title: 'Dr. Fahad – Owner & VC',
    subtitle: 'Operational Queries & Escalations',
    value: '+91 6398311550',
    href: 'tel:+916398311550',
    bg: 'from-[#0a1f44] to-[#0d2a5c]',
  },
  {
    icon: <Phone size={22} className="text-teal-400" />,
    title: 'Mr. Talib – Center Manager',
    subtitle: 'Appointments, Logistics & Patient Relations',
    value: '+91 8447145027',
    href: 'tel:+918447145027',
    bg: 'from-teal-700 to-teal-800',
  },
  {
    icon: <Mail size={22} className="text-teal-400" />,
    title: 'Email Us',
    subtitle: 'General Queries & Documentation',
    value: 'mohammedfahadkhan410@gmail.com',
    href: 'mailto:mohammedfahadkhan410@gmail.com',
    bg: 'from-slate-700 to-slate-800',
  },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({ name: '', phone: '', message: '', urgency: 'normal' });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.section-reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const update = (key: string, val: string) => setForm(f => ({ ...f, [key]: val }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14 section-reveal">
          <span className="inline-block bg-[#0a1f44]/5 text-[#0a1f44] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4 border border-[#0a1f44]/10">
            Contact Us
          </span>
          <h2 className="text-4xl font-black text-[#0a1f44] font-montserrat mb-4">
            Reach Us Any Time, <br />
            <span className="gradient-text">Any Day, Any Hour</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-base leading-relaxed font-inter">
            Whether it's a routine inquiry or a medical emergency, we're always available. Choose the fastest way to connect.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {contactCards.map((card, i) => (
            <a
              key={card.title}
              href={card.href}
              className={`bg-gradient-to-br ${card.bg} rounded-2xl p-6 text-white card-hover section-reveal block`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center mb-4">
                {card.icon}
              </div>
              <div className="text-white font-bold text-sm font-montserrat mb-0.5">{card.title}</div>
              <div className="text-slate-300 text-xs mb-3 font-inter">{card.subtitle}</div>
              <div className="text-teal-300 font-semibold text-sm font-inter break-all">{card.value}</div>
            </a>
          ))}
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Map + Address */}
          <div className="lg:col-span-3 space-y-5 section-reveal">
            {/* Map Embed */}
            <div className="rounded-2xl overflow-hidden shadow-md border border-slate-100 h-72">
              <iframe
                title="Nephrocare Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.5012345678!2d77.2163!3d28.5265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1c2b2b2b2b3%3A0x1234567890abcdef!2sPanchsheel%20Vihar%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Address Card */}
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-teal-600" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0a1f44] font-montserrat mb-1">Nephrocare – Kidney Care Center</h4>
                  <p className="text-slate-600 text-sm font-inter leading-relaxed">
                    3rd Floor, Adarsh Hospital<br />
                    Panchsheel Vihar, Malviya Nagar<br />
                    New Delhi – 110 017
                  </p>
                  <a
                    href="https://maps.google.com/?q=Panchsheel+Vihar+Malviya+Nagar+New+Delhi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 text-teal-600 hover:text-teal-700 text-xs font-semibold font-inter"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-[#0a1f44] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock size={18} className="text-teal-400" />
                <h4 className="text-white font-bold font-montserrat">Operating Hours</h4>
              </div>
              <div className="space-y-2">
                {[
                  { day: 'Monday – Saturday', time: 'All 4 Shifts (6 AM – 1 AM)' },
                  { day: 'Sunday', time: 'Morning & Afternoon Shifts' },
                  { day: 'Emergency Dialysis', time: '24 × 7 — Call Immediately' },
                ].map((h) => (
                  <div key={h.day} className="flex items-center justify-between">
                    <span className="text-slate-300 text-xs font-inter">{h.day}</span>
                    <span className="text-teal-300 text-xs font-semibold font-inter">{h.time}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2 bg-green-500/15 border border-green-500/25 rounded-xl px-4 py-2.5">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-300 text-xs font-semibold font-inter">Emergency line active now</span>
              </div>
            </div>
          </div>

          {/* Emergency Contact Form */}
          <div className="lg:col-span-2 section-reveal">
            <div className="bg-white border border-slate-100 rounded-3xl shadow-md overflow-hidden h-full">
              <div className="bg-gradient-to-r from-red-600 to-red-700 px-6 py-5">
                <div className="flex items-center gap-3">
                  <AlertTriangle size={20} className="text-white" />
                  <div>
                    <h3 className="text-white font-bold font-montserrat">Emergency Dispatch</h3>
                    <p className="text-red-200 text-xs font-inter">Alerts the on-duty clinical team instantly</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                {!sent ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0a1f44] uppercase tracking-wide mb-1.5 font-montserrat">Patient Name *</label>
                      <input
                        required
                        type="text"
                        placeholder="Full name of patient"
                        value={form.name}
                        onChange={e => update('name', e.target.value)}
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#0a1f44] uppercase tracking-wide mb-1.5 font-montserrat">Contact Number *</label>
                      <input
                        required
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={form.phone}
                        onChange={e => update('phone', e.target.value)}
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#0a1f44] uppercase tracking-wide mb-1.5 font-montserrat">Urgency Level</label>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { id: 'normal', label: '🟢 Normal Query' },
                          { id: 'urgent', label: '🔴 Medical Emergency' },
                        ].map((u) => (
                          <label
                            key={u.id}
                            className={`flex items-center gap-2 p-3 rounded-xl border-2 cursor-pointer text-xs font-semibold font-inter transition-all
                              ${form.urgency === u.id ? 'border-teal-500 bg-teal-50 text-[#0a1f44]' : 'border-slate-100 text-slate-500 hover:border-teal-200'}`}
                          >
                            <input
                              type="radio"
                              name="urgency"
                              value={u.id}
                              checked={form.urgency === u.id}
                              onChange={() => update('urgency', u.id)}
                              className="accent-teal-600"
                            />
                            {u.label}
                          </label>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#0a1f44] uppercase tracking-wide mb-1.5 font-montserrat">Message / Symptoms</label>
                      <textarea
                        rows={4}
                        placeholder="Briefly describe the situation or your query…"
                        value={form.message}
                        onChange={e => update('message', e.target.value)}
                        className="form-input resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-[#0a1f44] hover:bg-[#0d2a5c] text-white font-bold text-sm py-3.5 rounded-xl transition-all shadow-md"
                    >
                      <Send size={16} />
                      Send Emergency Alert
                    </button>
                    <p className="text-slate-400 text-xs text-center font-inter">
                      For immediate emergencies, call <a href="tel:+916398311550" className="text-teal-600 font-semibold">+91 6398311550</a> directly.
                    </p>
                  </form>
                ) : (
                  <div className="text-center py-10">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={32} className="text-green-600" />
                    </div>
                    <h4 className="font-black text-[#0a1f44] font-montserrat mb-2">Alert Dispatched!</h4>
                    <p className="text-slate-500 text-sm font-inter mb-5">Our clinical team has been notified. You'll be contacted within minutes.</p>
                    <button
                      onClick={() => setSent(false)}
                      className="text-teal-600 text-sm font-semibold hover:underline font-inter"
                    >
                      Send Another Message
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
