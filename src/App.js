import heraldry from "./assets/heraldry.webp";
import github from "./assets/github_optimized.png";
import linkedin from "./assets/linkedin_optimized.png";
import laptop from "./assets/laptop.webp";

function App() {
  return (
    <div className="App">
      <div className="showcase">
        <div class="content">
          <img src={heraldry} class="logo" alt="James McCarthy" />
          <div class="title fw-bold">James McCarthy</div>
          <div class="text fw-bold">Software Developer</div>
        </div>
      </div>

      <div className="row social-media-row">
        <div className="col m2 offset-m4">
          <a href="https://github.com/Mister905?tab=repositories">
            <img src={github} class="responsive-img" alt="GitHub" />
          </a>
        </div>
        <div className="col m2">
          <a href="https://www.linkedin.com/in/james-mccarthy-159230199/">
            <img src={linkedin} class="responsive-img" alt="LinkedIn" />
          </a>
        </div>
      </div>

      <div className="row about-row">
        <div className="col m4 offset-m2">
          <div class="module-border-wrap">
            <div class="module">
              <h1 class="fs-2rem fw-bold">About Me</h1>
              <p>
                I'm a Canadian software developer based in Hamilton, Ontario.
              </p>
              <p>
                I am passionate about programming and full stack web
                development.
              </p>
            </div>
          </div>
        </div>
        <div className="col m4">
          <img
            src={laptop}
            class="responsive-img laptop-img-border"
            alt="Laptop"
          />
        </div>
      </div>
      <div className="row skills-row">
        <div className="row">
          <div className="col m12 center-align">
            <h1 class="fs-2rem fw-bold">Programming Skills</h1>
          </div>
        </div>
        <div className="row">
          <div className="col m3 offset-m3">
            <ul class="collection">
              <li class="collection-item collection-item-custom">
                HTML
                <div className="secondary-content">
                  <i class="material-icons">check</i>
                </div>
              </li>
              <li class="collection-item collection-item-custom">
                JavaScript
                <div className="secondary-content">
                  <i class="material-icons">check</i>
                </div>
              </li>
              <li class="collection-item collection-item-custom">
                React
                <div className="secondary-content">
                  <i class="material-icons">check</i>
                </div>
              </li>
              <li class="collection-item collection-item-custom">
                JWT
                <div className="secondary-content">
                  <i class="material-icons">check</i>
                </div>
              </li>
              <li class="collection-item collection-item-custom">
                TypeScript
                <div className="secondary-content">
                  <i class="material-icons">check</i>
                </div>
              </li>
              <li class="collection-item collection-item-custom">
                Java
                <div className="secondary-content">
                  <i class="material-icons">check</i>
                </div>
              </li>
              <li class="collection-item collection-item-custom">
                Perl
                <div className="secondary-content">
                  <i class="material-icons">check</i>
                </div>
              </li>
              <li class="collection-item collection-item-custom">
                SQL
                <div className="secondary-content">
                  <i class="material-icons">check</i>
                </div>
              </li>
              <li class="collection-item collection-item-custom">
                Git
                <div className="secondary-content">
                  <i class="material-icons">check</i>
                </div>
              </li>
              <li class="collection-item collection-item-custom">
                SCSS
                <div className="secondary-content">
                  <i class="material-icons">check</i>
                </div>
              </li>
            </ul>
          </div>
          <div className="col m3">
            <ul class="collection">
              <li class="collection-item collection-item-custom">
                CSS
                <div className="secondary-content">
                  <i class="material-icons">check</i>
                </div>
              </li>
              <li class="collection-item collection-item-custom">
                jQuery
                <div className="secondary-content">
                  <i class="material-icons">check</i>
                </div>
              </li>
              <li class="collection-item collection-item-custom">
                Redux
                <div className="secondary-content">
                  <i class="material-icons">check</i>
                </div>
              </li>
              <li class="collection-item collection-item-custom">
                Node
                <div className="secondary-content">
                  <i class="material-icons">check</i>
                </div>
              </li>
              <li class="collection-item collection-item-custom">
                PHP
                <div className="secondary-content">
                  <i class="material-icons">check</i>
                </div>
              </li>
              <li class="collection-item collection-item-custom">
                Python
                <div className="secondary-content">
                  <i class="material-icons">check</i>
                </div>
              </li>
              <li class="collection-item collection-item-custom">
                Bash
                <div className="secondary-content">
                  <i class="material-icons">check</i>
                </div>
              </li>
              <li class="collection-item collection-item-custom">
                MongoDB
                <div className="secondary-content">
                  <i class="material-icons">check</i>
                </div>
              </li>
              <li class="collection-item collection-item-custom">
                Linux
                <div className="secondary-content">
                  <i class="material-icons">check</i>
                </div>
              </li>
              <li class="collection-item collection-item-custom">
                Photoshop
                <div className="secondary-content">
                  <i class="material-icons">check</i>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="row contact-row">
          <div className="col m4 offset-m4 center-align bg-white contact-col">
            <h1 class="fs-2rem dark-purple fw-bold">Contact</h1>
            <div className="row">
              <form name="contact" method="POST">
                <input type="hidden" name="form-name" value="contact" />
                <div class="input-field col s12 mt-50">
                  <input name="name" type="text" />
                  <label for="name" class="active fw-bold">
                    Your Name
                  </label>
                </div>
                <div class="input-field col s12">
                  <input name="email" type="text" />
                  <label for="email" class="active fw-bold">
                    Your Email
                  </label>
                </div>
                <div class="input-field col s12">
                  <textarea
                    name="message"
                    class="materialize-textarea"
                  ></textarea>
                  <label for="message" class="active fw-bold">
                    Your Message
                  </label>
                </div>
                <button
                  type="submit"
                  class="waves-effect waves-light btn right btn-submit fw-bold"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
