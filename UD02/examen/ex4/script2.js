
let numero = "";

//Agafa le 
function capturaNumero() {
    //numero += this.innerHTML;
    numero += this.value;
    console.log(numero);
}

//Generem els events click pels botons de números.
//Tots ells cridaràn a la funció capturaNumero.
document.getElementById("ceroId").addEventListener("click", capturaNumero, false);
document.getElementById("unoId").addEventListener("click", capturaNumero, false);
document.getElementById("dosId").addEventListener("click", capturaNumero, false);
document.getElementById("tresId").addEventListener("click", capturaNumero, false);
document.getElementById("quatreId").addEventListener("click", capturaNumero, false);
document.getElementById("cincId").addEventListener("click", capturaNumero, false);
document.getElementById("sisId").addEventListener("click", capturaNumero, false);
document.getElementById("setId").addEventListener("click", capturaNumero, false);
document.getElementById("vuitId").addEventListener("click", capturaNumero, false);
document.getElementById("nouId").addEventListener("click", capturaNumero, false);

//Generem l'event click pel botó "mostrar".
//Cridarà a la funció nifAmbLletra.
document.getElementById("mostrar").addEventListener("click", nifAmbLletra, false);

function nifAmbLletra() {
    //Declaració de variables
    let nif = ""; //Per a recollir el número de nif
    let resto; //Per guardar el càlcul del mòdul del nif i 23.
    //Array amb les lletres del nif
    let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    let lletraNIF = ""; //Lletra obtinguda amb l'algorisme.

    //Capturem l'element HTML per poder donar feedback a l'usuari.
    feedBack = document.getElementById("feedback");

    //Capturem el número de nif introduit per l'usuari.
    nif = numero;

    if(isNaN(nif) || nif.trim() == "") {
        //Si la cadena introduida no es correspon amb un número, mostrem un missatge advertint-ho.
        feedBack.innerHTML = "Introdueixi un valor numèric entre 0 i 99999999";
    }
    else {
        //Passem la cadena obtinguda a número.
        nif = parseInt(nif);
        //Si el número no respeta els límits, mostrem un missatge advertint-ho
        if(nif < 0 || nif > 99999999) {
            feedBack.innerHTML = "Introdueixi un valor correcte: entre 0 i 99999999";
        }
        else {
            //Calculem el mòdul de la divisió entre el número i 23.
            console.log("A: " + nif);
            resto = nif%23;
            console.log("B: " + nif);

            //Aquest resto ens dona la posició del array a consultar.
            lletraNIF = letras[resto]
            feedBack.innerHTML = nif + lletraNIF;
        }
    }

    //Reiniciem el número:
    numero = "";
}