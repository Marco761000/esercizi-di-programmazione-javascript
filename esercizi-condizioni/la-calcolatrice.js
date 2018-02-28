/*
  La calcolatrice
  Scrivi un programma che prenda tre input:
    - Due numeri
    - Una stringha che identifichi l'operazione da eseguire, es: "somma"
  Le operazioni supportate sono le suguenti:
    somma => +
    sottrazione => -
    moltiplicazione => *
    divisione => /
    modulo (solo tra interi) => %
    potenza => ^
    media => m
  Utilizza il costrutto Switch-Case mediante acquisizione di caratteri.
  http://www.imparareaprogrammare.it
*/
var a = 4;
var b = 2;
var operazione = 'moltiplicazione';
var soluzione;

switch (operazione) {
  case 'somma':
  soluzione = a+b;
break;
  case 'sottrazione':
  soluzione = a-b;
break;
  case 'moltiplicazione':
  soluzione = a*b;
break;
  case 'divisione':
  soluzione = a/b;
break;
  case 'modulo':
  soluzione = a%b;
break;
  case 'potenza':
  soluzione = (a)**b;
break;
  case 'media':
  soluzione = (a+b)/2;
break;
}
