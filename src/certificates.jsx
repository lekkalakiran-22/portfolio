function Certificates() {
  return (
    <section id="certificates">
      <h2 className="section-title">My Certificates</h2>

      <div className="certificate-container">

         <div className="certificate-card">
          <h3 className="certificate-title">
            MERN Stack  Internship Certificate
          </h3>

          <img
            src="certificates/mern.jpg"
            alt="MERN Stack Internship Certificate"
            className="certificate-image"
          />
        </div>

        <div className="certificate-card">
          <h3 className="certificate-title">
            React.js Certificate
          </h3>

          <img
            src="certificates/react.jpeg"
            alt="React Certificate"
            className="certificate-image"
          />
        </div>
         <div className="certificate-card">
          <h3 className="certificate-title">
            GitHub Certificate
          </h3>

          <img
            src="certificates/Git.jpeg"
            alt="GitHub Certificate"
            className="certificate-image"
          />
        </div>
  
        <div className="certificate-card">
          <h3 className="certificate-title">
            Principals Of GenAI Certificate
          </h3>

          <img
            src="certificates/GenAI.jpg"
            alt="Generative AI Certificate"
            className="certificate-image"
          />
        </div>
        
        <div className="certificate-card">
          <h3 className="certificate-title">
             Cloud Computing Certificate
          </h3>

          <img
            src="certificates/cloud.jpg"
            alt="Cloud Computing Certificate"
            className="certificate-image"
          />
        </div>
        <div className="certificate-card">
          <h3 className="certificate-title">
            Web Development Certificate
          </h3>

          <img
            src="certificates/frontend.jpeg"
            alt="Web Development Certificate"
            className="certificate-image"
          />
        </div>
        

      </div>
    </section>
  );
}

export default Certificates;