var Game = function(){
  this.timeInterval = 500
  this.maxRows = 80
  this.maxCols = 160
  this.cell = new Cell(this.maxRows, this.maxCols)
  this.board = new Board(this.maxRows, this.maxCols)
  this.runIT(this.maxRows, this.maxCols)
}

Game.prototype.cellLiveOrDie = function(){
  var cellsToStayAliveArray = []
  for (var x=1; x<=this.maxRows; x++){
    for (var y=1; y<=this.maxCols; y++){
      var liveCellCount = this.cell.findLiveNeighbors(x,y)
      var cellInQuestion = this.cell.buildCellId(x, y)
      if (cellInQuestion.attr('class')==='active'){
        if (liveCellCount === 2 || liveCellCount === 3){
          cellsToStayAliveArray.push([x,y])
        }
      } else {
        if (liveCellCount === 3){
          cellsToStayAliveArray.push([x,y])
        }
      }
    }
  }
  this.setLiveCellState(cellsToStayAliveArray)
}

Game.prototype.runIT = function(rows, cols){
  // var oldTable = ""
  // var newTable = document.getElementById("game-table")
  var count = 0
  // while(oldTable !== newTable){
  // for (var i = 1; i <= 1000; i++){
  var self = this
  var initialCellStateArray = this.acornInitialCellState()
  this.setCellState(initialCellStateArray)
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

Game.prototype.randomNum = function(){
  var randomNum = Math.floor( Math.random() * 15 )+1
  return randomNum
}

Game.prototype.randomInitialCellState = function(){
  var randomInitialCoordinates = []
  for (var x=1; x<=this.maxRows; x++){
    for (var y=1; y<=this.maxCols; y++){
      var num = this.randomNum()
      if (num===1){
        randomInitialCoordinates.push([x,y])
      }
    }
  }
  return randomInitialCoordinates
}

Game.prototype.acornInitialCellState = function(){
  var acornInitialCoordinates = [ [38, 107], [39, 109], [40, 106], [40, 107], [40, 110], [40, 111], [40, 112] ]
  return acornInitialCoordinates
}

Game.prototype.rPentominoInitialCellState = function(){
  var rPentominoInitialCoordinates = [ [39, 81], [39, 82], [40, 80], [40, 81], [41, 81]]
  return rPentominoInitialCoordinates
}

Game.prototype.setCellState = function(liveCellArray){
  var self = this
  liveCellArray.forEach(function(liveCell){
    var x = liveCell[0]
    var y = liveCell[1]
    var cellState = self.cell.buildCellId(x, y)
    cellState.attr('class', 'active')
  })
}
