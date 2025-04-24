import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "../Particle";

function Synthese() {
  const [zoomLevel, setZoomLevel] = useState(1);
  const containerRef = useRef(null);
  const iframeRef = useRef(null);
  const [konamiSequence, setKonamiSequence] = useState([]);
  const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

  const updateZoom = (newZoom) => {
    setZoomLevel(newZoom);
  };

  useEffect(() => {
    if (iframeRef.current) {
      iframeRef.current.style.transform = `scale(${zoomLevel})`;
      iframeRef.current.style.transformOrigin = "top left";
    }
  }, [zoomLevel]);

  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  };

  const activateEasterEgg = () => {
    alert("🎉 Bravo ! Vous avez trouvé l'œuf de Pâques ! Mode BTS SIO activé !");
    document.querySelector(".project-section").style.background =
      "linear-gradient(to right, #000428, #004e92)";

    const heading = document.querySelector(".project-heading");
    if (!document.querySelector(".easter-egg-text")) {
      const easterEggText = document.createElement("span");
      easterEggText.className = "easter-egg-text";
      easterEggText.style.color = "#ffd700";
      easterEggText.style.textShadow = "0 0 10px rgba(255, 215, 0, 0.8)";
      easterEggText.textContent = " - Mode BTS SIO activé!";
      heading.appendChild(easterEggText);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      const newSequence = [...konamiSequence, e.keyCode].slice(-10);
      setKonamiSequence(newSequence);

      if (
        newSequence.length === konamiCode.length &&
        newSequence.every((k, i) => k === konamiCode[i])
      ) {
        activateEasterEgg();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [konamiSequence]);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Synthèse </strong> des projets
        </h1>
        <p style={{ color: "white" }}>
          Tableau récapitulatif de mes différents projets et compétences.
        </p>
        <Row className="mb-4">
          <Col md={12}>
            <Button
              variant="primary"
              href="https://docs.google.com/spreadsheets/d/1z0Vo4pwHswU5HSVdQd7vpCfhS-O6vav7auKyD6Nnpiw/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Télécharger / Ouvrir sur Google Sheets
            </Button>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div
              ref={containerRef}
              id="tableau-container"
              style={{
                width: "100%",
                height: "calc(100vh - 250px)",
                overflow: "hidden",
                position: "relative",
                marginBottom: "2rem",
                background: "#fff",
                borderRadius: "8px",
                boxShadow: "0 8px 30px rgba(0, 0, 0, 0.3)",
              }}
            >
              <iframe
                ref={iframeRef}
                id="tableau-iframe"
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRgX8P4-r2cJpJ_TmyNlLCf6apCGJxu-M-W0NZvot-0zYBEEPT9NwGsgemvjv8xLU9yc1WuwB4cb1hf/pubhtml?widget=true&amp;headers=false"
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
                title="Tableau de synthèse"
                allowFullScreen
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "10px",
                marginBottom: "1rem",
              }}
            >
              <Button onClick={() => updateZoom(Math.min(zoomLevel + 0.1, 2.0))}>Zoom +</Button>
              <Button onClick={() => updateZoom(Math.max(zoomLevel - 0.1, 0.5))}>Zoom -</Button>
              <Button onClick={() => updateZoom(1)}>Reset Zoom</Button>
              <Button onClick={handleFullscreen}>Plein écran</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Synthese;
