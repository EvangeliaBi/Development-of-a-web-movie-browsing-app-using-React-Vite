import { StrictMode } from "react"; // Εισαγωγή του StrictMode από τη React, το οποίο είναι ένα εργαλείο για το debugging, διότι εντοπίζει πιθανά bugs, προειδοποιεί για κακές πρακτικές και κάνει κάποιους επιπλέον ελέγχους επηρρεάζοντας το development.
import { createRoot } from "react-dom/client"; // Εισαγωγή της function που συνδέει την React με το DOM (HTML).
import "./index.css"; // Φορτώνονται τα global styles της css (body, fonts, resets) που ισχύουν για όλη την εφαρμογή
import App from "./App.jsx"; // Εδώ λαμβάνεται το βασικό component, καθώς το App είναι η ρίζα της εφαρμογής και όλο το UI ξεκινά από εδώ.

// Παρακάτω λαμβάνεται το HTML element από το index.html, καθώς αυτό είναι το σημείο όπου θα μπει η React, αφού δημιουργείται ένα React root που υποδηλώνει ότι θα είναι το σημείο αναπαράστασης του UI.
createRoot(document.getElementById("root")).render(
  // Μέσα στο render, παρακάτω λέμε στην react τί να εμφανίσει μέσα στο root, ενεργοποιώντας τα debugging checks μέσω του (StrictMode), μέσω του App που είναι το βασικό component εμφανίζονται τα (Navbar, Pages, Movies)
  <StrictMode>
    <App />
  </StrictMode>,
);
