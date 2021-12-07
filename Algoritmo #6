var monto = parseInt(prompt ("Introduce la cantidad que quieres ahorrar."));

var interes = parseInt (prompt ("Introduce la tasa de interes."));

var meses = parseInt (prompt ("Introduce los meses de ahorro."));

var monto_total = monto; 

if (interes <= 0 || monto <= 0) {
    alert ("Tu monto final es " + monto);
} else if (interes >= 1 && monto >= 1){
    for (var i = 1 ; i <= meses ; ++i) {
        monto_total += monto_total * (interes / 100);
    }
    alert ("Tu monto final es " + monto_total);
} else {
    alert ("El interes que has introducido no es un numero.");
}


