class ground
{
constructor(x,y,width,height)
{
var options={
isStatic:true
}
this.x=x;
this.y=y;
this.w=w
this.h=h
this.body=Bodies.rectangle(x, y, w, h , options);	World.add(world, this.body);
World.add(world,this.body);
}


display()
{

var groundPosition=this.body.position;
push()
translate(groundPos.x, groundPos.y);
rectMode(CENTER)
strokeWeight(4);
fill(255,255,0)
rect(0,0,this.w, this.h);
pop()
}
}





