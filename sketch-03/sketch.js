function setup() {
  createCanvas(500, 500);
  noFill();
  strokeWeight(2);
}

function draw() {
  background(15, 26, 107);

  for (let line = 0; line < 10; line++) {
    if (line % 3 === 0) {
      stroke(255, 69, 0);
    } else {
      stroke(0, 200, 255);
    }

    let y = line * 50 + 25;
    let amp = line * 4 + 10;
    let w = 40;
    let speed = frameCount * 4;

    for (let x = -w; x < width + w; x += w * 2) {
      let xx = x + speed % (w * 2);

      // segment du haut
      lineSegment(xx, y - amp, xx + w, y - amp);

      // descente verticale
      lineSegment(xx + w, y - amp, xx + w, y + amp);

      // segment du bas
      lineSegment(xx + w, y + amp, xx + w * 2, y + amp);

      // montée verticale
      lineSegment(xx + w * 2, y + amp, xx + w * 2, y - amp);
    }
  }
}

function lineSegment(x1, y1, x2, y2) {
  line(x1, y1, x2, y2);
}