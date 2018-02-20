/*
  Conta il tempo
  Scrivi un programma che prenda in input un numero di secondi e calcoli la quantità di ore, minuti e secondi corrispondenti, poi stampa il risultato. L'output avrà solo numeri interi.
  Esempio
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.
  http://www.imparareaprogrammare.it
*/

var sec = 7480;
var ore = Math.floor(sec/3600); //ore arrotondate
var secRim = sec-(ore*3600); //secondi rimanenti dopo la sottrazione delle ore in secondi
var min = Math.floor(secRim/60); //minuti arrotondati
var secResto = secRim - (min*60); //resto in secondi

console.log(`${sec} secondi sono:${ore} ora, ${min} minuti e ${secResto} secondi`);
