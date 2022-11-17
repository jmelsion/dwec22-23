/* (ver las funciones auxiliares al final del script) */

/*
    En JavaScript anterior a ES6 no existen las clases, pero sí los objetos.
    Estos son estructuras que se crean entre llaves.
*/

let objetoVacio = {};

let unUsuario = {
    login : 'requete',
    password: 'boquepasa'
};

//console.log (unUsuario);
//console.log(typeof unUsuario); // Object

//Hará referencia a lo mismo!
otroUsuario = unUsuario;
otroUsuario.login = 'root';
otroUsuario['password'] = '1234';

//console.log('Un: ' + unUsuario.login);
//console.log('Otro: ' + otroUsuario.login);

/*
    Claves y comillas

    Para las claves (del par clave/valor) se pueden omitir las comillas,
    a menos que necesitemos escribir caracteres no ASCII, caracteres especiales,
    espacios en blanco, etc.
*/

let unCliente = {
    nombre: 'Jander Clander',
    'dirección del cliente': 'c/ Desconocida',
    '-+-+-+': 'wtf',
    pagos: {
        tipo: 'Visa',
        'numero de la tarjeta': '747474747',
        'fecha de caducidad de la tarjeta': 'nunca'
    }
};

//console.log(unCliente);

//muestraCamposValores(unCliente);

unCliente['nombre'] = 'Crispín';
unCliente['pagos']['fecha de caducidad de la tarjeta'] = 'mañana';

//console.log(typeof unCliente.pagos);

//muestraCamposValores(unCliente);

/*
    Métodos como datos
    Si se necesita que JavaScript se comporte como los objetos de otros lenguajes,
    se le debe añadir funciones o métodos. Es muy sencillo, ya que una función es
    como otro tipo de dato.
*/

let estudiante = {
    id: 2,
    nombre: 'Joan',
    diHola: function() {
        return 'Hola';
    }
};

//console.log (estudiante);
//console.log( estudiante.diHola());

/*
    Añadir métodos
    JavaScript es un lenguaje interpretado y débilmente tipado, pero cuidado:
    no se está tratando con clases (aún), sino con objetos. Por lo tanto, si se
    quiere añadir atributos o funciones a un objeto se puede usar la propiedad
    prototype.
*/

estudiante.edad = 28;
estudiante.diaAdios = function() {
    return 'Adiós';
};

//console.log (estudiante);
//console.log( estudiante.diaAdios());

/*
    this
    Se refiere al objeto actual. Resulta de utilidad cuando necesitamos referirnos
    a nuestras propiedades en las funciones del objeto.
*/

let factura = {
    descripcion: 'Factura de ejemplo',
    precio: 100.00,
    iva: 21.00,
    subtotal: function() {
        return this.precio;
    },
    total: function() {
        return this.precio + ((this.precio * this.iva) / 100);
    }
};

console.log (factura);
console.log( factura.total());

/* Funciones auxiliares */
function muestraCamposValores(miObjeto) {
    for(campo in miObjeto) {
        //console.log(typeof miObjeto[campo]);
        if(typeof miObjeto[campo] == 'object') {
            muestraCamposValores(miObjeto[campo]);
        }
        else {
            console.log(campo + ': ' + miObjeto[campo]);
        }
    }
    console.log("");
}