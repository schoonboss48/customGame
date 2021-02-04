var box1, box2, box3, box4
var box5,box6,box7,box8
var box9, box10, box11,box12
var box13,box14,box15,box16
var box17,box18,box19,box20
var box21,box22,box23,box24,box25,box26
var runner, runnerImage
var tiger, tigerImage
var husky, huskyImage
var treasure, treasureImage
var edges
var gameState="PLAY"
function preload(){
  runnerImage=loadImage("runner.png")
  tigerImage=loadImage("tiger.png")
  huskyImage=loadImage("husky.png")
  treasureImage=loadImage("treasure.png")
}


function setup() {
  createCanvas(800,800);
  //Creating the sprites for the maze.
  box1=createSprite(400, 50, 700, 10);
  box1.shapeColor=("white")
  box2=createSprite(400,700,700,10)
  box2.shapeColor=("white")
  box3=createSprite(50,95,10,100)
  box3.shapeColor=("white")
  box4=createSprite(50,468,10,475)
  box4.shapeColor=("white")
  box5=createSprite(750,295,10,500)
  box5.shapeColor=("white")
  box6=createSprite(120,235,150,10)
  box6.shapeColor=("white")
  box7=createSprite(190,188,10,85)
  box7.shapeColor=("white")
  box8=createSprite(170,145,50,10)
  box8.shapeColor=("white")
  box9=createSprite(500,148,10,185)
  box9.shapeColor=("white")
  box10=createSprite(430,235,150,10)
  box10.shapeColor=("white")
  box11=createSprite(360,188,10,85)
  box11.shapeColor=("white")
  box12=createSprite(500,508,10,375)
  box12.shapeColor=("white")
  box13=createSprite(430,325,150,10)
  box13.shapeColor=("white")
  box14=createSprite(430,550,150,10)
  box14.shapeColor=("white")
  box15=createSprite(360,500,10,90)
  box15.shapeColor=("white")
  box16=createSprite(300,450,130,10)
  box16.shapeColor=("white")
  box17=createSprite(240,400,10,90)
  box17.shapeColor=("white")
  box18=createSprite(190,638,10,115)
  box18.shapeColor=("white")
  box19=createSprite(158,580,75,10)
  box19.shapeColor=("white")
  box20=createSprite(125,523,10,125)
  box20.shapeColor=("white")
  box21=createSprite(655,583,10,225)
  box21.shapeColor=("white")
  box22=createSprite(630,476,60,10)
  box22.shapeColor=("white")
  box23=createSprite(595,360,10,335)
  box23.shapeColor=("white")
  box24=createSprite(630,275,60,10)
  box24.shapeColor=("white")
  box25=createSprite(720,370,75,10)
  box25.shapeColor=("white")
  box26=createSprite(720,175,75,10)
  box26.shapeColor=("white")

  //Creating the runner.
  runner=createSprite(100,175,10,10)
  runner.addImage(runnerImage)
  runner.scale=0.23
  runner.setCollider("rectangle",0,0,150,150)

  //Creating the tiger.
  tiger=createSprite(315,425,10,10)
  tiger.addImage(tigerImage)
  tiger.scale=0.22
  tiger.velocityY=-6
  tiger.setCollider("rectangle",0,0,350,100)

  //Creating the husky.
  husky=createSprite(555,635,10,10)
  husky.addImage(huskyImage)
  husky.scale=0.18
  husky.velocityY=-6
  husky.setCollider("rectangle",0,0,350,125)

  
 
  //Creating the treasure.
  treasure=createSprite(710,650,10,10)
  treasure.addImage(treasureImage)
  treasure.scale=.10
  edges=createEdgeSprites()

  
  






}

function draw() {
  //Creating the PLAY gameState.
  background(0);  
  if(gameState==="PLAY"){

  
  
   //The code to make the runner move.
    if(keyDown(UP_ARROW)){
    runner.y=runner.y-5
  }
  if(keyDown(DOWN_ARROW)){
    runner.y=runner.y+5
  }
  if(keyDown(LEFT_ARROW)){
    runner.x=runner.x-5
  }
  if(keyDown(RIGHT_ARROW)){
    runner.x=runner.x+5
  }
  //To reset the position of the runner when he loses.
  if(runner.isTouching(box1) || runner.isTouching(box2) || runner.isTouching(box3) || runner.isTouching(box4) || runner.isTouching(box5) || runner.isTouching(box6) || runner.isTouching(box7) || 
  runner.isTouching(box7) || runner.isTouching(box8) || runner.isTouching(box9) || runner.isTouching(box10) || runner.isTouching(box11) || runner.isTouching(box12) || runner.isTouching(box13) || 
  runner.isTouching(box14) || runner.isTouching(box15) || runner.isTouching(box16) || runner.isTouching(box17) || runner.isTouching(box18) || runner.isTouching(box19) || runner.isTouching(box20) || 
  runner.isTouching(box21) || runner.isTouching(box22) || runner.isTouching(box23) || runner.isTouching(box24) || runner.isTouching(box25) || runner.isTouching(box26) || runner.isTouching(husky) || 
  runner.isTouching(tiger)){
      runner.x=100
      runner.y=175
      runner.velocityX=0
      runner.velocityY=0
    }
    //To make sure the tiger and husky don't go out of bounds.
    tiger.bounceOff(box1)
    tiger.bounceOff(box16)
    husky.bounceOff(box1)
    husky.bounceOff(box2)
    runner.bounceOff(edges)
  
    
    //To end the game.
    if(runner.isTouching(treasure)){
      gameState="END"
    }
    

  drawSprites();
  }

  if(gameState==="END"){
    husky.velocityY=0
    tiger.velocityY=0
    runner.velocityY=0
    runner.velocityX=0
    textSize(50)
    fill("white")
    text("You Win!",300,400)

  }
}