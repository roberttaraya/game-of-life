var Board = function(maxRows, maxCols){
  this.maxRows = maxRows
  this.maxCols = maxCols
  this.createTable(maxRows,maxCols)
  // this.cellHeight = 4
  // this.cellWidth = 4
}

Board.prototype.createTable = function(rows,cols){
  tableElement = "<table id='game-table' border='3'></table>"
  divContainer = $('#board-container')
  divContainer.html(tableElement)
  this.createRowsAndCols(rows,cols)
}

Board.prototype.createRowsAndCols = function(rows,cols){
  var addRows = ""
  var addCols = ""
  for(var i=1; i<=rows; i++){
    for (var j=1; j<=cols; j++){
      addCols = addCols + "<td "
      addCols = addCols + "id='row" + i + "col" + j + "' "
      // addCols = addCols + "height='" + this.cellHeight + "' "
      // addCols = addCols + "width='" + this.cellWidth + "' "
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
    addCols = ""
  }
  var table = document.getElementById('game-table')
  table.innerHTML = addRows
}
