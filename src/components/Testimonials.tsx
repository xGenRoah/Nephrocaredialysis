import { useEffect, useRef, useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Sharma',
    location: 'Malviya Nagar, New Delhi',
    rating: 5,
    text: "My father has been on dialysis at Nephrocare for 14 months. The cleanliness, the professionalism, and the care from Dr. Fahad's team is unmatched. The RO water quality display gives our family real peace of mind. We wouldn't trust anyone else.",
    relation: 'Son of patient',
  },
  {
    name: 'Priya Malhotra',
    location: 'Hauz Khas, New Delhi',
    rating: 5,
    text: "I was admitted as an emergency at midnight with acute kidney failure. The team was ready within 20 minutes. Dr. Tausif personally oversaw my first sessions. The ICU backup facility being right downstairs made all the difference.",
    relation: 'Patient (CKD Stage 4)',
  },
  {
    name: 'Mohammed Irfan',
    location: 'Okhla, New Delhi',
    rating: 5,
    text: "The monthly quota system is brilliant. I pay once, book my 12 sessions, and get reminders. The dietitian guidance has genuinely changed my between-dialysis eating habits. My KFT reports have improved significantly over 6 months.",
    relation: 'Patient (Maintenance Dialysis)',
  },
  {
    name: 'Sunita Verma',
    location: 'Greater Kailash, New Delhi',
    rating: 5,
    text: "Mr. Talib was incredibly helpful in coordinating my husband's Medi-Assist insurance claim. They handled all the paperwork. The digital receipts with GST breakdowns made our company reimbursement process seamless.",
    relation: 'Wife of patient',
  },
  {
    name: 'Dr. Arun Kapoor',
    location: 'Lajpat Nagar, New Delhi',
    rating: 5,
    text: "As a general physician, I refer my CKD patients to Nephrocare with full confidence. The nephrologists there communicate case updates back to me promptly, and the clinical standards are visibly high. My patients consistently report positive experiences.",
    relation: 'Referring Physician (MBBS)',
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.section-reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-[#0a1f44] to-[#061230]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14 section-reveal">
          <span className="inline-block bg-teal-500/15 border border-teal-500/25 text-teal-300 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Patient Testimonials
          </span>
          <h2 className="text-4xl font-black text-white font-montserrat mb-4">
            Trusted by Hundreds of <br />
            <span className="text-teal-400">Families Across Delhi</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base leading-relaxed font-inter">
            Real stories from real patients and their families. Their trust is our greatest credential.
          </p>
        </div>

        {/* Featured Testimonial (Large) */}
        <div className="section-reveal mb-8">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-12 relative max-w-4xl mx-auto">
            <Quote size={48} className="text-teal-500/20 absolute top-6 right-8" />
            <div className="flex items-center gap-1 mb-5">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <Star key={i} size={18} className="text-amber-400 fill-amber-400" />
              ))}
            </div>
            <p className="text-white text-lg leading-relaxed font-inter mb-8 italic">
              "{testimonials[current].text}"
            </p>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-700 rounded-full flex items-center justify-center text-white font-black text-xl font-montserrat shadow-lg">
                  {testimonials[current].name.charAt(0)}
                </div>
                <div>
                  <div className="text-white font-bold font-montserrat">{testimonials[current].name}</div>
                  <div className="text-slate-400 text-xs font-inter">{testimonials[current].relation} · {testimonials[current].location}</div>
                </div>
              </div>
              {/* Controls */}
              <div className="flex gap-2">
                <button
                  onClick={() => setCurrent(c => (c - 1 + testimonials.length) % testimonials.length)}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white flex items-center justify-center transition-all"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={() => setCurrent(c => (c + 1) % testimonials.length)}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white flex items-center justify-center transition-all"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* Dots */}
            <div className="flex gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`transition-all duration-300 rounded-full ${i === current ? 'w-6 h-2 bg-teal-400' : 'w-2 h-2 bg-white/20'}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* All testimonials grid (small cards) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 section-reveal">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              onClick={() => setCurrent(i)}
              className={`p-5 rounded-2xl border cursor-pointer transition-all
                ${i === current
                  ? 'bg-teal-500/15 border-teal-500/40'
                  : 'bg-white/5 border-white/10 hover:bg-white/8 hover:border-white/20'
                }`}
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={12} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-slate-300 text-xs leading-relaxed font-inter line-clamp-3 mb-3">
                "{t.text}"
              </p>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 bg-teal-600 rounded-full flex items-center justify-center text-white text-xs font-bold font-montserrat">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-white text-xs font-bold font-montserrat">{t.name}</div>
                  <div className="text-slate-500 text-xs font-inter">{t.relation}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-14 section-reveal">
          {[
            { value: '500+', label: 'Patients Served', icon: '👥' },
            { value: '15,000+', label: 'Successful Sessions', icon: '💉' },
            { value: '4.9 / 5', label: 'Patient Rating', icon: '⭐' },
            { value: '98%', label: 'Would Recommend', icon: '❤️' },
          ].map((stat) => (
            <div key={stat.label} className="text-center bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-white font-black text-2xl font-montserrat">{stat.value}</div>
              <div className="text-slate-400 text-xs font-inter mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
