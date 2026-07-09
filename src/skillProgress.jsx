function SkillProgress() {
  return (
    <section id="skills">
      <h2 className="section-title">Skill Progress</h2>

      <div className="skill">
        <span>HTML</span>
        <div className="progress">
          <div className="html"></div>
        </div>
      </div>

      <div className="skill">
        <span>CSS</span>
        <div className="progress">
          <div className="css"></div>
        </div>
      </div>

      <div className="skill">
        <span>JavaScript</span>
        <div className="progress">
          <div className="javascript"></div>
        </div>
      </div>

      <div className="skill">
        <span>React</span>
        <div className="progress">
          <div className="react"></div>
        </div>
      </div>

      <div className="skill">
        <span>Node.js</span>
        <div className="progress">
          <div className="node"></div>
        </div>
      </div>

      <div className="skill">
        <span>MongoDB</span>
        <div className="progress">
          <div className="mongodb"></div>
        </div>
      </div>
    </section>
  );
}

export default SkillProgress;