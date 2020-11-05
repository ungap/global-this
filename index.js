(function (Object) {
  typeof globalThis !== 'object' && (
    this ?
      get() :
      (Object.defineProperty(Object.prototype, '_T_', {
        configurable: true,
        get: get
      }), _T_)
  );
  function get() {
    var me = this || self;
    me.globalThis = me;
    delete Object.prototype._T_;
  }
}(Object));
