function Skills() {
  const skills = [
  { name: "HTML5", icon: "bi-filetype-html" },
  { name: "CSS3", icon: "bi-filetype-css" },
  { name: "Bootstrap", icon: "bi-bootstrap-fill" },
  { name: "JavaScript", icon: "bi-filetype-js" },
  { name: "React.js", icon: "bi-code-square" },
  { name: "Redux Toolkit", icon: "bi-diagram-3-fill" },
  { name: "Java", icon: "bi-cup-hot-fill" },
  { name: "JDBC", icon: "bi-database-fill" },
  { name: "Servlets", icon: "bi-server" },
  { name: "JSP", icon: "bi-window-stack" },
  { name: "Hibernate", icon: "bi-layers-fill" },
  { name: "Spring", icon: "bi-flower1" },
  { name: "Spring Boot", icon: "bi-lightning-fill" },
  { name: "MySQL", icon: "bi-database-check" },
  { name: "REST API", icon: "bi-cloud-arrow-up-fill" }
];

  return (
    <section id="skills" className="section-padding skills-section">
      <div className="container">
        <div className="section-title">
          <h2>Skills</h2>
          <p>Technologies I work with</p>
        </div>

        <div className="row">
          {skills.map((skill, index) => (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={index}>
              <div className="skill-card">
                <i className={`bi ${skill.icon}`}></i>
                <h4>{skill.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;