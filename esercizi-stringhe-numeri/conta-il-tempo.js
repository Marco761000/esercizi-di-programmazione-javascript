/*
  Conta il tempo
  Scrivi un programma che prenda in input un numero di secondi e calcoli la quantità di ore, minuti e secondi corrispondenti, poi stampa il risultato. L'output avrà solo numeri interi.
  Esempio
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.
  http://www.imparareaprogrammare.it
*/

var sec = 4022;
var h = 3600;
var m = 60;
var s = 1;
var ore = Math.round(sec/h);
var hs = s*h;
var secDopoOra = sec-hs;
var secRimM = Math.round(secDopoOra/m);
var minRimS = secRimM*m;
var secRim = secDopoOra-minRimS;

console.log(`${sec} secondi sono:${ore} ora, ${secRimM} minuti e ${secRim} secondi`);
