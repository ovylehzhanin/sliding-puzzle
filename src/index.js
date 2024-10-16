import { DEFAULT_MATRIX_SIZE } from './constants';
import Controller from './controller';
import Model from './model';
import View from './view';

function main() {
  let model = new Model(DEFAULT_MATRIX_SIZE);
  let view = new View();
  let controller = new Controller(model, view);

  controller.init();
}

window.addEventListener('load', main, false);