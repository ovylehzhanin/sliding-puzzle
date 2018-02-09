(function (window) {
  let _h = {
    qs: function (selector, scope) {
      return (scope || document).querySelector(selector); 
    },
    qsa: function (selector, scope) {
      return (scope || document).querySelectorAll(selector); 
    },
    cdf: function () {
      return document.createDocumentFragment(); 
    },
    ce: function (nodeString) {
      return document.createElement(nodeString); 
    }
  };

  Array.prototype._2dSwap = function (a, b) {
    this[a[0]][a[1]] = [
      this[b[0]][b[1]], 
      this[b[0]][b[1]] = this[a[0]][a[1]]
    ][0]; 

    return b;
  };

  window._h = _h;
})(window);

