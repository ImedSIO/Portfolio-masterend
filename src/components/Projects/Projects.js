
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
  // Données des projets avec informations détaillées
  const projectsData = [
    {
      imgPath: chatify,
      title: "Chatify",
      description: "Application de chat en temps réel avec interface utilisateur moderne. Développée avec React, Node.js et Socket.IO pour une communication instantanée. Possibilité de créer des salons de discussion privés ou publics.",
      ghLink: "https://github.com/votre-username/chatify",
      demoLink: "https://chatify-app.netlify.app/",
      isBlog: false,
      technologies: ["React.js", "Node.js", "Socket.IO", "Express", "MongoDB", "JWT Authentication"],
      features: [
        "Messagerie en temps réel",
        "Création de salons privés et publics",
        "Partage de fichiers et d'images",
        "Notifications push",
        "Mode hors ligne avec synchronisation"
      ],
      challenges: "L'un des plus grands défis était d'optimiser les performances pour gérer un grand nombre de connexions simultanées tout en maintenant une faible latence. J'ai résolu ce problème en implémentant une architecture de microservices et en utilisant Redis pour la mise en cache."
    },
    {
      imgPath: bitsOfCode,
      title: "Blog Personnel",
      description: "Blog technique où je partage mes connaissances en développement web, des tutoriels et des astuces de programmation. Construit avec Gatsby pour des performances optimales et une expérience utilisateur fluide.",
      ghLink: "https://github.com/votre-username/blog-personnel",
      demoLink: "https://blog-personnel.com/",
      isBlog: true,
      technologies: ["Gatsby.js", "React", "GraphQL", "Markdown", "Netlify CMS", "Tailwind CSS"],
      features: [
        "Articles techniques optimisés pour le SEO",
        "Système de commentaires",
        "Mode sombre/clair",
        "Temps de lecture estimé",
        "Partage sur les réseaux sociaux"
      ],
      challenges: "L'optimisation du site pour les moteurs de recherche tout en conservant des temps de chargement rapides était un défi majeur. J'ai utilisé des techniques avancées de code splitting et de lazy loading pour améliorer les performances."
    },
    {
      imgPath: editor,
      title: "Éditeur de Code en Ligne",
      description: "Éditeur de code en ligne avec coloration syntaxique et fonctionnalités d'autocomplétion pour plus de 20 langages de programmation. Intègre des outils de débogage et de partage de code en temps réel.",
      ghLink: "https://github.com/votre-username/code-editor",
      demoLink: "https://code-editor-demo.com/",
      isBlog: false,
      technologies: ["React", "Monaco Editor", "WebSockets", "Express.js", "Docker", "Firebase"],
      features: [
        "Support de plus de 20 langages de programmation",
        "Coloration syntaxique avancée",
        "Autocomplétion intelligente",
        "Collaboration en temps réel",
        "Exécution de code directement dans le navigateur"
      ],
      challenges: "La synchronisation du code en temps réel entre plusieurs utilisateurs présentait des défis complexes, notamment en matière de gestion des conflits. J'ai implémenté un algorithme de transformation opérationnelle pour résoudre ce problème."
    },
    {
      imgPath: leaf,
      title: "Eco Tracker",
      description: "Application mobile pour surveiller et réduire votre empreinte carbone au quotidien. Suivez vos progrès et recevez des conseils personnalisés basés sur vos habitudes et votre localisation.",
      ghLink: "https://github.com/votre-username/eco-tracker",
      demoLink: "https://eco-tracker-app.com/",
      isBlog: false,
      technologies: ["React Native", "Redux", "Node.js", "MongoDB", "Google Maps API", "TensorFlow Lite"],
      features: [
        "Calcul personnalisé d'empreinte carbone",
        "Suggestions d'améliorations basées sur l'IA",
        "Suivi de la consommation d'énergie et d'eau",
        "Défis écologiques hebdomadaires",
        "Comparaison avec la moyenne nationale"
      ],
      challenges: "La précision des calculs d'empreinte carbone nécessitait des données fiables provenant de multiples sources. J'ai développé un système d'agrégation de données qui combine des sources officielles avec des contributions communautaires vérifiées."
    },
    {
      imgPath: suicide,
      title: "Santé Mentale AI",
      description: "Projet utilisant l'intelligence artificielle pour détecter les signaux de détresse dans les messages texte et proposer des ressources d'aide appropriées. Développé en collaboration avec des psychologues certifiés.",
      ghLink: "https://github.com/votre-username/sante-mentale-ai",
      demoLink: "https://sante-mentale-ai.org/",
      isBlog: false,
      technologies: ["Python", "TensorFlow", "NLP", "Flask", "React", "PostgreSQL", "AWS"],
      features: [
        "Détection de signaux de détresse en temps réel",
        "Analyse de sentiment avancée",
        "Recommandations de ressources personnalisées",
        "Interface accessible et non stigmatisante",
        "Cryptage de bout en bout pour la confidentialité"
      ],
      challenges: "Équilibrer la précision de la détection tout en minimisant les faux positifs était crucial. Un travail approfondi avec des psychologues a permis d'affiner les modèles et de créer un système qui priorise la sécurité des utilisateurs."
    },
    {
      imgPath: emotion,
      title: "Reconnaissance d'Émotions",
      description: "Application de reconnaissance faciale capable d'identifier les émotions en temps réel à l'aide de modèles de machine learning avancés. Compatible avec les caméras mobiles et webcams standards.",
      ghLink: "https://github.com/votre-username/emotion-recognition",
      demoLink: "https://emotion-recognition-demo.com/",
      isBlog: false,
      technologies: ["Python", "OpenCV", "TensorFlow", "React", "WebRTC", "Flask", "Docker"],
      features: [
        "Reconnaissance de 7 émotions fondamentales",
        "Fonctionnement en temps réel même sur appareils mobiles",
        "Mode hors ligne disponible",
        "Statistiques d'émotions dans le temps",
        "API pour intégration à d'autres applications"
      ],
      challenges: "Le principal défi était d'optimiser les modèles de deep learning pour fonctionner efficacement sur des appareils à faible puissance tout en maintenant une précision élevée. J'ai utilisé des techniques de quantification et de pruning de modèle pour y parvenir."
    }
  ];

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
          {projectsData.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCards
                imgPath={project.imgPath}
                isBlog={project.isBlog}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
                technologies={project.technologies}
                features={project.features}
                challenges={project.challenges}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
