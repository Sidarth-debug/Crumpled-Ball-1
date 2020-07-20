
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var base1,ground1,paper1,leftSide,rightSide;

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	
ground1 = new ground(400,580,850,10);
base1 = new base(500,570,285,10);
leftSide = createSprite(353,535,10,80);
leftSide.shapeColor = "yellow";
rightSide = createSprite(645,535,10,80);
rightSide.shapeColor = "yellow";
  paper1 = new paper(120,575,40);
  Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground1.display();
  base1.display();
  paper1.display();
ground1.debug = true;

  drawSprites();

}
function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:105,y:-260});
}
}





