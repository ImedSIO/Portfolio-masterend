import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Salut a tous, je suis <span className="purple">Simaoui Imed </span>
            je viens <span className="purple"> d'Amiens, en France.</span>
            <br />
            Je suis actuellement étudiant en BTS SIO à Edouard Gand.
            <br />
           Plus particulièrement en option SLAM (Developpement).
            <br />
            <br />
            A part le developpement j'adore!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jouer au jeu vidéo
            </li>
            <li className="about-activity">
              <ImPointRight /> L'astronomie
            </li>
            <li className="about-activity">
              <ImPointRight /> Voyager
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Dans chaque défi se cache une opportunité. À toi de la découvrir et de la transformer en succès."{" "}
          </p>
          <footer className="blockquote-footer">Simaoui Imed</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
