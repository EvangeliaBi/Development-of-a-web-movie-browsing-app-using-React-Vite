function MovieCard({
  // Δημιουργία React component με όνομα MovieCard που δέχεται ως props κάποια δεδομένα, τα οποία είναι παράμετροι μέσα από το αντικείμενο.
  movie, // το αντικείμενο της ταινίας
  isActive, // αν η κάρτα που αφορά την κάθε ταινία είναι “ανοιχτή”
  isBlurred, // αν είναι θολή (blur effect)
  onActivate, // μία function για άνοιγμα/κλείσιμο του card της ταινίας
  isFavorite, // αν είναι αγαπημένη
  onToggleFavorite, // function που έχει να κάνει με το favorite εικονίδιο και την ενργοποίηση ή απενεργοποίησή του
}) {
  return (
    // Εντός του return ξεκινά αυτό που αφορά το UI και εμφανίζεται αντιστοίχως στην οθόνη του χρήστη
    <div
      className={
        // Σε αυτό το σημείο δημιουργούνται CSS κλάσεις δυναμικά, επιτρέποντας τα animations, focus-efects και blur background
        "movie-card" +
        (isActive ? " movie-card-active" : "") +
        (isBlurred ? " movie-card-blurred" : "")
      }
    >
      {isActive ? ( // Σε αυτό το σημείο δείχνει αν η κάρα μίας συγκεκριμένης ταινίας είναι ενεργή και δείχνει το πίσω μέρος της κάρτας της ταινίας, διαφορετικά δείχνει το μπροστινό μέρος.
        <div className="card-back">
          <div className="card-back-genre">
            {/* Εδώ εμφανίζεται το είδος της ταινίας και το έτος που βγήκε η ταινία και
    το .join(" · ") ενώνει τα στοιχεία του array genre σε ένα string με · ανάμεσά τους */}
            {movie.genre.join(" · ")} · {movie.year}
          </div>
          {/*Εδώ εμφανίζεται ο τίτλος της ταινίας*/}
          <div className="card-back-title">{movie.title}</div>
          {/*Εδώ εμφανίζεται το rating της ταινίας*/}
          <div className="card-back-rating">★ {movie.rating}</div>
          {/*Εδώ εμφανίζεται η περιγραφή της ταινίας*/}
          <div className="card-back-director">🎬 {movie.director}</div>
          <div className="card-back-authors">✍️ {movie.authors.join(", ")}</div>
          <div className="card-back-meta">
            {movie.duration} min · {movie.language}
          </div>
          <p className="card-back-desc">{movie.description}</p>

          {/*Παρακάτω δημιουργείται κουμπί για favourite & unfavourite*/}
          <div className="card-actions">
            {/* ❤️ FAVORITE */}
            <button
              className="favorite-btn"
              onClick={(e) => {
                // Σε αυτό το σημείο εκτελείται η function όταν πατηθεί το κουμπί
                e.stopPropagation(); // αποτρέπει το click να “ανέβει” στο parent (ώστε να μην ανοίξει/κλείσει η κάρτα)
                onToggleFavorite(); // καλεί τη function που σου πέρασε το parent
              }}
            >
              {isFavorite ? "❤️ Remove" : "🤍 Add"}{" "}
              {/*Σε αυτό το σημείο αν η ταινία είναι στα favorite εμφανίζεται το μήνυμα "Remove" αλλιώς εμφανίζει πάνω στο κομπί το μήνυμα "Add"*/}
            </button>
            {/* ❌ CLOSE */}{" "}
            {/*Εδώ πρόκειτε για ένα κουμπί που αφορά το κλείσιμο της κάρτας για μία ταινία*/}
            <div className="card-back-close" onClick={onActivate}>
              ✕ CLOSE
            </div>
          </div>
        </div>
      ) : (
        <div className="card-front">
          <div className="card-poster">
            {movie.image ? <img src={movie.image} alt={movie.title} /> : "🎬"}{" "}
            {/*Σε αυτό το σημείο εμφανίζεται η εικόνα για την κάθε ταινία, αλλιώς εάν δεν έχει εικόνα τότε εμφανίζεται το αντίστοιχο emoji αν δεν υπάρχει κάποια εικόνα για την αντίστοιχη ταινία*/}
          </div>

          <div className="card-info">
            {/*Σε αυτό το σημείο εμφανίζεται ο τίτλος της ταινίας*/}
            <div className="card-title">{movie.title}</div>

            {/* ❤️ FAVORITE */}
            {/*Παρακάτω δημιουργείται το κουμπί favourite button εμφανίζοντας το κατάλληλο emoji*/}
            <button
              className="favorite-btn" // Εδώ εφαρμόζεται το styling της CSS για το κουμπί
              onClick={(e) => {
                // Σε αυτό το σημείο ορίζεται ο event handler για το κλικ του κουμπιού, διότι όταν ο χρήστης πατήσει το κουμπί, ενεργοποιείται το event object, το οποίο παρέχει πληροφορίες για το κλικ, δηλαδή ποιο στοιχείο συγκεκριμένα πατήθηκε
                e.stopPropagation(); // Εδώ σταματάει το event στο να ανέβει στο parent element
                onToggleFavorite(); // Σε αυτό το σημείο κάνω κλικ στο κουμπί και εκτελείται το onToggleFavorite() καθώς και το onActivate() του div, με αποτέλεσμα να ανοίγει η κάρτα της ταινίας και να γίνεται favourite η συγκεκριμένη ταινία. Στην ουσία κάνει πρσοθήκη ή αφαίρεση από favorites.
              }}
            >
              {isFavorite ? "❤️" : "🤍"}{" "}
              {/*Στην ουσία εδώ εάν το isFavorite === true τότε εμφανίζει την ένδειξη remove με την "❤️" που σημαίνει ότι ήδη έχει προστεθεί στα αγαπημένα αυτή η ταινία ενώ εάν το isFavorite === false εμφανίζει την ένδειξη Add με την "🤍".*/}
            </button>

            {/* INFO */}
            <button
              className="card-btn"
              onClick={(e) => {
                // Εδώ πραγματοποιείται το click event παρέχοντας πληροφορίες για το event αποτρέποντας το event να πάει προς το parent element.
                e.stopPropagation();
                onActivate();
              }}
            >
              INFO
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieCard; // Εδώ πραγματοποιείται το (export) για το component MovieCard ως default export από αυτό το αρχείο, καθώς μπορεί να χρησιμοποιηθεί σε άλλα components (π.χ. MoviesPage, Category).
