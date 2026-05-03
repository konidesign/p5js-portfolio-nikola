let mic;
let started = false;

function setup() {
  createCanvas(500, 500);
  noStroke();

  mic = new p5.AudioIn();

  textAlign(CENTER, CENTER);
  textSize(24);
  textStyle(BOLD);
}

function draw() {
  background(15, 26, 107);

  if (!started) {
    fill(255, 69, 0);
    text("CLICK POUR ACTIVER", width / 2, height / 2);
    return;
  }

  let volume = mic.getLevel() * 2000;

  for (let ligne = 0; ligne < 5; ligne++) {
    let baseY = 100 + ligne * 75;

    for (let x = 0; x < width; x += 12) {
      let y = baseY + sin(frameCount * 0.15 + x * 0.08 + ligne) * volume;

      if (ligne % 2 === 0) {
        fill(255, 69, 0);
      } else {
        fill(0, 200, 255);
      }

      rect(x, y, 10, 10);
    }
  }
}

function mousePressed() {
  if (!started) {
    mic.start();
    started = true;
  }
}