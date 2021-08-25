const numPrimo = (numero) => {
    var count = 0;
    for (let i = 1; i <= numero; i++) {
        if (numero % i == 0) {
            count += 1;
        }
    }
    if (count == 2) {
        return numero;
    } else {
        return 0;
    }
}
if ((qtd < 0) || (qtd == 0)) {
    alert("O valor a ser digitado positivo e diferente de zero.")
}
else {
    let numeros = [];
    let soma = 0;
    for (let i = 0; i < qtd; i++) {
        let numero = parseInt(prompt("Insira o numero " + (i + 1)))
        numeros.push(numero);
    }
    for (let i = 0; i < qtd; i++) {
        soma += numPrimo(numeros[i]);
    }
    alert(`${'Soma dos numeros primos:' + soma}`)
}