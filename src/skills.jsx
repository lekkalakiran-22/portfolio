import {
  FaCode,
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaRobot,
  FaTools,
} from "react-icons/fa";

function Skills() {
  const skills = [
    {
      icon: <FaCode />,
      title: "Languages",
      items: ["JavaScript", "Python", "Java"],
    },
    {
      icon: <FaLaptopCode />,
      title: "Frontend",
      items: ["HTML5", "CSS3", "React.js"],
    },
    {
      icon: <FaServer />,
      title: "Backend",
      items: ["Node.js", "Express.js", "REST APIs"],
    },
    {
      icon: <FaDatabase />,
      title: "Database",
      items: ["MongoDB", "SQL"],
    },
    {
      icon: <FaRobot />,
      title: "AI",
      items: ["Prompt Engineering", "OpenAI API"],
    },
    {
      icon: <FaTools />,
      title: "Tools",
      items: ["Git", "GitHub", "VS Code"],
    },
  ];

  return (
    <section id="skills">
      <h2>Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-box" key={index}>
            <div className="skill-icon">
              {skill.icon}
            </div>

            <h3>{skill.title}</h3>

            <div className="skill-tags">
              {skill.items.map((item, i) => (
                <span key={i}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;