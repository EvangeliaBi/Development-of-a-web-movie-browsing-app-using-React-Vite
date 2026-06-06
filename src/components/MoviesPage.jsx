import Navbar from "./NavBar"; // component Navbar από το αρχείο NavBar.jsx
import Category from "./Category"; // Component που εμφανίζει κατηγορίες ταινιών
import Footer from "./Footer"; // Το footer της σελίδας.
import { CATEGORIES } from "../data"; // Εδώ γίνεται import ένα data (array με categories και movies) με named export, διότι περιέχει όλα τα δεδομένα των ταινιών.
import { useState, useEffect } from "react"; // Χρήση του useState → για state (π.χ. favorites, search) και του useEffect → για side effects (π.χ. localStorage).
import "../styles/movies.css"; // CSS styling για το component.
import RatingFilter from "./RatingFilter"; // Component για slider (φιλτράρισμα με rating).

function MoviesPage({ setView }) {
  // Εδώ δημιουργείται το React component με prop το { setView } που έρχεται από parent και χρησιμοποιείται για αλλαγή “σελίδας” ή view.
  // ❤️ Favorites
  // Δημιουργία state για αγαπημένες ταινίες με current value το favorites και το setFavorites ως function για update
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites"); // Σε αυτό το σημείο στην περίπτωση που υπάρχουν saved favorites => μετατρέπονται από string σε array (JSON.parse) διαφορετικά ξεκινά με άδειο array.
    return saved ? JSON.parse(saved) : [];
  });

  // 🔍 Search
  // Δημιουργία state για search input.
  const [search, setSearch] = useState("");

  // 🎚️ Rating
  // Δημιουργία state για Rating με Minimum rating filter.
  const [minRating, setMinRating] = useState(0);

  // 🎭 Genre
  // Δμιουργία state για είδος ταινίας και για το ποιο genre είναι ενεργό
  const [activeGenre, setActiveGenre] = useState("All");

  // 💾 Save favorites
  useEffect(() => {
    // Εδώ αποθηκεύονται οι αγαπημένες ταινίες στον browser για τον χρήστη της εφαρμογής, όπου μέσω του JSON.stringify γίνεται η μετατροπή σε string
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]); // Το effect τρέχει μόνο όταν αλλάζει το favorites.

  // ❤️ Toggle favorite
  function toggleFavorite(movie) {
    // Συνάρτηση για add/remove favorite, καθώς λαμβάνεται το προηγούμενο state.
    setFavorites((prev) =>
      prev.some((m) => m.id === movie.id)
        ? prev.filter((m) => m.id !== movie.id) // Εδώ ελέγχεται εάν υπάρχει ήδη η ταινία κι εάν υπάρχει πραγματοποιείται η αφαίρεση αυτής της ταινίας ενώ εάν δεν υπάρχει η ταινία προστίθεται.
        : [...prev, movie],
    );
  }

  // 🎭 Dynamic genres (καλύτερο από hardcoded)
  // Παρακάτω γίνεται η δημιουργία δυναμικών ειδών για την κάθε ταινία ενώ προστίθεται επιλογή για όλα με το "All"
  const GENRES = [
    "All",
    ...new Set(CATEGORIES.flatMap((cat) => cat.movies.flatMap((m) => m.genre))), // Σε αυτό το σημείο λαμβάνονται όλα τα genres από όλες τις ταινίες, αφαιρούνται τα duplicates και γίνονται spread σε array.
  ];

  // 🔥 Filter + sort
  // Παρακάτω δημιουργείται νέο array με φιλτραρισμένα δεδομένα, όπου διατηρούνται όλα τα properties της κατηγορίας για την κάθε ταινία
  const filteredCategories = CATEGORIES.map((cat) => ({
    ...cat,
    movies: cat.movies
      .filter((m) => {
        // Εδώ φιλτράρεται η κάθε ταινία
        const matchesSearch = m.title
          .toLowerCase()
          .includes(search.toLowerCase());
        const matchesRating = m.rating >= minRating; // Φιλτράρισμα με βάση το Rating
        const matchesGenre =
          activeGenre === "All" || m.genre.includes(activeGenre); // Φιλτράρισμα με βάση το genre.

        return matchesSearch && matchesRating && matchesGenre;
      })
      .sort((a, b) => b.rating - a.rating), // Εδώ πραγματοποιείται ταξινόμηση με βάση από το μεγαλύτερο rating στο μικρότερο
  })).filter((cat) => cat.movies.length > 0); // Εδώ αφαιρούνται κατηγορίες χωρίς ταινίες.

  return (
    <div className="movies-page">
      {/* 🔍 Navbar */}
      <Navbar setSearch={setSearch} setView={setView} />

      {/* 🎭 Genre Filter */}
      <div className="genre-filter">
        {GENRES.map(
          (
            genre, // Δημιουργία κουμπιών για κάθε genre (είδος ταινίας).
          ) => (
            <button
              key={genre} // Εδώ υπάρχει το unique key.
              className={`genre-btn ${activeGenre === genre ? "active" : ""}`} // Active button styling.
              onClick={() => setActiveGenre(genre)} // Αλλαγή του genre (είδους ταινίας).
            >
              {genre}
            </button>
          ),
        )}

        {/* 🔄 Reset Button */}
        {(activeGenre !== "All" || minRating > 0 || search) && ( // Το Reset Button θα εμφανιστεί μόνο εάν υπάρχει φίλτρο.
          <button
            className="genre-btn reset" // Reset Button με ξεχωριστό styling.
            onClick={() => {
              // Σε αυτό το σημείο επαναφέρονται όλα τα filters.
              setActiveGenre("All");
              setMinRating(0);
              setSearch("");
            }}
          >
            Reset
          </button>
        )}
      </div>

      {/* 🎚️ Rating Slider */}
      {/*Slider για rating.*/}
      <RatingFilter minRating={minRating} setMinRating={setMinRating} />

      {/*Σε αυτό το σημείο φαίνεται το ενεργό φίλτρο.*/}
      <p className="filter-info">
        Showing movies with rating ≥ {minRating.toFixed(1)}
      </p>

      <main className="movies-main">
        {/* ⭐ Favorites */}
        {favorites.length > 0 && ( // Αυτό εμφανίζεται μόνο εάν υπάρχουν favorites.
          <Category // Αποστολή favorites στο component.
            label="My Favorites ❤️"
            movies={favorites}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
          />
        )}

        {/* 🎬 Categories */}
        {filteredCategories.map(
          (
            cat, // Εμφάνιση της κάθε κατηγορίας ταινίας.
          ) => (
            <Category
              key={cat.label}
              label={cat.label}
              movies={cat.movies}
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
            />
          ),
        )}
      </main>

      <Footer />
    </div>
  );
}

export default MoviesPage; // Εξαγωγή του component για χρήση αλλού.
