/*Visualizzare in pagina 5 numeri casuali. 
Da lì parte un timer di 30 secondi. 
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, 
i numeri che ha visto precedentemente, tramite il prompt(). 
Dopo che sono stati inseriti i 5 numeri,
 il software dice quanti e quali dei numeri da indovinare sono stati individuati.*/

 //creo variabili / array

 const listCasualNum =[];
 const listNum = [];
 let casualNum;
 let numPrompt;

 //genero numeri casuali con ciclo for
 for (let i = 0; i < 5; i++) {
     casualNum = generateRandomNumber(1, 100)
     console.log(casualNum);
    listCasualNum.push(casualNum)
    document.querySelector('.num').innerText = listCasualNum
 }

 //creo funzione randomnumber
 function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }