function fibonacci(n) {
    var a = 0;
    var b = 1;
    var c = 0;
    var i = 0;
    var resultado = "";
    while (i < n) {
        c = a + b;
        a = b;
        b = c;
        resultado += c + " ";
        i++;
    }
    return resultado;
}

var n = parseInt(prompt("Ingrese el número de términos de la serie Fibonacci que desea mostrar: "));
alert(fibonacci(n));
