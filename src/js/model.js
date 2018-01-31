(function (window) {

  function Model() {
    this.items = []; 
  }

  Model.prototype.init = function () {
    this.items = GAME_DEFAULTS.ITEMS; 
  }


  window.game = game || {};
  window.game.Model = Model;
})(window);
