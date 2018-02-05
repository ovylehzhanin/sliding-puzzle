(function (window) {
    function Observer () {
      this._handlers = [];
    }

    Observer.prototype.attachHandler = function (owner, trigger, handler) {
      this._handlers.push({
        owner: owner,
        trigger: trigger,
        handler: handler
      }); 
    };
  
    Observer.prototype.callTrigger = function (trigger, args, callback) {
      for (let i = 0, end = this._handlers.length; i < end; i += 1) {
        if (trigger === this._handlers[i].trigger) {
          this._handlers[i].handler.apply(this._handlers[i].owner, [].concat(args));
        }
      }

      callback && callback();
    };

    window.Observer = new Observer();
})(window);
