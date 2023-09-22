import React from 'react';

function Grid() {
  return (
    <div className="grid-container">
      {Array.from({ length: 45 }, (_, index) => (
        <div key={index} className="grid-item"></div>
      ))}
    </div>
  );
}

export default Grid;