var INITIAL = 1;
var GAME_PLAYING = 2;
var GAME_OVER = 3;

function FlappyMonster(canvas) {
// Base
  var game = this;

  //Global Attributes
  game.canvas = canvas;
  game.context = game.canvas.getContext('2d');

  // Game State
  game.currentState = INITIAL;

  // Start Game
  window.requestAnimationFrame(function() {
    game.runGameLoop();
  });

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

 // DRAW INITIAL SCREEN
      game.drawInitialScreen();
      break;
    case GAME_OVER:
      // DRAW GAME OVER SCREEN
          break;
      case GAME_OVER:
      // DRAW GAME OVER SCREEN
      game.drawGameOverScreen();
      break;

  }



