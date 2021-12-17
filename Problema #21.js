var matriz = [1, 2, 3, 4, 6];
var sum = 6;
function searchPair(matriz, sum) {
    var i = 0;
    var j = matriz.length - 1;
    while (i < j) {
        if (matriz[i] + matriz[j] == sum) {
            return [i, j];
        } else if (matriz[i] + matriz[j] < sum) {
            i++;
        } else {
            j--;
        }
    }
}
console.log(searchPair(matriz, sum));
