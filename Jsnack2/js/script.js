// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.

// qui saranno visualizzati i numeri
const myNum = [];

// chiedo all'utente di inserire i numeri
let numUser = prompt("Inserisci il numero: ");

// faccio la somma dei numeri inseriti
do {

    myNum.push(numUser);
    console.log(myNum);
    
} while (myNum < 50) {

}