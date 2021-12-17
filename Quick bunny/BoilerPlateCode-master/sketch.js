var player;
var target;
var obs1;
var obs2;
var obs3;
var obs4;
var obs5; 
var obs6; 
var obs7; 
var obs8;
var obs9;  
var edges;




function preload() {
  bgImage = loadImage("images/bg.png");
  bunnyImage = loadImage("images/bunnyImg.png");
  carrotImage = loadImage("images/carrot.png");
  snakeImage = loadImage("images/snake.png");
  }


function setup() {
  createCanvas(600,600);
  edges=createEdgeSprites();
  bg=createSprite(300,300,600,600)
  bg.addImage(bgImage)
  bg.scale=6.5
  player=createSprite(50,550,30,30);
  player.addImage(bunnyImage)
  player.scale=0.5
  target=createSprite(550,50,30,30);
  target.addImage(carrotImage)
  target.scale=0.15
  obs1=createSprite(90,350,90,30);
  obs1.shapeColor="brown"
  obs2=createSprite(190,350,90,30);
  obs2.shapeColor="brown"

  obs1.velocityX=6
  obs2.velocityX=-6

  obs3=createSprite(290,350,90,30);
  obs3.shapeColor="brown"
  obs4=createSprite(390,350,90,30);
  obs4.shapeColor="brown"

  obs3.velocityX=6
  obs4.velocityX=-6

  obs5=createSprite(90,280,90,30);
  obs5.shapeColor="brown"
  obs6=createSprite(190,280,90,30);
  obs6.shapeColor="brown"

  obs5.velocityX=6
  obs6.velocityX=-6

  obs7=createSprite(290,280,90,30);
  obs7.shapeColor="brown"
  obs8=createSprite(390,280,90,30);
  obs8.shapeColor="brown"

  obs7.velocityX=6
  obs8.velocityX=-6

  obs9=createSprite(250,100,150,5);
  obs9.addImage(snakeImage)
  obs9.scale=0.4
  obs10=createSprite(150,300,80,5);
  obs10.addImage(snakeImage)
  obs10.scale=0.4
  obs11=createSprite(450,450,120,5);
  obs11.addImage(snakeImage)
  obs11.scale=0.4

  obs9.velocityX=6
  obs10.velocityX=-6
  obs11.velocityX=6
}

function draw() {
  drawSprites();

  bgImage 
  bunnyImage 
  carrotImage 
  snakeImage 

  obs1.bounceOff(edges[1]); 
  obs1.bounceOff(edges[0]); 
  obs2.bounceOff(edges[1]); 
  obs2.bounceOff(edges[0]);
  obs3.bounceOff(edges[1]); 
  obs3.bounceOff(edges[0]); 
  obs4.bounceOff(edges[1]); 
  obs4.bounceOff(edges[0]);
  obs5.bounceOff(edges[1]); 
  obs5.bounceOff(edges[0]); 
  obs6.bounceOff(edges[1]); 
  obs6.bounceOff(edges[0]);
  obs7.bounceOff(edges[1]); 
  obs7.bounceOff(edges[0]); 
  obs8.bounceOff(edges[1]); 
  obs8.bounceOff(edges[0]);
  obs9.bounceOff(edges[1]); 
  obs9.bounceOff(edges[0]);
  obs10.bounceOff(edges[1]); 
  obs10.bounceOff(edges[0]);
  obs11.bounceOff(edges[1]); 
  obs11.bounceOff(edges[0]);
  if(keyDown("up")){
    player.y=player.y-3;
  }

  if(keyDown("down")){
    player.y=player.y+3;
  }
  if(keyDown("right")){
    player.x=player.x+3;
  }

  if(keyDown("left")){
    player.x=player.x-3;
}
if(player.isTouching(target))
{   text("YOU WIN",200,200); } 
if(player.isTouching(obs9))
{   player.x=50
    player.y=550
  text("YOU LOSE",200,200); } 
  if(player.isTouching(obs10))
{   player.x=50
    player.y=550
  text("YOU LOSE",200,200); } 
  if(player.isTouching(obs11))
{   player.x=50
    player.y=550
  text("YOU LOSE",200,200); }

}
