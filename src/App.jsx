import { useState } from "react"; //Εισαγωγή του useState.
import LandingPage from "./components/LandingPage"; // Αρχική Οθόνη.
import MoviesPage from "./components/MoviesPage"; // Η κύρια σελίδα με τις ταινίες.
import Navbar from "./components/NavBar"; // Το πάνω μέρος (menu => navigation).
import About from "./components/About"; // Το About αφορά την σελίδα πληροφοριών.
import Contact from "./components/Contact"; // Σελίδα επικοινωνίας.

// Παρακάτω δημιουργείται το βασικό React component, καθώς αποτελεί το root component από το οποίο ξεκινά όλη η εφαρμογή.
function App() {
  // Το view αφορά για το ποια σελίδα δείχνουμε στον χρήστη, ενώ το setView αφορά την αλλαγή σελίδας.
  const [view, setView] = useState("landing"); // Σε αυτό το σημείο κρατάει για το ποια σελίδα εμφανίζεται με τις τιμές (landing, movies, about, contact), ενώ μέσω της function setView πραγματοποιείται η αλλαγή σελίδας μέσω ενός simple routing system.

  // Εάν το view είναι "landing", τότε εμφανίζεται το landing page
  if (view === "landing") {
    return <LandingPage onEnter={() => setView("movies")} />; // Εδώ όταν ο χρήστης πατήσει το enter αλλάζει το setView σε "movies" κι έτσι αλλάζει και η σελίδα σε MoviesPage.
  }

  // Παρακάτω εάν το view είναι το "about", τότε εμφανίζεται το Navbar και η σελίδα About us.
  if (view === "about") {
    return (
      <>
        <Navbar setView={setView} />
        <About />
      </>
    );
  }

  // Παρακάτω εμφανίζεται το contact component.
  if (view === "contact") {
    return (
      <>
        {/*Αλλαγή σελίδας όταν πατιέται από τον χρήστη το αντίστοιχο link, εμφανίζοντας το Contact component.*/}
        <Navbar setView={setView} />
        <Contact />
      </>
    );
  }

  return <MoviesPage setView={setView} />; // Στην περίπτωση που δεν πάρω true από καμία συνθήκη από τις παραπάνω, τότε εμφανίζεται το MoviesPage, δίνοντας την δυνατότητα στον χρήστη να αλλάζει σελίδα στο MoviesPage μέσω του Navbar.
}

export default App; // Εδώ γίνεται export το component App, το οποίο χρησιμοποιείται στο main.jsx.
