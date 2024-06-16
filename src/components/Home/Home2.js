import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LAISSEZ MOI <span className="purple"> ME </span> PRESENTEZ
            </h1>
            <p className="home-about-body">
              Je suis tombé amoureux de la programmation et j'ai au moins appris
              quelque chose, je pense… 🤷‍♂️
              <br />
              <br />Je maîtrise plusieurs languages de programmation comme le
              <i>
                <b className="purple"> C#, PHP, HTML, SQL et Python. </b>
              </i>
              <br />
              <br />
              Mes centres d'interets sont &nbsp;
              <i>
                <b className="purple">La programmation </b> et
                tout ce qui est en rapport avec{" "}
                <b className="purple">
                  La science et l'astronomie.
                </b>
              </i>
              <br />
              <br />
              De mon temps libre j'adore coder des solutions 
              en <b className="purple">C#</b> et
              <i>
                <b className="purple">
                  {" "}
                  créer des bases de données
                </b>
              </i>
              &nbsp;
              <i>
                <b className="purple"> </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>RETROUVEZ MOI SUR</h1>
            <p>
              Vous pouvez <span className="purple">vous connectez </span>avec moi sur
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ImedSIO"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/imed-simaoui-98a53b249/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
