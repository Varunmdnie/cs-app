import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Crispy Chicken Co.</h1>
          <p className="hero-subtitle">Fresh, crispy, and delicious chicken made with love</p>
          <p className="hero-description">
            We serve the finest quality chicken with our secret blend of herbs and spices. 
            Every piece is cooked to perfection for that signature crispy texture you'll love.
          </p>
          <div className="hero-buttons">
            <Link to="/products" className="btn btn-primary">View Our Menu</Link>
            <button className="btn btn-secondary">Order Now</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="chicken-placeholder">🍗</div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Why Choose Us?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🔥</div>
              <h3>Fresh Daily</h3>
              <p>We prepare our chicken fresh every day using only the finest ingredients.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Fast Service</h3>
              <p>Quick and efficient service so you can enjoy your meal without the wait.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💯</div>
              <h3>Quality Guaranteed</h3>
              <p>Every order is made with care and attention to ensure the best taste.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-info">
        <div className="container">
          <h2>Visit Us Today</h2>
          <div className="contact-details">
            <div className="contact-item">
              <strong>📍 Address:</strong> 123 Main Street, Food District
            </div>
            <div className="contact-item">
              <strong>📞 Phone:</strong> (555) 123-CHICK
            </div>
            <div className="contact-item">
              <strong>🕒 Hours:</strong> Mon-Sun: 11:00 AM - 10:00 PM
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
