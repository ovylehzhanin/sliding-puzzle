(function (window) {

  function Model() {
    this._matrixSize = null;
    this._items = []; 
    this._possibleMoves = { left: [], up: [], right: [], down: [] };
    this._targetItemPosition = [];
  }

  Model.prototype.matrixSize = function (value) {
    if (value) {
      this._matrixSize = value; 
      return;
    }

    return this._matrixSize;
  };

  Model.prototype.items = function (value) {
    if (value) {
      this._items = value; 
      return;
    }

    return this._items;
  };
  
  Model.prototype.targetItemPosition = function (value) {
    if (value) {
      this._targetItemPosition = value;
      return;
    } 

    return this._targetItemPosition;
  };

  Model.prototype._loadDefaults = function () {
    this.matrixSize(GAME_DEFAULTS.MATRIX_SIZE);
    this.items(GAME_DEFAULTS.ITEMS);
    this.targetItemPosition(GAME_DEFAULTS.TARGET_ITEM_POSITION);
    this._calculatePossibleMoves();
  };

  Model.prototype._calculatePossibleMoves = function () {
    let targetItemPosition = this.targetItemPosition();

    this._possibleMoves.left = [targetItemPosition[0], targetItemPosition[1] - 1];
    this._possibleMoves.up = [targetItemPosition[0] - 1, targetItemPosition[1]];
    this._possibleMoves.right = [targetItemPosition[0], targetItemPosition[1] + 1];
    this._possibleMoves.down = [targetItemPosition[0] + 1, targetItemPosition[1]];
  };

  Model.prototype._getPossibleMoves = function () {
    return this._possibleMoves;
  };

  Model.prototype.swapItems = function (direction) {
    let oldPosition = this.targetItemPosition();
    let directionIndex = this._getPossibleMoves()[direction],
      directionRow = directionIndex[0],
      directionColumn = directionIndex[1],
      items = this.items(),
      directionItem = items[directionRow] ? items[directionRow][directionColumn] : undefined;

    if (directionItem) {
      this.targetItemPosition(
        items._2dSwap( oldPosition, [directionRow, directionColumn] )
      );

      Observer.callTrigger('itemsSwapped', [[directionRow, directionColumn], oldPosition]);
      this._calculatePossibleMoves();
    }
  };

  Model.prototype.init = function () {
    this._loadDefaults();
  };

  window.game = window.game || {};
  window.game.Model = Model;
})(window);
