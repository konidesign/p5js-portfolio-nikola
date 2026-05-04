let currentKey = '';

function setup() {
  createCanvas(500, 500);
  noStroke();

  textAlign(CENTER, CENTER);
  textSize(70);
  textStyle(BOLD);
}

function draw() {
  background(15, 26, 107);

  if (currentKey === '') {
    fill(255, 69, 0);
    text("CLICK &\nPRESS KEY", width / 2, height / 2);
  } else {
    // grosse lettre en couleur pleine
    fill(255, 69, 0);
    textSize(900);
    text(currentKey, width / 2, height / 2 + 40);

    // motif différent par rapport à la touche
    randomSeed(currentKey.charCodeAt(0));

    for (let i = 0; i < 180; i++) {
      let x = random(width);
      let y = random(height);
      let s = random(5, 30);

      if (i % 4 === 0) {
        fill(255, 69, 0);
      } else {
        fill(0, 200, 255);
      }

      rect(x, y, s, s);
    }
  }
}

function keyPressed() {
  currentKey = key;
}