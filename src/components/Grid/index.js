import React from 'react';
import Row from '../Row/';
import './grid.scss';

function Grid() {
  const squares = [{x: 42, y: 45, isActive: false},
    {x: 42, y: 45, isActive: false}
  ];

  return (
    <div className="grid">
      <Row squares={squares} />
    </div>
  )
}

export default Grid;
