export default function Resume() {
  return (
    <section id="resume" className="section">
      <h2>Resume</h2>
      <p>View or download my detailed CV (PDF):</p>
      <div className="row" style={{margin: '8px 0 16px'}}>
        <a className="btn" href="/cv%20(1).pdf" target="_blank" rel="noreferrer">Open CV</a>
        <a className="btn ghost" href="/cv%20(1).pdf" download>Download CV</a>
      </div>
      <div className="resume-box">
        <h3>Experience</h3>
        <ul>
          <li><b>Full Stack Developer Intern — GMD, Tangier (Summer 2025)</b>: Built StageLink with NLP matching and chatbot. Tech: React, Spring Boot, MySQL, Python (NLP), Rasa.</li>
          <li><b>Web Developer Intern — GMD, Tangier (Summer 2024)</b>: Inventory web app, responsive UI, automated reports. Tech: React, C# .NET, SQL Server.</li>
        </ul>
        <h3>Education</h3>
        <ul>
          <li>ENSA El Jadida — 2ITE (2023 — Present)</li>
          <li>CPGE Moulay Al Hassan — Mathematics & Physics (2021 — 2023)</li>
        </ul>
      </div>
    </section>
  );
}
