import React from 'react';
import Square from '../Square/';

function Row({squares}) {
  return (
    <div className="row">
      {
        squares.map((square,i) => {
          const { x, y, isActive } = square
          return (
            <Square x={x} y={y} isActive={isActive}/>
          )
        })
      }
    </div>
  )
}

export default Row;
