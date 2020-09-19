import React from 'react';
import './square.scss';

function Square({x=10,y=10, isActive=true}) {
  return (
    <div className="square">
      <span>{`${x}--${y}--${String(isActive)}`}</span>
    </div>
  )
}

export default Square;
