import heraldry from "./assets/heraldry.webp";
import github from "./assets/github_optimized.png";
import linkedin from "./assets/linkedin_optimized.png";
import jeopardy from "./assets/jeopardy.png";
import mernbook from "./assets/mernbook.png";

function App() {
  return (
    <div className="App">
      <div className="pimg1">
        <div className="ptext ptext-first">
          <div className="border">
            <img src={heraldry} className="logo" alt="James McCarthy" />
            <div className="fw-bold name">James McCarthy</div>
            <div className="fw-bold">Software Developer</div>
          </div>
        </div>
      </div>

      <section className="section section-light">
        <div className="row social-media-row">
          <h1 className="fs-2rem fw-bold">About Me</h1>
          <p>I'm a Canadian software developer based in Hamilton, Ontario.</p>
          <p>
            I am passionate about programming and full stack web development.
          </p>
        </div>
      </section>

      <div className="pimg2"></div>

      <section className="section section-dark">
        <div className="row social-media-row">
          <div className="col m2 offset-m4 s6">
            <a href="https://github.com/Mister905?tab=repositories">
              <img src={github} className="responsive-img" alt="GitHub" />
            </a>
          </div>
          <div className="col m2 s6">
            <a href="https://www.linkedin.com/in/james-mccarthy-159230199/">
              <img src={linkedin} className="responsive-img" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </section>

      <div className="pimg3">
        <div className="ptext"></div>
      </div>

      <section className="section section-dark">
        <div className="row skills-row">
          <div className="row">
            <div className="col m12 s12 center-align">
              <h1 className="fs-2rem fw-bold">Programming Skills</h1>
            </div>
          </div>
          <div className="row">
            <div className="col m3 offset-m3 s12">
              <ul className="collection">
                <li className="collection-item collection-item-custom">
                  HTML
                  <div className="secondary-content">
                    <i className="material-icons">check</i>
                  </div>
                </li>
                <li className="collection-item collection-item-custom">
                  JavaScript
                  <div className="secondary-content">
                    <i className="material-icons">check</i>
                  </div>
                </li>
                <li className="collection-item collection-item-custom">
                  React
                  <div className="secondary-content">
                    <i className="material-icons">check</i>
                  </div>
                </li>
                <li className="collection-item collection-item-custom">
                  JWT
                  <div className="secondary-content">
                    <i className="material-icons">check</i>
                  </div>
                </li>
                <li className="collection-item collection-item-custom">
                  TypeScript
                  <div className="secondary-content">
                    <i className="material-icons">check</i>
                  </div>
                </li>
                <li className="collection-item collection-item-custom">
                  Java
                  <div className="secondary-content">
                    <i className="material-icons">check</i>
                  </div>
                </li>
                <li className="collection-item collection-item-custom">
                  Perl
                  <div className="secondary-content">
                    <i className="material-icons">check</i>
                  </div>
                </li>
                <li className="collection-item collection-item-custom">
                  SQL
                  <div className="secondary-content">
                    <i className="material-icons">check</i>
                  </div>
                </li>
                <li className="collection-item collection-item-custom">
                  Git
                  <div className="secondary-content">
                    <i className="material-icons">check</i>
                  </div>
                </li>
                <li className="collection-item collection-item-custom">
                  SCSS
                  <div className="secondary-content">
                    <i className="material-icons">check</i>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col m3 s12">
              <ul className="collection">
                <li className="collection-item collection-item-custom">
                  CSS
                  <div className="secondary-content">
                    <i className="material-icons">check</i>
                  </div>
                </li>
                <li className="collection-item collection-item-custom">
                  jQuery
                  <div className="secondary-content">
                    <i className="material-icons">check</i>
                  </div>
                </li>
                <li className="collection-item collection-item-custom">
                  Redux
                  <div className="secondary-content">
                    <i className="material-icons">check</i>
                  </div>
                </li>
                <li className="collection-item collection-item-custom">
                  Node
                  <div className="secondary-content">
                    <i className="material-icons">check</i>
                  </div>
                </li>
                <li className="collection-item collection-item-custom">
                  PHP
                  <div className="secondary-content">
                    <i className="material-icons">check</i>
                  </div>
                </li>
                <li className="collection-item collection-item-custom">
                  Python
                  <div className="secondary-content">
                    <i className="material-icons">check</i>
                  </div>
                </li>
                <li className="collection-item collection-item-custom">
                  Bash
                  <div className="secondary-content">
                    <i className="material-icons">check</i>
                  </div>
                </li>
                <li className="collection-item collection-item-custom">
                  MongoDB
                  <div className="secondary-content">
                    <i className="material-icons">check</i>
                  </div>
                </li>
                <li className="collection-item collection-item-custom">
                  Linux
                  <div className="secondary-content">
                    <i className="material-icons">check</i>
                  </div>
                </li>
                <li className="collection-item collection-item-custom">
                  Photoshop
                  <div className="secondary-content">
                    <i className="material-icons">check</i>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="row mb-0 project-row">
            <div className="col m12">
              <h1 className="center-align fs-2rem fw-bold">Projects</h1>
              <div className="row mt-50 mb-50">
                <div className="col m3 s12 offset-m2">
                  <div className="module-border-wrap">
                    <div className="module">
                      <a href="http://jeopardy.xyz/" target="_blank">
                        <img src={jeopardy} className="responsive-img" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col m3 offset-m2  s12">
                  <div className="module-border-wrap">
                    <div className="module">
                      <a
                        href="https://mernbook-905.herokuapp.com/"
                        target="_blank"
                      >
                        <img src={mernbook} className="responsive-img" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="pimg4"></div>
      <section className="section section-dark">
        <div className="row contact-row">
          <div className="col m4 offset-m4 s12 center-align bg-white contact-col">
            <h1 className="fs-2rem dark-purple fw-bold contact-heading">Contact</h1>
            <div className="row">
              <form name="contact" method="POST">
                <input type="hidden" name="form-name" value="contact" />
                <div className="input-field col s12 mt-50">
                  <input name="name" type="text" />
                  <label htmlFor="name" className="active fw-bold">
                    Your Name
                  </label>
                </div>
                <div className="input-field col s12">
                  <input name="email" type="text" />
                  <label htmlFor="email" className="active fw-bold">
                    Your Email
                  </label>
                </div>
                <div className="input-field col s12">
                  <textarea
                    name="message"
                    className="materialize-textarea"
                  ></textarea>
                  <label htmlFor="message" className="active fw-bold">
                    Your Message
                  </label>
                </div>
                <button
                  type="submit"
                  className="waves-effect waves-light btn right btn-submit fw-bold"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
