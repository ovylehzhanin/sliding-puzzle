(function (window) {
  function Controller(model, view) {
    this._model = model;
    this._view = view;
  }
  
  Controller.prototype.init = function () {
    this._model.init();
    this._view.init();

    this._view.renderItems( this._model.items() );
    this._registerHandlers();
  };
  
  Controller.prototype._registerHandlers = function () {
    let self = this;

    Observer.attachHandler('arrowKeyPressed', function (direction) {
      self._model.swapItems(direction);
      self._view.renderItems( self._model.items() );
    }); 
  };

  window.game = window.game || {};
  window.game.Controller = Controller;
})(window);
