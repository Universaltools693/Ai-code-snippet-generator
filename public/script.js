document.getElementById('snippet-form').addEventListener('submit', async (e) => {
e.preventDefault();

const language = document.getElementById('language').value;
const description = document.getElementById('description').value;
const codeOutput = document.getElementById('code-output');

try {
const response = await fetch('/generate-snippet', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ language, description }),
});

const data = await response.json();
codeOutput.textContent = data.snippet;
codeOutput.className = `language-${language.toLowerCase()}`;
Prism.highlightElement(codeOutput); // Apply syntax highlighting
} catch (error) {
codeOutput.textContent = 'Error generating code. Please try again.';
console.error(error);
}
});