const Engine=Matter .Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const body=Matter.body;
const Render=Matter.Render;
const Constraint=Matter.Constraint;
var engine,world,drops;
var man,man_running,manImage;
var cloud1,cloud2,cloud1_running,cloud2_running,cloudImage;
var thunder1,thunder2,thunder3,thunder4;
var ground,groundImage;
var drops=[];
var maxDrops=100;
var rand;
var Drops;


function preload(){
    man_running=loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png")
   thunder1=loadImage("1.png")
   thunder2=loadImage("2.png") 
   thunder3=loadImage("3.png")
   thunder4=loadImage("4.png") 
  
}
function setup(){
 createCanvas(800,570)  

 engine=Engine.create();
 world=engine.world;

umbrella = new umbrella(200,500)

    man=createSprite(350,375)
    man.addAnimation("running",man_running)
    man.scale=0.5

 
    for(var i = 0; i < maxDrops; i++){
    drops.push(new createDrops(random(0.800),random(0.800)));
    }
   
}


function draw(){
    Engine.update(engine)
    background("black");

    man.display()
      
rand=Math.round(random(1,2));
if(frameCount%60===0){
  thunderCreateFrame=frameCount;
  thunder=createSprite(random(100,570),random(10,15),10,10);
 
  thunder.scale = random(0.5,0.6)
  thunder.lifetime=6;
  switch(rand){
    case 1: thunder.addImage(thunder1);
    break;
    case 2: thunder.addImage(thunder2);
    break;
    case 3: thunder.addImage(thunder3);
    break;
    case 4: thunder.addImage(thunder4)
    default: break;
    } }
  
  
   umbrella.display();
   
for(var i=0; i < maxDrops; i++){
    drops[i].display();
    drops[i].update();
}

drawSprites()

}



