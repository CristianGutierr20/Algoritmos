var arr = [3, 6, 7, 2, 5, 15, 3];
var max = Math.max(...arr);

var new_arr = []; 
for (let x of arr) {
    new_arr.push (parseInt ((x * 10) / max));
}   

for (let i of new_arr){
    var contador = i;
    document.write (ciclo (contador) + "<br>");
}

//Funcion:
function ciclo (contador){
    let car = "+";
    let car2 = car;
    for (let j = 1; j < contador; j++) {
        car = car + car2;  
    } 
    return car
}






