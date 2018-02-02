(function (window) {
    const Observer = {
        handlers: [],

        attachHandler: function (trigger, handler) {
            this.handlers.push({
                trigger: trigger,
                handler: handler
            });
        },

        callTrigger: function (trigger, callback) {
            this.handlers.forEach( handlerObject => {
                if (trigger === handlerObject.trigger) {
                    handlerObject.handler();
                }
            });

            callback();
        }
    };

    window.Observer = Observer;
})(window);