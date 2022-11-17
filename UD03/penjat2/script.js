const contenidorParaulaOculta = document.getElementById("contenidorParaulaOculta");
const contenidorErrors = document.getElementById("contenidorErrors");
const contenidor = document.getElementById("contenidor");
//NodeList con las teclas no utilizadas.
const lletresTeclat = document.querySelectorAll('.contenidorLletres .lletra:not(.fallada).lletra:not(.encertada)');
let paraulaOculta = "";
let numeroErrores = 0;
const numeroErrorMaximo = 7;
let juegoTerminado = false;

console.log(lletresTeclat);

const arrParaulesDelJoc = ["Hola", "Adiós", "Menorca", "Ramis", "Mahón", "Cucaña"];
const arrGent = ["humanidad", "humano", "persona", "gente", "hombre", "mujer", "bebé", "niño", "niña", "adolescente", "adulto", "adulta", "anciano", "anciana", "don", "doña", "señor", "señora", "caballero", "dama", "individuo"];
const arrCosHumaSalut =  [];
const arrFamilia = [];
const arrVida = [];
const arrGeografia = [];
const arrAnimals = [];
const arrPlantesAliments = [];
const arrTemps = [];
const arrEspai = [];
const arrMaterials = [];
const arrMesures = [];
const arrSocietat = [];
const arrEconomia = [];

iniciaJoc();

function iniciaJoc() {
    
    let index = numeroAleatori(0, arrParaulesDelJoc.length - 1);
    paraulaOculta = arrParaulesDelJoc[index];
    console.log(paraulaOculta);
    pintaInici(paraulaOculta);
    numeroErrores = 0;
    juegoTerminado = false;
}

function pintaInici(paraula) {

    let espais_ocults = "";

    for( index in paraula) {
        espais_ocults += "_ ";
    }

    contenidorParaulaOculta.innerText = espais_ocults;
}

function comprovaLletra(lletraTeclat) {

    //Array que conté els indexos de coincidència de la lletra
    //introduida per teclat a dins de la paraulaOculta.
    let indexosParaulaOculta = [];

    for(index in paraulaOculta) {
        if(formatejaVocal(paraulaOculta[index].toLowerCase()) == lletraTeclat.toLowerCase()) {
            indexosParaulaOculta.push(index);
        }
    }

    return indexosParaulaOculta;
}

function actualitzaJoc(indexosParaula) {

    let espais_ocults = "";
    let paraulaJugador = contenidorParaulaOculta.innerText.split(" ");
    let indexPerActualitzar = -1;
    let numeroEspaisLliures = 0;

    for(index in indexosParaula) {
        indexPerActualitzar = indexosParaula[index];
        paraulaJugador[indexPerActualitzar] = paraulaOculta[indexPerActualitzar];
    }

    for(index in paraulaJugador) {
        espais_ocults += paraulaJugador[index] + " ";
        numeroEspaisLliures += paraulaJugador[index].trim() == "_" ? 1 : 0;
    }

    juegoTerminado = numeroEspaisLliures == 0;

    contenidorParaulaOculta.innerText = espais_ocults;
}

//Evento para el click sobre las sillas.
contenidor.addEventListener('click', (e) => {
    //console.log(e.target);
    let indexParaula = [];

    if(
        e.target.classList.contains('lletra') && 
        !e.target.classList.contains('fallada') && 
        !e.target.classList.contains('encertada') &&
        !juegoTerminado) {

            indexParaula = comprovaLletra(e.target.innerText);

            if(indexParaula != null && indexParaula.length > 0) {
                e.target.classList.toggle('encertada');
                actualitzaJoc(indexParaula);
            }
            else {
                e.target.classList.toggle('fallada');
                numeroErrores += 1;
                contenidorErrors.innerText = "Has comès " + numeroErrores;
                contenidorErrors.innerText += (numeroErrores > 1) ? " errors" : " error";
                juegoTerminado = numeroErrores >= numeroErrorMaximo;
            }

        //updateSelectedCount();
    }
})
