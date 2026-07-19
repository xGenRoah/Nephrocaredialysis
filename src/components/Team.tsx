import { useEffect, useRef } from 'react';
import { Phone, Mail, Award, GraduationCap, Star } from 'lucide-react';

const doctors = [
  {
    name: 'Mohammed Fahad Khan',
    credentials: ,
    role: 'Founder, Owner & Vice Chairman',
    roleShort: 'Founder & VC',
    contact: '+91 6398311550',
    email: 'mohammedfahadkhan410@gmail.com',
    description: 'Fahad is the founding force behind Nephrocare, bringing his extensive nephrology expertise and a patient-first philosophy to every clinical decision. As Vice Chairman, he personally oversees all quality standards, clinical protocols, and the strategic growth of the center.',
    specialties: ['Chronic Kidney Disease', 'Peritoneal Dialysis', 'Acute Kidney Injury', 'Renal Transplant Follow-up'],
    icon: '👨‍⚕️',
    bgColor: 'from-[#0a1f44] to-[#0d2a5c]',
    isFounder: true,
  },
  {
    name: 'Tausif',
    credentials: ,
    role: 'Senior Consultant Nephrologist',
    roleShort: 'Senior Consultant',
    contact: null,
    email: null,
    description: 'Tausif serves as Senior Consultant Nephrologist at Nephrocare, contributing decades of specialized kidney care experience. He leads complex case management and mentors the clinical team to ensure every patient receives evidence-based, individualized care.',
    specialties: ['Hemodialysis Management', 'Glomerular Diseases', 'Hypertensive Nephropathy', 'CKD Nutrition'],
    icon: '👨‍⚕️',
    bgColor: 'from-teal-700 to-teal-800',
    isFounder: false,
  },
  {
    name: 'Dr. Ammar Yasir',
    credentials: 'MBBS, Nephrology Specialization',
    role: 'Consultant Nephrologist',
    roleShort: 'Consultant',
    contact: null,
    email: null,
    description: 'Dr. Ammar Yasir is a dedicated Consultant Nephrologist who brings a meticulous, data-driven approach to kidney care. His focus on preventive nephrology and early intervention has helped numerous patients slow their CKD progression significantly.',
    specialties: ['Preventive Nephrology', 'Diabetic Kidney Disease', 'Dialysis Adequacy', 'Electrolyte Disorders'],
    icon: '👨‍⚕️',
    bgColor: 'from-slate-700 to-slate-800',
    isFounder: false,
  },
];

const manager = {
  name: 'Mr. Talib',
  role: 'Center Manager',
  contact: '+91 8447145027',
  description: 'Mr. Talib manages the day-to-day operations of Nephrocare — from patient scheduling and logistics to billing, staff coordination, and ensuring a smooth, supportive experience for every patient and family.',
  responsibilities: ['Appointment & Shift Scheduling', 'Patient Relations & Grievance', 'Billing & Insurance Coordination', 'Staff & Operational Management'],
};

