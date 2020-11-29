var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var box1, box2,box3;
var boxLeftWall, boxRightWall, boxBottomWall;
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

	box1 = createSprite(400,655,200,15);
	box1.shapeColor = ("red");
	box2 = createSprite(290,610,20,100);
	box2.shapeColor = ("red");
	box3 = createSprite(500,610,20,100);
    box3.shapeColor = ("red");
	
	

	packageSprite=createSprite(width/2, 80, 200,20);
	packageSprite.addImage(packageIMG)
    packageSprite.scale = 0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	



	engine = Engine.create();
	world = engine.world;

	

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

boxLeftWall = Bodies.rectangle(300,690,10,100)
World.add(world,boxLeftWall)
boxRightWall= Bodies.rectangle(500,690,10,100)
World.add(world,boxRightWall)
boxBottomWall = Bodies.rectangle(400,655,200,15)
World.add(world,boxBottomWall)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine)
rect(boxLeftWall.body.position.x,boxLeftWall.body.position.y,10,100)
rect(boxRightWall.body.position.x,boxRightWall.body.position.y,10,100)
rect(boxBottomWall.body.position.x,boxBottomWall.body.position.y,400,655)
  packageSprite.collide(box1)

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y
  drawSprites();
 


}


function keyPressed() {

	Matter.Body.setStatic(packageBody,false)

 if (keyPressed === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	

	Body.setStatic(packageBody,false)
	

  }
}



