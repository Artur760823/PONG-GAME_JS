const canvas = document.querySelector('canvas');
// Przypisnie kontekstu graficznego-nowe właściwości i metody, do ktorych odwołujemy się za pomocą obiektu CTX
const ctx = canvas.getContext('2d');
// context - pobieranie metod 2d do obiektu kontekstu

// określanie wielkości canvasu
canvas.width = 1000;
canvas.height = 500;

const canWid = canvas.width;
const canHei = canvas.height;

function table() {
  ctx.fillStyle = 'royalblue';
  // ustawiamy kolor na royalblue
  ctx.fillRect(0, 0, canWid, canHei)
  // Metoda fillRect wymaga podania 4 argumentów. Pierwsze dwa to parametry startowe na osi x i y. Drugie dwa to szerokść (oś x) i wysokośći (oś y).
  // Lewy góry róg to parametr (0,0) a szerokość w tym przypadku 1000px (taką ma zmienna canWid) i wysokość 500px (bo taką ma zmienna canHei)
  // linie w środku

}
table()