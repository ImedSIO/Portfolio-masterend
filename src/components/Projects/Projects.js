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
        "Filtrage des produits par marque",
        "Suivi des stocks en temps réel",
        "Historique des achats"
      ],
      challenges: "Implémenter une architecture orientée objet complète pour un système de gestion commerciale tout en respectant les contraintes du projet pédagogique."
    },
    {
      imgPath: leaf,
      title: "Morpion C#",
      description: "Morpion en C# est un jeu classique de tic-tac-toe développé en console avec le langage C#. Cette application permet à deux joueurs de s'affronter tour à tour sur une grille 3x3. Conçue avec une interface simple mais efficace, elle offre une expérience de jeu fluide et intuitive tout en mettant en œuvre les principes fondamentaux de la programmation orientée objet.",
      ghLink: "https://github.com/votre-username/eco-tracker",
      demoLink: "https://eco-tracker-app.com/",
      isBlog: false,
      technologies: ["C# Console Application", ".NET Framework", "Programmation orientée objet", "Structures de données (tableaux et listes)","Gestion des entrées/sorties console"],
      features: [
        "Interface console claire et intuitive",
        "Personnalisation des noms des joueurs",
        "Affichage dynamique de la grille de jeu après chaque coup",
        "Vérification automatique des conditions de victoire",
        "Gestion des tours alternés entre les joueurs",
        "Validation des entrées utilisateur",
        "Possibilité de rejouer une partie"
      ],
      challenges: "Implémenter un algorithme efficace de vérification des conditions de victoire tout en maintenant une structure de code claire et maintenable."
    },
    {
      imgPath: suicide,
      title: "Gestion d'une bibliothèque en C#",
      description: "Bibliothèque Modern Solidarity est une application de gestion de bibliothèque développée en C# pour l'association Modern Solidarity. Cette solution complète permet de gérer l'inventaire des livres, les adhérents, les emprunts et les retours. Conçue avec une interface Windows Forms intuitive et une architecture orientée objet, l'application offre aux bénévoles de l'association un outil efficace pour la gestion quotidienne de leur bibliothèque communautaire.",
      ghLink: "https://github.com/votre-username/sante-mentale-ai",
      demoLink: "https://sante-mentale-ai.org/",
      isBlog: false,
      technologies: ["C# Windows Forms", "SQL Server Express", "Architecture en couches (DAL, BLL, UI)", "Entity Framework","LINQ","Crystal Reports pour les impressions"],
      features: [
        "Gestion complète du catalogue de livres (ajout, modification, suppression)",
        "Enregistrement et suivi des adhérents",
        "Système d'emprunt et de retour avec gestion des délais",
        "Recherche multicritères (auteur, titre, genre, disponibilité)",
        "Génération de rapports et statistiques",
        "Gestion des retards et notifications",
        "Sauvegarde et restauration des données"
      ],
      challenges: "Concevoir une interface suffisamment intuitive pour des utilisateurs non-techniciens tout en intégrant des fonctionnalités avancées de gestion bibliothécaire."
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
