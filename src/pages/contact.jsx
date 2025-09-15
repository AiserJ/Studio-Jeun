// src/pages/contact.jsx
import "../styles/contact.css";
import React, { useEffect } from "react";

const email = "studiojeun@icloud.com";

function AccordionItem({ title, children }) {
  return (
    <details className="sj-accordion-item">
      <summary className="sj-accordion-summary">{title}</summary>
      <div className="sj-accordion-panel">
        <div className="sj-accordion-inner">{children}</div>
      </div>
    </details>
  );
}

export default function Contact() {

  useEffect(() => {
  console.log('%cCONTACT LIVE', 'background: #3b82f6; color: white; padding:2px 6px;');
}, []);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const scope = document.querySelector(".sj-faq");
    if (!scope) return;

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
          panel.style.height = "auto";
          panel.style.transition = "";
          return;
        }

        panel.style.height = "0px";
        // reflow
        panel.offsetHeight;
        panel.style.transition = "height .28s ease";
        panel.style.height = end + "px";

        const onEnd = (e) => {
          if (e.propertyName !== "height") return;
          panel.removeEventListener("transitionend", onEnd);
          // Fix: rester ouvert à hauteur naturelle
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

        const start =
          panel.getBoundingClientRect().height || panel.scrollHeight;

        panel.style.height = start + "px";
        // reflow
        panel.offsetHeight;
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
        e.preventDefault();
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
      if (details.open) {
        panel.style.height = "auto";
      } else {
        panel.style.height = "0px";
      }
    });

    return () => {
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return (
    <main className="sj-root">
      <section id="contact" className="sj-section">
        <div
          className="sj-container"
          style={{ display: "grid", gap: 24, gridTemplateColumns: "1fr" }}
        >
          <div className="sj-faq">
            <h2>Questions fréquentes</h2>

            <AccordionItem title="Comment demander un devis ?">
              Envoie quelques photos et le modèle par email. Réponse rapide avec
              estimation.
            </AccordionItem>

            <AccordionItem title="Délais moyens">
              Nettoyage (48–72h), restauration (3–7j), custom (1–3 semaines).
            </AccordionItem>

            <AccordionItem title="Expédition / Remise en main propre">
              Remise en main propre possible. Envoi postal accepté avec suivi.
            </AccordionItem>
          </div>

          <div className="sj-contact">
            <h2>Contact</h2>
            <p style={{ color: "#c9c9c9", marginTop: 6 }}>
              Projet en tête&nbsp;? Discutons.
            </p>

            <div className="sj-list">
            <a className="sj-a sj-a-contact" href={`mailto:${email}`}>
              ✉️ {email}
            </a>
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