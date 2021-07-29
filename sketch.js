var player;
var ground;
var obstacleGroup;
var gameState = 1;

function preload(){

}

function setup() {
createCanvas(800,500);
player = createSprite(100,30,40,20);  
player.shapeColor = "red";
ground = createSprite(400,480,800,20);
ground.shapeColor = "brown";
obstacleGroup = new Group();
}

function draw() {
  background(46,139,87);
 
  if(gameState === 1){
if(keyDown("up")){
  player.velocityY = -7; 
}

if(keyDown("right")){
  player.x = player.x + 2; 
}

player.velocityY = player.velocityY + 0.5;
player.collide(ground);

console.log(frameCount);

if(player.isTouching(obstacleGroup)){
  gameState = 2;
}
spawnObstacle();

  drawSprites();
}
fill("black");
textSize(30);
if(gameState ===2){
  text("GAME OVER",200,200);
  player.velocityY = 0;
  player.velocityX = 0;
  obstacleGroup.setVelocityEach(0);
}
}

function spawnObstacle(){
  if(frameCount%50===0){
    var obstacle = createSprite(780,380,30,20);
    obstacle.velocityX = -6;
    obstacleGroup.add(obstacle);
  }
  
}

