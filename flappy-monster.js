var INITIAL = 1;
var GAME_PLAYING = 2;
var GAME_OVER = 3;

var KEY_CODE = {
  R: 82
};

function FlappyMonster(canvas) {
// Base
  var game = this;

  //Global Attributes
  game.canvas = canvas;
  game.context = game.canvas.getContext('2d');

  // Game State
  game.currentState = INITIAL;
 
  // Create Game Objects
  game.createObjects();

  // Game Speed
  game.velocity = 5;


  // Start Game
  window.requestAnimationFrame(function() {
    game.runGameLoop();
  });

FlappyMonster.prototype.createObjects = function() {
  // Base
  var game = this;

  game.background1 = new GameBackground('images/back.png', game.canvas);
  game.background2 = new GameBackground('images/back.png', game.canvas);
  game.background2.x = game.canvas.width;

Inside the FlappyMonster.prototype.createObjects = function() {

game.background = new GameBackground('back.png', game.canvas);
 game.background.draw(); 
  
  INITIAL--
 // Game State
  game.currentState = INITIAL;

  // Wall Factory
  game.wallFactory = new WallFactory(game.canvas);
  game.wallFactory.generateWalls();

}
FlappyMonster.prototype.start = function() {
   // Base
  var game = this;
}

FlappyMonster.prototype.start = function() {
   // Base
  var game = this;
}
// Game State
  switch (game.currentState) {
    case INITIAL:
      // DRAW INITIAL SCREEN
          break;
   INITIAL
// Game State
  switch (game.currentState) {
    case INITIAL:
      FlappyMonster.prototype.drawInitialScreen = function() {
  // Base
  var game = this;
}
      FlappyMonster.prototype.drawGameOverScreen = function() {
  // Base
  var game = this;

        window.requestAnimationFrame(function() {
    game.runGameLoop();
  });


 // DRAW INITIAL SCREEN
      game.drawInitialScreen();
      break;
  
      case GAME_OVER:
      // DRAW GAME OVER SCREEN
      game.drawGameOverScreen();
      break;
// Draw
 game.context.fillText('Click to Start!', game.canvas.width / 2 - 100, game.canvas.height / 2);

  // Background
  game.context.fillStyle = 'black';
  game.context.fillRect(0, 0, game.canvas.width, game.canvas.height);

  // Text
  game.context.fillStyle = 'white';
  game.context.font = '36px Arial';
  game.context.fillText('INITIAL', game.canvas.width / 2 - 100, game.canvas.height / 2);
  // Bind Events
  game.bindEvents();
Right under states

FlappyMonster.prototype.bindEvents = function() {
  // Base
  var game = this;

  // Mouse Listener
  game.canvas.addEventListener('click', function(event) {
    switch (game.currentState) {
      case INITIAL:
        game.currentState = GAME_PLAYING;
        break;
      case GAME_PLAYING:
        // DRAW GAME PLAYING SCREEN
        break;
    }
  });

// Key Listener
  window.addEventListener('keydown', function(event) {
    switch (game.currentState) {
      case GAME_OVER:
        if(event.keyCode === KEY_CODE.R){
          console.log(event.keyCode);
          game.currentState = GAME_PLAYING;
        }
        break;
    }
      game.background.draw();
    
You are inside the FlappyMonster.prototype.drawGamePlayingScreen = function() {
// Clear Canvas
  game.context.clearRect(0, 0, game.canvas.width, game.canvas.height);

  // Draw Walls
  game.drawWalls();

  console.log(game.wallFactory.walls);
    
  });
};
  / Draw Background
  game.animateBackground();

FlappyMonster.prototype.drawWalls = function() {
  // Base
  var game = this;

  // Draw Walls
  var walls = game.wallFactory.walls;

  for(var i = 0; i < walls.length; i++){
    walls[i].draw();
    walls[i].x = walls[i].x - game.velocity;
  }
/ Collision Check
  game.checkCollisions();
 game.removeExtraWalls();

};
  }
if(game.isCollided(game.monster, walls[i])){
      game.currentState = GAME_OVER;        
FlappyMonster.prototype.checkCollisions = function() {
  // Base
  var game = this;
var walls = game.wallFactory.walls;

  for(var i = 0; i < walls.length; i++){
    if(){
      game.currentState = GAME_OVER;
    }
  }
};
FlappyMonster.prototype.isCollided = function(monster, wall) {
  // Base
  var game = this;
  var isCollided = true;

  // Monster Coordinates
  var monsterTop = game.monster.y;
  var monsterBottom = game.monster.y + game.monster.h;
  var monsterRight = game.monster.x + game.monster.w;
  var monsterLeft = game.monster.x;

  // Wall Coordinates
  var wallTop = wall.y + wall.h + wall.gap; // top of lower wall
  var wallBottom = wall.y + wall.h // bottom of upper wall
  var wallRight = wall.x + wall.w;
  var wallLeft = wall.x;

  if((monsterBottom < wallTop  && monsterTop > wallBottom)
    || (monsterLeft > wallRight)
    || (monsterRight < wallLeft)){
    isCollided = false;
  }

  return isCollided;
}


   FlappyMonster.prototype.removeExtraWalls = function() {
  // Base
  var game = this;

  // Draw Walls
  var walls = game.wallFactory.walls;

  for(var i = 0; i < walls.length; i++){
    if(walls[i].x + walls[i].w < 0){
      // remove
      walls.shift();
    }
  }
};
     
            //text
game.context.fillStyle = 'white';
  game.context.font = '36px Arial';
  game.context.fillText('Game Over :(', game.canvas.width / 2 - 100, game.canvas.height / 2);
  game.context.font = '24px Arial';
  game.context.fillText('Press R to Restart!', game.canvas.width / 2 - 100, game.canvas.height / 2 + 50);

lappyMonster.prototype.animateBackground = function() {
  // Base
  var game = this;

  // Background 1
  game.background1.draw();

  if(Math.abs(game.background1.x) > game.canvas.width){
    game.background1.x = game.canvas.width - game.velocity;
  }
  game.background1.x = game.background1.x - game.velocity;

  // Background 2
  game.background2.draw();

  if(Math.abs(game.background2.x) > game.canvas.width){
    game.background2.x = game.canvas.width - game.velocity;
  }
  game.background2.x = game.background2.x - game.velocity;
};



