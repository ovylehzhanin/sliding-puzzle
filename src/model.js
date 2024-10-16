import { PuzzleMatrix } from './PuzzleMatrix';

export default class Model {
  get items() {
    return this._puzzleMatrix.items;
  }

  get possibleMoves() {
    return this._puzzleMatrix._getPossibleMoves()
  }

  get emptyTilePosition() {
    return this._puzzleMatrix.emptyCellPosition;
  }

  constructor(matrixSize) {
    this._movesCount = 0;
    this._puzzleMatrix = new PuzzleMatrix(matrixSize);
  }

  /* updateMatrixSize(value) {
    this._puzzleMatrix.matrixSize = value;
  } */

  count(param) {
    switch (param) {
      case 'refresh':
        this._movesCount = 0;
        break;
      case 'increment':
        this._movesCount++;
        break;
      default:
        break;
    }

    return this._movesCount;
  }

  swapItems(direction) {
    this._puzzleMatrix.swapItems(direction);
  }

  shuffleMatrix() {
    this._puzzleMatrix.shuffleMatrixItems();
  }
}
