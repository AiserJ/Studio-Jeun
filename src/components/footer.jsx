// src/components/footer.jsx
import "../styles/footer.css"; // si tu as un style dédié

export default function Footer() {
  const email = "studiojeun@icloud.com";

  return (
    <footer className="sj-footer">
      <div className="sj-container sj-foot-row">
        <p>© {new Date().getFullYear()} Studio Jeun — Tous droits réservés.</p>
        <div style={{ display: "flex", gap: 14 }}>
          <a className="sj-a" href={`mailto:${email}`}>
            Email
          </a>
          <a
            className="sj-a"
            href="https://instagram.com/studio_jeun"
            target="_blank"
            rel="noreferrer noopener"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}