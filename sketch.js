var car,wall;
var speed,weight;

function setup() {
  createCanvas(400,400);
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(340,200,60,height/2)
  
  speed=random(55,90)
  weight=random(400,1500)
}

function draw() {
  background(225,225,225);  
  car.velocityX=speed
  wall.shapeColor=color(80,80,80)
  drawSprites();
  if(wall.x-car.x<(car.width+wall.width)/2)
  {
   car.velocityX=0
  var deformation=0.5*weight*speed*speed/22500
  if(deformation<100){
    car.shapeColor=color(0,255,0)
  }
  if(deformation>100&&deformation<180){
    car.shapeColor=color(230,230,0)
  }
  if(deformatoin>180){
   car.shapeColor=color(225,0,0)

  }

  }
}