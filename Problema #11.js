var poblacion_actual = 1 * prompt ("Introduce cantidad personas que hay en la poblacion actualmente.");

var tasa_natalidad = 1 * prompt ("Introduce tasa de natalidad de la poblacion.") / 100;

var tasa_mortalidad = 1 * prompt ("Introduce tasa de mortalidad de la poblacion.") / 100;

var natalidad;

var mortalidad;


for ( i = 1; i <= 10; i++) {
    natalidad = tasa_natalidad * poblacion_actual;
    mortalidad = tasa_mortalidad * poblacion_actual;
    poblacion_actual += (natalidad - mortalidad);    
    document.getElementById ("tabla").rows [i].cells [1].innerText = Math.round(natalidad);
    document.getElementById ("tabla").rows [i].cells [2].innerText = Math.round(mortalidad);
    document.getElementById ("tabla").rows [i].cells [3].innerText = Math.round(poblacion_actual);
}

