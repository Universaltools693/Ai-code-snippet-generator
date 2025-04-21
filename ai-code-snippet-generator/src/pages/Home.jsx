import CodeGenerator from '../components/CodeGenerator';
import AdPlaceholder from '../components/AdPlaceholder';

function Home() {
  return (
    <div className="container">
      <h1>Welcome to Advance AI Code Snippet Generator</h1>
      <p>This is the ultimate tool for generating code snippets using AI. Scroll down to explore!</p>
      <section style={{ minHeight: '800px' }}>
        <h2>Why Choose Us?</h2>
        <p>Our tool is powered by cutting-edge AI to provide accurate and efficient code snippets.</p>
        <h2>Generate Your Code</h2>
        <CodeGenerator />
        <AdPlaceholder />
      </section>
    </div>
  );
}

export default Home;
