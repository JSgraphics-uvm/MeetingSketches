let h = 400;
let w = 400;

let myballs = []

let t = 0;
let dt = 0.1;
function setup() {
  
  createCanvas(w, h);
  
  for (let i = 0; i < 10; i++){
    myballs.push(createVector(random(width), random(height)));
  }

}

function draw() {
  background(220);
  
  noFill()
  stroke(0)
  beginShape()
  for(let i in myballs){
    
    let ball = myballs[i]
    //ellipse(x,y, 20)
    stroke(0 + 255/i)
    vertex(ball.x, ball.y)
    let n = myballs.length
    ball.x = constrain(ball.x + (-1 + random()*2), 0, width)
    ball.y = constrain(ball.y + (-1 + random()*2), 0, height)
    //ball.y += (-1 + random()*2) * i/(n*2)
  
   }
  endShape(CLOSE);
  //t += dt
  
/*
  let ellipse_x = 100 ;
  let ellipse_y = height/2;
  
  radius = 100;

  stroke(0)
  strokeWeight(1);
  noFill();
  ellipse(ellipse_x, ellipse_y, radius/2)
  if (dist(mouseX, mouseY, ellipse_x, ellipse_y) < radius/4) {
    fill("green")
  } else {
    fill("red")
  }
  noStroke()
  ellipse(ellipse_x, ellipse_y, radius/2, radius/2)


  stroke("blue")
  strokeWeight(2)

  let start_x = 200;
  let start_y = 200;
  let end_x = 0;
  let end_y = height;
  line(mouseX, mouseY, ellipse_x, ellipse_y)

*/

}