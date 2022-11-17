/*
    No hay que olvidar todo lo que hemos visto hasta ahora!
    Pero avanzamos...
*/

/*
    const y let
    Mediante esta palabra se pueden declarar constantes, es decir, variables
    a las que no se va a asignar nada nuevo a lo largo del código. Por defecto,
    esta debería ser la mayoría de las declaraciones y solo debería pasarse a
    let en el caso de que se le vaya a asignar algo más de una vez.
*/

const pi = 3.141592;

/*
    No se puede confundir const con algo cuyo valor no cambia nunca.
    const evita que se pueda asignar algo distinto. Pero los arryas
    u objetos pueden variar aunque se hayan declarado como const. Lo
    que no permitirá JavaScript es volver asignarles algo.
*/

const nombres = [];
console.log(nombres);
//nombres = ['Sam'];
//nombres = new Array();
nombres.push('Requete'); //Esto es correcto.
console.log(nombres);
const ultimoNombre = nombres.pop();
console.log(nombres);
console.log(ultimoNombre);


/*
    Con let se definen variables cuyo valor puede volver a ser asignado.
 */
let numero = 0;
numero += 1;
numero = 666;

//console.log(numero);

/*
    Pese a que no dé errores, conviene dejar de utilizar var o
    evitar declarar globales.
 */

/*
    Desestructuración: extracción de valores
    Otra interesante característica de ES6 es la posibilidad de extraer
    determinados valores de arrays y objetos, tal y como se hace en otros
    lenguajes como Perl, Python, etc.
 */

const personaje = ['Sam', 'Gimli', 'Frodo', 'Legolas', 'Pippin'];
const [leal, heroe, , pillo] = personaje;
//console.log(personaje);
//console.log(leal);

//Con los objetos se puede hacer lo mismo.

const masPersonaje = {
    nombre: 'Gandalf',
    apodo: 'El Gris',
    edad: 1024,
    armas: ['Glamdring', 'magia']
};

//console.log(nombre); //error

const {nombre, armas} = masPersonaje;

console.log(masPersonaje);
console.log(nombre);
console.log(armas);

const [espada, poder] = armas;
console.log(espada);

/*
    Atajo para la asignación de propiedades en objetos.
    A la hora de asignar valores a los objetos, se pueden
    utilizar variables.
 */

const nombrePersonaje = 'Legolas';
const raza = "Elfo";
const armasPersonaje = [{tipo: 'arco', cantidad: 1}, {tipo: 'flechas', cantidad: 10}];
const requetePersonaje = {
    nombre: nombrePersonaje,
    raza: raza,
    armas: armasPersonaje,
    edad: 666
};

console.log(requetePersonaje);

/*
    En el caso de que los nombres de variables coincidan
    con el de los campos, se puede resumir la expresión:
 */

const nombrePersonaje2 = 'Legolas';
const raza2 = "Elfo";
const armasPersonaje2 = [{tipo: 'arco', cantidad: 1}, {tipo: 'flechas', cantidad: 10}];
const requetePersonaje2 = {
    nombrePersonaje2,
    raza2,
    armasPersonaje2,
    edad: 666
};

console.log(requetePersonaje2);
//Este tipo de asignación es muy habitual en ES6.



