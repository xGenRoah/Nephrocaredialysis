import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Phone, CalendarDays, Shield, Clock, Award } from 'lucide-react';

const slides = [
  {
    image: 'https://images.pexels.com/photos/33216690/pexels-photo-33216690.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600',
    tag: 'State-of-the-Art Facility',
    title: 'Advanced Kidney Care',
    subtitle: 'You Can Trust',
    description: 'New Delhi\'s premier nephrology & dialysis center delivering compassionate, evidence-based kidney care with the highest clinical standards.',
  },
  {
    image: 'https://images.pexels.com/photos/6129441/pexels-photo-6129441.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600',
    tag: 'Expert Nephrologists',
    title: 'Care by Certified',
    subtitle: 'Kidney Specialists',
    description: 'Our board-certified nephrologists bring decades of combined experience, ensuring every patient receives a personalized and medically sound treatment plan.',
  },
  {
    image: 'https://images.pexels.com/photos/20186736/pexels-photo-20186736.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600',
    tag: '24/7 Emergency Dialysis',
    title: 'Always Here When',
    subtitle: 'You Need Us Most',
    description: 'Round-the-clock emergency dialysis services with ICU-backup support through Adarsh Hospital\'s world-class infrastructure, right on-site.',
  },
  {
    image: 'https://images.pexels.com/photos/7659869/pexels-photo-7659869.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600',
    tag: 'Personalised Patient Care',
    title: 'Your Health, Our',
    subtitle: 'Highest Priority',
    description: 'From pre-dialysis counseling to nutritional planning, we guide every patient through their kidney care journey with empathy and clinical excellence.',
  },
  {
    image: 'https://images.pexels.com/photos/9574399/pexels-photo-9574399.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600',
    tag: 'Zero-Infection Protocols',
    title: 'Certified Clean &',
    subtitle: 'Sterilized Environment',
    description: 'Strict sterilization protocols, RO water filtration systems, and single-use dialysis equipment — all designed to eliminate infection risk completely.',
  },
];

const stats = [
  { icon: '💉', value: '15,000+', label: 'Dialysis Sessions' },
  { icon: '👨‍⚕️', value: '3', label: 'Expert Nephrologists' },
  { icon: '🛡️', value: '0%', label: 'Infection Rate' },
  { icon: '⏰', value: '24/7', label: 'Emergency Care' },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(index);
    setTimeout(() => setIsTransitioning(false), 700);
  }, [isTransitioning]);

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5500);
    return () => clearInterval(timer);
  }, [next]);

  const handleBooking = () => {
    const el = document.getElementById('booking');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative w-full overflow-hidden" style={{ height: 'calc(100vh - 100px)', minHeight: '600px', maxHeight: '860px' }}>
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          <img
            src={slide.image}
            alt={slide.tag}
            className="w-full h-full object-cover"
            loading={i === 0 ? 'eager' : 'lazy'}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f44]/90 via-[#0a1f44]/65 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f44]/60 via-transparent to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-2xl">
          {/* Tag */}
          <div
            key={`tag-${current}`}
            className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-400/40 text-teal-300 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-5 slide-up"
          >
            <span className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse" />
            {slides[current].tag}
          </div>

          {/* Title */}
          <h1
            key={`title-${current}`}
            className="text-white font-black font-montserrat leading-tight mb-4 slide-up"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', animationDelay: '0.1s' }}
          >
            {slides[current].title}
            <br />
            <span className="text-teal-400">{slides[current].subtitle}</span>
          </h1>

          {/* Description */}
          <p
            key={`desc-${current}`}
            className="text-slate-200 text-base sm:text-lg leading-relaxed mb-8 max-w-lg slide-up font-inter"
            style={{ animationDelay: '0.2s' }}
          >
            {slides[current].description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 slide-up" style={{ animationDelay: '0.3s' }}>
            <button
              onClick={handleBooking}
              className="flex items-center gap-2.5 bg-teal-500 hover:bg-teal-400 text-white font-bold text-sm px-7 py-4 rounded-2xl transition-all shadow-lg shadow-teal-500/30 hover:shadow-teal-400/40 hover:scale-105"
            >
              <CalendarDays size={18} />
              Book a Dialysis Session
            </button>
            <a
              href="tel:+916398311550"
              className="flex items-center gap-2.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-sm px-7 py-4 rounded-2xl transition-all backdrop-blur-sm hover:scale-105"
            >
              <Phone size={18} />
              Emergency Contact
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-4 mt-8">
            {[
              { icon: <Shield size={13} />, text: 'NABH Compliant' },
              { icon: <Award size={13} />, text: 'State Registered' },
              { icon: <Clock size={13} />, text: '24/7 Available' },
            ].map((badge) => (
              <div key={badge.text} className="flex items-center gap-1.5 text-slate-300 text-xs font-medium">
                <span className="text-teal-400">{badge.icon}</span>
                {badge.text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide Controls */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-3 hidden sm:flex">
        <button
          onClick={prev}
          className="w-10 h-10 bg-white/10 hover:bg-white/25 border border-white/20 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all hover:scale-110"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          className="w-10 h-10 bg-white/10 hover:bg-white/25 border border-white/20 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all hover:scale-110"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`transition-all duration-300 rounded-full ${i === current ? 'w-8 h-2.5 bg-teal-400' : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'}`}
          />
        ))}
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-30">
        <div className="bg-white/10 backdrop-blur-md border-t border-white/15">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/15">
              {stats.map((stat) => (
                <div key={stat.label} className="py-4 px-6 text-center">
                  <div className="text-xl mb-0.5">{stat.icon}</div>
                  <div className="text-white font-black text-xl font-montserrat">{stat.value}</div>
                  <div className="text-slate-300 text-xs font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
