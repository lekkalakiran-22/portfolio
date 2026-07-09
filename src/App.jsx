import About from "./about";
import Navbar from "./navbar";
import Hero from "./hero";
import Skills from "./skills";
import Hello from "./hello";
import Contact from "./contact";
import Footer from "./footer";
import "./app.css";
import Certificates from "./certificates";
import SkillProgress from "./skillProgress";
import Projects from "./project";


function App() {
  // const [darkMode, setDarkMode] = useState(false);

  return (
    // <div className={darkMode ? "app dark" : "app"}>
    //   <button
    //     onClick={() => setDarkMode(!darkMode)}
    //   >
    //     {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
    //   </button>
<div>
  <h1>My Portfolio</h1>

      <Navbar />
      <Hero />

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>
      {/* <SkillProgress /> */}
  
    <Projects />

    <section id="certificates">
        <Certificates />
      </section>  

      <Hello />

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}
export default App;