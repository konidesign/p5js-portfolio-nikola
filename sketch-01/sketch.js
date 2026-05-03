let cols = 12;
let rows = 12;
let cellSize;

function setup() {
  createCanvas(500, 500);
  frameRate(30);
  noStroke();

  cellSize = width / cols;
}

function draw() {
  background(15, 26, 107);

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      let posX = x * cellSize;
      let posY = y * cellSize;

      let taille = cellSize + sin(frameCount * 0.2 + x + y) * 15;

      if ((x + y) % 4 === 0) {
        fill(255, 69, 0);
      } else {
        fill(0, 200, 255);
      }

      rect(posX, posY, taille, taille);
    }
  }
}