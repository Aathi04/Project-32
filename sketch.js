const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var score = 0;
var backgroundImg

function preload() {
  getBackgroundImg();
}

function setup() {
  createCanvas(1200,400);

  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(530,360,300,15);
  ground2 = new Ground(920,270,250,15);

  polygon = new Polygon(150,250);
  slingShot = new SlingShot(polygon.body,{x:150,y:200});

  block1 = new Blocks(445,340,40,45);
  block2 = new Blocks(485,340,40,45);
  block3 = new Blocks(525,340,40,45);
  block4 = new Blocks(565,340,40,45);
  block5 = new Blocks(605,340,40,45);

  block6 = new Blocks(480,290,40,45);
  block7 = new Blocks(520,290,40,45);
  block8 = new Blocks(560,290,40,45);

  block9 = new Blocks(500,240,40,45);
  block10 = new Blocks(540,240,40,45);

  block11 = new Blocks(520,190,40,45);

  block12 = new Blocks(855,250,40,45);
  block13 = new Blocks(895,250,40,45);
  block14 = new Blocks(935,250,40,45);
  block15 = new Blocks(975,250,40,45);
  block16 = new Blocks(875,200,40,45);
  block17 = new Blocks(915,200,40,45);
  block18 = new Blocks(955,200,40,45);
  block19 = new Blocks(895,150,40,45);
  block20 = new Blocks(935,150,40,45);
  block21 = new Blocks(915,100,40,45);

  //block22 = new Blocks(520,190,40,45);

}

function draw() {
  if(backgroundImg){ 
     background(backgroundImg); 
  }

  noStroke();
  textSize(35);
  fill("white");
  text("Score : " + score,750 , 40);

  Engine.update(engine)
  
  //strokeWeight(4);
  ground1.display();
  ground2.display();
  
  polygon.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  //block22.display();
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();

  slingShot.display();  

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x :mouseX , y : mouseY});


}

function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(polygon.body);
  }
}
async function getBackgroundImg (){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  var time = responseJSON.datetime;
  var hour = time.slice(11,13);
  //console.log(hour);
  if(hour >= 06 && hour <= 19){
      bg = "bg.png"; 
  }

  else{
      bg = "bg2.jpg";
  }

  backgroundImg = loadImage(bg);
}