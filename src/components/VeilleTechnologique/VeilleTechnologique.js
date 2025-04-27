import React, { useEffect, useState, useRef } from "react";

function VeilleTechnologique() {
  // État pour gérer la largeur de l'écran
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  
  // Références pour les animations au scroll
  const sectionRefs = {
    header: useRef(null),
    stats: useRef(null),
    applications: useRef(null),
    innovations: useRef(null),
    challenges: useRef(null),
    timeline: useRef(null),
    sectors: useRef(null)
  };
  
  // État pour suivre les sections visibles
  const [visibleSections, setVisibleSections] = useState({});

  // Effet pour mettre à jour la largeur de l'écran lors du redimensionnement
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    
    // Observer pour les animations au scroll
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -100px 0px"
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleSections(prev => ({
            ...prev,
            [entry.target.dataset.section]: true
          }));
        }
      });
    }, observerOptions);
    
    // Observer chaque section
    Object.entries(sectionRefs).forEach(([key, ref]) => {
      if (ref.current) {
        ref.current.dataset.section = key;
        observer.observe(ref.current);
      }
    });
    
    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
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
      fontSize: windowWidth >= 768 ? "4.5rem" : "3rem",
      fontWeight: "800",
      paddingBottom: "20px",
      textAlign: "center",
      marginBottom: "2rem",
      textShadow: "0 2px 10px rgba(205, 95, 248, 0.5)",
      letterSpacing: "1px",
      background: "linear-gradient(90deg, #ffffff, #cd5ff8)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      position: "relative",
    },
    headingUnderline: {
      position: "absolute",
      bottom: "0",
      left: "50%",
      transform: "translateX(-50%)",
      width: "150px",
      height: "4px",
      background: "linear-gradient(90deg, #cd5ff8, #a64dff)",
      borderRadius: "2px",
    },
    veilleSubheading: {
      fontSize: windowWidth >= 768 ? "2.5rem" : "2rem",
      fontWeight: "600",
      textAlign: "center",
      marginTop: "4rem",
      marginBottom: "3rem",
      color: "#e0e0e0",
      textShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
      position: "relative",
    },
    subheadingUnderline: {
      position: "absolute",
      bottom: "-10px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "100px",
      height: "3px",
      background: "linear-gradient(90deg, #cd5ff8, #a64dff)",
      borderRadius: "2px",
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
      overflow: "hidden",
      position: "relative",
    },
    cardGlow: {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      background: "radial-gradient(circle at 50% 0%, rgba(205, 95, 248, 0.2), transparent 70%)",
      pointerEvents: "none",
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
      position: "relative",
      display: "inline-block",
    },
    titleUnderline: {
      position: "absolute",
      bottom: "-5px",
      left: "0",
      width: "40px",
      height: "2px",
      background: "#cd5ff8",
      borderRadius: "1px",
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
      position: "relative",
      display: "inline-block",
    },
    sourcesList: {
      listStyleType: "none",
      paddingLeft: "15px",
    },
    sourceLink: {
      color: "#cd5ff8",
      textDecoration: "none",
      transition: "color 0.3s",
      fontWeight: "500",
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
      listStyleType: "none",
    },
    listItem: {
      marginBottom: "12px",
      position: "relative",
      paddingLeft: "20px",
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
    colorBlock: {
      height: "200px",
      borderRadius: "12px",
      marginBottom: "20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4)",
      background: "linear-gradient(45deg, #6a11cb, #2575fc)",
      color: "white",
      fontSize: "3rem",
      fontWeight: "bold",
      position: "relative",
      overflow: "hidden",
    },
    blockOverlay: {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      background: "radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, transparent 70%)",
    },
    blockContent: {
      position: "relative",
      zIndex: "2",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    blockIcon: {
      fontSize: "4rem",
      marginBottom: "10px",
    },
    blockText: {
      fontSize: "2rem",
      fontWeight: "bold",
      letterSpacing: "2px",
    },
    iconContainer: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "20px",
    },
    iconCircle: {
      width: "90px",
      height: "90px",
      borderRadius: "50%",
      backgroundColor: "rgba(205, 95, 248, 0.15)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3), inset 0 0 15px rgba(205, 95, 248, 0.3)",
      border: "2px solid rgba(205, 95, 248, 0.5)",
      position: "relative",
      overflow: "hidden",
    },
    iconGlow: {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      background: "radial-gradient(circle at center, rgba(205, 95, 248, 0.3) 0%, transparent 70%)",
    },
    iconText: {
      fontSize: "2.5rem",
      position: "relative",
      zIndex: "2",
    },
    gradientButton: {
      display: "inline-block",
      padding: "16px 32px",
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
      position: "relative",
      overflow: "hidden",
    },
    buttonGlow: {
      position: "absolute",
      top: "0",
      left: "-100%",
      width: "100%",
      height: "100%",
      background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
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
      position: "relative",
      overflow: "hidden",
    },
    statGlow: {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      background: "radial-gradient(circle at top, rgba(205, 95, 248, 0.2), transparent 70%)",
      pointerEvents: "none",
    },
    statNumber: {
      fontSize: "2.5rem",
      fontWeight: "700",
      background: "linear-gradient(90deg, #cd5ff8, #a64dff)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      marginBottom: "10px",
      position: "relative",
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
    navPills: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      marginBottom: "40px",
      gap: "10px",
    },
    navPill: {
      padding: "10px 20px",
      backgroundColor: "rgba(30, 30, 40, 0.7)",
      borderRadius: "30px",
      color: "#e0e0e0",
      cursor: "pointer",
      transition: "all 0.3s ease",
      border: "1px solid rgba(200, 137, 230, 0.3)",
    },
    navPillActive: {
      backgroundColor: "rgba(205, 95, 248, 0.2)",
      color: "#cd5ff8",
      border: "1px solid rgba(205, 95, 248, 0.5)",
    },
    sectionIntro: {
      textAlign: "center",
      maxWidth: "800px",
      margin: "0 auto 50px auto",
      color: "#e0e0e0",
      fontSize: "1.2rem",
      lineHeight: "1.8",
    },
  };

  return (
    <div style={styles.veilleSection}>
      {/* Styles pour les animations */}
      <style>
        {`
          @keyframes pulse {
            0% { opacity: 0.6; }
            50% { opacity: 1; }
            100% { opacity: 0.6; }
          }
          @keyframes shine {
            0% { left: -100%; }
            20% { left: 100%; }
            100% { left: 100%; }
          }
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes slideFromLeft {
            from { opacity: 0; transform: translateX(-50px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes slideFromRight {
            from { opacity: 0; transform: translateX(50px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes scaleIn {
            from { opacity: 0; transform: scale(0.8); }
            to { opacity: 1; transform: scale(1); }
          }
          
          .floating {
            animation: float 4s ease-in-out infinite;
          }
          .pulse {
            animation: pulse 2s infinite;
          }
          .card-hover:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.6);
            border: 1px solid rgba(200, 137, 230, 0.5);
          }
          .stat-hover:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 25px rgba(0, 0, 0, 0.4);
          }
          .timeline-hover:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
          }
          .button-hover:hover {
            transform: translateY(-3px);
            box-shadow: 0 7px 20px rgba(205, 95, 248, 0.6);
          }
          .button-hover:active {
            transform: translateY(1px);
          }
          
          .fade-in {
            opacity: 0;
            animation: fadeIn 0.6s ease-out forwards;
          }
          .slide-from-left {
            opacity: 0;
            animation: slideFromLeft 0.5s ease-out forwards;
          }
          .slide-from-right {
            opacity: 0;
            animation: slideFromRight 0.5s ease-out forwards;
          }
          .scale-in {
            opacity: 0;
            animation: scaleIn 0.5s ease-out forwards;
          }
          
          .visible .stagger-item:nth-child(1) { animation-delay: 0s; }
          .visible .stagger-item:nth-child(2) { animation-delay: 0.1s; }
          .visible .stagger-item:nth-child(3) { animation-delay: 0.2s; }
          .visible .stagger-item:nth-child(4) { animation-delay: 0.3s; }
          .visible .stagger-item:nth-child(5) { animation-delay: 0.4s; }
          .visible .stagger-item:nth-child(6) { animation-delay: 0.5s; }
          
          .source-item::before {
            content: '';
            position: absolute;
            left: 0;
            top: 10px;
            width: 8px;
            height: 8px;
            background-color: #cd5ff8;
            border-radius: 50%;
          }
          
          .list-item::before {
            content: '';
            position: absolute;
            left: 0;
            top: 10px;
            width: 6px;
            height: 6px;
            background-color: #cd5ff8;
            border-radius: 50%;
          }
        `}
      </style>
      
      <div style={styles.container}>
        <div 
          ref={sectionRefs.header}
          className={visibleSections.header ? "fade-in" : ""}
        >
          <h1 style={styles.veilleHeading}>
            Veille Technologique <strong style={styles.purple}>Blockchain</strong>
            <div style={styles.headingUnderline}></div>
          </h1>
          
          <div style={styles.sectionIntro}>
            <p>
              Exploration des dernières avancées et applications de la technologie blockchain, 
              une innovation qui transforme les industries et redéfinit notre façon d'échanger 
              de la valeur dans un monde numérique en constante évolution.
            </p>
          </div>
        </div>
        
        <div style={{...styles.row, ...styles.padding10}}>
          <div 
            style={styles.veilleHeaderCard}
            className={`card-hover ${visibleSections.header ? "scale-in" : ""}`}
          >
            <div style={styles.veilleCardView}>
              <div style={styles.cardGlow} className="pulse"></div>
              <div style={{...styles.colorBlock, background: "linear-gradient(45deg, #6a11cb, #2575fc)"}}>
                <div style={styles.blockOverlay}></div>
                <div style={styles.blockContent} className="floating">
                  <div style={styles.blockIcon}>🔗</div>
                  <div style={styles.blockText}>BLOCKCHAIN</div>
                </div>
              </div>
              <div>
                <h3 style={styles.cardTitle}>
                  La Blockchain : Une Révolution Technologique
                  <div style={styles.titleUnderline}></div>
                </h3>
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

        {/* Navigation par pilules */}
        <div 
          style={styles.navPills}
          className={visibleSections.header ? "visible" : ""}
        >
          <a href="#stats" style={styles.navPill} className="stagger-item fade-in">Statistiques</a>
          <a href="#applications" style={{...styles.navPill, ...styles.navPillActive}} className="stagger-item fade-in">Applications</a>
          <a href="#innovations" style={styles.navPill} className="stagger-item fade-in">Innovations</a>
          <a href="#challenges" style={styles.navPill} className="stagger-item fade-in">Enjeux</a>
          <a href="#timeline" style={styles.navPill} className="stagger-item fade-in">Chronologie</a>
          <a href="#sectors" style={styles.navPill} className="stagger-item fade-in">Secteurs</a>
        </div>

        {/* Statistiques */}
        <div 
          id="stats"
          ref={sectionRefs.stats}
          className={visibleSections.stats ? "visible" : ""}
          style={styles.statsContainer}
        >
          <div style={styles.statBox} className="stagger-item scale-in stat-hover">
            <div style={styles.statGlow} className="pulse"></div>
            <div style={styles.statNumber}>$2.3T</div>
            <div style={styles.statLabel}>Capitalisation du marché crypto</div>
          </div>
          <div style={styles.statBox} className="stagger-item scale-in stat-hover">
            <div style={styles.statGlow} className="pulse"></div>
            <div style={styles.statNumber}>+400%</div>
            <div style={styles.statLabel}>Croissance DeFi (2023-2025)</div>
          </div>
          <div style={styles.statBox} className="stagger-item scale-in stat-hover">
            <div style={styles.statGlow} className="pulse"></div>
            <div style={styles.statNumber}>114M+</div>
            <div style={styles.statLabel}>Utilisateurs de crypto</div>
          </div>
          <div style={styles.statBox} className="stagger-item scale-in stat-hover">
            <div style={styles.statGlow} className="pulse"></div>
            <div style={styles.statNumber}>80%</div>
            <div style={styles.statLabel}>Banques centrales explorant les CBDCs</div>
          </div>
        </div>

        <h2 
          id="applications"
          ref={sectionRefs.applications}
          style={styles.veilleSubheading}
          className={visibleSections.applications ? "fade-in" : ""}
        >
          Domaines d'application et innovations
          <div style={styles.subheadingUnderline}></div>
        </h2>
        
        <div style={{...styles.row, ...styles.paddingBottom50}}>
          <div 
            style={styles.columnHalf}
            className={visibleSections.applications ? "slide-from-left" : ""}
          >
            <div style={styles.veilleCardView} className="card-hover">
              <div style={styles.cardGlow}></div>
              <div style={{...styles.colorBlock, background: "linear-gradient(45deg, #11998e, #38ef7d)"}}>
                <div style={styles.blockOverlay}></div>
                <div style={styles.blockContent} className="floating">
                  <div style={styles.blockIcon}>⚡</div>
                  <div style={styles.blockText}>ETHEREUM</div>
                </div>
              </div>
              <div>
                <h3 style={styles.cardTitle}>
                  Ethereum et Smart Contracts
                  <div style={styles.titleUnderline}></div>
                </h3>
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
                    <li style={styles.listItem} className="list-item">Déploiement progressif d'Ethereum 2.0 (The Merge, Shanghai, Cancun)</li>
                    <li style={styles.listItem} className="list-item">Solutions de Layer 2 comme Optimism et Arbitrum réduisant les frais de transaction</li>
                    <li style={styles.listItem} className="list-item">Amélioration de l'interopérabilité avec d'autres blockchains via des ponts</li>
                    <li style={styles.listItem} className="list-item">EIP-4844 (Proto-Danksharding) pour réduire les coûts des rollups</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div 
            style={styles.columnHalf}
            className={visibleSections.applications ? "slide-from-right" : ""}
          >
            <div style={styles.veilleCardView} className="card-hover">
              <div style={styles.cardGlow}></div>
              <div style={{...styles.colorBlock, background: "linear-gradient(45deg, #FF416C, #FF4B2B)"}}>
                <div style={styles.blockOverlay}></div>
                <div style={styles.blockContent} className="floating">
                  <div style={styles.blockIcon}>🖼️</div>
                  <div style={styles.blockText}>NFT</div>
                </div>
              </div>
              <div>
                <h3 style={styles.cardTitle}>
                  NFTs (Non-Fungible Tokens)
                  <div style={styles.titleUnderline}></div>
                </h3>
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
                    <li style={styles.listItem} className="list-item">Identité numérique et certification de documents</li>
                    <li style={styles.listItem} className="list-item">Billetterie et contrôle d'accès pour événements</li>
                    <li style={styles.listItem} className="list-item">Propriété intellectuelle et gestion des droits d'auteur</li>
                    <li style={styles.listItem} className="list-item">Gaming et métavers avec objets interopérables</li>
                    <li style={styles.listItem} className="list-item">Tokenisation d'actifs réels (immobilier, œuvres d'art)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div 
            style={styles.columnHalf}
            className={visibleSections.applications ? "slide-from-left" : ""}
          >
            <div style={styles.veilleCardView} className="card-hover">
              <div style={styles.cardGlow}></div>
              <div style={{...styles.colorBlock, background: "linear-gradient(45deg, #8E2DE2, #4A00E0)"}}>
                <div style={styles.blockOverlay}></div>
                <div style={styles.blockContent} className="floating">
                  <div style={styles.blockIcon}>💰</div>
                  <div style={styles.blockText}>DeFi</div>
                </div>
              </div>
              <div>
                <h3 style={styles.cardTitle}>
                  Finance Décentralisée (DeFi)
                  <div style={styles.titleUnderline}></div>
                </h3>
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
                    <li style={styles.listItem} className="list-item">Protocoles de prêt comme Aave et Compound avec des taux d'intérêt dynamiques</li>
                    <li style={styles.listItem} className="list-item">Échanges décentralisés (DEX) comme Uniswap et leur évolution vers des modèles plus efficaces</li>
                    <li style={styles.listItem} className="list-item">Stablecoins algorithmiques et adossés à des actifs diversifiés</li>
                    <li style={styles.listItem} className="list-item">Assurance décentralisée pour couvrir les risques liés aux protocoles</li>
                    <li style={styles.listItem} className="list-item">Yield farming et liquidity mining avec des stratégies d'optimisation automatisées</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div 
            style={styles.columnHalf}
            className={visibleSections.applications ? "slide-from-right" : ""}
          >
            <div style={styles.veilleCardView} className="card-hover">
              <div style={styles.cardGlow}></div>
              <div style={{...styles.colorBlock, background: "linear-gradient(45deg, #3A1C71, #D76D77, #FFAF7B)"}}>
                <div style={styles.blockOverlay}></div>
                <div style={styles.blockContent} className="floating">
                  <div style={styles.blockIcon}>🏦</div>
                  <div style={styles.blockText}>CBDC</div>
                </div>
              </div>
              <div>
                <h3 style={styles.cardTitle}>
                  CBDCs et Adoption Institutionnelle
                  <div style={styles.titleUnderline}></div>
                </h3>
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
                    <li style={styles.listItem} className="list-item">L'e-CNY (yuan numérique) en Chine avec plus de 300 millions d'utilisateurs actifs</li>
                    <li style={styles.listItem} className="list-item">Projet de l'euro numérique par la BCE en phase de déploiement</li>
                    <li style={styles.listItem} className="list-item">Adoption croissante par les banques d'investissement de solutions blockchain</li>
                    <li style={styles.listItem} className="list-item">Réglementations en évolution avec le MiCA en Europe</li>
                    <li style={styles.listItem} className="list-item">Intégration des stablecoins régulés dans les systèmes de paiement traditionnels</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Nouvelles sections */}
        <h2 
          id="innovations"
          ref={sectionRefs.innovations}
          style={styles.veilleSubheading}
          className={visibleSections.innovations ? "fade-in" : ""}
        >
          Innovations émergentes
          <div style={styles.subheadingUnderline}></div>
        </h2>
        
        <div style={{...styles.row, ...styles.paddingBottom50}}>
          <div 
            style={styles.columnThird}
            className={visibleSections.innovations ? "scale-in" : ""}
          >
            <div style={styles.veilleCardView} className="card-hover">
              <div style={styles.cardGlow}></div>
              <div style={styles.iconContainer}>
                <div style={styles.iconCircle}>
                  <div style={styles.iconGlow} className="pulse"></div>
                  <span style={styles.iconText}>🌱</span>
                </div>
              </div>
              <div>
                <h3 style={styles.cardTitle}>
                  Blockchain Verte
                  <div style={styles.titleUnderline}></div>
                </h3>
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

          <div 
            style={styles.columnThird}
            className={visibleSections.innovations ? "scale-in" : ""}
          >
            <div style={styles.veilleCardView} className="card-hover">
              <div style={styles.cardGlow}></div>
              <div style={styles.iconContainer}>
                <div style={styles.iconCircle}>
                  <div style={styles.iconGlow} className="pulse"></div>
                  <span style={styles.iconText}>🔗</span>
                </div>
              </div>
              <div>
                <h3 style={styles.cardTitle}>
                  Interopérabilité
                  <div style={styles.titleUnderline}></div>
                </h3>
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

          <div 
            style={styles.columnThird}
            className={visibleSections.innovations ? "scale-in" : ""}
          >
            <div style={styles.veilleCardView} className="card-hover">
              <div style={styles.cardGlow}></div>
              <div style={styles.iconContainer}>
                <div style={styles.iconCircle}>
                  <div style={styles.iconGlow} className="pulse"></div>
                  <span style={styles.iconText}>🔒</span>
                </div>
              </div>
              <div>
                <h3 style={styles.cardTitle}>
                  Confidentialité et ZK-Proofs
                  <div style={styles.titleUnderline}></div>
                </h3>
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

        <h2 
          id="challenges"
          ref={sectionRefs.challenges}
          style={styles.veilleSubheading}
          className={visibleSections.challenges ? "fade-in" : ""}
        >
          Enjeux et perspectives
          <div style={styles.subheadingUnderline}></div>
        </h2>
        
        <div style={{...styles.row, ...styles.paddingBottom50}}>
          <div 
            style={styles.column}
            className={visibleSections.challenges ? "fade-in" : ""}
          >
            <div style={styles.veilleCardView} className="card-hover">
              <div style={styles.cardGlow}></div>
              <div style={{...styles.colorBlock, background: "linear-gradient(45deg, #654ea3, #eaafc8)"}}>
                <div style={styles.blockOverlay}></div>
                <div style={styles.blockContent} className="floating">
                  <div style={styles.blockIcon}>🔍</div>
                  <div style={styles.blockText}>DÉFIS</div>
                </div>
              </div>
              <div>
                <h3 style={styles.cardTitle}>
                  Défis actuels et évolutions futures
                  <div style={styles.titleUnderline}></div>
                </h3>
                <p style={styles.cardText}>
                  Malgré son potentiel révolutionnaire, la blockchain fait face à plusieurs défis qui 
                  doivent être surmontés pour une adoption massive. Les solutions à ces défis façonnent 
                  l'avenir de cette technologie et son intégration dans notre quotidien.
                </p>
                
                <h5 style={styles.listHeading}>Défis techniques</h5>
                <ul style={styles.list}>
                  <li style={styles.listItem} className="list-item"><strong>Scalabilité</strong> - Augmenter le nombre de transactions par seconde</li>
                  <li style={styles.listItem} className="list-item"><strong>Interopérabilité</strong> - Permettre la communication entre différentes blockchains</li>
                  <li style={styles.listItem} className="list-item"><strong>Consommation énergétique</strong> - Réduire l'impact environnemental</li>
                  <li style={styles.listItem} className="list-item"><strong>Expérience utilisateur</strong> - Simplifier l'utilisation pour le grand public</li>
                </ul>
                
                <h5 style={styles.listHeading}>Défis réglementaires</h5>
                <ul style={styles.list}>
                  <li style={styles.listItem} className="list-item"><strong>Cadre juridique</strong> - Adaptation des lois aux spécificités de la blockchain</li>
                  <li style={styles.listItem} className="list-item"><strong>Protection des consommateurs</strong> - Garantir la sécurité des utilisateurs</li>
                  <li style={styles.listItem} className="list-item"><strong>Conformité</strong> - Respect des réglementations KYC/AML</li>
                  <li style={styles.listItem} className="list-item"><strong>Fiscalité</strong> - Clarification du traitement fiscal des actifs numériques</li>
                </ul>
                
                <h5 style={styles.listHeading}>Perspectives d'avenir</h5>
                <ul style={styles.list}>
                  <li style={styles.listItem} className="list-item"><strong>Web3</strong> - Évolution vers un internet décentralisé</li>
                  <li style={styles.listItem} className="list-item"><strong>DAOs</strong> - Organisations autonomes décentralisées</li>
                  <li style={styles.listItem} className="list-item"><strong>Identité souveraine</strong> - Contrôle personnel des données d'identité</li>
                  <li style={styles.listItem} className="list-item"><strong>Tokenisation</strong> - Représentation d'actifs réels sur la blockchain</li>
                  <li style={styles.listItem} className="list-item"><strong>Finance régénérative</strong> - Financement de projets à impact positif</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline section */}
        <h2 
          id="timeline"
          ref={sectionRefs.timeline}
          style={styles.veilleSubheading}
          className={visibleSections.timeline ? "fade-in" : ""}
        >
          Chronologie des innovations blockchain
          <div style={styles.subheadingUnderline}></div>
        </h2>
        
        <div style={{...styles.row, ...styles.paddingBottom50}}>
          <div 
            style={styles.column}
            className={visibleSections.timeline ? "fade-in" : ""}
          >
            <div style={styles.veilleCardView}>
              <div style={styles.cardGlow}></div>
              <div style={styles.timeline}>
                {/* Ligne centrale visible */}
                <div style={styles.timelineCenterLine}></div>
                
                <div 
                  style={{...styles.timelineItem, ...styles.timelineLeft}}
                  className={visibleSections.timeline ? "slide-from-left" : ""}
                >
                  <div style={styles.timelineCircleLeft}></div>
                  <div style={styles.timelineContent} className="timeline-hover">
                    <h3 style={styles.cardTitle}>
                      2008-2009
                      <div style={styles.titleUnderline}></div>
                    </h3>
                    <p style={styles.cardText}>Publication du whitepaper Bitcoin par Satoshi Nakamoto et lancement du réseau Bitcoin.</p>
                  </div>
                </div>
                
                <div 
                  style={{...styles.timelineItem, ...styles.timelineRight}}
                  className={visibleSections.timeline ? "slide-from-right" : ""}
                >
                  <div style={styles.timelineCircleRight}></div>
                  <div style={styles.timelineContent} className="timeline-hover">
                    <h3 style={styles.cardTitle}>
                      2015
                      <div style={styles.titleUnderline}></div>
                    </h3>
                    <p style={styles.cardText}>Lancement d'Ethereum, introduisant les smart contracts et les DApps.</p>
                  </div>
                </div>
                
                <div 
                  style={{...styles.timelineItem, ...styles.timelineLeft}}
                  className={visibleSections.timeline ? "slide-from-left" : ""}
                >
                  <div style={styles.timelineCircleLeft}></div>
                  <div style={styles.timelineContent} className="timeline-hover">
                    <h3 style={styles.cardTitle}>
                      2017
                      <div style={styles.titleUnderline}></div>
                    </h3>
                    <p style={styles.cardText}>Premier boom des ICO et popularisation des tokens ERC-20 sur Ethereum.</p>
                  </div>
                </div>
                
                <div 
                  style={{...styles.timelineItem, ...styles.timelineRight}}
                  className={visibleSections.timeline ? "slide-from-right" : ""}
                >
                  <div style={styles.timelineCircleRight}></div>
                  <div style={styles.timelineContent} className="timeline-hover">
                    <h3 style={styles.cardTitle}>
                      2020
                      <div style={styles.titleUnderline}></div>
                    </h3>
                    <p style={styles.cardText}>Explosion de la DeFi avec des protocoles comme Uniswap, Aave et Compound.</p>
                  </div>
                </div>
                
                <div 
                  style={{...styles.timelineItem, ...styles.timelineLeft}}
                  className={visibleSections.timeline ? "slide-from-left" : ""}
                >
                  <div style={styles.timelineCircleLeft}></div>
                  <div style={styles.timelineContent} className="timeline-hover">
                    <h3 style={styles.cardTitle}>
                      2021
                      <div style={styles.titleUnderline}></div>
                    </h3>
                    <p style={styles.cardText}>Adoption massive des NFTs dans l'art, le divertissement et le sport.</p>
                  </div>
                </div>
                
                <div 
                  style={{...styles.timelineItem, ...styles.timelineRight}}
                  className={visibleSections.timeline ? "slide-from-right" : ""}
                >
                  <div style={styles.timelineCircleRight}></div>
                  <div style={styles.timelineContent} className="timeline-hover">
                    <h3 style={styles.cardTitle}>
                      2022
                      <div style={styles.titleUnderline}></div>
                    </h3>
                    <p style={styles.cardText}>The Merge : Ethereum passe au Proof of Stake, réduisant sa consommation énergétique.</p>
                  </div>
                </div>
                
                <div 
                  style={{...styles.timelineItem, ...styles.timelineLeft}}
                  className={visibleSections.timeline ? "slide-from-left" : ""}
                >
                  <div style={styles.timelineCircleLeft}></div>
                  <div style={styles.timelineContent} className="timeline-hover">
                    <h3 style={styles.cardTitle}>
                      2023
                      <div style={styles.titleUnderline}></div>
                    </h3>
                    <p style={styles.cardText}>Adoption institutionnelle accélérée et développement des CBDCs.</p>
                  </div>
                </div>
                
                <div 
                  style={{...styles.timelineItem, ...styles.timelineRight}}
                  className={visibleSections.timeline ? "slide-from-right" : ""}
                >
                  <div style={styles.timelineCircleRight}></div>
                  <div style={styles.timelineContent} className="timeline-hover">
                    <h3 style={styles.cardTitle}>
                      2024-2025
                      <div style={styles.titleUnderline}></div>
                    </h3>
                    <p style={styles.cardText}>Maturité des solutions d'interopérabilité et intégration dans les infrastructures critiques.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cas d'usage par secteur */}
        <h2 
          id="sectors"
          ref={sectionRefs.sectors}
          style={styles.veilleSubheading}
          className={visibleSections.sectors ? "fade-in" : ""}
        >
          Applications sectorielles
          <div style={styles.subheadingUnderline}></div>
        </h2>
        
        <div style={{...styles.row, ...styles.paddingBottom50}}>
          <div 
            style={styles.columnThird}
            className={visibleSections.sectors ? "scale-in" : ""}
          >
            <div style={styles.veilleCardView} className="card-hover">
              <div style={styles.cardGlow}></div>
              <div style={styles.iconContainer}>
                <div style={styles.iconCircle}>
                  <div style={styles.iconGlow} className="pulse"></div>
                  <span style={styles.iconText}>💊</span>
                </div>
              </div>
              <div>
                <h3 style={styles.cardTitle}>
                  Santé
                  <div style={styles.titleUnderline}></div>
                </h3>
                <p style={styles.cardText}>
                  La blockchain révolutionne le secteur de la santé en sécurisant les dossiers médicaux, 
                  en traçant les médicaments et en facilitant le partage sécurisé de données entre 
                  établissements.
                </p>
                <ul style={styles.list}>
                  <li style={styles.listItem} className="list-item">Dossiers médicaux interopérables et contrôlés par les patients</li>
                  <li style={styles.listItem} className="list-item">Traçabilité des médicaments pour lutter contre la contrefaçon</li>
                  <li style={styles.listItem} className="list-item">Gestion des essais cliniques avec intégrité des données</li>
                </ul>
              </div>
            </div>
          </div>

          <div 
            style={styles.columnThird}
            className={visibleSections.sectors ? "scale-in" : ""}
          >
            <div style={styles.veilleCardView} className="card-hover">
              <div style={styles.cardGlow}></div>
              <div style={styles.iconContainer}>
                <div style={styles.iconCircle}>
                  <div style={styles.iconGlow} className="pulse"></div>
                  <span style={styles.iconText}>📦</span>
                </div>
              </div>
              <div>
                <h3 style={styles.cardTitle}>
                  Chaîne d'approvisionnement
                  <div style={styles.titleUnderline}></div>
                </h3>
                <p style={styles.cardText}>
                  La traçabilité de bout en bout des produits est désormais possible grâce à la blockchain, 
                  offrant transparence et authenticité aux consommateurs et efficacité aux entreprises.
                </p>
                <ul style={styles.list}>
                  <li style={styles.listItem} className="list-item">Suivi de l'origine des produits alimentaires et de luxe</li>
                  <li style={styles.listItem} className="list-item">Optimisation logistique et réduction des fraudes</li>
                  <li style={styles.listItem} className="list-item">Certification des pratiques durables et éthiques</li>
                </ul>
              </div>
            </div>
          </div>

          <div 
            style={styles.columnThird}
            className={visibleSections.sectors ? "scale-in" : ""}
          >
            <div style={styles.veilleCardView} className="card-hover">
              <div style={styles.cardGlow}></div>
              <div style={styles.iconContainer}>
                <div style={styles.iconCircle}>
                  <div style={styles.iconGlow} className="pulse"></div>
                  <span style={styles.iconText}>⚡</span>
                </div>
              </div>
              <div>
                <h3 style={styles.cardTitle}>
                  Énergie
                  <div style={styles.titleUnderline}></div>
                </h3>
                <p style={styles.cardText}>
                  Le secteur énergétique adopte la blockchain pour créer des réseaux décentralisés, 
                  permettant l'échange pair-à-pair d'énergie renouvelable et la certification d'origine.
                </p>
                <ul style={styles.list}>
                  <li style={styles.listItem} className="list-item">Microgrids avec échange direct entre producteurs et consommateurs</li>
                  <li style={styles.listItem} className="list-item">Certification et trading de crédits carbone</li>
                  <li style={styles.listItem} className="list-item">Optimisation de la distribution et réduction des pertes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div style={{...styles.row, ...styles.paddingBottom30}}>
          <div 
            style={styles.column}
            className={visibleSections.sectors ? "fade-in" : ""}
          >
            <div style={styles.veilleSources}>
              <div style={styles.cardGlow}></div>
              <h3 style={styles.sourcesHeading}>
                Sources et ressources
                <div style={styles.titleUnderline}></div>
              </h3>
              <ul style={styles.sourcesList}>
                <li style={styles.sourceItem} className="source-item">
                  <a href="https://ethereum.org" target="_blank" rel="noopener noreferrer" style={styles.sourceLink}>
                    Ethereum.org
                  </a> - Documentation officielle d'Ethereum et ressources sur les smart contracts
                </li>
                <li style={styles.sourceItem} className="source-item">
                  <a href="https://defipulse.com" target="_blank" rel="noopener noreferrer" style={styles.sourceLink}>
                    DeFi Pulse
                  </a> - Suivi des protocoles DeFi et analyses des tendances du secteur
                </li>
                <li style={styles.sourceItem} className="source-item">
                  <a href="https://www.coindesk.com" target="_blank" rel="noopener noreferrer" style={styles.sourceLink}>
                    CoinDesk
                  </a> - Actualités blockchain et analyses approfondies des développements récents
                </li>
                <li style={styles.sourceItem} className="source-item">
                  <a href="https://www.bis.org/topics/cbdc.htm" target="_blank" rel="noopener noreferrer" style={styles.sourceLink}>
                    Bank for International Settlements
                  </a> - Recherches sur les CBDCs et l'adoption institutionnelle
                </li>
                <li style={styles.sourceItem} className="source-item">
                  <a href="https://www.ledger.com/academy" target="_blank" rel="noopener noreferrer" style={styles.sourceLink}>
                    Ledger Academy
                  </a> - Ressources éducatives sur la blockchain et la cryptographie
                </li>
              </ul>
              
              <div style={{textAlign: "center", marginTop: "30px"}}>
                <button 
                  onClick={handleDownloadReport} 
                  style={styles.gradientButton}
                  className="button-hover"
                >
                  <div style={styles.buttonGlow}></div>
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
