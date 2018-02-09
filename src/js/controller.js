(function (window) {
  function Controller(model, view) {
    this._model = model;
    this._view = view;
  }
  
  Controller.prototype.init = function () {
    this._model.init();
    this._view.init();
    this._view.renderItems( this._model.items() );
    this._view.renderStatistic( this._model.count() );
    this._registerHandlers();
  };
  
  Controller.prototype._registerHandlers = function () {
    let self = this;

    Observer.attachHandler(null, 'arrowKeyPressed', function (direction) {
      self._model.makeMove(direction);
    });

    Observer.attachHandler(null, 'itemsSwapped', function (previousPosition, currentPosition) {
      self._view.moveBlock(previousPosition, currentPosition);
      self._view.renderStatistic( self._model.count() );
    });

    Observer.attachHandler(null, 'shuffleButtonPressed', function (movesArray) {
      // self._model.shufflePuzzleDeck
    });
  };

  window.game = window.game || {};
  window.game.Controller = Controller;
})(window);
