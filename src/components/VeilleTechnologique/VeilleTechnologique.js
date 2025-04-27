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

  // Fonction pour gérer le téléchargement du rapport
  const handleDownloadReport = () => {
    alert("Le téléchargement du rapport commencera bientôt...");
    // Ici, vous pourriez implémenter la logique réelle de téléchargement
  };

  // CSS amélioré
  const styles = {
    veilleSection: {
      position: "relative",
      background: "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
      color: "white",
      paddingTop: "5rem",
      paddingBottom: "3rem",
      minHeight: "100vh",
      width: "100%",
      overflowX: "hidden",
    },
    container: {
      width: "100%",
      maxWidth: "1200px",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "0 15px",
    },
    veilleHeading: {
      fontSize: "3.5rem",
      fontWeight: "800",
      paddingBottom: "20px",
      textAlign: "center",
      marginBottom: "2rem",
      textShadow: "0 2px 10px rgba(205, 95, 248, 0.5)",
      letterSpacing: "1px",
    },
    veilleSubheading: {
      fontSize: "2.2rem",
      fontWeight: "600",
      textAlign: "center",
      marginTop: "3rem",
      marginBottom: "2.5rem",
      color: "#e0e0e0",
      textShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
      position: "relative",
    },
    purple: {
      color: "#cd5ff8",
    },
    veilleCardView: {
      backgroundColor: "rgba(30, 30, 40, 0.7)",
      borderRadius: "20px",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
      padding: "25px",
      border: "1px solid rgba(200, 137, 230, 0.3)",
      transition: "all 0.4s ease-in-out",
      height: "100%",
      backdropFilter: "blur(5px)",
      transform: "translateZ(0)",
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
    columnThird: {
      padding: "0 15px",
      marginBottom: "30px",
      width: windowWidth >= 992 ? "33.333%" : windowWidth >= 768 ? "50%" : "100%",
    },
    cardTitle: {
      fontSize: "1.5rem",
      fontWeight: "600",
      color: "#cd5ff8",
      marginBottom: "20px",
    },
    cardText: {
      fontSize: "1.05rem",
      color: "#d0d0d0",
      lineHeight: "1.8",
    },
    veilleSources: {
      backgroundColor: "rgba(30, 30, 40, 0.7)",
      borderRadius: "20px",
      padding: "25px",
      border: "1px solid rgba(200, 137, 230, 0.3)",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
    },
    sourcesHeading: {
      fontSize: "1.8rem",
      fontWeight: "600",
      marginBottom: "20px",
      color: "#cd5ff8",
    },
    sourcesList: {
      listStyleType: "none",
      paddingLeft: "15px",
    },
    sourceLink: {
      color: "#e0e0e0",
      textDecoration: "none",
      transition: "color 0.3s",
    },
    sourceItem: {
      marginBottom: "15px",
      position: "relative",
      paddingLeft: "25px",
    },
    listHeading: {
      fontSize: "1.3rem",
      fontWeight: "500",
      marginTop: "25px",
      marginBottom: "15px",
      color: "#cd5ff8",
    },
    list: {
      paddingLeft: "25px",
      color: "#d0d0d0",
    },
    listItem: {
      marginBottom: "12px",
    },
    paddingBottom50: {
      paddingBottom: "50px",
    },
    paddingBottom30: {
      paddingBottom: "30px",
    },
    padding10: {
      padding: "10px",
    },
    imageContainer: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "20px",
      overflow: "hidden",
      borderRadius: "12px",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4)",
    },
    cardImage: {
      width: "100%",
      height: "auto",
      maxHeight: "250px", // Réduire la hauteur des images
      objectFit: "cover", // Assurer que les images couvrent bien l'espace
      transition: "transform 0.5s ease",
    },
    iconImage: {
      width: "80px",
      height: "80px",
      marginBottom: "15px",
      filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3))",
    },
    timeline: {
      position: "relative",
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "20px 0",
    },
    timelineCenterLine: {
      position: "absolute",
      width: "6px",
      backgroundColor: "rgba(205, 95, 248, 0.7)",
      top: "0",
      bottom: "0",
      left: "50%",
      marginLeft: "-3px",
      borderRadius: "3px",
      boxShadow: "0 0 10px rgba(205, 95, 248, 0.5)",
    },
    timelineItem: {
      padding: "10px 40px",
      position: "relative",
      backgroundColor: "inherit",
      width: "50%",
      boxSizing: "border-box",
      marginBottom: "30px",
    },
    timelineLeft: {
      left: "0",
    },
    timelineRight: {
      left: "50%",
    },
    timelineContent: {
      padding: "20px 30px",
      backgroundColor: "rgba(30, 30, 40, 0.7)",
      position: "relative",
      borderRadius: "15px",
      border: "1px solid rgba(200, 137, 230, 0.3)",
      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
    gradientButton: {
      display: "inline-block",
      padding: "14px 28px",
      background: "linear-gradient(90deg, #cd5ff8, #a64dff)",
      color: "white",
      borderRadius: "30px",
      textDecoration: "none",
      fontWeight: "600",
      boxShadow: "0 4px 15px rgba(205, 95, 248, 0.4)",
      transition: "all 0.3s ease",
      border: "none",
      cursor: "pointer",
      marginTop: "20px",
      fontSize: "1.1rem",
    },
    statsContainer: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      marginBottom: "40px",
    },
    statBox: {
      textAlign: "center",
      padding: "25px",
      margin: "10px",
      backgroundColor: "rgba(30, 30, 40, 0.7)",
      borderRadius: "15px",
      border: "1px solid rgba(200, 137, 230, 0.3)",
      width: windowWidth >= 768 ? "calc(25% - 20px)" : "calc(50% - 20px)",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
    statNumber: {
      fontSize: "2.5rem",
      fontWeight: "700",
      background: "linear-gradient(90deg, #cd5ff8, #a64dff)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      marginBottom: "10px",
    },
    statLabel: {
      fontSize: "1.1rem",
      color: "#e0e0e0",
      fontWeight: "500",
    },
    highlight: {
      color: "#cd5ff8",
      fontWeight: "600",
    },
    timelineCircleLeft: {
      position: "absolute",
      width: "24px",
      height: "24px",
      backgroundColor: "#cd5ff8",
      border: "4px solid #a64dff",
      borderRadius: "50%",
      zIndex: "1",
      top: "15px",
      right: "-16px",
      boxShadow: "0 0 10px rgba(205, 95, 248, 0.8)",
    },
    timelineCircleRight: {
      position: "absolute",
      width: "24px",
      height: "24px",
      backgroundColor: "#cd5ff8",
      border: "4px solid #a64dff",
      borderRadius: "50%",
      zIndex: "1",
      top: "15px",
      left: "-16px",
      boxShadow: "0 0 10px rgba(205, 95, 248, 0.8)",
    },
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
              <div style={styles.imageContainer}>
                <img 
                  src="https://cdn.pixabay.com/photo/2018/01/18/10/00/blockchain-3090197_1280.jpg" 
                  alt="Blockchain Technology" 
                  style={styles.cardImage}
                />
              </div>
              <div>
                <h3 style={styles.cardTitle}>La Blockchain : Une Révolution Technologique</h3>
                <p style={styles.cardText}>
                  La blockchain est une technologie de stockage et de transmission d'informations transparente, 
                  sécurisée et fonctionnant sans organe central de contrôle. Cette veille technologique explore 
                  les dernières avancées et applications de cette technologie disruptive qui transforme de nombreux 
                  secteurs d'activité, de la finance à la logistique en passant par la santé et l'art numérique.
                </p>
                <p style={styles.cardText}>
                  Apparue en 2008 avec le Bitcoin, la blockchain a depuis évolué bien au-delà des cryptomonnaies 
                  pour devenir une infrastructure fondamentale du Web 3.0, permettant des échanges de valeur 
                  pair-à-pair sans intermédiaires de confiance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Statistiques */}
        <div style={styles.statsContainer}>
          <div style={styles.statBox}>
            <div style={styles.statNumber}>$2.3T</div>
            <div style={styles.statLabel}>Capitalisation du marché crypto</div>
          </div>
          <div style={styles.statBox}>
            <div style={styles.statNumber}>+400%</div>
            <div style={styles.statLabel}>Croissance DeFi (2023-2025)</div>
          </div>
          <div style={styles.statBox}>
            <div style={styles.statNumber}>114M+</div>
            <div style={styles.statLabel}>Utilisateurs de crypto</div>
          </div>
          <div style={styles.statBox}>
            <div style={styles.statNumber}>80%</div>
            <div style={styles.statLabel}>Banques centrales explorant les CBDCs</div>
          </div>
        </div>

        <h2 style={styles.veilleSubheading}>Domaines d'application et innovations</h2>
        
        <div style={{...styles.row, ...styles.paddingBottom50}}>
          <div style={styles.columnHalf}>
            <div style={styles.veilleCardView}>
              <div style={styles.imageContainer}>
                <img 
                  src="https://cdn.pixabay.com/photo/2018/05/17/21/26/cryptocurrency-3409725_1280.jpg" 
                  alt="Ethereum" 
                  style={styles.cardImage}
                />
              </div>
              <div>
                <h3 style={styles.cardTitle}>Ethereum et Smart Contracts</h3>
                <p style={styles.cardText}>
                  Ethereum est une plateforme décentralisée qui permet la création de smart contracts et 
                  d'applications décentralisées (DApps). La mise à jour Ethereum 2.0 marque une transition 
                  vers un mécanisme de consensus Proof of Stake, réduisant considérablement la consommation 
                  énergétique et augmentant la scalabilité du réseau.
                </p>
                <p style={styles.cardText}>
                  Les smart contracts sont des programmes auto-exécutables qui s'activent lorsque des conditions 
                  prédéfinies sont remplies, permettant l'automatisation de processus complexes sans intermédiaires.
                </p>
                <div>
                  <strong style={{color: "#cd5ff8"}}>Innovations récentes:</strong>
                  <ul style={styles.list}>
                    <li style={styles.listItem}>Déploiement progressif d'Ethereum 2.0 (The Merge, Shanghai, Cancun)</li>
                    <li style={styles.listItem}>Solutions de Layer 2 comme Optimism et Arbitrum réduisant les frais de transaction</li>
                    <li style={styles.listItem}>Amélioration de l'interopérabilité avec d'autres blockchains via des ponts</li>
                    <li style={styles.listItem}>EIP-4844 (Proto-Danksharding) pour réduire les coûts des rollups</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div style={styles.columnHalf}>
            <div style={styles.veilleCardView}>
              <div style={styles.imageContainer}>
                <img 
                  src="https://cdn.pixabay.com/photo/2022/03/01/02/51/nft-7040435_1280.png" 
                  alt="NFT Artwork" 
                  style={styles.cardImage}
                />
              </div>
              <div>
                <h3 style={styles.cardTitle}>NFTs (Non-Fungible Tokens)</h3>
                <p style={styles.cardText}>
                  Les NFTs représentent des actifs numériques uniques et non interchangeables. Ils ont 
                  révolutionné les industries de l'art, du divertissement et du gaming en permettant 
                  la propriété vérifiable d'actifs numériques. Malgré une volatilité importante du marché, 
                  les NFTs continuent d'évoluer vers des cas d'usage plus pratiques.
                </p>
                <p style={styles.cardText}>
                  En 2025, le marché des NFTs s'est stabilisé autour de cas d'usage concrets, dépassant 
                  la simple spéculation pour offrir de réelles utilités dans divers secteurs.
                </p>
                <div>
                  <strong style={{color: "#cd5ff8"}}>Applications émergentes:</strong>
                  <ul style={styles.list}>
                    <li style={styles.listItem}>Identité numérique et certification de documents</li>
                    <li style={styles.listItem}>Billetterie et contrôle d'accès pour événements</li>
                    <li style={styles.listItem}>Propriété intellectuelle et gestion des droits d'auteur</li>
                    <li style={styles.listItem}>Gaming et métavers avec objets interopérables</li>
                    <li style={styles.listItem}>Tokenisation d'actifs réels (immobilier, œuvres d'art)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div style={styles.columnHalf}>
            <div style={styles.veilleCardView}>
              <div style={styles.imageContainer}>
                <img 
                  src="https://cdn.pixabay.com/photo/2021/05/24/09/15/ethereum-6278326_1280.jpg" 
                  alt="DeFi Concept" 
                  style={styles.cardImage}
                />
              </div>
              <div>
                <h3 style={styles.cardTitle}>Finance Décentralisée (DeFi)</h3>
                <p style={styles.cardText}>
                  La DeFi vise à recréer le système financier traditionnel de manière décentralisée, 
                  sans intermédiaires. Les protocoles DeFi permettent le prêt, l'emprunt, l'échange et 
                  d'autres services financiers de manière transparente et programmable.
                </p>
                <p style={styles.cardText}>
                  En 2025, la DeFi a atteint une capitalisation de plus de 300 milliards de dollars, avec 
                  des protocoles de plus en plus sophistiqués et des interfaces utilisateur simplifiées 
                  qui facilitent l'adoption par le grand public.
                </p>
                <div>
                  <strong style={{color: "#cd5ff8"}}>Tendances actuelles:</strong>
                  <ul style={styles.list}>
                    <li style={styles.listItem}>Protocoles de prêt comme Aave et Compound avec des taux d'intérêt dynamiques</li>
                    <li style={styles.listItem}>Échanges décentralisés (DEX) comme Uniswap et leur évolution vers des modèles plus efficaces</li>
                    <li style={styles.listItem}>Stablecoins algorithmiques et adossés à des actifs diversifiés</li>
                    <li style={styles.listItem}>Assurance décentralisée pour couvrir les risques liés aux protocoles</li>
                    <li style={styles.listItem}>Yield farming et liquidity mining avec des stratégies d'optimisation automatisées</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div style={styles.columnHalf}>
            <div style={styles.veilleCardView}>
              <div style={styles.imageContainer}>
                <img 
                  src="https://cdn.pixabay.com/photo/2017/12/12/12/44/bitcoin-3014614_1280.jpg" 
                  alt="Central Bank Digital Currency" 
                  style={styles.cardImage}
                />
              </div>
              <div>
                <h3 style={styles.cardTitle}>CBDCs et Adoption Institutionnelle</h3>
                <p style={styles.cardText}>
                  Les banques centrales du monde entier explorent activement les monnaies numériques 
                  de banque centrale (CBDC). Parallèlement, les institutions financières traditionnelles 
                  intègrent progressivement la technologie blockchain dans leurs opérations.
                </p>
                <p style={styles.cardText}>
                  En 2025, plus de 20 pays ont lancé ou sont en phase pilote avancée de leurs CBDCs, 
                  transformant profondément les systèmes de paiement nationaux et internationaux.
                </p>
                <div>
                  <strong style={{color: "#cd5ff8"}}>Développements significatifs:</strong>
                  <ul style={styles.list}>
                    <li style={styles.listItem}>L'e-CNY (yuan numérique) en Chine avec plus de 300 millions d'utilisateurs actifs</li>
                    <li style={styles.listItem}>Projet de l'euro numérique par la BCE en phase de déploiement</li>
                    <li style={styles.listItem}>Adoption croissante par les banques d'investissement de solutions blockchain</li>
                    <li style={styles.listItem}>Réglementations en évolution avec le MiCA en Europe</li>
                    <li style={styles.listItem}>Intégration des stablecoins régulés dans les systèmes de paiement traditionnels</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Nouvelles sections */}
        <h2 style={styles.veilleSubheading}>Innovations émergentes</h2>
        
        <div style={{...styles.row, ...styles.paddingBottom50}}>
          <div style={styles.columnThird}>
            <div style={styles.veilleCardView}>
              <div style={{textAlign: "center"}}>
                <img 
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBmaWxsPSIjY2Q1ZmY4Ij48cGF0aCBkPSJNMjcyIDMyYy05LjEgMC0xNi44IDYuNC0xOC42IDE1LjJMMjA4IDIwOEg5NmMtOC44IDAtMTYgNy4yLTE2IDE2czYgMTYgMTYgMTZoMTI4YzkuMSAwIDE2LjgtNi40IDE4LjYtMTUuMkwyODggOTZoMTI4YzguOCAwIDE2LTcuMiAxNi0xNnMtNy4yLTE2LTE2LTE2SDI3MnptLTY0IDMyMGMtMzUuMyAwLTY0IDI4LjctNjQgNjRzMjguNyA2NCA2NCA2NHM2NC0yOC43IDY0LTY0cy0yOC43LTY0LTY0LTY0ek0yMDggMjg4Yy04LjggMC0xNiA3LjItMTYgMTZzNy4yIDE2IDE2IDE2aDk2YzguOCAwIDE2LTcuMiAxNi0xNnMtNy4yLTE2LTE2LTE2aC05NnptMTI4IDY0Yy04LjggMC0xNiA3LjItMTYgMTZzNy4yIDE2IDE2IDE2aDk2YzguOCAwIDE2LTcuMiAxNi0xNnMtNy4yLTE2LTE2LTE2aC05NnoiLz48L3N2Zz4=" 
                  alt="Blockchain Sustainability" 
                  style={styles.iconImage}
                />
              </div>
              <div>
                <h3 style={styles.cardTitle}>Blockchain Verte</h3>
                <p style={styles.cardText}>
                  Face aux préoccupations environnementales, de nouvelles blockchains éco-responsables 
                  émergent, utilisant des mécanismes de consensus à faible consommation énergétique 
                  et des crédits carbone pour compenser leur empreinte.
                </p>
                <p style={styles.cardText}>
                  Des projets comme <span style={styles.highlight}>Algorand</span> et <span style={styles.highlight}>Solana</span> ont atteint la neutralité carbone, tandis que 
                  d'autres développent des solutions pour mesurer et réduire l'impact environnemental 
                  des opérations blockchain.
                </p>
              </div>
            </div>
          </div>

          <div style={styles.columnThird}>
            <div style={styles.veilleCardView}>
              <div style={{textAlign: "center"}}>
                <img 
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBmaWxsPSIjY2Q1ZmY4Ij48cGF0aCBkPSJNMTg0IDQ4SDMyOGMxMy4zIDAgMjQgMTAuNyAyNCAyNHMtMTAuNyAyNC0yNCAyNEgxODRjLTEzLjMgMC0yNC0xMC43LTI0LTI0czEwLjctMjQgMjQtMjR6bTEyOCA5NmMwLTEzLjMgMTAuNy0yNCAyNC0yNGgxMTJjMTMuMyAwIDI0IDEwLjcgMjQgMjRzLTEwLjcgMjQtMjQgMjRIMzM2Yy0xMy4zIDAtMjQtMTAuNy0yNC0yNHptLTI0IDk2aDExMmMxMy4zIDAgMjQgMTAuNyAyNCAyNHMtMTAuNyAyNC0yNCAyNEgyODhjLTEzLjMgMC0yNC0xMC43LTI0LTI0czEwLjctMjQgMjQtMjR6TTQxNiAzMzZjMC0xMy4zIDEwLjctMjQgMjQtMjRoNDhjMTMuMyAwIDI0IDEwLjcgMjQgMjRzLTEwLjcgMjQtMjQgMjRoLTQ4Yy0xMy4zIDAtMjQtMTAuNy0yNC0yNHptLTI1NiA0OGMxMy4zIDAgMjQgMTAuNyAyNCAyNHMtMTAuNyAyNC0yNCAyNEg2NGMtMTMuMyAwLTI0LTEwLjctMjQtMjRzMTAuNy0yNCAyNC0yNGg5NnpNMjI0IDMyYzAgMTcuNy0xNC4zIDMyLTMyIDMycy0zMi0xNC4zLTMyLTMyIDEzLjMtMzIgMzItMzIgMzIgMTQuMyAzMiAzMnptLTk2IDk2YzAgMTcuNy0xNC4zIDMyLTMyIDMycy0zMi0xNC4zLTMyLTMyIDEzLjMtMzIgMzItMzIgMzIgMTQuMyAzMiAzMnptLTk2IDk2YzAgMTcuNy0xNC4zIDMyLTMyIDMycy0zMi0xNC4zLTMyLTMyIDEzLjMtMzIgMzItMzIgMzIgMTQuMyAzMiAzMnptOTYgOTZjMCAxNy43LTE0LjMgMzItMzIgMzJzLTMyLTE0LjMtMzItMzIgMTMuMy0zMiAzMi0zMiAzMiAxNC4zIDMyIDMyem0yMjQtOTZjMCAxNy43LTE0LjMgMzItMzIgMzJzLTMyLTE0LjMtMzItMzIgMTMuMy0zMiAzMi0zMiAzMiAxNC4zIDMyIDMyem0tOTYtOTZjMCAxNy43LTE0LjMgMzItMzIgMzJzLTMyLTE0LjMtMzItMzIgMTMuMy0zMiAzMi0zMiAzMiAxNC4zIDMyIDMyem0yMjQgOTZjMCAxNy43LTE0LjMgMzItMzIgMzJzLTMyLTE0LjMtMzItMzIgMTMuMy0zMiAzMi0zMiAzMiAxNC4zIDMyIDMyem0tOTYtOTZjMCAxNy43LTE0LjMgMzItMzIgMzJzLTMyLTE0LjMtMzItMzIgMTMuMy0zMiAzMi0zMiAzMiAxNC4zIDMyIDMyeiIvPjwvc3ZnPg==" 
                  alt="Blockchain Interoperability" 
                  style={styles.iconImage}
                />
              </div>
              <div>
                <h3 style={styles.cardTitle}>Interopérabilité</h3>
                <p style={styles.cardText}>
                  L'interopérabilité entre blockchains est devenue une priorité majeure, avec des 
                  solutions comme <span style={styles.highlight}>Polkadot</span>, <span style={styles.highlight}>Cosmos</span> et les ponts cross-chain qui permettent la 
                  communication et le transfert d'actifs entre différents réseaux.
                </p>
                <p style={styles.cardText}>
                  Ces avancées créent un écosystème blockchain plus connecté et efficace, où les 
                  utilisateurs peuvent naviguer entre différentes plateformes sans friction.
                </p>
              </div>
            </div>
          </div>

          <div style={styles.columnThird}>
            <div style={styles.veilleCardView}>
              <div style={{textAlign: "center"}}>
                <img 
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBmaWxsPSIjY2Q1ZmY4Ij48cGF0aCBkPSJNMzM2IDM1MmMtMTcuNyAwLTMyIDE0LjMtMzIgMzJzMTQuMyAzMiAzMiAzMnMzMi0xNC4zIDMyLTMyLTE0LjMtMzItMzItMzJ6bS0yMDgtMjRoLS4wMmMuMDEtLjI2LjAyLS41Mi4wMi0uNzlWOTZjMC0zNS4zIDI4LjctNjQgNjQtNjRoMTYwYzM1LjMgMCA2NCAyOC43IDY0IDY0djIzMS4yYzAgLjI3LjAxLjUzLjAyLjc5aC0uMDJjMCAuMTMuMDIuMjUuMDIuMzggMCAxNy43LTE0LjMgMzItMzIgMzJIMTYwYy0xNy43IDAtMzItMTQuMy0zMi0zMiAwLS4xMy4wMi0uMjUuMDItLjM4ek0zMjAgMjI0aDY0di0zMmgtNjR2MzJ6bTAgNjRoNjR2LTMyaC02NHYzMnptLTEyOC02NGg2NHYtMzJoLTY0djMybTAgNjRoNjR2LTMyaC02NHYzMnptLTEyOC02NGg2NHYtMzJoLTY0djMybTAgNjRoNjR2LTMyaC02NHYzMnpNNTEyIDMwNGMwIDQ0LjItMzUuOCA4MC04MCA4MGgtMTAuNGMtMy0uMi01LjkgMC04LjcuNi0zNS4zIDcuOS03MC4xLTE0LjYtNzgtNDkuOWwtLjItLjljLS41LTIuNS0uOC01LjEtLjgtNy43IDAtMjEuMSAxNy4xLTM4LjMgMzguMy0zOC4zLjIgMCAuNC0uMS42LS4xSDM4NGM4LjggMCAxNi03LjIgMTYtMTZzLTcuMi0xNi0xNi0xNmgtMTAuMmMtMTMuMSAwLTI1LjgtMi4xLTM3LjgtNi4xVjk2YzAtMTcuNy0xNC4zLTMyLTMyLTMySDEyOGMtMTcuNyAwLTMyIDE0LjMtMzIgMzJ2MTUzLjljLTEyLTQtMjQuNy02LjEtMzcuOC02LjFIODhjLTguOCAwLTE2IDcuMi0xNiAxNnM3LjIgMTYgMTYgMTZoMTAuMmMuMiAwIC40LjEuNi4xIDIxLjIgMCAzOC4zIDE3LjEgMzguMyAzOC4zIDAgMi42LS4zIDUuMi0uOCA3LjdsLS4yLjljLTcuOSAzNS4zLTQyLjcgNTcuOC03OCA0OS45LTIuOC0uNi01LjctLjgtOC43LS42SDQwYy00NC4yIDAtODAtMzUuOC04MC04MHMzNS44LTgwIDgwLTgwYzguOCAwIDE2LTcuMiAxNi0xNnMtNy4yLTE2LTE2LTE2Yy02MS44IDAtMTEyIDUwLjItMTEyIDExMnM1MC4yIDExMiAxMTIgMTEyaDIyLjRjMy41IDAgNi45LjUgMTAuMiAxLjQgNTAuNiAxMS4zIDEwMS4yLTIwLjkgMTEyLjUtNzEuNiAuMy0xLjMuNS0yLjYuNy00IDEuNi0xMC4yIDEzLjEtMTUuOCAyMi4yLTkuOCAyNS41IDE2LjggNTUuNyAyNi43IDg4LjEgMjYuN2gxMC40YzYxLjggMCAxMTItNTAuMiAxMTItMTEycy01MC4yLTExMi0xMTItMTEyYy04LjggMC0xNiA3LjItMTYgMTZzNy4yIDE2IDE2IDE2YzQ0LjIgMCA4MCAzNS44IDgwIDgweiIvPjwvc3ZnPg==" 
                  alt="Zero-Knowledge Proofs" 
                  style={styles.iconImage}
                />
              </div>
              <div>
                <h3 style={styles.cardTitle}>Confidentialité et ZK-Proofs</h3>
                <p style={styles.cardText}>
                  Les preuves à connaissance zéro (ZK-Proofs) révolutionnent la blockchain en permettant 
                  de vérifier des informations sans révéler les données sous-jacentes, offrant ainsi 
                  confidentialité et scalabilité.
                </p>
                <p style={styles.cardText}>
                  Cette technologie est utilisée dans les <span style={styles.highlight}>ZK-Rollups</span> pour Ethereum, les transactions 
                  privées, et même dans les systèmes d'identité décentralisés.
                </p>
              </div>
            </div>
          </div>
        </div>

        <h2 style={styles.veilleSubheading}>Enjeux et perspectives</h2>
        
        <div style={{...styles.row, ...styles.paddingBottom50}}>
          <div style={styles.column}>
            <div style={styles.veilleCardView}>
              <div style={styles.imageContainer}>
                <img 
                  src="https://cdn.pixabay.com/photo/2018/01/28/10/08/bitcoin-3113503_1280.jpg" 
                  alt="Blockchain Challenges" 
                  style={styles.cardImage}
                />
              </div>
              <div>
                <h3 style={styles.cardTitle}>Défis actuels et évolutions futures</h3>
                <p style={styles.cardText}>
                  Malgré son potentiel révolutionnaire, la blockchain fait face à plusieurs défis qui 
                  doivent être surmontés pour une adoption massive. Les solutions à ces défis façonnent 
                  l'avenir de cette technologie et son intégration dans notre quotidien.
                </p>
                
                <h5 style={styles.listHeading}>Défis techniques</h5>
                <ul style={styles.list}>
                  <li style={styles.listItem}><strong>Scalabilité</strong> - Augmenter le nombre de transactions par seconde</li>
                  <li style={styles.listItem}><strong>Interopérabilité</strong> - Permettre la communication entre différentes blockchains</li>
                  <li style={styles.listItem}><strong>Consommation énergétique</strong> - Réduire l'impact environnemental</li>
                  <li style={styles.listItem}><strong>Expérience utilisateur</strong> - Simplifier l'utilisation pour le grand public</li>
                </ul>
                
                <h5 style={styles.listHeading}>Défis réglementaires</h5>
                <ul style={styles.list}>
                  <li style={styles.listItem}><strong>Cadre juridique</strong> - Adaptation des lois aux spécificités de la blockchain</li>
                  <li style={styles.listItem}><strong>Protection des consommateurs</strong> - Garantir la sécurité des utilisateurs</li>
                  <li style={styles.listItem}><strong>Conformité</strong> - Respect des réglementations KYC/AML</li>
                  <li style={styles.listItem}><strong>Fiscalité</strong> - Clarification du traitement fiscal des actifs numériques</li>
                </ul>
                
                <h5 style={styles.listHeading}>Perspectives d'avenir</h5>
                <ul style={styles.list}>
                  <li style={styles.listItem}><strong>Web3</strong> - Évolution vers un internet décentralisé</li>
                  <li style={styles.listItem}><strong>DAOs</strong> - Organisations autonomes décentralisées</li>
                  <li style={styles.listItem}><strong>Identité souveraine</strong> - Contrôle personnel des données d'identité</li>
                  <li style={styles.listItem}><strong>Tokenisation</strong> - Représentation d'actifs réels sur la blockchain</li>
                  <li style={styles.listItem}><strong>Finance régénérative</strong> - Financement de projets à impact positif</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline section - Corrigée */}
        <h2 style={styles.veilleSubheading}>Chronologie des innovations blockchain</h2>
        
        <div style={{...styles.row, ...styles.paddingBottom50}}>
          <div style={styles.column}>
            <div style={styles.veilleCardView}>
              <div style={styles.timeline}>
                {/* Ligne centrale visible */}
                <div style={styles.timelineCenterLine}></div>
                
                <div style={{...styles.timelineItem, ...styles.timelineLeft}}>
                  <div style={styles.timelineCircleLeft}></div>
                  <div style={styles.timelineContent}>
                    <h3 style={styles.cardTitle}>2008-2009</h3>
                    <p style={styles.cardText}>Publication du whitepaper Bitcoin par Satoshi Nakamoto et lancement du réseau Bitcoin.</p>
                  </div>
                </div>
                
                <div style={{...styles.timelineItem, ...styles.timelineRight}}>
                  <div style={styles.timelineCircleRight}></div>
                  <div style={styles.timelineContent}>
                    <h3 style={styles.cardTitle}>2015</h3>
                    <p style={styles.cardText}>Lancement d'Ethereum, introduisant les smart contracts et les DApps.</p>
                  </div>
                </div>
                
                <div style={{...styles.timelineItem, ...styles.timelineLeft}}>
                  <div style={styles.timelineCircleLeft}></div>
                  <div style={styles.timelineContent}>
                    <h3 style={styles.cardTitle}>2017</h3>
                    <p style={styles.cardText}>Premier boom des ICO et popularisation des tokens ERC-20 sur Ethereum.</p>
                  </div>
                </div>
                
                <div style={{...styles.timelineItem, ...styles.timelineRight}}>
                  <div style={styles.timelineCircleRight}></div>
                  <div style={styles.timelineContent}>
                    <h3 style={styles.cardTitle}>2020</h3>
                    <p style={styles.cardText}>Explosion de la DeFi avec des protocoles comme Uniswap, Aave et Compound.</p>
                  </div>
                </div>
                
                <div style={{...styles.timelineItem, ...styles.timelineLeft}}>
                  <div style={styles.timelineCircleLeft}></div>
                  <div style={styles.timelineContent}>
                    <h3 style={styles.cardTitle}>2021</h3>
                    <p style={styles.cardText}>Adoption massive des NFTs dans l'art, le divertissement et le sport.</p>
                  </div>
                </div>
                
                <div style={{...styles.timelineItem, ...styles.timelineRight}}>
                  <div style={styles.timelineCircleRight}></div>
                  <div style={styles.timelineContent}>
                    <h3 style={styles.cardTitle}>2022</h3>
                    <p style={styles.cardText}>The Merge : Ethereum passe au Proof of Stake, réduisant sa consommation énergétique.</p>
                  </div>
                </div>
                
                <div style={{...styles.timelineItem, ...styles.timelineLeft}}>
                  <div style={styles.timelineCircleLeft}></div>
                  <div style={styles.timelineContent}>
                    <h3 style={styles.cardTitle}>2023</h3>
                    <p style={styles.cardText}>Adoption institutionnelle accélérée et développement des CBDCs.</p>
                  </div>
                </div>
                
                <div style={{...styles.timelineItem, ...styles.timelineRight}}>
                  <div style={styles.timelineCircleRight}></div>
                  <div style={styles.timelineContent}>
                    <h3 style={styles.cardTitle}>2024-2025</h3>
                    <p style={styles.cardText}>Maturité des solutions d'interopérabilité et intégration dans les infrastructures critiques.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cas d'usage par secteur */}
        <h2 style={styles.veilleSubheading}>Applications sectorielles</h2>
        
        <div style={{...styles.row, ...styles.paddingBottom50}}>
          <div style={styles.columnThird}>
            <div style={styles.veilleCardView}>
              <div style={{textAlign: "center"}}>
                <img 
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBmaWxsPSIjY2Q1ZmY4Ij48cGF0aCBkPSJNMjU2IDk2YzAtNTMtNDMtOTYtOTYtOTZINDhjLTguOCAwLTE2IDcuMi0xNiAxNlY0MTZjMCA4LjggNy4yIDE2IDE2IDE2SDI1NmM2MS45IDAgMTEyLTUwLjEgMTEyLTExMnMtNTAuMS0xMTItMTEyLTExMkg2NFY5Nmg5NmMxNy43IDAgMzIgMTQuMyAzMiAzMnMtMTQuMyAzMi0zMiAzMkg5NmMtOC44IDAtMTYgNy4yLTE2IDE2czYgMTYgMTYgMTZoMTYwYzQ0LjIgMCA4MCAzNS44IDgwIDgwcy0zNS44IDgwLTgwIDgwSDY0VjE2MGg5NmM4LjggMCAxNi03LjIgMTYtMTZzLTcuMi0xNi0xNi0xNkg2NFY5NmgxNjB6TTIyNCAyNTZjMC0xNy43IDE0LjMtMzIgMzItMzJoNjRjMTcuNyAwIDMyIDE0LjMgMzIgMzJzLTE0LjMgMzItMzIgMzJoLTY0Yy0xNy43IDAtMzItMTQuMy0zMi0zMnptMTI4IDk2YzE3LjcgMCAzMiAxNC4zIDMyIDMycy0xNC4zIDMyLTMyIDMyaC05NmMtMTcuNyAwLTMyLTE0LjMtMzItMzJzMTQuMy0zMiAzMi0zMmg5NnoiLz48L3N2Zz4=" 
                  alt="Healthcare" 
                  style={styles.iconImage}
                />
              </div>
              <div>
                <h3 style={styles.cardTitle}>Santé</h3>
                <p style={styles.cardText}>
                  La blockchain révolutionne le secteur de la santé en sécurisant les dossiers médicaux, 
                  en traçant les médicaments et en facilitant le partage sécurisé de données entre 
                  établissements.
                </p>
                <ul style={styles.list}>
                  <li style={styles.listItem}>Dossiers médicaux interopérables et contrôlés par les patients</li>
                  <li style={styles.listItem}>Traçabilité des médicaments pour lutter contre la contrefaçon</li>
                  <li style={styles.listItem}>Gestion des essais cliniques avec intégrité des données</li>
                </ul>
              </div>
            </div>
          </div>

          <div style={styles.columnThird}>
            <div style={styles.veilleCardView}>
              <div style={{textAlign: "center"}}>
                <img 
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBmaWxsPSIjY2Q1ZmY4Ij48cGF0aCBkPSJNMzIgMTI4YzAtMTcuNyAxNC4zLTMyIDMyLTMyaDI1NmMxNy43IDAgMzIgMTQuMyAzMiAzMnY2NGMwIDE3LjctMTQuMyAzMi0zMiAzMkg2NGMtMTcuNyAwLTMyLTE0LjMtMzItMzJ2LTY0em0zMiA5NmgyNTZ2NjRINjR2LTY0em0wIDEyOGgyNTZ2NjRINjR2LTY0em0zODQgMGg2NHY2NGgtNjR2LTY0em0wLTEyOGg2NHY2NGgtNjR2LTY0em0wLTEyOGg2NHY2NGgtNjR2LTY0em0wLTEyOGg2NHY2NGgtNjR2LTY0eiIvPjwvc3ZnPg==" 
                  alt="Supply Chain" 
                  style={styles.iconImage}
                />
              </div>
              <div>
                <h3 style={styles.cardTitle}>Chaîne d'approvisionnement</h3>
                <p style={styles.cardText}>
                  La traçabilité de bout en bout des produits est désormais possible grâce à la blockchain, 
                  offrant transparence et authenticité aux consommateurs et efficacité aux entreprises.
                </p>
                <ul style={styles.list}>
                  <li style={styles.listItem}>Suivi de l'origine des produits alimentaires et de luxe</li>
                  <li style={styles.listItem}>Optimisation logistique et réduction des fraudes</li>
                  <li style={styles.listItem}>Certification des pratiques durables et éthiques</li>
                </ul>
              </div>
            </div>
          </div>

          <div style={styles.columnThird}>
            <div style={styles.veilleCardView}>
              <div style={{textAlign: "center"}}>
                <img 
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBmaWxsPSIjY2Q1ZmY4Ij48cGF0aCBkPSJNMTg0LjIgMjI0LjVjLTQuNy00LjctMTIuMy00LjctMTcgMGwtNzMuNSA3My41Yy00LjcgNC43LTQuNyAxMi4zIDAgMTdzMTIuMyA0LjcgMTcgMGw3My41LTczLjVjNC43LTQuNyA0LjctMTIuMyAwLTE3ek0yNTYgMTYwYzEzLjMgMCAyNC0xMC43IDI0LTI0cy0xMC43LTI0LTI0LTI0LTI0IDEwLjctMjQgMjQgMTAuNyAyNCAyNCAyNHptMTEzLjEgMTguNmMtNC43LTQuNy0xMi4zLTQuNy0xNyAwTDIwOC41IDMyMi4xYy00LjcgNC43LTQuNyAxMi4zIDAgMTdzMTIuMyA0LjcgMTcgMEwzNjkuMSAxOTUuNmM0LjctNC43IDQuNy0xMi4zIDAtMTd6TTI1NiA0MTZjLTEzLjMgMC0yNCAxMC43LTI0IDI0czEwLjcgMjQgMjQgMjQgMjQtMTAuNyAyNC0yNC0xMC43LTI0LTI0LTI0ek00NjQgMjI0YzAtOTIuOC03NS4yLTE2OC0xNjgtMTY4SDIxNmMtOTIuOCAwLTE2OCA3NS4yLTE2OCAxNjhzNzUuMiAxNjggMTY4IDE2OGg4MGM5Mi44IDAgMTY4LTc1LjIgMTY4LTE2OHptLTMyIDBjMCA3NS4xLTYwLjkgMTM2LTEzNiAxMzZoLTgwYy03NS4xIDAtMTM2LTYwLjktMTM2LTEzNnM2MC45LTEzNiAxMzYtMTM2aDgwYzc1LjEgMCAxMzYgNjAuOSAxMzYgMTM2eiIvPjwvc3ZnPg==" 
                  alt="Energy" 
                  style={styles.iconImage}
                />
              </div>
              <div>
                <h3 style={styles.cardTitle}>Énergie</h3>
                <p style={styles.cardText}>
                  Le secteur énergétique adopte la blockchain pour créer des réseaux décentralisés, 
                  permettant l'échange pair-à-pair d'énergie renouvelable et la certification d'origine.
                </p>
                <ul style={styles.list}>
                  <li style={styles.listItem}>Microgrids avec échange direct entre producteurs et consommateurs</li>
                  <li style={styles.listItem}>Certification et trading de crédits carbone</li>
                  <li style={styles.listItem}>Optimisation de la distribution et réduction des pertes</li>
                </ul>
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
                  </a> - Documentation officielle d'Ethereum et ressources sur les smart contracts
                </li>
                <li style={styles.sourceItem}>
                  <a href="https://defipulse.com" target="_blank" rel="noopener noreferrer" style={styles.sourceLink}>
                    DeFi Pulse
                  </a> - Suivi des protocoles DeFi et analyses des tendances du secteur
                </li>
                <li style={styles.sourceItem}>
                  <a href="https://www.coindesk.com" target="_blank" rel="noopener noreferrer" style={styles.sourceLink}>
                    CoinDesk
                  </a> - Actualités blockchain et analyses approfondies des développements récents
                </li>
                <li style={styles.sourceItem}>
                  <a href="https://www.bis.org/topics/cbdc.htm" target="_blank" rel="noopener noreferrer" style={styles.sourceLink}>
                    Bank for International Settlements
                  </a> - Recherches sur les CBDCs et l'adoption institutionnelle
                </li>
                <li style={styles.sourceItem}>
                  <a href="https://www.ledger.com/academy" target="_blank" rel="noopener noreferrer" style={styles.sourceLink}>
                    Ledger Academy
                  </a> - Ressources éducatives sur la blockchain et la cryptographie
                </li>
              </ul>
              
              <div style={{textAlign: "center", marginTop: "30px"}}>
                <button 
                  onClick={handleDownloadReport} 
                  style={styles.gradientButton}
                >
                  Télécharger le rapport complet (PDF)
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VeilleTechnologique;
