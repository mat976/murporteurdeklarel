import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [brickCount, setBrickCount] = useState(0)
  const [showSecret, setShowSecret] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setBrickCount(prev => (prev + 1) % 1000)
    }, 100)
    return () => clearInterval(interval)
  }, [])

  const testimonials = [
    { name: "Jean-Michel Béton", text: "Klarel a détruit mon mur porteur en 5 minutes chrono ! Professionnel ⭐⭐⭐⭐⭐", job: "Ancien propriétaire" },
    { name: "Marie Plâtre", text: "Je voulais un open-space, maintenant j'ai un tas de gravats. Merci Klarel !", job: "Future SDF" },
    { name: "Patrick Démolition", text: "Il m'a volé mon métier. Respect.", job: "Concurrent jaloux" },
    { name: "Architecte Anonymous", text: "Les murs porteurs ? C'est surfait. Klarel a raison depuis le début.", job: "Architecte repenti" }
  ]

  return (
    <div className="app">
      <header className="hero">
        <div className="brick-counter">🧱 {brickCount} murs porteurs détruits aujourd'hui</div>
        <h1 className="title">
          <span className="glitch" data-text="KLAREL">KLAREL</span>
        </h1>
        <p className="subtitle">Expert Certifié en Destruction de Murs Porteurs™</p>
        <p className="tagline">« Pourquoi garder un mur quand on peut avoir de l'espace ? »</p>
        <button className="cta-button" onClick={() => setShowSecret(!showSecret)}>
          🔨 DÉTRUIRE MAINTENANT
        </button>
        {showSecret && (
          <div className="secret-message">
            ⚠️ Attention : Aucun mur porteur n'a été maltraité dans la création de ce site
          </div>
        )}
      </header>

      <section className="services">
        <h2>Nos Services Premium</h2>
        <div className="service-grid">
          <div className="service-card">
            <div className="service-icon">💥</div>
            <h3>Démolition Express</h3>
            <p>Votre mur porteur détruit en moins de temps qu'il n'en faut pour dire "effondrement"</p>
            <span className="price">999€ (Assurance non incluse)</span>
          </div>
          <div className="service-card">
            <div className="service-icon">🏚️</div>
            <h3>Pack Open-Space</h3>
            <p>Tous vos murs porteurs supprimés pour un espace de vie unique et... instable</p>
            <span className="price">1999€ (Casque obligatoire)</span>
          </div>
          <div className="service-card">
            <div className="service-icon">🎰</div>
            <h3>Roulette Russe</h3>
            <p>On détruit un mur au hasard. C'est porteur ? Surprise !</p>
            <span className="price">499€ (YOLO)</span>
          </div>
          <div className="service-card">
            <div className="service-icon">🎓</div>
            <h3>Formation DIY</h3>
            <p>Apprenez à identifier un mur porteur... pour mieux le détruire vous-même !</p>
            <span className="price">299€ (Disclaimer de 50 pages)</span>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2>Ils Nous Font Confiance (Plus Pour Longtemps)</h2>
        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <p className="testimonial-text">"{testimonial.text}"</p>
              <p className="testimonial-author">- {testimonial.name}</p>
              <p className="testimonial-job">{testimonial.job}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="stats">
        <h2>Nos Statistiques Impressionnantes</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">847</div>
            <div className="stat-label">Murs Porteurs Détruits</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">312</div>
            <div className="stat-label">Effondrements Évités (Par Chance)</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">99.9%</div>
            <div className="stat-label">Taux de Satisfaction (Avant Effondrement)</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">0</div>
            <div className="stat-label">Assurances Qui Nous Acceptent</div>
          </div>
        </div>
      </section>

      <section className="faq">
        <h2>FAQ (Foire Aux Questions)</h2>
        <div className="faq-container">
          <div className="faq-item">
            <h3>❓ Comment savoir si c'est un mur porteur ?</h3>
            <p>Facile ! Si votre maison s'effondre après, c'était un mur porteur.</p>
          </div>
          <div className="faq-item">
            <h3>❓ C'est légal ?</h3>
            <p>Définissez "légal"... 🤔</p>
          </div>
          <div className="faq-item">
            <h3>❓ Que faire si ma maison s'effondre ?</h3>
            <p>Contactez-nous pour notre service "Reconstruction d'Urgence" à seulement 50000€ !</p>
          </div>
          <div className="faq-item">
            <h3>❓ Avez-vous des certifications ?</h3>
            <p>Oui ! Certifié par l'Institut International des Murs Qui N'Existent Plus (IIMNEP).</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="warning">
          ⚠️ AVERTISSEMENT LÉGAL ⚠️
          <p>Ce site est une parodie. Ne détruisez JAMAIS un mur porteur sans l'avis d'un professionnel qualifié.</p>
          <p>Klarel™ décline toute responsabilité en cas d'effondrement, blessure, décès ou apocalypse architecturale.</p>
        </div>
        <p className="copyright">© 2026 Klarel - Mur Porteur Destroyer Inc. | Tous droits réservés (sauf les murs)</p>
        <p className="made-with">Fait avec 💀 et beaucoup d'irresponsabilité</p>
      </footer>
    </div>
  )
}

export default App
