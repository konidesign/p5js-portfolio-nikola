let webcam;
let cols = 20;
let rows = 20;
let w, h;

function setup() {
  createCanvas(400, 400);

  webcam = createCapture(VIDEO);
  webcam.size(50, 50);
  webcam.hide();

  w = width / cols;
  h = height / rows;
}

function draw() {
  background(0);

  webcam.loadPixels();

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {

      let px = int(map(x, 0, cols, 0, webcam.width));
      let py = int(map(y, 0, rows, 0, webcam.height));

      let pos = (py * webcam.width + px) * 4;

      let r = webcam.pixels[pos];
      let g = webcam.pixels[pos + 1];
      let b = webcam.pixels[pos + 2];

      let light = (r + g + b) / 3;

      if (light < 50) {
        fill(5, 6, 23);        // bleu nuit
      } else if (light < 100) {
        fill(23, 24, 106);     // bleu foncé
      } else if (light < 150) {
        fill(30, 38, 168);     // bleu
      } else if (light < 200) {
        fill(19, 199, 229);    // cyan
      } else {
        fill(255, 55, 8);      // orange
      }

      noStroke();
      rect(x * w, y * h, w, h);
    }
  }
}