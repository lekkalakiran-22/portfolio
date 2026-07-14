import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <pre>
        © 2026 Kiran Lekkala.
      </pre>
     <p>Built with React.js</p>

      <div className="footer-icons">
        <a href="https://github.com/lekkalakiran-22">
          <FaGithub />
        </a>

        <a href="https://www.linkedin.com/in/lekkala-kiran-31162531a?utm_source=share_via&utm_content=profile&utm_medium=member_desktop">
          <FaLinkedin />
        </a>
        <a href="https://wa.me/919381958803">
          <FaWhatsapp />
        </a>
      </div>

    </footer>
  );
}

export default Footer;