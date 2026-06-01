import resume from "../assets/resume/Prajwal_Khedkar_Resume.pdf";
function Resume() {
  return (
    <section id="resume" className="section-padding resume-section">
      <div className="container">
        <div className="resume-box">
          <h2>Resume</h2>
          <p>
            Download my updated resume to view my education, skills, projects,
            and technical background.
          </p>

          <a
  href={resume}
  target="_blank"
  rel="noreferrer"
  className="btn-main"
>
  Download Resume
</a>
        </div>
      </div>
    </section>
  );
}

export default Resume;