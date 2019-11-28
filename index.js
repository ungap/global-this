(function (Object) {
  var $ObjectPrototype = Object.prototype,
    $defineGetter = $ObjectPrototype.__defineGetter__,
    $defineProperty =
      Object.defineProperty ||
      function defineProperty(obj, prop, desc) {
        if (desc.value) {
          obj[prop] = desc.value;
        } else if (desc.get) {
          $defineGetter.call(obj, prop, desc.get);
        }
      };
  typeof globalThis !== 'object' && (
    this ?
      get() :
      ($defineProperty($ObjectPrototype, '_T_', {
        configurable: true,
        get: get
      }), _T_)
  );
  function get() {
    $defineProperty(this, 'globalThis', {
      value: this,
      writable: true,
      enumerable: false,
      configurable: true
    });
    delete $ObjectPrototype._T_;
  }
}(Object));
