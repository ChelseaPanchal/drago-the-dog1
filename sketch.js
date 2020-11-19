//Create variables here
 

function preload()
{
  //load images here
  img1=loadImage("dogImg.png")
  img=loadImage("dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  foodStock=database.ref('Food');
  foodStock.on("value",readStock)
  dog=createSprite(250,250,10,10)
dog.addImage(img1)
}


function draw() {  
  if(keyDown(UP_ARROW)){
    writeStock(Food);
    dog.addImage(img);
  }
  drawSprites();
  //add styles here

}
function readStock(data){
foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0
  }else{
    x=x-1
  }
database.ref('/').update({
  Food:x
})
}

