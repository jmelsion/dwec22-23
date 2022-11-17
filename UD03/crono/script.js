

let elCrono;
let laMedaData = new Date();

//Capturem els elements HTML amb els quals treballarem
let text = document.getElementById('laHora');
let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reiniciar = document.getElementById('reiniciar');

//Events
start.addEventListener('click', function() {
                                    elCrono = setInterval(crono, 1000);
                                    this.disabled = true;
                                    stop.disabled = false;
                                }, false);

stop.addEventListener('click', function() {
                                    clearInterval(elCrono);
                                    this.disabled = true;
                                    start.disabled = false;
                                    start.innerHTML = 'Continuar';
                                    reiniciar.disabled = false;
                                }, false);

reiniciar.addEventListener('click', function() {
                                    setTimeout(reiniciarCrono, 5000)
                                    this.disabled = true;
                                    //start.disabled = false;
                                    //start.innerHTML = 'Start';
                                    stop.disabled = true;
                                }, false);

laMedaData.setHours(0, 0, 0, 0);

text.innerHTML = "00:00:00";

/* window.onload = function() {
    elCrono = setInterval(crono, 1000);
} */

function crono() {

    //let laMedaData = new Date();
    
    //laMedaData.setMinutes = 0;
    //laMedaData.setSeconds = 0;
    let hores = laMedaData.getHours();
    let minuts = laMedaData.getMinutes();
    let segons = laMedaData.getSeconds();

    segons = segons + 1;

    if(segons == 60) {
        segons = 0;
        minuts = minuts + 1;
        laMedaData.setMinutes(minuts);
    }

    laMedaData.setSeconds(segons);



    if(hores > 12) {
        ampm = 'pm';
    } else {
        ampm = 'am'
    }

    if(hores < 10) {hores = '0' + hores;}
    if(minuts < 10) {minuts = '0' + minuts;}
    if(segons < 10) {segons = '0' + segons;}

    //let text = document.getElementById('laHora');
    text.innerHTML =    hores + ":" +
                        minuts + ":" +
                        segons + ' ' + ampm;
}

function reiniciarCrono() {

    laMedaData.setHours(0, 0, 0, 0);
    text.innerHTML = "00:00:00";
    start.disabled = false;
    start.innerHTML = 'Start';
}