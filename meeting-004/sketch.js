let slider;
let button;
let back_color;
let red;
let blue;
let rocket;
let my_back;

function preload() {
  rocket = loadImage("rocket2.png");
}

function setup() {
  let canvas = createCanvas(800, 800);
  //imageMode(CENTER);

  my_back = createGraphics(width, height);
  my_back.clear();
  my_back.fill(255, 0, 0);
  my_back.ellipse(190, 100, 20);
  my_back.ellipse(100, 500, 50);

  rocket.resize(0, 90);
  canvas.mousePressed(() => {
    console.log("hello from the canvas");
  });

  slider = createSlider(0, 100, 5, 10);
  slider.position(20, 20);

  slider.mousePressed(() => {
    console.log("ciao");
  });

  button = createButton("Press ME");
  button.style("width", "400px");

  canvas.mouseOver(() => {
    back_color = blue;
  });
  button.mouseOver(() => {
    back_color = red;
  });

  red = color("red");
  blue = color("blue");
  back_color = blue;
}

function draw() {
  //background(back_color);
  background(255, 20);
  image(my_back, 0, 0);
  fill(0);
  ellipse(mouseX, mouseY, 20);
  /*
  push();
  translate(mouseX, mouseY);
  rotate(-HALF_PI + atan2(pmouseY - mouseY, pmouseX - mouseX));
  image(rocket, 0, 0);
  */
  /*ext(str(mouseX), 0, 0);
  text(str(mouseY), 50, 0);
  text(str(slider.value()), 100, 0);*/
  //pop();
}
