function formatejaVocal(lletra) {
    
    let vocal = lletra;

    switch(lletra) {
        case "á":
            vocal = "a";
            break;
        case "à":
            vocal = "a";
            break;
        case "é":
            vocal = "e";
            break;
        case "è":
            vocal = "e";
            break;
        case "í":
            vocal = "i";
            break;
        case "ï":
            vocal = "i";
            break;
        case "ó":
            vocal = "o";
            break;
        case "ò":
            vocal = "o";
            break;
        case "ú":
            vocal = "u";
            break;
        case "ü":
            vocal = "u";
            break;
    }

    return vocal;
}

function numeroAleatori(min, max) {
    let margen = max - min;
    let numero = Math.round(Math.random() * margen) + min;
    return numero;
}