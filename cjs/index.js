(function (Object) {
  if (typeof globalThis === 'undefined')
    (Object.defineProperty(Object.prototype, '_T_', {
      configurable: true,
      get: function (window) {
        window = this.window || this;
        window.globalThis = window;
        delete Object.prototype._T_;
      }
    }), _T_);
}(Object));
module.exports = globalThis;
