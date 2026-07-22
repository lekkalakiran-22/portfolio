import { TypeAnimation } from "react-type-animation";
import { FaDownload } from "react-icons/fa";
import { MdWork } from "react-icons/md";
function Hero() {
    const handleHireMe = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };
  return (
    <div className="hero">

      <div className="hero-content">
        <span className="hero-badge">
  🚀 Open to Internships & Full-Time Opportunities
</span>
        <h1>Hi, I'm Kiran</h1>

        <TypeAnimation
          sequence={[
            "MERN Stack Developer",
            2000,
            "Full Stack Developer",
            2000,
          ]}
          wrapper="h2"
          speed={50}
          repeat={Infinity}
        />

        <h5>
          Passionate about building AI-powered and responsive web applications using React.js and modern technologies.
          </h5>

        <div className="hero-buttons">
           <button 
           className="hire-btn"
           onClick={handleHireMe}>
     <MdWork /> Hire Me
    </button>
     <a href="/Kiran_Resume.pdf" 
    download >
    </a>
   < button className ="resume-btn">
    <FaDownload /> Resume
   </button>
        </div>
</div>
      <div className="hero-image">
        <img src="/photo.png" alt="profile" />
      </div>

    </div>
  );
}

export default Hero;