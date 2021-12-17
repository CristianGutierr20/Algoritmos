var array = [2, 3, 3, 3, 6, 9, 9];
function eliminarDuplicados(array) {
    var i = 0;
    var j = 1;
    var aux = 0;
    while (j < array.length) {
        if (array[i] == array[j]) {
            j++;
        } else {
            i++;
            array[i] = array[j];
            j++;
        }
    }
    aux = i + 1;
    return aux;
}
console.log(eliminarDuplicados(array));
