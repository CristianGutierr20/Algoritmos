var nombre = prompt("Escribe tu nombre");

var num = prompt("Escribe el numero de veces que quieres que se repita tu nombre");

var contador = 1;

while (contador <= num) {
    document.write (nombre + "<br>");
    contador++;
}
