const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



var ball;
var bottom_wall;

function preload()
{
	
}

function setup() {   
 createCanvas(800, 700);

 bottom_wall=new Ground(400,100,800,10);

 engine = Engine.create();
 world = engine.world;
 


 var ball_options={
  isStatic:false,
  restitution:0.95,
  friction:0,
  density:1.2,
 };

 //Create the Bodies Here.
 ball=Bodies.circle(100,100,20,ball_options);
 World.add(world,ball);

 Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ellipse(ball.position.x,ball.position.y,20);

  bottom_wall.display();

  drawSprites();
 
}



