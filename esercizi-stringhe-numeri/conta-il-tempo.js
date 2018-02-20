/*
  Conta il tempo
  Scrivi un programma che prenda in input un numero di secondi e calcoli la quantità di ore, minuti e secondi corrispondenti, poi stampa il risultato. L'output avrà solo numeri interi.
  Esempio
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.
  http://www.imparareaprogrammare.it
*/

var sec = 12560;
var h = 3600;
var m = 60;
var ore = Math.round(sec/h); //ore arrotondate
var oreInS = h*ore;  //ore arrotondate trasformate in secondi
var secRim = sec-oreInS; //secondi rimanenti dopo la sottrazione delle ore in secondi
var min = Math.round(secRim/m); //minuti arrotondati
var minInS = min*m;  //minuti arrotondati trasformati in secondi
var secResto = secRim-minInS; //resto in secondi

console.log(`${sec} secondi sono:${ore} ora, ${min} minuti e ${secResto} secondi`);
