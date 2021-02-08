class Bob
{
    constructor(x,y,color)
    {
        var options={            
            restitution:0.3,
            frictionAir:0.0,
            friction:0,
            inertia:Infinity
        }
        ;
this.color=color;
      this.body=Bodies.rectangle(x,y,40,40,options)  
      World.add(world,this.body);

    }
    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;
        push()
        translate(pos.x,pos.y);
        rotate(angle);
        fill(this.color);
        ellipse(0,0,60,60);
        pop()

    }
}