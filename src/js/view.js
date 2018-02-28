import { Observer } from './observer';
import { KEY, SIZES } from './constants';
import { _dom, _tagger } from './helpers';

export default class View {
  constructor() {
    this.elements = null;
  }

  _cacheTheDom() {
    let elements = {
      style: _dom.qs('style[title="generated"]'),
      root: _dom.qs('#root'),
      body: _dom.qs('body'),
      statistic: _dom.qs('#statistic', this.body),
      shuffleButton: _dom.qs('#makeShuffle', this.body)
    };

    this.elements = elements;
  }

  _createItemNode(currentRow, currentColumn, innerValue) {
    let self = this,
      itemNode = _dom.ce('div');

    itemNode.dataset.row = currentRow;
    itemNode.dataset.column = currentColumn;
    itemNode.dataset.value = innerValue;
    itemNode.dataset.clickDirection = '';
    itemNode.className = 'item';
    itemNode.addEventListener('click', event => { self._handlerItemClick(itemNode) }, false);

    return itemNode;
  }

  _generateItemNodeStyles(row, column) {
    let itemStylesTemplate = _tagger`.item[data-row="${'row'}"][data-column="${'column'}"]{transform: translateX(${'translateX'}px) translateY(${'translateY'}px);}`;
    let { width, height, positionX, positionY } = SIZES.ITEM;

    return itemStylesTemplate.formatWith({
      row: row,
      column: column,
      translateX: positionX + column * (width + 5),
      translateY: positionY + row * (height + 3),
    });
  }

  _handlerItemClick(itemNode) {
    if (itemNode.dataset.clickDirection != '') {
      let direction = itemNode.dataset.clickDirection;

      Observer.callTrigger('itemClicked', direction, null);
    }
  }

  _getDirectionFromKeyCode(keyCode) {
    switch (keyCode) {
      case KEY.LEFT:
        return 'right';
        break;

      case KEY.UP:
        return 'down';
        break;

      case KEY.RIGHT:
        return 'left';
        break;

      case KEY.DOWN:
        return 'up';
        break;

      default:
        break;
    }
  }

  renderItems(items, possibleMoves) {
    let self = this,
      _fragment = _dom.cdf(),
      styleString = '',
      { style, root, body } = this.elements;

    for (let row = 0, rows = items.length; row < rows; row += 1) {
      for (let column = 0, columns = items[row].length; column < columns; column += 1) {
        if (items[row][column] != ' ') {
          _fragment.appendChild(self._createItemNode(row, column, items[row][column]));
        }
        styleString += self._generateItemNodeStyles(row, column);
      }
    }

    root.innerHTML = '';
    root.appendChild(_fragment);
    style.textContent = styleString;
    self._highlightPossibleMoves(possibleMoves);
  }

  renderStatistic(movesCount) {
    let movesCountNode = _dom.qs('.statistic__moves-value');

    movesCountNode.textContent = movesCount;
  };

  generateMovesArray(count) {
    let self = this,
      movesArray = [];

    for (let i = 0; i < count; i += 1) {
      movesArray.push(self._getDirectionFromKeyCode(generateKeyCode(KEY.LEFT, KEY.DOWN + 1)));
    }

    function generateKeyCode(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    return movesArray;
  }

  _highlightPossibleMoves(possibleMoves) {
    let { root } = this.elements;

    root.childNodes.forEach(item => {
      item.classList.remove('highlighted');
      item.dataset.clickDirection = '';
    });

    for (let move in possibleMoves) {
      let row = possibleMoves[move][0],
        column = possibleMoves[move][1],
        itemToHighlight = null;

      itemToHighlight = _dom.qs(`.item[data-row="${row}"][data-column="${column}"]`, root);
      if (itemToHighlight) {
        itemToHighlight.classList.add('highlighted');
        itemToHighlight.dataset.clickDirection = move;
      }
    }
  }

  moveBlock(previousPosition, currentPosition, possibleMoves) {
    let { root } = this.elements;
    let elementToMove = _dom.qs(`.item[data-row="${previousPosition[0]}"][data-column="${previousPosition[1]}"]`, root);

    if (elementToMove != null) {
      elementToMove.dataset.row = currentPosition[0];
      elementToMove.dataset.column = currentPosition[1];
    }

    this._highlightPossibleMoves(possibleMoves);
  }

  _bindEvents() {
    let self = this,
      { shuffleButton } = this.elements;

    window.addEventListener('keydown', event => {
      let keyCode = event.keyCode,
        direction = self._getDirectionFromKeyCode(event.keyCode);

      if (keyCode >= 37 && keyCode <= 40) {
        Observer.callTrigger('arrowKeyPressed', direction, null);
      }
    }, false);

    shuffleButton.addEventListener('click', event => {
      let movesArray = self.generateMovesArray(400);

      Observer.callTrigger('shuffleButtonPressed', [movesArray], null);
    }, false);
  }

  init() {
    this._cacheTheDom();
    this._bindEvents();
  };
}
