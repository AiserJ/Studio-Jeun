// src/pages/tarifs.jsx
import "../styles/tarifs.css";
import { Link } from "react-router-dom";

export default function Tarifs() {
  return (
    <main className="sj-root">
      {/* Services */}
      <section id="services" className="sj-section">
        <div className="sj-container">
          <div className="sj-topline">
            <h2>Services</h2>
            <Link className="sj-linkline sj-a" to="/contact">
              Prendre contact →
            </Link>
          </div>

          <div className="sj-cards">
            <article className="sj-card">
              <h3>Nettoyage Premium</h3>
              <p>
                Dépoussiérage, brossage à la main, semelles, lacets et finitions.
                Produits respectueux des matières.
              </p>
            </article>
            <article className="sj-card">
              <h3>Restauration</h3>
              <p>
                Réparation de microfissures, recoloration du cuir, décrassage
                profond, repaints ciblés.
              </p>
            </article>
            <article className="sj-card">
              <h3>Custom & Personnalisation</h3>
              <p>
                Designs sur-mesure (Air Force, Jordan, Converse) avec vernis et
                protection longue durée.
              </p>
            </article>
          </div>

          <div className="sj-columns">
            <article className="sj-card">
              <h3 style={{ marginBottom: 8 }}>Notre approche en 3 étapes</h3>
              <div className="sj-steps">
                <div className="sj-step">
                  <div className="sj-step-title">1. Diagnostic</div>
                  <div className="sj-muted">
                    On évalue l'état, les matières et le rendu souhaité.
                  </div>
                </div>
                <div className="sj-step">
                  <div className="sj-step-title">2. Traitement</div>
                  <div className="sj-muted">
                    Nettoyage / restauration / custom selon le besoin.
                  </div>
                </div>
                <div className="sj-step">
                  <div className="sj-step-title">3. Protection</div>
                  <div className="sj-muted">
                    Finitions et scellants pour une meilleure durabilité.
                  </div>
                </div>
              </div>
            </article>

            <div className="sj-card">
              <h3 style={{ marginBottom: 8 }}>Avant / Après</h3>
              <div className="sj-placeholder">
                Placeholders de tes projets (Jordan 13, AF1 Slam Jam, etc.)
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}