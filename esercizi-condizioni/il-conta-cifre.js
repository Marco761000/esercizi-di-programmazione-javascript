/*
  Il conta cifre
  Scrivi un programma che calcoli quante cifre sono contenute in un numero inserito in input (massimo 9999).
  http://www.imparareaprogrammare.it
*/
//Definisco una variabile n e la inizializzo.
//Dividendo il numero per 10 se il risultato è minore di 1 allora il numero è formato da una cifra
//altrimenti se dividendo il numero per 100, il risultato è minore di 1 allora il numero è formato da due cifre
//altrimenti se dividendo il numero per 1000, il risultato è minore di 1 allora il numero è formato da tre cifre
//altrimenti il numero è formato da quattro cifre


var n = 4864;

if (n/10<1) {
  console.log(`Il numero ${n} è formato da una cifra`);
}
else if (n/100<1) {
  console.log(`Il numero ${n} è formato da due cifre`);
}
else if (n/1000<1) {
  console.log(`Il numero ${n} è formato da tre cifre`);
}
else {
  console.log(`Il numero ${n} è formato da quttro cifre`);
}
