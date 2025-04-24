import React, { useState } from "react";
import { Container, Row, Col, Modal, Button, Card } from "react-bootstrap";
import Particle from "../Particle";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FaInfoCircle } from "react-icons/fa";


function ProjectCards(props) {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
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
           
            {/* Bouton de détails qui ouvre la modal */}
            <Button
              variant="info"
              onClick={handleShow}
              className="project-button"
            >
              <FaInfoCircle /> &nbsp;
              {"Détails"}
            </Button>
          </div>
        </Card.Body>
      </Card>

      {/* Modal pour afficher les détails du projet */}
      <Modal show={showModal} onHide={handleClose} size="lg" centered className="project-modal">
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={props.imgPath}
            alt={props.title}
            className="img-fluid project-modal-img"
          />
          <h4 className="mt-4">Description</h4>
          <p>{props.description}</p>
         
          <h4 className="mt-4">Technologies utilisées</h4>
          <ul className="tech-list">
            {props.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
         
          <h4 className="mt-4">Fonctionnalités principales</h4>
          <ul>
            {props.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
         
          {props.challenges && (
            <>
              <h4 className="mt-4">Défis rencontrés</h4>
              <p>{props.challenges}</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
          {props.demoLink && (
            <Button variant="primary" href={props.demoLink} target="_blank">
              <CgWebsite /> Voir la démo
            </Button>
          )}
          <Button variant="dark" href={props.ghLink} target="_blank">
            <BsGithub /> Voir le code
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ProjectCards;
