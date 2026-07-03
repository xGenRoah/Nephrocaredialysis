import { useEffect, useRef } from 'react';
import { CheckCircle, Droplets, Zap, Heart, Shield, Users, Activity } from 'lucide-react';

const whyUs = [
  {
    icon: <Droplets size={22} className="text-teal-500" />,
    title: 'Certified RO Water Filtration',
    description: 'Our dialysis-grade RO water plant is tested daily. TDS levels are meticulously monitored and logged — because for kidney patients, water purity is life.',
  },
  {
    icon: <Shield size={22} className="text-teal-500" />,
    title: 'Zero-Infection Protocol',
    description: 'Single-use dialysis consumables, hospital-grade sterilization between every session, and NABH-aligned infection control standards maintained at all times.',
  },
  {
    icon: <Zap size={22} className="text-teal-500" />,
    title: '24/7 Emergency Dialysis',
    description: 'Emergencies don\'t wait. Our team is on-call round the clock, with ICU-backup support through Adarsh Hospital\'s emergency infrastructure on the lower floors.',
  },
  {
    icon: <Heart size={22} className="text-teal-500" />,
    title: 'Personalised Care Plans',
    description: 'No two kidneys are alike. Our nephrologists create individualized dialysis prescriptions, adjusted with every session based on real-time clinical data.',
  },
  {
    icon: <Users size={22} className="text-teal-500" />,
    title: 'Dedicated Patient Support',
    description: 'From first consultation to ongoing care, our patient coordinators ensure seamless scheduling, insurance navigation, and compassionate family communication.',
  },
  {
    icon: <Activity size={22} className="text-teal-500" />,
    title: 'Integrated ICU Backup',
    description: 'Located within Adarsh Hospital, we provide direct access to full ICU facilities — ensuring swift escalation if any complication arises during treatment.',
  },
];

const roStats = [
  { value: '< 5 ppm', label: 'TDS Level Today', color: 'text-teal-600' },
  { value: '0 CFU', label: 'Bacterial Count', color: 'text-teal-600' },
  { value: '7.2 pH', label: 'Water pH Balance', color: 'text-teal-600' },
  { value: '✓ Pass', label: 'Daily QC Status', color: 'text-green-600' },
];

export default function About() {
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
    <section id="about" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14 section-reveal">
          <span className="inline-block bg-teal-50 text-teal-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4 border border-teal-100">
            Why Choose Nephrocare
          </span>
          <h2 className="text-4xl font-black text-[#0a1f44] font-montserrat mb-4">
            Delhi's Most Trusted <br />
            <span className="gradient-text">Kidney Care Center</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-base leading-relaxed font-inter">
            Nephrocare was founded with one mission — to provide every kidney patient in Delhi with world-class dialysis care in a safe, comfortable, and compassionate environment.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: Image with overlay card */}
          <div className="relative section-reveal">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/8460125/pexels-photo-8460125.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800"
                alt="Patient care at Nephrocare"
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f44]/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white font-bold text-lg font-montserrat">"Every patient deserves the best care — that's the Nephrocare promise."</p>
                <p className="text-teal-300 text-sm mt-1">— Dr. Fahad, Founder & VC, Nephrocare</p>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-[#0a1f44] text-white rounded-2xl px-5 py-4 shadow-xl">
              <div className="text-3xl font-black font-montserrat text-teal-400">3rd</div>
              <div className="text-xs text-slate-300 mt-0.5">Floor, Adarsh Hospital</div>
              <div className="text-xs text-slate-300">Panchsheel Vihar, New Delhi</div>
            </div>
          </div>

          {/* Right: About text + checklist */}
          <div className="section-reveal">
            <h3 className="text-2xl font-black text-[#0a1f44] font-montserrat mb-4">
              A Center Built on <span className="text-teal-600">Clinical Excellence</span>
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6 font-inter">
              Nephrocare is a specialized kidney care facility within Adarsh Hospital, Panchsheel Vihar. We offer comprehensive nephrology services — from routine maintenance dialysis to emergency interventions — supported by a team of board-certified nephrologists and experienced clinical staff.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed mb-8 font-inter">
              Our facility was designed around patient comfort and clinical safety. Each dialysis bay is private, equipped with advanced Fresenius machines, and maintained under strict infection control protocols. We believe transparency builds trust — which is why we publish our daily RO water quality logs and keep our credentials open for every patient to verify.
            </p>

            <div className="space-y-3">
              {[
                'State Medical Council registered nephrologists',
                'Dialysis-grade RO water — tested & logged daily',
                'Adarsh Hospital ICU backup — same building',
                'NABH-aligned clinical protocols',
                'Transparent, itemized billing with GST receipts',
                'TPA / Insurance coordination available',
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-teal-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-sm font-inter">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RO Water Quality Widget */}
        <div className="bg-gradient-to-br from-[#0a1f44] to-[#0d2a5c] rounded-3xl p-8 section-reveal">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-teal-500/20 rounded-xl flex items-center justify-center">
                <Droplets size={22} className="text-teal-400" />
              </div>
              <div>
                <h3 className="text-white font-bold font-montserrat text-lg">RO Water Quality Live Log</h3>
                <p className="text-slate-400 text-xs font-inter">Updated daily — for every dialysis patient, water purity is life</p>
              </div>
            </div>
            <div className="sm:ml-auto flex items-center gap-2 bg-green-500/20 border border-green-500/30 text-green-300 text-xs font-semibold px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              All Parameters Normal
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {roStats.map((stat) => (
              <div key={stat.label} className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
                <div className={`text-2xl font-black font-montserrat ${stat.color} mb-1`}>{stat.value}</div>
                <div className="text-slate-400 text-xs font-inter">{stat.label}</div>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-xs mt-5 font-inter text-center">
            * RO water quality parameters are tested by our biomedical team at the start of each shift. Records are available for inspection on request.
          </p>
        </div>

        {/* Why Us Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {whyUs.map((item, i) => (
            <div
              key={item.title}
              className="bg-slate-50 border border-slate-100 rounded-2xl p-6 card-hover section-reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-11 h-11 bg-teal-50 rounded-xl flex items-center justify-center mb-4 border border-teal-100">
                {item.icon}
              </div>
              <h4 className="font-bold text-[#0a1f44] text-sm font-montserrat mb-2">{item.title}</h4>
              <p className="text-slate-500 text-xs leading-relaxed font-inter">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
