class Iron{
    constructor(x,y,width,height){
        var options = {
        'density':2,
        'friction': 4,
        'restitution':0.9,
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display(){
    push();
    var pos=this.body.position;
    var angle=this.body.angle;
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(5);
    stroke("red");
    fill(244);
    rect(0,0,this.width,this.height);
    pop();
    
    }
    }