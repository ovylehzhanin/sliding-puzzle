// import { Observer } from './observer';
import {ARROWS_KEYS, DIRECTION_DICT, KEY} from './constants';
import {_h} from './helpers';

export default class View {
  constructor() {
    this.elements = null; 
  }

  _cacheTheDom() {
    let elements = {
      root: _h.qs('#root'),
      body: _h.qs('body'),
      statistic: _h.qs('#statistic', this.body),
      shuffleButton: _h.qs('#makeShuffle', this.body)
    }; 

    this.elements = elements;
  }

  _createItemNode(currentRow, currentColumn, innerValue) {
    let self = this,
      itemNode = _h.ce('div');

    itemNode.dataset.row = currentRow;
    itemNode.dataset.column = currentColumn;
    itemNode.dataset.value = innerValue;
    itemNode.dataset.clickDirection = '';
    itemNode.className = 'item';
    itemNode.addEventListener('click', event => {self._handlerItemClick(itemNode)}, false);
    
    return itemNode; 
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
      _fragment = _h.cdf(),
      {root} = this.elements;
    
    for (let row = 0, rows = items.length; row < rows; row += 1) {
      for (let column = 0, columns = items[row].length; column < columns; column += 1) {
        if (items[row][column] != ' ') {
          _fragment.appendChild( self._createItemNode(row, column, items[row][column]) );
        }
      }
    }

    root.innerHTML = '';
    root.appendChild( _fragment );
    self._highlightPossibleMoves(possibleMoves);
  }

  renderStatistic(movesCount) {
    let movesCountNode = _h.qs('.statistic__moves-value');

    movesCountNode.textContent = movesCount;
  };

  generateMovesArray(count) {
    let self = this,
      movesArray = [];

    for (let i = 0; i < count; i += 1) {
      movesArray.push( self._getDirectionFromKeyCode(generateKeyCode(KEY.LEFT, KEY.DOWN + 1)) );
    }
    
    function generateKeyCode(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    return movesArray;
  }

  _highlightPossibleMoves(possibleMoves) {
    this.elements.root.childNodes.forEach(tile => {
      tile.classList.remove('highlighted'); 
      tile.dataset.clickDirection = '';
    });

    for (let move in possibleMoves) {
      const tileToHighlight = _h.qs(this._getTileSelector(possibleMoves[move]), root);

      if (tileToHighlight) {
        tileToHighlight.classList.add('highlighted');
        tileToHighlight.dataset.clickDirection = move;
      }
    } 
  }

  _getTileSelector([row, col]) {
    return `.item[data-row="${row}"][data-column="${col}"]`;
  }

  moveTile(currentPosition, newPosition, possibleMoves) {
    const elementToMove = _h.qs(this._getTileSelector(newPosition), this.elements.root);
    
    if (elementToMove) {
      elementToMove.dataset.row = currentPosition[0];
      elementToMove.dataset.column = currentPosition[1];
    }

    this._highlightPossibleMoves(possibleMoves);
  }

  bindHandlers({ onArrowKeyPress, onItemClick }) {
    window.addEventListener('keydown', event => {
      if (ARROWS_KEYS.indexOf(event.code) > -1) {
        onArrowKeyPress(DIRECTION_DICT[event.code]);
      }
    });
  }
  
  init() {
    this._cacheTheDom();
  };
}
