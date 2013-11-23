window.onload = function(){
  console.log('window loaded!');

  var game = new Game(20,25)
  game.cellLiveOrDie(20,25)
};



var Game = function(rows,cols){
  console.log("Game: a new game has started");
  this.board = new Board(rows,cols)
}

Game.prototype.cellLiveOrDie = function(rows, cols){
  for (var x=1; x<=rows; x++){
    for (var y=1; y<=cols; y++){
      var liveCellCount = Cell.prototype.findLiveNeighbors(x,y)
      var cellId = ""
      cellId = cellId + "row" + x
      cellId = cellId + "col" + y
      cellInQuestion = document.getElementById(cellId)
      if (cellInQuestion.className==='active'){
        cell is alive
        if (liveCellCount < 2){
          cellInQuestion.className='inactive'
        } else if (liveCellCount === 2 || liveCellCount === 3){
          cellInQuestion.className='active'
        } else if (liveCellCount > 3){
          cellInQuestion.className='inactive'
        }
      } else {
        if (liveCellCount === 3){
          cellInQuestion.className='active'
        }
      }
    }
  }
}

Game.prototype.runIT = function(){

}