import React from 'react';
import './square.scss';

function Square({x,y,isActive}) {
  return (
    <div className={`${isActive && 'active'} square`}>
      <span className="square-marker">0</span>
    </div>
  )
}

export default Square;
