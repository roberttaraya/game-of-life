window.onload = function(){
  var game = new Game(75,150)
};


var Game = function(rows,cols){
  this.timeInterval = 500
  this.maxRows = rows
  this.maxCols = cols
  this.cell = new Cell(rows,cols)
  this.board = new Board(rows,cols)
  this.runIT(rows,cols)
}

Game.prototype.cellLiveOrDie = function(rows, cols){
  for (var x=1; x<=this.maxRows; x++){
    for (var y=1; y<=this.maxCols; y++){
      var liveCellCount = this.cell.findLiveNeighbors(x,y)
      var cellInQuestion = this.cell.buildCellId(x, y)
      if (cellInQuestion.attr('class')==='active'){
        if (liveCellCount < 2){
          cellInQuestion.attr('class', 'inactive')
        } else if (liveCellCount === 2 || liveCellCount === 3){
          cellInQuestion.attr('class', 'active')
        } else if (liveCellCount > 3){
          cellInQuestion.attr('class', 'inactive')
        }
      } else {
        if (liveCellCount === 3){
          cellInQuestion.attr('class', 'active')
        }
      }
    }
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
  }, this.timeInterval)
    // oldTable = newTable
    // newTable = document.getElementById("game-table")
  // }
}