function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      tech: "React, CSS",
      description:
        "Personal portfolio website showcasing my skills, projects, and certificates.",
      github: "https://github.com/yourusername/portfolio",
    },

    {
      title: "MERN E-Commerce App",
      tech: "React, Node.js, Express, MongoDB",
      description:
        "Full-stack e-commerce application with authentication and shopping cart.",
      github: "https://github.com/yourusername/ecommerce",
    },

    {
      title: "To-Do List App",
      tech: "React, JavaScript",
      description:
        "Task management application with add, edit, and delete features.",
      github: "https://github.com/yourusername/todo-app",
    },
  ];

  return (
    <section id="projects">
      <h2 className="section-title">My Projects</h2>

      <div className="project-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>

            <p>
              <strong>Tech Stack:</strong> {project.tech}
            </p>

            <p>{project.description}</p>

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;