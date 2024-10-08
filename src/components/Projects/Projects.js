import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes <strong className="purple">Projets </strong>
        </h1>
        <p style={{ color: "white" }}>
          Voici quelques projets sur lequels j'ai travaillé.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="SR Developpement"
              description="C'est un site vitrine pour promouvoir un projet que j'ai fait avec un camarade de classe."
              ghLink=""
              demoLink="https://srdeveloppement.fr/"
            />

                <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Projet Cube"
              description="C'est un site qui présente le cubes, permet au utilisateurs de se chronometrer et de stocker leurs temps."
              ghLink=""
              demoLink="https://srdeveloppement.fr/"
            />
          </Col>

                
          

         

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
