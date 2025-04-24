import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "../Particle";

function Synthese() {
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
          <Col md={12} className="mb-4">
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
          <Col md={12} className="iframe-container" style={{ marginBottom: "50px" }}>
            {/* Utilisez Microsoft Office Online Viewer pour afficher votre fichier Excel */}
            <iframe
              src="https://view.officeapps.live.com/op/embed.aspx?src=https://simaoui-imed.vercel.app/tableau-synthese.xlsx"
              style={{ 
                width: "100%", 
                height: "600px", 
                border: "none",
                borderRadius: "10px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)"
              }}
              title="Tableau synthèse"
              frameBorder="0"
              allowFullScreen={true}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Synthese;