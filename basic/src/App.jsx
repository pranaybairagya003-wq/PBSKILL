import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <h2 className="logo">PBSkill</h2>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Courses</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Learn Skills That Matter</h1>
          
          <p>High-quality online courses to boost your career</p>
          <button className="btn">Get Started</button>
        </div>
      </section>

      {/* ABOUT Section */}
      <section id="about" className="section about">
        <h2>About Us</h2>
        <p>
          PBSkill is a beginner-friendly platform that helps students learn 
          web development, programming, and digital skills at their own pace.
        </p>
      </section>

      {/* Services / Courses Section */}
      <section id="services" className="section services">
        <h2>Our Courses</h2>
        <div className="cards">
          <div className="card">
            <h3>Web Development</h3>
            <p>HTML, CSS, JavaScript & React</p>
          </div>
          <div className="card">
            <h3>Python Programming</h3>
            <p>Learn Python from basics to advanced</p>
          </div>
          <div className="card">
            <h3>Digital Marketing</h3>
            <p>SEO, Social Media & Ads</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <p>&copy; 2026 PBSkill</p>
        <p>PRANAY BAIRAGYA</p>
      </footer>
    </div>
  );
}

export default App;