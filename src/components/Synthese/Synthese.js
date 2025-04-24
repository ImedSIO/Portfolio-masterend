import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "../Particle";

function Synthese() {
  const [zoom, setZoom] = useState(1);
  const containerRef = useRef(null);
  const iframeRef = useRef(null);
  const [konami, setKonami] = useState([]);
  const [easterEggActivated, setEasterEggActivated] = useState(false);

  // Konami Code: up, up, down, down, left, right, left, right, b, a
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
      // Get the key code
      const keyCode = e.keyCode || e.which;
     
      // Update the sequence with the new key code
      const updatedSequence = [...konami, keyCode].slice(-konamiCode.length);
      setKonami(updatedSequence);
     
      // Check if the sequence matches the Konami code
      const isKonamiCode = updatedSequence.length === konamiCode.length &&
        updatedSequence.every((code, index) => code === konamiCode[index]);
     
      // Activate easter egg if Konami code is entered
      if (isKonamiCode && !easterEggActivated) {
        activateEasterEgg();
      }
    };

    // Add key event listener
    window.addEventListener("keydown", handleKeyDown);
   
    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [konami, easterEggActivated]);

  const activateEasterEgg = () => {
    // Set state to prevent multiple activations
    setEasterEggActivated(true);
   
    // Show alert
    alert("🥚 Mode BTS SIO activé !");
   
    // Change background of project section
    const projectSection = document.querySelector(".project-section");
    if (projectSection) {
      projectSection.style.background = "linear-gradient(to right, #000428, #004e92)";
    }
   
    // Add text to heading
    const heading = document.querySelector(".project-heading");
    if (heading && !document.querySelector(".easter-egg-text")) {
      const span = document.createElement("span");
      span.className = "easter-egg-text";
      span.style.color = "#ffd700";
      span.style.marginLeft = "10px";
      span.innerText = "✨ Mode BTS SIO ✨";
      heading.appendChild(span);
    }
   
    // Add a fun animation to buttons
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
      button.style.transition = "all 0.3s ease";
      button.addEventListener("mouseover", () => {
        button.style.transform = "scale(1.1)";
        button.style.boxShadow = "0 0 10px gold";
      });
      button.addEventListener("mouseout", () => {
        button.style.transform = "scale(1)";
        button.style.boxShadow = "none";
      });
    });
   
    // Optional: Add a small floating indicator that Easter Egg is active
    const indicator = document.createElement("div");
    indicator.style.position = "fixed";
    indicator.style.bottom = "20px";
    indicator.style.right = "20px";
    indicator.style.background = "rgba(0,0,0,0.7)";
    indicator.style.color = "gold";
    indicator.style.padding = "5px 10px";
    indicator.style.borderRadius = "5px";
    indicator.style.zIndex = "1000";
    indicator.style.fontWeight = "bold";
    indicator.innerText = "🥚 Mode BTS SIO";
    document.body.appendChild(indicator);
  };

  const handleFullscreen = () => {
    const container = containerRef.current;
    if (container) {
      if (!document.fullscreenElement) {
        container.requestFullscreen().catch(err => {
          console.error(`Error attempting to enable fullscreen: ${err.message}`);
        });
      } else {
        document.exitFullscreen().catch(err => {
          console.error(`Error attempting to exit fullscreen: ${err.message}`);
        });
      }
    }
  };

  // Download XLSX file directly
  const handleDownload = () => {
    window.open("https://docs.google.com/spreadsheets/d/1z0Vo4pwHswU5HSVdQd7vpCfhS-O6vav7auKyD6Nnpiw/export?format=xlsx", "_blank");
  };

  // Open Google Sheets
  const openGoogleSheets = () => {
    window.open("https://docs.google.com/spreadsheets/d/1z0Vo4pwHswU5HSVdQd7vpCfhS-O6vav7auKyD6Nnpiw/edit?usp=sharing", "_blank");
  };

  // For testing purposes - Activate Easter Egg with a button (can be removed in production)
  const testEasterEgg = () => {
    if (!easterEggActivated) {
      activateEasterEgg();
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
              onClick={handleDownload}
              style={{ cursor: "pointer", zIndex: 10 }}
            >
              📅 Télécharger (.xlsx)
            </Button>

            <Button
              variant="primary"
              onClick={openGoogleSheets}
              style={{ cursor: "pointer", zIndex: 10 }}
            >
              🔗 Ouvrir dans Google Sheets
            </Button>
           
            {/* Test button for Easter Egg - Comment or remove in production */}
            {process.env.NODE_ENV === 'development' && (
              <Button
                variant="warning"
                onClick={testEasterEgg}
                style={{ cursor: "pointer", zIndex: 10 }}
              >
                🐣 Test Easter Egg
              </Button>
            )}
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
            <div className="d-flex justify-content-center gap-3 flex-wrap mt-3">
              <Button
                variant="dark"
                onClick={() => setZoom(Math.max(0.5, zoom - 0.1))}
                style={{ cursor: "pointer", zIndex: 10 }}
              >
                ➖ Zoom -
              </Button>
              <Button
                variant="dark"
                onClick={() => setZoom(1)}
                style={{ cursor: "pointer", zIndex: 10 }}
              >
                🔄 Reset Zoom
              </Button>
              <Button
                variant="dark"
                onClick={() => setZoom(Math.min(2.0, zoom + 0.1))}
                style={{ cursor: "pointer", zIndex: 10 }}
              >
                ➕ Zoom +
              </Button>
              <Button
                variant="secondary"
                onClick={handleFullscreen}
                style={{ cursor: "pointer", zIndex: 10 }}
              >
                🖥️ Plein écran
              </Button>
            </div>
          </Col>
        </Row>
       
        {/* Konami code hint - hidden unless you want to show it */}
        {process.env.NODE_ENV === 'development' && (
          <div style={{ marginTop: "20px", textAlign: "center", color: "white", opacity: 0.5 }}>
            <small>Indice: essayez la séquence ↑↑↓↓←→←→BA</small>
          </div>
        )}
      </Container>
    </Container>
  );
}

export default Synthese;
