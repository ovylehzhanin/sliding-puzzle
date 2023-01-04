import { ARROW_MOVES } from "./constants.js";
import { $$cdf, $$ce, $$qs } from "./dom.helpers.js";

export interface ScreenEventsConfig {
  onArrowMove: (direction: ArrowMove) => void;
}
export class GameScreen {
  private get $root(): HTMLDivElement {
    return $$qs("#root") as HTMLDivElement;
  }

  constructor() {}

  renderItems(items: SliderItemsMatrix, possibleMoves: PossibleMoves) {
    const fragment = $$cdf();

    for (let row = 0, rows = items.length; row < rows; row += 1) {
      for (
        let column = 0, columns = items[row].length;
        column < columns;
        column += 1
      ) {
        if (items[row][column] !== " ") {
          fragment.appendChild(
            this.createItemNode(row, column, items[row][column])
          );
        }
      }
    }

    this.$root.innerHTML = "";
    this.$root.appendChild(fragment);
  }

  createItemNode(
    currentRow: number,
    currentColumn: number,
    innerValue: any
  ): HTMLDivElement {
    const itemNode = $$ce("div") as HTMLDivElement;
    itemNode.dataset.row = String(currentRow);
    itemNode.dataset.column = String(currentColumn);
    itemNode.dataset.value = String(innerValue);
    itemNode.dataset.clickDirection = "";
    itemNode.className = "item";
    itemNode.addEventListener("click", this.onItemClick.bind(this));
    return itemNode;
  }

  private getBlockSelector(row: number, column: number): string {
    return `.item[data-row="${row}"][data-column="${column}"]`;
  }

  moveBlock(
    previousPosition: SliderItemPosition,
    currentPosition: SliderItemPosition
  ): void {
    const selector = this.getBlockSelector(...currentPosition);
    const elementToMove = $$qs(selector) as HTMLDivElement;
    if (elementToMove) {
      elementToMove.dataset.row = String(previousPosition[0]);
      elementToMove.dataset.column = String(previousPosition[1]);
    }
  }

  onItemClick(): void {
    console.log("item clicked");
  }

  bindEvents(config: ScreenEventsConfig): void {
    window.addEventListener("keydown", (event: KeyboardEvent) => {
      if (ARROW_MOVES.indexOf(event.key as ArrowMove) !== -1) {
        config.onArrowMove(event.key as ArrowMove);
      }
    });
  }
}
