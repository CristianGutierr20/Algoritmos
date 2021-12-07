var a = parseInt (prompt ("Introduce los valores que quieres que tenga A (Catetos)."));

    var b = parseInt (prompt ("Introduce los valores que quieres que tenga B (Catetos)."));

    var c = parseInt (prompt ("Introduce los valores que quieres que tenga C (Hipotenusa)."));
        

    if (a ** 2 + b ** 2 === c ** 2)
    {
        document.write ("<h2>El<strong> " + a + ", " + b +" y "+ c + " </strong>son numeros de pitagoras.</h2>");
    } else {
        document.write ("<h2>No son numeros de pitagoras.</h2>");
    }
