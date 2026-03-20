import { FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa";
import "./Contact.css";

function Contact() {
    return (
        <div className="contact-page">
            <h1>Contact Us</h1>
            <p>We’re here to help you plan your next dream trip.</p>

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
                    <a href="https://wa.me/391234567890" target="_blank" rel="noopener noreferrer">
                         +39 123 456 7890
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Contact;