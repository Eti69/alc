class Sand{
    constructor(x,y,width,height,radius){
    var options={
    'restitution':1.3,
    'friction':5,
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
    stroke('black');
    fill('red');
    circle(0,0,this.width,this.height)
    pop();
    
    }
    
    }