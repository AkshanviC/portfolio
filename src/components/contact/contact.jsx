import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";

const contact = () => {
  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Connect with me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__icon" />
            <h4>Email</h4>
            <h5>vigneshakshan@gmail.com</h5>
            <a href="mailto:vigneshakshan@gmail.com" target="_blank">
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__icon" />
            <h4>WhatsApp</h4>
            <h5>vigneshakshan@gmail.com</h5>
            <a
              href="http://api.whatsapp.com/send?phone=+917708277078"
              target="_blank"
            >
              Send a Message
            </a>
          </article>
        </div>
        {/* <div className="contact__options">
          <article className="contact__option">
            <h4>Email</h4>
            <h5>vigneshakshan@gmail.com</h5>
            <a href="mailto:vigneshakshan@gmail.com">Send a Message</a>
          </article>
        </div> */}
        <form action="">
          <input type="text" name="name" placeholder="Your Full name"></input>
          <input type="email" name="email" placeholder="Your Email"></input>
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default contact;
