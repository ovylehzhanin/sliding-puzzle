import './style.css';
import Controller from './app/controller';
import Model from './app/model';
import View from './app/view';
import { Observer } from './app/observer';

function main() {
  let model = new Model();
  let view = new View();
  let controller = new Controller(model, view);

  controller.init();
}

window.addEventListener('load', main, false);