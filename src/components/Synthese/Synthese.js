import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "../Particle";

function Synthese() {
  const [zoom, setZoom] = useState(1);
  const containerRef = useRef(null);
  const iframeRef = useRef(null);
  const [keysPressed, setKeysPressed] = useState([]);
  const [easterEggActive, setEasterEggActive] = useState(false);

  // Konami Code: up, up, down, down, left, right, left, right, b, a
  const konamiCode = [
    "ArrowUp", "ArrowUp",
    "ArrowDown", "ArrowDown",
    "ArrowLeft", "ArrowRight",
    "ArrowLeft", "ArrowRight",
    "b", "a"
  ];

  // Zoom effect
  useEffect(() => {
    if (iframeRef.current) {
      iframeRef.current.style.transform = `scale(${zoom})`;
      iframeRef.current.style.transformOrigin = "top left";
    }
  }, [zoom]);

  // Konami Code detection
  useEffect(() => {
    const onKeyDown = (e) => {
      // Get current key
      const key = e.key;
     
      // Update keys pressed array
      const updatedKeys = [...keysPressed, key];
     
      // Keep only the last 10 keys (length of Konami code)
      if (updatedKeys.length > konamiCode.length) {
        updatedKeys.shift();
      }
     
      setKeysPressed(updatedKeys);
     
      // Check if Konami code was entered
      const isKonamiCode = JSON.stringify(updatedKeys) === JSON.stringify(konamiCode);
     
      if (isKonamiCode && !easterEggActive) {
        activateEasterEgg();
      }
    };
   
    // Add event listener
    window.addEventListener("keydown", onKeyDown);
   
    // Cleanup
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [keysPressed, easterEggActive]);

  // Easter egg activation
  const activateEasterEgg = () => {
    // Set state to active
    setEasterEggActive(true);
   
    // Show alert
    alert("🥚 Mode BTS SIO activé !");
   
    // Change background style
    document.body.style.background = "linear-gradient(to right, #000428, #004e92)";
    document.body.style.color = "#ffffff";
   
    // Add indicator
    const easterEggIndicator = document.createElement("div");
    easterEggIndicator.id = "easter-egg-indicator";
    easterEggIndicator.innerHTML = "✨ Mode BTS SIO ✨";
    easterEggIndicator.style.position = "fixed";
    easterEggIndicator.style.bottom = "10px";
    easterEggIndicator.style.right = "10px";
    easterEggIndicator.style.backgroundColor = "#ffd700";
    easterEggIndicator.style.color = "#000";
    easterEggIndicator.style.padding = "5px 10px";
    easterEggIndicator.style.borderRadius = "5px";
    easterEggIndicator.style.zIndex = "9999";
    document.body.appendChild(easterEggIndicator);
   
    // Style buttons
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
      button.style.backgroundColor = "#ffd700";
      button.style.color = "#000";
      button.style.border = "2px solid #000";
      button.style.transform = "scale(1.05)";
      button.style.transition = "all 0.3s ease";
    });
   
    // Add gold border to iframe container
    if (containerRef.current) {
      containerRef.current.style.border = "3px solid #ffd700";
    }
  };

  // Force activate easter egg (for testing)
  const forceActivateEasterEgg = () => {
    if (!easterEggActive) {
      activateEasterEgg();
    }
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

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Synthèse</strong> des projets
          {easterEggActive && <span style={{color: "#ffd700", marginLeft: "10px"}}>✨ Mode BTS SIO ✨</span>}
        </h1>
        <p style={{ color: "white" }}>
          Voici un tableau récapitulatif de mes projets et compétences.
        </p>

        {/* Force activate easter egg (development only) */}
        <div style={{marginBottom: "15px", textAlign: "center"}}>
          <Button
            variant="warning"
            onClick={forceActivateEasterEgg}
            style={{ cursor: "pointer", zIndex: 10 }}
          >
            🥚 Activer Easter Egg
          </Button>
        </div>

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
       
        {/* Debug info - Key sequence display (remove in production) */}
        <div style={{marginTop: "20px", textAlign: "center", color: "white", opacity: 0.7}}>
          <p>Konami Code: ↑↑↓↓←→←→BA</p>
          <p>Touches pressées: {keysPressed.join(', ')}</p>
        </div>
      </Container>
    </Container>
  );
}

export default Synthese;
