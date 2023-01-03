import { Game } from "./Game.js";
import { State } from "./State.js";
import { GameScreen } from "./GameScreen.js";
import {
  DEFAULT_MATRIX_SIZE,
  DEFAULT_TARGET_ITEM_POSITION,
  ITEMS,
} from "./constants.js";

function main() {
  const state = new State(
    DEFAULT_MATRIX_SIZE,
    DEFAULT_TARGET_ITEM_POSITION,
    { left: [0, 0], up: [0, 0], right: [0, 0], down: [0, 0] },
    ITEMS
  );
  const gameScreen = new GameScreen();
  const game = new Game(state, gameScreen);

  game.launch();
}

window.addEventListener("load", main, false);
