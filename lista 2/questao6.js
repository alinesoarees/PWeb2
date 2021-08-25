const primo = (n) => {
    let divisor = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
            divisor++;
        }
    }
    if (divisor == 2)
        return true;
    return false;
}

const decomposicao = (n) => {
    var primos = [];
    for (let i = 1; i <= n; i++) {
        if (primo(i))
            primos.push(i);
    }
    return alert(primos);
}

let n = parseInt(prompt("Valor para decomposicao numeros primos:"))
if ((n < 0) || (n == 0)) {
    alert("O valor a ser digitado positivo e diferente de zero.")
} else {
    decomposicao(n);
}
