var num1 = 1 * prompt ("Introduce un numero");

var num2 = 1 * prompt ("Introduce otro numero");

result = 0;

if (num1 <= 0 || num2 <= 0) {
    alert ("ERROR (Los dos numeros deben ser positivos)");
} else {
var i = 0;
    while (i < num2){
        result += num1;
        i++;
    }
    alert ("Este es el resultado " + result);
}



