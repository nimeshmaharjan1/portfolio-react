import React from "react";
import "./Contact.scss";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";
import { useRef } from "react";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kf6dtxx",
        "service_kf6dtxx",
        form.current,
        "elwxTaO1Cwn8nN8Bf"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact-container">
        <div className="contact-options">
          <article className="option">
            <MdOutlineEmail className="icon" />
            <h4>E-mail</h4>
            <h5>maharjannimesh11@gmail.com</h5>
            <a
              href="mailto:maharjannimesh11@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message.
            </a>
          </article>
          <article className="option">
            <RiMessengerLine className="icon" />
            <h4>Niemsh Maharjan</h4>
            <h5>maharjannimesh11@gmail.com</h5>
            <a
              href="https://m.me/nimeshmaharjan1.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message.
            </a>
          </article>
          <article className="option">
            <BsWhatsapp className="icon" />
            <h4>Whatsapp</h4>
            <h5>+977-9843323200</h5>
            <a
              href="https://api.whatsapp.com/send?phone+9779843323200"
              target={"_blank"}
              rel="noreferrer"
            >
              Send a message.
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="text" name="email" placeholder="Your E-mail" required />
          <textarea
            type="text"
            name="message"
            placeholder="Your Message"
            rows="7"
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
