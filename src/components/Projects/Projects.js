import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards"; // ✅ Import corrigé
import Particle from "../Particle";

import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  const projectsData = [
    {
      imgPath: chatify,
      title: "SR Developpement",
      description: "SR Développement est une agence web spécialisée dans la création de sites internet sur mesure. Notre expertise technique et notre approche créative nous permettent de transformer vos idées en solutions web performantes et captivantes. Nous concevons des sites responsive adaptés à tous les appareils, avec une attention particulière portée à l'expérience utilisateur et au design moderne.",
      ghLink: "https://github.com/votre-username/chatify",
      demoLink: "https://srdeveloppement.fr/",
      isBlog: false,
      technologies: ["HTML/CSS", "Javascript/React.js", "PHP", "Node.js", "MongoDB"],
      features: [
        "Création de sites vitrines professionnels",
        "Développement de boutiques e-commerce",
        "Applications web personnalisées",
        "Refonte de sites existants",
        "Optimisation pour les moteurs de recherche"
      ],
      challenges: "Équilibrer performance et design attrayant pour une expérience utilisateur optimale."
    },
    {
      imgPath: bitsOfCode,
      title: "France Mobilier",
      description: "France Mobilier est un site web spécialisé dans la vente de meubles et d'ameublement d'intérieur. Développé avec PHP selon l'architecture MVC (Modèle-Vue-Contrôleur), ce site offre une interface claire et intuitive permettant aux clients de consulter facilement notre catalogue de produits. Notre plateforme met en valeur notre expertise en tant que pros du meuble avec une présentation soignée des différentes catégories de mobilier.",
      ghLink: "https://github.com/votre-username/blog-personnel",
      demoLink: "",
      isBlog: false,
      technologies: ["PHP", "MySQL", "HTML/CSS", "Architecture MVC", "Programmation orientée objet"],
      features: [
        "Navigation intuitive par catégories de produits",
        "Affichage détaillé des produits avec photos",
        "Consultation des prix et références",
        "Interface responsive adaptée à tous les appareils",
        "Système de filtrage par catégories"
      ],
      challenges: "Implémenter une architecture MVC complète pour un catalogue de meubles tout en respectant les contraintes du projet pédagogique."
    },
    {
      imgPath: editor,
      title: "SIO SHOP",
      description: "SIO Shop est une application de gestion de magasin développée en C# avec interface Windows Forms. Cette solution complète permet de gérer l'inventaire des produits, les clients, les employés et les ventes. Conçue avec une architecture orientée objet et une connexion à une base de données MySQL, l'application offre une interface intuitive pour les opérations quotidiennes d'un commerce.",
      ghLink: "https://github.com/votre-username/code-editor",
      demoLink: "https://code-editor-demo.com/",
      isBlog: false,
      technologies: ["C# Windows Forms", "MySQL", "Architecture orientée objet", ".NET Framework", "MySql.Data pour la connexion à la base de données"],
      features: [
        "Gestion des produits (ajout, modification, consultation)",
        "Gestion des clients",
        "Système de vente avec génération de factures PDF",
        "Authentification des employés",
        "Filtrage des produits par marque"
        "Suivi des stocks en temps réel"
        "Historique des achats"
      ],
      challenges: "Implémenter une architecture orientée objet complète pour un système de gestion commerciale tout en respectant les contraintes du projet pédagogique."
    },
    {
      imgPath: leaf,
      title: "Eco Tracker",
      description: "App mobile pour suivre son empreinte carbone avec suggestions IA.",
      ghLink: "https://github.com/votre-username/eco-tracker",
      demoLink: "https://eco-tracker-app.com/",
      isBlog: false,
      technologies: ["React Native", "Redux", "Node.js", "Google Maps API"],
      features: [
        "Calcul empreinte carbone",
        "Suggestions IA",
        "Suivi énergie/eau",
        "Défis écologiques",
        "Comparaisons régionales"
      ],
      challenges: "Centralisation de données fiables issues de sources multiples et vérifiées."
    },
    {
      imgPath: suicide,
      title: "Santé Mentale AI",
      description: "Détection de signaux de détresse dans les messages textes avec IA.",
      ghLink: "https://github.com/votre-username/sante-mentale-ai",
      demoLink: "https://sante-mentale-ai.org/",
      isBlog: false,
      technologies: ["Python", "TensorFlow", "Flask", "React"],
      features: [
        "Analyse sentiment",
        "Détection temps réel",
        "Recommandations",
        "Interface accessible",
        "Cryptage total"
      ],
      challenges: "Minimisation des faux positifs via affinement avec experts en santé mentale."
    },
    {
      imgPath: emotion,
      title: "Reconnaissance d'Émotions",
      description: "App de reconnaissance faciale d’émotions en temps réel via ML.",
      ghLink: "https://github.com/votre-username/emotion-recognition",
      demoLink: "https://emotion-recognition-demo.com/",
      isBlog: false,
      technologies: ["Python", "OpenCV", "TensorFlow", "React", "Docker"],
      features: [
        "7 émotions détectées",
        "Temps réel mobile",
        "Mode hors ligne",
        "Stats utilisateurs",
        "API intégrable"
      ],
      challenges: "Optimisation des modèles pour appareils faibles avec quantification/pruning."
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
              <ProjectCard
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
