function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>

      <div className="skills-grid">

        <div className="skill-box">
          <h3>Languages</h3>
          <div className="skill-tags">
            <span>JavaScript</span>
            <span>Python</span>
            <span>Java</span>
          </div>
        </div>

        <div className="skill-box">
          <h3>Frontend</h3>
          <div className="skill-tags">
            <span>HTML5</span>
            <span>CSS3</span>
            <span>React.js</span>
          </div>
        </div>

        <div className="skill-box">
          <h3>Backend</h3>
          <div className="skill-tags">
            <span>Node.js</span>
            <span>Express.js</span>
            <span>REST APIs</span>
          </div>
        </div>

        <div className="skill-box">
          <h3>Database</h3>
          <div className="skill-tags">
            <span>MongoDB</span>
            <span>SQL</span>
          </div>
        </div>

        <div className="skill-box">
          <h3>AI</h3>
          <div className="skill-tags">
            <span>Prompt Engineering</span>
            <span>OpenAI API</span>
          </div>
        </div>

        <div className="skill-box">
          <h3>Tools</h3>
          <div className="skill-tags">
            <span>Git</span>
            <span>GitHub</span>
            <span>VS Code</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;