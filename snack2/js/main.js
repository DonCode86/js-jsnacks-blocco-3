//Fai inserire un numero, che chiameremo N, all’utente.
let N = Number(prompt("Inserisci un numero"));
if (isNaN(N)) {
    N = Number(prompt("Devi inserire un numero!!!!"))
}
for (let i = 0; i < N; i++) {
    const array = [];
    for (let j = 0; j < 10; j++) {
        array.push(Math.floor(Math.random() * 100) + 1);
    }
    console.log(array);
}

//Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100. Ogni volta che ne crei uno, stampalo a schermo.