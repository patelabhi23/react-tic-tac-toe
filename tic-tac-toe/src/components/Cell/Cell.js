import React from 'react';
import './Cell.css';
import className from 'classnames';

export const Cell=(props) => {

  const cellClasses = className({
      cell : true,
      winner : props.canHighlight
  }); 

  const cellContentClasses = className({
    'cell-content' : true,
     populated : props.value
  }); 

  return (
    <>
          <button className={cellClasses} onClick={props.onClick}>
              <span className={cellContentClasses}>{props.value}</span>
          </button>
</>
  );
}
