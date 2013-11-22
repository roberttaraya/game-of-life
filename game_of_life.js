window.onload = function(){
  console.log('window loaded!');
  var cell = new Cell()
  var board = new Board(20, 25)
  var game = new Game()
  debugger

};

var Cell = function(){
  console.log("Cell: defines a cell's attributes");
  this.cellStatus = initialCellStatus();
}

function initialCellStatus(){
  if (randomNumber() === 1){
    return true;
  } else {
    return false;
  }
}

function randomNumber(){
  return Math.floor( Math.random() * 3 )+1;
}

Cell.prototype.toggleCellStatus = function(){
  console.log("toggleCellStatus: changes the cell status from dead to alive or vice versa");
  if (this.cellStatus === true){
    this.cellStatus = false;
  } else {
    this.cellStatus = true;
  }
};

Cell.prototype.findNeighbors = function(x, y){
  if ((x===1 || x===10) && (y===1 || y===10)){
    return findNeighborsForCornerCell(x, y)
  } else if ((x===1)&&(y>=2 || y<=9)){
    return findNeighborsForTopEdgeCells(x, y)
  } else if ((x===10)&&(y>=2 || y<=9)){
    return findNeighborsForBottomEdgeCells(x, y)
  } else if ((x>=2 || x<=9)&&(y===10)){
    return findNeighborsForRightEdgeCells(x, y)
  } else if ((x>=2 || x<=9)&&(y===1)){
    return findNeighborsForLeftEdgeCells(x, y)
  } else {
    return findNeighborsForCenterCells(x, y)
  }
}

    function findNeighborsForCornerCell(x, y){
      if (x===1 && y===1){
        return [[x, y+1], [x+1, y], [x+1, y+1]];
      } else if (x===10 && y===1){
        return [[x, y+1], [x-1, y], [x-1, y+1]];
      } else if (x===1 && y===10){
        return [[x, y-1], [x+1, y-1], [x+1, y]];
      } else if (x===10 && y===10){
        return [[x-1, y], [x-1, y-1], [x, y-1]];
      }
    }

    function findNeighborsForTopEdgeCells(x, y){
      return [[x, y-1], [x+1, y-1], [x+1, y], [x+1, y+1], [x, y+1]]
    }

    function findNeighborsForBottomEdgeCells(x, y){
      return [[x, y-1], [x-1, y-1], [x-1, y], [x-1, y+1], [x, y+1]]
    }

    function findNeighborsForRightEdgeCells(x, y){
      return [[x-1, y], [x-1, y-1], [x, y-1], [x+1, y-1], [x+1, y]]
    }

    function findNeighborsForLeftEdgeCells(x, y){
      return [[x-1, y], [x-1, y+1], [x, y+1], [x+1, y+1], [x+1, y]]
    }

    function findNeighborsForCenterCells(x, y){
      return [[x-1, y-1], [x-1, y], [x-1, y+1], [x, y-1], [x, y+1], [x+1, y-1], [x+1, y], [x+1, y+1]]
    }

var Board = function(maxRows, maxCols){
  this.maxRows = maxRows
  console.log("a board with " +maxRows+ " rows was created");
  this.maxCols = maxCols
  console.log("a board with " +maxCols+ " cols was created");
  this.createTable(maxRows,maxCols)
  this.cellHeight = 75
  this.cellWidth = 75
}

    Board.prototype.createTable = function(rows,cols){
      console.log("createTable: creates a table given number of rows and columns");
      tableElement = "<table id='game-table' border='3'></table>"
      divContainer = $('#test-board-container')
      divContainer.html(tableElement)
      this.createRowsAndCols(rows,cols)
    }

    Board.prototype.createRowsAndCols = function(rows,cols){
      console.log("defineRows: sets number of rows on the board as defined by the player");
      var addRows = ""
      var addCols = ""
      for(var i=1; i<=rows; i++){
        for (var j=1; j<=cols; j++){
          addCols = addCols + "<td id='col" + j + "' height='" + this.cellHeight + "' width='" + this.cellWidth + "'>" + i + ", " + j + "</td>"
        }
        addRows = addRows + "<tr id='row" + i + "' class='cells'>" + addCols + "</tr>"
        addCols = ""
      }
      var table = document.getElementById('game-table')
      table.innerHTML = addRows
    }

var Game = function(){
  // this.cell = new Cell();
  // this.board = new Board(rows, cols);
  console.log("Game: a new game has started");
}

var rows = 10;
var cols = 10;
// var game1 = new Game(rows, cols);
// debugger