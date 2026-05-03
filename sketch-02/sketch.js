function setup() {
  createCanvas(500, 500);
  noFill();
  strokeWeight(2);
  rectMode(CENTER);
}

function draw() {
  background(15, 26, 107);
  translate(width / 2, height / 2);
  for (let i = 0; i < 25; i++) {
    let s = i * 22 + sin(frameCount * 0.05 + i) * 20;
    if (i % 4 === 0) stroke(255, 69, 0);
    else stroke(0, 200, 255);
    push();
    rotate(frameCount * 0.005 * i);
    rect(0, 0, s, s);
    pop();
  }
}