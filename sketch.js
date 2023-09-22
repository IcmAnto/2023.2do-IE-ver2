let canvas;
let centerX, centerY;
let staatLichesFont;
let img;

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function preload() {
  staatLichesFont = loadFont('Staatliches-Regular.ttf');
  img = loadImage('softGradient-pastelPink.jpg');
}

function setup() {
  canvas= createCanvas(windowWidth, windowHeight, WEBGL);
  background(99, 111, 175);

  canvas.position (0,0);
  canvas.style('z-index','-1');
  
  centerX = windowWidth / 2;
  centerY = windowHeight / 2;
    
}

function draw() {

  //planeta
  noStroke();
  rotateY(millis() / 1600);
  sphere(215);
  
  texture(img);
  sphere(215);


}
