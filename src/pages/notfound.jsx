import React from "react";
import { Link } from "react-router-dom";
import "../styles/notfound.css";

export default function NotFound() {
  return (
    <main className="sj-section">
      <div className="sj-container sj-404">
        <h1>404</h1>
        <p>Oups… la page que vous recherchez est introuvable.</p>
        <Link to="/" className="sj-btn">
          Retour à l'accueil
        </Link>
      </div>
    </main>
  );
}