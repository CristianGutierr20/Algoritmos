var meses = 1 * prompt ("Introduce la cantidad de meses como tope de la operacion.");

var conejos = fibonacci (meses);

alert ("Al cabo de " + meses + " meses tendras " + conejos + " conejos.");

function fibonacci (meses) {
    if (meses == 1 || meses == 2){
        return 1
    } else {
        return fibonacci (meses - 1) + fibonacci (meses - 2)
    }
}
