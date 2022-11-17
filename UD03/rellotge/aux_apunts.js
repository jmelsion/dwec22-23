

let elCrono;

window.onload = function() {
    elCrono = setInterval(crono, 1000);
}

function crono() {

    var laMedaData = new Date();
    var hores = laMedaData.getHours();
    var minuts = laMedaData.getMinutes();
    var segons = laMedaData.getSeconds();

    if(hores > 12) {
        ampm = 'pm';
    } else {
        ampm = 'am'
    }

    if(hores < 10) {hores = '0' + hores;}
    if(minuts < 10) {minuts = '0' + minuts;}
    if(segons < 10) {segons = '0' + segons;}

    var text = document.getElementById('laHora');
    text.innerHTML =    hores + ":" +
                        minuts + ":" +
                        segons + ' ' + ampm;
}