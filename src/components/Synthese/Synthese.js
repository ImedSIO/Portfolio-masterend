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
    <Container fluid className={`project-section ${easterEggActivated ? 'easter-egg-mode' : ''}`}>
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Synthèse </strong> des projets
          {/* Message secret qui apparaît uniquement quand l'œuf de Pâques est activé */}
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
            
            {/* Bouton secret qui apparaît uniquement quand l'œuf de Pâques est activé */}
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
            {/* Hauteur réglée à 100vh pour afficher le tableau en entier */}
            <div style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden" }}>
              <iframe
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRgX8P4-r2cJpJ_TmyNlLCf6apCGJxu-M-W0NZvot-0zYBEEPT9NwGsgemvjv8xLU9yc1WuwB4cb1hf/pubhtml?widget=true&amp;headers=false"
                style={{ 
                  width: "100%", 
                  height: "100%", 
                  border: "none",
                  // Animation lorsque l'œuf de Pâques est activé
                  animation: easterEggActivated ? "glow 2s infinite" : "none"
                }}
                title="Tableau de synthèse"
                allowFullScreen
              />
            </div>
          </Col>
        </Row>
      </Container>
      
      {/* CSS pour l'œuf de Pâques */}
      {easterEggActivated && (
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
        `}</style>
      )}
      
      {/* Commentaire caché en code que seuls les développeurs verront */}
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
