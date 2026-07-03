import { useState, useEffect, useRef } from 'react';
import { CalendarDays, Clock, User, Phone as PhoneIcon, CheckCircle, Sunrise, Sun, Sunset, Moon } from 'lucide-react';

const shifts = [
  { id: 'morning', label: 'Morning', time: '6 AM – 10 AM', icon: <Sunrise size={16} /> },
  { id: 'afternoon', label: 'Afternoon', time: '11 AM – 3 PM', icon: <Sun size={16} /> },
  { id: 'evening', label: 'Evening', time: '4 PM – 8 PM', icon: <Sunset size={16} /> },
  { id: 'night', label: 'Night', time: '9 PM – 1 AM', icon: <Moon size={16} /> },
];

const packages = [
  {
    id: 'single',
    name: 'Single Session',
    price: '₹2,000',
    unit: '/ session',
    features: ['One dialysis session', 'Standard RO water use', 'Nursing supervision'],
  },
  {
    id: 'monthly',
    name: 'Monthly Quota',
    price: '₹22,000',
    unit: '/ month (12 sessions)',
    features: ['12 sessions, thrice weekly', 'Dietitian consultation', 'Digital receipts & reminders'],
    highlighted: true,
  },
  {
    id: 'quarterly',
    name: 'Quarterly Quota',
    price: '₹63,000',
    unit: '/ quarter (36 sessions)',
    features: ['36 sessions, structured rate', 'Priority scheduling', 'Free monthly KFT review'],
  },
];

const doctorOptions = ['Dr. Mohammed Fahad Khan', 'Dr. Tausif', 'Dr. Ammar Yasir', 'No preference'];

