function generateCode() {
    const language = document.getElementById('language').value;
    const description = document.getElementById('description').value;
    let code = '';

    if (language === 'python' && description.includes('loop')) {
        code = 'for i in range(5):\n    print(i)';
    } else if (language === 'javascript' && description.includes('function')) {
        code = 'function greet() {\n    return "Hello, World!";\n}';
    } else if (language === 'java' && description.includes('class')) {
        code = 'public class Example {\n    public static void main(String[] args) {\n        System.out.println("Hello");\n    }\n}';
    } else {
        code = 'No code generated. Please provide a valid description (e.g., include "loop", "function", or "class").';
    }

    document.getElementById('output').textContent = code;
}