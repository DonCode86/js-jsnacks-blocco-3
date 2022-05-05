//Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.

//creo un array vuoto
let numbersList = [];
let sum = 0;
//chiedo all'utente un numero da inserire nell'array fintantoche' la somma degli elementi < 50.
do {
    let number = Number(prompt("Inserisci un numero da 0 a 50"));

    if (!isNaN(number)) {
        sum += number;
        if (sum < 50) {
            numbersList.push(number)
        }
    }

} while (sum < 50);

console.log(numbersList)