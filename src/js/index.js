window.addEventListener('DOMContentLoaded', function () {
  let model = new game.Model(),
    view = new game.View(),
    controller = new game.Controller(model, view);

  controller.init();
}, false);
