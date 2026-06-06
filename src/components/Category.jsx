import { useState, useRef } from "react";
import MovieCard from "./MovieCard";

function Category({
  label,
  movies,
  favorites,
  onToggleFavorite,
  onMovieClick,
}) {
  // Αποθηκεύει το id της κάρτας που είναι ανοιχτή αυτή τη στιγμή.
  // Όταν είναι null, σημαίνει ότι καμία κάρτα δεν είναι ανοιχτή.
  const [activeId, setActiveId] = useState(null);

  // Το useRef μας δίνει πρόσβαση απευθείας στο HTML element της σειράς των καρτών
  // ώστε να μπορούμε να αλλάζουμε το scrollLeft του μέσα στη handleWheel.
  const rowRef = useRef(null);

  // Καλείται όταν ο χρήστης κάνει κλικ σε μια κάρτα.
  // Αν η κάρτα ήταν ήδη ανοιχτή την κλείνει και επιστρέφει null.
  // Αν ήταν κλειστή την ανοίγει αποθηκεύοντας το id της
  // επίσης ενημερώνει το App για το ποια τανία επιλέχθηκε.
  function handleCardClick(movie) {
    setActiveId((prev) => (prev === movie.id ? null : movie.id));
    onMovieClick(movie); // ανεβάζει το επιλεγμένο movie στο App μέσω prop
  }

  // Καλείται κάθε φορά που ο χρήστης κάνει scroll πάνω στη σειρά.
  // Επειδή το scroll του mouse είναι κατακόρυφο το μετατρέπουμε
  // σε οριζόντιο αλλάζοντας το scrollLeft του row element.
  // Το e.preventDefault() εμποδίζει την σελίδα να κάνει scroll προς τα κάτω.
  // Το  0.5 μειώνει την ταχύτητα ώστε να μην είναι πολύ απότομο.
  function handleWheel(e) {
    if (!rowRef.current) return;
    e.preventDefault();
    rowRef.current.scrollLeft += e.deltaY * 0.5;
  }

  return (
    <section className="category">
      <h2 className="category-title">{label}</h2>

      {/* Η οριζόντια σειρά με τις κάρτες. Το ref συνδέεται με το rowRef
          ώστε η handleWheel να μπορεί να ελέγχει το scroll της. */}
      <div className="category-row" ref={rowRef} onWheel={handleWheel}>
        {/* Διατρέχουμε όλα τα movies της κατηγορίας και δημιουργούμε
            μια MovieCard για το καθένα */}
        {movies.map((movie) => (
          <MovieCard
            key={movie.id} // μοναδικό key που χρειάζεται η React για τα lists
            movie={movie} // τα δεδομένα της ταινίας (τίτλος, poster, κλπ)
            isActive={activeId === movie.id} // true μόνο αν αυτή η κάρτα είναι ανοιχτή
            isBlurred={activeId !== null && activeId !== movie.id} // blur αν κάποια άλλη είναι ανοιχτή
            isFavorite={favorites?.some((m) => m.id === movie.id)} // ελέγχει αν υπάρχει στα αγαπημένα
            onToggleFavorite={() => onToggleFavorite(movie)} // προσθήκη/αφαίρεση από αγαπημένα
            onActivate={() => handleCardClick(movie)} // άνοιγμα/κλείσιμο της κάρτας
          />
        ))}
      </div>
    </section>
  );
}

export default Category;
