import React from 'react';
import './Game.css';
import {Board} from '../Board/Board';

export const Game=() => {

  const cellValues = ['','','','','','','','',''];
  const winningCombination = [];

  
  const onCellClicked=(cellIndex) =>
  {
    console.log(`Cell ${cellIndex}`);
  };

  return (
    <>
    <div id="game">
      <h1>Tic Tac Toe</h1>
      <Board  cellValues={cellValues} winningCombination={winningCombination} cellClicked={onCellClicked}/>
       </div>

  <div id="modal-overlay">
      <div id="game-result-modal">
          <div id="result-container">
              <div id="winner-container">
                  <span></span>
              </div>
          </div>
          <div id="new-game-container">
              <button id="new-game-button">Start New Game</button>
          </div>
      </div>
  </div>

</>
  );
}
