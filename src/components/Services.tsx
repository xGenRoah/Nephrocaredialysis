import { useEffect, useRef } from 'react';
import { Activity, Utensils, Zap, FileText, CreditCard, BarChart3 } from 'lucide-react';

const services = [
  {
    icon: <Activity size={28} className="text-teal-500" />,
    title: 'ICU-Backup & Emergency Dialysis',
    badge: 'Critical Care',
    badgeColor: 'bg-red-50 text-red-600 border-red-100',
    description: 'Emergencies require immediate action. Our emergency dialysis bays are always ready, backed by Adarsh Hospital\'s full ICU infrastructure located on the lower floors of the same building.',
    features: [
      'Round-the-clock emergency availability',
      'Direct escalation to ICU if required',
      'On-call nephrologist response within 15 minutes',
      'Rapid-access dialysis for acute kidney injury',
    ],
    image: 'https://images.pexels.com/photos/20186736/pexels-photo-20186736.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
  },
  {
    icon: <Utensils size={28} className="text-teal-500" />,
    title: 'Pre-Dialysis Counseling & Dietetics',
    badge: 'Nutrition Care',
    badgeColor: 'bg-teal-50 text-teal-700 border-teal-100',
    description: 'What you eat between sessions is as critical as the dialysis itself. Our nephrology-certified dietitian designs individualized meal plans to manage potassium, phosphorus, fluid, and protein intake.',
    features: [
      'Personalized renal diet planning',
      'Pre & post-dialysis nutrition assessment',
      'Lab-linked dietary adjustments monthly',
      'Family education on safe food choices',
    ],
    image: 'https://images.pexels.com/photos/7579823/pexels-photo-7579823.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
  },
];

const additionalServices = [
  {
    icon: <FileText size={20} className="text-teal-600" />,
    title: 'TPA & Insurance Panel',
    description: 'We assist with TPA claims, Ayushman Bharat, and major private health insurance reimbursements. Our billing team handles the paperwork.',
  },
  {
    icon: <BarChart3 size={20} className="text-teal-600" />,
    title: 'Patient Medical Dashboard',
    description: 'Secure login portal where patients can download case sheets, pre/post weight charts, lab reports (KFT, Hemoglobin), and dialysis history.',
  },
  {
    icon: <CreditCard size={20} className="text-teal-600" />,
    title: 'Quota / Package Management',
    description: 'Purchase monthly or quarterly session blocks at structured rates. Track remaining sessions, get automated reminders and digital receipts.',
  },
  {
    icon: <Zap size={20} className="text-teal-600" />,
    title: 'Lab & Investigation Support',
    description: 'In-center blood draws with KFT, CBC, and iron studies. Coordinated with Adarsh Hospital pathology for faster turnaround and linked reporting.',
  },
];

export default function Services() {
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
    <section id="services" className="py-20 bg-slate-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14 section-reveal">
          <span className="inline-block bg-[#0a1f44]/5 text-[#0a1f44] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4 border border-[#0a1f44]/10">
            Our Services
          </span>
          <h2 className="text-4xl font-black text-[#0a1f44] font-montserrat mb-4">
            Comprehensive Kidney <br />
            <span className="gradient-text">Care Services</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-base leading-relaxed font-inter">
            From emergency interventions to long-term chronic disease management, Nephrocare covers every dimension of kidney health under one specialized roof.
          </p>
        </div>

        {/* Main Services */}
        <div className="space-y-8 mb-16">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`bg-white rounded-3xl overflow-hidden shadow-md border border-slate-100 section-reveal card-hover flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
            >
              {/* Image */}
              <div className="lg:w-2/5 relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-56 lg:h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f44]/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="lg:w-3/5 p-8 lg:p-10 flex flex-col justify-center">
                <div className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border w-fit mb-4 ${service.badgeColor}`}>
                  {service.badge}
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center border border-teal-100">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-black text-[#0a1f44] font-montserrat">{service.title}</h3>
                </div>

                <p className="text-slate-500 text-sm leading-relaxed mb-6 font-inter">{service.description}</p>

                <ul className="space-y-2.5">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <span className="w-5 h-5 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="w-2 h-2 bg-teal-600 rounded-full" />
                      </span>
                      <span className="text-slate-600 text-sm font-inter">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                  className="mt-7 self-start flex items-center gap-2 bg-[#0a1f44] hover:bg-[#0d2a5c] text-white text-sm font-semibold px-6 py-3 rounded-xl transition-all"
                >
                  Book This Service →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services Grid */}
        <div className="section-reveal">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-black text-[#0a1f44] font-montserrat">
              Additional <span className="text-teal-600">Support Services</span>
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {additionalServices.map((service, i) => (
              <div
                key={service.title}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm card-hover text-center section-reveal"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mb-4 border border-teal-100 mx-auto">
                  {service.icon}
                </div>
                <h4 className="font-bold text-[#0a1f44] text-sm font-montserrat mb-2">{service.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed font-inter">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Insurance Banner */}
        <div className="mt-12 bg-gradient-to-r from-teal-600 to-teal-700 rounded-3xl p-8 section-reveal">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-white font-black text-xl font-montserrat mb-2">TPA & Insurance Panel Accepted</h3>
              <p className="text-teal-100 text-sm font-inter max-w-xl">
                We work with major health insurance providers, corporate TPA panels, and Ayushman Bharat (PMJAY) where applicable. Our billing team will assist you with claim paperwork.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-end">
              {['Ayushman Bharat', 'CGHS', 'Medi-Assist', 'Star Health', 'HDFC ERGO', 'New India'].map((ins) => (
                <span key={ins} className="bg-white/15 border border-white/25 text-white text-xs font-semibold px-4 py-2 rounded-full whitespace-nowrap">
                  {ins}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
