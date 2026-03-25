import { FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa";
import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);

    setSubmitted(true);

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>We’re here to help you plan your next dream trip.</p>

      {/* FORM */}
      {submitted ? (
        <>
        <div className="success-message">
          ✅ Message sent successfully!
          <span>(Demo form — no real message was sent)</span>
        </div>

        <button className="reset-btn"
        onClick={() => setSubmitted(false)}>
            Send Another Message
        </button>
        </>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      )}

      {/* CONTATTI */}
      <div className="contact-card">
        <p>
          <FaEnvelope style={{ color: "#2563eb" }} />{" "}
          <a href="mailto:contact@dreamtrips.com">
            contact@dreamtrips.com
          </a>
        </p>

        <p>
          <FaPhone style={{ color: "#64748b" }} />{" "}
          <a href="tel:+391234567890">
            +39 123 456 7890
          </a>
        </p>

        <p>
          <FaWhatsapp style={{ color: "#25d366" }} />{" "}
          <a
            href="https://wa.me/391234567890"
            target="_blank"
            rel="noopener noreferrer"
          >
            +39 123 456 7890
          </a>
        </p>
      </div>
    </div>
  );
}

export default Contact;