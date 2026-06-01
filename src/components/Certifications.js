import certificate from "../assets/certificates/PrajwalKhedkar.pdf";
import courseraCertificate from "../assets/certificates/coursera.pdf";

function Certifications() {
  return (
    <section id="certifications" className="section-padding cert-section">
      <div className="container">
        <div className="section-title">
          <h2>Certifications</h2>
          <p>Professional Training & Certifications</p>
        </div>

        <div className="row justify-content-center">

          {/* Java Full Stack Certificate */}
          <div className="col-lg-5 col-md-6 mb-4">
            <div className="cert-card">
              <i className="bi bi-patch-check-fill"></i>

              <h4>Java Full Stack Development</h4>

              <p>
                Envision Computer Training Institute
              </p>

              <span>
                Aug 2025 - Apr 2026 (Currently Pursuing)
              </span>

              <div className="mt-4">
                <a
                  href={certificate}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-info"
                >
                  View Certificate
                </a>
              </div>
            </div>
          </div>

          {/* Coursera Certificate */}
          <div className="col-lg-5 col-md-6 mb-4">
            <div className="cert-card">
              <i className="bi bi-award-fill"></i>

              <h4>Coursera Certification</h4>

              <p>
                Coursera Online Learning Platform
              </p>

              <span>
                Successfully Completed Course
              </span>

              <div className="mt-4">
                <a
                  href={courseraCertificate}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-info"
                >
                  View Certificate
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Certifications;