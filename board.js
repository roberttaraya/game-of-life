var Board = function(maxRows, maxCols){
  this.maxRows = maxRows
  this.maxCols = maxCols
  this.createGameTable(maxRows,maxCols)
}

Board.prototype.createGameTable = function(rows,cols){
  tableElement = "<table id='game-table' border='3'></table>"
  divContainer = $('#game-container')
  divContainer.html(tableElement)
  this.createRowsAndColsOfGameTable(rows,cols)
}

Board.prototype.createRowsAndColsOfGameTable = function(rows,cols){
  var addRows = ""
  for(var i=1; i<=rows; i++){
    var addCols = ""
    for (var j=1; j<=cols; j++){
      addCols = addCols + "<td "
      addCols = addCols + "id='row" + i + "col" + j + "' "
      addCols = addCols + "height='4' "
      addCols = addCols + "width='4' "
      var cell = new Cell()
      if(cell.cellStatus===true){
        addCols = addCols + "class='active'"
      } else {
        addCols = addCols + "class='inactive'"
      }
      addCols = addCols + ">"
      // addCols = addCols + i + ", " + j
      addCols = addCols + "</td>"
    }
    addRows = addRows + "<tr id='row" + i + "' class='cells'>" + addCols + "</tr>"
  }
  var table = $('#game-table')
  table.html(addRows)
}
