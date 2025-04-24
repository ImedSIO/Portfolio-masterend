import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "../Particle";

function Synthese() {
  // L'œuf de Pâques sera dans le script injecté
  
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
                boxShadow: "0 8px 30px rgba(0, 0, 0, 0.3)"
              }}
            >
              <iframe
                id="tableau-iframe"
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRgX8P4-r2cJpJ_TmyNlLCf6apCGJxu-M-W0NZvot-0zYBEEPT9NwGsgemvjv8xLU9yc1WuwB4cb1hf/pubhtml?widget=true&amp;headers=false"
                style={{ 
                  width: "100%", 
                  height: "100%", 
                  border: "none",
                  transformOrigin: "top left"
                }}
                title="Tableau de synthèse"
                allowFullScreen
              />
            </div>
            
            {/* Boutons standard avec ID pour javascript */}
            <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "1rem" }}>
              <button id="zoom-in-btn" className="btn btn-primary">Zoom +</button>
              <button id="zoom-out-btn" className="btn btn-primary">Zoom -</button>
              <button id="reset-zoom-btn" className="btn btn-primary">Reset Zoom</button>
              <button id="fullscreen-btn" className="btn btn-primary">Plein écran</button>
            </div>
          </Col>
        </Row>
      </Container>
      
      {/* Script injecté qui fonctionnera indépendamment de React */}
      <script dangerouslySetInnerHTML={{ __html: `
        // Cette fonction s'exécute quand la page est chargée
        document.addEventListener('DOMContentLoaded', function() {
          // Variables globales
          let zoomLevel = 1;
          const iframe = document.getElementById('tableau-iframe');
          const container = document.getElementById('tableau-container');
          
          // Gérer le zoom +
          document.getElementById('zoom-in-btn').addEventListener('click', function() {
            zoomLevel = Math.min(zoomLevel + 0.1, 2.0);
            updateZoom();
          });
          
          // Gérer le zoom -
          document.getElementById('zoom-out-btn').addEventListener('click', function() {
            zoomLevel = Math.max(zoomLevel - 0.1, 0.5);
            updateZoom();
          });
          
          // Gérer le reset zoom
          document.getElementById('reset-zoom-btn').addEventListener('click', function() {
            zoomLevel = 1;
            updateZoom();
          });
          
          // Gérer le plein écran
          document.getElementById('fullscreen-btn').addEventListener('click', function() {
            if (!document.fullscreenElement) {
              if (container.requestFullscreen) {
                container.requestFullscreen();
              } else if (container.mozRequestFullScreen) {
                container.mozRequestFullScreen();
              } else if (container.webkitRequestFullscreen) {
                container.webkitRequestFullscreen();
              } else if (container.msRequestFullscreen) {
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
          });
          
          // Appliquer le zoom
          function updateZoom() {
            iframe.style.transform = 'scale(' + zoomLevel + ')';
          }
          
          // Œuf de Pâques - Konami Code
          let konamiSequence = [];
          const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑ ↑ ↓ ↓ ← → ← → B A
          
          document.addEventListener('keydown', function(e) {
            konamiSequence.push(e.keyCode);
            
            // Garder seulement les derniers codes qui correspondent à la longueur du Konami Code
            if (konamiSequence.length > konamiCode.length) {
              konamiSequence.shift();
            }
            
            // Vérifier si la séquence correspond au Konami Code
            let isKonami = konamiSequence.length === konamiCode.length && 
                          konamiSequence.every((key, index) => konamiCode[index] === key);
            
            if (isKonami) {
              // Active l'œuf de Pâques
              activateEasterEgg();
            }
          });
          
          function activateEasterEgg() {
            alert("🎉 Bravo ! Vous avez trouvé l'œuf de Pâques ! Mode BTS SIO activé !");
            
            // Changement visuel
            document.querySelector('.project-section').style.background = 'linear-gradient(to right, #000428, #004e92)';
            
            // Ajout d'un bouton spécial
            const btnContainer = document.querySelector('.mb-4 .col-md-12');
            if (!document.getElementById('super-sio-btn')) {
              const superBtn = document.createElement('button');
              superBtn.id = 'super-sio-btn';
              superBtn.className = 'btn btn-warning';
              superBtn.style.marginLeft = '10px';
              superBtn.textContent = 'Activer le mode Super SIO !';
              superBtn.onclick = function() {
                alert("Félicitations pour votre BTS SIO ! Imed Simaoui, vous êtes un développeur exceptionnel !");
              };
              btnContainer.appendChild(superBtn);
            }
            
            // Effet sur le tableau
            container.style.boxShadow = '0 0 20px rgba(106, 90, 205, 0.8)';
            
            // Ajout de texte spécial
            const heading = document.querySelector('.project-heading');
            if (!document.querySelector('.easter-egg-text')) {
              const easterEggText = document.createElement('span');
              easterEggText.className = 'easter-egg-text';
              easterEggText.style.color = '#ffd700';
              easterEggText.style.textShadow = '0 0 10px rgba(255, 215, 0, 0.8)';
              easterEggText.textContent = ' - Mode BTS SIO activé!';
              heading.appendChild(easterEggText);
            }
          }
        });
      `}} />
    </Container>
  );
}

export default Synthese;
