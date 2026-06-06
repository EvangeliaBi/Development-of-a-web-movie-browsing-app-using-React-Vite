import "../styles/navbar.css"; // CSS αρχείο για styling του navbar.
import { useState } from "react"; // Εισαγωγή του React hook useState διατήρηση του state.

// Δημιουργία component με Props setSearch → function από parent για search και setView → function για navigation (Home, About, Contact)
function Navbar({ setSearch, setView }) {
  const [localSearch, setLocalSearch] = useState(""); // Δημιουργία τοπικού state για το input, όπου το localSearch περιέχει του τι γράφει ο χρήστης ενώ το setLocalSearch → ενημερώνει το input, καθώς αυτό γίνεται για να μην κάνει search σε κάθε γράμμα για καλύτερο performance και UX.

  function handleSearch() {
    // Εδώ λαμβάνεται το localsearch και αποστέλεται στο parent (MoviesPage).
    setSearch(localSearch);
  }

  return (
    // Εντός του return εμφανίζονται τα παρακάτω στο UI στην οθόνη του χρήστη δηλαδή.
    // Παρακάτω βρίσκεται το βασικό container του navbar.
    <nav className="navbar">
      {/* Brand */}
      <div className="navbar-brand">
        CINE<span>VERSE</span>
      </div>

      {/* Right side */}
      <div className="navbar-right">
        {/* Search */}
        <div className="navbar-search">
          <input
            type="text"
            placeholder="Search movies..."
            value={localSearch} // Σε αυτό το σημείο το input δείχνει πάντα το state.
            onChange={(e) => setLocalSearch(e.target.value)} // Όταν γράφει ο χρήστης λαμβάνεται η τιμή (e.target.value) και ενημερώνεται το state.
            onKeyDown={(e) => e.key === "Enter" && handleSearch()} // Σε αυτό το σημείο εάν ο χρήστης πατήσει enter καλείται η handleSearch(), καθώς αποτελεί ένα UX Improvement, από την στιγμή που δεν χρειάζεται να πατήσει το κουμπί ο χρήστης.
          />

          {/*Πατώντας το κουμπί search τότε καλείται η handleSearch για να εκτελεστεί, που στην ουσία είναι το 🔍 = icon*/}
          <button className="search-btn" onClick={handleSearch}>
            🔍
          </button>
        </div>

        {/* Links */}
        {/*Λίστα με navigation buttons.*/}
        {/*Όταν πατηθεί το κουμπί Home τότε αλλάζει το setView("movies") και μεταφέρει τον χρήστη στην αρχική σελίδα, όπου αλλάζει σε MoviesPage.*/}
        {/*Παρακάτω πατώντας το κουμπί μεταφέρεται ο χρήστης στην σελίδα About */}
        {/*Παρακάτω πατώντας το κουμπί μεταφέρεται ο χρήστης στην σελίδα Contact */}
        <ul className="navbar-links">
          <li>
            <button onClick={() => setView("movies")} className="navbar-link">
              Home
            </button>
          </li>

          <li>
            <button onClick={() => setView("about")} className="navbar-link">
              About Us
            </button>
          </li>

          <li>
            <button onClick={() => setView("contact")} className="navbar-link">
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar; // Εξαγωγή του component για χρήση αλλού.
