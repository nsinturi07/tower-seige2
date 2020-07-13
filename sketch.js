var ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint = Matter.Constraint;
var chain;


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
    engine = Engine.create();
    world = engine.world;
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box5 = new Box(810,160,70,70);
    paper = new paperObject(50,50,70);
    chain = new Slingshot(paper.body,{x:200,y:100});
    Engine.run(engine);
}

function draw() {
  background(255); 
  Engine.update(engine);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  paper.display();
  chain.display();


  drawSprites();
}