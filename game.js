var Game = function(){
  this.timeInterval = 300
  this.maxRows = 60
  this.maxCols = 140
  this.cell = new Cell(this.maxRows, this.maxCols)
  this.board = new Board(this.maxRows, this.maxCols)
  this.cellsToStayAliveArray = []
  this.cellsToDieArray = []
  this.runIT(this.maxRows, this.maxCols)
}

Game.prototype.cellLiveOrDie = function(){
  var self = this
  var toStayAliveArray = []
  var toDieArray = []
  self.cellsToStayAliveArray.forEach(function(liveCell){
    var x = liveCell[0]
    var y = liveCell[1]
    self.cell.findLiveNeighbors(x,y)
    var liveCellCount = self.cell.findLiveNeighbors(x,y)
    var cellInQuestion = self.cell.buildCellId(x,y)
    if (cellInQuestion.attr('class')==='active'){
      if (liveCellCount === 2 || liveCellCount === 3){
        toStayAliveArray.push([x,y])
      } else if (liveCellCount < 2){
        toDieArray.push([x,y])
      } else if (liveCellCount>3){
        toDieArray.push([x,y])
      }
    } else {
      if (liveCellCount === 3){
        toStayAliveArray.push([x,y])
      }
    }
  })
  for (var x=1; x<=self.maxRows; x++){
    for (var y=1; y<=self.maxCols; y++){
      var cellInQuestion = self.cell.buildCellId(x,y)
      if (cellInQuestion.attr('class')==='inactive'){
        var liveCellCount = self.cell.findLiveNeighbors(x,y)
        if (liveCellCount===3){
          toStayAliveArray.push([x,y])
        }
      }
    }
  }
  self.cellsToDieArray = toDieArray
  self.cellsToStayAliveArray = toStayAliveArray
  self.setCellState()
}

Game.prototype.runIT = function(rows, cols){
  // var oldTable = ""
  // var newTable = document.getElementById("game-table")
  var count = 0
  // while(oldTable !== newTable){
  // for (var i = 1; i <= 1000; i++){
  var self = this
  this.cellsToStayAliveArray = this.randomInitialCellState()
  // this.cellsToStayAliveArray = this.gliderInitialCellState()
  // this.cellsToStayAliveArray = this.acornInitialCellState()
  // this.cellsToStayAliveArray = this.rPentominoInitialCellState()
  // this.cellsToStayAliveArray = this.gosperGliderGunInitialCellState()
  this.setCellState()
  setInterval(function(){
    self.cellLiveOrDie()
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
  var randomNum = Math.floor( Math.random() * 5 )+1
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

Game.prototype.gliderInitialCellState = function(){
  var x = this.maxRows/2
  var y = this.maxCols/2
  var acornInitialCoordinates = [ [x-1, y], [x, y+1], [x+1, y-1], [x+1, y], [x+1, y+1] ]
  return acornInitialCoordinates
}

Game.prototype.acornInitialCellState = function(){
  var x = this.maxRows/2
  var y = Math.floor(this.maxCols*2/3)
  var acornInitialCoordinates = [ [x-1, y+1], [x, y+3], [x+1, y], [x+1, y+1], [x+1, y+4], [x+1, y+5], [x+1, y+6] ]
  return acornInitialCoordinates
}

Game.prototype.rPentominoInitialCellState = function(){
  var x = this.maxRows/2
  var y = this.maxCols/2
  var rPentominoInitialCoordinates = [ [x-1, y+1], [x-1, y+2], [x, y], [x, y+1], [x+1, y+1]]
  return rPentominoInitialCoordinates
}

Game.prototype.gosperGliderGunInitialCellState = function(){
  var x = Math.floor(this.maxRows/2)
  var y = Math.floor(this.maxCols/6)
  var gosperGliderGunInitialCoordinates = [ [x-5, y+24],
                                            [x-4, y+22], [x-4, y+24],
                                            [x-3, y+12], [x-3, y+13], [x-3, y+20], [x-3, y+21], [x-3, y+34], [x-3, y+35],
                                            [x-2, y+11], [x-2, y+15], [x-2, y+20], [x-2, y+21], [x-2, y+34], [x-2, y+35],
                                            [x-1, y], [x-1, y+1], [x-1, y+10], [x-1, y+16], [x-1, y+20], [x-1, y+21],
                                            [x, y], [x, y+1], [x, y+10], [x, y+14], [x, y+16], [x, y+17], [x, y+22], [x, y+24],
                                            [x+1, y+10], [x+1, y+16], [x+1, y+24],
                                            [x+2, y+11], [x+2, y+15],
                                            [x+3, y+12], [x+3, y+13] ]
  return gosperGliderGunInitialCoordinates
}

Game.prototype.setLiveCellState = function(liveCellArray){
  var self = this
  this.board.clearGameTable()
  liveCellArray.forEach(function(liveCell){
    var x = liveCell[0]
    var y = liveCell[1]
    var cellState = self.cell.buildCellId(x, y)
    cellState.attr('class', 'active')
  })
}
