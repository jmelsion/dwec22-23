//Declaració de variables
let nif = ""; //Per a recollir el número de nif
let resto; //Per guardar el càlcul del mòdul del nif i 23.
//Array amb les lletres del nif
let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
let lletraNIF = ""; //Lletra obtinguda amb l'algorisme.
let esCorrecte = false; //Booleà per controlar el bucle while.

while(!esCorrecte) {

    //Anem a pensar que tot sortirà bé.
    esCorrecte = true;

    //Capturem el número de nif introduit per l'usuari.
    nif = prompt("Introdueix el teu número de NIF, sense lletra, per favor.");

    if(isNaN(nif)) {
        //Si la cadena introduida no es correspon amb un número, mostrem un missatge advertint-ho.
        console.log("Introdueixi un valor numèric entre 0 i 99999999");
        //Continuarà el bucle.
        esCorrecte = false;
    }
    else {
        //Passem la cadena obtinguda a número.
        nif = parseInt(nif);
        //Si el número no respeta els límits, mostrem un missatge advertint-ho
        if(nif < 0 || nif > 99999999) {
            console.log("Introdueixi un valor correcte: entre 0 i 99999999");
            //Continuarà el bucle.
            esCorrecte = false;
        }
    }
}

//Calculem el mòdul de la divisió entre el número i 23.
resto = nif%23;

//Aquest resto ens dona la posició del array a consultar.
lletraNIF = letras[resto]
console.log(nif + lletraNIF);