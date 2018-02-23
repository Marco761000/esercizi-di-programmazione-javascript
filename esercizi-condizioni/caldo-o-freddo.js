/*
  Caldo o freddo
  Scrivi un programma che prenda in input sette valori relativi alle temperature della settimana e stabilisca la giornata più calda e quella più fredda.
  http://www.imparareaprogrammare.it
*/
var lunedì=3;
var martedì=1;
var mercoledì=5;
var giovedì=8;
var venerdì=2;
var sabato=10;
var domenica=7;

var max=Math.max(lunedì,martedì,mercoledì,giovedì,venerdì,sabato,domenica);
var min=Math.min(lunedì,martedì,mercoledì,giovedì,venerdì,sabato,domenica);

var caldo='lunedì';
var freddo='lunedì';

switch(max) {
case max=lunedì:
caldo='lunedì';
break;
case max=martedì:
caldo='martedì';
break;
case max=mercoledì:
caldo='mercoledì';
break;
case max=giovedì:
caldo='giovedì';
break;
case max=venerdì:
hcaldo='venerdì';
break;
case max=sabato:
caldo='sabato';
break;
case max=domenica:
caldo='domenica';
break;
}

switch(min) {
case min=lunedì:
freddo='lunedì';
break;
case min=martedì:
freddo='martedì';
break;
case min=mercoledì:
freddo='mercoledì';
break;
case min=giovedì:
freddo='giovedì';
break;
case min=venerdì:
freddo='venerdì';
break;
case min=sabato:
freddo='sabato';
break;
case min=domenica:
freddo='domenica';
break;
}

console.log('La giornata più calda è ' + caldo);
console.log('La giornata più fredda è ' + freddo);
