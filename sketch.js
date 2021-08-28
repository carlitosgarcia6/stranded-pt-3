var apple, appleImage;
var apple2;
var arrow, arrowImage;
var axe, axeImage;
var backGround, backGroundImage;
var bow, bowImage;
var bread, breadImage;
var log, logImage;
var survivalKnife, survivalKnifeImage;
var survivalist, survivalistImage;
var tree, treeImage;
var tribalPeople, tribalPeopleImage;
var villageHouse, villageHouseImage;



function preload(){
  appleImage = loadImage("apple.png");
  arrowImage = loadImage("arrow.png");
  axeImage = loadImage("axe.png");
  backGroundImage = loadImage("background.jpg");
  bowImage = loadImage("bow.png");
  breadImage = loadImage("bread.png");
  logImage = loadImage("log.png");
  survivalKnifeImage = loadImage("survival knife.png");
  survivalistImage = loadImage("survivalist.png");
  treeImage = loadImage("tree.png");
  tribalPeopleImage = loadImage("tribal people.png");
  villageHouseImage = loadImage("village house.png");

}


function setup() {
  createCanvas(800,400);
 
  survivalist = createSprite(50,325);
  survivalist.addImage(survivalistImage);
  survivalist.scale = 0.25;

  tree = createSprite(600,290);
  tree.addImage(treeImage);

  apple = createSprite(660,260);
  apple.addImage(appleImage);
  apple.scale = 0.07;

  apple2 = createSprite(538,290);
  apple2.addImage(appleImage);
  apple2.scale = 0.07;

  bow = createSprite(400,320);
  bow.addImage(bowImage);
  bow.scale = 0.3;

  axe = createSprite(400,200);
  axe.addImage(axeImage);
  axe.scale = 0.1;

  
  arrow = createSprite(400,210); 
  arrow.addImage(arrowImage);
  arrow.scale = 0.3;
  
  bread = createSprite(400,220);
  bread.addImage(breadImage);
  bread.scale = 0.1;
  
  




}

function draw() {
  background(backGroundImage);  










  drawSprites();
}