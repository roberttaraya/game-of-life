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
    self.displayGenerationCounter(count)
  }, this.timeInterval)
    // oldTable = newTable
    // newTable = document.getElementById("game-table")
  // }
}

Game.prototype.displayGenerationCounter = function(count){
  var counter = $("#generation-container")
  var output = ""
  output = output + "<h2>"
  output = output + "Generation: " + count
  output = output + "</h2>"
  counter.html(output)
}

Game.prototype.randomInitialCellState = function(){
  var randomNum = Math.floor( Math.random() * 15 )+1;
  if (randomNum===1){
    return true
  } else {
    return false
  }
}

Game.prototype.acornInitialCellState = function(){
  var acornInitialCoordinates = [ [58, 107], [59, 109], [60, 106], [60, 107], [60, 110], [60, 111], [60, 112] ]
}

Game.prototype.rPentomino = function(){
  var rPentominoInitialCoordinates = [ [59, 81], [59, 82], [60, 80], [60, 81], [61, 81]]
}

Board.prototype.drawInitialCellState = function(rows,cols){
  tableElement = "<table id='game-table' border='3'></table>"
  divContainer = $('#game-container')
  divContainer.html(tableElement)
  this.createRowsAndColsOfGameTable(rows,cols)
}