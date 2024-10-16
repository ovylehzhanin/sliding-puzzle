export default class Controller {
  constructor(model, view) {
    this._model = model;
    this._view = view;
  }

  _handleTileMove(direction) {
    const currentPosition = this._model.emptyTilePosition;
    this._model.swapItems(direction);
    const newPosition = this._model.emptyTilePosition;

    this._view.moveTile(currentPosition, newPosition, this._model.possibleMoves);
  }

  _renderItems() {
    this._view.renderItems(this._model.items, this._model.possibleMoves);
  }

  init() {
    this._renderItems();
    this._view.bindHandlers({
      onArrowKeyPress: (direction) => this._handleTileMove(direction),
      onItemClick: (direction) => this._handleTileMove(direction),
      onShuffleButtonClick: () => {
        this._model.shuffleMatrix();
        this._renderItems();
      },
    });
  }
}
