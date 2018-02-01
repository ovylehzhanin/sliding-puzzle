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

  let Event = function (sender) {
    this._sender = sender;
    this._listeners = [];
  };

  Event.prototype.attach = function (listener) {
    this._listeners.push(listener); 
  };

  Event.prototype.notify = function (arguments) {
    for (let i = 0, end = this._listeners.length; i < end; i += 1) {
      this._listeners[i].call(this._sender, arguments);  
    } 
  };

  window._ = _;
  window.Event = Event;
})(window);

