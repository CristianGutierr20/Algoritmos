var array_a = [ 6, 5, 4, 3, 2, 1];
var array_b = [ 1, 3, 5, 7, 9];
var array_c = [ 1, 3, 5, 7, 9, 7, 5, 3, 1];

let valor;

// A)
document.write ("<strong><h2>A)</h2></strong>");
for (valor of array_a){
    document.write (ciclos (valor) + "<br>");
}

// B)
document.write ("<strong><h2>B)</h2></strong>");
for (valor of array_b){
    document.write (ciclos (valor) + "<br>");
}

// C)
document.write ("<strong><h2>C)</h2></strong>");
for (valor of array_c){
    document.write (ciclos (valor) + "<br>");
}

function ciclos (contador){
    let y = "*";
    let x = "*";
    for (i = 1 ; i < contador ; i++){
        x = x + y;
    }
    return x
}


