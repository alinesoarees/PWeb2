let n = parseInt(prompt("Digite um número:"));

if ((n < 0) || (n == 0)) {
    alert("O valor a ser digitado positivo e diferente de zero.")
} else {
    var aux = 1;
    for (hipotenusa = 1; hipotenusa <= n; hipotenusa++) {
        for (adjacente = 1; adjacente < hipotenusa; adjacente++) {
            oposto = adjacente;

            while (adjacente * adjacente + oposto * oposto < hipotenusa * hipotenusa) {
                oposto++;
            }
            if (adjacente * adjacente + oposto * oposto == hipotenusa * hipotenusa) {
                alert(`${'Hipotenusa', +hipotenusa + 'Cateto 1', +adjacente + 'Cateto 2', +oposto}`)
                aux = 2;
            }
        }
    }
}