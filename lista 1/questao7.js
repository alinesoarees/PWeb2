let qtd = parseInt(prompt("Insira a quantidade de números ser digitado:"))

if ((qtd < 0) || (qtd == 0)) {
    alert("O valor a ser digitado positivo e diferente de zero.")
}
else {
    let numeros = [];
    let soma = 0;
    for (let i = 0; i < qtd; i++) {
        let numero = parseInt(prompt("Digite o numero " + (i + 1)))
        numeros.push(numero);
    }
    for (let i = 0; i < qtd; i++) {
        if (numeros[i] % 2 == 0) {
            soma += numeros[i];
        }
    }
    alert(`${'A soma dos numeros pares e: ' + soma}`)
}