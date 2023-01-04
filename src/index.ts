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
    ITEMS
  );
  const game = new Game(state, new GameScreen());

  game.launch();
}

window.addEventListener("load", main, false);
