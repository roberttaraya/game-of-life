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
      addCols = addCols + "height='5' "
      addCols = addCols + "width='5' "
      addCols = addCols + "class='inactive'"
      addCols = addCols + ">"
      // addCols = addCols + i + ", " + j
      addCols = addCols + "</td>"
    }
    addRows = addRows + "<tr id='row" + i + "' class='cells'>" + addCols + "</tr>"
  }
  var table = $('#game-table')
  table.html(addRows)
}

Board.prototype.buildCellId = function(x, y){
  var cellId = ""
  cellId = cellId + "#"
  cellId = cellId + "row" + x
  cellId = cellId + "col" + y
  return $(cellId)
}

Board.prototype.clearGameTable = function(){
  for (var x=1; x<=this.maxRows; x++){
    for (var y=1; y<=this.maxCols; y++){
      var cell = this.buildCellId(x,y)
      cell.attr("class", "inactive")
    }
  }
}

