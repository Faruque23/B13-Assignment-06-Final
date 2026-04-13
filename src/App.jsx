import './App.css'


function App() {
  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo">DigiTools</div>
          <nav className="nav">
            <a href="#products">Products</a>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#faq">FAQ</a>
          </nav>
          <div>
            <button className="btn-secondary border-none"><i class="fa-solid fa-cart-shopping"></i></button>
            <button className="btn-secondary border-none">Login</button>
            <button className="btn-primary">Get Started</button>
          </div>

        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section items-center">
        <div className="hero-content flex items-start content-center gap-8">
          <div className="hero-text flex flex-col gap-4 items-start">
            <div className='hero-text items-start gap-2'>
              <span className="hero-badge">New: AI-Powered Tools Available</span>
              <h1>Supercharge Your<br />Digital Workflow</h1>
              <p>Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.</p>
            </div>

            <div className="hero-buttons">
              <button className="btn-primary">Explore Products</button>
              <button className="btn-outline">Watch Demo</button>
            </div>
          </div>

        </div>
        <div className="hero-image">
          <img src="../src/assets/banner.png" alt="Hero Image" />

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
          <p>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
        </div>
        <div className="tools-filter">
          <button className="filter-btn active">Products</button>
          <button className="filter-btn">Cart (2)</button>
        </div>
        <div className="tools-grid">
          <div className="tool-card">
            <span className="tool-badge best-seller">Best Seller</span>
            <div className="tool-icon">✍️</div>
            <h3>AI Writing Pro</h3>
            <p>Generate high-quality content, ideas, and copy instantly with advanced AI.</p>
            <div className="tool-price">
              <span className="price">$29</span>
              <span className="price-period">per</span>
            </div>
            <ul className="tool-features">
              <li><span className="check">✓</span> Unlimited generations</li>
              <li><span className="check">✓</span> 50+ writing templates</li>
              <li><span className="check">✓</span> Grammar checker</li>
            </ul>
            <button className="btn-primary buy-btn">Buy Now</button>
          </div>
          <div className="tool-card">
            <span className="tool-badge popular">Popular</span>
            <div className="tool-icon">🎨</div>
            <h3>Design Templates Pack</h3>
            <p>2000+ premium templates for social media, presentations, and marketing materials.</p>
            <div className="tool-price">
              <span className="price">$69</span>
              <span className="price-period">One-Time</span>
            </div>
            <ul className="tool-features">
              <li><span className="check">✓</span> 2000+ templates</li>
              <li><span className="check">✓</span> Monthly updates</li>
              <li><span className="check">✓</span> Commercial use</li>
            </ul>
            <button className="btn-primary buy-btn">Buy Now</button>
          </div>
          <div className="tool-card">
            <span className="tool-badge new">New</span>
            <div className="tool-icon">📸</div>
            <h3>Premium Stock Assets</h3>
            <p>Access millions of royalty-free photos, videos, and graphics for your projects.</p>
            <div className="tool-price">
              <span className="price">$19</span>
              <span className="price-period">per</span>
            </div>
            <ul className="tool-features">
              <li><span className="check">✓</span> 10M+ assets</li>
              <li><span className="check">✓</span> Commercial use</li>
              <li><span className="check">✓</span> No attribution</li>
            </ul>
            <button className="btn-primary buy-btn">Buy Now</button>
          </div>
          <div className="tool-card">
            <span className="tool-badge popular">Popular</span>
            <div className="tool-icon">⚙️</div>
            <h3>Automation Toolkit</h3>
            <p>Automate repetitive tasks and streamline your workflow with powerful tools.</p>
            <div className="tool-price">
              <span className="price">$79</span>
              <span className="price-period">per</span>
            </div>
            <ul className="tool-features">
              <li><span className="check">✓</span> 50+ automations</li>
              <li><span className="check">✓</span> API access</li>
              <li><span className="check">✓</span> Custom workflows</li>
            </ul>
            <button className="btn-primary buy-btn">Buy Now</button>
          </div>
          <div className="tool-card">
            <span className="tool-badge popular">Popular</span>
            <div className="tool-icon">📄</div>
            <h3>Resume Builder Pro</h3>
            <p>Create professional resumes that land interviews with expert templates.</p>
            <div className="tool-price">
              <span className="price">$15</span>
              <span className="price-period">One-Time</span>
            </div>
            <ul className="tool-features">
              <li><span className="check">✓</span> 100+ templates</li>
              <li><span className="check">✓</span> ATS optimization</li>
              <li><span className="check">✓</span> Expert tips</li>
            </ul>
            <button className="btn-primary buy-btn">Buy Now</button>
          </div>
          <div className="tool-card">
            <span className="tool-badge best-seller">Best Seller</span>
            <div className="tool-icon">📱</div>
            <h3>Social Media Content Kit</h3>
            <p>Complete toolkit for creating engaging social media content across all platforms.</p>
            <div className="tool-price">
              <span className="price">$39</span>
              <span className="price-period">per</span>
            </div>
            <ul className="tool-features">
              <li><span className="check">✓</span> 5000+ assets</li>
              <li><span className="check">✓</span> Scheduler included</li>
              <li><span className="check">✓</span> Analytics dashboard</li>
            </ul>
            <button className="btn-primary buy-btn">Buy Now</button>
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
