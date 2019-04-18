// inspired by https://mathiasbynens.be/notes/globalthis
(function (Object) {
  if (typeof globalThis === 'undefined')
    (Object.defineProperty(Object.prototype, '_T_', {
      configurable: true,
      get: function () {
        this.globalThis = this;
        delete this._T_;
      }
    }), _T_);
}(Object));
export default globalThis;
