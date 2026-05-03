let webcam;

function setup() {
  createCanvas(500, 500, WEBGL);
  noStroke();

  webcam = createCapture(VIDEO);
  webcam.size(80, 80);
  webcam.hide();
}

function draw() {
  background(15, 26, 107);

  webcam.loadPixels();

  let cell = 20;

  for (let y = 0; y < height; y += cell) {
    for (let x = 0; x < width; x += cell) {

      // Adaptation de la position du canvas à la taille de la webcam
      let px = floor(map(x, 0, width, 0, webcam.width));
      let py = floor(map(y, 0, height, 0, webcam.height));

      let i = (px + py * webcam.width) * 4;

      let r = webcam.pixels[i];
      let g = webcam.pixels[i + 1];
      let b = webcam.pixels[i + 2];

      // Moyenne des couleurs pour répartition claire ou sombre
      let light = (r + g + b) / 3;

      // La luminosité fait le depth et taille du carré
      let z = map(light, 0, 255, -60, 60);
      let size = map(light, 0, 255, 5, 20);

      push();

      // En WEBGL, le centre du canvas est au milieu, décalage avec width / 2
      translate(x - width / 2, y - height / 2, z);

      if (light > 150) {
        fill(255, 69, 0);
      } else {
        fill(0, 200, 255);
      }

      rect(0, 0, size, size);

      pop();
    }
  }
}