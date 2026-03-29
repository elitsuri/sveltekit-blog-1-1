import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>sveltekit-blog-1</h1>
        <p>SvelteKit Blog 1: High-performance blog with SSR, markdown, SEO, and dark mode</p>
      </header>
      <main>
        <p>This project uses React for the frontend and connects to a backend API.</p>
      </main>
    </div>
  );
}
