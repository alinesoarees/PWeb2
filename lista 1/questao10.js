let n = parseInt(prompt("Digite o valor de n:"));
for (let i = 1; i * (i + 1) * (i + 2) <= n; i++) {
    if (i * (i + 1) * (i + 2) == n) {
        alert("O numero n e triangular");
    }
    else {
        alert(" Nao e triangular");
    }
}