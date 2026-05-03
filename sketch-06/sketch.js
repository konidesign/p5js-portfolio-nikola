let intro = true;

function setup() {
  createCanvas(500, 500);
  background(15, 26, 107);
  textAlign(CENTER, CENTER);
  textSize(80);
  textStyle(BOLD);
  noStroke();
}

function draw() {
  if (intro) {
    background(15, 26, 107);
    fill(255, 69, 0);
    text("CLICK", width / 2, height / 2);
  }
}

function mousePressed() {
  if (intro) {
    background(15, 26, 107);
    intro = false;
  }

  // explosion de petits carrés
  for (let i = 0; i < 35; i++) {
    let decalageX = random(-70, 70);
    let decalageY = random(-70, 70);
    let taille = random(6, 18);

    if (random() < 0.4) {
      fill(255, 69, 0);
    } else {
      fill(0, 200, 255);
    }

    rect(mouseX + decalageX, mouseY + decalageY, taille, taille);
  }
}