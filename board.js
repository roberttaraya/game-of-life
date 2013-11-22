var Board = function(maxRows, maxCols){
  this.maxRows = maxRows
  this.maxCols = maxCols
  this.createTable(maxRows,maxCols)
  this.cellHeight = 75
  this.cellWidth = 75
}

Board.prototype.createTable = function(rows,cols){
  tableElement = "<table id='game-table' border='3'></table>"
  divContainer = $('#test-board-container')
  divContainer.html(tableElement)
  this.createRowsAndCols(rows,cols)
}

Board.prototype.createRowsAndCols = function(rows,cols){
  var addRows = ""
  var addCols = ""
  for(var i=1; i<=rows; i++){
    for (var j=1; j<=cols; j++){
      var cell = new Cell
      addCols = addCols + "<td "
      addCols = addCols + "id='row" + i + "col" + j + "' "
      addCols = addCols + "height='" + this.cellHeight + "' "
      addCols = addCols + "width='" + this.cellWidth + "' "
      var cell = new Cell()
      if(cell.cellStatus===true){
        console.log("i'm true")
        addCols = addCols + "class='active'"
      } else {
        console.log("i'm false")
        addCols = addCols + "class='inactive'"
      }
      addCols = addCols + ">"
      addCols = addCols + i + ", " + j
      addCols = addCols + "</td>"
    }
    addRows = addRows + "<tr id='row" + i + "' class='cells'>" + addCols + "</tr>"
    addCols = ""
  }
  var table = document.getElementById('game-table')
  table.innerHTML = addRows
}
