(function (window) {
  function View() {}

  function _cacheTheDom() {
    return {
      root: _.qs('#root')
    }; 
  }

  function _createItemNode(currentRow, currentColumn, innerValue) {
    let itemNode = _.ce('div');

    itemNode.dataset.row = currentRow;
    itemNode.dataset.column = currentColumn;
    itemNode.dataset.value = innerValue;
    itemNode.className = 'item';

    return itemNode;
  }

  View.prototype.render = function (items) {
    let elements = _cacheTheDom(),
      fragment = _.cdf(); 
   
    for (let row = 0, rows = items.length; row < rows; row += 1) {
      for (let column = 0, columns = items[row].length; column < columns; column += 1) {
        fragment.appendChild( _createItemNode(row, column, items[row][column]) );
      } 
    }

    elements.root.appendChild( fragment );
  };
  
  View.prototype.bindEvents = function () {};

  View.prototype.init = function () {
    let self = this;
  };

  window.game = window.game || {};
  window.game.View = View;
})(window);
