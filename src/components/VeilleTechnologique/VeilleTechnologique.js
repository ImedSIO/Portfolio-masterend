import React from "react";
// Commentez temporairement l'import de Particle pour tester
// import Particle from "../Particle";

function VeilleTechnologique() {
  return (
    <div style={{ 
      position: "relative",
      backgroundColor: "#121212",
      color: "white",
      paddingTop: "150px",
      paddingBottom: "50px",
      minHeight: "100vh"
    }}>
      {/* Commentez temporairement Particle pour tester */}
      {/* <Particle /> */}
      
      <div style={{ 
        maxWidth: "1200px", 
        margin: "0 auto", 
        padding: "0 15px" 
      }}>
        <h1 style={{ 
          fontSize: "2.5rem", 
          textAlign: "center", 
          marginBottom: "2rem" 
        }}>
          Veille Technologique <strong style={{ color: "#cd5ff8" }}>Blockchain</strong>
        </h1>
        
        {/* Section d'introduction */}
        <div style={{ 
          backgroundColor: "#1b1b1b",
          borderRadius: "15px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
          padding: "20px",
          border: "1px solid rgba(200, 137, 230, 0.637)",
          marginBottom: "30px"
        }}>
          <h3 style={{ 
            fontSize: "1.3rem",
            fontWeight: "600",
            color: "#cd5ff8",
            marginBottom: "15px"
          }}>La Blockchain : Une Révolution Technologique</h3>
          <p style={{ 
            fontSize: "1rem",
            color: "#b5b5b5",
            lineHeight: "1.6"
          }}>
            La blockchain est une technologie de stockage et de transmission d'informations transparente, 
            sécurisée et fonctionnant sans organe central de contrôle. Cette veille technologique explore 
            les dernières avancées et applications de cette technologie disruptive.
          </p>
        </div>
        
        {/* Sous-titre */}
        <h2 style={{ 
          fontSize: "1.8rem",
          textAlign: "center",
          margin: "2rem 0",
          color: "#c5c6c7"
        }}>Domaines d'application et innovations</h2>
        
        {/* Cartes d'information */}
        <div style={{ 
          display: "flex",
          flexWrap: "wrap",
          margin: "0 -15px",
          justifyContent: "center"
        }}>
          {/* Carte Ethereum */}
          <div style={{ 
            width: "100%",
            maxWidth: "500px",
            padding: "0 15px",
            marginBottom: "30px"
          }}>
            <div style={{ 
              backgroundColor: "#1b1b1b",
              borderRadius: "15px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
              padding: "20px",
              border: "1px solid rgba(200, 137, 230, 0.637)",
              height: "100%"
            }}>
              <h3 style={{ 
                fontSize: "1.3rem",
                fontWeight: "600",
                color: "#cd5ff8",
                marginBottom: "15px"
              }}>Ethereum et Smart Contracts</h3>
              <p style={{ 
                fontSize: "1rem",
                color: "#b5b5b5",
                lineHeight: "1.6"
              }}>
                Ethereum est une plateforme décentralisée qui permet la création de smart contracts et 
                d'applications décentralisées (DApps). La mise à jour Ethereum 2.0 marque une transition 
                vers un mécanisme de consensus Proof of Stake.
              </p>
            </div>
          </div>
          
          {/* Carte NFTs */}
          <div style={{ 
            width: "100%",
            maxWidth: "500px",
            padding: "0 15px",
            marginBottom: "30px"
          }}>
            <div style={{ 
              backgroundColor: "#1b1b1b",
              borderRadius: "15px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
              padding: "20px",
              border: "1px solid rgba(200, 137, 230, 0.637)",
              height: "100%"
            }}>
              <h3 style={{ 
                fontSize: "1.3rem",
                fontWeight: "600",
                color: "#cd5ff8",
                marginBottom: "15px"
              }}>NFTs (Non-Fungible Tokens)</h3>
              <p style={{ 
                fontSize: "1rem",
                color: "#b5b5b5",
                lineHeight: "1.6"
              }}>
                Les NFTs représentent des actifs numériques uniques et non interchangeables. Ils ont 
                révolutionné les industries de l'art, du divertissement et du gaming en permettant 
                la propriété vérifiable d'actifs numériques.
              </p>
            </div>
          </div>
        </div>
        
        {/* Sources */}
        <div style={{ 
          backgroundColor: "#1b1b1b",
          borderRadius: "15px",
          padding: "20px",
          border: "1px solid rgba(200, 137, 230, 0.637)",
          marginTop: "30px"
        }}>
          <h3 style={{ 
            fontSize: "1.5rem",
            fontWeight: "500",
            marginBottom: "15px",
            color: "#cd5ff8"
          }}>Sources et ressources</h3>
          <ul style={{ 
            listStyleType: "none",
            paddingLeft: "15px"
          }}>
            <li style={{ 
              marginBottom: "10px",
              position: "relative",
              paddingLeft: "20px"
            }}>
              <a href="https://ethereum.org" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 style={{ color: "#c5c6c7", textDecoration: "none" }}>
                Ethereum.org
              </a> - Documentation officielle d'Ethereum
            </li>
            <li style={{ 
              marginBottom: "10px",
              position: "relative",
              paddingLeft: "20px"
            }}>
              <a href="https://www.coindesk.com" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 style={{ color: "#c5c6c7", textDecoration: "none" }}>
                CoinDesk
              </a> - Actualités blockchain
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default VeilleTechnologique;
