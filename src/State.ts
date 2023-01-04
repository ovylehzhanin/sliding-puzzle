import { array2dSwap } from "./array.utils.js";

export class State {
  public possibleMoves: PossibleMoves;

  constructor(
    public matrixSize: number,
    public targetItemPosition: SliderItemPosition,
    public sliderItems: SliderItemsMatrix
  ) {
    this.possibleMoves = this.getPossibleMoves();
  }

  swapItems(
    direction: Move
  ): [SliderItemPosition, SliderItemPosition] | undefined {
    const [directionRow, directoinColumn] = this.possibleMoves[direction];
    if (
      this.sliderItems[directionRow] &&
      this.sliderItems[directionRow][directoinColumn]
    ) {
      const oldPosition: SliderItemPosition = [...this.targetItemPosition];
      const newPosition = array2dSwap(this.sliderItems, oldPosition, [
        directionRow,
        directoinColumn,
      ]);

      this.targetItemPosition = newPosition;
      this.recalculatePossibleMoves();
      return [oldPosition, this.targetItemPosition];
    }
  }

  recalculatePossibleMoves(): void {
    this.possibleMoves = this.getPossibleMoves();
  }

  getPossibleMoves(): PossibleMoves {
    const [targetRow, targetCol] = this.targetItemPosition;

    return {
      up: [targetRow - 1, targetCol],
      right: [targetRow, targetCol + 1],
      down: [targetRow + 1, targetCol],
      left: [targetRow, targetCol - 1],
    };
  }
}
