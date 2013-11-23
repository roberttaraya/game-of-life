window.onload = function(){
  var game = new Game(20,25)
  game.runIT(20,55)
};


var Game = function(rows,cols){
  this.cell = new Cell(rows,cols)
  this.board = new Board(rows,cols)
  // debugger
}

Game.prototype.cellLiveOrDie = function(rows, cols){
  for (var x=1; x<=20; x++){
    for (var y=1; y<=25; y++){
      // debugger
      var liveCellCount = this.cell.findLiveNeighbors(x,y)
      var cellId = ""
      cellId = cellId + "row" + x
      cellId = cellId + "col" + y
      cellInQuestion = document.getElementById(cellId)
      // debugger
      if (cellInQuestion.className==='active'){
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
      // debugger
  }
}

Game.prototype.runIT = function(rows, cols){
  var oldTable = ""
  var newTable = document.getElementById("game-table")
  var count = 0
  // while(oldTable !== newTable){
  // for (var i = 1; i <= 1000; i++){
  var self = this
  setInterval(function(){
    self.cellLiveOrDie(rows, cols)
    count += 1
    console.log("count:", count)
  }, 500)
    // oldTable = newTable
    // newTable = document.getElementById("game-table")
    // debugger
  // }
}