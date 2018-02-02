(function (window) {

  function Model() {
    this.matrixSize = null;
    this.items = []; 
  }

  Model.prototype.setMatrixSize = function (value) {
    this.matrixSize = value;
  };

  Model.prototype.getMatrixSize = function () {
    return this.matrixSize;
  };

  Model.prototype.setItems = function (itemsArray) {
    this.items = itemsArray;
  };

  Model.prototype.getItems = function () {
    return this.items;
  };

  Model.prototype._loadDefaults = function () {
    let model = this;

    model.setMatrixSize(GAME_DEFAULTS.MATRIX_SIZE);
    model.setItems(GAME_DEFAULTS.ITEMS);
  };

  Model.prototype.init = function () {
    let model = this;

    model._loadDefaults();
  };

  window.game = window.game || {};
  window.game.Model = Model;
})(window);
