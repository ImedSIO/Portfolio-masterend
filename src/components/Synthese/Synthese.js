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

        <Row className="mb-5">
          <Col md={12}>
            <Button 
              variant="primary" 
              href="https://docs.google.com/spreadsheets/d/1z0Vo4pwHswU5HSVdQd7vpCfhS-O6vav7auKyD6Nnpiw/export?format=xlsx"
              target="_blank"
              rel="noopener noreferrer"
            >
              Télécharger le fichier Excel
            </Button>
          </Col>
        </Row>

        <Row>
          <Col md={12} style={{ height: "600px" }}>
            <iframe
              src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQgzYKViP1rEx-bHvka_tJd36e0W3Up-0UX5lns_Acd7a6bIq9IBRWGbZkPC5ZQIw/pubhtml?widget=true&amp;headers=false"
              style={{ width: "100%", height: "100%", border: "none" }}
              title="Tableau synthèse"
              allowFullScreen
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Synthese;
