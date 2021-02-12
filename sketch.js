var cat, mouse;
var catImg,cat1Img,cat2Img, mouseImg,mouse1Img,mouse2Img;

function preload() {
    //load the images here
    catImg=loadImage("cat1.png");
    mouseImg=loadImage("mouse1.png");
    cat1Img=loadAnimation("cat2.png","cat3.png");
    cat2Img=loadImage("cat4.png");
    mouse1Img=loadAnimation("mouse2.png","mouse3.png");
    mouse2Img=loadAnimation("mouse4.png")
}

function setup(){
    createCanvas(1000,800);

    //create tom and jerry sprites here
    cat=createSprite(800,700);
    cat.addImage(catImg);

    mouse=createSprite(200,700);
    mouse.addImage(mouseImg);
}

function draw() {

     background(255);
    //Write condition here to evalute if tom and jerry collide
      keyPressed();

      if(cat.x-mouse.x<(cat.width-mouse.width)/2){
         cat.addAnimation("stop",cat2Img);
         cat.changeAnimation("stop");
         mouse.changeAnimation("stop1",mouse2Img);
         mouse.changeAnimation("stop1");
         }

    drawSprites();
}


function keyPressed(){
   
  //For moving and changing animation write code here
   if(keyCode===LEFT_ARROW){
     mouse.addAnimation("move",mouse1Img);
     mouse.changeAnimation("move");
     cat.x-=5;
     cat.addAnimation("moving",cat1Img);  
     cat.changeAnimation("moving");   
   }

}