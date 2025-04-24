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
          <Col md={12} style={{ height: "80vh" }}>
            <iframe
              src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRgX8P4-r2cJpJ_TmyNlLCf6apCGJxu-M-W0NZvot-0zYBEEPT9NwGsgemvjv8xLU9yc1WuwB4cb1hf/pubhtml?widget=true&amp;headers=false"
              style={{ width: "100%", height: "100%", border: "none" }}
              title="Tableau de synthèse"
              allowFullScreen
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Synthese;
