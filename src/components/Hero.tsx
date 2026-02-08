import React from 'react';
import headshot from '../assets/headshot.jpg';
import heraldry from '../assets/heraldry.png';

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative min-h-screen flex items-center justify-center bg-heraldic-charcoal px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <img
          src={heraldry}
          alt=""
          className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 mb-8 object-contain drop-shadow-lg"
          width={224}
          height={224}
          aria-hidden="true"
        />
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14 w-full">
          <div className="shrink-0">
          <img
            src={headshot}
            alt="James McCarthy"
            className="w-48 h-48 sm:w-56 sm:h-56 rounded-full object-cover border-4 border-heraldic-gold/30 shadow-xl"
            width={224}
            height={224}
          />
        </div>
        <div className="text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3">
            James McCarthy
          </h1>
          <p className="text-xl sm:text-2xl text-accent font-medium mb-4">
            Full-Stack Software Engineer
          </p>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0">
            I build and maintain reliable web applications that solve real problems, from
            government disaster-relief systems to live telecom operations. I focus on
            clarity, maintainability, and supporting what I ship.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button
              type="button"
              onClick={() => scrollToSection('projects')}
              className="w-full sm:w-auto px-8 py-3.5 bg-accent text-heraldic-charcoal font-semibold rounded-lg hover:bg-accent-light focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-heraldic-charcoal transition-colors"
            >
              View Work
            </button>
            <a
              href="/resume_2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 border-2 border-gray-500 text-gray-200 font-semibold rounded-lg hover:border-accent hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-heraldic-charcoal transition-colors text-center"
            >
              Resume
            </a>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
