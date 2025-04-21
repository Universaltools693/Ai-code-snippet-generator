const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// API endpoint to generate code snippet (placeholder for AI integration)
app.post('/generate-snippet', (req, res) => {
  const { language, description } = req.body;
  
  // Placeholder response (to be replaced with AI model in later steps)
  const snippet = `// Sample ${language} code for: ${description}\nconsole.log("Hello, AI-generated code!");`;
  
  res.json({ snippet });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});