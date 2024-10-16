export default class Controller {
  constructor(model, view) {
    this._model = model;
    this._view = view;
  }

  init() {
    this._model.init();
    this._view.init();

    this._view.renderItems(this._model.items, this._model.possibleMoves);
    // this._view.renderStatistic(self._model.count());
    this._registerHandlers();
  }

  _registerHandlers() {
    this._view.bindHandlers({
      onArrowKeyPress: (direction) => {
        const currentPosition = this._model.emptyTilePosition;
        // console.log('currentPosition', currentPosition);
        this._model.makeMove(direction);

        /* console.log(
          this._model.items.map(row => row.join('\t') + '\n').join()
        ); */

        const newPosition = this._model.emptyTilePosition;
        // console.log('newPosition', newPosition);

        this._view.moveTile(currentPosition, newPosition, this._model.possibleMoves);
      },
    });
  }
}
