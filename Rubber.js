class Rubber{
constructor(x,y,width,height,radius){
var options={
'restitution':5,
'friction':2,
'density':1
}
this.body=Bodies.circle(x,y,width,height,radius,options);
this.radius=4.9;
this.height=height;
this.width=width;
World.add(world,this.body);

}
display(){
push();
var pos=this.body.position;
translate(pos.x,pos.y);
ellipseMode(CENTER)
strokeWeight(5);
stroke('white');
fill('red');
circle(0,0,this.width,this.height)
pop();

}

}