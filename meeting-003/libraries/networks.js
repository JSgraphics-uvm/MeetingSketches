class Node {
  constructor(x, y, r) {
    this.pos = createVector(x, y);
    this.r = r;
    this.selected = false;
  }

  show() {
    if (this.selected) {
      fill(255, 0, 0);
      stroke(0);
      ellipse(this.pos.x, this.pos.y, this.r * 2);
    } else {
      fill(0);
      stroke(0);
      ellipse(this.pos.x, this.pos.y, this.r);
    }
  }
}

class Edge {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }
  show() {
    stroke(0);
    line(this.from.pos.x, this.from.pos.y, this.to.pos.x, this.to.pos.y);
  }
}

class GeometricNetwork {
  constructor(N, range) {
    this.nodes = [];
    this.edges = [];
    this.range = range;

    for (let i = 0; i < N; i++) {
      this.nodes.push(new Node(random(width), random(height), radius));
    }
  }
  connect() {
    this.edges = [];
    for (let node of this.nodes) {
      for (let neigh of this.nodes) {
        if (node != neigh) {
          let dist = p5.Vector.dist(node.pos, neigh.pos);

          if (dist < this.range) {
            this.edges.push(new Edge(node, neigh));
          }
        }
      }
    }
  }

  show() {
    for (let node of this.nodes) {
      node.show();
    }
    for (let edge of this.edges) {
      edge.show();
    }
  }
}
