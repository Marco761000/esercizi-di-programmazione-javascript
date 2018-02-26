/*
  Chi l'azzecca?
  Scrivi un programma che generi un numero casuale compreso tra 1 e 100 (zero escluso).
  Successivamente prendi in input altri due numeri di due ipotetici utenti, e comunica se uno dei due ha azzeccato il numero casuale, in caso contrario quale dei due si è avvicinato di più al numero.
  Hint: Per generare un numero casuale utlizza la funzione javascript random, che restituisce un intervallo compreso tra 0 e 1 che necessita di essere convertito per il tuo intervallo.
  http://www.imparareaprogrammare.it
*/
// Genero un numero casuale, creando variabile casualNumber tra 1 e 100, con .random,miltiplicato per 100 e arrotondadolo
// Stampo il risultato della variabile casualNumber
// Creo due variabili(primoNum, secondoNum), con la scelta del numero dei 2 utenti
// Creo due variabili (primo, secondo), con il risultato della differenza tra il numero casuale e i numeri dei 2 utenti
// Creo variabile (min) trovando il numero più piccolo tra primo e secondo(risultato della differenza tra numero casuale e il numero scelto dai 2 utenti)
//
// Se il numero scelto dal primo utente è uguale a quello cusuale, stampa 'Utente 1 hai azzeccato il numero'
// Altrimenti se il numero scelto dal secondo utente è uguale a quello cusuale, stampa 'Utente 2 hai azzeccato il numero'
// Altrimenti se il risultato della variabile (min) è uguale alla variabile (primo), stampa 'Utente 1 si è avvicinato di più'
// Altrimenti stampa 'Utente 2 si è avvicinato di più')


var casualNumber = Math.round(100*Math.random());
console.log('il numero casuale è ' + casualNumber);

var primoNum = 4;
var secondoNum = 43;

var primo = Math.abs(casualNumber-primoNum);
var secondo = Math.abs(casualNumber-secondoNum);

var min = Math.min(primo,secondo);


if (primoNum == casualNumber) {
  console.log('Utente 1 hai azzeccato il numero');
}
else if (secondoNum == casualNumber) {
  console.log('Utente 2 hai azzeccato il numero');
}

else if (min==primo) {
  console.log('Utente 1 si è avvicinato di più');
}
else  {
  console.log('Utente 2 si è avvicinato di più');
}
