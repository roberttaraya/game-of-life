window.onload = function(){
  console.log('window loaded!');

  var game = new Game(20,25)
};



var Game = function(rows,cols){
  console.log("Game: a new game has started");
  var cell = new Cell(rows,cols)
  var board = new Board(rows,cols)
}
