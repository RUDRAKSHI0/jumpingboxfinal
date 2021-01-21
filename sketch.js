var canvas;
var music1,music2,music3,music4;
var rect1,rect2,rect3,rect4;
var box;
var start;

function preload(){
    music1 = loadSound("sound1.mp3");
    music2 = loadSound("sound2.mp3");
    music3 = loadSound("sound3.mp3");
    music4 = loadSound("sound4.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
rect1=createSprite(97,585,190,20);
rect1.shapeColor = "blue";
rect2=createSprite(310,585,220,20);
rect2.shapeColor = "orange";
rect3=createSprite(520,585,180,20);
rect3.shapeColor = "maroon";
rect4=createSprite(719,585,180,20);
rect4.shapeColor = "green";
    //create box sprite and give velocity
box=createSprite((random(20,750)),300,30,30);
box.shapeColor = "white";
box.velocityX=-2;
box.velocityY=5;

//start = createButton("start");
//start.size(120,30);
//start.position(350,215);

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    //createEdgeSprites();
    //box.bounceOff(edges);
    if(isTouching(box,rect1) && bounceoff(box,rect1)){
        box.shapeColor = "blue"
      //  music.play();
        box.velocityX=0;
    box.velocityY=0;
    music1.stop();
    }
    if(isTouching(box,rect2) && bounceoff(box,rect2)){
        box.shapeColor = "orange"
        music2.play();
    }
    if(isTouching(box,rect3) && bounceoff(box,rect3)){
        box.shapeColor = "maroon"
        music3.play();
    }
    if(isTouching(box,rect4) && bounceoff(box,rect4)){
        box.shapeColor = "green"
        music4.play();
    }
//if(box.isTouching(rect1)){
    

edgesbounce(box);
    drawSprites();
    //add condition to check if box touching surface and make it box
}
