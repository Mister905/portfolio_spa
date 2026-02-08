import React from 'react';

interface SkillsProps {}

interface SkillCategory {
  title: string;
  skills: string[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'SQL'],
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['React', 'Redux', 'Next.js', 'Node.js', 'Express.js', 'NestJS', 'Flask', 'jQuery'],
  },
  {
    title: 'Databases',
    skills: ['SQL', 'MongoDB', 'Supabase'],
  },
  {
    title: 'Cloud & DevOps',
    skills: ['AWS', 'Microsoft Azure', 'Netlify', 'Vercel', 'CI/CD'],
  },
  {
    title: 'Tools & Technologies',
    skills: [
      'Git',
      'Linux',
      'REST APIs',
      'Axios',
      'JWT',
      'Responsive Web Design',
      'HTML',
      'CSS',
      'SASS',
      'Jest',
      'Regex',
      'OOP',
      'Project Management',
      'Code Review',
      'Code Refactoring',
    ],
  },
];

const Skills: React.FC<SkillsProps> = () => {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="py-16 md:py-24 bg-heraldic-navy text-gray-100"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="skills-heading" className="text-3xl md:text-4xl font-bold mb-2 text-white">
          Technical Skills
        </h2>
        <p className="text-gray-400 mb-12 max-w-2xl">
          Programming languages, frameworks, databases, and tools from my resume.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category) => (
            <div key={category.title}>
              <h3 className="text-lg font-semibold text-accent mb-3">
                {category.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li key={skill}>
                    <span className="inline-block px-3 py-1.5 rounded-lg bg-gray-800 text-gray-200 text-sm border border-heraldic-gold/25">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
