/*
  Fai il professore
  Scrivi un programma che converte un voto numerico in un giudizio seguendo questi parametri:
    v < 18:  insufficiente
    18 < = v <21:  sufficiente
    21 < = v <24:  buono
    24 < = v <27:  distinto
    27 < = v <29:  ottimo
    v = 30:  eccellente
  Utilizza costrutto If.

  Variante
  Realizzare una versione con il costrutto Switch-Case.
  http://www.imparareaprogrammare.it
*/
var v = 24;

if (v<18) {
  console.log('insufficiente');
}
else if (v>=18 && v<21) {
  console.log('sufficiente');
}
else if (v>=21 && v<24) {
  console.log('buono');
}
else if (v>=24 && v<27) {
  console.log('distinto');
}
else if (v>=27 && v<=29) {
  console.log('ottimo');
}
else if (v == 30) {
  console.log('eccellente');
}
