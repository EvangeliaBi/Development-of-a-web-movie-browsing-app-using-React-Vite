function Footer() {
  // Ορίζουμε τους συνδέσμους σε arrays ώστε να τους κάνουμε map παρακάτω
  // και να αποφύγουμε να γράφουμε ξεχωριστό <li> για κάθε στοιχείο χειροκίνητα και για μελλοντικη επεκτασιμότητα
  const browseLinks = [
    "All Movies",
    "Action",
    "Adventure",
    "Horror",
    "Fantasy",
    "Top Rated",
  ];

  const legalLinks = ["Privacy Policy", "Terms of Use", "Cookie Policy"];

  const supportLinks = [
    "Help Center",
    "Contact Us",
    "Press",
    "Blog",
    "Feedback",
  ];

  return (
    <footer className="footer">
      {/* 4 στήλες: brand + Browse + Legal + Support */}
      <div className="footer-grid">
        {/* Λογότυπο και σύντομη περιγραφή */}
        <div className="footer-brand">
          <div className="footer-brand-name">
            CINE<span>VERSE</span>
          </div>
          <p className="footer-brand-desc">
            Your ultimate destination for streaming the latest movies and
            classic films.
          </p>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-heading">Browse</h4>
          <ul className="footer-col-list">
            {/* Το map παράγει αυτόματα ένα <li> για κάθε στοιχείο του array.
                Το key={l} χρειάζεται από τη React για να παρακολουθεί τη λίστα. */}
            {browseLinks.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-heading">Legal</h4>
          <ul className="footer-col-list">
            {legalLinks.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-heading">Support</h4>
          <ul className="footer-col-list">
            {supportLinks.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright — εμφανίζεται κάτω από όλες τις στήλες */}
      <div className="footer-bottom">
        <p className="footer-copyright">
          © 2026 CineVerse. All rights reserved. Made with passion for cinema
          lovers.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
