import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "../Particle";

function Synthese() {
  // État pour suivre la séquence de touches Konami Code
  const [konamiCode, setKonamiCode] = useState([]);
  const [easterEggActivated, setEasterEggActivated] = useState(false);
  
  // État pour le niveau de zoom
  const [zoomLevel, setZoomLevel] = useState(1);
  
  // Référence à l'iframe pour manipuler directement son style
  const iframeRef = useRef(null);
  const containerRef = useRef(null);
  
  // Séquence du Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A
  const konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
  
  useEffect(() => {
    // Vérifier si la séquence correspond au Konami Code
    if (konamiCode.length === konami.length) {
      const valid = konamiCode.every((key, index) => konami[index] === key);
      if (valid) {
        setEasterEggActivated(true);
        alert("🎉 Bravo ! Vous avez trouvé l'œuf de Pâques ! Mode BTS SIO activé !");
      }
      setKonamiCode([]);
    }
    
    // Si la séquence est trop longue, on la réinitialise
    if (konamiCode.length > konami.length) {
      setKonamiCode([]);
    }
  }, [konamiCode]);
  
  // Gestionnaire pour capturer les touches clavier
  useEffect(() => {
    const handleKeyDown = (e) => {
      setKonamiCode(prevCode => [...prevCode, e.keyCode]);
    };
    
    window.addEventListener("keydown", handleKeyDown);
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Mettre à jour le style de l'iframe quand le niveau de zoom change
  useEffect(() => {
    if (iframeRef.current) {
      iframeRef.current.style.transform = `scale(${zoomLevel})`;
    }
  }, [zoomLevel]);

  // Fonction pour zoomer
  const zoomIn = () => {
    setZoomLevel(prevZoom => Math.min(prevZoom + 0.1, 2.0));
  };

  // Fonction pour dézoomer
  const zoomOut = () => {
    setZoomLevel(prevZoom => Math.max(prevZoom - 0.1, 0.5));
  };

  // Fonction pour réinitialiser le zoom
  const resetZoom = () => {
    setZoomLevel(1);
  };

  // Fonction pour basculer en mode plein écran
  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen();
      } else if (containerRef.current.mozRequestFullScreen) {
        containerRef.current.mozRequestFullScreen();
      } else if (containerRef.current.webkitRequestFullscreen) {
        containerRef.current.webkitRequestFullscreen();
      } else if (containerRef.current.msRequestFullscreen) {
        containerRef.current.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  };
  
  return (
    <Container fluid className={`project-section ${easterEggActivated ? 'easter-egg-mode' : ''}`} style={{ minHeight: "100vh", padding: "2rem 0" }}>
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Synthèse </strong> des projets
          {easterEggActivated && <span className="easter-egg-text"> - Mode BTS SIO activé!</span>}
        </h1>
        <p style={{ color: "white" }}>
          Tableau récapitulatif de mes différents projets et compétences.
          {easterEggActivated && <span> Vous avez débloqué tous les secrets du BTS SIO!</span>}
        </p>
        <Row className="mb-4">
          <Col md={12}>
            <Button 
              variant={easterEggActivated ? "success" : "primary"} 
              href="https://docs.google.com/spreadsheets/d/1z0Vo4pwHswU5HSVdQd7vpCfhS-O6vav7auKyD6Nnpiw/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Télécharger / Ouvrir sur Google Sheets
            </Button>
            
            {easterEggActivated && (
              <Button 
                variant="warning" 
                style={{ marginLeft: "10px" }}
                onClick={() => alert("Félicitations pour votre BTS SIO ! Imed Simaoui, vous êtes un développeur exceptionnel !")}
              >
                Activer le mode Super SIO !
              </Button>
            )}
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            {/* Conteneur du tableau avec référence React */}
            <div 
              ref={containerRef}
              className="tableau-container" 
              style={{ 
                width: "100%", 
                height: "calc(100vh - 250px)",
                overflow: "hidden",
                position: "relative",
                marginBottom: "2rem",
                background: "#fff", // Fond blanc pour le tableau
                borderRadius: "8px",
                boxShadow: easterEggActivated ? "0 0 20px rgba(106, 90, 205, 0.8)" : "0 8px 30px rgba(0, 0, 0, 0.3)"
              }}
            >
              <iframe
                ref={iframeRef}
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRgX8P4-r2cJpJ_TmyNlLCf6apCGJxu-M-W0NZvot-0zYBEEPT9NwGsgemvjv8xLU9yc1WuwB4cb1hf/pubhtml?widget=true&amp;headers=false"
                style={{ 
                  width: "100%", 
                  height: "100%", 
                  border: "none",
                  transform: `scale(${zoomLevel})`,
                  transformOrigin: "top left",
                  transition: "transform 0.3s ease"
                }}
                title="Tableau de synthèse"
                allowFullScreen
              />
            </div>
            
            {/* Boutons de contrôle avec gestion d'événements React */}
            <div className="zoom-controls" style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "1rem" }}>
              <Button 
                variant="primary"
                onClick={zoomIn}
              >
                Zoom +
              </Button>
              <Button 
                variant="primary"
                onClick={zoomOut}
              >
                Zoom -
              </Button>
              <Button 
                variant="primary"
                onClick={resetZoom}
              >
                Reset Zoom
              </Button>
              <Button 
                variant="primary"
                onClick={toggleFullScreen}
              >
                Plein écran
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      
      {/* Styles CSS pour l'œuf de Pâques */}
      <style jsx>{`
        .easter-egg-mode {
          background: linear-gradient(to right, #000428, #004e92) !important;
        }
        
        .easter-egg-text {
          color: #ffd700;
          text-shadow: 0 0 10px rgba(255, 215, 0, 0.8);
        }
        
        .tableau-container:fullscreen {
          padding: 1rem;
          overflow: auto;
          background-color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
      
      {/* Commentaire caché - œuf de Pâques */}
      {/* 
        Salut développeur curieux ! 
        Tu as trouvé un commentaire secret !
        Utilise le Konami Code pour activer l'œuf de Pâques:
        ↑ ↑ ↓ ↓ ← → ← → B A
      */}
    </Container>
  );
}

export default Synthese;
