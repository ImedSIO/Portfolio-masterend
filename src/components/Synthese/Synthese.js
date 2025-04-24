import React, { useState, useEffect } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import Particle from "../Particle";

function Synthese() {
  // Rediriger vers le fichier Excel directement
  useEffect(() => {
    // Vous pouvez soit rediriger vers le fichier Excel
    window.open("/tableau-synthese.xlsx", "_blank");
    
    // Ou vous pouvez charger un iframe si vous préférez rester sur la page
    // (ne rien faire ici si vous voulez juste l'iframe ci-dessous)
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
        
        <Row>
          <Col md={12} className="mb-5">
            <Button 
              variant="primary" 
              href="/tableau-synthese.xlsx" 
              target="_blank"
              rel="noopener noreferrer"
            >
              Télécharger le fichier Excel
            </Button>
          </Col>
        </Row>
        
        <Row>
          <Col md={12} style={{ height: "600px" }}>
            {/* Iframe pour afficher le fichier Excel (Google Sheets ou Office Online) */}
            <iframe
              src="https://view.officeapps.live.com/op/embed.aspx?src=https://simaoui-imed.vercel.app/tableau-synthese.xlsx"
              style={{ width: "100%", height: "100%", border: "none" }}
              title="Tableau synthèse"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Synthese;
