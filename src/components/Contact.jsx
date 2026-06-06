import "../styles/contact.css"; // Εδώ γίνεται import το αρχείο CSS που περιέχει τα styles για το Contact component.

function Contact() {
  // Σε αυτό το σημείο δηλώνω ένα React component και επιστρέφεται στο UI και εμφανίζεται στην οθόνη.
  return (
    // Εντός του return υπάρχει αυτό που θα εμφανιστεί στην οθόνη.
    <div className="contact-container">
      <h1>Contact CineVerse</h1>

      <p>
        📬 Have a question, suggestion, or just want to say hi? We'd love to
        hear from you!
      </p>

      <div className="contact-info">
        <h2>📩 Get in Touch</h2>

        <ul>
          <li>📧 Email: support@cineverse.com</li>
          <li>📱 Phone: +30 123 456 789</li>
          <li>📍 Location: Greece</li>
        </ul>
      </div>

      <div className="contact-form">
        <h2>✉️ Send a Message</h2>

        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>

        <button>Send</button>
      </div>

      <div className="contact-footer">
        <p>We usually reply within 24 hours ⚡</p>
      </div>
    </div>
  );
}

export default Contact; // Με το export default γίνεται το component διαθέσιμο σε άλλα αρχεία, που σημαίνει ότι θα χρησιμοποιηθεί μέσω του import (πχ. import Contact from "./Contact").
