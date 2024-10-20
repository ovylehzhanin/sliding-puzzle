import { ARROWS_KEYS, DIRECTION_DICT, THEMES } from './constants';

export default class View {

  get $$rootEl() {
    return document.querySelector('#root');
  }

  get $$settingsEl () {
    return document.querySelector('#settings');
  }

  get $$bodyEl() {
    return document.querySelector('body');
  }

  get $$statsEl() {
    return document.querySelector('#statistic');
  }

  get $$shuffleBttn() {
    return document.querySelector('#doShuffle');
  }

  constructor() { }

  renderItems(items, possibleMoves) {
    const _fragment = document.createDocumentFragment();
    
    for (let row = 0, rows = items.length; row < rows; row += 1) {
      for (let column = 0, columns = items[row].length; column < columns; column += 1) {
        if (items[row][column] != ' ') {
          _fragment.appendChild(this._createItemNode(row, column, items[row][column]));
        }
      }
    }

    this.$$rootEl.innerHTML = '';
    this.$$rootEl.appendChild(_fragment);
    this._highlightActiveTiles(possibleMoves);
  }

  renderStatistic(movesCount) {
    this.$$statsEl.querySelector('.statistic__moves-value').textContent = movesCount;
  }

  renderSettings() {
    const fragment = document.createDocumentFragment();

    const themeInputs = THEMES.forEach(themeName => {
      const inputWrapper = document.createElement('div');
      inputWrapper.className = 'input-wrapper';

      const radioEl = document.createElement('input');
      radioEl.type = 'radio';
      radioEl.name = 'theme';
      radioEl.id = themeName;
      radioEl.value = themeName;

      const labelEl = document.createElement('label');
      labelEl.textContent = `${themeName}`;
      labelEl.setAttribute('for', themeName);
      inputWrapper.append(radioEl, labelEl);
      fragment.appendChild(inputWrapper);
    });

    const form = document.createElement('form');
    form.id = 'theme-switcher';

    const controlsWrapper = document.createElement('div');
    controlsWrapper.className = 'controls-wrapper';

    controlsWrapper.append(fragment);
    form.appendChild(controlsWrapper);

    this.$$settingsEl.appendChild(form);
  }

  applyTheme(theme) {
    this.$$bodyEl.className = '';
    this.$$bodyEl.className = `${theme}-theme`;
  }

  moveTile(currentPosition, newPosition, possibleMoves) {
    const elementToMove = this.$$rootEl.querySelector(this._getTileSelector(newPosition));

    if (elementToMove) {
      elementToMove.dataset.row = currentPosition[0];
      elementToMove.dataset.column = currentPosition[1];
    }

    this._highlightActiveTiles(possibleMoves);
  }

  bindHandlers({ 
    onArrowKeyPress, 
    onItemClick, 
    onShuffleButtonClick, 
    onThemeChange,
  }) {
    window.addEventListener('keydown', event => {
      if (ARROWS_KEYS.indexOf(event.code) > -1) {
        onArrowKeyPress(DIRECTION_DICT[event.code]);
      }
    });
    this.$$rootEl.addEventListener('click', (event) => {
      if (!!event.target?.dataset?.clickDirection) {
        onItemClick(event.target?.dataset?.clickDirection);
      }
    });
    this.$$shuffleBttn.addEventListener('click', () => {
      onShuffleButtonClick();
    });
    this.$$settingsEl.querySelector('#theme-switcher').addEventListener('change', event => {
      onThemeChange(event.target.value);
    });
    this.$$settingsEl.querySelector('#theme-switcher').addEventListener('submit', event => {
      event.preventDefault();
    });
  }

  _createItemNode(row, col, innerValue) {
    const itemNode = document.createElement('div');

    itemNode.dataset.row = row;
    itemNode.dataset.column = col;
    itemNode.dataset.value = innerValue;
    itemNode.dataset.clickDirection = '';
    itemNode.className = 'tile';
    
    return itemNode; 
  }

  _highlightActiveTiles(possibleMoves) {
    this.$$rootEl.childNodes.forEach(tile => {
      tile.classList.remove('highlighted'); 
      tile.dataset.clickDirection = '';
    });

    for (const move in possibleMoves) {
      const tileToHighlight = this.$$rootEl.querySelector(this._getTileSelector(possibleMoves[move]));

      if (tileToHighlight) {
        tileToHighlight.classList.add('highlighted');
        tileToHighlight.dataset.clickDirection = move;
      }
    } 
  }

  _getTileSelector([row, col]) {
    return `.tile[data-row="${row}"][data-column="${col}"]`;
  }
}
