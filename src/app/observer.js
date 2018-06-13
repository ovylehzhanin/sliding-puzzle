export const Observer = {
  _handlers: [],

  attachHandler: function (owner, triggerName, handler) {
    this._handlers.push({
      owner: owner,
      triggerName: triggerName,
      handler: handler
    });
  },

  callTrigger: function (triggerName, args, callback) {
    for (let i = 0, end = this._handlers.length; i < end; i += 1) {
      if (triggerName === this._handlers[i].triggerName) {
        this._handlers[i].handler.apply(this._handlers[i].owner, [].concat(args)); 
      } 
    } 
  }
};
