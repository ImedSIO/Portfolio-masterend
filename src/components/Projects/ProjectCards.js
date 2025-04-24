import React from "react";
import Card from "react-bootstrap/Card";
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
export default ProjectCards;
