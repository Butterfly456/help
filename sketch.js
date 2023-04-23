
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var column_1, column_2, column_3; 
var plane;

let pipeImage; 


function preload() {
  pipeImage = loadImage('pipe.png');
}


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world; 
  column_1 = new Pipe(300, 300, 100, 200, pipeImage);
  column_2 = new Pipe(300, 300, 100, 200, pipeImage);
  column_3 = new Pipe(300, 300, 100, 200, pipeImage);
}


function draw() 
{
  background(51);
  Engine.update(engine);

  column_1.show();
  column_2.show();
  column_3.show();
}

