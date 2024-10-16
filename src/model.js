import {_2dSwap} from './helpers';
import { PuzzleMatrix } from './PuzzleMatrix';

export default class Model {
  get items() {
    return this.puzzleMatrix.items;
  }

  get possibleMoves() {
    return this.puzzleMatrix._getPossibleMoves()
  }

  get emptyTilePosition() {
    return this.puzzleMatrix.emptyCellPosition;
  }

  constructor() {
    this._matrixSize = null;
    this._movesCount = 0;
    this.puzzleMatrix = new PuzzleMatrix();
  }

  updateMatrixSize(value) {
    this.puzzleMatrix.matrixSize = value;
  }

  count(param) {
    if (param === 'refresh') {
      this._movesCount = 0;
    } else if (param === 'increment') {
      this._movesCount++;
    } else {
      return this._movesCount;
    }
  }

  makeMove(direction) {
    // let viewData = this._swapItems(direction);
    const viewData = this.puzzleMatrix.swapItems(direction);

    /* if (viewData) {
      this.count('increment');
      // Observer.callTrigger('itemsSwapped', viewData);
    } */
    return viewData;
  }

  shufflePuzzleDeck(directions) {
    let self = this;

    directions.forEach(directionString => {
      self._swapItems(directionString);
    });

    self.count('refresh');
  }

  init() {
    // this._loadDefaults();
  }
}
