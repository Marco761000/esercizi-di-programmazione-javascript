/*
  Maggiore e minore
  Scrivi un programma che prenda quattro numeri in input, stampi in output il maggiore e il minore.
  http://www.imparareaprogrammare.it
*/
var a = 45, b = 2, c = 81, d = 74;

if (a > b && a > c && a > d) {
  console.log(`${a} è il numero maggiore`);
}else if (a < b && a < c && a < d) {
  console.log(`${a} è il numero minore`);
}

if (b > a && b > c && b > d) {
  console.log(`${b} è il numero maggiore`);
}else if (b < a && b < c && b < d) {
  console.log(`${b} è il numero minore`);
}

if (c > a && c > b && c > d) {
  console.log(`${c} è il numero maggiore`);
}else if (c < a && c < b && c < d) {
  console.log(`&{c} è il numero minore`);
}

if (d > a && d > b && d > c) {
  console.log(`${d} è il numero maggiore`);
}else if (d < a && d < b && d < c) {
  console.log(`${d} è il numero minore`);
}
