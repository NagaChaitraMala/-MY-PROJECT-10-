var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["3d6f50ea-69ea-465d-adcb-644de81e771c","35c0529a-a1f6-496a-a842-03a9ec0e2807","7811bb10-cebc-4619-b95a-06d1919e96a8","e64c3127-3b66-4da6-b69d-1d80a437eb62","db6da340-9756-47c0-96f6-d6ebb339ebf9","c86e7bbe-8364-4956-8022-624e31adfea8","0d2260c9-783b-4e85-8b84-279a8a640816"],"propsByKey":{"3d6f50ea-69ea-465d-adcb-644de81e771c":{"name":"red_shirt_hand_up2_1","sourceUrl":"assets/api/v1/animation-library/gamelab/hLsHWGuXD9WN_9LOAW97U7QZkkcXM_MR/category_people/red_shirt_hand_up2.png","frameSize":{"x":174,"y":396},"frameCount":1,"looping":true,"frameDelay":2,"version":"hLsHWGuXD9WN_9LOAW97U7QZkkcXM_MR","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":174,"y":396},"rootRelativePath":"assets/api/v1/animation-library/gamelab/hLsHWGuXD9WN_9LOAW97U7QZkkcXM_MR/category_people/red_shirt_hand_up2.png"},"35c0529a-a1f6-496a-a842-03a9ec0e2807":{"name":"dieWhite4_1","sourceUrl":"assets/api/v1/animation-library/gamelab/H7pT7dIZkWPVYOuRiZd2MEex_Xb0IisM/category_board_games_and_cards/dieWhite4.png","frameSize":{"x":64,"y":64},"frameCount":1,"looping":true,"frameDelay":2,"version":"H7pT7dIZkWPVYOuRiZd2MEex_Xb0IisM","categories":["board_games_and_cards"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":64},"rootRelativePath":"assets/api/v1/animation-library/gamelab/H7pT7dIZkWPVYOuRiZd2MEex_Xb0IisM/category_board_games_and_cards/dieWhite4.png"},"7811bb10-cebc-4619-b95a-06d1919e96a8":{"name":"dieRed3_1","sourceUrl":"assets/api/v1/animation-library/gamelab/gtxtkC_7YyQgUOVv.C73AISjwF1rhZlD/category_board_games_and_cards/dieRed3.png","frameSize":{"x":64,"y":64},"frameCount":1,"looping":true,"frameDelay":2,"version":"gtxtkC_7YyQgUOVv.C73AISjwF1rhZlD","categories":["board_games_and_cards"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":64},"rootRelativePath":"assets/api/v1/animation-library/gamelab/gtxtkC_7YyQgUOVv.C73AISjwF1rhZlD/category_board_games_and_cards/dieRed3.png"},"e64c3127-3b66-4da6-b69d-1d80a437eb62":{"name":"dieWhite2_1","sourceUrl":"assets/api/v1/animation-library/gamelab/ri3XQ.XyfyxwQWVVbh9fCEMSGfMLJig3/category_board_games_and_cards/dieWhite2.png","frameSize":{"x":64,"y":64},"frameCount":1,"looping":true,"frameDelay":2,"version":"ri3XQ.XyfyxwQWVVbh9fCEMSGfMLJig3","categories":["board_games_and_cards"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":64},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ri3XQ.XyfyxwQWVVbh9fCEMSGfMLJig3/category_board_games_and_cards/dieWhite2.png"},"db6da340-9756-47c0-96f6-d6ebb339ebf9":{"name":"dieRed1_1","sourceUrl":"assets/api/v1/animation-library/gamelab/V1PZOxYLJE1j5GPz6xD7YYg9HFTHB06z/category_board_games_and_cards/dieRed1.png","frameSize":{"x":64,"y":64},"frameCount":1,"looping":true,"frameDelay":2,"version":"V1PZOxYLJE1j5GPz6xD7YYg9HFTHB06z","categories":["board_games_and_cards"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":64},"rootRelativePath":"assets/api/v1/animation-library/gamelab/V1PZOxYLJE1j5GPz6xD7YYg9HFTHB06z/category_board_games_and_cards/dieRed1.png"},"c86e7bbe-8364-4956-8022-624e31adfea8":{"name":"flat_medal3_1","sourceUrl":"assets/api/v1/animation-library/gamelab/LFDQwmDhLPm18QgUIuvq64wV0etLxGPU/category_board_games_and_cards/flat_medal3.png","frameSize":{"x":41,"y":74},"frameCount":1,"looping":true,"frameDelay":2,"version":"LFDQwmDhLPm18QgUIuvq64wV0etLxGPU","categories":["board_games_and_cards"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":41,"y":74},"rootRelativePath":"assets/api/v1/animation-library/gamelab/LFDQwmDhLPm18QgUIuvq64wV0etLxGPU/category_board_games_and_cards/flat_medal3.png"},"0d2260c9-783b-4e85-8b84-279a8a640816":{"name":"flat_medal9_1","sourceUrl":"assets/api/v1/animation-library/gamelab/RQFFDcOPy3LiL6dEAv.34CPitAokoNPd/category_board_games_and_cards/flat_medal9.png","frameSize":{"x":41,"y":74},"frameCount":1,"looping":true,"frameDelay":2,"version":"RQFFDcOPy3LiL6dEAv.34CPitAokoNPd","categories":["board_games_and_cards"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":41,"y":74},"rootRelativePath":"assets/api/v1/animation-library/gamelab/RQFFDcOPy3LiL6dEAv.34CPitAokoNPd/category_board_games_and_cards/flat_medal9.png"}}};
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



//creating optical stores 
var opticalstore = createSprite(200, 20,200,20);
opticalstore.setAnimation("flat_medal9_1");

//creating player
var player =createSprite(200,350,20,20);
player.setAnimation("red_shirt_hand_up2_1");
player.scale=0.2;

//creating obstacles
var obstacle1 = createSprite(50,280,100,10);
obstacle1.setAnimation("dieWhite4_1");
obstacle1.scale=0.5;

var obstacle2 = createSprite(150,200,100,10);
obstacle2.setAnimation("dieRed3_1");
obstacle2.scale=0.5;

var obstacle3 = createSprite(250,150,100,10);
obstacle3.setAnimation("dieWhite2_1");
obstacle3.scale=0.5;

var obstacle4 = createSprite(350,100,100,10);
obstacle4.setAnimation("dieRed1_1");
obstacle4.scale=0.5;

// creating walls
var wall1 = createSprite(6,200,10,400);
wall1.shapeColor="pink";
var wall2 = createSprite(394,200,10,400)
wall2.shapeColor="pink";

// giving velocity to obstacles
obstacle1.velocityX=+7;
obstacle2.velocityX=-7;
obstacle3.velocityX=+7;
obstacle4.velocityX=-7;

// storing score in a var
var score=0;

function draw() 
{
  background("black");

createEdgeSprites();
// making obstacles bounce off walls
obstacle1.bounceOff(wall1);
obstacle1.bounceOff(wall2);
obstacle2.bounceOff(wall1);
obstacle2.bounceOff(wall2);
obstacle3.bounceOff(wall1);
obstacle3.bounceOff(wall2);                               
obstacle4.bounceOff(wall1);
obstacle4.bounceOff(wall2); 
  
player.bounceOff(edges);











  
// moving player using arrow keys
if (keyDown("UP_ARROW")) 
{
    player.y=player.y-3
  }
    
if (keyDown("DOWN_ARROW")) 
{
    player.y=player.y+3
  }  
    
 if (keyDown("RIGHT_ARROW")) 
{
    player.x=player.x+3
  }   
  
 if (keyDown("LEFT_ARROW")) 
{
    player.x=player.x-3
  }    
  
// display text
 fill("pink");
 textSize(25);
 text("Accidents: "+score,230,50);
    
 // bringing back player to original position if he is touching obstacles
if (player.isTouching(obstacle1)||player.isTouching(obstacle2)||player.isTouching(obstacle3)||player.isTouching(obstacle4)) {
  
  player.x=200;
  player.y=390;
  score=score+1;
  
playSound("assets/category_explosion/destruction_5.mp3", false);
    
}
  
// display text

if (player.isTouching(opticalstore))
{
 fill("pink");
 textSize(25);
 text("You Won", 120,100);
  
}

  
drawSprites();
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
