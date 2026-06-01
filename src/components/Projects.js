import ecommerce from "../assets/images/projects/ecommerce.jpg";
import html from "../assets/images/projects/html.jpg";
import pato from "../assets/images/projects/Pato.png";
import tourism from "../assets/images/projects/tourism.jpg";
import boot1 from "../assets/images/projects/boot1.jpg";
import boot2 from "../assets/images/projects/boot2.jpg";
import boot3 from "../assets/images/projects/boot3.jpg";
import hospital from "../assets/images/projects/hospital.jpg";
import eventhub from "../assets/images/projects/eventhub.jpg";
import dashboard from "../assets/images/projects/dashboard.jpg";
import counter from "../assets/images/projects/counter.jpg";
import addtocart from "../assets/images/projects/addtocart.jpg";
import todo from "../assets/images/projects/todo.jpg";

function Projects() {
  const projects = [
    {
      title: "E-Commerce Website",
      category: "Main Full Stack Project",
      image: ecommerce,
      tech: "HTML, CSS, Bootstrap, JavaScript, Node.js, Express.js, MySQL",
      desc: "A complete shopping website with login, products, cart, order placement, admin panel, and MySQL database storage.",
      featured: true,
      live: "",
      github: "https://github.com/Prajwalbuilds0625/ecommerce-website",
    },
    {
      title: "HTML Website",
      category: "Frontend Project",
      image: html,
      tech: "HTML, CSS",
      desc: "A basic responsive website created using HTML and CSS for frontend practice.",
      live: "https://magnificent-rugelach-74e09c.netlify.app",
      github: "https://github.com/Prajwalbuilds0625/html-website",
    },
    {
      title: "Food Website",
      category: "Frontend Project",
      image: pato,
      tech: "HTML, CSS, Bootstrap",
      desc: "A food-themed website with modern layout, sections, and responsive design.",
      live: "https://inspiring-crumble-2336cb.netlify.app",
      github: "https://github.com/Prajwalbuilds0625/food-website",
    },
    {
      title: "Tourism Website",
      category: "Frontend Project",
      image: tourism,
      tech: "HTML, CSS, Bootstrap",
      desc: "A tourism website showcasing places, packages, and attractive frontend sections.",
      live: "https://warm-vacherin-cea659.netlify.app",
      github: "https://github.com/Prajwalbuilds0625/tourism-website",
    },
    {
      title: "Bootstrap Project 1",
      category: "Bootstrap Project",
      image: boot1,
      tech: "HTML, CSS, Bootstrap",
      desc: "Responsive Bootstrap-based web layout with cards and sections.",
      live: "https://venerable-valkyrie-a90c91.netlify.app",
      github: "https://github.com/Prajwalbuilds0625/bootstrap-business-website",
    },
    {
      title: "Bootstrap Project 2",
      category: "Bootstrap Project",
      image: boot2,
      tech: "HTML, CSS, Bootstrap",
      desc: "Modern Bootstrap UI project focused on layout and responsiveness.",
      live: "https://prismatic-sprite-8ca503.netlify.app",
      github: "https://github.com/Prajwalbuilds0625/bootstrap-landing-page",
    },
    {
      title: "Bootstrap Project 3",
      category: "Bootstrap Project",
      image: boot3,
      tech: "HTML, CSS, Bootstrap",
      desc: "Bootstrap-based website design with clean UI components.",
      live: "https://cute-ganache-f3bd0a.netlify.app",
      github: "https://github.com/Prajwalbuilds0625/bootstrap-ui-project",
    },
    {
      title: "Hospital Management System",
      category: "React Project",
      image: hospital,
      tech: "React.js, Bootstrap, JavaScript",
      desc: "A hospital website interface with doctors, departments, appointments, and contact sections.",
      live: "https://cute-khapse-6f011e.netlify.app",
      github: "https://github.com/Prajwalbuilds0625/hospital-management-system",
    },
    {
      title: "EventHub",
      category: "Full Stack Project",
      image: eventhub,
      tech: "HTML, CSS, Bootstrap, JavaScript, Node.js, Express.js, MySQL",
      desc: "An event management website for viewing events, registration, and event details.",
      live: "https://idyllic-biscotti-4f4626.netlify.app",
      github: "https://github.com/Prajwalbuilds0625/eventhub",
    },
    {
      title: "Dashboard Analytics",
      category: "React + Redux Project",
      image: dashboard,
      tech: "React.js, Redux Toolkit, Bootstrap",
      desc: "A dashboard interface with statistics cards, admin panels, and responsive design.",
      live: "https://lustrous-florentine-a13019.netlify.app",
      github: "https://github.com/Prajwalbuilds0625/dashboard-analytics",
    },
    {
      title: "Redux Counter Application",
      category: "React + Redux Project",
      image: counter,
      tech: "React.js, Redux Toolkit, Bootstrap",
      desc: "An interactive counter app with increment, decrement, reset, and Redux state management.",
      live: "https://super-travesseiro-6d72b5.netlify.app",
      github: "https://github.com/Prajwalbuilds0625/redux-counter-app",
    },
    {
      title: "Add To Cart Website",
      category: "React + Redux Project",
      image: addtocart,
      tech: "React.js, Redux Toolkit, Bootstrap, jQuery",
      desc: "Shopping cart application with add to cart, quantity control, remove product, total price, and order placement.",
      live: "https://tranquil-fox-3d829b.netlify.app",
      github: "https://github.com/Prajwalbuilds0625/add-to-cart-project",
    },
    {
      title: "Smart Todo App",
      category: "React + Redux Project",
      image: todo,
      tech: "React.js, Redux Toolkit, Bootstrap",
      desc: "Task manager application with add, delete, update, and complete task functionality.",
      live: "https://incandescent-medovik-ce1d0c.netlify.app",
      github: "https://github.com/Prajwalbuilds0625/smart-todo-app",
    },
  ];

  return (
    <section id="projects" className="section-padding projects-section">
      <div className="container">
        <div className="section-title">
          <h2>Projects</h2>
          <p>My frontend, full stack, React and Redux projects</p>
        </div>

        <div className="row">
          {projects.map((project, index) => (
            <div
              className={
                project.featured
                  ? "col-lg-12 mb-4"
                  : "col-lg-4 col-md-6 mb-4"
              }
              key={index}
            >
              <div
                className={
                  project.featured
                    ? "project-card featured-project"
                    : "project-card"
                }
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-img"
                />

                <div className="project-content">
                  <span className="project-category">{project.category}</span>
                  <h4>{project.title}</h4>
                  <p className="project-desc">{project.desc}</p>
                  <p className="project-tech">{project.tech}</p>

                  <div className="project-buttons">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-info me-2"
                      >
                        Live Demo
                      </a>
                    )}

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline-light"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;