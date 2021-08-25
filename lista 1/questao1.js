let quantidade = parseInt(prompt("Insira a quantidade de números que quer digitar:"));
if ((qtd < 0) || (qtd == 0)) {
    alert("O valor a ser digitado positivo e diferente de zero.")
}
else {
    let numeros = [];
    let resultado = [];

    for (let i = 0; i < qtd; i++) {
        let numero = parseInt(prompt("Insira o numero " + (i + 1)))
        numeros.push(numero);
    }
    for (let i = 0; i < qtd; i++) {
        resultado.push(numeros[i] * numeros[i]);
    }
    alert(`${'Quadrado dos numeros: ' + resultado}`)
}