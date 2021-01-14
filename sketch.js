var boy,tree;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
  boy.image=loadImage("boy.png")
  tree.image=loadImage("tree.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
mango1=new mango(600,50,30)
mango2=new mango(610,65,30)
mango3=new mango(625,70,30)
mango4=new mango(630,50,30)
mango5=new mango(620,80,30)

boy=createSprite(150,200)
tree=createSprite(500,150)

stone1=new Stone(140,220,20,20)
chain1=new chain(bodyA,pointB)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  drawSprites();
 
}
function mousepressed(){
  fly();
}


