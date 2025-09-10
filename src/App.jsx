import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <div className="nav-container">
            <Link to="/" className="nav-logo" onClick={closeMenu}>
              🐔 Crispy Chicken Co.
            </Link>
            <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
              <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
              <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
              <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
            </button>
            <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
              <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
              <Link to="/products" className="nav-link" onClick={closeMenu}>Menu</Link>
              <Link to="/about" className="nav-link" onClick={closeMenu}>About Us</Link>
            </div>
          </div>
        </nav>
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        
        <footer className="footer">
          <p>&copy; 2024 Crispy Chicken Co. - Fresh, crispy, delicious!</p>
        </footer>
      </div>
    </Router>
  )
}

export default App