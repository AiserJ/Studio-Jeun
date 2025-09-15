// src/pages/realisations.jsx
import "../styles/realisation.css";
import img1 from "../assets/AM1BW.jpg";
import img2 from "../assets/NB2002RPPG.jpg";
import img3 from "../assets/PSK.jpg";
import img4 from "../assets/NNC.jpg";
import img5 from "../assets/NCB.jpg";
import img6 from "../assets/AF1B.jpg";

export default function Realisations() {
  return (
    <main className="sj-root">
      {/* Réalisations */}
      <section id="work" className="sj-section">
        <div className="sj-container">
          <div className="sj-topline">
            <h2>Réalisations</h2>
            <div className="sj-linkline">Sélection récente</div>
          </div>

          <section className="recent-works">
            <h2>Dernières réalisations</h2>
            <div className="works-grid">
              <div className="work-card">
                <img src={img1} alt="Nike Air Max 1 — Purge" />
                <p>Nike Air Max 1 — Purge</p>
              </div>
              <div className="work-card">
                <img
                  src={img2}
                  alt="New Balance 2002R Protection Pack — Purge & Laceswap"
                />
                <p>New Balance 2002R Protection Pack — Purge & Laceswap</p>
              </div>
              <div className="work-card">
                <img src={img3} alt="Puma x Stray Kids — Custom" />
                <p>Puma x Stray Kids — Custom</p>
              </div>
              <div className="work-card">
                <img src={img4} alt="Nike Nocteiz — Custom" />
                <p>Nike Nocteiz — Custom</p>
              </div>
              <div className="work-card">
                <img src={img5} alt="Nike Calma Bonita — Custom" />
                <p>Nike Calma Bonita — Custom</p>
              </div>
              <div className="work-card">
                <img src={img6} alt="Nike Air Force 1 Bandana — Custom" />
                <p>Nike Air Force 1 Bandana — Custom</p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}