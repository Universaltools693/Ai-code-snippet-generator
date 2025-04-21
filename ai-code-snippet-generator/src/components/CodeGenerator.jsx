import { useState } from 'react';

function CodeGenerator() {
  const [language, setLanguage] = useState('javascript');
  const [code, setCode] = useState('');

  const generateCode = async () => {
    setCode(`// Sample ${language} code\nconsole.log("Hello, World!");`);
  };

  return (
    <div style={{ padding: '20px', background: '#fff', color: '#333', borderRadius: '10px' }}>
      <h2>Generate Code</h2>
      <select value={language} onChange={(e) => setLanguage(e.target.value)} style={{ marginBottom: '20px', padding: '10px' }}>
        <option>JavaScript</option>
        <option>Python</option>
        <option>Java</option>
      </select>
      <button onClick={generateCode}>Generate Code</button>
      {code && <pre style={{ background: '#f0f0f0', padding: '20px', marginTop: '20px' }}>{code}</pre>}
    </div>
  );
}

export default CodeGenerator;
