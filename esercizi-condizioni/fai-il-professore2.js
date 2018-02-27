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
var v = 20;

switch (v) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
  case 7:
  case 8:
  case 9:
  case 10:
  case 11:
  case 12:
  case 13:
  case 14:
  case 15:
  case 16:
  case 17:
    console.log('insufficiente');
    break;
  case 18:
  case 19:
  case 20:
    console.log('sufficiente');
    break;
  case 21:
  case 22:
  case 23:
    console.log('buono');
    break;
  case 24:
  case 25:
  case 26:
    console.log('distinto');
    break;
  case 27:
  case 28:
  case 29:
    console.log('ottimo');
    break;
  case 30:
    console.log('eccelente');
    break;
}
