(function (window) {
  let _ = {
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

  window._ = _;
})(window);
