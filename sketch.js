var tom,tomImg1,tomImg2,tomImg3,jerry,jerryImg1,jerryImg2,jerryImg3,,garden,gardenImg;


function preload() {
    tom1Img =loadAnimation("images/tomOne.png")
    tom2Img =loadAnimation("images/tomTwo.png,images/tomThree.png")
    tom3Img =loadAnimation("images/tomFour.png")
    jerryImg =loadAnimation("images/jerryOne.png")
    jerryImg =loadAnimation("images/jerryTwo.png,images/jerryThree")
    jerryImg =loadAnimation("images/jerry.png")
    gardenImg =loadImage("garden.png")
    //load the images here
}

function setup(){
    createCanvas(1000,800);

    //create tom and jerry sprites here

    garden =createSprite(900,900)
    garden.addImage(gardenImg)

    tom =createSprite(950,800)
    tom.addAnimation(tomSleeping,tomImg1)
    tom.scale =0.3;

    jerry =createSprite(959,850)
    jerry.addAnimation(jerryTeasing,jerryImg1)
    jerry.scale =0.2;

}

function draw() {

    background(255);
    if(keyDown(LEFT_ARROW)){
        tom.velocityX =-4;
    }
    Text(mouseX + ';' + mouseY,15,50)
    //Write condition here to evalute if tom and jerry collide
keyPressed();

if(tom.x - jerry.x < tom.width/2 - jerry.width/2 
&& jerry.x - tom.x < jerry.width/2 - tom.width/2
&& tom.y - jerry.y < tom.height/2 - jerry.height/2
&& jerry.y - tom.y < jerry.height/2 - tom.height/2 ){
tom.addAnimation("tomLastImage,tomImg3")
tom.changeAnimation("tomLastImage")
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode  ==LEFT_ARROW){
    tom.velocityX =-4;
    tom.addAnimation("catRunning,catImg2");
    tom.changeAnimation("catRunning")
}

}

