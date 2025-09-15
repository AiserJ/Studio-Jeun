// src/pages/home.jsx
import "../styles/base.css";
import "../styles/tarifs.css";
import "../styles/realisation.css";
import "../styles/contact.css";

import React, { useEffect } from "react";

import logo from "../assets/Logo.png";
import img1 from "../assets/AM1BW.jpg";
import img2 from "../assets/NB2002RPPG.jpg";
import img3 from "../assets/PSK.jpg";
import img4 from "../assets/NNC.jpg";
import img5 from "../assets/NCB.jpg";
import img6 from "../assets/AF1B.jpg";
import img7 from "../assets/AVAP.jpeg";

export default function Home() {
  const email = "studiojeun@icloud.com";

  // Animation <details> (FAQ) — ouverture/fermeture fluide
  useEffect(() => {
    const scope = document.querySelector(".sj-faq");
    if (!scope) return;

    const prefersReduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const detailsList = Array.from(
      scope.querySelectorAll("details.sj-accordion-item")
    );

    const cleanups = [];

    detailsList.forEach((details) => {
      const summary = details.querySelector(".sj-accordion-summary");
      const panel = details.querySelector(".sj-accordion-panel");
      if (!summary || !panel) return;

      const openWithAnim = () => {
        details.setAttribute("open", "");
        const end = panel.scrollHeight;

        if (prefersReduced) {
          panel.style.transition = "";
          panel.style.height = "auto";
          return;
        }

        panel.style.height = "0px";
        panel.offsetHeight; // reflow
        panel.style.transition = "height .28s ease";
        panel.style.height = end + "px";

        const onEnd = (e) => {
          if (e.propertyName !== "height") return;
          panel.removeEventListener("transitionend", onEnd);
          panel.style.transition = "";
          panel.style.height = "auto";
        };
        panel.addEventListener("transitionend", onEnd);
      };

      const closeWithAnim = () => {
        if (prefersReduced) {
          details.removeAttribute("open");
          panel.style.transition = "";
          panel.style.height = "0px";
          return;
        }

        const start = panel.getBoundingClientRect().height || panel.scrollHeight;
        panel.style.height = start + "px";
        panel.offsetHeight; // reflow
        panel.style.transition = "height .28s ease";
        panel.style.height = "0px";

        const onEnd = (e) => {
          if (e.propertyName !== "height") return;
          panel.removeEventListener("transitionend", onEnd);
          details.removeAttribute("open");
          panel.style.transition = "";
          panel.style.height = "0px";
        };
        panel.addEventListener("transitionend", onEnd);
      };

      const onToggle = (e) => {
        e.preventDefault(); // on gère l’animation nous-mêmes
        if (panel.dataset.animating === "1") return;
        panel.dataset.animating = "1";

        const release = () =>
          setTimeout(() => {
            delete panel.dataset.animating;
          }, prefersReduced ? 0 : 340);

        if (!details.open) {
          openWithAnim();
          release();
        } else {
          closeWithAnim();
          release();
        }
      };

      summary.addEventListener("click", onToggle);
      cleanups.push(() => summary.removeEventListener("click", onToggle));

      // État initial propre
      if (details.open) panel.style.height = "auto";
      else panel.style.height = "0px";
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <main className="sj-root">
      {/* Hero */}
      <section id="home" className="sj-hero">
        <div className="sj-ring1" />
        <div className="sj-ring2" />
        <div className="sj-container sj-hero-grid">
          <div>
            <h1 className="sj-title">
              Sneaker Cleaning & Custom <br /> par Studio Jeun
            </h1>
            <div className="sj-sub">
              Passionné de sneakers depuis 2010 <br /> Chaque paire porte une histoire…
            </div>
            <p className="sj-p">
              Purge, restauration et custom sur-mesure pour Air Force, Jordan, Converse et plus.
              Donne une seconde vie à tes paires, avec des finitions durables.
            </p>
            <div className="sj-actions">
              <a className="sj-btn" href="#services">Découvrir les services</a>
              <a className="sj-btn secondary" href={`mailto:${email}?subject=Devis%20Studio%20Jeun`}>Demander un devis</a>
            </div>
            <div className="sj-accent-line" />
          </div>

          <div>
            <div className="sj-badge-hero">
              <img src={logo} alt="Studio Jeun" />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="sj-section">
        <div className="sj-container">
          <div className="sj-topline">
            <h2>Services</h2>
            <a className="sj-linkline sj-a" href="#contact">Prendre contact →</a>
          </div>

          <div className="sj-cards">
            <article className="sj-card">
              <h3 className="mb-8">Nettoyage Premium</h3>
              <p>Dépoussiérage, brossage à la main, semelles, lacets et finitions. Produits respectueux des matières.</p>
            </article>
            <article className="sj-card">
              <h3 className="mb-8">Restauration</h3>
              <p>Réparation de microfissures, recoloration du cuir, décrassage profond, repaints ciblés.</p>
            </article>
            <article className="sj-card">
              <h3 className="mb-8">Custom & Personnalisation</h3>
              <p>Designs sur-mesure (Air Force, Jordan, Converse) avec vernis et protection longue durée.</p>
            </article>
          </div>

          <div className="sj-columns">
            <article className="sj-card">
              <h3 className="mb-8">Notre approche en 3 étapes</h3>
              <div className="sj-steps">
                <div className="sj-step">
                  <div className="sj-step-title">1. Diagnostic</div>
                  <div className="sj-muted">On évalue l'état, les matières et le rendu souhaité.</div>
                </div>
                <div className="sj-step">
                  <div className="sj-step-title">2. Traitement</div>
                  <div className="sj-muted">Nettoyage / restauration / custom selon le besoin.</div>
                </div>
                <div className="sj-step">
                  <div className="sj-step-title">3. Protection</div>
                  <div className="sj-muted">Finitions et scellants pour une meilleure durabilité.</div>
                </div>
              </div>
            </article>

            <div className="sj-card">
              <h3 className="mb-8">Avant / Après</h3>
              <div className="sj-placeholder">
                <img className="sj-img-fluide" src={img7} alt="Avant après Calma Bonita" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Réalisations (aperçu) */}
      <section id="work" className="sj-section">
        <div className="sj-container">
          <div className="sj-topline">
            <h2>Réalisations</h2>
            <a className="sj-linkline sj-a" href="/realisations">Voir toutes les réalisations →</a>
          </div>

          <section className="recent-works">
            <h2>Dernières réalisations</h2>
            <div className="works-grid">
              <div className="work-card"><img src={img1} alt="Nike Air Max 1 — Purge" /><p>Nike Air Max 1 — Purge</p></div>
              <div className="work-card"><img src={img2} alt="New Balance 2002R — Purge & Laceswap" /><p>New Balance 2002R — Purge & Laceswap</p></div>
              <div className="work-card"><img src={img3} alt="Puma x Stray Kids — Custom" /><p>Puma x Stray Kids — Custom</p></div>
              <div className="work-card"><img src={img4} alt="Nike Nocteiz — Custom" /><p>Nike Nocteiz — Custom</p></div>
              <div className="work-card"><img src={img5} alt="Nike Calma Bonita — Custom" /><p>Nike Calma Bonita — Custom</p></div>
              <div className="work-card"><img src={img6} alt="AF1 Bandana — Custom" /><p>AF1 Bandana — Custom</p></div>
            </div>
          </section>
        </div>
      </section>

      {/* Contact (FAQ + liens) */}
      <section id="contact" className="sj-section">
        <div className="sj-container sj-grid-1fr">
          <div className="sj-faq">
            <h2>Questions fréquentes</h2>

            <details className="sj-accordion-item">
              <summary className="sj-accordion-summary">Comment demander un devis ?</summary>
              <div className="sj-accordion-panel">
                <div className="sj-accordion-inner">
                  Envoie quelques photos et le modèle par email. Réponse rapide avec estimation.
                </div>
              </div>
            </details>

            <details className="sj-accordion-item">
              <summary className="sj-accordion-summary">Délais moyens</summary>
              <div className="sj-accordion-panel">
                <div className="sj-accordion-inner">
                  Nettoyage (48–72h), restauration (3–7j), custom (1–3 semaines).
                </div>
              </div>
            </details>

            <details className="sj-accordion-item">
              <summary className="sj-accordion-summary">Expédition / Remise en main propre</summary>
              <div className="sj-accordion-panel">
                <div className="sj-accordion-inner">
                  Remise en main propre possible. Envoi postal accepté avec suivi.
                </div>
              </div>
            </details>
          </div>

          <div className="sj-contact">
            <h2>Contact</h2>
            <p className="sj-contact-lead">Projet en tête&nbsp;? Discutons.</p>

            <div className="sj-list">
              <a className="sj-a sj-a-contact" href={`mailto:${email}`}>✉️ {email}</a>
              <a
                className="sj-a sj-a-contact"
                href="https://instagram.com/studio_jeun"
                target="_blank"
                rel="noreferrer noopener"
              >
                📷 @studio_jeun
              </a>
            </div>

            <div className="sj-btn-wrapper">
              <a
                className="sj-btn"
                href={`mailto:${email}?subject=Devis%20Studio%20Jeun`}
              >
                Écrire un email
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}