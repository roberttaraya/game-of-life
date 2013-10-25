window.onload = function(){
  console.log('window loaded!');




};

function Cell(){
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

    function findNeighbors(){
      console.log("findNeighbors: returns an array of the coordinates of a cell's 8 neighbors");
    }

function Board(rows, cols){
  console.log("Board: given a number of rows and columns, defines the size of the board");
  console.log("a board with " +rows+ " rows was created");
  console.log("a board with " +cols+ " cols was created");
}

    function createTable(rows, cols){
      console.log("createTable: creates a table given number of rows and columns");
    }

    function defineRows(rows){
      console.log("defineRows: sets number of rows on the board as defined by the player");
    }

    function defineColumns(cols){
      console.log("defineCols: sets number of cols on the board as defined by the player");
    }

function Game(rows, cols){
  var cell = new Cell();
  var board = new Board(rows, cols);
  console.log("a new game has started");
}

var rows = 10;
var cols = 10;
var game1 = new Game(rows, cols);