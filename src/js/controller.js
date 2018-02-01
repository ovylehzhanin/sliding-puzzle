(function (window) {
  function Controller(model, view) {
    this._model = model;
    this._view = view;
  }

  Controller.prototype.init = function () {
    let self = this;

    self._model.init();
    self._view.init();
  };
  
  window.game = window.game || {};
  window.game.Controller = Controller;
})(window);
