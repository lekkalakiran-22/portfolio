import { FaGraduationCap } from "react-icons/fa";

function Education() {
  return (
    <section id="education">
      <h2>Education</h2>

      <div className="education-container">

        <div className="education-card">
          <FaGraduationCap className="edu-icon" />

          <h3>B.Tech - CSE</h3>

          <h4>Sir C.R. Reddy College of Engineering</h4>

          <p>2023 - 2027</p>
        </div>

        <div className="education-card">
          <FaGraduationCap className="edu-icon" />

          <h3>Intermediate (MPC)</h3>

          <h4>Sri Vikas Junior College</h4>

          <p>2021 - 2023</p>
        </div>

        <div className="education-card">
          <FaGraduationCap className="edu-icon" />

          <h3>SSC</h3>

          <h4>ZPHS Boys High School</h4>

          <p>2020 - 2021</p>
        </div>

      </div>
    </section>
  );
}
export default Education;