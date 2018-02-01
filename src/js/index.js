function main() {
  let model = new game.Model(),
    view = new game.View(),
    controller = new game.Controller(model, view);

  controller.init();
}

window.addEventListener('DOMContentLoaded', main, false);
