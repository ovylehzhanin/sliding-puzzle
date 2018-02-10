export default class Observer {
  constructor(owner, triggerName, handler) {
    this._handlers = []; 
  }

  attachHandler(owner, triggerName, handler) {
    this._handlers.push({
      owner: owner,
      triggerName: triggerName,
      handler: handler
    })
  }

  callTrigger(triggerName, args, callback) {
    for (let i = 0, end = this._handlers.length; i < end; i += 1) {
      if (triggerName === this._handlers.triggerName) {
        this._handlers[i].handler.apply(this._nandlers[i].owner, [].concat(args));
      } 
    }

    callback && callback();
  }
}
