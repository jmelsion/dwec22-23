/*****
 * 1
 ****/
/* Seleccionaremos los elementos des DOM */
/* con querySelector poder elegir cualquier elemento (p, ul, #id, .clase) */
const contenidor = document.querySelector('.contenidor');
/* ahora utilizaremos querySelectorAll pq tenemos varias clases seient.
Nos devuelve algo parecido a un array (node list).
Si utilizásemos querySelector, nos devolvería unicamente el primero*/
/* recuperamos cualquier elemento con la clase seient (combinada o no)  */
//const seients = document.querySelectorAll('.seient');
/* pero realmente solo queremos los asientos que estan en filas (no los
de la leyenda) y que además no estén ocupados */
const seients = document.querySelectorAll('.fila .seient:not(.ocupat)');
/* recuperamos el contador y el total, que deberemos actualizar */
const contador = document.getElementById('contador');
const total = document.getElementById('total');
/* también la lista de selección */
const peliculaSelect = document.getElementById('pelicula');

/* nos interesa recuperar también el precio del ticket inicial
de la lista de selección */
let preuDelTicket = +peliculaSelect.value;

/* si hacemos esto y miramos la consola, comprobaremos que lo hace bien */
 //console.log(preuDelTicket);
 
 //Si miramos ahora el tipo veremos que es una cadena
 //console.log(typeof preuDelTicket);
//para convertirlo en número, podemos hacer un parser o, más fácil,
//ponerle un + delante: const preuDelTicket = +peliculaSelect.value;

/*****
 * 8
 ****/
//Vamos a llamar a la siguiente función (que todavía no hemos creado)
ompleUI();

/*****
 * 3
 ****/
/* creem la funció actualitzaSeleccioSeients */
//Actualizta el total y el contador.
function actualitzaSeleccioSeients() {
    //1r capturems els seients seleccionats
    const seientsSeleccionats = document.querySelectorAll('.fila .seient.seleccionat');
    //console.log(seientsSeleccionats);

    //***************
    //  5
    //***************
    //Haremos tres cosas dentro de este punto 5
    //Copiar los asientos seleccionados en un array
    //Mapear a lo largo del array
    //devolver unos nuevos índices del array

    //Así copiamos nuestro conjunto de asientos seleccionados en un array.
    //ojo! no mete el array tal cual, mete los valores (uno a uno).
    //De esta manera tan sencilla, hemos pasado de un nodeList a un array normal.
    
    //const seientsIndex = [...seientsSeleccionats];

    //Ahora mapeamos, con map, que es como un foreach pero que devuelve un array
    //Ejemplo:
/*     const arr = [1, 2, 3];
    const arr2 = arr.map(function(item) {
        return (item * 2);
    });
    console.log(arr2); */

    const seientsIndex = [...seientsSeleccionats].map(function(seient) {
        //para cada elemento (seient) de los seientsSeleccionats, devuelvo su
        //posición en el array seients. (indexOf devuelve el índice dentro del array)
        return [...seients].indexOf(seient);
    });

    //LO MATEIX AMB FUNCIÓ FLETXA:
    //Como solo hay una línea, podemos quitar las llaves y el return
    //const seientsIndex = [...seientsSeleccionats].map((seient) => [...seients].indexOf(seient));

    //console.log(seientsIndex);

    //Bueeeno, ahora lo que queremos es guardar esto en el localStorage
    //Como lo que queremos guardar es un array, nos aseguramos un formato
    //correcto con JSON.stringify
    localStorage.setItem('seientsSeleccionats', JSON.stringify(seientsIndex));

    //Si ahora refrescamo la página, veremos que igualmente desaparece la información
    //porque no hemos implementado nada para recuperarla, pero si vemos el localStorage
    //en Application, veremos que la información está guardada.

    //Antes de pasar a recupear la información, vamos a guardar más cosas:
    // la película y el precio, punto #6 (en el envento del change del select)

    //***************
    //  FIN 5
    //***************

    //Capturem la longitud de la llista
    const contadorSeientsSeleccionats = seientsSeleccionats.length;
    //console.log(contadorSeientsSeleccionats);

    //Actualitzarem el element contador
    contador.innerText = contadorSeientsSeleccionats;
    //Actualitzarem el element total
    total.innerText = contadorSeientsSeleccionats * preuDelTicket;

    //Ahora tenemos que conseguir que se actualice el precio si cambiamos de peli.
    //para ello, vamos al punto 4
}

/*****
 * 7
 ****/
