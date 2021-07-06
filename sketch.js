var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , { isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
    

	 boxPosition=width/2-100
	 boxY=610

	 box1=createSprite(boxPosition,boxY,20,100);
	 box1.shapeColor=("red");

	 box2=Bodies.rectangle(boxPosition+20,boxY,20,100,{isStatic:true});
     box2.shapeColor=("red");

     boxB=createSprite(boxPosition+100,boxY+40,200,20);
     boxB.shapeColor=("red")

	 box3=createSprite(boxPosition+200,boxY,20,100);
	 box3.shapeColor=("red");

     box4=Bodies.rectangle(boxPosition+100,boxY+25,200,40,{isStatic:true});
	 box4.shapeColor=("red");

     box5=Bodies.rectangle(boxPosition+180,boxY+50,20,100,{isStatic:true});
     box5.shapeColor=("red");






	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	   // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
		 Matter.Body.setStatic(packageBody,false);
	   
	 }
   }
   


