import React from 'react';
import './Board.css';
import {Cell} from '../Cell/Cell';

export const Board=(props) => {

  const cells = props.cellValues.map((value,index) => {

      const canHighLight = props.winningCombination && props.winningCombination.indexOf(index) >= 0;

      return <Cell key={index} value={value} canHighlight={canHighLight} onClick={ () => props.cellClicked(index)}/>;
  });

  return (
    <>
      <div id="board">
          {cells}
      </div>
</>
  );
}
