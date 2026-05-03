function setup() {
  createCanvas(500, 500);
  background(15, 26, 107);
  noStroke();

  textAlign(CENTER, CENTER);
  textSize(60);
  textStyle(BOLD);
}

function draw() {
  let taille = random(5, 25);
  let x = mouseX + random(-15, 15);
  let y = mouseY + random(-15, 15);

  if (frameCount % 5 === 0) {
    fill(255, 69, 0);
  } else {
    fill(0, 200, 255);
  }

  rect(x, y, taille, taille);

  if (mouseX === 0 && mouseY === 0) {
    fill(255);
    text("MOVE", width / 2, height / 2);
  }
}

function keyPressed() {
  if (key === 'c' || key === 'C') {
    background(15, 26, 107);
  }
}