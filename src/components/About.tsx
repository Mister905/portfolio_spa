import React from 'react';

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-16 md:py-24 bg-heraldic-charcoal text-gray-100"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="about-heading" className="text-3xl md:text-4xl font-bold mb-2 text-white">
          About
        </h2>
        <p className="text-gray-400 mb-10 max-w-2xl">
          How I work and what I care about.
        </p>

        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            I’m a full-stack developer who likes taking complicated ideas and turning
            them into software that works well and is easy to understand. Over the past
            several years, I’ve built web applications using tools like React,
            TypeScript, Node.js, and SQL, with a focus on making things clear,
            reliable, and pleasant to use.
          </p>
          <p>
            I enjoy working across the whole system, from shaping how data is stored
            and shared to building interfaces that feel straightforward and responsive.
            I care about writing code that is easy to maintain, making sensible
            decisions along the way, and leaving things in better shape than I found
            them.
          </p>
          <p>
            Whether I’m working on my own or with a team, I focus on steady progress,
            clear communication, and building software that solves real problems.
          </p>
          <p>
            Outside of work I follow football, lift weights, read about politics and
            history, enjoy film, and play guitar.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
