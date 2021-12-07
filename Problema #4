var palindromo = prompt("Introduce una palabra y te diremos si es un palindromo o no..");
	var p = palindromo.length;
        //Ponemos la cadena en minúsculas
	palindromo = palindromo.toLowerCase();
	var j;
	var car;
	var salida = "";
	var cadena_es = "";
	var cadena_re = "";

        //Bucle que recorre toda la cadena y va concatenando en dos variables y eliminando espacios
	for (i = 0; i < p; i++) {
		car = palindromo.charAt(i);
                //Si el caracter es un espacio
		if (car != " ") {
			cadena_es += car;
			cadena_re = car + cadena_re;
		}
	}
	if (cadena_es == cadena_re) {
		alert("Es palindromo.");
	}
	else {
		alert(" No es un palíndromo.");
	}
