let nodes = [];
let edges = [];
let radius = 5;
let range = 100;
let N = 100;
let E = 70;
let network;
function setup() {
  createCanvas(800, 800);
  network = new GeometricNetwork(N, range);
  network.connect();
}

function draw() {
  background(220);
  network.show();
  let mouse = createVector(mouseX, mouseY);
  for (let node of network.nodes) {
    let force = p5.Vector.sub(mouse, node.pos);
    let dist = p5.Vector.dist(mouse, node.pos);
    if (dist < 300 / 2) {
      node.selected = true;
      force.setMag(0.5 * (1 - dist / width) ** 2);
      line(mouseX, mouseY, mouseX - force.x, mouseY - force.y);
      node.pos.sub(force);
    } else {
      node.selected = false;
    }
  }
  noFill();
  circle(mouseX, mouseY, 300);
  network.connect();
}
