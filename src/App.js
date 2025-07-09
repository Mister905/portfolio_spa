import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";

import heraldry from "./assets/heraldry.webp";
import github from "./assets/github_optimized.png";
import linkedin from "./assets/linkedin_optimized.png";
import parallax from "./assets/parallax.jpg";

const skillsLeft = [
  "HTML",
  "JavaScript",
  "React",
  "JWT",
  "TypeScript",
  "Java",
  "Perl",
  "SQL",
  "Git",
  "SCSS",
];
const skillsRight = [
  "CSS",
  "jQuery",
  "Redux",
  "Node",
  "PHP",
  "Python",
  "Bash",
  "MongoDB",
  "Linux",
  "Photoshop",
];

const App = () => {
  useEffect(() => {
    const elems = document.querySelectorAll(".parallax");
    M.Parallax.init(elems);
  }, []);

  return (
    <div>
      {/* Hero Section with Parallax */}
      <div className="parallax-container">
        <div
          className="container center-align white-text"
          style={{ paddingTop: "100px", paddingBottom: "100px" }}
        >
          <img
            src={heraldry}
            className="responsive-img circle"
            alt="James McCarthy Logo"
            style={{ maxWidth: "150px", marginBottom: "20px" }}
          />
          <h2 className="">James McCarthy</h2>
          <p className="flow-text">
            Results-Driven Software Developer in Hamilton, ON
          </p>
        </div>
        <div className="parallax">
          <img src={parallax} alt="Parallax background" />
        </div>
      </div>

      {/* About Section */}
      <div className="section container" id="about">
        <h4 className="red-text text-accent-2">About Me</h4>
        <p>
          I’m a full-stack web developer with experience delivering SaaS
          solutions for critical public-sector systems. I’m passionate about
          building robust applications, optimizing backend processes, and
          creating user-focused interfaces. I take pride in writing clean,
          maintainable code and collaborating with teams to drive projects
          forward.
        </p>
      </div>

      {/* Skills Section */}
      <div className="section container" id="skills">
        <h4 className="red-text text-accent-2">Skills</h4>
        <div className="row">
          <div className="col s12 m6">
            <ul className="collection">
              {skillsLeft.map((skill, i) => (
                <li key={i} className="collection-item">
                  {skill}
                  <div className="secondary-content red-text">
                    <i className="material-icons">check</i>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="col s12 m6">
            <ul className="collection">
              {skillsRight.map((skill, i) => (
                <li key={i} className="collection-item">
                  {skill}
                  <div className="secondary-content red-text">
                    <i className="material-icons">check</i>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="section black white-text" id="contact">
        <div className="container">
          <h4 className="red-text text-accent-2">Contact Me</h4>
          <div className="row center-align">
            <div className="col s6 m3 offset-m3">
              <a
                href="https://github.com/Mister905?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} className="responsive-img" alt="GitHub" />
              </a>
            </div>
            <div className="col s6 m3">
              <a
                href="https://www.linkedin.com/in/james-mccarthy-159230199/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} className="responsive-img" alt="LinkedIn" />
              </a>
            </div>
          </div>
          <p className="center-align">Email: jjm90591@gmail.com</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="page-footer black">
        <div className="container center-align red-text">
          © {new Date().getFullYear()} James McCarthy
        </div>
      </footer>
    </div>
  );
};

export default App;
