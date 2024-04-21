const Engine = Matter.Engine;
const Render = Matter.Render;
const Bodies = Matter.Boides;
const Constraint = Matter.Constraint;
const World = Matter.World;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground, bridge;
var leftWall, rightWall;
var jointPoint, jointLink;

var stones = [];

function setup(){
  createCanvas(WindowWidth,WindowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
}
function draw(){
  ground = new Base(0,height-20,width*2,20,"#795548",true);
  leftWall = new Base(300,height/2 + 50,600,100,'#8d6e63',true);
  leftWall = new Base(width-300,height/2 + 50,600,100,'#8d6e63',true);

  background(51);
Engine.update(engine);

ground.show();
bridge.show();
leftWall.show();
rightWall.show();

for (var stone of stones) {
  stone.show();
}
}

bridge = new Bridge(15, {x:width /2 - 400, y:height/2});
jointPoint = new Base(width - 600, height/2 + 10, 40, 20, "#8d6e63",true);


Matter.Composite.add(bridge.body, jointPoint);
jointLink = new Link(brigde, jointPoint);

for (var i = 0; i <= 8; i++) {
  var x = random(width / 2 - 200, width / 2 + 300);
  var y = random(-10, 140);
  var stone = new Stone(x, y, 80, 80);
  stones.push(stone);
}


