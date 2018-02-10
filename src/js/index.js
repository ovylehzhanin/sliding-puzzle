/*window.addEventListener('DOMContentLoaded', function () {
  let model = new game.Model(),
    view = new game.View(),
    controller = new game.Controller(model, view);

  controller.init();
}, false);*/
import Controller from './controller';
import Model from './model';
import View from './view';
import Observer from './observer';

window.addEventListener('load', () => {
  let observer = new Observer();
  let model = new Model();
  let view = new View(observer);
  let controller = new Controller(observer, model, view);

  controller.init();
}, false);
