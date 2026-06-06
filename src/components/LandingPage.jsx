// Δημιουργία component για εμφάνιση της αρχικής σελίδας (Landing Page), όπου όταν πατηθεί το αντίστοιχο κουμπί ενεργοποιείται και καλείται η αντίστοιχη function αλλάζοντας την σελίδα της εφαμρογής.
function LandingPage({ onEnter }) {
  return (
    <div className="landing">
      <div className="landing-content">
        <h1 className="landing-title">
          CINE<span>VERSE</span>
        </h1>
        <p className="landing-tagline">
          Two hundred films. Ten worlds.
          <br />
          One place to get lost in all of them.
        </p>
        {/*Παρακάτω όταν πατηθεί το κουμπί ενεργοποιείται η function onEnter και αλλάζει το state στην εφαρμογή και η React κάνει re-render όπου το App επιστρέφει ένα άλλο component.*/}
        <button className="landing-btn" onClick={onEnter}>
          <span className="landing-btn-icon">▶</span>
          EXPLORE NOW
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
