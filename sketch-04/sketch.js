let pixels = [];

function setup() {
  createCanvas(500, 500);
  frameRate(30);
  noStroke();

  for (let i = 0; i < 160; i++) {
    pixels.push({
      x: random(width),
      y: random(height),
      size: random(5, 16),
      speedX: random(-12, 12),
      speedY: random(-12, 12),
      col: random() < 0.3 ? color(255, 69, 0) : color(0, 200, 255)
    });
  }
}

function draw() {
  background(15, 26, 107);

  for (let i = 0; i < pixels.length; i++) {
    let p = pixels[i];

    p.x += p.speedX;
    p.y += p.speedY;

    if (p.x < 0 || p.x > width) {
      p.speedX = -p.speedX;
    }

    if (p.y < 0 || p.y > height) {
      p.speedY = -p.speedY;
    }

    fill(p.col);
    rect(p.x, p.y, p.size, p.size);
  }
}