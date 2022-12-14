/*Visualizzare in pagina 5 numeri casuali. 
Da lì parte un timer di 30 secondi. 
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, 
i numeri che ha visto precedentemente, tramite il prompt(). 
Dopo che sono stati inseriti i 5 numeri,
 il software dice quanti e quali dei numeri da indovinare sono stati individuati.*/

//creo variabili / array

const listCasualNum = [];
const listNum = [];
let casualNum;
let numPrompt;

//Visualizzare in pagina 5 numeri casuali.


//genero numeri casuali con ciclo for
for (let i = 0; i < 5; i++) {
    casualNum = generateRandomNumber(1, 100)

    listCasualNum.push(casualNum)
    document.querySelector('.num').innerText = listCasualNum
}

//stampo array numeri casuali e faccio partire l'alert
console.log(listCasualNum);
alert("Memorizza questi numeri, hai solo 30 secondi!:", listCasualNum);

//creo timer

setTimeout(function () {

    //ciclo for/prompt per chiedere i  5 numeri all'utente
    for (let i = 0; i < listCasualNum.length; i++) {
        numPrompt = prompt("inserisci i numeri visualizzati");
        console.log(numPrompt)
        for (let a = 0; a < listCasualNum.length; a++) {
            if (numPrompt == listCasualNum[a]) {
              listNum.push(numPrompt);
            }
    }
}

    alert("hai indovinato" + listNum.length + "numeri. I numeri indovinati sono:" + listNum)
    console.log(listNum)

}, 30000)


//creo funzione randomnumber
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}