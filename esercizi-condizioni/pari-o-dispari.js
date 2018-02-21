/*
  Pari o dispari?
  Scrivi un programma che prenda in input un numero intero e restituisca 0 se è pari o 1 se è dispari.
  http://www.imparareaprogrammare.it
*/
var n = 15;
var risultato = n%2; //assegno alla variabile n il modulo %2
if (risultato > 0) { //se il risultato da resto, quindi il numero non è divisibile per 2, e quindi è maggiore di 0
  console.log(1);    //allora restituisce 1
}else {              //altrimenti
  console.log(0);    //il numero non da resto, è divisibile per 2, è pari e restituisce 0
}
