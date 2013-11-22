window.onload = function(){
  console.log('window loaded!');

  var game = new Game(20,25)
};



var Game = function(rows,cols){
  console.log("Game: a new game has started");
  this.board = new Board(rows,cols)
}

game.prototype