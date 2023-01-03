export class State {
  constructor(
    public matrixSize: number,
    public targetItemPosition: SliderItemPosition,
    public possibleMoves: PossibleMoves,
    public sliderItems: SliderItemsMatrix
  ) {}
}
