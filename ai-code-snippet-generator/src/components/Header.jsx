import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{ background: '#1a1a1a', padding: '20px', textAlign: 'center' }}>
      <img src="/logo.png" alt="Logo" style={{ height: '50px' }} />
      <h1 style={{ fontSize: '2.5rem', margin: '10px 0' }}>Advance AI Code Snippet Generator</h1>
      <nav>
        <Link to="/" style={{ color: '#fff', margin: '0 15px', textDecoration: 'none' }}>Home</Link>
        <Link to="/about" style={{ color: '#fff', margin: '0 15px', textDecoration: 'none' }}>About</Link>
        <Link to="/terms" style={{ color: '#fff', margin: '0 15px', textDecoration: 'none' }}>Terms</Link>
      </nav>
      <div className="ad-placeholder" style={{ height: '90px', lineHeight: '90px' }}>Ad Space</div>
    </header>
  );
}

export default Header;
