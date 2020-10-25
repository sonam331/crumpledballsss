
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbinobject, paperObject,groundObject
var world;


function setup(){
createCanvas(1600, 700);
rectMode(CENTER);

Engine= engine.create();
World=engine.world;
dustbinobject=new dustbin(1200,600);
paperObject=new paper(200,450,40);
groundObject=new ground(width/2,670,width,25);




Engine.run(engine);
}



function draw() {
	rectMode(CENTER);
background(0);
drawSprites();
dustbinobject.display();
paperObject.display();
groundObject.display();

}

function KeyPressed(){
if(keyCode===UP_ARROW){

Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
}
}




