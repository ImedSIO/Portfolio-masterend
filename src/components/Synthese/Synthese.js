import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "../Particle";

function Synthese() {
  // État pour suivre la séquence de touches Konami Code
  const [konamiCode, setKonamiCode] = useState([]);
  const [easterEggActivated, setEasterEggActivated] = useState(false);
  
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
                className="ml-2"
                onClick={() => alert("Félicitations pour votre BTS SIO ! Imed Simaoui, vous êtes un développeur exceptionnel !")}
              >
                Activer le mode Super SIO !
              </Button>
            )}
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            {/* Configuration modifiée pour assurer que le tableau s'affiche entièrement */}
            <div className="tableau-container" style={{ 
              width: "100%", 
              height: "calc(100vh - 250px)", // Hauteur ajustée en soustrayant l'espace pour les éléments au-dessus
              overflow: "hidden",
              position: "relative",
              marginBottom: "2rem"
            }}>
              <iframe
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRgX8P4-r2cJpJ_TmyNlLCf6apCGJxu-M-W0NZvot-0zYBEEPT9NwGsgemvjv8xLU9yc1WuwB4cb1hf/pubhtml?widget=true&amp;headers=false"
                style={{ 
                  width: "100%", 
                  height: "100%", 
                  border: "none",
                  animation: easterEggActivated ? "glow 2s infinite" : "none",
                  // Ajout de scale pour afficher tout le contenu
                  transform: "scale(1)",
                  transformOrigin: "top left"
                }}
                title="Tableau de synthèse"
                allowFullScreen
              />
            </div>
            
            {/* Ajout de boutons pour contrôler le zoom du tableau */}
            <div className="zoom-controls" style={{ marginBottom: "1rem" }}>
              <Button 
                variant="outline-light" 
                size="sm"
                onClick={() => {
                  const iframe = document.querySelector('.tableau-container iframe');
                  const currentScale = iframe.style.transform.match(/scale\(([^)]+)\)/) ? 
                    parseFloat(iframe.style.transform.match(/scale\(([^)]+)\)/)[1]) : 1;
                  iframe.style.transform = `scale(${currentScale + 0.1})`;
                }}
              >
                Zoom +
              </Button>
              <Button 
                variant="outline-light" 
                size="sm"
                className="ml-2"
                onClick={() => {
                  const iframe = document.querySelector('.tableau-container iframe');
                  const currentScale = iframe.style.transform.match(/scale\(([^)]+)\)/) ? 
                    parseFloat(iframe.style.transform.match(/scale\(([^)]+)\)/)[1]) : 1;
                  iframe.style.transform = `scale(${Math.max(0.5, currentScale - 0.1)})`;
                }}
              >
                Zoom -
              </Button>
              <Button 
                variant="outline-light" 
                size="sm"
                className="ml-2"
                onClick={() => {
                  const iframe = document.querySelector('.tableau-container iframe');
                  iframe.style.transform = `scale(1)`;
                }}
              >
                Reset Zoom
              </Button>
              
              {/* Bouton pour basculer entre le mode plein écran et normal */}
              <Button 
                variant="outline-light" 
                size="sm"
                className="ml-2"
                onClick={() => {
                  const container = document.querySelector('.tableau-container');
                  
                  if (!document.fullscreenElement) {
                    if (container.requestFullscreen) {
                      container.requestFullscreen();
                    } else if (container.mozRequestFullScreen) { /* Firefox */
                      container.mozRequestFullScreen();
                    } else if (container.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
                      container.webkitRequestFullscreen();
                    } else if (container.msRequestFullscreen) { /* IE/Edge */
                      container.msRequestFullscreen();
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
                }}
              >
                Plein écran
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      
      {/* CSS pour l'œuf de Pâques et les améliorations */}
      <style jsx>{`
        @keyframes glow {
          0% { box-shadow: 0 0 5px 2px rgba(106, 90, 205, 0.5); }
          50% { box-shadow: 0 0 20px 10px rgba(106, 90, 205, 0.8); }
          100% { box-shadow: 0 0 5px 2px rgba(106, 90, 205, 0.5); }
        }
        
        .easter-egg-mode {
          background: linear-gradient(to right, #000428, #004e92) !important;
        }
        
        .easter-egg-text {
          color: #ffd700;
          text-shadow: 0 0 10px rgba(255, 215, 0, 0.8);
        }
        
        .tableau-container {
          background-color: #1a1a1a;
          border-radius: 8px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
        }
        
        .tableau-container:hover {
          box-shadow: 0 10px 40px rgba(106, 90, 205, 0.4);
        }
        
        .ml-2 {
          margin-left: 0.5rem;
        }
        
        /* Permettre au conteneur de tableau de défiler si nécessaire en mode plein écran */
        .tableau-container:fullscreen {
          padding: 1rem;
          overflow: auto;
          background-color: #2d2d2d;
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
