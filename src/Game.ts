import { GameScreen } from "./GameScreen.js";
import { State } from "./State.js";

export class Game {
  constructor(private state: State, private gameScreen: GameScreen) {}

  renderInitialScreen(): void {
    this.gameScreen.renderItems(
      this.state.sliderItems,
      this.state.possibleMoves
    );
    this.gameScreen.bindEvents({
      onArrowMove: (move) => {
        const viewData = this.state.swapItems(this.convertArrowMoveStr(move));

        if (viewData) {
          this.gameScreen.moveBlock(viewData[0], viewData[1]);
        }
      },
    });
  }

  convertArrowMoveStr(arrowMove: ArrowMove): Move {
    const t: { [key in ArrowMove]: Move } = {
      ArrowUp: "down",
      ArrowRight: "left",
      ArrowDown: "up",
      ArrowLeft: "right",
    };
    return t[arrowMove];
  }

  launch(): void {
    this.renderInitialScreen();
  }
}
