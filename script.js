document.addEventListener('DOMContentLoaded', function() {
    // Show pop-up ad modal on page load
    const adModal = document.getElementById('ad-modal');
    // adModal.classList.remove('hidden');
    // adModal.style.display = 'flex';

    // Close modal
    document.getElementById('close-modal').addEventListener('click', function() {
        adModal.style.display = 'none';
    });

    // Generate code button
    document.getElementById('generate-btn').addEventListener('click', function() {
        const language = document.getElementById('language').value;
        const description = document.getElementById('description').value;
        generateCode(description, language).then(code => {
            const codeElement = document.getElementById('code-output');
            codeElement.textContent = code;
            codeElement.className = `language-${language}`;
            Prism.highlightAll();
        });
    });

    // Copy code to clipboard
    document.getElementById('copy-btn').addEventListener('click', function() {
        const code = document.getElementById('code-output').textContent;
        navigator.clipboard.writeText(code).then(() => {
            alert('Code copied to clipboard!');
        });
    });

    // Download code as file
    document.getElementById('download-btn').addEventListener('click', function() {
        const code = document.getElementById('code-output').textContent;
        const blob = new Blob([code], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'generated_code.txt';
        a.click();
        URL.revokeObjectURL(url);
    });
});

// Simulated AI code generation (replace with actual API call)
function generateCode(description, language) {
    return new Promise((resolve) => {
        setTimeout(() => {
            // Dummy response (replace with real API integration)
            let code = '';
            if (language === 'javascript') {
                code = `// Generated JavaScript code
console.log("Hello, World!");
// Based on: ${description}`;
            } else if (language === 'python') {
                code = `# Generated Python code
print("Hello, World!")
# Based on: ${description}`;
            } else if (language === 'java') {
                code = `// Generated Java code
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
// Based on: ${description}`;
            }
            resolve(code);
        }, 1000); // Simulate API delay
    });
}
