import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "../Particle";

function Synthese() {
  useEffect(() => {
    let zoomLevel = 1;
    const iframe = document.getElementById("tableau-iframe");
    const container = document.getElementById("tableau-container");

    const updateZoom = () => {
      if (iframe) {
        iframe.style.transform = `scale(${zoomLevel})`;
        iframe.style.transformOrigin = "top left";
      }
    };

    const zoomInBtn = document.getElementById("zoom-in-btn");
    const zoomOutBtn = document.getElementById("zoom-out-btn");
    const resetZoomBtn = document.getElementById("reset-zoom-btn");
    const fullscreenBtn = document.getElementById("fullscreen-btn");

    zoomInBtn?.addEventListener("click", () => {
      zoomLevel = Math.min(zoomLevel + 0.1, 2.0);
      updateZoom();
    });

    zoomOutBtn?.addEventListener("click", () => {
      zoomLevel = Math.max(zoomLevel - 0.1, 0.5);
      updateZoom();
    });

    resetZoomBtn?.addEventListener("click", () => {
      zoomLevel = 1;
      updateZoom();
    });

    fullscreenBtn?.addEventListener("click", () => {
      if (!document.fullscreenElement) {
        container?.requestFullscreen?.();
      } else {
        document.exitFullscreen?.();
      }
    });

    // Konami code
    let konamiSequence = [];
    const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

    const activateEasterEgg = () => {
      alert("🎉 Bravo ! Vous avez trouvé l'œuf de Pâques ! Mode BTS SIO activé !");
      document.querySelector(".project-section").style.background = "linear-gradient(to right, #000428, #004e92)";

      const btnContainer = document.querySelector(".mb-4 .col-md-12");
      if (!document.getElementById("super-sio-btn")) {
        const superBtn = document.createElement("button");
        superBtn.id = "super-sio-btn";
        superBtn.className = "btn btn-warning";
        superBtn.style.marginLeft = "10px";
        superBtn.textContent = "Activer le mode Super SIO !";
        superBtn.onclick = () => {
          alert("Félicitations pour votre BTS SIO ! Imed Simaoui, vous êtes un développeur exceptionnel !");
        };
        btnContainer.appendChild(superBtn);
      }

      container.style.boxShadow = "0 0 20px rgba(106, 90, 205, 0.8)";

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

    document.addEventListener("keydown", (e) => {
      konamiSequence.push(e.keyCode);
      if (konamiSequence.length > konamiCode.length) {
        konamiSequence.shift();
      }
      if (
        konamiSequence.length === konamiCode.length &&
        konamiSequence.every((key, index) => key === konamiCode[index])
      ) {
        activateEasterEgg();
      }
    });
  }, []);

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
              <button id="zoom-in-btn" className="btn btn-primary">Zoom +</button>
              <button id="zoom-out-btn" className="btn btn-primary">Zoom -</button>
              <button id="reset-zoom-btn" className="btn btn-primary">Reset Zoom</button>
              <button id="fullscreen-btn" className="btn btn-primary">Plein écran</button>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Synthese;
