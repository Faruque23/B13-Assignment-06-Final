import './App.css'

function App() {
  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo">DigiTools</div>
          <nav className="nav">
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#resources">Resources</a>
            <a href="#company">Company</a>
          </nav>
          <button className="btn-secondary">Sign in</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Supercharge Your<br />Digital Workflow</h1>
            <p>Streamline your creative process with powerful digital tools designed for modern teams</p>
            <div className="hero-buttons">
              <button className="btn-primary">Get Started</button>
              <button className="btn-outline">Learn More</button>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-img-placeholder">
              <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                <circle cx="200" cy="150" r="100" fill="#e8e8ff" opacity="0.5" />
                <circle cx="250" cy="120" r="60" fill="#d4d4f0" opacity="0.7" />
                <circle cx="150" cy="180" r="50" fill="#c9c9ff" opacity="0.6" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <h3>50K+</h3>
            <p>Active Users</p>
          </div>
          <div className="stat-item">
            <h3>200+</h3>
            <p>Integrations</p>
          </div>
          <div className="stat-item">
            <h3>4.9</h3>
            <p>Rating</p>
          </div>
        </div>
      </section>

      {/* Premium Tools Section */}
      <section id="features" className="tools-section">
        <div className="section-header">
          <h2>Premium Digital Tools</h2>
          <p>Everything you need to create, collaborate, and ship</p>
        </div>
        <div className="tools-grid">
          <div className="tool-card">
            <div className="tool-icon">📊</div>
            <h3>Analytics Hub</h3>
            <p>Track performance metrics and gain insights into your workflow efficiency</p>
            <button className="btn-card">Learn More →</button>
          </div>
          <div className="tool-card">
            <div className="tool-icon">🎨</div>
            <h3>Design Studio</h3>
            <p>Create stunning visuals with our intuitive design tools and templates</p>
            <button className="btn-card">Learn More →</button>
          </div>
          <div className="tool-card">
            <div className="tool-icon">👥</div>
            <h3>Team Collaboration</h3>
            <p>Work seamlessly with your team in real-time across projects</p>
            <button className="btn-card">Learn More →</button>
          </div>
          <div className="tool-card">
            <div className="tool-icon">⚡</div>
            <h3>Smart Automation</h3>
            <p>Automate repetitive tasks and focus on what matters most</p>
            <button className="btn-card">Learn More →</button>
          </div>
          <div className="tool-card">
            <div className="tool-icon">🔒</div>
            <h3>Enterprise Security</h3>
            <p>Bank-level security and compliance for your peace of mind</p>
            <button className="btn-card">Learn More →</button>
          </div>
          <div className="tool-card">
            <div className="tool-icon">🚀</div>
            <h3>Performance Tools</h3>
            <p>Optimize and scale your digital products effortlessly</p>
            <button className="btn-card">Learn More →</button>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="steps-section">
        <div className="section-header">
          <h2>Get Started in 3 Steps</h2>
        </div>
        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Create an Account</h3>
            <p>Sign up in seconds and get instant access to all features</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Onboard Your Team</h3>
            <p>Invite team members and set up your workspace</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Start Creating</h3>
            <p>Begin collaborating and shipping amazing products</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing-section">
        <div className="section-header">
          <h2>Simple, Transparent Pricing</h2>
          <p>Choose the plan that fits your needs</p>
        </div>
        <div className="pricing-container">
          <div className="pricing-card">
            <h3>Starter</h3>
            <div className="price">$0</div>
            <p className="price-subtitle">Forever free</p>
            <ul className="features-list">
              <li>✓ Up to 5 projects</li>
              <li>✓ Basic collaboration</li>
              <li>✓ Community support</li>
              <li>✗ Advanced analytics</li>
              <li>✗ Priority support</li>
            </ul>
            <button className="btn-secondary-outline">Get Started</button>
          </div>

          <div className="pricing-card featured">
            <div className="featured-badge">Most Popular</div>
            <h3>Professional</h3>
            <div className="price">$39<span>/month</span></div>
            <p className="price-subtitle">Billed monthly</p>
            <ul className="features-list">
              <li>✓ Unlimited projects</li>
              <li>✓ Team collaboration</li>
              <li>✓ Advanced analytics</li>
              <li>✓ Priority support</li>
              <li>✓ Custom integrations</li>
            </ul>
            <button className="btn-primary">Start Free Trial</button>
          </div>

          <div className="pricing-card">
            <h3>Enterprise</h3>
            <div className="price">$99<span>/month</span></div>
            <p className="price-subtitle">Custom pricing available</p>
            <ul className="features-list">
              <li>✓ Everything in Pro</li>
              <li>✓ Dedicated support</li>
              <li>✓ SLA guarantee</li>
              <li>✓ Advanced security</li>
              <li>✓ Custom contracts</li>
            </ul>
            <button className="btn-secondary-outline">Contact Sales</button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Transform your Workflow?</h2>
        <p>Join thousands of teams already using DigiTools</p>
        <button className="btn-primary-large">Start Your Free Trial</button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>DigiTools</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#press">Press</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Product</h4>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#security">Security</a></li>
              <li><a href="#roadmap">Roadmap</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><a href="#docs">Documentation</a></li>
              <li><a href="#tutorials">Tutorials</a></li>
              <li><a href="#community">Community</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li><a href="#privacy">Privacy</a></li>
              <li><a href="#terms">Terms</a></li>
              <li><a href="#cookies">Cookies</a></li>
              <li><a href="#compliance">Compliance</a></li>
            </ul>
          </div>
          <div className="footer-section social">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#twitter">Twitter</a>
              <a href="#linkedin">LinkedIn</a>
              <a href="#github">GitHub</a>
              <a href="#instagram">Instagram</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 DigiTools. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default App
