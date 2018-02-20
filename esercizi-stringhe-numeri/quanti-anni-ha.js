/*
  Quanti anni ha?
  Scrivi un programma che prenda in input un anno di nascita e determini l'età della persona, calcola anche quanti anni sono necessari per raggiungere i 100. Stampa in output entrambi i risultati.
  http://www.imparareaprogrammare.it
*/

var annoNascita = 1976;
var annoIncorso = 2028;

var anniPersona = annoIncorso - annoNascita;
var anniDaraggiungere = 200;
var anniMancanti = anniDaraggiungere - anniPersona;

console.log(`Mario ha ${anniPersona} anni. Per arrivare a ${anniDaraggiungere}, gli mancano ${anniMancanti} anni.`);
