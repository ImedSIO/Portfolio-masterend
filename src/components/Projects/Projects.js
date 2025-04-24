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

// Modification du composant ProjectCards pour ajouter le bouton de détails
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FaInfoCircle } from "react-icons/fa";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title className="project-title">{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }} className="project-description">
          {props.description}
        </Card.Text>
        <div className="project-buttons">
          <Button
            variant="primary"
            href={props.ghLink}
            target="_blank"
            className="project-button"
          >
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
         
          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              className="project-button"
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}
         
          {/* Nouveau bouton de détails */}
          <Button
            variant="info"
            href={props.detailsLink}
            target="_blank"
            className="project-button"
          >
            <FaInfoCircle /> &nbsp;
            {"Détails"}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes <strong className="purple">Projets</strong>
        </h1>
        <p className="project-subtitle">
          Voici quelques projets sur lesquels j'ai travaillé avec passion.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Application de chat en temps réel avec interface utilisateur moderne. Développée avec React, Node.js et Socket.IO pour une communication instantanée. Possibilité de créer des salons de discussion privés ou publics."
              ghLink="https://github.com/votre-username/chatify"
              demoLink="https://chatify-app.netlify.app/"
              detailsLink="/projects/chatify"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={true}
              title="Blog Personnel"
              description="Blog technique où je partage mes connaissances en développement web, des tutoriels et des astuces de programmation. Construit avec Gatsby pour des performances optimales et une expérience utilisateur fluide."
              ghLink="https://github.com/votre-username/blog-personnel"
              demoLink="https://blog-personnel.com/"
              detailsLink="/projects/blog-personnel"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Éditeur de Code en Ligne"
              description="Éditeur de code en ligne avec coloration syntaxique et fonctionnalités d'autocomplétion pour plus de 20 langages de programmation. Intègre des outils de débogage et de partage de code en temps réel."
              ghLink="https://github.com/votre-username/code-editor"
              demoLink="https://code-editor-demo.com/"
              detailsLink="/projects/code-editor"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Eco Tracker"
              description="Application mobile pour surveiller et réduire votre empreinte carbone au quotidien. Suivez vos progrès et recevez des conseils personnalisés basés sur vos habitudes et votre localisation."
              ghLink="https://github.com/votre-username/eco-tracker"
              demoLink="https://eco-tracker-app.com/"
              detailsLink="/projects/eco-tracker"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Santé Mentale AI"
              description="Projet utilisant l'intelligence artificielle pour détecter les signaux de détresse dans les messages texte et proposer des ressources d'aide appropriées. Développé en collaboration avec des psychologues certifiés."
              ghLink="https://github.com/votre-username/sante-mentale-ai"
              demoLink="https://sante-mentale-ai.org/"
              detailsLink="/projects/sante-mentale-ai"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Reconnaissance d'Émotions"
              description="Application de reconnaissance faciale capable d'identifier les émotions en temps réel à l'aide de modèles de machine learning avancés. Compatible avec les caméras mobiles et webcams standards."
              ghLink="https://github.com/votre-username/emotion-recognition"
              demoLink="https://emotion-recognition-demo.com/"
              detailsLink="/projects/emotion-recognition"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
