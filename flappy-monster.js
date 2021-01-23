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


  // Start Game
  window.requestAnimationFrame(function() {
    game.runGameLoop();
  });

FlappyMonster.prototype.createObjects = function() {
  // Base
  var game = this;

  INITIAL--
 // Game State
  game.currentState = INITIAL;

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
  });
};
  

  }
//text
game.context.fillStyle = 'white';
  game.context.font = '36px Arial';
  game.context.fillText('Game Over :(', game.canvas.width / 2 - 100, game.canvas.height / 2);
  game.context.font = '24px Arial';
  game.context.fillText('Press R to Restart!', game.canvas.width / 2 - 100, game.canvas.height / 2 + 50);



