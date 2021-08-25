let n = parseInt(prompt("Digite o numero:"));
if ((n < 0) || (n == 0) || (n % 10 != 0)) {
    alert("O valor a ser digitado positivo e diferente de zero.")
} else {
    var sum = 0;
    for (let i = 0; i < n; i++) {
        if (i % 2 == 0) {
            sum += i
        }
    }
    alert(`${'Soma dos numeros:' + sum}`)
}