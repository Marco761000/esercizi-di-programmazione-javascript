/*
  Caldo o freddo
  Scrivi un programma che prenda in input sette valori relativi alle temperature della settimana e stabilisca la giornata più calda e quella più fredda.
  http://www.imparareaprogrammare.it
*/
var a = 12;
var b = 4;
var c = 13;
var d = 5;
var e = 10;
var f = 8;
var g = 2;

if (a<b && a<c && a<d && a<e && a<f && a<g) {
  console.log('Il giorno della settimana più freddo è Lunedì');
}
else if (b<a && b<c && b<d && b<e && b<f && b<g) {
  console.log('Il giorno della settimana più freddo è Martedì');
}
else if (c<a && c<b && c<d && c<e && c<f && c<g) {
  console.log('Il giorno della settimana più freddo è Mercoledì');
}
else if (d<a && d<b && d<c && d<e && d<f && d<g) {
  console.log('Il giorno della settimana più freddo è Giovedì');
}
else if (e<a && e<b && e<c && e<d && e<f && e<g) {
  console.log('Il giorno della settimana più freddo è Venerdì');
}
else if (f<a && f<b && f<c && f<d && f<e && f<g) {
  console.log('Il giorno della settimana più freddo è Sabato');
}
else {
  console.log('Il giorno della settimana più freddo è Domenica');
}


if (a>b && a>c && a>d && a>e && a>f && a>g) {
  console.log('Il giorno della settimana più caldo è Lunedì');
}
else if (b>a && b>c && b>d && b>e && b>f && b>g) {
  console.log('Il giorno della settimana più caldo è Martedì');
}
else if (c>a && c>b && c>d && c>e && c>f && c>g) {
  console.log('Il giorno della settimana più caldo è Mercoledì');
}
else if (d>a && d>b && d>c && d>e && d>f && d>g) {
  console.log('Il giorno della settimana più caldo è Giovedì');
}
else if (e>a && e>b && e>c && e>d && e>f && e>g) {
  console.log('Il giorno della settimana più caldo è Venerdì');
}
else if (f>a && f>b && f>c && f>d && f>e && f>g) {
  console.log('Il giorno della settimana più caldo è Sabato');
}
else {
  console.log('Il giorno della settimana più caldo è Domenica');
}
