import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1yfu7jr",
        "template_i1ci6cm",
        form.current,
        "XjacuV7x1ewgCcYr-"
      )
      .then(
        () => {
          alert("Message Sent Successfully!");
        },
        (error) => {
          alert("Failed to send message");
          console.log(error);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h2 className="section-title">Contact Me</h2>

      <form ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          required
        />

        <button type="submit">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;