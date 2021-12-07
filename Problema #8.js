const casillas = 64;

var peso = parseInt (prompt ("Introduce cuanto pesa un grano de trigo en gramos."));

var resultado = 0;

var peso_final = 0;

for (i = 1; i <= casillas; ++i) {
    resultado = resultado + 2 ** i;
} 

peso_final = resultado * peso;

if (peso_final < 5972 * (10 ** 27)){
    alert("Pesa " + peso_final + " gramos.");
} else if (peso_final > 5972 * (10 ** 27)){
    alert("El peso es ridiculamente grande, su peso seria mayor que el de la tierra.");
}
