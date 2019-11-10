let balls = [];
let t = 0;
let dt = 0.2;
function setup() {
  createCanvas(400, 400);
  for(let i = 0; i<10; i++){
    balls.push([random(width), random(height)]);
  }
}

function draw() {
  background(220);
  fill(0);
  push()
  translate(width/2,height/2)
  rotate(t/10)
  //translate(width/2, height/2);
  for(let ball of balls){
    let [x,y] = ball;
    ellipse(x-width/2,y-height/2, 10);
  }
  pop()
  fill(255,0,0)
  noStroke()
  ellipse(width/2, height/2, 20)
  t += dt
}