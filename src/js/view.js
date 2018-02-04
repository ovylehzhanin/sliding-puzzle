(function (window) {
  let pageElements = null;
  
  function View() {}

  View.prototype.renderItems = function (items) {
    let self = this;
    let _fragment = _h.cdf(); 
    
    for (let row = 0, rows = items.length; row < rows; row += 1) {
      for (let column = 0, columns = items[row].length; column < columns; column += 1) {
        if (items[row][column] != ' ') {
          _fragment.appendChild( self._createItemNode(row, column, items[row][column]) );
        }
      }
    }

    pageElements.root.innerHTML = '';
    pageElements.root.appendChild( _fragment );
  };
  
  View.prototype._createItemNode = function (currentRow, currentColumn, innerValue) {
    let itemNode = _h.ce('div');

    itemNode.dataset.row = currentRow;
    itemNode.dataset.column = currentColumn;
    itemNode.dataset.value = innerValue;
    itemNode.className = 'item';
    
    return itemNode; 
  };

  View.prototype._cacheTheDom = function () {
    pageElements = {
      root: _h.qs('#root'),
      testButton: _h.qs('#testButton'),
      body: _h.qs('body')
    };
  };

  View.prototype._getDirectionFromKeyCode = function (keyCode) {
    switch (keyCode) {
      case 37:
        return 'right';
        break;

      case 38:
        return 'down';
        break;

      case 39:
        return 'left';
        break;

      case 40:
        return 'up';
        break;

      default:
        break;
    }
  };

  View.prototype._bindEvents = function () {
    let self = this;

    window.addEventListener('keydown', event => {
      let keyCode = event.keyCode,
        direction = self._getDirectionFromKeyCode( event.keyCode ); 

      if (keyCode >= 37 && keyCode <= 40) {
        Observer.callTrigger('arrowKeyPressed', direction, null); 
      }
    }, false);    
  }
  
  View.prototype.init = function () {
    this._cacheTheDom();
    this._bindEvents();
  };
  
  window.game = window.game || {};
  window.game.View = View;
})(window);
