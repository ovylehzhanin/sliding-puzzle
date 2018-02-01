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

  Model.prototype.init = function () {
    let self = this;

    self.setMatrixSize(GAME_DEFAULTS.MATRIX_SIZE);
    self.setItems(GAME_DEFAULTS.ITEMS);
    console.log(self.getMatrixSize());
    console.log(self.getItems());
  };

  window.game = window.game || {};
  window.game.Model = Model;
})(window);
