import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const [showPopup, setShowPopup] = useState(false);
  const [errorPopup, setErrorPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_vmwm5af",
        "template_ei8h87c",
        form.current,
        {
          publicKey: "2asvXyHM-hssQ5wv4",
        }
      )
      .then(
        () => {
          setLoading(false);
          setShowPopup(true);
          form.current.reset();

          setTimeout(() => {
            setShowPopup(false);
          }, 3000);
        },
        () => {
          setLoading(false);
          setErrorPopup(true);

          setTimeout(() => {
            setErrorPopup(false);
          }, 3000);
        }
      );
  };

  return (
    <section id="contact" className="section-padding contact-section">
      <div className="container">
        <div className="section-title">
          <h2>Contact Me</h2>
          <p>Feel free to connect with me</p>
        </div>

        {showPopup && (
          <div className="contact-popup">
            ✅ Message Sent Successfully
          </div>
        )}

        {errorPopup && (
          <div className="contact-popup error-popup">
            ❌ Message Failed. Try Again.
          </div>
        )}

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <form ref={form} className="contact-form" onSubmit={sendEmail}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    name="user_name"
                    className="form-control"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <input
                    type="email"
                    name="user_email"
                    className="form-control"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  name="subject"
                  className="form-control"
                  placeholder="Subject"
                  required
                />
              </div>

              <div className="mb-3">
                <textarea
                  name="message"
                  className="form-control"
                  rows="5"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>

              <div className="text-center">
                <button type="submit" className="btn-main" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>

            <div className="contact-buttons text-center mt-4">
              <a
                href="mailto:prajwalkhedkar23@gmail.com"
                className="btn btn-info me-3"
              >
                <i className="bi bi-envelope-fill"></i> Email Me
              </a>

              <a
                href="https://wa.me/918010813767"
                target="_blank"
                rel="noreferrer"
                className="btn btn-success"
              >
                <i className="bi bi-whatsapp"></i> WhatsApp Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;