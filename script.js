const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
// context - pobieranie metod 2d do obiektu kontekstu

// określanie wielkości canvasu
canvas.width = 1000;
canvas.height = 500;

const canWid = canvas.width;
const canHei = canvas.height;

function table() {
  ctx.fillStyle = 'royalblue';
  ctx.fillRect(0, 0, 1000, 500)
  // linie w środku
}
table()