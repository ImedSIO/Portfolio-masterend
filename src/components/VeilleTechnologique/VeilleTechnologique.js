import React, { useEffect, useState } from "react";
import Particle from "../Particle";

function VeilleTechnologique() {
  // État pour gérer la largeur de l'écran
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  // Effet pour mettre à jour la largeur de l'écran lors du redimensionnement
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // CSS intégré dans le composant
  const styles = {
    veilleSection: {
      position: "relative",
      backgroundColor: "#121212",
      color: "white",
      paddingTop: "5rem",
      paddingBottom: "3rem",
      minHeight: "100vh",
      width: "100%",
    },
    container: {
      width: "100%",
      maxWidth: "1200px",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "0 15px",
    },
    veilleHeading: {
      fontSize: "2.5rem",
      fontWeight: "600",
      paddingBottom: "20px",
      textAlign: "center",
      marginBottom: "2rem",
    },
    veilleSubheading: {
      fontSize: "1.8rem",
      fontWeight: "500",
      textAlign: "center",
      marginTop: "2rem",
      marginBottom: "2rem",
      color: "#c5c6c7",
    },
    purple: {
      color: "#cd5ff8",
    },
    veilleCardView: {
      backgroundColor: "#1b1b1b",
      borderRadius: "15px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
      padding: "20px",
      border: "1px solid rgba(200, 137, 230, 0.637)",
      transition: "all 0.3s ease-in-out",
      height: "100%",
    },
    veilleHeaderCard: {
      marginBottom: "30px",
      width: "100%",
    },
    row: {
      display: "flex",
      flexWrap: "wrap",
      marginRight: "-15px",
      marginLeft: "-15px",
      justifyContent: "center",
    },
    column: {
      padding: "0 15px",
      marginBottom: "30px",
      width: "100%",
    },
    columnHalf: {
      padding: "0 15px",
      marginBottom: "30px",
      width: windowWidth >= 768 ? "50%" : "100%",
    },
    cardTitle: {
      fontSize: "1.3rem",
      fontWeight: "600",
      color: "#cd5ff8",
      marginBottom: "15px",
    },
    cardText: {
      fontSize: "1rem",
      color: "#b5b5b5",
      lineHeight: "1.6",
    },
    veilleSources: {
      backgroundColor: "#1b1b1b",
      borderRadius: "15px",
      padding: "20px",
      border: "1px solid rgba(200, 137, 230, 0.637)",
    },
    sourcesHeading: {
      fontSize: "1.5rem",
      fontWeight: "500",
      marginBottom: "15px",
      color: "#cd5ff8",
    },
    sourcesList: {
      listStyleType: "none",
      paddingLeft: "15px",
    },
    sourceLink: {
      color: "#c5c6c7",
      textDecoration: "none",
      transition: "color 0.3s",
    },
    sourceItem: {
      marginBottom: "10px",
      position: "relative",
      paddingLeft: "20px",
    },
    listHeading: {
      fontSize: "1.2rem",
      fontWeight: "500",
      marginTop: "15px",
      marginBottom: "10px",
      color: "#cd5ff8",
    },
    list: {
      paddingLeft: "20px",
      color: "#b5b5b5",
    },
    listItem: {
      marginBottom: "8px",
    },
    paddingBottom50: {
      paddingBottom: "50px",
    },
    paddingBottom30: {
      paddingBottom: "30px",
    },
    padding10: {
      padding: "10px",
    }
  };

  return (
    <div style={styles.veilleSection}>
      <Particle />
      <div style={styles.container}>
        <h1 style={styles.veilleHeading}>
          Veille Technologique <strong style={styles.purple}>Blockchain</strong>
        </h1>
        
        <div style={{...styles.row, ...styles.padding10}}>
          <div style={styles.veilleHeaderCard}>
            <div style={styles.veilleCardView}>
              <div>
                <h3 style={styles.cardTitle}>La Blockchain : Une Révolution Technologique</h3>
                <p style={styles.cardText}>
                  La blockchain est une technologie de stockage et de transmission d'informations transparente, 
                  sécurisée et fonctionnant sans organe central de contrôle. Cette veille technologique explore 
                  les dernières avancées et applications de cette technologie disruptive.
                </p>
              </div>
            </div>
          </div>
        </div>

        <h2 style={styles.veilleSubheading}>Domaines d'application et innovations</h2>
        
        <div style={{...styles.row, ...styles.paddingBottom50}}>
          <div style={styles.columnHalf}>
            <div style={styles.veilleCardView}>
              <div>
                <h3 style={styles.cardTitle}>Ethereum et Smart Contracts</h3>
                <p style={styles.cardText}>
                  Ethereum est une plateforme décentralisée qui permet la création de smart contracts et 
                  d'applications décentralisées (DApps). La mise à jour Ethereum 2.0 marque une transition 
                  vers un mécanisme de consensus Proof of Stake, réduisant considérablement la consommation 
                  énergétique et augmentant la scalabilité du réseau.
                </p>
                <div>
                  <strong style={{color: "#cd5ff8"}}>Innovations récentes:</strong>
                  <ul style={styles.list}>
                    <li style={styles.listItem}>Déploiement progressif d'Ethereum 2.0</li>
                    <li style={styles.listItem}>Solutions de Layer 2 comme Optimism et Arbitrum</li>
                    <li style={styles.listItem}>Amélioration de l'interopérabilité avec d'autres blockchains</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div style={styles.columnHalf}>
            <div style={styles.veilleCardView}>
              <div>
                <h3 style={styles.cardTitle}>NFTs (Non-Fungible Tokens)</h3>
                <p style={styles.cardText}>
                  Les NFTs représentent des actifs numériques uniques et non interchangeables. Ils ont 
                  révolutionné les industries de l'art, du divertissement et du gaming en permettant 
                  la propriété vérifiable d'actifs numériques. Malgré une volatilité importante du marché, 
                  les NFTs continuent d'évoluer vers des cas d'usage plus pratiques.
                </p>
                <div>
                  <strong style={{color: "#cd5ff8"}}>Applications émergentes:</strong>
                  <ul style={styles.list}>
                    <li style={styles.listItem}>Identité numérique et certification</li>
                    <li style={styles.listItem}>Billetterie et contrôle d'accès</li>
                    <li style={styles.listItem}>Propriété intellectuelle et droits d'auteur</li>
                    <li style={styles.listItem}>Gaming et métavers</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div style={styles.columnHalf}>
            <div style={styles.veilleCardView}>
              <div>
                <h3 style={styles.cardTitle}>Finance Décentralisée (DeFi)</h3>
                <p style={styles.cardText}>
                  La DeFi vise à recréer le système financier traditionnel de manière décentralisée, 
                  sans intermédiaires. Les protocoles DeFi permettent le prêt, l'emprunt, l'échange et 
                  d'autres services financiers de manière transparente et programmable.
                </p>
                <div>
                  <strong style={{color: "#cd5ff8"}}>Tendances actuelles:</strong>
                  <ul style={styles.list}>
                    <li style={styles.listItem}>Protocoles de prêt comme Aave et Compound</li>
                    <li style={styles.listItem}>Échanges décentralisés (DEX) comme Uniswap</li>
                    <li style={styles.listItem}>Stablecoins algorithmiques</li>
                    <li style={styles.listItem}>Assurance décentralisée</li>
                    <li style={styles.listItem}>Yield farming et liquidity mining</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div style={styles.columnHalf}>
            <div style={styles.veilleCardView}>
              <div>
                <h3 style={styles.cardTitle}>CBDCs et Adoption Institutionnelle</h3>
                <p style={styles.cardText}>
                  Les banques centrales du monde entier explorent activement les monnaies numériques 
                  de banque centrale (CBDC). Parallèlement, les institutions financières traditionnelles 
                  intègrent progressivement la technologie blockchain dans leurs opérations.
                </p>
                <div>
                  <strong style={{color: "#cd5ff8"}}>Développements significatifs:</strong>
                  <ul style={styles.list}>
                    <li style={styles.listItem}>L'e-CNY (yuan numérique) en Chine</li>
                    <li style={styles.listItem}>Projet de l'euro numérique par la BCE</li>
                    <li style={styles.listItem}>Adoption croissante par les banques d'investissement</li>
                    <li style={styles.listItem}>Réglementations en évolution</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 style={styles.veilleSubheading}>Enjeux et perspectives</h2>
        
        <div style={{...styles.row, ...styles.paddingBottom50}}>
          <div style={styles.column}>
            <div style={styles.veilleCardView}>
              <div>
                <h3 style={styles.cardTitle}>Défis actuels et évolutions futures</h3>
                <p style={styles.cardText}>
                  Malgré son potentiel révolutionnaire, la blockchain fait face à plusieurs défis qui 
                  doivent être surmontés pour une adoption massive:
                </p>
                
                <h5 style={styles.listHeading}>Défis techniques</h5>
                <ul style={styles.list}>
                  <li style={styles.listItem}><strong>Scalabilité</strong> - Augmenter le nombre de transactions par seconde</li>
                  <li style={styles.listItem}><strong>Interopérabilité</strong> - Permettre la communication entre différentes blockchains</li>
                  <li style={styles.listItem}><strong>Consommation énergétique</strong> - Réduire l'impact environnemental des mécanismes de consensus</li>
                </ul>
                
                <h5 style={styles.listHeading}>Défis réglementaires</h5>
                <ul style={styles.list}>
                  <li style={styles.listItem}><strong>Cadre juridique</strong> - Adaptation des lois aux spécificités de la blockchain</li>
                  <li style={styles.listItem}><strong>Protection des consommateurs</strong> - Garantir la sécurité des utilisateurs</li>
                  <li style={styles.listItem}><strong>Conformité</strong> - Respect des réglementations KYC/AML</li>
                </ul>
                
                <h5 style={styles.listHeading}>Perspectives d'avenir</h5>
                <ul style={styles.list}>
                  <li style={styles.listItem}><strong>Web3</strong> - Évolution vers un internet décentralisé</li>
                  <li style={styles.listItem}><strong>DAOs</strong> - Organisations autonomes décentralisées</li>
                  <li style={styles.listItem}><strong>Identité souveraine</strong> - Contrôle personnel des données d'identité</li>
                  <li style={styles.listItem}><strong>Tokenisation</strong> - Représentation d'actifs réels sur la blockchain</li>
                </ul>
                
                <p style={styles.cardText}>
                  La blockchain continue d'évoluer rapidement, avec de nouvelles solutions qui émergent 
                  pour résoudre ces défis. Cette technologie a le potentiel de transformer fondamentalement 
                  de nombreux secteurs en introduisant transparence, désintermédiation et automatisation.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div style={{...styles.row, ...styles.paddingBottom30}}>
          <div style={styles.column}>
            <div style={styles.veilleSources}>
              <h3 style={styles.sourcesHeading}>Sources et ressources</h3>
              <ul style={styles.sourcesList}>
                <li style={styles.sourceItem}>
                  <a href="https://ethereum.org" target="_blank" rel="noopener noreferrer" style={styles.sourceLink}>
                    Ethereum.org
                  </a> - Documentation officielle d'Ethereum
                </li>
                <li style={styles.sourceItem}>
                  <a href="https://defipulse.com" target="_blank" rel="noopener noreferrer" style={styles.sourceLink}>
                    DeFi Pulse
                  </a> - Suivi des protocoles DeFi
                </li>
                <li style={styles.sourceItem}>
                  <a href="https://www.coindesk.com" target="_blank" rel="noopener noreferrer" style={styles.sourceLink}>
                    CoinDesk
                  </a> - Actualités blockchain
                </li>
                <li style={styles.sourceItem}>
                  <a href="https://www.bis.org/topics/cbdc.htm" target="_blank" rel="noopener noreferrer" style={styles.sourceLink}>
                    Bank for International Settlements
                  </a> - Recherches sur les CBDCs
                </li>
                <li style={styles.sourceItem}>
                  <a href="https://www.ledger.com/academy" target="_blank" rel="noopener noreferrer" style={styles.sourceLink}>
                    Ledger Academy
                  </a> - Ressources éducatives
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VeilleTechnologique;
