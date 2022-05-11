// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.

// qui saranno visualizzati i numeri
const myNum = [];

const totUser = 0;
debugger;
// faccio la somma dei numeri inseriti
do {
    // chiedo all'utente di inserire i numeri
    let numUser = parseInt(prompt("Inserisci il numero: "));

    myNum.push(numUser);

    totUser += parseInt(numUser);

    console.log(myNum);

} while (totUser < 50)

// let result = document.getElementById("mio_id").value;
