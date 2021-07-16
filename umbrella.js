class umbrella{
    constructor(x,y){
        var options = {
            'isStatic': true,
        }
        this.body = Bodies.circle(365,285,60,options);
        this.radius =60;
      
       World.add(world, this.body)
    }
    display(){
      
    }
}