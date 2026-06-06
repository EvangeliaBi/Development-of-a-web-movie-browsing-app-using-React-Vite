// Δημιουργία component με minRating → η τρέχουσα τιμή rating που έρχεται από το γονικό MoviesPage και setMinRating → function για να αλλάξει η τιμή του rating από τον χρήστη και καλείται όταν ο χρήτης κάνει κάποια διάδραση με την σελίδα.
function RatingFilter({ minRating, setMinRating }) {
  return (
    <div className="rating-filter">
      {/*Εδώ εμφανίζεται η τιμή του rating, όπου το minRating.toFixed(1) → δείχνει 1 δεκαδικό (π.χ. 7.3).*/}
      <label>Minimum Rating: {minRating.toFixed(1)} ⭐</label>
      {/* ⭐ Stars */}
      {/*Παρακάτω υπάρχει το container για τα αστέρια.*/}
      <div className="rating-stars">
        {/*// Δημιουργία array με 10 στοιχεία (0-9) και πραγματοποιείται μέσα από μία loop.*/}
        {Array.from({ length: 10 }, (_, i) => (
          <span key={i}>{i < Math.round(minRating) ? "★" : "☆"}</span> // Σε αυτό το σημείο με την Math.round => στρογγυλοποιείται το rating (πχ. 7.3 => 7), καθώς το key={i}χρειάζεται ένα unique key για κάθε element από την λίστα, όπου στην περίπτωση που πάρω true από την συνθήκη επιστρέφεται το γεμάτο αστέρι ενώ εάν πάρω false από την συνθήκη επιστρέφεται το κενό αστέρι.
        ))}
      </div>

      {/* 🎚️ Slider */}
      {/*Δημιουργία slider με ελάχιστη τιμή 0 και μέγιστη τιμή 10, ενώ το step αλλάζει ανά 0.1.*/}
      <input
        type="range"
        min="0"
        max="10"
        step="0.1"
        value={minRating} // Εδώ το slider παίρνει την τιμή από το state.
        onChange={(e) => setMinRating(Number(e.target.value))} // Εδώ όταν ο χρήστης αλλάζει το slider, το string("7.3") μετατρέπεται σε Number ενημερώνοντας το state στο γονικό στοιχείο προκαλώντας το αντίστοιχο re-render για όλη την σελίδα.
      />

      {/* ⚡ Quick buttons */}
      <div className="rating-shortcuts">
        {/*Εδώ εμφανίζονται όλες οι ταινίες χωρίς να έχει εφαρμοστεί κάποιο φίλτρο στο rating των ταινιών*/}
        <button onClick={() => setMinRating(0)}>All</button>
        {/*Εμφάνιση των ταινιών που έχουν rating >=5.*/}
        <button onClick={() => setMinRating(5)}>5+</button>
        {/*Εδώ εμφανίζονται οι ταινίες που έχουν rating >7.*/}
        <button onClick={() => setMinRating(7)}>7+</button>
        {/*Κι εδώ εμφανίζονται μόνο οι top ταινίες που έχουν rating >8.*/}
        <button onClick={() => setMinRating(8)}>8+</button>
      </div>
    </div>
  );
}

export default RatingFilter; // Εξαγωγή του component για χρήση αλλού.
