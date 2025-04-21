document.addEventListener("DOMContentLoaded", () => {
  // Preloader
  const preloader = document.getElementById("preloader");
  setTimeout(() => {
    preloader.style.display = "none";
  }, 1000);
});

function generateCode() {
  const language = document.getElementById("language").value;
  const prompt = document.getElementById("prompt").value.trim();
  const resultDiv = document.getElementById("result");
  const codeOutput = document.getElementById("codeOutput");

  if (!prompt) return alert("Please enter a prompt.");

  const fakeGeneratedCode = `// Language: ${language}
/**
 * ${prompt}
 */
function example() {
  // TODO: Implement with AI
}`;

  codeOutput.textContent = fakeGeneratedCode;
  resultDiv.classList.remove("hidden");
}

function copyCode() {
  const code = document.getElementById("codeOutput").textContent;
  navigator.clipboard.writeText(code).then(() => {
    alert("Code copied to clipboard!");
  });
}