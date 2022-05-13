// qui verranno visualizzati i numeri randomici
const listaNumeri = [];
const numeriUtente = document.getElementById("mio_id");

// genero i numeri randomici
for (i = 0; i < 10; i++){
    listaNumeri.push(Math.floor(Math.random() * 100) + 1);   
}
numeriUtente.append(listaNumeri);
console.log(listaNumeri);