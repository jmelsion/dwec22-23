/*
    Se trata de una secuencia infinita de números naturales;
    a partir del 0 y el 1, se van sumando a pares, de manera que cada
     número es igual a la suma de sus dos anteriores:
     0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55…

     Se trata de realizar una función recursiva que muestre
     esta sucesión hasta un determinado número.
*/


function fibonacci(sucesion, limite) {
    
    let arrSucesion = sucesion.split(",");
    let suma = +arrSucesion[arrSucesion.length - 1] + (+arrSucesion[arrSucesion.length - 2]);
    //console.log(arrSucesion);

    if(suma > limite) {
        return sucesion;
    }
    else {        
        sucesion += ',' + suma;
        return fibonacci(sucesion, limite);
    }

}

let limite = 55;
let sucesion = fibonacci("0,1", limite);
console.log('Successió de Fibonacci fins la número ' + limite + ' és: ' + sucesion);