export default function Team() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.section-reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="team" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14 section-reveal">
          <span className="inline-block bg-teal-50 text-teal-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4 border border-teal-100">
            Our Medical Team
          </span>
          <h2 className="text-4xl font-black text-[#0a1f44] font-montserrat mb-4">
            Meet the Specialists <br />
            <span className="gradient-text">Behind Your Care</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-base leading-relaxed font-inter">
            Our board-certified nephrologists are State Medical Council registered and bring decades of combined clinical expertise to every patient interaction.
          </p>
        </div>

        {/* Doctor Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {doctors.map((doc, i) => (
            <div
              key={doc.name}
              className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-md card-hover section-reveal"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Card Header */}
              <div className={`bg-gradient-to-br ${doc.bgColor} p-8 text-center relative`}>
                {doc.isFounder && (
                  <div className="absolute top-4 right-4 bg-teal-400/20 border border-teal-400/40 text-teal-300 text-xs font-bold px-3 py-1 rounded-full">
                    Founder
                  </div>
                )}
                {/* Avatar */}
                <div className="w-24 h-24 bg-white/15 border-4 border-white/25 rounded-full flex items-center justify-center text-5xl mx-auto mb-4 shadow-lg">
                  {doc.icon}
                </div>
                <h3 className="text-white font-black font-montserrat text-lg leading-tight">{doc.name}</h3>
                <p className="text-teal-200 text-xs mt-1 font-semibold">{doc.roleShort}</p>
              </div>

              {/* Card Body */}
              <div className="p-6">
                {/* Credentials */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="flex items-center gap-1.5 bg-teal-50 text-teal-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-teal-100">
                    <GraduationCap size={12} />
                    {doc.credentials}
                  </span>
                  <span className="flex items-center gap-1.5 bg-[#0a1f44]/5 text-[#0a1f44] text-xs font-semibold px-3 py-1.5 rounded-full border border-[#0a1f44]/10">
                    <Award size={12} />
                    State MC Registered
                  </span>
                </div>

                <p className="text-slate-500 text-xs leading-relaxed mb-5 font-inter">{doc.description}</p>

                {/* Specialties */}
                <div className="mb-5">
                  <p className="text-xs font-bold text-[#0a1f44] uppercase tracking-wide mb-2 font-montserrat flex items-center gap-1.5">
                    <Star size={12} className="text-teal-500" />
                    Clinical Focus
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {doc.specialties.map((s) => (
                      <span key={s} className="text-xs bg-slate-50 text-slate-600 px-2.5 py-1 rounded-lg border border-slate-100 font-inter">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact */}
                {doc.contact && (
                  <div className="space-y-2 pt-4 border-t border-slate-100">
                    <a href={`tel:${doc.contact.replace(/\s/g, '')}`} className="flex items-center gap-2 text-xs text-slate-600 hover:text-teal-600 transition-colors font-inter">
                      <Phone size={13} className="text-teal-500" />
                      {doc.contact}
                    </a>
                    {doc.email && (
                      <a href={`mailto:${doc.email}`} className="flex items-center gap-2 text-xs text-slate-600 hover:text-teal-600 transition-colors font-inter">
                        <Mail size={13} className="text-teal-500" />
                        {doc.email}
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Manager Card */}
        <div className="section-reveal">
          <div className="bg-gradient-to-r from-slate-50 to-teal-50 border border-slate-200 rounded-3xl p-8">
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-[#0a1f44] to-teal-700 rounded-2xl flex items-center justify-center text-4xl shadow-lg">
                  👔
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="text-[#0a1f44] font-black font-montserrat text-xl">{manager.name}</h3>
                  <span className="bg-[#0a1f44] text-white text-xs font-bold px-3 py-1 rounded-full">{manager.role}</span>
                  <a href={`tel:${manager.contact.replace(/\s/g, '')}`} className="flex items-center gap-1.5 text-teal-600 hover:text-teal-700 text-sm font-semibold">
                    <Phone size={14} />
                    {manager.contact}
                  </a>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4 font-inter">{manager.description}</p>
                <div className="flex flex-wrap gap-2">
                  {manager.responsibilities.map((r) => (
                    <span key={r} className="text-xs bg-white text-slate-700 border border-slate-200 px-3 py-1.5 rounded-full font-inter shadow-sm">
                      {r}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Credentials Note */}
        <div className="mt-10 bg-[#0a1f44] rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-4 section-reveal">
          <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
            <Award size={24} className="text-teal-400" />
          </div>
          <div>
            <h4 className="text-white font-bold font-montserrat mb-1">Credentials & Registration Verification</h4>
            <p className="text-slate-400 text-sm font-inter">
              All our nephrologists hold valid State Medical Council (SMC) registrations. NABH-aligned clinical establishment license and RO water compliance certificates are available for in-person verification at the center. Contact Mr. Talib to arrange a facility walkthrough.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
