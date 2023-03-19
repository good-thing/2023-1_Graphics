let dog;
function preload(){
  dog = loadImage('https://raw.githubusercontent.com/good-thing/2023-1_Graphics/main/dog.jpg');
}

function setup() {
  createCanvas(600, 600, WEBGL);
}

function draw() {
  background(0);
  rotateX(frameCount * 0.015);
  rotateY(frameCount * 0.015);
  rotateZ(frameCount * 0.015);
  texture(dog);
  box(width/2);
}
