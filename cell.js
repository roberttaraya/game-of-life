var Cell = function(rows,cols){
  this.maxRows = rows
  this.maxCols = cols
}

Cell.prototype.findLiveNeighbors = function (x, y){
  var self = this
  var activeCells = 0
  var neighborsArray = this.findNeighbors(x, y)
  neighborsArray.forEach(function(cell){
    var x = cell[0]
    var y = cell[1]
    var neighborCell = self.buildCellId(x, y)
    if (neighborCell.attr('class')==='active'){
      activeCells += 1
    }
  })
  return activeCells
}

Cell.prototype.buildCellId = function(x, y){
  var cellId = ""
  cellId = cellId + "#"
  cellId = cellId + "row" + x
  cellId = cellId + "col" + y
  return $(cellId)
}

Cell.prototype.findNeighbors = function(x, y){
  if ((x===1 || x===this.maxRows) && (y===1 || y===this.maxCols)){
    return this.findNeighborsForCornerCell(x, y)
  } else if ((x===1)&&(y>=2 || y<=this.maxCols-1)){
    return this.findNeighborsForTopEdgeCells(x, y)
  } else if ((x===this.maxRows)&&(y>=2 || y<=this.maxCols-1)){
    return this.findNeighborsForBottomEdgeCells(x, y)
  } else if ((x>=2 || x<=this.maxRows-1)&&(y===this.maxCols)){
    return this.findNeighborsForRightEdgeCells(x, y)
  } else if ((x>=2 || x<=this.maxRows-1)&&(y===1)){
    return this.findNeighborsForLeftEdgeCells(x, y)
  } else {
    return this.findNeighborsForCenterCells(x, y)
  }
}

Cell.prototype.findNeighborsForCornerCell = function(x, y){
  if (x===1 && y===1){
    return [[x, y+1], [x+1, y], [x+1, y+1]];
  } else if (x===this.maxRows && y===1){
    return [[x, y+1], [x-1, y], [x-1, y+1]];
  } else if (x===1 && y===this.maxCols){
    return [[x, y-1], [x+1, y-1], [x+1, y]];
  } else if (x===this.maxRows && y===this.maxCols){
    return [[x-1, y], [x-1, y-1], [x, y-1]];
  }
}

Cell.prototype.findNeighborsForTopEdgeCells = function(x, y){
  return [[x, y-1], [x+1, y-1], [x+1, y], [x+1, y+1], [x, y+1], [this.maxRows, y-1], [this.maxRows, y], [this.maxRows, y+1] ]
}

Cell.prototype.findNeighborsForBottomEdgeCells = function(x, y){
  return [[x, y-1], [x-1, y-1], [x-1, y], [x-1, y+1], [x, y+1], [1, y-1], [1, y], [1, y+1] ]
}

Cell.prototype.findNeighborsForRightEdgeCells = function(x, y){
  return [[x-1, y], [x-1, y-1], [x, y-1], [x+1, y-1], [x+1, y], [x-1, 1], [x, 1], [x+1, 1]]
}

Cell.prototype.findNeighborsForLeftEdgeCells = function(x, y){
  return [[x-1, y], [x-1, y+1], [x, y+1], [x+1, y+1], [x+1, y], [x-1, this.maxCols], [x, this.maxCols], [x+1, this.maxCols]]
}

Cell.prototype.findNeighborsForCenterCells = function(x, y){
  return [[x-1, y-1], [x-1, y], [x-1, y+1], [x, y-1], [x, y+1], [x+1, y-1], [x+1, y], [x+1, y+1]]
}
