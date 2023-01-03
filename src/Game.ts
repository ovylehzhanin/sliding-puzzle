import { GameScreen } from "./GameScreen.js";
import { State } from "./State.js";

export class Game {
  constructor(private state: State, private gameScreen: GameScreen) {}

  renderInitialScreen(): void {
    this.gameScreen.renderItems(
      this.state.sliderItems,
      this.state.possibleMoves
    );
  }

  launch(): void {
    this.renderInitialScreen();
  }
}
