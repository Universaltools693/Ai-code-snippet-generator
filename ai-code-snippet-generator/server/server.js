const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

app.get('/api/generate', (req, res) => {
  res.json({ code: '// Sample code\nconsole.log("Hello, World!");' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
