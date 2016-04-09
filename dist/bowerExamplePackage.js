(function () {

  // SETUP
  // Establish the root object, `window` (`self`) in the browser, `global`
  // on the server. Use `self` instead of `window` for `WebWorker` support.
  var root = typeof self === 'object' && self.self === self && self ||
            typeof global === 'object' && global.global === global && global;

  var exampleClass = function (name) {
    this.name = name;
  };

  exampleClass.prototype.getName = function () {
    return this.name;
  };

  // Make module accessible:
  // export object for Node.js
  // or if we're in the browser, add `exampleClass` as a global object.
  // (`nodeType` is checked to ensure that `module` and `exports` are not HTML elements.)
  if (typeof exports !== 'undefined' && !exports.nodeType) {
    if (typeof module !== 'undefined' && !module.nodeType && module.exports) {
      exports = module.exports = exampleClass;
    }

    exports.exampleClass = exampleClass;
  } else {
    root.exampleClass = exampleClass;
  }

})();
