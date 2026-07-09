function Skills() {
  const skills=["HTML","CSS","JavaScript","React","NodeJs","ExpressJs","MongoDB","SQL","RESTful APIs","Prompt Engineering","Python","Java","Data Structures"];
  return (
     <section className="skills">
      <h2 className="section-title">My Skills</h2>
      
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
export default Skills;