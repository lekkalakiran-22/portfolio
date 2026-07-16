import "./App.css";

function Projects() {
  return (
    <section id="projects">
      <h2>My Projects</h2>

      <div className="projects-container">

        {/* Project 1 */}
        <div className="project-card">
          <img src="/projects/portfolio.png" alt="Portfolio Website" />

          <div className="project-content">
            <h3>Portfolio Website</h3>

            <p className="tech-stack">
              • React.js • CSS • EmailJS
            </p>

            <div className="project-buttons">
              <a
                href="https://portfolio-six-ruddy-52.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>

              <a
                href="https://github.com/lekkalakiran-22/portfolio"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <img src="/projects/weather.png" alt="Rain Alert Engine" />

          <div className="project-content">
            <h3>Rain Alert Engine</h3>

            <p className="tech-stack">
              • React.js • CSS • OpenWeather API
            </p>

            <div className="project-buttons">
              <a
                href="https://rain-alert-engine.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>

              <a
                href="https://github.com/lekkalakiran-22/rain-alert-engine"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <img src="/projects/calculator.png" alt="Modern Calculator" />

          <div className="project-content">
            <h3>Modern Calculator</h3>

            <p className="tech-stack">
              • React.js • JavaScript • CSS3 • Vite
            </p>

            <div className="project-buttons">
              <a
                href="https://calculator-henna-phi-46.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>

              <a
                href="https://github.com/lekkalakiran-22/calculator"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;