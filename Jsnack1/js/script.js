// qui verranno visualizzati i numeri randomici
let numRandom = [];

const myNum = document.getElementById("mio_id");

// genero i numeri randomici
while (numRandom.length < 10) {

    let numGen = Math.floor(Math.random() * 100) + 1;

    if (numRandom.includes(numGen) == false) {
        numRandom.push(numGen);
    }

    console.log(numGen);
}