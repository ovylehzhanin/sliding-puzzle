(function (window) {
  function Controller(model, view) {
    this._model = model;
    this._view = view;
  }
  
  Controller.prototype.init = function () {
    var self = this;

    self._model.init();
    self._view.init();
    self._view.renderItems( self._model.items() );
    self._view.renderStatistic( self._model.count() );
    self._registerHandlers();
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
      self._model.shufflePuzzleDeck(movesArray);
      self._view.renderItems( self._model.items() );
      self._view.renderStatistic( self._model.count() );
    });
  };

  window.game = window.game || {};
  window.game.Controller = Controller;
})(window);
