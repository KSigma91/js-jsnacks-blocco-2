// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.

// qui saranno visualizzati i numeri
const listaNumeri = [];

let sommaNumeri = 0;

// faccio la somma dei numeri inseriti
do {
    // chiedo all'utente di inserire un numero
    let numeroUtente = parseInt(prompt("Inserisci il numero: "));
    // stampo il numero selezionato dall'utente
    listaNumeri.push(numeroUtente);

    sommaNumeri += numeroUtente;

    console.log(numeroUtente);

} while (sommaNumeri < 50)

const somma = document.getElementById("mio_id").innerHTML = sommaNumeri;
