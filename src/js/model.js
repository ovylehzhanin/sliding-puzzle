import {Observer} from './observer.js';

export default class Model {
  constructor() {
    this._matrixSize = null;
    this._items = []; 
    this._possibleMoves = { left: [], up: [], right: [], down: [] };
    this._targetItemPosition = [];
    this._movesCount = 0;
  }

  matrixSize(value) {
    if (value) {
      this._matrixSize = value; 
      return;
    }

    return this._matrixSize;
  }

  items(value) {
    if (value) {
      this._items = value; 
      return;
    }

    return this._items;
  }
  
  targetItemPosition(value) {
    if (value) {
      this._targetItemPosition = value;
      return;
    } 

    return this._targetItemPosition;
  }

  _loadDefaults() {
    this.matrixSize(GAME_DEFAULTS.MATRIX_SIZE);
    this.items(GAME_DEFAULTS.ITEMS);
    this.targetItemPosition(GAME_DEFAULTS.TARGET_ITEM_POSITION);
    this._calculatePossibleMoves();
  }

  _calculatePossibleMoves() {
    let targetItemPosition = this.targetItemPosition();

    this._possibleMoves.left = [targetItemPosition[0], targetItemPosition[1] - 1];
    this._possibleMoves.up = [targetItemPosition[0] - 1, targetItemPosition[1]];
    this._possibleMoves.right = [targetItemPosition[0], targetItemPosition[1] + 1];
    this._possibleMoves.down = [targetItemPosition[0] + 1, targetItemPosition[1]];
  }

  _getPossibleMoves() {
    return this._possibleMoves;
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

  _swapItems(direction) {
    let oldPosition = this.targetItemPosition();
    let directionIndex = this._getPossibleMoves()[direction],
      directionRow = directionIndex[0],
      directionColumn = directionIndex[1],
      items = this.items(),
      directionItem = items[directionRow] ? items[directionRow][directionColumn] : undefined;

    if (directionItem) {
      let newPosition = items._2dSwap( oldPosition, [directionRow, directionColumn] );
      this.targetItemPosition(newPosition);
      this._calculatePossibleMoves();
      
      return [newPosition, oldPosition];
    } else {
      return false;
    }
  }
    
  makeMove(direction) {
    let viewData = this._swapItems(direction);

    if (viewData) {
      this.count('increment');
      Observer.callTrigger('itemsSwapped', viewData);
    }
  }

  shufflePuzzleDeck(directions) {
    let self = this;

    directions.forEach(directionString => {
      self._swapItems(directionString);
    });

    self.count('refresh');
  }

  init() {
    this._loadDefaults();
  }
}
