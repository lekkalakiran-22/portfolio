import { FaAward } from "react-icons/fa";

function Certificates() {
  const certificates = [
    {
      title: "MERN Stack Development",
      description:
        "Completed a comprehensive MERN Stack Development program covering modern full-stack web development.",
      skills: ["React", "Node.js", "Express", "MongoDB"],
      year: "2026",
    },
    {
      title: "React.js",
      description:
        "Built responsive applications using React components, hooks, routing, and state management.",
      skills: ["React", "Hooks", "Router", "Context API"],
      year: "2026",
    },
    {
      title: "Principles of Generative AI",
      description:
        "Learned Generative AI fundamentals, prompt engineering, and AI-powered application development.",
      skills: ["Generative AI", "Prompt Engineering", "LLMs"],
      year: "2026",
    },
  ];

  return (
    <section id="certificates">
      <h2>My Certificates</h2>

      <div className="certificate-container">
        {certificates.map((certificate, index) => (
          <div className="certificate-card" key={index}>
            <div className="certificate-icon">
              <FaAward />
            </div>

            <h3 className="certificate-title">
              {certificate.title}
            </h3>

            <p className="certificate-description">
              {certificate.description}
            </p>

            <div className="certificate-skills">
              {certificate.skills.map((skill, i) => (
                <span key={i}>{skill}</span>
              ))}
            </div>

            <div className="certificate-year">
              📅 {certificate.year}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;