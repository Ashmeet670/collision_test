var fixedRec
var MovingRec

function setup() {
  createCanvas(1200,800);
  fixedRec = createSprite(200, 200, 50, 80)
  MovingRec = createSprite(400,200,80,30)
}

function draw() {
  background(0);  

  MovingRec.x = World.mouseX;
  MovingRec.y = World.mouseY;


  if(MovingRec.x - fixedRec.x < MovingRec.width/2 + fixedRec.width/2 && fixedRec.x - MovingRec.x < MovingRec.width/2 + fixedRec.width/2 && fixedRec.y - MovingRec.y < fixedRec.height/2 + MovingRec.height/2 && MovingRec.y - fixedRec.y < MovingRec.height/2 + fixedRec.height/2){

    MovingRec.shapeColor = "red"
    fixedRec.shapeColor = "red"

    fixedRec.velocityX = 2
  }
  else{
    MovingRec.shapeColor = "blue"
    fixedRec.shapeColor = "blue"
  }

  


  drawSprites();
}