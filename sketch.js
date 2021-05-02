const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer, thing, ob2;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    thing = new Rubber (600,10, 10,50);
    ob2 = new Rubber(400,200,60,60);

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    

    plane.display();
    hammer.display();
    thing.display();
    ob2.display();

    
 
}