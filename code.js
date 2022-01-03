var p5Inst = new p5(null, 'sketch');
var edges
window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var StartingPoint = createSprite (10,190,100,150);
StartingPoint.shapeColor = "rgb(137,207,240)";
var EndingPoint = createSprite(370,190,100,150);
EndingPoint.shapeColor = "rgb(255,229,124)";
var Sam = createSprite (50,190,20,20);
Sam.shapeColor = "green";
var car1 = createSprite (100,190,10,10);
car1.shapeColor = "red";
car1.velocityY = -5;
var car2 = createSprite (150,190,10,10);
car2.shapeColor = "red";
car2.velocityY = 5;
var car3 = createSprite (200,190,10,10);
car3.shapeColor = "red";
car3.velocityY = -5;
var car4 = createSprite (250,190,10,10);
car4.shapeColor = "red";
car4.velocityY = 5;

var wall1 = createSprite (200,120,400,10);
var wall2 = createSprite (200,260,400,10);

var Lives = 3;
playSound("assets/category_animals/cat.mp3", false);


function draw() {
  background("violet");
  drawSprites();
  textSize(25);
  fill("yellow");
  text("Lives: "+Lives,190,290);
  
  
  edges = createEdgeSprites();
  Sam.bounceOff(edges [0]);
  Sam.bounceOff(edges[1]);
if(keyDown(LEFT_ARROW)){
  Sam.x-=5;
}
  if(keyDown(RIGHT_ARROW)){
  Sam.x+=5;
}
  car1.bounceOff(wall1);
  car1.bounceOff(wall2);
  car2.bounceOff(wall1);
  car2.bounceOff(wall2);
  car3.bounceOff(wall1);
  car3.bounceOff(wall2);
  car4.bounceOff(wall1);
  car4.bounceOff(wall2);

  if(Sam.isTouching(car1)|| Sam.isTouching(car2)|| Sam.isTouching(car3)|| Sam.isTouching(car4)){
    Sam.x = 50;
    Sam.y = 190;
   Lives-=1;
  }
  if(Lives <= 0){
    textSize(25);
    fill("red");
    text("Better luck next time!",120,55);
    car1.velocityY = 0;
    car2.velocityY = 0;
    car3.velocityY = 0;
    car4.velocityY = 0;
    Sam.velocityX = 0;
  }
  if (Sam.isTouching(EndingPoint)){
    textSize(25);
    fill("yellow");
    text("Sam has reached his destination!",25,50);
    car1.velocityY = 0;
    car2.velocityY = 0;
    car3.velocityY = 0;
    car4.velocityY = 0;
    Sam.velocityX = 0;
  }
  
  
  
}








// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
