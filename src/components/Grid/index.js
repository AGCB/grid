import React, { useState } from 'react';
import Row from '../Row/';
import createInitialGrid from '../../helpers.js';
import './grid.scss';

function Grid() {
  const [ grid, setGrid ] = useState(createInitialGrid(300));

  return (
    <div className="grid">
      {
        grid.map((row,i) => (
          <Row key={i} squares={row}/>
        ))
      }
    </div>
  )
}

export default Grid;
