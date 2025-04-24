import React, { useState } from "react";
import { Modal, Button, Card } from "react-bootstrap";
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
          <Card.Text className="project-description">
            {props.description}
          </Card.Text>
          <div className="project-buttons">
            <Button
              variant="primary"
              href={props.ghLink}
              target="_blank"
              className="project-button github-btn"
            >
              <BsGithub /> &nbsp;
              {props.isBlog ? "Blog" : "GitHub"}
            </Button>
           
            {!props.isBlog && props.demoLink && (
              <Button
                variant="primary"
                href={props.demoLink}
                target="_blank"
                className="project-button demo-btn"
              >
                <CgWebsite /> &nbsp;
                {"Demo"}
              </Button>
            )}
           
            <Button
              variant="info"
              onClick={handleShow}
              className="project-button details-btn"
            >
              <FaInfoCircle /> &nbsp;
              {"Détails"}
            </Button>
          </div>
        </Card.Body>
      </Card>

      <Modal 
        show={showModal} 
        onHide={handleClose} 
        size="lg" 
        centered 
        className="project-modal"
      >
        <Modal.Header closeButton className="modal-header">
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <img
            src={props.imgPath}
            alt={props.title}
            className="img-fluid project-modal-img"
          />
          <h4 className="section-title">Description</h4>
          <p className="section-text">{props.description}</p>
         
          <h4 className="section-title">Technologies utilisées</h4>
          <ul className="tech-list">
            {props.technologies.map((tech, index) => (
              <li key={index} className="tech-item">{tech}</li>
            ))}
          </ul>
         
          <h4 className="section-title">Fonctionnalités principales</h4>
          <ul className="feature-list">
            {props.features.map((feature, index) => (
              <li key={index} className="feature-item">{feature}</li>
            ))}
          </ul>
         
          {props.challenges && (
            <>
              <h4 className="section-title">Défis rencontrés</h4>
              <p className="section-text">{props.challenges}</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer className="modal-footer">
          <Button variant="secondary" onClick={handleClose} className="close-btn">
            Fermer
          </Button>
          {props.demoLink && (
            <Button variant="primary" href={props.demoLink} target="_blank" className="demo-modal-btn">
              <CgWebsite /> Voir la démo
            </Button>
          )}
          <Button variant="dark" href={props.ghLink} target="_blank" className="github-modal-btn">
            <BsGithub /> Voir le code
          </Button>
        </Modal.Footer>
      </Modal>

      <style jsx>{`
        /* Card Styling */
        .project-card-view {
          background: linear-gradient(145deg, #1a1a2e 0%, #16213e 100%);
          border: 1px solid #3a3a5a;
          border-radius: 10px;
          box-shadow: 0 4px 20px rgba(109, 40, 217, 0.15);
          transition: all 0.3s ease;
          height: 100%;
          overflow: hidden;
        }
        
        .project-card-view:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(109, 40, 217, 0.3);
        }
        
        .project-title {
          color: white;
          font-weight: 600;
          font-size: 1.5rem;
          margin-bottom: 0.75rem;
        }
        
        .project-description {
          color: #cccccc;
          font-size: 0.95rem;
          margin-bottom: 1.5rem;
        }
        
        .project-buttons {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        
        .project-button {
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 5px;
          font-weight: 500;
          display: flex;
          align-items: center;
          transition: all 0.2s ease;
        }
        
        .github-btn, .demo-btn {
          background-color: #6d28d9;
          border-color: #8b5cf6;
        }
        
        .github-btn:hover, .demo-btn:hover {
          background-color: #5b21b6;
          border-color: #7c3aed;
        }
        
        .details-btn {
          background-color: #0891b2;
          border-color: #06b6d4;
        }
        
        .details-btn:hover {
          background-color: #0e7490;
          border-color: #0891b2;
        }
        
        /* Modal Styling */
        .modal-content {
          background: linear-gradient(145deg, #1a1a2e 0%, #16213e 100%);
          border: 1px solid #3a3a5a;
          border-radius: 10px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
        }
        
        .modal-header {
          border-bottom: 1px solid #3a3a5a;
          background-color: #2a2a3a;
          padding: 1rem 1.5rem;
        }
        
        .modal-header .modal-title {
          color: white;
          font-weight: 600;
        }
        
        .modal-header .close {
          color: white;
          text-shadow: none;
          opacity: 0.8;
        }
        
        .modal-body {
          padding: 1.5rem;
          color: #cccccc;
          background: linear-gradient(145deg, #1a1a2e 0%, #16213e 100%);
        }
        
        .project-modal-img {
          border-radius: 8px;
          margin-bottom: 1.5rem;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }
        
        .section-title {
          color: white;
          font-weight: 600;
          margin-top: 1.5rem;
          margin-bottom: 1rem;
          font-size: 1.25rem;
          position: relative;
          padding-left: 1rem;
        }
        
        .section-title::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 4px;
          height: 20px;
          background: linear-gradient(to bottom, #6d28d9, #0891b2);
          border-radius: 2px;
        }
        
        .section-text {
          color: #cccccc;
          line-height: 1.6;
          margin-bottom: 1rem;
        }
        
        .tech-list, .feature-list {
          list-style: none;
          padding-left: 1rem;
          margin-bottom: 1.5rem;
        }
        
        .tech-item, .feature-item {
          position: relative;
          padding-left: 1.5rem;
          margin-bottom: 0.5rem;
          color: #cccccc;
        }
        
        .tech-item::before, .feature-item::before {
          content: '•';
          position: absolute;
          left: 0;
          color: #6d28d9;
          font-size: 1.2rem;
        }
        
        .modal-footer {
          border-top: 1px solid #3a3a5a;
          background-color: #2a2a3a;
          padding: 1rem 1.5rem;
        }
        
        .close-btn {
          background-color: #4b5563;
          border-color: #6b7280;
        }
        
        .close-btn:hover {
          background-color: #374151;
          border-color: #4b5563;
        }
        
        .demo-modal-btn {
          background-color: #6d28d9;
          border-color: #8b5cf6;
        }
        
        .demo-modal-btn:hover {
          background-color: #5b21b6;
          border-color: #7c3aed;
        }
        
        .github-modal-btn {
          background-color: #1f2937;
          border-color: #374151;
        }
        
        .github-modal-btn:hover {
          background-color: #111827;
          border-color: #1f2937;
        }
        
        /* Ajout d'effets spéciaux pour l'oral */
        .project-card-view::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at top right, rgba(109, 40, 217, 0.1), transparent 70%);
          pointer-events: none;
        }
        
        .modal-body::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at bottom left, rgba(8, 145, 178, 0.05), transparent 70%);
          pointer-events: none;
        }
      `}</style>
    </>
  );
}

export default ProjectCards;
