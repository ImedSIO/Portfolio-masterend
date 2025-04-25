import React from 'react';

const VeilleTechnologique = () => {
  const handleDownload = () => {
    alert("Téléchargement du rapport de veille technologique");
    // Logique de téléchargement à implémenter
  };

  return (
    <div className="veille-container">
      <style jsx>{`
        .veille-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #333;
          line-height: 1.6;
        }
        
        .veille-header {
          text-align: center;
          margin-bottom: 3rem;
          padding-bottom: 1.5rem;
          border-bottom: 2px solid #3498db;
        }
        
        .veille-header h1 {
          font-size: 2.5rem;
          color: #2c3e50;
          margin-bottom: 0.5rem;
        }
        
        .veille-header p {
          font-size: 1.2rem;
          color: #7f8c8d;
        }
        
        .intro-section {
          display: flex;
          align-items: center;
          gap: 2rem;
          margin-bottom: 3rem;
        }
        
        .intro-content {
          flex: 1;
        }
        
        .intro-image {
          flex: 1;
          display: flex;
          justify-content: center;
        }
        
        .intro-image img {
          max-width: 100%;
          border-radius: 8px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }
        
        .intro-image img:hover {
          transform: scale(1.03);
        }
        
        .timeline-section {
          margin-bottom: 3rem;
        }
        
        .timeline {
          position: relative;
          padding: 2rem 0;
        }
        
        .timeline::before {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 20px;
          width: 4px;
          background: #3498db;
        }
        
        .timeline-item {
          position: relative;
          margin-bottom: 2rem;
          padding-left: 45px;
        }
        
        .timeline-dot {
          position: absolute;
          left: 0;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #3498db;
          border: 4px solid #fff;
          box-shadow: 0 0 0 3px #3498db;
          transform: translateX(2px);
        }
        
        .timeline-content {
          background: #f8f9fa;
          padding: 1.5rem;
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }
        
        .timeline-content h3 {
          color: #3498db;
          margin-top: 0;
        }
        
        .timeline-image {
          max-width: 100%;
          height: auto;
          border-radius: 6px;
          margin-top: 1rem;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
        }
        
        .image-row {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }
        
        .image-row .timeline-image {
          flex: 1;
          max-width: 48%;
          margin-top: 0;
        }
        
        .trends-section {
          margin-bottom: 3rem;
        }
        
        .trends-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 1.5rem;
        }
        
        .trend-card {
          background: linear-gradient(145deg, #f8f9fa, #e9ecef);
          padding: 1.5rem;
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .trend-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
        }
        
        .trend-card h3 {
          color: #2c3e50;
          margin-top: 0;
          border-bottom: 2px solid #3498db;
          padding-bottom: 0.5rem;
        }
        
        .challenges-section {
          margin-bottom: 3rem;
        }
        
        .challenges-list {
          background: #f8f9fa;
          padding: 1.5rem 1.5rem 1.5rem 3rem;
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }
        
        .challenges-list li {
          margin-bottom: 1rem;
        }
        
        .challenges-list li strong {
          color: #3498db;
        }
        
        .sources-section {
          background: #f8f9fa;
          padding: 1.5rem;
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }
        
        .sources-list {
          margin-bottom: 1.5rem;
        }
        
        .sources-list a {
          color: #3498db;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .sources-list a:hover {
          color: #2980b9;
          text-decoration: underline;
        }
        
        .download-btn {
          background: #3498db;
          color: white;
          border: none;
          padding: 0.8rem 1.5rem;
          border-radius: 4px;
          font-size: 1rem;
          cursor: pointer;
          transition: background 0.3s ease;
        }
        
        .download-btn:hover {
          background: #2980b9;
        }
        
        @media (max-width: 768px) {
          .intro-section {
            flex-direction: column;
          }
          
          .image-row {
            flex-direction: column;
          }
          
          .image-row .timeline-image {
            max-width: 100%;
          }
          
          .trends-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <header className="veille-header">
        <h1>Veille Technologique: Blockchain</h1>
        <p>Analyse des tendances et innovations dans le domaine de la blockchain</p>
      </header>

      <section className="intro-section">
        <div className="intro-content">
          <h2>Introduction à la Blockchain</h2>
          <p>
            La blockchain est une technologie de stockage et de transmission d'informations transparente, 
            sécurisée et fonctionnant sans organe central de contrôle. Elle constitue la base technologique 
            des cryptomonnaies et s'étend désormais à de nombreux autres domaines.
          </p>
        </div>
        <div className="intro-image">
          <img 
            src="https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2832&auto=format&fit=crop" 
            alt="Blockchain Technology" 
            style={{ maxWidth: "300px", height: "auto" }}
          />
        </div>
      </section>

      <section className="timeline-section">
        <h2>Évolution des Technologies Blockchain</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>2009</h3>
              <p>Lancement de Bitcoin par Satoshi Nakamoto, première application de la blockchain.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>2015</h3>
              <p>Création d'Ethereum, introduisant les smart contracts et élargissant les possibilités de la blockchain.</p>
              <img 
                src="https://images.unsplash.com/photo-1622630998477-20aa696ecb05?q=80&w=2924&auto=format&fit=crop" 
                alt="Ethereum" 
                className="timeline-image"
              />
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>2017-2018</h3>
              <p>Boom des ICO (Initial Coin Offerings) et diversification des applications blockchain.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>2020-2021</h3>
              <p>Explosion des NFTs et de la DeFi (Finance Décentralisée).</p>
              <div className="image-row">
                <img 
                  src="https://images.unsplash.com/photo-1645378999496-33c8c2afe38d?q=80&w=2940&auto=format&fit=crop" 
                  alt="NFT Art" 
                  className="timeline-image"
                />
                <img 
                  src="https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?q=80&w=2797&auto=format&fit=crop" 
                  alt="DeFi" 
                  className="timeline-image"
                />
              </div>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>2022-2023</h3>
              <p>Développement des solutions de scalabilité et transition vers Ethereum 2.0.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="trends-section">
        <h2>Tendances Actuelles</h2>
        <div className="trends-grid">
          <div className="trend-card">
            <h3>Finance Décentralisée (DeFi)</h3>
            <p>Écosystème de services financiers basés sur la blockchain, sans intermédiaires traditionnels.</p>
          </div>
          <div className="trend-card">
            <h3>NFTs (Non-Fungible Tokens)</h3>
            <p>Certificats numériques uniques représentant la propriété d'actifs numériques ou physiques.</p>
          </div>
          <div className="trend-card">
            <h3>Blockchain Interopérable</h3>
            <p>Solutions permettant à différentes blockchains de communiquer et d'interagir entre elles.</p>
          </div>
          <div className="trend-card">
            <h3>Web3</h3>
            <p>Vision d'un internet décentralisé où les utilisateurs contrôlent leurs données et leur identité numérique.</p>
          </div>
        </div>
      </section>

      <section className="challenges-section">
        <h2>Défis et Perspectives</h2>
        <ul className="challenges-list">
          <li>
            <strong>Scalabilité</strong>: Améliorer la capacité des réseaux blockchain à traiter un grand nombre de transactions.
          </li>
          <li>
            <strong>Consommation énergétique</strong>: Réduire l'impact environnemental des mécanismes de consensus comme le Proof of Work.
          </li>
          <li>
            <strong>Réglementation</strong>: Adapter les cadres juridiques aux spécificités de la technologie blockchain.
          </li>
          <li>
            <strong>Adoption grand public</strong>: Simplifier l'utilisation des applications blockchain pour faciliter leur adoption.
          </li>
        </ul>
      </section>

      <section className="sources-section">
        <h2>Sources et Ressources</h2>
        <p>Pour approfondir vos connaissances sur la blockchain :</p>
        <ul className="sources-list">
          <li><a href="https://ethereum.org/" target="_blank" rel="noopener noreferrer">Ethereum.org</a></li>
          <li><a href="https://bitcoin.org/" target="_blank" rel="noopener noreferrer">Bitcoin.org</a></li>
          <li><a href="https://www.coindesk.com/" target="_blank" rel="noopener noreferrer">CoinDesk</a></li>
          <li><a href="https://www.ledger.com/academy/" target="_blank" rel="noopener noreferrer">Ledger Academy</a></li>
        </ul>
        <button className="download-btn" onClick={handleDownload}>Télécharger le rapport complet</button>
      </section>
    </div>
  );
};

export default VeilleTechnologique;
