//Guardem les lletres a una cadena.
let a = "a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z";
//Fem que les lletres siguin elements d'un array, aprofitant les comes com a separadors.
let b = a.split(",");

//Bucle per pintar les sortides tipus "1 - a".
for(i = 0; i < b.length; i++) {

    console.log((i + 1) + " - " + b[i].trim());
}

//Bucle per pintar les sortides tipus "26 - aa".
for(i = 0; i < b.length; i++) {

    //Hem d'afegir 26 perque quadri amb el que es demana.
    console.log((i + 1 + 26) + " - a" + b[i].trim());
}