CineVerse 🎬

A modern movie browsing web application built with React and Vite.

Overview

CineVerse allows users to explore movies through interactive movie cards, browse categories, search titles, filter by rating and genre, and maintain a personalized favorites list.

The application was developed as part of a Human Computer Interaction (HCI) university project and was based on an original Figma prototype that was transformed into a fully functional React application.

Features:
Movie Discovery
Browse movies by category
Popular Movies section
Latest Movies section
Genre-based categorization
Search & Filtering
Movie search functionality
Genre filtering
Rating filter slider
Quick rating selection
Favorites System
Add movies to favorites
Remove movies from favorites
Dedicated Favorites section
Persistent storage using LocalStorage
Interactive UI
Flip-card movie details
Blur effect on inactive cards
Responsive component-based architecture
Dark cinematic theme
Additional Pages
Landing Page
About Page
Contact Page

Technologies Used:
React
Vite
JavaScript (ES6+)
JSX
CSS3
React Hooks (useState, useEffect)
LocalStorage API

Project Structure:
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── MovieCard.jsx
│   ├── Category.jsx
│   └── RatingFilter.jsx
│
├── pages/
│   ├── LandingPage.jsx
│   ├── MoviesPage.jsx
│   ├── About.jsx
│   └── Contact.jsx
│
├── data/
│   └── data.js
│
├── App.jsx
└── main.jsx

Installation:

Clone the repository:
git clone https://github.com/USERNAME/CineVerse.git

Navigate into the project:
cd CineVerse

Install dependencies:
npm install

Run the development server:
npm run dev

The application will be available at:
http://localhost:5173

Build for Production:
npm run build

Preview production build:
npm run preview

Design Decisions:
Single Page Application architecture
Component-based design
Separation of concerns
LocalStorage persistence for favorites
Interactive flip-card experience
Dark cinematic UI inspired by streaming platforms

Current Limitations:
No backend integration
Static movie dataset
No user authentication
No React Router implementation
Favorites stored only locally
Contact form is non-functional

Future Improvements:
TMDB API integration
React Router
User authentication
Cloud synchronization of favorites
Context API or Redux state management
Pagination and lazy loading
Enhanced search functionality
(https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in the project.
