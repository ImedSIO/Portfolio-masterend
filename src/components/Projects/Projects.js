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
        <p className="project-subtitle">
          Voici quelques projets sur lequels j'ai travaillé.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Application de chat en temps réel avec interface utilisateur moderne. Développée avec React, Node.js et Socket.IO pour une communication instantanée."
              ghLink="https://github.com/votre-username/chatify"
              demoLink="https://chatify-app.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={true}
              title="Blog Personnel"
              description="Blog technique où je partage mes connaissances en développement web, des tutoriels et des astuces de programmation."
              ghLink="https://github.com/votre-username/blog-personnel"
              demoLink="https://blog-personnel.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Éditeur de Code en Ligne"
              description="Éditeur de code en ligne avec coloration syntaxique et fonctionnalités d'autocomplétion pour plusieurs langages de programmation."
              ghLink="https://github.com/votre-username/code-editor"
              demoLink="https://code-editor-demo.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Eco Tracker"
              description="Application mobile pour surveiller et réduire votre empreinte carbone au quotidien. Suivez vos progrès et recevez des conseils personnalisés."
              ghLink="https://github.com/votre-username/eco-tracker"
              demoLink="https://eco-tracker-app.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Santé Mentale AI"
              description="Projet utilisant l'intelligence artificielle pour détecter les signaux de détresse dans les messages texte et proposer des ressources d'aide appropriées."
              ghLink="https://github.com/votre-username/sante-mentale-ai"
              demoLink="https://sante-mentale-ai.org/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Reconnaissance d'Émotions"
              description="Application de reconnaissance faciale capable d'identifier les émotions en temps réel à l'aide de modèles de machine learning."
              ghLink="https://github.com/votre-username/emotion-recognition"
              demoLink="https://emotion-recognition-demo.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
