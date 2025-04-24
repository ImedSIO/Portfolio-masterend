import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "../Particle";

function Synthese() {
  const [zoom, setZoom] = useState(1);
  const containerRef = useRef(null);
  const iframeRef = useRef(null);
  const [konami, setKonami] = useState([]);

  const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

  // Zoom effect
  useEffect(() => {
    if (iframeRef.current) {
      iframeRef.current.style.transform = `scale(${zoom})`;
      iframeRef.current.style.transformOrigin = "top left";
    }
  }, [zoom]);

  // Konami Code
  useEffect(() => {
    const handleKeyDown = (e) => {
      const sequence = [...konami, e.keyCode].slice(-10);
      setKonami(sequence);

      if (sequence.length === konamiCode.length &&
          sequence.every((v, i) => v === konamiCode[i])) {
        activateEasterEgg();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [konami]);

  const activateEasterEgg = () => {
    alert("🥚 Mode BTS SIO activé !");
    document.querySelector(".project-section").style.background = "linear-gradient(to right, #000428, #004e92)";
    const heading = document.querySelector(".project-heading");
    if (!document.querySelector(".easter-egg-text")) {
      const span = document.createElement("span");
      span.className = "easter-egg-text";
      span.style.color = "#ffd700";
      span.style.marginLeft = "10px";
      span.innerText = "✨ Mode BTS SIO ✨";
      heading.appendChild(span);
    }
  };

  const handleFullscreen = () => {
    const container = containerRef.current;
    if (!document.fullscreenElement) {
      container?.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Synthèse</strong> des projets
        </h1>
        <p style={{ color: "white" }}>
          Voici un tableau récapitulatif de mes projets et compétences.
        </p>

        {/* BOUTONS DE LIENS */}
        <Row className="mb-4">
          <Col md={12} className="d-flex flex-wrap gap-3 justify-content-center">
            <Button
              variant="success"
              href="https://docs.google.com/spreadsheets/d/1z0Vo4pwHswU5HSVdQd7vpCfhS-O6vav7auKyD6Nnpiw/export?format=xlsx"
              target="_blank"
              rel="noopener noreferrer"
            >
              📅 Télécharger (.xlsx)
            </Button>

            <Button
              variant="primary"
              href="https://docs.google.com/spreadsheets/d/1z0Vo4pwHswU5HSVdQd7vpCfhS-O6vav7auKyD6Nnpiw/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 Ouvrir dans Google Sheets
            </Button>
          </Col>
        </Row>

        {/* IFRAME TABLEAU */}
        <Row>
          <Col md={12}>
            <div
              ref={containerRef}
              style={{
                width: "100%",
                height: "calc(100vh - 250px)",
                overflow: "hidden",
                position: "relative",
                background: "#fff",
                borderRadius: "8px",
                boxShadow: "0 8px 30px rgba(0, 0, 0, 0.3)",
                marginBottom: "1rem",
              }}
            >
              <iframe
                ref={iframeRef}
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRgX8P4-r2cJpJ_TmyNlLCf6apCGJxu-M-W0NZvot-0zYBEEPT9NwGsgemvjv8xLU9yc1WuwB4cb1hf/pubhtml?widget=true&amp;headers=false"
                title="Tableau de synthèse"
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
              />
            </div>

            {/* ZOOM / FULLSCREEN */}
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <Button variant="dark" onClick={() => setZoom(Math.max(0.5, zoom - 0.1))}>
                ➖ Zoom -
              </Button>
              <Button variant="dark" onClick={() => setZoom(1)}>
                🔄 Reset Zoom
              </Button>
              <Button variant="dark" onClick={() => setZoom(Math.min(2.0, zoom + 0.1))}>
                ➕ Zoom +
              </Button>
              <Button variant="secondary" onClick={handleFullscreen}>
                🖥️ Plein écran
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Synthese;