export default function Booking() {
  const ref = useRef<HTMLDivElement>(null);
  const [selectedPackage, setSelectedPackage] = useState('monthly');
  const [form, setForm] = useState({
    name: '',
    phone: '',
    date: '',
    shift: 'morning',
    doctor: 'No preference',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

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
    setSubmitted(true);
  };

  return (
    <section id="booking" className="py-20 bg-slate-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14 section-reveal">
          <span className="inline-block bg-teal-50 text-teal-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4 border border-teal-100">
            Book a Session
          </span>
          <h2 className="text-4xl font-black text-[#0a1f44] font-montserrat mb-4">
            Schedule Your <br />
            <span className="gradient-text">Dialysis Session</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-base leading-relaxed font-inter">
            Choose a package that fits your care plan, pick a convenient shift, and our team will confirm your slot within the hour.
          </p>
        </div>

        {/* Package Selector */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {packages.map((pkg, i) => (
            <button
              type="button"
              key={pkg.id}
              onClick={() => setSelectedPackage(pkg.id)}
              className={`text-left rounded-3xl p-7 border-2 transition-all card-hover section-reveal relative
                ${selectedPackage === pkg.id
                  ? 'border-teal-500 bg-white shadow-lg'
                  : 'border-slate-100 bg-white hover:border-teal-200'
                }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {pkg.highlighted && (
                <span className="absolute -top-3 left-7 bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="text-[#0a1f44] font-black font-montserrat text-lg mb-1">{pkg.name}</h3>
              <div className="flex items-baseline gap-1.5 mb-5">
                <span className="text-3xl font-black font-montserrat text-teal-600">{pkg.price}</span>
                <span className="text-slate-400 text-xs font-inter">{pkg.unit}</span>
              </div>
              <ul className="space-y-2.5 mb-2">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <span className="w-5 h-5 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-2 h-2 bg-teal-600 rounded-full" />
                    </span>
                    <span className="text-slate-600 text-sm font-inter">{f}</span>
                  </li>
                ))}
              </ul>
              <div className={`mt-5 w-full text-center text-xs font-bold uppercase tracking-wide py-2 rounded-lg font-montserrat
                ${selectedPackage === pkg.id ? 'bg-teal-600 text-white' : 'bg-slate-50 text-slate-400'}`}>
                {selectedPackage === pkg.id ? 'Selected' : 'Select Package'}
              </div>
            </button>
          ))}
        </div>

        {/* Booking Form */}
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 section-reveal">
            <div className="bg-white border border-slate-100 rounded-3xl shadow-md overflow-hidden h-full">
              <div className="bg-gradient-to-r from-[#0a1f44] to-[#0d2a5c] px-6 py-5">
                <div className="flex items-center gap-3">
                  <CalendarDays size={20} className="text-teal-400" />
                  <div>
                    <h3 className="text-white font-bold font-montserrat">Session Booking Form</h3>
                    <p className="text-slate-300 text-xs font-inter">We'll confirm your slot by phone within the hour</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#0a1f44] uppercase tracking-wide mb-1.5 font-montserrat">Patient Name *</label>
                        <div className="relative">
                          <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                          <input
                            required
                            type="text"
                            placeholder="Full name"
                            value={form.name}
                            onChange={e => update('name', e.target.value)}
                            className="form-input pl-10"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#0a1f44] uppercase tracking-wide mb-1.5 font-montserrat">Contact Number *</label>
                        <div className="relative">
                          <PhoneIcon size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                          <input
                            required
                            type="tel"
                            placeholder="+91 XXXXX XXXXX"
                            value={form.phone}
                            onChange={e => update('phone', e.target.value)}
                            className="form-input pl-10"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0a1f44] uppercase tracking-wide mb-1.5 font-montserrat">Preferred Date *</label>
                      <input
                        required
                        type="date"
                        value={form.date}
                        onChange={e => update('date', e.target.value)}
                        className="form-input"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0a1f44] uppercase tracking-wide mb-2 font-montserrat">Preferred Shift</label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {shifts.map((s) => (
                          <label
                            key={s.id}
                            className={`flex flex-col items-center gap-1 p-3 rounded-xl border-2 cursor-pointer text-xs font-semibold font-inter transition-all
                              ${form.shift === s.id ? 'border-teal-500 bg-teal-50 text-[#0a1f44]' : 'border-slate-100 text-slate-500 hover:border-teal-200'}`}
                          >
                            <input
                              type="radio"
                              name="shift"
                              value={s.id}
                              checked={form.shift === s.id}
                              onChange={() => update('shift', s.id)}
                              className="sr-only"
                            />
                            <span className="text-teal-500">{s.icon}</span>
                            {s.label}
                            <span className="text-[10px] text-slate-400 font-normal">{s.time}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0a1f44] uppercase tracking-wide mb-1.5 font-montserrat">Preferred Nephrologist</label>
                      <select
                        value={form.doctor}
                        onChange={e => update('doctor', e.target.value)}
                        className="form-input"
                      >
                        {doctorOptions.map((d) => (
                          <option key={d} value={d}>{d}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0a1f44] uppercase tracking-wide mb-1.5 font-montserrat">Additional Notes</label>
                      <textarea
                        rows={3}
                        placeholder="Any medical history or special requirements…"
                        value={form.notes}
                        onChange={e => update('notes', e.target.value)}
                        className="form-input resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm py-3.5 rounded-xl transition-all shadow-md"
                    >
                      <CalendarDays size={16} />
                      Confirm Booking Request
                    </button>
                    <p className="text-slate-400 text-xs text-center font-inter">
                      Selected package: <span className="font-semibold text-slate-600">{packages.find(p => p.id === selectedPackage)?.name}</span>
                    </p>
                  </form>
                ) : (
                  <div className="text-center py-10">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={32} className="text-green-600" />
                    </div>
                    <h4 className="font-black text-[#0a1f44] font-montserrat mb-2">Booking Request Received!</h4>
                    <p className="text-slate-500 text-sm font-inter mb-5">Mr. Talib's team will call you shortly to confirm your session details.</p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-teal-600 text-sm font-semibold hover:underline font-inter"
                    >
                      Book Another Session
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Side info */}
          <div className="lg:col-span-2 space-y-5 section-reveal">
            <div className="bg-[#0a1f44] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock size={18} className="text-teal-400" />
                <h4 className="text-white font-bold font-montserrat">Shift Timings</h4>
              </div>
              <div className="space-y-2.5">
                {shifts.map((s) => (
                  <div key={s.id} className="flex items-center justify-between">
                    <span className="text-slate-300 text-xs font-inter flex items-center gap-2">
                      <span className="text-teal-400">{s.icon}</span>
                      {s.label}
                    </span>
                    <span className="text-teal-300 text-xs font-semibold font-inter">{s.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
              <h4 className="font-bold text-[#0a1f44] text-sm font-montserrat mb-3">Need Help Choosing?</h4>
              <p className="text-slate-500 text-xs leading-relaxed font-inter mb-4">
                Not sure which package fits your treatment plan? Call Mr. Talib and our team will guide you through the options based on your prescription.
              </p>
              <a
                href="tel:+918447145027"
                className="flex items-center justify-center gap-2 bg-teal-50 hover:bg-teal-100 text-teal-700 text-sm font-semibold px-4 py-3 rounded-xl transition-all border border-teal-100"
              >
                <PhoneIcon size={14} />
                +91 8447145027
              </a>
            </div>

            <div className="bg-red-50 border border-red-100 rounded-2xl p-6">
              <p className="text-red-600 text-xs font-semibold mb-2 font-inter">🚨 Need dialysis urgently?</p>
              <p className="text-slate-600 text-xs leading-relaxed font-inter mb-3">
                Skip the form — emergency dialysis is available 24/7. Call now for immediate assistance.
              </p>
              <a
                href="tel:+916398311550"
                className="text-red-600 font-black text-lg font-montserrat hover:text-red-700 transition-colors"
              >
                +91 6398311550
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
