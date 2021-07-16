class createDrops{
    constructor(x,y){
        var options={
           // 'friction': 6.0,
         //  ' restitution':1.0,
          
    
        }
        this.body=Bodies.circle(x,y,3,options);
        this.radius=3;
        World.add(world,this.body);
    }
   update(){
        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body,{x:random(0,800),y:random(0,800)})
        }
    }
    display(){
        //noStroke();
        fill("blue")
        ellipseMode(RADIUS);
       ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);

    }
}