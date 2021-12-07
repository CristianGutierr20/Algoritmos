var latas = 1 * prompt ("Introduzca la cantidad de LATAS.");

var sobrador = 0;
var temporal = 1;
var contador = 1;
var niveles = 0;

while (latas >= contador){
    temporal = temporal + 2;
    sobrador = latas - contador;
    contador = contador + temporal;
    niveles = niveles + 1;
}

document.write("<h1><strong>Niveles:</strong> " + niveles + "<br>");
document.write("<strong>Sobran:</strong> " + sobrador);
