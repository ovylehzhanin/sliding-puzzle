(function (window) {
  function Controller(model, view) {
    this._model = model;
    this._view = view;
  }
  
  Controller.prototype.callHello = function () {
    console.log('Hello World!');
  };

  Controller.prototype.init = function () {
    let self = this;
    
    self._model.init();
    self._view.init();
    self._view.render( self._model.getItems() );
    
    Observer.attachHandler('testButtonClicked', self.callHello);
  };

  window.game = window.game || {};
  window.game.Controller = Controller;
})(window);
