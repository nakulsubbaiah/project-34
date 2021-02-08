
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render;
const Constraint=Matter.Constraint;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5
var startBobPositionX=500;
var bobDiameter=30;
var startBobPositionY=400;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine=Engine.create();
	world=engine.world;

	//S World.add(World, ground);
	bobObject1=new Bob(startBobPositionX-bobDiameter*1,startBobPositionY,"red");	
	bobObject2=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,"red");
	bobObject3=new Bob(startBobPositionX-bobDiameter*3,startBobPositionY,"red");
	bobObject5=new Bob(startBobPositionX-bobDiameter*4,startBobPositionY,"red");
	bobObject4=new Bob(startBobPositionX-bobDiameter*5,startBobPositionY,"red");
	
	rope1=new rope(bobObject1.body,{x:300,y:200})
	rope2=new rope(bobObject2.body,{x:350,y:200})
	rope3=new rope(bobObject3.body,{x:400,y:200})
	rope4=new rope(bobObject4.body,{x:450,y:200})
	rope5=new rope(bobObject5.body,{x:500,y:200})

    var render= Render.create({
	element:document.body,
	engine:engine,
	options:{
		width:1600,
		height:700,
		wireFrammes:false
	}
})	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();


  drawSprites();
 
}
function mouseDragged() {
	
 Matter.Body.setPosition(bobObject1.body,{x:mouseX,y:mouseY});

  
	
}