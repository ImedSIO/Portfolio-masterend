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
              title="France Mobilier"
              description=" Techno : PHP, MySQL, MVC, HTML/CSS

                            Développement d’un site vitrine structuré en architecture MVC pour France Mobilier, spécialiste du mobilier d’intérieur.
                            Fonctionnalités :

                            Page d’accueil de présentation

                            Recherche de meubles par catégorie

                            Liste des magasins en France

                            Intégration base de données + design responsive

🔧 Extension prévue : panneau admin pour gérer les meubles et magasins."
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
