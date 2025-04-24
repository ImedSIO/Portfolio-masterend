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
    },
    container: {
      width: "100%",
      maxWidth: "1200px",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "0 15px",
    },
    veilleHeading: {
      fontSize: "3.2rem",
      fontWeight: "700",
      paddingBottom: "20px",
      textAlign: "center",
      marginBottom: "2rem",
      textShadow: "0 2px 10px rgba(205, 95, 248, 0.5)",
    },
    veilleSubheading: {
      fontSize: "2.2rem",
      fontWeight: "600",
      textAlign: "center",
      marginTop: "3rem",
      marginBottom: "2.5rem",
      color: "#e0e0e0",
      textShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
    },
    purple: {
      background: "linear-gradient(90deg, #cd5ff8, #a64dff)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
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
      "&:hover": {
        transform: "translateY(-5px)",
        boxShadow: "0 15px 35px rgba(0, 0, 0, 0.6)",
        border: "1px solid rgba(200, 137, 230, 0.6)",
      },
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
      background: "linear-gradient(90deg, #cd5ff8, #a64dff)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
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
      background: "linear-gradient(90deg, #cd5ff8, #a64dff)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    sourcesList: {
      listStyleType: "none",
      paddingLeft: "15px",
    },
    sourceLink: {
      color: "#e0e0e0",
      textDecoration: "none",
      transition: "color 0.3s",
      "&:hover": {
        color: "#cd5ff8",
      },
    },
    sourceItem: {
      marginBottom: "15px",
      position: "relative",
      paddingLeft: "25px",
      "&:before": {
        content: "''",
        position: "absolute",
        left: "0",
        top: "8px",
        width: "8px",
        height: "8px",
        borderRadius: "50%",
        background: "linear-gradient(90deg, #cd5ff8, #a64dff)",
      },
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
    },
    cardImage: {
      maxWidth: "100%",
      height: "auto",
      borderRadius: "10px",
      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
    },
    iconImage: {
      width: "80px",
      height: "80px",
      marginBottom: "15px",
    },
    timeline: {
      position: "relative",
      maxWidth: "1200px",
      margin: "0 auto",
      "&:before": {
        content: "''",
        position: "absolute",
        width: "4px",
        backgroundColor: "rgba(205, 95, 248, 0.5)",
        top: "0",
        bottom: "0",
        left: "50%",
        marginLeft: "-2px",
      },
    },
    timelineItem: {
      padding: "10px 40px",
      position: "relative",
      backgroundColor: "inherit",
      width: "50%",
      "&:after": {
        content: "''",
        position: "absolute",
        width: "20px",
        height: "20px",
        right: "-10px",
        backgroundColor: "#cd5ff8",
        border: "4px solid #a64dff",
        top: "15px",
        borderRadius: "50%",
        zIndex: "1",
      },
    },
    timelineLeft: {
      left: "0",
    },
    timelineRight: {
      left: "50%",
      "&:after": {
        left: "-10px",
      },
    },
    timelineContent: {
      padding: "20px 30px",
      backgroundColor: "rgba(30, 30, 40, 0.7)",
      position: "relative",
      borderRadius: "15px",
      border: "1px solid rgba(200, 137, 230, 0.3)",
    },
    gradientButton: {
      display: "inline-block",
      padding: "12px 25px",
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
      "&:hover": {
        transform: "translateY(-3px)",
        boxShadow: "0 7px 20px rgba(205, 95, 248, 0.6)",
      },
    },
    statsContainer: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      marginBottom: "40px",
    },
    statBox: {
      textAlign: "center",
      padding: "20px",
      margin: "10px",
      backgroundColor: "rgba(30, 30, 40, 0.7)",
      borderRadius: "15px",
      border: "1px solid rgba(200, 137, 230, 0.3)",
      width: windowWidth >= 768 ? "calc(25% - 20px)" : "calc(50% - 20px)",
    },
    statNumber: {
      fontSize: "2.5rem",
      fontWeight: "700",
      color: "#cd5ff8",
      marginBottom: "10px",
    },
    statLabel: {
      fontSize: "1rem",
      color: "#d0d0d0",
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
                  src="https://cdn.pixabay.com/photo/2018/05/17/20/56/blockchain-3409806_1280.jpg" 
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
            <div style={styles.statNumber}>\$2.3T</div>
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
                  src="https://ethereum.org/static/28214bb68eb5445dcb063a72535bc90c/9019e/hero.webp" 
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
                  src="https://cdn.pixabay.com/photo/2022/03/01/09/35/nft-7040293_1280.jpg" 
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
                  src="https://cdn.pixabay.com/photo/2021/05/24/09/15/ethereum-6278328_1280.jpg" 
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
                    <li style={styles.listItem}>Dérivés financiers décentralisés et marchés prédictifs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div style={styles.columnHalf}>
            <div style={styles.veilleCardView}>
              <div style={styles.imageContainer}>
                <img 
                  src="https://cdn.pixabay.com/photo/2017/12/12/12/20/bitcoin-3014614_1280.jpg" 
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
                  <ul style={styles.list
