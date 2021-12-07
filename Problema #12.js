var cantidad_de_digitos = 0;

var cantidad = prompt ("Escribe la cantidad numerica a tomar como referencia.");

var digito = prompt ("Introduce el numero que quieres encontrar.");

for (i = 0 ; i < cantidad.length ; i++) {
    if (cantidad [i] === digito) {
        cantidad_de_digitos += 1;
    }
}

alert ("El digito " + digito + " aparece " + cantidad_de_digitos + " veces en el numero " + cantidad + ".")
