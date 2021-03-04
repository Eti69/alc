
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
var ground;
var stone;
var rubber;
var iron;
var sand;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	hammer=new Hammer(200,300,40,20);
	ground= new Ground(10,690,69420,20);
	stone= new Stone(100,300,40,40);
	rubber=new Rubber(400,500,40,40,40);
	iron=new Iron(300,300,20,40);
	//sand=new Sand(300,500,30,20,10);
    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  hammer.display();
  ground.display();
  stone.display();
  rubber.display();
  iron.display();
  //sand.display();
  
 
}



