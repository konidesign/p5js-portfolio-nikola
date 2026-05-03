let mic;

function setup() {
  createCanvas(500, 500, WEBGL);
  noStroke();

  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(15, 26, 107);

  let volume = mic.getLevel();

  // grille de pixels en fond
  for (let y = -250; y < 250; y += 50) {
    for (let x = -250; x < 250; x += 50) {
      let taille = 30 + volume * 300;

      if ((x + y) % 100 === 0) {
        fill(255, 69, 0);
      } else {
        fill(0, 200, 255);
      }

      rect(x, y, taille, taille);
    }
  }

  rotateY(frameCount * 0.01 + volume * 5);

  // cubes devant
  for (let y = -150; y <= 150; y += 75) {
    for (let x = -150; x <= 150; x += 75) {
      push();

      let z = sin(frameCount * 0.05 + x + y) * 80;
      let taille = 30 + volume * 500;

      translate(x, y, z);

      if ((x + y) % 150 === 0) {
        fill(255, 69, 0);
      } else {
        fill(0, 200, 255);
      }

      box(taille);

      pop();
    }
  }
}