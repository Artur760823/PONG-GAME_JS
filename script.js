const canvas = document.querySelector('canvas');
// Przypisnie kontekstu graficznego-nowe właściwości i metody, do ktorych odwołujemy się za pomocą obiektu CTX
const ctx = canvas.getContext('2d');
// context - pobieranie metod 2d do obiektu kontekstu

// określanie wielkości canvasu
canvas.width = 1000;
canvas.height = 500;

const canWid = canvas.width;
const canHei = canvas.height;

// opisujemy piłkę i jej pozycję początkową
const ballSize = 20; //wielkość piłki
let ballX = canWid / 2 - ballSize;
let ballY = canHei / 2 - ballSize;

// rysujemy rakietki - początkowa pozycja paletek
const paddleHeight = 100;
const paddleWidth = 20;

// określamy pozycję poziomą paletek
const playerX = 70;
const iaPaddleX = 910; //czyli jesto 70 + 20 szerokości paletki gracza - szerokość boiska (rysujemy w prawo)

// określamy pozycję początkową paletek w pionie
let playerY = 200;
let iaPaddleY = 200;

const lineWidth = 6;
const lineHeight = 18;

// Prędkość piłki
let ballSpeedX = 1;
let ballSpeedY = 1;

// Funkcje
const ball = () => {
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(ballX, ballY, ballSize, ballSize);

  ballX += ballSpeedX;
  ballY += ballSpeedY;

  // Określamy granice poruszania się piłki i odbicie
  if (ballY <= 0 || ballY + ballSize >= canHei) {
    ballSpeedY = -ballSpeedY;
    speedUp();
  }
  if (ballX <= 0 || ballX + ballSize >= canWid) {
    ballSpeedX = -ballSpeedX;
    speedUp();
  }
}
const table = () => {
  ctx.fillStyle = 'royalblue';
  // ustawiamy kolor na royalblue
  ctx.fillRect(0, 0, canWid, canHei)
  // Metoda fillRect wymaga podania 4 argumentów. Pierwsze dwa to parametry startowe na osi x i y. Drugie dwa to szerokść (oś x) i wysokośći (oś y).
  // Lewy góry róg to parametr (0,0) a szerokość w tym przypadku 1000px (taką ma zmienna canWid) i wysokość 500px (bo taką ma zmienna canHei)
  // linie w środku
  for (let linePosition = 20; linePosition < canHei; linePosition += 30) {
    ctx.fillStyle = 'gray';
    ctx.fillRect(canWid / 2 - lineWidth * 2, linePosition, lineWidth, lineHeight);
  }
}
const player = () => {
  ctx.fillStyle = 'yellowgreen';
  ctx.fillRect(playerX, playerY, paddleWidth, paddleHeight);
}

const aiPaddle = () => {
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(iaPaddleX, iaPaddleY, paddleWidth, paddleHeight);
}

// Poruszanie paletką


function playerPosition(event) {
  playerY = event.offsetY - paddleHeight / 2;

  // Zabezpieczenie wyjechania paletki od dołu
  if (playerY >= canHei - paddleHeight) {
    playerY = canHei - paddleHeight
  }
  // Zabespiecznie od góry
  if (playerY <= 0) {
    playerY = 0;
  }
  iaPaddleY = playerY;
}

function speedUp() {
  // prędkość X
  if (ballSpeedX > 0 && ballSpeedX <= 16) {
    ballSpeedX += 0.2;
  } else if (ballSpeedX < 0 && ballSpeedX >= -16) {
    ballSpeedX -= 0.2;
  }
  // prędkość Y
  if (ballSpeedY > 0 && ballSpeedY <= 16) {
    ballSpeedY += 0.2;
  } else if (ballSpeedY < 0 && ballSpeedY >= -16) {
    ballSpeedY -= 0.2;
  }
}

canvas.addEventListener('mousemove', playerPosition);

function game() {
  // Wywołanie funkcji
  table();
  // tu trzeba pamiętać o kolejności (aby stół nie przykrył piłki)
  ball();
  player();
  aiPaddle();
}

// funkcja umożliwiająca wywoaływanie innej co określonyc czas
// Animujemy cały stół dzięki zamknięciu wszystkiego w game, czyli wywołujemy stół, paletki i piłkę od nowa
setInterval(game, 1000 / 60);
// setinterval ustawiamy na powtarzania się 60 razy na sekundę