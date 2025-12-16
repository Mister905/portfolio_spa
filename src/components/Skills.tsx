import React from 'react';
import { motion } from 'framer-motion';

interface SkillsProps {}

interface SkillCategory {
  title: string;
  skills: string[];
}

const Skills: React.FC<SkillsProps> = () => {

  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      skills: ['JavaScript', 'TypeScript', 'React', 'Redux', 'Next.js', 'HTML', 'CSS', 'SASS', 'Responsive Web Design'],
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'NestJS', 'Flask', 'SQL', 'MongoDB', 'Supabase', 'REST APIs', 'JWT Authentication'],
    },
    {
      title: 'Cloud and DevOps',
      skills: ['AWS', 'Microsoft Azure', 'Netlify', 'Vercel', 'CI/CD', 'Docker'],
    },
    {
      title: 'Tools and Practices',
      skills: ['Git', 'Linux', 'Jest', 'API Debugging', 'Code Review', 'Refactoring', 'Technical Documentation', 'Production Support'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
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
      id="skills"
      className="py-20 md:py-32 bg-gray-800 text-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* @ts-expect-error - Framer Motion v6 type definitions issue */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Skills and <span className="text-accent">Technologies</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto" />
          </motion.div>
        </div>

        {/* @ts-expect-error - Framer Motion v6 type definitions issue */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            // @ts-expect-error - Framer Motion v6 type definitions issue
            <motion.div
              key={category.title}
              variants={cardVariants}
            >
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-700 hover:border-accent transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4 text-accent">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-gray-300 flex items-center before:content-['▹'] before:text-accent before:mr-2 before:text-sm"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

