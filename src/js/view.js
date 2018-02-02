(function (window) {
  let pageElements = null;
  
  function View() {}

  View.prototype.render = function (items) {
    let self = this;
    let _fragment = _.cdf(); 
    
    for (let row = 0, rows = items.length; row < rows; row += 1) {
      for (let column = 0, columns = row.length; column < columns; column += 1) {
        _fragment.appendChild( self._createItemNode(row, column, items[row][column]) );
      }
    }
    
    pageElements.root.appendChild( _fragment );
  };
  
  View.prototype._createItemNode = function (currentRow, currentColumn, innerValue) {
    let itemNode = _.ce('div');

    itemNode.dataset.row = currentRow;
    itemNode.dataset.column = currentColumn;
    itemNode.dataset.value = innerValue;
    itemNode.className = 'item';

    return itemNode;
  };

  View.prototype._cacheTheDom = function () {
    pageElements = {
      root: _.qs('#root'),
      testButton: _.qs('#testButton'),
      body: _.qs('body')
    };
  };

  View.prototype._bindEvents = function () {
    pageElements.testButton.addEventListener('click', () => {
      Observer.callTrigger('testButtonClicked', () => {
        pageElements.body.style.backgroundColor = 'red';
      });
    });
  }
  
  View.prototype.init = function () {
    let self = this;

    self._cacheTheDom();
    self._bindEvents();
  };
  
  window.game = window.game || {};
  window.game.View = View;
})(window);
