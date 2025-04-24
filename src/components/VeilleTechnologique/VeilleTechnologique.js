import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle";
// Importez le CSS (ajustez le chemin si nécessaire)
import "../../veilletechnologique.css";

function VeilleTechnologique() {
  return (
    <Container fluid className="veille-section">
      <Particle />
      <Container>
        <h1 className="veille-heading">
          Veille Technologique <strong className="purple">Blockchain</strong>
        </h1>
        
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={12} className="veille-header-card">
            <Card className="veille-card-view">
              <Card.Body>
                <Card.Title>La Blockchain : Une Révolution Technologique</Card.Title>
                <Card.Text>
                  La blockchain est une technologie de stockage et de transmission d'informations transparente, 
                  sécurisée et fonctionnant sans organe central de contrôle. Cette veille technologique explore 
                  les dernières avancées et applications de cette technologie disruptive.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <h2 className="veille-subheading">Domaines d'application et innovations</h2>
        
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col md={6} className="veille-card">
            <Card className="veille-card-view">
              <Card.Body>
                <Card.Title>Ethereum et Smart Contracts</Card.Title>
                <Card.Text>
                  Ethereum est une plateforme décentralisée qui permet la création de smart contracts et 
                  d'applications décentralisées (DApps). La mise à jour Ethereum 2.0 marque une transition 
                  vers un mécanisme de consensus Proof of Stake, réduisant considérablement la consommation 
                  énergétique et augmentant la scalabilité du réseau.
                </Card.Text>
                <Card.Text>
                  <strong>Innovations récentes:</strong>
                  <ul>
                    <li>Déploiement progressif d'Ethereum 2.0</li>
                    <li>Solutions de Layer 2 comme Optimism et Arbitrum</li>
                    <li>Amélioration de l'interopérabilité avec d'autres blockchains</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="veille-card">
            <Card className="veille-card-view">
              <Card.Body>
                <Card.Title>NFTs (Non-Fungible Tokens)</Card.Title>
                <Card.Text>
                  Les NFTs représentent des actifs numériques uniques et non interchangeables. Ils ont 
                  révolutionné les industries de l'art, du divertissement et du gaming en permettant 
                  la propriété vérifiable d'actifs numériques. Malgré une volatilité importante du marché, 
                  les NFTs continuent d'évoluer vers des cas d'usage plus pratiques.
                </Card.Text>
                <Card.Text>
                  <strong>Applications émergentes:</strong>
                  <ul>
                    <li>Identité numérique et certification</li>
                    <li>Billetterie et contrôle d'accès</li>
                    <li>Propriété intellectuelle et droits d'auteur</li>
                    <li>Gaming et métavers</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="veille-card">
            <Card className="veille-card-view">
              <Card.Body>
                <Card.Title>Finance Décentralisée (DeFi)</Card.Title>
                <Card.Text>
                  La DeFi vise à recréer le système financier traditionnel de manière décentralisée, 
                  sans intermédiaires. Les protocoles DeFi permettent le prêt, l'emprunt, l'échange et 
                  d'autres services financiers de manière transparente et programmable.
                </Card.Text>
                <Card.Text>
                  <strong>Tendances actuelles:</strong>
                  <ul>
                    <li>Protocoles de prêt comme Aave et Compound</li>
                    <li>Échanges décentralisés (DEX) comme Uniswap</li>
                    <li>Stablecoins algorithmiques</li>
                    <li>Assurance décentralisée</li>
                    <li>Yield farming et liquidity mining</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="veille-card">
            <Card className="veille-card-view">
              <Card.Body>
                <Card.Title>CBDCs et Adoption Institutionnelle</Card.Title>
                <Card.Text>
                  Les banques centrales du monde entier explorent activement les monnaies numériques 
                  de banque centrale (CBDC). Parallèlement, les institutions financières traditionnelles 
                  intègrent progressivement la technologie blockchain dans leurs opérations.
                </Card.Text>
                <Card.Text>
                  <strong>Développements significatifs:</strong>
                  <ul>
                    <li>L'e-CNY (yuan numérique) en Chine</li>
                    <li>Projet de l'euro numérique par la BCE</li>
                    <li>Adoption croissante par les banques d'investissement</li>
                    <li>Réglementations en évolution</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <h2 className="veille-subheading">Enjeux et perspectives</h2>
        
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col md={12}>
            <Card className="veille-card-view">
              <Card.Body>
                <Card.Title>Défis actuels et évolutions futures</Card.Title>
                <Card.Text>
                  Malgré son potentiel révolutionnaire, la blockchain fait face à plusieurs défis qui 
                  doivent être surmontés pour une adoption massive:
                </Card.Text>
                
                <h5>Défis techniques</h5>
                <ul>
                  <li><strong>Scalabilité</strong> - Augmenter le nombre de transactions par seconde</li>
                  <li><strong>Interopérabilité</strong> - Permettre la communication entre différentes blockchains</li>
                  <li><strong>Consommation énergétique</strong> - Réduire l'impact environnemental des mécanismes de consensus</li>
                </ul>
                
                <h5>Défis réglementaires</h5>
                <ul>
                  <li><strong>Cadre juridique</strong> - Adaptation des lois aux spécificités de la blockchain</li>
                  <li><strong>Protection des consommateurs</strong> - Garantir la sécurité des utilisateurs</li>
                  <li><strong>Conformité</strong> - Respect des réglementations KYC/AML</li>
                </ul>
                
                <h5>Perspectives d'avenir</h5>
                <ul>
                  <li><strong>Web3</strong> - Évolution vers un internet décentralisé</li>
                  <li><strong>DAOs</strong> - Organisations autonomes décentralisées</li>
                  <li><strong>Identité souveraine</strong> - Contrôle personnel des données d'identité</li>
                  <li><strong>Tokenisation</strong> - Représentation d'actifs réels sur la blockchain</li>
                </ul>
                
                <Card.Text>
                  La blockchain continue d'évoluer rapidement, avec de nouvelles solutions qui émergent 
                  pour résoudre ces défis. Cette technologie a le potentiel de transformer fondamentalement 
                  de nombreux secteurs en introduisant transparence, désintermédiation et automatisation.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
          <Col md={12} className="veille-sources">
            <h3>Sources et ressources</h3>
            <ul>
              <li><a href="https://ethereum.org" target="_blank" rel="noopener noreferrer">Ethereum.org</a> - Documentation officielle d'Ethereum</li>
              <li><a href="https://defipulse.com" target="_blank" rel="noopener noreferrer">DeFi Pulse</a> - Suivi des protocoles DeFi</li>
              <li><a href="https://www.coindesk.com" target="_blank" rel="noopener noreferrer">CoinDesk</a> - Actualités blockchain</li>
              <li><a href="https://www.bis.org/topics/cbdc.htm" target="_blank" rel="noopener noreferrer">Bank for International Settlements</a> - Recherches sur les CBDCs</li>
              <li><a href="https://www.ledger.com/academy" target="_blank" rel="noopener noreferrer">Ledger Academy</a> - Ressources éducatives</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default VeilleTechnologique;
