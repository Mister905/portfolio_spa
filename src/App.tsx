import React, { useEffect, useState } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";

import heraldry from "./assets/heraldry.png";
import github from "./assets/github_optimized.png";
import linkedin from "./assets/linkedin_optimized.png";
import parallax from "./assets/white_fibre.jpg";

// TypeScript interfaces
interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'other';
}

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

interface NavigationItem {
  id: string;
  label: string;
  href: string;
}

// Data
const skills: Skill[] = [
  // Programming Languages
  { name: "HTML", category: 'frontend' },
  { name: "CSS", category: 'frontend' },
  { name: "JavaScript", category: 'frontend' },
  { name: "jQuery", category: 'frontend' },
  { name: "React", category: 'frontend' },
  { name: "Redux", category: 'frontend' },
  { name: "TypeScript", category: 'frontend' },
  { name: "Node.js", category: 'backend' },
  { name: "PHP", category: 'backend' },
  { name: "Java", category: 'backend' },
  { name: "Python", category: 'backend' },
  { name: "Perl", category: 'backend' },
  { name: "ColdFusion", category: 'backend' },
  { name: "SQL", category: 'backend' },
  { name: "MongoDB", category: 'backend' },
  // Tools & Technologies
  { name: "Git", category: 'tools' },
  { name: "Bash", category: 'tools' },
  { name: "Linux", category: 'tools' },
  // General Skills
  { name: "Collaboration", category: 'other' },
  { name: "Technical Documentation", category: 'other' },
  { name: "Troubleshooting", category: 'other' },
  { name: "User Experience (UX) Design", category: 'other' },
];

const projects: Project[] = [
  {
    id: 1,
    title: "Pokemon App",
    description: "Full-stack Pokemon application with user authentication, favorites system, and notes management. Features Redux state management, Docker containerization, and comprehensive loading states. Built with modern React patterns and deployed on AWS EC2.",
    technologies: ["React", "TypeScript", "NestJS", "Redux", "Docker", "AWS EC2", "SCSS", "Materialize CSS", "Formik", "Vite"],
    githubUrl: "https://github.com/Mister905/pokemon_react_typescript_nest",
    liveUrl: "http://44.222.182.174:5173",
  },
];

const navigationItems: NavigationItem[] = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About", href: "#about" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "contact", label: "Contact", href: "#contact" },
];

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const elems = document.querySelectorAll(".parallax");
    M.Parallax.init(elems);

    // Smooth scrolling for navigation
    const handleSmoothScroll = (e: Event) => {
      e.preventDefault();
      const target = e.target as HTMLAnchorElement;
      const href = target.getAttribute("href");
      if (href && href.startsWith("#")) {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    const navLinks = document.querySelectorAll("a[href^='#']");
    navLinks.forEach(link => {
      link.addEventListener("click", handleSmoothScroll);
    });

    // Scroll spy for active section
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPos = window.scrollY + 100;

      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute("id");

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
          setActiveSection(sectionId || "home");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      navLinks.forEach(link => {
        link.removeEventListener("click", handleSmoothScroll);
      });
    };
  }, []);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="modern-portfolio">
      {/* Navigation */}
      <nav className="navbar-fixed">
        <div className="nav-wrapper container">
          <a href="#home" className="brand-logo">
            <img src={heraldry} alt="James McCarthy" className="nav-logo" />
            <span className="brand-text">James McCarthy</span>
          </a>
          <button className="sidenav-trigger" onClick={toggleMenu} type="button">
            <i className="material-icons">menu</i>
          </button>
          <ul className="right hide-on-med-and-down">
            {navigationItems.map((item) => (
              <li key={item.id}>
                <a 
                  href={item.href} 
                  className={activeSection === item.id ? "active" : ""}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <ul className={`sidenav ${isMenuOpen ? "sidenav-open" : ""}`} id="mobile-nav">
        {navigationItems.map((item) => (
          <li key={item.id}>
            <a href={item.href} onClick={toggleMenu}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="parallax-container hero-parallax">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                <span className="name-highlight">James McCarthy</span>
              </h1>
              <h2 className="hero-subtitle">
                Full-Stack Software Developer
              </h2>
              <p className="hero-description">
                Crafting robust applications and user-focused interfaces in Hamilton, ON
              </p>
              <div className="hero-buttons">
                <a href="#projects" className="btn btn-primary">
                  View My Work
                </a>
                <a href="#contact" className="btn btn-secondary">
                  Get In Touch
                </a>
              </div>
            </div>
            <div className="hero-image">
              <img src={heraldry} alt="James McCarthy" className="profile-image" />
            </div>
          </div>
          <div className="parallax">
            <img src={parallax} alt="Background" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="container">
          <div className="row">
            <div className="col s12 m8 offset-m2">
              <h2 className="section-title">About Me</h2>
              <div className="about-content">
                <p className="about-text">
                  I'm a full-stack developer with several years of experience building and maintaining 
                  software for public-sector and telecom platforms. I focus on performance, maintainability, 
                  and user experience, with expertise spanning from frontend React applications to robust 
                  backend services using modern technologies like NestJS, SQL, and legacy systems.
                </p>
                <p className="about-text">
                  My experience includes developing SaaS tools for U.S. state agencies managing disaster 
                  relief funding, as well as full-stack software for ISP operations including service 
                  provisioning, broadband metrics, and hardware inventory. I've delivered on-call support 
                  to international clients, resolving time-sensitive bugs and access issues while building 
                  RESTful APIs and interactive data visualizations for monitoring network traffic and performance.
                </p>
                <p className="about-text">
                  I value clear communication, curiosity, and thoughtful collaboration. I look for ways 
                  to improve my craft and support teammates, whether through code reviews, documentation, 
                  or asking good questions. When I'm not coding, you'll find me exploring new technologies 
                  or enjoying the beautiful landscapes around Hamilton, ON.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills-section">
        <div className="container">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-grid">
            {['frontend', 'backend', 'tools', 'other'].map(category => (
              <div key={category} className="skill-category">
                <h3 className="category-title">
                  {category === 'other' ? 'General Skills' : category.charAt(0).toUpperCase() + category.slice(1)}
                </h3>
                <div className="skills-list">
                  {skills
                    .filter(skill => skill.category === category)
                    .map((skill, index) => (
                      <div key={skill.name} className="skill-item">
                        <span className="skill-name">{skill.name}</span>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects-section">
        <div className="container">
          <h2 className="section-title">Featured Project</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <i className="material-icons">code</i>
                        Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <i className="material-icons">launch</i>
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <h2 className="section-title">Let's Connect</h2>
          <div className="row">
            <div className="col s12 m8 offset-m2">
              <div className="contact-content">
                <p className="contact-text">
                  I'm always interested in new opportunities and exciting projects. 
                  Let's discuss how we can work together!
                </p>
                <div className="contact-info">
                  <div className="contact-item">
                    <i className="material-icons">email</i>
                    <span>jjm90591@gmail.com</span>
                  </div>
                  <div className="contact-item">
                    <i className="material-icons">location_on</i>
                    <span>Hamilton, ON, Canada</span>
                  </div>
                </div>
                <div className="social-links">
                  <a 
                    href="https://github.com/Mister905?tab=repositories" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <img src={github} alt="GitHub" />
                    <span>GitHub</span>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/james-mccarthy-159230199/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <img src={linkedin} alt="LinkedIn" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="page-footer">
        <div className="container">
          <div className="footer-content">
            <p>&copy; {new Date().getFullYear()} James McCarthy. All rights reserved.</p>
            <p>Built with React, TypeScript, and ❤️</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