//Guarda en localStorage el índice y precio de la película seleccionada.
function guardaInfoPelicula(indexPelicula, preuPelicula) {
    localStorage.setItem('indexPeliculaSeleccionada', indexPelicula);
    localStorage.setItem('preuPeliculaSeleccionada', preuPelicula);
}

/*****
 * 9
 ****/
//Recupera info del localStorge y llena la UI
function ompleUI() {
    //Para recuperar los asientos debemos deshacer el JSON.stringify mediante
    //JSON.parse, que nos volverá a un formato array.
    //const seientsSeleccionats = localStorage.getItem('seientsSeleccionats')
    const seientsSeleccionats = JSON.parse(localStorage.getItem('seientsSeleccionats'));

    //console.log(seientsSeleccionats);

    //Miraremos si hay asientos en el localStorage e iteraremos sobre ellos
    if(seientsSeleccionats !== null && seientsSeleccionats.length > 0) {
        seients.forEach((seient, index) => {
            //console.log(seient);
            //console.log(index);
            //Miramos si el index está en seientsSeleccionats
            if(seientsSeleccionats.indexOf(index) > -1) {
                //Si está, le añadimos la clase seleccionat
                seient.classList.add('seleccionat');

                //Ahora, si recargamos, vemos que siguen ahí!
            }
        });
    }

    //Vamos ahora a actualizar el resto de información
    //Índice de la peli seleccionada:
    const indexPeliculaSeleccionada = localStorage.getItem('indexPeliculaSeleccionada');

    //Comprobamos que llegue informado.
    if(indexPeliculaSeleccionada !== null) {
        peliculaSelect.selectedIndex = indexPeliculaSeleccionada;
    }

    //Anem al #10 un moment pq no tenim actualitzats els totals

    const preuPeliculaSeleccionada = localStorage.getItem('preuPeliculaSeleccionada');
    //Comprobamos que llegue informado.
    if(preuPeliculaSeleccionada !== null) {
        preuDelTicket= +preuPeliculaSeleccionada;
    }
}

/*****
 * 2
 ****/
/* creamos un evento
Cuando hago clic en un asiento desocupado, quiero que cambie a seleccionado.
podemos tratar los asientos recuperados como un array y recorrerlos,
pero vamos a trabajar con el contenedor y capturar los clics sobre él.*/

contenidor.addEventListener('click', (e) => {
    /* si hacemos
        console.log(e.target);
    vemos que tenemos el elemento concreto sobre el que se ha hecho click.
        */
    //Vamos a trabajar solo con los asientos, así que hacemos lo siguiente:
    if(e.target.classList.contains('seient')
        && !e.target.classList.contains('ocupat')) {
        // si hacemos esto vemos que ahora console.log(e.target);
        //nos muestra solo elementos con la clase seient (asientos disponibles solo)
        //añadimos el && para que no muestre los ocupados
        //console.log(e.target)

        /* Bueno, qué queremos hacer? asignar la clase seleccionat */
        e.target.classList.toggle('seleccionat');
        //Podemos ver cómo cambia con la consola o elementos

        //Ahora deberíamos poder actualizar el número de entradas y el precio
        //llamamos a una función (que aún no existe)
        actualitzaSeleccioSeients();
    }
});

/*****
 * 4
 ****/
//Evento para la selección de película
//El evento que disparará no es un click, sino un change.
peliculaSelect.addEventListener('change', (e) => {
    //Asignamos a la variable que guarda el precio.
    //añadimos un + para convertirlo en número.
    preuDelTicket = +e.target.value;

    //***************
    //  6
    //***************
    //Podemos guardar el índice dentro del elemento select con selectedIndex
    //con value podremos guardar el precio asociado al elemento
    //console.log(e.target.selectedIndex, e.target.value);
    //cambiamos el console.log por una funcion (luego la creamos, punt #7):
    guardaInfoPelicula(e.target.selectedIndex, e.target.value);

    //***************
    //  FIN 6
    //***************

    //De nuevo llamamos a la función que actualiza los totales.
    actualitzaSeleccioSeients();

    //Ahora nuestra aplicación estaría funcionando bien y comportándose como
    //queremos. Pero si recargamos la página...
    //...perdemos la selección, totales... todo.
    //Implementaremos pues el localStorage... volvemos al punto #3
});

/*****
 * 10
 ****/
//Llamamos a la función actualitzaSeleccioSeients pq es la que
//inicializa los totales con los valores pertinentes
actualitzaSeleccioSeients();