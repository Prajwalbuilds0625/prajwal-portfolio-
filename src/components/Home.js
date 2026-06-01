import profile from "../assets/images/profile.jpg";

function Home() {
  return (
    <section id="home" className="home-section">
      <div className="container">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-7">
            <p className="hello-text">Hello, I'm</p>
            <h1>Prajwal Khedkar</h1>
            <h3>Final Year Computer Engineering Student</h3>
            <p className="home-desc">
              Passionate Full Stack Developer skilled in building responsive,
              attractive, and user-friendly web applications using React,
              JavaScript, Node.js, Express.js, and MySQL.
            </p>

            <div className="home-buttons">
              <a href="#projects" className="btn-main">View Projects</a>
              <a href="#contact" className="btn-outline-custom">Contact Me</a>
            </div>

            <div className="social-icons mt-4">
              <a href="https://github.com/Prajwalbuilds0625" target="_blank" rel="noreferrer"><i className="bi bi-github"></i></a>
              <a href="https://linkedin.com/in/prajwal-khedkar-09b499283" target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i></a>
              <a href="https://www.instagram.com/_prajwal_0625?igsh=cGk3NmdnMG5jYmk3" target="_blank" rel="noreferrer"><i className="bi bi-instagram"></i></a>
              <a href="https://www.facebook.com/share/18bxykzc1f/" target="_blank" rel="noreferrer"><i className="bi bi-facebook"></i></a>
            </div>
          </div>

          <div className="col-lg-5 text-center">
            <div className="profile-card">
              <img src={profile} alt="Prajwal Khedkar" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;