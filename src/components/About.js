import profile from "../assets/images/profile.jpg";

function About() {
  return (
    <section id="about" className="section-padding about-section">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
          <p>Who I am and what I do</p>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-5 text-center mb-4">
            <img src={profile} alt="About" className="about-img" />
          </div>

          <div className="col-lg-7">
            <div className="about-content">
              <h3>Full Stack Developer & Computer Engineering Student</h3>

              <p>
                I am currently pursuing B.Tech in Computer Engineering from
                Vishwakarma University, Pune. I am interested in full stack web
                development and enjoy building practical projects using frontend
                and backend technologies.
              </p>

              <p>
                I have worked on multiple academic and personal projects such as
                e-commerce websites, add to cart systems, dashboards, hospital
                management systems, and task manager applications. These projects
                helped me improve my skills in React, JavaScript, Bootstrap,
                Node.js, Express.js, and MySQL.
              </p>

              <div className="about-info">
                <div><strong>Name:</strong> Prajwal Khedkar</div>
                <div><strong>Degree:</strong> B.Tech Computer Engineering</div>
                <div><strong>Location:</strong> Pune, Maharashtra</div>
                <div><strong>Email:</strong> prajwalkhedkar23@gmail.com</div>
              </div>

              <a href="#contact" className="btn-main mt-3">Hire Me</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;