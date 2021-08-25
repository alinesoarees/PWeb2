let numero = parseInt(prompt("Digite o numero:"))
const n = 4;

let resultado = n;
let counter = n - 1;

while (counter > 1) {
    resultado = resultado * counter;
    counter -= 1;
}

alert(`${'O valor de n e: ' + resultado}`);