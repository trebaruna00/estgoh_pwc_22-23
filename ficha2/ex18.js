function verificarPalindromo(palavra) {
    for(var i = 0; i < palavra.length; i++) {
        if(palavra[i] !== palavra[palavra.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(verificarPalindromo("arara")); // true
console.log(verificarPalindromo("desenvolvimento")); // false
console.log(verificarPalindromo("reviver")); // true
console.log(verificarPalindromo("javascript")); // false
console.log(verificarPalindromo("ovo")); // true
console.log(verificarPalindromo("atorredaderrota")); // true
