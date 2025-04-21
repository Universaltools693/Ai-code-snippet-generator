import AdPlaceholder from '../components/AdPlaceholder';

function About() {
  return (
    <div className="container">
      <h1>About Us</h1>
      <section style={{ minHeight: '800px' }}>
        <h2>Our Mission</h2>
        <p>We are a team dedicated to making coding easier with AI-powered tools.</p>
        <AdPlaceholder />
      </section>
    </div>
  );
}

export default About;
