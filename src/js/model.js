(function (window) {

  function Model() {
    this.matrixSize = null;
    this.items = []; 
    this.possibleMoves = { top: [], up: [], left: [], down: [] };
  }

  Model.prototype.setMatrixSize = function (value) {
    this.matrixSize = value;
  };

  Model.prototype.getMatrixSize = function () {
    return this.matrixSize;
  };

  Model.prototype.setItems = function (items) {
    this.items = items;
  };

  Model.prototype.getItems = function () {
    return this.items;
  };

  Model.prototype._loadDefaults = function () {
    let self = this;

    self.setMatrixSize(GAME_DEFAULTS.MATRIX_SIZE);
    self.setItems(GAME_DEFAULTS.ITEMS);
  };

  Model.prototype.getPossibleMoves = function () {
  }

  Model.prototype.swapItems = function (direction) {
     
  };

  Model.prototype.init = function () {
    let self = this;

    self._loadDefaults();
  };

  window.game = window.game || {};
  window.game.Model = Model;
})(window);
