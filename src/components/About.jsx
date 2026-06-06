import "../styles/about.css"; // Κάνω import το CSS αρχείο που περιέχει τα styles για το About component.

function About() {
  // Ορισμός React Component μέσω του function που αφορά το About, επιστρέφοντας κάτι renderable, προκειμένου να εμφανιστεί στην οθόνη και αφορά το UI.
  return (
    <div className="about-container">
      <h1>About CineVerse</h1>

      <p>
        🎬 Whatever you’re into, whatever your mood, CineVerse delivers the next
        series, films you’ll obsess over. This is entertainment the world never
        sees coming – and can’t stop talking about.
      </p>

      <p>
        🚀 We are entertaining over half a billion people in more than 190
        countries and 50 languages, programmed for just about every taste and
        culture.
      </p>

      <div className="about-features">
        <h2>✨ Features</h2>
        <ul>
          <li>🔍 Fast movie search</li>
          <li>🎞️ Organized categories</li>
          <li>📱 Responsive design</li>
          <li>⚡ Smooth user experience</li>
        </ul>
      </div>
    </div>
  );
}

export default About; // Σε αυτό το σημείο μέσω του export το component γίνεται διαθέσιμο για χρήση αλλού και συγκεκριμένα για import στο App.jsx.
