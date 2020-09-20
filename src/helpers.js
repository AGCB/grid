function createInitialGrid(size=4) {
  let output = [];

  for(let x=0; x<size; x++) {
    let row = [];
    for(let y=0; y<size; y++) {
      let square = {x:x, y:y, isActive: Math.random() > .5}
      row.push(square);
    }
    output.push(row);
  }
  return output;
}

export default createInitialGrid;
