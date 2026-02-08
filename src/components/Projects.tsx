import React from 'react';
import triviaMasterImage from '../assets/trivia_master.png';

interface ProjectData {
  title: string;
  description: string;
  details: string;
  highlights: string[];
  techStack: string[];
  image?: string;
  liveDemo?: string;
  sourceCode?: string;
}

const PROJECTS: ProjectData[] = [
  {
    title: 'Trivia Master',
    description:
      "I'm a longtime fan of Jeopardy and trivia. Trivia Master is a single-player, Jeopardy-style web app I built for fun and practice. You sign in, create a game, and play through three rounds: Jeopardy, Double Jeopardy, and Final Jeopardy. You pick clues, reveal answers, and mark yourself right or wrong. Daily Doubles and Final Jeopardy let you wager within the rules. I wanted a project that put game logic on the server and kept the frontend focused on display and input.",
    details:
      "The backend (NestJS) owns all game rules, scoring, and wager validation. The frontend (Next.js) is a thin client. It shows what the server sends and sends actions back; it does not decide outcomes. Clue data is loaded into Postgres from TSV files via scripts, not from a live external API. Auth is Supabase; the API checks the JWT and scopes every action to the signed-in user. I run it locally with Docker Compose and deploy the backend to AWS ECS and the frontend to S3 behind CloudFront, with GitHub Actions for tests and deploys.",
    highlights: [
      'Backend-authoritative design: rules and state live in one place on the server.',
      'Clear API and schema so the frontend stays simple and testable.',
      'Full three-round flow with Daily Doubles and Final Jeopardy wagering.',
      'Documented so other engineers can follow the design.',
    ],
    techStack: [
      'Next.js 14',
      'TypeScript',
      'NestJS',
      'PostgreSQL',
      'Prisma',
      'Supabase',
      'Tailwind CSS',
      'Docker',
      'AWS ECS',
      'S3 & CloudFront',
    ],
    sourceCode: 'https://github.com/Mister905/trivia_master',
    image: triviaMasterImage,
  },
];

const ProjectImagePlaceholder: React.FC<{ title: string }> = ({ title }) => (
  <div
    className="w-full aspect-video bg-heraldic-navy rounded-lg flex items-center justify-center text-heraldic-gold/60 border border-heraldic-gold/20"
    aria-hidden="true"
  >
    <span className="text-sm font-medium">{title}</span>
  </div>
);

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-16 md:py-24 bg-heraldic-charcoal text-gray-100"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="projects-heading" className="text-3xl md:text-4xl font-bold mb-2 text-white">
          Featured Projects
        </h2>
        <p className="text-gray-400 mb-12 max-w-2xl">
          Selected work showing problem-solving, stack, and outcomes.
        </p>

        <ul className="space-y-16 md:space-y-20">
          {PROJECTS.map((project, index) => (
            <li key={project.title}>
              <article className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                <div className="w-full lg:w-2/5 shrink-0">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt=""
                      className="w-full aspect-video object-contain bg-black rounded-lg border border-heraldic-gold/25"
                    />
                  ) : (
                    <ProjectImagePlaceholder title={project.title} />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                    {project.title}
                  </h3>
                  <div className="space-y-4 text-sm md:text-base text-gray-300">
                    <p className="leading-relaxed">{project.description}</p>
                    <p className="leading-relaxed">{project.details}</p>
                    <ul className="space-y-1.5 list-disc list-inside">
                      {project.highlights.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-heraldic-navy text-gray-300 border border-heraldic-gold/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-4">
                    {project.sourceCode && (
                      <a
                        href={project.sourceCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent font-medium hover:text-accent-light focus:outline-none focus:underline"
                      >
                        GitHub →
                      </a>
                    )}
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent font-medium hover:text-accent-light focus:outline-none focus:underline"
                      >
                        Live demo →
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
