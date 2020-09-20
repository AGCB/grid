import React from 'react';
import Square from '../Square/';
import './row.scss';

function Row({squares}) {
  console.log('here is a row', squares);
  return (
    <div className="row">
      {
        squares.map((sq, i) => {
          const { x, y, isActive } = sq;
          return (
            <Square
              key={i}
              x={x}
              y={y}
              isActive={isActive}
            />
          )
        })
      }
    </div>
  )
}
export default Row;
