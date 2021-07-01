
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var angle = 60;
var ground,rightSide,leftSide;
var up = 0

function setup() {
  createCanvas(1600,700);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.3,
    friction :0,
    isStatic :false,
    density :1.2,
  }
  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  rightSide = new Ground(1100,600,20,120);
  ground = new Ground(width/2,670,width,20);
  leftSide = new Ground(1350,600,20,120)

  ellipseMode(RADIUS);
  fill("blue");
  rectMode(CENTER);
}
  

function draw() 
{
  background("pink");
  Engine.update(engine); 

  if(keyDown(DOWN_ARROW) || keyDown(UP_ARROW)){
   up = up+1
  }
  //diplaying the grounds
  rightSide.show();
  ground.show();
  leftSide.show();

 text("Times key pressed :"+up,400,50)
  ellipse(ball.position.x,ball.position.y,20); 
}

function keyPressed(){
  if(keyCode === UP_ARROW)
   Matter.Body.applyForce(ball,ball.position,{x:90,y:-90});
}
