/*
  Conta il tempo
  Scrivi un programma che prenda in input un numero di secondi e calcoli la quantità di ore, minuti e secondi corrispondenti, poi stampa il risultato. L'output avrà solo numeri interi.
  Esempio
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.
  http://www.imparareaprogrammare.it
*/

var seconds = 12560;
var hour = Math.floor(seconds/3600); //ore arrotondate
var missing = seconds - (hour*3600); //rimanente dei secondi da convertire
var minutes = Math.floor(missing/60); //I minuti arrotondati

var secondsEnd = missing - (minutes*60) //Il resto sono i secondi

console.log(`${seconds} corrispondono a ${hour} ore, ${minutes} minuti e ${secondsEnd} secondi`);
