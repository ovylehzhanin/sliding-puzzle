(function (window) {
  function View() {}

  View.prototype.render = function () {};
  
  View.prototype.bindEvents = function () {
    
  };

  View.prototype.init = function () {
    let self = this;
  };
  // let root = _.qs('#root'),
  //     fragment = _.cdf();

  // for (let i = 0, rows = items.length; i < rows; i += 1) {
  
  //   for (let j = 0, columns = items[i].length; j < columns; j += 1) {
  //     let itemNode = _.ce('div'); 
  //     itemNode.className = 'item';
  //     itemNode.dataset.row = i + 1;
  //     itemNode.dataset.col = j + 1;
  //     itemNode.dataset.value = items[i][j];
  //     fragment.appendChild(itemNode);
  //   } 
  
  // }

  // root.appendChild(fragment);
  window.game = window.game || {};
  window.game.View = View;
})(window);
