function Education() {
  const education = [
    {
      title: "B.Tech Computer Engineering",
      institute: "Vishwakarma University, Pune",
      year: "2022 - Pursuing",
      result: "CGPA: 7.10",
      icon: "bi-mortarboard-fill",
    },
    {
      title: "Java Full Stack Development",
      institute: "Envision Computer Training Institution",
      year: "Aug 2025 - Apr 2026",
      result: "Currently Learning",
      icon: "bi-code-slash",
    },
    {
      title: "12th HSC",
      institute: "Pravara Public School, Pravaranagar",
      year: "Completed",
      result: "Percentage: 71%",
      icon: "bi-journal-bookmark-fill",
    },
    {
      title: "10th SSC",
      institute: "Pravara Public School, Pravaranagar",
      year: "Completed",
      result: "Percentage: 84%",
      icon: "bi-award-fill",
    },
  ];

  return (
    <section id="education" className="section-padding education-section">
      <div className="container">
        <div className="section-title">
          <h2>Education</h2>
          <p>My academic background</p>
        </div>

        <div className="row">
          {education.map((item, index) => (
            <div className="col-lg-6 col-md-6 mb-4" key={index}>
              <div className="edu-card">
                <div className="edu-icon">
                  <i className={`bi ${item.icon}`}></i>
                </div>
                <h4>{item.title}</h4>
                <p>{item.institute}</p>
                <span>{item.year}</span>
                <h5>{item.result}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;