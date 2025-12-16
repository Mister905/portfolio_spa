import React from 'react';
import { motion } from 'framer-motion';

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="about"
      className="py-20 md:py-32 bg-gray-900 text-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* @ts-expect-error - Framer Motion v6 type definitions issue */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* @ts-expect-error - Framer Motion v6 type definitions issue */}
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              About <span className="text-accent">Me</span>
            </h2>
          </motion.div>

          {/* @ts-expect-error - Framer Motion v6 type definitions issue */}
          <motion.div variants={itemVariants}>
            <div className="w-24 h-1 bg-accent mx-auto mb-12" />
          </motion.div>

          {/* @ts-expect-error - Framer Motion v6 type definitions issue */}
          <motion.div variants={containerVariants}>
            <div className="max-w-4xl mx-auto space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
              {/* @ts-expect-error - Framer Motion v6 type definitions issue */}
              <motion.p variants={itemVariants}>
                I am a full-stack web developer with over five years of experience building and maintaining scalable
                SaaS applications. I work across frontend and backend systems, with a strong focus on reliability,
                performance, and maintainable code.
              </motion.p>

              {/* @ts-expect-error - Framer Motion v6 type definitions issue */}
              <motion.p variants={itemVariants}>
                At Civix, I helped develop software used by U.S. state agencies to manage emergency disaster relief
                funding. I built React-based user interfaces, integrated backend APIs with NestJS, and designed SQL
                procedures that supported document generation and automated alerts. I regularly diagnosed and
                resolved production issues across the stack and worked closely with QA and business teams to deliver
                testable features.
              </motion.p>

              {/* @ts-expect-error - Framer Motion v6 type definitions issue */}
              <motion.p variants={itemVariants}>
                Previously, at Clearcable, I developed and supported ISP operations software used in live network
                environments. I provided on-call support, resolved service impacting issues, and worked directly
                with clients. That experience shaped how I approach development today. I ship features I can
                support, document what I build, and follow issues through to resolution.
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

