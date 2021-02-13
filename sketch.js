const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, engine, world;
var box;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600, height,1200, 20);
    box = new Box(200, 200, 20, 200)
}


function draw(){
    Engine.update(engine)

    ground.display();
    box.display();
}