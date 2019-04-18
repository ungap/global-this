(function (Object) {
  if (typeof globalThis === 'undefined')
    (Object.defineProperty(Object.prototype, '_T_', {
      configurable: true,
      get: function () {
        (this.window || this).globalThis = this;
        delete Object.prototype._T_;
      }
    }), _T_);
}(Object));
