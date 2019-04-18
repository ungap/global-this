(function (Object) {
  if (typeof globalThis === 'undefined')
    (Object.defineProperty(Object.prototype, '_T_', {
      configurable: true,
      get: function (self) {
        self = this.self || this;
        self.globalThis = self;
        delete Object.prototype._T_;
      }
    }), _T_);
}(Object));
export default globalThis;
