function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="page-header">
          <h1>About Us</h1>
          <p>Discover the story behind Crispy Chicken Co.</p>
        </div>

        <section className="owner-story">
          <div className="story-content">
            <div className="story-text">
              <h2>Meet Our Founder</h2>
              <div className="owner-info">
                <div className="owner-avatar">👨‍🍳</div>
                <div className="owner-details">
                  <h3>Chef Marcus Rodriguez</h3>
                  <p className="owner-title">Founder & Head Chef</p>
                </div>
              </div>
              <p className="story-paragraph">
                Chef Marcus Rodriguez started his culinary journey over 25 years ago in his grandmother's kitchen in New Orleans. 
                Born into a family of passionate cooks, Marcus learned the art of perfect seasoning and the importance of 
                fresh ingredients from a young age.
              </p>
              <p className="story-paragraph">
                After graduating from the Culinary Institute of America, Marcus worked in some of the finest restaurants 
                across the country, but he always dreamed of bringing his family's secret chicken recipe to the community. 
                In 2015, that dream became reality when he opened the first Crispy Chicken Co. location.
              </p>
              <p className="story-paragraph">
                "I wanted to create a place where families could enjoy the same quality and care that went into every meal 
                in my grandmother's kitchen," says Marcus. "Every piece of chicken we serve is prepared with love, 
                respect for tradition, and a commitment to excellence."
              </p>
            </div>
            <div className="story-image">
              <div className="kitchen-placeholder">🏠</div>
            </div>
          </div>
        </section>

        <section className="shop-story">
          <h2>Our Shop's Legacy</h2>
          <div className="legacy-timeline">
            <div className="timeline-item">
              <div className="timeline-year">2015</div>
              <div className="timeline-content">
                <h3>The Beginning</h3>
                <p>Opened our first location with just 4 tables and a dream. We served 50 customers on our opening day.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2017</div>
              <div className="timeline-content">
                <h3>Community Recognition</h3>
                <p>Won "Best Local Restaurant" award from the Chamber of Commerce. Our secret blend of herbs and spices became legendary.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2019</div>
              <div className="timeline-content">
                <h3>Expansion</h3>
                <p>Expanded our kitchen and dining area to accommodate growing demand. Added our signature chicken sandwich to the menu.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2021</div>
              <div className="timeline-content">
                <h3>Innovation</h3>
                <p>Introduced our famous chicken & waffles combo and launched our catering services for special events.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2024</div>
              <div className="timeline-content">
                <h3>Today</h3>
                <p>Still family-owned and operated, serving over 1,000 customers weekly with the same passion and quality that started it all.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="values">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">❤️</div>
              <h3>Family First</h3>
              <p>We treat every customer like family, creating a warm and welcoming atmosphere where everyone feels at home.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌱</div>
              <h3>Fresh Ingredients</h3>
              <p>We source only the freshest, highest-quality ingredients and prepare everything from scratch daily.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🏆</div>
              <h3>Excellence</h3>
              <p>We never compromise on quality. Every dish is prepared with attention to detail and a commitment to perfection.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Community</h3>
              <p>We're proud to be part of this community and give back through local events and charitable initiatives.</p>
            </div>
          </div>
        </section>

        <section className="team">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar">👨‍🍳</div>
              <h3>Chef Marcus Rodriguez</h3>
              <p>Founder & Head Chef</p>
              <p className="member-experience">25+ years experience</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👩‍🍳</div>
              <h3>Sarah Johnson</h3>
              <p>Assistant Chef</p>
              <p className="member-experience">8 years with us</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👨‍💼</div>
              <h3>Mike Chen</h3>
              <p>Restaurant Manager</p>
              <p className="member-experience">6 years with us</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👩‍💼</div>
              <h3>Lisa Martinez</h3>
              <p>Customer Service Lead</p>
              <p className="member-experience">4 years with us</p>
            </div>
          </div>
        </section>

        <section className="contact-cta">
          <h2>Visit Us Today</h2>
          <p>Experience the legacy of Crispy Chicken Co. for yourself. We'd love to welcome you to our family!</p>
          <div className="cta-buttons">
            <button className="btn btn-primary">View Our Menu</button>
            <button className="btn btn-secondary">Get Directions</button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
