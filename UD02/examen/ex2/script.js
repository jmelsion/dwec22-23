//Guadarem en una constant el nom clau.
const personatge = "John Nieve";

//Declaració de variables.
let resposta = ""; //Guardarà el text introduit per prompt.
let posicio = -1; //Si la paraula cercada hi és, guardarà la posició d'aquesta.
let permis = false; //Booleà per controlar el bucle while.

//Mentres no obtinguem el permí, aquí ens quedarem.
while(!permis) {

    //Inicialitzem posició per assegurar que no tenim resultats no desitjats.
    posicio = -1;    

    //Capturem la resposta de l'usuari.
    resposta = prompt("Escriu el NOM i el COGNOM d'algún personatge (John Nieve).");

    //Passem la resposta a minúscules i cerquem la posició del nom.
    posicio = resposta.toLowerCase().indexOf("john");

    //Mirem si està el nom
    if(posicio != -1) {
        //Si està el nom cercarem el cognom
        posicio = -1;
        //Passem la resposta a minúscules i cerquem la posició del cognom.
        posicio = resposta.toLowerCase().indexOf("nieve");

        //Mirem si està el cognom
        if(posicio != -1) {
            //Si tambè està el cognom, mostrem al benvinguda i sortim.
            //alert("Benvingut a la pàgina web!");
            document.write("<b>Benvingut a la pàgina web!   </b>")
            permis = true;
        }
        else {
            //Mostrem el missatge d'error pertinent
            alert("Et falta el cognom.");
        }
    }
    else
    {
        //El nom no està, mirem si està el cognom.
        //Passem la resposta a minúscules i cerquem la posició del cognom.
        posicio = resposta.toLowerCase().indexOf("nieve");
        if(posicio != -1) {
            //El cognom està, mostrem el missatge pertinent
            alert("Et falta el nom.");
        }
        else {
            //Si tampoc està el cognom mostrem el missatge pertinent
            alert("ERROR, intenta-ho de nou.");
        }
    }
}