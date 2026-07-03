@import "tailwindcss";

@layer base {
  :root {
    --navy: #0a1f44;
    --navy-dark: #061230;
    --teal: #0d9488;
    --teal-light: #14b8a6;
    --teal-dark: #0f766e;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', sans-serif;
    background-color: #f8fafc;
    color: #1e293b;
    overflow-x: hidden;
  }

  h1, h2, h3, h4 {
    font-family: 'Montserrat', sans-serif;
  }
}

@layer utilities {
  .font-montserrat {
    font-family: 'Montserrat', sans-serif;
  }
  .font-inter {
    font-family: 'Inter', sans-serif;
  }
}

/* Smooth scrollbar */
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: #f1f5f9;
}
::-webkit-scrollbar-thumb {
  background: #0d9488;
  border-radius: 3px;
}
::-webkit-scrollbar-thumb:hover {
  background: #0a1f44;
}

/* Hero slider animations */
@keyframes fadeIn {
  from { opacity: 0; transform: scale(1.05); }
  to   { opacity: 1; transform: scale(1); }
}
@keyframes slideUp {
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes countUp {
  from { opacity: 0; }
  to   { opacity: 1; }
}
@keyframes pulse-ring {
  0% { transform: scale(0.85); opacity: 1; }
  70% { transform: scale(1.2); opacity: 0; }
  100% { transform: scale(0.85); opacity: 0; }
}

.hero-slide-active {
  animation: fadeIn 1.2s ease-out forwards;
}
.slide-up {
  animation: slideUp 0.8s ease-out forwards;
}
.pulse-ring {
  animation: pulse-ring 2s ease-out infinite;
}

/* Glass card effect */
.glass-card {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.15);
}

/* Gradient text */
.gradient-text {
  background: linear-gradient(135deg, #0d9488, #14b8a6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Gradient borders */
.gradient-border {
  position: relative;
}
.gradient-border::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 3px;
  background: linear-gradient(90deg, #0d9488, #0a1f44);
  border-radius: 2px;
}

/* Form inputs */
.form-input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.5px solid #e2e8f0;
  border-radius: 0.5rem;
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  color: #1e293b;
  background: #fff;
  transition: border-color 0.2s, box-shadow 0.2s;
  outline: none;
}
.form-input:focus {
  border-color: #0d9488;
  box-shadow: 0 0 0 3px rgba(13, 148, 136, 0.12);
}

/* Shimmer loading */
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

/* Nav link hover */
.nav-link {
  position: relative;
  transition: color 0.2s;
}
.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px; left: 0; right: 0;
  height: 2px;
  background: #0d9488;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}
.nav-link:hover::after,
.nav-link.active::after {
  transform: scaleX(1);
}

/* Card hover lift */
.card-hover {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card-hover:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(10, 31, 68, 0.12);
}

/* Smooth section transitions */
.section-reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.section-reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
