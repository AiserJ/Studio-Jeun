// src/components/head.jsx
import { useState } from "react";
import "../styles/head.css";

export default function Head(){
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-row">
        <a href="/" className="brand">Studio Jeun</a>

        <button
          className="burger"
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          onClick={()=>setOpen(v=>!v)}
        >
          <span/><span/><span/>
        </button>

          <nav
            className={`nav ${open ? "nav--open" : ""}`}
            onClick={(e) => {
              if (e.target.tagName === "A") setOpen(false);
            }}
          >
            <a href="/#services">Services</a>
            <a href="/#work">Réalisations</a>
            <a href="/#contact" className="btn">Contact</a>
          </nav>
      </div>
    </header>
  );
}