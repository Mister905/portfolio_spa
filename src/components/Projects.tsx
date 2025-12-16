import React from 'react';
import { motion } from 'framer-motion';

interface ProjectsProps {}

interface Project {
  title: string;
  subtitle: string;
  description: string;
  contributions: string[];
  techStack: string;
  liveDemo?: string;
  sourceCode?: string;
}

const Projects: React.FC<ProjectsProps> = () => {

  const projects: Project[] = [
    {
      title: 'Airbnb Tracker',
      subtitle: 'Full-Stack Listing Change Detection Platform',
      description:
        'A full-stack web application that tracks and compares changes in Airbnb listings over time, including pricing, amenities, photos, and reviews. The platform captures daily snapshots, stores historical versions, and presents side by side comparisons to highlight changes clearly.',
      contributions: [
        'Built automated data collection using Apify and scheduled NestJS cron jobs',
        'Designed a PostgreSQL schema with Prisma ORM to support versioned snapshots',
        'Developed a responsive frontend using Next.js 14 and TypeScript',
        'Implemented side by side diff views for listing comparisons',
        'Integrated Supabase authentication to secure user access',
        'Containerized development using Docker Compose',
        'Deployed the application to Vercel with a production ready pipeline',
      ],
      techStack: 'Next.js, TypeScript, NestJS, PostgreSQL, Prisma, Redux Toolkit, Tailwind CSS, Supabase, Docker',
      liveDemo: 'https://airbnb-tracker-beta.vercel.app',
      sourceCode: 'https://github.com/Mister905/airbnb_tracker',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
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
      id="projects"
      className="py-20 md:py-32 bg-gray-900 text-gray-100"
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
              Featured <span className="text-accent">Project</span>
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
          <div className="max-w-4xl mx-auto">
          {projects.map((project) => (
            // @ts-expect-error - Framer Motion v6 type definitions issue
            <motion.div
              key={project.title}
              variants={cardVariants}
            >
              <article className="bg-gray-800 rounded-lg p-8 md:p-12 border border-gray-700 hover:border-accent transition-all duration-300">
              <h3 className="text-3xl md:text-4xl font-bold mb-2 text-accent">
                {project.title}
              </h3>
              <p className="text-xl text-gray-300 mb-6">{project.subtitle}</p>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              <h4 className="text-xl font-semibold mb-4 text-accent">
                Key Contributions
              </h4>
              <ul className="space-y-2 mb-6">
                {project.contributions.map((contribution, index) => (
                  <li
                    key={index}
                    className="text-gray-300 flex items-start before:content-['▹'] before:text-accent before:mr-2 before:mt-1 before:flex-shrink-0"
                  >
                    {contribution}
                  </li>
                ))}
              </ul>

              <p className="text-gray-300 mb-6">
                <strong className="text-accent">Tech Stack:</strong>{' '}
                {project.techStack}
              </p>

              <div className="flex flex-wrap gap-4">
                {project.liveDemo && (
                  // @ts-expect-error - Framer Motion v6 type definitions issue
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-accent text-gray-900 font-semibold rounded-lg hover:bg-accent-light transition-all duration-300 inline-block"
                    >
                      Live Demo
                    </a>
                  </motion.div>
                )}
                {project.sourceCode && (
                  // @ts-expect-error - Framer Motion v6 type definitions issue
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <a
                      href={project.sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-gray-900 transition-all duration-300 inline-block"
                    >
                      Source Code
                    </a>
                  </motion.div>
                )}
              </div>
              </article>
            </motion.div>
          ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

