(function (window) {
  function Controller(model, view) {
    this._model = model;
    this._view = view;
  }

  Controller.prototype.render();
  
  window.game = game || {};
  window.game.Controller = Controller;
})(window);
