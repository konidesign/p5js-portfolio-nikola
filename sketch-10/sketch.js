function setup() {
  createCanvas(500, 500, WEBGL);
  noStroke();
}

function draw() {
  background(15, 26, 107);

  rotateY(frameCount * 0.01);

  for (let y = -200; y <= 200; y += 50) {
    for (let x = -150; x <= 150; x += 50) {
      push();

      // le cube avance ou recule un peu pour donner un effet 3D
      let z = sin(frameCount * 0.05 + x + y) * 80;

      translate(x, y, z);

      if ((x + y) % 100 === 0) {
        fill(255, 69, 0);
      } else {
        fill(0, 200, 255);
      }

      let s = 25 + sin(frameCount * 0.05 + x) * 10;

      box(s);

      pop();
    }
  }
}