function generatePassword() {
    const lengthElement = document.getElementById('length');
    const length = lengthElement ? parseInt((lengthElement as HTMLInputElement).value, 10) : 0;
    const includeUppercase = (document.getElementById('uppercase') as HTMLInputElement)?.checked ?? false;
    const includeLowercase = (document.getElementById('lowercase') as HTMLInputElement)?.checked ?? false;
    const includeNumbers = (document.getElementById('numbers') as HTMLInputElement)?.checked || false;
    const includeSymbols = (document.getElementById('symbols') as HTMLInputElement)?.checked ?? false;
    
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+[]{}|;:,.<>?/";
    
    let characters = "";
    if (includeUppercase) characters += uppercase;
    if (includeLowercase) characters += lowercase;
    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;
    
    if (characters === "") {
        const passwordElement = document.getElementById("password");
        if (passwordElement) {
            passwordElement.innerText = "Select at least one option";
        }
        return;
    }
    
    let password = "";
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    const passwordElement = document.getElementById("password");
    if (passwordElement) {
        passwordElement.innerText = password;
    }
}

function copyPassword() {
    const passwordElement = document.getElementById("password");
    if (!passwordElement) {
        alert("Password element not found!");
        return;
    }
    if (passwordElement) {
        const passwordText = passwordElement.innerText;
        navigator.clipboard.writeText(passwordText);
        alert("Password copied to clipboard!");
    } else {
        alert("Password element not found!");
    }
}
