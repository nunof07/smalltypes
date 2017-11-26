(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/get-iterator"), __esModule: true };
},{"core-js/library/fn/get-iterator":18}],2:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/map"), __esModule: true };
},{"core-js/library/fn/map":19}],3:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/create"), __esModule: true };
},{"core-js/library/fn/object/create":20}],4:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/define-property"), __esModule: true };
},{"core-js/library/fn/object/define-property":21}],5:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/freeze"), __esModule: true };
},{"core-js/library/fn/object/freeze":22}],6:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/get-own-property-descriptor"), __esModule: true };
},{"core-js/library/fn/object/get-own-property-descriptor":23}],7:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/get-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/get-prototype-of":24}],8:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/seal"), __esModule: true };
},{"core-js/library/fn/object/seal":25}],9:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/set-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/set-prototype-of":26}],10:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol"), __esModule: true };
},{"core-js/library/fn/symbol":27}],11:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol/iterator"), __esModule: true };
},{"core-js/library/fn/symbol/iterator":28}],12:[function(require,module,exports){
"use strict";

exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
},{}],13:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _defineProperty = require("../core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
},{"../core-js/object/define-property":4}],14:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _setPrototypeOf = require("../core-js/object/set-prototype-of");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = require("../core-js/object/create");

var _create2 = _interopRequireDefault(_create);

var _typeof2 = require("../helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};
},{"../core-js/object/create":3,"../core-js/object/set-prototype-of":9,"../helpers/typeof":16}],15:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _typeof2 = require("../helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};
},{"../helpers/typeof":16}],16:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _iterator = require("../core-js/symbol/iterator");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = require("../core-js/symbol");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};
},{"../core-js/symbol":10,"../core-js/symbol/iterator":11}],17:[function(require,module,exports){
module.exports = require("regenerator-runtime");

},{"regenerator-runtime":123}],18:[function(require,module,exports){
require('../modules/web.dom.iterable');
require('../modules/es6.string.iterator');
module.exports = require('../modules/core.get-iterator');

},{"../modules/core.get-iterator":104,"../modules/es6.string.iterator":115,"../modules/web.dom.iterable":122}],19:[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/es6.string.iterator');
require('../modules/web.dom.iterable');
require('../modules/es6.map');
require('../modules/es7.map.to-json');
require('../modules/es7.map.of');
require('../modules/es7.map.from');
module.exports = require('../modules/_core').Map;

},{"../modules/_core":43,"../modules/es6.map":106,"../modules/es6.object.to-string":114,"../modules/es6.string.iterator":115,"../modules/es7.map.from":117,"../modules/es7.map.of":118,"../modules/es7.map.to-json":119,"../modules/web.dom.iterable":122}],20:[function(require,module,exports){
require('../../modules/es6.object.create');
var $Object = require('../../modules/_core').Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};

},{"../../modules/_core":43,"../../modules/es6.object.create":107}],21:[function(require,module,exports){
require('../../modules/es6.object.define-property');
var $Object = require('../../modules/_core').Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};

},{"../../modules/_core":43,"../../modules/es6.object.define-property":108}],22:[function(require,module,exports){
require('../../modules/es6.object.freeze');
module.exports = require('../../modules/_core').Object.freeze;

},{"../../modules/_core":43,"../../modules/es6.object.freeze":109}],23:[function(require,module,exports){
require('../../modules/es6.object.get-own-property-descriptor');
var $Object = require('../../modules/_core').Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};

},{"../../modules/_core":43,"../../modules/es6.object.get-own-property-descriptor":110}],24:[function(require,module,exports){
require('../../modules/es6.object.get-prototype-of');
module.exports = require('../../modules/_core').Object.getPrototypeOf;

},{"../../modules/_core":43,"../../modules/es6.object.get-prototype-of":111}],25:[function(require,module,exports){
require('../../modules/es6.object.seal');
module.exports = require('../../modules/_core').Object.seal;

},{"../../modules/_core":43,"../../modules/es6.object.seal":112}],26:[function(require,module,exports){
require('../../modules/es6.object.set-prototype-of');
module.exports = require('../../modules/_core').Object.setPrototypeOf;

},{"../../modules/_core":43,"../../modules/es6.object.set-prototype-of":113}],27:[function(require,module,exports){
require('../../modules/es6.symbol');
require('../../modules/es6.object.to-string');
require('../../modules/es7.symbol.async-iterator');
require('../../modules/es7.symbol.observable');
module.exports = require('../../modules/_core').Symbol;

},{"../../modules/_core":43,"../../modules/es6.object.to-string":114,"../../modules/es6.symbol":116,"../../modules/es7.symbol.async-iterator":120,"../../modules/es7.symbol.observable":121}],28:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/web.dom.iterable');
module.exports = require('../../modules/_wks-ext').f('iterator');

},{"../../modules/_wks-ext":101,"../../modules/es6.string.iterator":115,"../../modules/web.dom.iterable":122}],29:[function(require,module,exports){
module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

},{}],30:[function(require,module,exports){
module.exports = function () { /* empty */ };

},{}],31:[function(require,module,exports){
module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

},{}],32:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

},{"./_is-object":61}],33:[function(require,module,exports){
var forOf = require('./_for-of');

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};

},{"./_for-of":52}],34:[function(require,module,exports){
// false -> Array#indexOf
// true  -> Array#includes
var toIObject = require('./_to-iobject');
var toLength = require('./_to-length');
var toAbsoluteIndex = require('./_to-absolute-index');
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

},{"./_to-absolute-index":92,"./_to-iobject":94,"./_to-length":95}],35:[function(require,module,exports){
// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = require('./_ctx');
var IObject = require('./_iobject');
var toObject = require('./_to-object');
var toLength = require('./_to-length');
var asc = require('./_array-species-create');
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};

},{"./_array-species-create":37,"./_ctx":44,"./_iobject":58,"./_to-length":95,"./_to-object":96}],36:[function(require,module,exports){
var isObject = require('./_is-object');
var isArray = require('./_is-array');
var SPECIES = require('./_wks')('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};

},{"./_is-array":60,"./_is-object":61,"./_wks":102}],37:[function(require,module,exports){
// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = require('./_array-species-constructor');

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};

},{"./_array-species-constructor":36}],38:[function(require,module,exports){
// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = require('./_cof');
var TAG = require('./_wks')('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

},{"./_cof":39,"./_wks":102}],39:[function(require,module,exports){
var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

},{}],40:[function(require,module,exports){
'use strict';
var dP = require('./_object-dp').f;
var create = require('./_object-create');
var redefineAll = require('./_redefine-all');
var ctx = require('./_ctx');
var anInstance = require('./_an-instance');
var forOf = require('./_for-of');
var $iterDefine = require('./_iter-define');
var step = require('./_iter-step');
var setSpecies = require('./_set-species');
var DESCRIPTORS = require('./_descriptors');
var fastKey = require('./_meta').fastKey;
var validate = require('./_validate-collection');
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};

},{"./_an-instance":31,"./_ctx":44,"./_descriptors":46,"./_for-of":52,"./_iter-define":64,"./_iter-step":65,"./_meta":68,"./_object-create":69,"./_object-dp":70,"./_redefine-all":82,"./_set-species":87,"./_validate-collection":99}],41:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = require('./_classof');
var from = require('./_array-from-iterable');
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};

},{"./_array-from-iterable":33,"./_classof":38}],42:[function(require,module,exports){
'use strict';
var global = require('./_global');
var $export = require('./_export');
var meta = require('./_meta');
var fails = require('./_fails');
var hide = require('./_hide');
var redefineAll = require('./_redefine-all');
var forOf = require('./_for-of');
var anInstance = require('./_an-instance');
var isObject = require('./_is-object');
var setToStringTag = require('./_set-to-string-tag');
var dP = require('./_object-dp').f;
var each = require('./_array-methods')(0);
var DESCRIPTORS = require('./_descriptors');

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function (target, iterable) {
      anInstance(target, C, NAME, '_c');
      target._c = new Base();
      if (iterable != undefined) forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if (KEY in proto && !(IS_WEAK && KEY == 'clear')) hide(C.prototype, KEY, function (a, b) {
        anInstance(this, C, KEY);
        if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    IS_WEAK || dP(C.prototype, 'size', {
      get: function () {
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};

},{"./_an-instance":31,"./_array-methods":35,"./_descriptors":46,"./_export":50,"./_fails":51,"./_for-of":52,"./_global":53,"./_hide":55,"./_is-object":61,"./_meta":68,"./_object-dp":70,"./_redefine-all":82,"./_set-to-string-tag":88}],43:[function(require,module,exports){
var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

},{}],44:[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./_a-function');
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

},{"./_a-function":29}],45:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

},{}],46:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_fails":51}],47:[function(require,module,exports){
var isObject = require('./_is-object');
var document = require('./_global').document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

},{"./_global":53,"./_is-object":61}],48:[function(require,module,exports){
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

},{}],49:[function(require,module,exports){
// all enumerable object keys, includes symbols
var getKeys = require('./_object-keys');
var gOPS = require('./_object-gops');
var pIE = require('./_object-pie');
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};

},{"./_object-gops":75,"./_object-keys":78,"./_object-pie":79}],50:[function(require,module,exports){
var global = require('./_global');
var core = require('./_core');
var ctx = require('./_ctx');
var hide = require('./_hide');
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;

},{"./_core":43,"./_ctx":44,"./_global":53,"./_hide":55}],51:[function(require,module,exports){
module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

},{}],52:[function(require,module,exports){
var ctx = require('./_ctx');
var call = require('./_iter-call');
var isArrayIter = require('./_is-array-iter');
var anObject = require('./_an-object');
var toLength = require('./_to-length');
var getIterFn = require('./core.get-iterator-method');
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;

},{"./_an-object":32,"./_ctx":44,"./_is-array-iter":59,"./_iter-call":62,"./_to-length":95,"./core.get-iterator-method":103}],53:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

},{}],54:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

},{}],55:[function(require,module,exports){
var dP = require('./_object-dp');
var createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

},{"./_descriptors":46,"./_object-dp":70,"./_property-desc":81}],56:[function(require,module,exports){
var document = require('./_global').document;
module.exports = document && document.documentElement;

},{"./_global":53}],57:[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function () {
  return Object.defineProperty(require('./_dom-create')('div'), 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_descriptors":46,"./_dom-create":47,"./_fails":51}],58:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

},{"./_cof":39}],59:[function(require,module,exports){
// check on default Array iterator
var Iterators = require('./_iterators');
var ITERATOR = require('./_wks')('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

},{"./_iterators":66,"./_wks":102}],60:[function(require,module,exports){
// 7.2.2 IsArray(argument)
var cof = require('./_cof');
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};

},{"./_cof":39}],61:[function(require,module,exports){
module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

},{}],62:[function(require,module,exports){
// call something on iterator step with safe closing on error
var anObject = require('./_an-object');
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};

},{"./_an-object":32}],63:[function(require,module,exports){
'use strict';
var create = require('./_object-create');
var descriptor = require('./_property-desc');
var setToStringTag = require('./_set-to-string-tag');
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require('./_hide')(IteratorPrototype, require('./_wks')('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};

},{"./_hide":55,"./_object-create":69,"./_property-desc":81,"./_set-to-string-tag":88,"./_wks":102}],64:[function(require,module,exports){
'use strict';
var LIBRARY = require('./_library');
var $export = require('./_export');
var redefine = require('./_redefine');
var hide = require('./_hide');
var has = require('./_has');
var Iterators = require('./_iterators');
var $iterCreate = require('./_iter-create');
var setToStringTag = require('./_set-to-string-tag');
var getPrototypeOf = require('./_object-gpo');
var ITERATOR = require('./_wks')('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

},{"./_export":50,"./_has":54,"./_hide":55,"./_iter-create":63,"./_iterators":66,"./_library":67,"./_object-gpo":76,"./_redefine":83,"./_set-to-string-tag":88,"./_wks":102}],65:[function(require,module,exports){
module.exports = function (done, value) {
  return { value: value, done: !!done };
};

},{}],66:[function(require,module,exports){
module.exports = {};

},{}],67:[function(require,module,exports){
module.exports = true;

},{}],68:[function(require,module,exports){
var META = require('./_uid')('meta');
var isObject = require('./_is-object');
var has = require('./_has');
var setDesc = require('./_object-dp').f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !require('./_fails')(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};

},{"./_fails":51,"./_has":54,"./_is-object":61,"./_object-dp":70,"./_uid":98}],69:[function(require,module,exports){
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = require('./_an-object');
var dPs = require('./_object-dps');
var enumBugKeys = require('./_enum-bug-keys');
var IE_PROTO = require('./_shared-key')('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = require('./_dom-create')('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  require('./_html').appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};

},{"./_an-object":32,"./_dom-create":47,"./_enum-bug-keys":48,"./_html":56,"./_object-dps":71,"./_shared-key":89}],70:[function(require,module,exports){
var anObject = require('./_an-object');
var IE8_DOM_DEFINE = require('./_ie8-dom-define');
var toPrimitive = require('./_to-primitive');
var dP = Object.defineProperty;

exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

},{"./_an-object":32,"./_descriptors":46,"./_ie8-dom-define":57,"./_to-primitive":97}],71:[function(require,module,exports){
var dP = require('./_object-dp');
var anObject = require('./_an-object');
var getKeys = require('./_object-keys');

module.exports = require('./_descriptors') ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

},{"./_an-object":32,"./_descriptors":46,"./_object-dp":70,"./_object-keys":78}],72:[function(require,module,exports){
var pIE = require('./_object-pie');
var createDesc = require('./_property-desc');
var toIObject = require('./_to-iobject');
var toPrimitive = require('./_to-primitive');
var has = require('./_has');
var IE8_DOM_DEFINE = require('./_ie8-dom-define');
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = require('./_descriptors') ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};

},{"./_descriptors":46,"./_has":54,"./_ie8-dom-define":57,"./_object-pie":79,"./_property-desc":81,"./_to-iobject":94,"./_to-primitive":97}],73:[function(require,module,exports){
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = require('./_to-iobject');
var gOPN = require('./_object-gopn').f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};

},{"./_object-gopn":74,"./_to-iobject":94}],74:[function(require,module,exports){
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = require('./_object-keys-internal');
var hiddenKeys = require('./_enum-bug-keys').concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};

},{"./_enum-bug-keys":48,"./_object-keys-internal":77}],75:[function(require,module,exports){
exports.f = Object.getOwnPropertySymbols;

},{}],76:[function(require,module,exports){
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = require('./_has');
var toObject = require('./_to-object');
var IE_PROTO = require('./_shared-key')('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

},{"./_has":54,"./_shared-key":89,"./_to-object":96}],77:[function(require,module,exports){
var has = require('./_has');
var toIObject = require('./_to-iobject');
var arrayIndexOf = require('./_array-includes')(false);
var IE_PROTO = require('./_shared-key')('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

},{"./_array-includes":34,"./_has":54,"./_shared-key":89,"./_to-iobject":94}],78:[function(require,module,exports){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = require('./_object-keys-internal');
var enumBugKeys = require('./_enum-bug-keys');

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};

},{"./_enum-bug-keys":48,"./_object-keys-internal":77}],79:[function(require,module,exports){
exports.f = {}.propertyIsEnumerable;

},{}],80:[function(require,module,exports){
// most Object methods by ES6 should accept primitives
var $export = require('./_export');
var core = require('./_core');
var fails = require('./_fails');
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};

},{"./_core":43,"./_export":50,"./_fails":51}],81:[function(require,module,exports){
module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

},{}],82:[function(require,module,exports){
var hide = require('./_hide');
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};

},{"./_hide":55}],83:[function(require,module,exports){
module.exports = require('./_hide');

},{"./_hide":55}],84:[function(require,module,exports){
'use strict';
// https://tc39.github.io/proposal-setmap-offrom/
var $export = require('./_export');
var aFunction = require('./_a-function');
var ctx = require('./_ctx');
var forOf = require('./_for-of');

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};

},{"./_a-function":29,"./_ctx":44,"./_export":50,"./_for-of":52}],85:[function(require,module,exports){
'use strict';
// https://tc39.github.io/proposal-setmap-offrom/
var $export = require('./_export');

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};

},{"./_export":50}],86:[function(require,module,exports){
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = require('./_is-object');
var anObject = require('./_an-object');
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = require('./_ctx')(Function.call, require('./_object-gopd').f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};

},{"./_an-object":32,"./_ctx":44,"./_is-object":61,"./_object-gopd":72}],87:[function(require,module,exports){
'use strict';
var global = require('./_global');
var core = require('./_core');
var dP = require('./_object-dp');
var DESCRIPTORS = require('./_descriptors');
var SPECIES = require('./_wks')('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};

},{"./_core":43,"./_descriptors":46,"./_global":53,"./_object-dp":70,"./_wks":102}],88:[function(require,module,exports){
var def = require('./_object-dp').f;
var has = require('./_has');
var TAG = require('./_wks')('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};

},{"./_has":54,"./_object-dp":70,"./_wks":102}],89:[function(require,module,exports){
var shared = require('./_shared')('keys');
var uid = require('./_uid');
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

},{"./_shared":90,"./_uid":98}],90:[function(require,module,exports){
var global = require('./_global');
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};

},{"./_global":53}],91:[function(require,module,exports){
var toInteger = require('./_to-integer');
var defined = require('./_defined');
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

},{"./_defined":45,"./_to-integer":93}],92:[function(require,module,exports){
var toInteger = require('./_to-integer');
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

},{"./_to-integer":93}],93:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

},{}],94:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject');
var defined = require('./_defined');
module.exports = function (it) {
  return IObject(defined(it));
};

},{"./_defined":45,"./_iobject":58}],95:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./_to-integer');
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

},{"./_to-integer":93}],96:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./_defined');
module.exports = function (it) {
  return Object(defined(it));
};

},{"./_defined":45}],97:[function(require,module,exports){
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require('./_is-object');
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

},{"./_is-object":61}],98:[function(require,module,exports){
var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

},{}],99:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};

},{"./_is-object":61}],100:[function(require,module,exports){
var global = require('./_global');
var core = require('./_core');
var LIBRARY = require('./_library');
var wksExt = require('./_wks-ext');
var defineProperty = require('./_object-dp').f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};

},{"./_core":43,"./_global":53,"./_library":67,"./_object-dp":70,"./_wks-ext":101}],101:[function(require,module,exports){
exports.f = require('./_wks');

},{"./_wks":102}],102:[function(require,module,exports){
var store = require('./_shared')('wks');
var uid = require('./_uid');
var Symbol = require('./_global').Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

},{"./_global":53,"./_shared":90,"./_uid":98}],103:[function(require,module,exports){
var classof = require('./_classof');
var ITERATOR = require('./_wks')('iterator');
var Iterators = require('./_iterators');
module.exports = require('./_core').getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

},{"./_classof":38,"./_core":43,"./_iterators":66,"./_wks":102}],104:[function(require,module,exports){
var anObject = require('./_an-object');
var get = require('./core.get-iterator-method');
module.exports = require('./_core').getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};

},{"./_an-object":32,"./_core":43,"./core.get-iterator-method":103}],105:[function(require,module,exports){
'use strict';
var addToUnscopables = require('./_add-to-unscopables');
var step = require('./_iter-step');
var Iterators = require('./_iterators');
var toIObject = require('./_to-iobject');

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = require('./_iter-define')(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

},{"./_add-to-unscopables":30,"./_iter-define":64,"./_iter-step":65,"./_iterators":66,"./_to-iobject":94}],106:[function(require,module,exports){
'use strict';
var strong = require('./_collection-strong');
var validate = require('./_validate-collection');
var MAP = 'Map';

// 23.1 Map Objects
module.exports = require('./_collection')(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);

},{"./_collection":42,"./_collection-strong":40,"./_validate-collection":99}],107:[function(require,module,exports){
var $export = require('./_export');
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: require('./_object-create') });

},{"./_export":50,"./_object-create":69}],108:[function(require,module,exports){
var $export = require('./_export');
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !require('./_descriptors'), 'Object', { defineProperty: require('./_object-dp').f });

},{"./_descriptors":46,"./_export":50,"./_object-dp":70}],109:[function(require,module,exports){
// 19.1.2.5 Object.freeze(O)
var isObject = require('./_is-object');
var meta = require('./_meta').onFreeze;

require('./_object-sap')('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});

},{"./_is-object":61,"./_meta":68,"./_object-sap":80}],110:[function(require,module,exports){
// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = require('./_to-iobject');
var $getOwnPropertyDescriptor = require('./_object-gopd').f;

require('./_object-sap')('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});

},{"./_object-gopd":72,"./_object-sap":80,"./_to-iobject":94}],111:[function(require,module,exports){
// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = require('./_to-object');
var $getPrototypeOf = require('./_object-gpo');

require('./_object-sap')('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});

},{"./_object-gpo":76,"./_object-sap":80,"./_to-object":96}],112:[function(require,module,exports){
// 19.1.2.17 Object.seal(O)
var isObject = require('./_is-object');
var meta = require('./_meta').onFreeze;

require('./_object-sap')('seal', function ($seal) {
  return function seal(it) {
    return $seal && isObject(it) ? $seal(meta(it)) : it;
  };
});

},{"./_is-object":61,"./_meta":68,"./_object-sap":80}],113:[function(require,module,exports){
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = require('./_export');
$export($export.S, 'Object', { setPrototypeOf: require('./_set-proto').set });

},{"./_export":50,"./_set-proto":86}],114:[function(require,module,exports){

},{}],115:[function(require,module,exports){
'use strict';
var $at = require('./_string-at')(true);

// 21.1.3.27 String.prototype[@@iterator]()
require('./_iter-define')(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});

},{"./_iter-define":64,"./_string-at":91}],116:[function(require,module,exports){
'use strict';
// ECMAScript 6 symbols shim
var global = require('./_global');
var has = require('./_has');
var DESCRIPTORS = require('./_descriptors');
var $export = require('./_export');
var redefine = require('./_redefine');
var META = require('./_meta').KEY;
var $fails = require('./_fails');
var shared = require('./_shared');
var setToStringTag = require('./_set-to-string-tag');
var uid = require('./_uid');
var wks = require('./_wks');
var wksExt = require('./_wks-ext');
var wksDefine = require('./_wks-define');
var enumKeys = require('./_enum-keys');
var isArray = require('./_is-array');
var anObject = require('./_an-object');
var toIObject = require('./_to-iobject');
var toPrimitive = require('./_to-primitive');
var createDesc = require('./_property-desc');
var _create = require('./_object-create');
var gOPNExt = require('./_object-gopn-ext');
var $GOPD = require('./_object-gopd');
var $DP = require('./_object-dp');
var $keys = require('./_object-keys');
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  require('./_object-gopn').f = gOPNExt.f = $getOwnPropertyNames;
  require('./_object-pie').f = $propertyIsEnumerable;
  require('./_object-gops').f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !require('./_library')) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    replacer = args[1];
    if (typeof replacer == 'function') $replacer = replacer;
    if ($replacer || !isArray(replacer)) replacer = function (key, value) {
      if ($replacer) value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || require('./_hide')($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

},{"./_an-object":32,"./_descriptors":46,"./_enum-keys":49,"./_export":50,"./_fails":51,"./_global":53,"./_has":54,"./_hide":55,"./_is-array":60,"./_library":67,"./_meta":68,"./_object-create":69,"./_object-dp":70,"./_object-gopd":72,"./_object-gopn":74,"./_object-gopn-ext":73,"./_object-gops":75,"./_object-keys":78,"./_object-pie":79,"./_property-desc":81,"./_redefine":83,"./_set-to-string-tag":88,"./_shared":90,"./_to-iobject":94,"./_to-primitive":97,"./_uid":98,"./_wks":102,"./_wks-define":100,"./_wks-ext":101}],117:[function(require,module,exports){
// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
require('./_set-collection-from')('Map');

},{"./_set-collection-from":84}],118:[function(require,module,exports){
// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
require('./_set-collection-of')('Map');

},{"./_set-collection-of":85}],119:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = require('./_export');

$export($export.P + $export.R, 'Map', { toJSON: require('./_collection-to-json')('Map') });

},{"./_collection-to-json":41,"./_export":50}],120:[function(require,module,exports){
require('./_wks-define')('asyncIterator');

},{"./_wks-define":100}],121:[function(require,module,exports){
require('./_wks-define')('observable');

},{"./_wks-define":100}],122:[function(require,module,exports){
require('./es6.array.iterator');
var global = require('./_global');
var hide = require('./_hide');
var Iterators = require('./_iterators');
var TO_STRING_TAG = require('./_wks')('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

},{"./_global":53,"./_hide":55,"./_iterators":66,"./_wks":102,"./es6.array.iterator":105}],123:[function(require,module,exports){
// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = require("./runtime");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}

},{"./runtime":124}],124:[function(require,module,exports){
/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);

},{}],125:[function(require,module,exports){
"use strict";

function __export(m) {
  for (var p in m) {
    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Main.
 */
var func = require("./main/function");
exports.func = func;
var iterable = require("./main/iterable");
exports.iterable = iterable;
var random = require("./main/random");
exports.random = random;
var scalar = require("./main/scalar");
exports.scalar = scalar;
__export(require("./main"));

},{"./main":125,"./main/function":140,"./main/iterable":149,"./main/random":156,"./main/scalar":181}],126:[function(require,module,exports){
"use strict";

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Illegal inheritance exception.
 */

var IllegalInheritanceError = function (_Error) {
    (0, _inherits3.default)(IllegalInheritanceError, _Error);

    function IllegalInheritanceError(message) {
        (0, _classCallCheck3.default)(this, IllegalInheritanceError);

        var _this = (0, _possibleConstructorReturn3.default)(this, (IllegalInheritanceError.__proto__ || (0, _getPrototypeOf2.default)(IllegalInheritanceError)).call(this, message));

        Error.captureStackTrace(_this, _this.constructor);
        return _this;
    }

    return IllegalInheritanceError;
}(Error);

exports.IllegalInheritanceError = IllegalInheritanceError;

},{"babel-runtime/core-js/object/get-prototype-of":7,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/inherits":14,"babel-runtime/helpers/possibleConstructorReturn":15}],127:[function(require,module,exports){
"use strict";

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Illegal state exception.
 */

var IllegalStateError = function (_Error) {
    (0, _inherits3.default)(IllegalStateError, _Error);

    function IllegalStateError(message) {
        (0, _classCallCheck3.default)(this, IllegalStateError);

        var _this = (0, _possibleConstructorReturn3.default)(this, (IllegalStateError.__proto__ || (0, _getPrototypeOf2.default)(IllegalStateError)).call(this, message));

        Error.captureStackTrace(_this, _this.constructor);
        return _this;
    }

    return IllegalStateError;
}(Error);

exports.IllegalStateError = IllegalStateError;

},{"babel-runtime/core-js/object/get-prototype-of":7,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/inherits":14,"babel-runtime/helpers/possibleConstructorReturn":15}],128:[function(require,module,exports){
"use strict";

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
/**
 * Prevent instances from inherited classes.
 * @param target Class.
 */
// tslint:disable-next-line:no-any
function final(target) {
    return function (_target) {
        (0, _inherits3.default)(Final, _target);

        // tslint:disable-next-line:no-any
        function Final() {
            var _ref;

            (0, _classCallCheck3.default)(this, Final);

            if (new.target !== Final) {
                throw new index_1.IllegalInheritanceError('Cannot inherit from final class');
            }

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return (0, _possibleConstructorReturn3.default)(this, (_ref = Final.__proto__ || (0, _getPrototypeOf2.default)(Final)).call.apply(_ref, [this].concat(args)));
        }

        return Final;
    }(target);
}
exports.final = final;

},{"./index":141,"babel-runtime/core-js/object/get-prototype-of":7,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/inherits":14,"babel-runtime/helpers/possibleConstructorReturn":15}],129:[function(require,module,exports){
"use strict";

var _freeze = require("babel-runtime/core-js/object/freeze");

var _freeze2 = _interopRequireDefault(_freeze);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Freeze constructor and prototype.
 * @param target Target.
 */
function frozen(target) {
  (0, _freeze2.default)(target);
  (0, _freeze2.default)(target.prototype);
}
exports.frozen = frozen;

},{"babel-runtime/core-js/object/freeze":5}],130:[function(require,module,exports){
"use strict";

var _map = require("babel-runtime/core-js/map");

var _map2 = _interopRequireDefault(_map);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var index_2 = require("..");
var index_3 = require("..");
/**
 * Function that caches results.
 */
var Cached = function () {
    /**
     * Ctor.
     * @param func Function callback.
     */
    function Cached(func) {
        (0, _classCallCheck3.default)(this, Cached);

        this.func = new index_1.FunctionOf(func);
        this.cache = new _map2.default();
    }
    /**
     * Type determinant.
     */


    (0, _createClass3.default)(Cached, [{
        key: "isFunction",
        value: function isFunction() {
            return true;
        }
        /**
         * Apply the function to the input.
         * @param input Input.
         */

    }, {
        key: "apply",
        value: function apply(input) {
            if (!this.cache.has(input)) {
                this.cache.set(input, this.func.apply(input));
            }
            return this.cache.get(input);
        }
    }]);
    return Cached;
}();
Cached = __decorate([index_2.final, index_3.frozen], Cached);
exports.Cached = Cached;

},{"..":141,"./index":140,"babel-runtime/core-js/map":2,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],131:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var index_2 = require("..");
var index_3 = require("..");
/**
 * Function that executes conditionally.
 */
var Conditioned = function () {
    /**
     * Ctor.
     * @param condition Condition.
     * @param func Function.
     */
    function Conditioned(condition, func) {
        (0, _classCallCheck3.default)(this, Conditioned);

        this.condition = new index_1.FunctionOf(condition);
        this.func = new index_1.FunctionOf(func);
    }
    /**
     * Type determinant.
     */


    (0, _createClass3.default)(Conditioned, [{
        key: "isFunction",
        value: function isFunction() {
            return true;
        }
        /**
         * Apply the function to the input.
         * @param input Input.
         */

    }, {
        key: "apply",
        value: function apply(input) {
            if (this.condition.apply(input)) {
                this.func.apply(input);
            }
        }
    }]);
    return Conditioned;
}();
Conditioned = __decorate([index_2.final, index_3.frozen], Conditioned);
exports.Conditioned = Conditioned;

},{"..":141,"./index":140,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],132:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("..");
var index_2 = require("..");
var index_3 = require("../scalar");
/**
 * Function of several possible types.
 */
var FunctionOf = function () {
    /**
     * Ctor.
     * @param func Function callback.
     */
    function FunctionOf(func) {
        (0, _classCallCheck3.default)(this, FunctionOf);

        this.func = new index_3.Cached(function () {
            return typeof func === 'function' ? func : function (input) {
                return func.apply(input);
            };
        });
    }
    /**
     * Type determinant.
     */


    (0, _createClass3.default)(FunctionOf, [{
        key: "isFunction",
        value: function isFunction() {
            return true;
        }
        /**
         * Apply the function to the input.
         * @param input Input.
         */

    }, {
        key: "apply",
        value: function apply(input) {
            return this.func.value()(input);
        }
    }]);
    return FunctionOf;
}();
FunctionOf = __decorate([index_1.final, index_2.frozen], FunctionOf);
exports.FunctionOf = FunctionOf;

},{"..":141,"../scalar":181,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],133:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("..");
var index_2 = require("..");
var index_3 = require("../scalar");
/**
 * Determines if variable is of type {@link Function}.
 */
var IsFunction = function () {
    /**
     * Ctor.
     * @param maybeFunc Variable to check.
     */
    function IsFunction(maybeFunc) {
        (0, _classCallCheck3.default)(this, IsFunction);

        this.isFunction = new index_3.HasTrueResult(maybeFunc, 'isFunction');
    }
    /**
     * Type determinant.
     */


    (0, _createClass3.default)(IsFunction, [{
        key: "isScalar",
        value: function isScalar() {
            return true;
        }
        /**
         * Get the value.
         */

    }, {
        key: "value",
        value: function value() {
            return this.isFunction.value();
        }
    }]);
    return IsFunction;
}();
IsFunction = __decorate([index_1.final, index_2.frozen], IsFunction);
exports.IsFunction = IsFunction;

},{"..":141,"../scalar":181,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],134:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("..");
var index_2 = require("..");
var index_3 = require("../scalar");
/**
 * Function that caches results.
 */
var IsTrue = function () {
    function IsTrue() {
        (0, _classCallCheck3.default)(this, IsTrue);
    }

    (0, _createClass3.default)(IsTrue, [{
        key: "isFunction",

        /**
         * Type determinant.
         */
        value: function isFunction() {
            return true;
        }
        /**
         * Apply the function to the input.
         * @param input Input.
         */

    }, {
        key: "apply",
        value: function apply(input) {
            return new index_3.BoolOf(input).value();
        }
    }]);
    return IsTrue;
}();
IsTrue = __decorate([index_1.final, index_2.frozen], IsTrue);
exports.IsTrue = IsTrue;

},{"..":141,"../scalar":181,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],135:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var index_2 = require("..");
var index_3 = require("..");
/**
 * Function without arguments.
 */
var NullaryFunctionOf = function () {
    /**
     * Ctor.
     * @param func Function callback.
     */
    function NullaryFunctionOf(func) {
        (0, _classCallCheck3.default)(this, NullaryFunctionOf);

        this.func = new index_1.FunctionOf(func);
    }
    /**
     * Type determinant.
     */


    (0, _createClass3.default)(NullaryFunctionOf, [{
        key: "isFunction",
        value: function isFunction() {
            return true;
        }
        /**
         * Apply the function to the input.
         * @param input Input.
         */

    }, {
        key: "apply",
        value: function apply(input) {
            return this.func.apply(input);
        }
    }]);
    return NullaryFunctionOf;
}();
NullaryFunctionOf = __decorate([index_2.final, index_3.frozen], NullaryFunctionOf);
exports.NullaryFunctionOf = NullaryFunctionOf;

},{"..":141,"./index":140,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],136:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var index_2 = require("..");
var index_3 = require("..");
var index_4 = require("../scalar");
/**
 * Function that executes when input is not null or undefined.
 */
var SafeNavigation = function () {
    /**
     * Ctor.
     * @param func Function.
     */
    function SafeNavigation(func) {
        (0, _classCallCheck3.default)(this, SafeNavigation);

        this.func = new index_1.Conditioned(function (input) {
            return new index_4.IsNotBlank(input).value();
        }, func);
    }
    /**
     * Type determinant.
     */


    (0, _createClass3.default)(SafeNavigation, [{
        key: "isFunction",
        value: function isFunction() {
            return true;
        }
        /**
         * Apply the function to the input.
         * @param input Input.
         */

    }, {
        key: "apply",
        value: function apply(input) {
            this.func.apply(input);
        }
    }]);
    return SafeNavigation;
}();
SafeNavigation = __decorate([index_2.final, index_3.frozen], SafeNavigation);
exports.SafeNavigation = SafeNavigation;

},{"..":141,"../scalar":181,"./index":140,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],137:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var index_2 = require("./index");
var index_3 = require("..");
var index_4 = require("..");
/**
 * Converts boolean-like types to boolean.
 */
var ToBool = function () {
    /**
     * Ctor.
     * @param toValue Function to convert scalar-like booleans to boolean primitives.
     */
    function ToBool() {
        var toValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new index_2.ToValue();
        (0, _classCallCheck3.default)(this, ToBool);

        this.toValue = new index_1.FunctionOf(toValue);
    }
    /**
     * Type determinant.
     */


    (0, _createClass3.default)(ToBool, [{
        key: "isFunction",
        value: function isFunction() {
            return true;
        }
        /**
         * Apply the function to the input.
         * @param input Input.
         */

    }, {
        key: "apply",
        value: function apply(input) {
            var isConditionConsequentLikePair = Array.isArray(input) && input.length === 2;
            return this.toValue.apply(isConditionConsequentLikePair ? input[0] : input);
        }
    }]);
    return ToBool;
}();
ToBool = __decorate([index_3.final, index_4.frozen], ToBool);
exports.ToBool = ToBool;

},{"..":141,"./index":140,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],138:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("..");
var index_2 = require("..");
var index_3 = require("../scalar");
/**
 * Converts {@link ConditionConsequentLikePair} to {@link ToConditionConsequentPair}.
 */
var ToConditionConsequentPair = function () {
    function ToConditionConsequentPair() {
        (0, _classCallCheck3.default)(this, ToConditionConsequentPair);
    }

    (0, _createClass3.default)(ToConditionConsequentPair, [{
        key: "isFunction",

        /**
         * Type determinant.
         */
        value: function isFunction() {
            return true;
        }
        /**
         * Apply the function to the input.
         * @param input Input.
         */

    }, {
        key: "apply",
        value: function apply(input) {
            return [new index_3.ScalarOf(input[0]), new index_3.ScalarOf(input[1])];
        }
    }]);
    return ToConditionConsequentPair;
}();
ToConditionConsequentPair = __decorate([index_1.final, index_2.frozen], ToConditionConsequentPair);
exports.ToConditionConsequentPair = ToConditionConsequentPair;

},{"..":141,"../scalar":181,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],139:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var index_2 = require("..");
var index_3 = require("..");
var index_4 = require("../scalar");
/**
 * Converts scalar-like types to their respective values.
 */
var ToValue = function () {
    function ToValue() {
        (0, _classCallCheck3.default)(this, ToValue);
    }

    (0, _createClass3.default)(ToValue, [{
        key: "isFunction",

        /**
         * Type determinant.
         */
        value: function isFunction() {
            return true;
        }
        /**
         * Apply the function to the input.
         * @param input Input.
         */

    }, {
        key: "apply",
        value: function apply(input) {
            if (typeof input === 'function') {
                return input();
            } else if (new index_4.IsScalar(input).value()) {
                return input.value();
            } else if (new index_1.IsFunction(input).value()) {
                return input.apply(undefined);
            } else {
                return input;
            }
        }
    }]);
    return ToValue;
}();
ToValue = __decorate([index_2.final, index_3.frozen], ToValue);
exports.ToValue = ToValue;

},{"..":141,"../scalar":181,"./index":140,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],140:[function(require,module,exports){
"use strict";

function __export(m) {
  for (var p in m) {
    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Index
 */
__export(require("./Cached"));
__export(require("./Conditioned"));
__export(require("./FunctionOf"));
__export(require("./IsFunction"));
__export(require("./IsTrue"));
__export(require("./NullaryFunctionOf"));
__export(require("./SafeNavigation"));
__export(require("./ToBool"));
__export(require("./ToConditionConsequentPair"));
__export(require("./ToValue"));

},{"./Cached":130,"./Conditioned":131,"./FunctionOf":132,"./IsFunction":133,"./IsTrue":134,"./NullaryFunctionOf":135,"./SafeNavigation":136,"./ToBool":137,"./ToConditionConsequentPair":138,"./ToValue":139}],141:[function(require,module,exports){
"use strict";

function __export(m) {
  for (var p in m) {
    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Main index.
 */
__export(require("./final"));
__export(require("./frozen"));
__export(require("./IllegalInheritanceError"));
__export(require("./IllegalStateError"));
__export(require("./sealed"));

},{"./IllegalInheritanceError":126,"./IllegalStateError":127,"./final":128,"./frozen":129,"./sealed":182}],142:[function(require,module,exports){
"use strict";

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _iterator = require("babel-runtime/core-js/symbol/iterator");

var _iterator2 = _interopRequireDefault(_iterator);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../function");
var index_2 = require("..");
var index_3 = require("..");
var index_4 = require("./index");
/**
 * Iterable of logical conditions.
 */
var Conditions = function () {
    /**
     * Ctor.
     * @param conditions Conditions.
     */
    function Conditions(conditions) {
        (0, _classCallCheck3.default)(this, Conditions);

        this.conditions = new index_4.Mapped(conditions, new index_1.ToBool());
    }
    /**
     * Iterator.
     */


    (0, _createClass3.default)(Conditions, [{
        key: _iterator2.default,
        value: function value() {
            return (0, _getIterator3.default)(this.conditions);
        }
    }]);
    return Conditions;
}();
Conditions = __decorate([index_2.final, index_3.frozen], Conditions);
exports.Conditions = Conditions;

},{"..":141,"../function":140,"./index":149,"babel-runtime/core-js/get-iterator":1,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/core-js/symbol/iterator":11,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],143:[function(require,module,exports){
"use strict";

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("..");
var index_2 = require("..");
/**
 * Iterables equals.
 */
var Equals = function () {
    /**
     * Ctor.
     * @param source Value.
     * @param compared Compared.
     */
    function Equals(source, compared) {
        (0, _classCallCheck3.default)(this, Equals);

        this.source = source;
        this.compared = compared;
    }
    /**
     * Type determinant.
     */


    (0, _createClass3.default)(Equals, [{
        key: "isScalar",
        value: function isScalar() {
            return true;
        }
        /**
         * Gets the value.
         */

    }, {
        key: "value",
        value: function value() {
            var result = true;
            var sourceIterator = (0, _getIterator3.default)(this.source);
            var comparedIterator = (0, _getIterator3.default)(this.compared);
            do {
                var sourceNext = sourceIterator.next();
                var comparedNext = comparedIterator.next();
                if (sourceNext.done === comparedNext.done) {
                    if (sourceNext.value !== comparedNext.value) {
                        result = false;
                    } else {
                        if (sourceNext.done) {
                            break;
                        }
                    }
                } else {
                    result = false;
                }
            } while (result);
            return result;
        }
    }]);
    return Equals;
}();
Equals = __decorate([index_1.final, index_2.frozen], Equals);
exports.Equals = Equals;

},{"..":141,"babel-runtime/core-js/get-iterator":1,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],144:[function(require,module,exports){
"use strict";

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _iterator2 = require("babel-runtime/core-js/symbol/iterator");

var _iterator3 = _interopRequireDefault(_iterator2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../function");
var index_2 = require("..");
var index_3 = require("..");
/**
 * Filtered iterable.
 */
var Filtered = function () {
    /**
     * Ctor.
     * @param iterable Iterable.
     * @param func Function.
     */
    function Filtered(iterable, func) {
        (0, _classCallCheck3.default)(this, Filtered);

        this.iterable = iterable;
        this.func = new index_1.FunctionOf(func);
    }
    /**
     * Iterator.
     */


    (0, _createClass3.default)(Filtered, [{
        key: _iterator3.default,
        value: /*#__PURE__*/_regenerator2.default.mark(function value() {
            var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item;

            return _regenerator2.default.wrap(function value$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _iteratorNormalCompletion = true;
                            _didIteratorError = false;
                            _iteratorError = undefined;
                            _context.prev = 3;
                            _iterator = (0, _getIterator3.default)(this.iterable);

                        case 5:
                            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                                _context.next = 13;
                                break;
                            }

                            item = _step.value;

                            if (!this.func.apply(item)) {
                                _context.next = 10;
                                break;
                            }

                            _context.next = 10;
                            return item;

                        case 10:
                            _iteratorNormalCompletion = true;
                            _context.next = 5;
                            break;

                        case 13:
                            _context.next = 19;
                            break;

                        case 15:
                            _context.prev = 15;
                            _context.t0 = _context["catch"](3);
                            _didIteratorError = true;
                            _iteratorError = _context.t0;

                        case 19:
                            _context.prev = 19;
                            _context.prev = 20;

                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }

                        case 22:
                            _context.prev = 22;

                            if (!_didIteratorError) {
                                _context.next = 25;
                                break;
                            }

                            throw _iteratorError;

                        case 25:
                            return _context.finish(22);

                        case 26:
                            return _context.finish(19);

                        case 27:
                        case "end":
                            return _context.stop();
                    }
                }
            }, value, this, [[3, 15, 19, 27], [20,, 22, 26]]);
        })
    }]);
    return Filtered;
}();
Filtered = __decorate([index_2.final, index_3.frozen], Filtered);
exports.Filtered = Filtered;

},{"..":141,"../function":140,"babel-runtime/core-js/get-iterator":1,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/core-js/symbol/iterator":11,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16,"babel-runtime/regenerator":17}],145:[function(require,module,exports){
"use strict";

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("..");
var index_2 = require("..");
var index_3 = require("./index");
/**
 * First item of iterable.
 */
var First = function () {
    /**
     * Ctor.
     * @param value Value.
     */
    function First(value) {
        (0, _classCallCheck3.default)(this, First);

        this.source = new index_3.Limited(value, 1);
    }
    /**
     * Type determinant.
     */


    (0, _createClass3.default)(First, [{
        key: "isScalar",
        value: function isScalar() {
            return true;
        }
        /**
         * Gets the value.
         */

    }, {
        key: "value",
        value: function value() {
            return (0, _getIterator3.default)(this.source).next();
        }
    }]);
    return First;
}();
First = __decorate([index_1.final, index_2.frozen], First);
exports.First = First;

},{"..":141,"./index":149,"babel-runtime/core-js/get-iterator":1,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],146:[function(require,module,exports){
"use strict";

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("..");
var index_2 = require("..");
/**
 * Length of iterable.
 */
var LengthOf = function () {
    /**
     * Ctor.
     * @param value Value.
     */
    function LengthOf(value) {
        (0, _classCallCheck3.default)(this, LengthOf);

        this.source = value;
    }
    /**
     * Type determinant.
     */


    (0, _createClass3.default)(LengthOf, [{
        key: "isScalar",
        value: function isScalar() {
            return true;
        }
        /**
         * Gets the value.
         */

    }, {
        key: "value",
        value: function value() {
            var length = 0;
            // tslint:disable-next-line:variable-name
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = (0, _getIterator3.default)(this.source), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var _item = _step.value;

                    length += 1;
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return length;
        }
    }]);
    return LengthOf;
}();
LengthOf = __decorate([index_1.final, index_2.frozen], LengthOf);
exports.LengthOf = LengthOf;

},{"..":141,"babel-runtime/core-js/get-iterator":1,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],147:[function(require,module,exports){
"use strict";

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _iterator2 = require("babel-runtime/core-js/symbol/iterator");

var _iterator3 = _interopRequireDefault(_iterator2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("..");
var index_2 = require("..");
var index_3 = require("../scalar");
/**
 * Limited iterable.
 */
var Limited = function () {
    /**
     * Ctor.
     * @param iterable Iterable.
     * @param number Limit.
     */
    function Limited(iterable, limit) {
        (0, _classCallCheck3.default)(this, Limited);

        this.iterable = iterable;
        this.limit = new index_3.ScalarOf(limit);
    }
    /**
     * Iterator.
     */


    (0, _createClass3.default)(Limited, [{
        key: _iterator3.default,
        value: /*#__PURE__*/_regenerator2.default.mark(function value() {
            var count, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item;

            return _regenerator2.default.wrap(function value$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            count = 0;
                            _iteratorNormalCompletion = true;
                            _didIteratorError = false;
                            _iteratorError = undefined;
                            _context.prev = 4;
                            _iterator = (0, _getIterator3.default)(this.iterable);

                        case 6:
                            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                                _context.next = 16;
                                break;
                            }

                            item = _step.value;

                            if (!(count >= this.limit.value())) {
                                _context.next = 10;
                                break;
                            }

                            return _context.abrupt("break", 16);

                        case 10:
                            _context.next = 12;
                            return item;

                        case 12:
                            count += 1;

                        case 13:
                            _iteratorNormalCompletion = true;
                            _context.next = 6;
                            break;

                        case 16:
                            _context.next = 22;
                            break;

                        case 18:
                            _context.prev = 18;
                            _context.t0 = _context["catch"](4);
                            _didIteratorError = true;
                            _iteratorError = _context.t0;

                        case 22:
                            _context.prev = 22;
                            _context.prev = 23;

                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }

                        case 25:
                            _context.prev = 25;

                            if (!_didIteratorError) {
                                _context.next = 28;
                                break;
                            }

                            throw _iteratorError;

                        case 28:
                            return _context.finish(25);

                        case 29:
                            return _context.finish(22);

                        case 30:
                        case "end":
                            return _context.stop();
                    }
                }
            }, value, this, [[4, 18, 22, 30], [23,, 25, 29]]);
        })
    }]);
    return Limited;
}();
Limited = __decorate([index_1.final, index_2.frozen], Limited);
exports.Limited = Limited;

},{"..":141,"../scalar":181,"babel-runtime/core-js/get-iterator":1,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/core-js/symbol/iterator":11,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16,"babel-runtime/regenerator":17}],148:[function(require,module,exports){
"use strict";

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _iterator2 = require("babel-runtime/core-js/symbol/iterator");

var _iterator3 = _interopRequireDefault(_iterator2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../function");
var index_2 = require("..");
var index_3 = require("..");
/**
 * Mapped iterable.
 */
var Mapped = function () {
    /**
     * Ctor.
     * @param iterable Iterable.
     * @param func Function.
     */
    function Mapped(iterable, func) {
        (0, _classCallCheck3.default)(this, Mapped);

        this.iterable = iterable;
        this.func = new index_1.FunctionOf(func);
    }
    /**
     * Iterator.
     */


    (0, _createClass3.default)(Mapped, [{
        key: _iterator3.default,
        value: /*#__PURE__*/_regenerator2.default.mark(function value() {
            var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item;

            return _regenerator2.default.wrap(function value$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _iteratorNormalCompletion = true;
                            _didIteratorError = false;
                            _iteratorError = undefined;
                            _context.prev = 3;
                            _iterator = (0, _getIterator3.default)(this.iterable);

                        case 5:
                            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                                _context.next = 12;
                                break;
                            }

                            item = _step.value;
                            _context.next = 9;
                            return this.func.apply(item);

                        case 9:
                            _iteratorNormalCompletion = true;
                            _context.next = 5;
                            break;

                        case 12:
                            _context.next = 18;
                            break;

                        case 14:
                            _context.prev = 14;
                            _context.t0 = _context["catch"](3);
                            _didIteratorError = true;
                            _iteratorError = _context.t0;

                        case 18:
                            _context.prev = 18;
                            _context.prev = 19;

                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }

                        case 21:
                            _context.prev = 21;

                            if (!_didIteratorError) {
                                _context.next = 24;
                                break;
                            }

                            throw _iteratorError;

                        case 24:
                            return _context.finish(21);

                        case 25:
                            return _context.finish(18);

                        case 26:
                        case "end":
                            return _context.stop();
                    }
                }
            }, value, this, [[3, 14, 18, 26], [19,, 21, 25]]);
        })
    }]);
    return Mapped;
}();
Mapped = __decorate([index_2.final, index_3.frozen], Mapped);
exports.Mapped = Mapped;

},{"..":141,"../function":140,"babel-runtime/core-js/get-iterator":1,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/core-js/symbol/iterator":11,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16,"babel-runtime/regenerator":17}],149:[function(require,module,exports){
"use strict";

function __export(m) {
  for (var p in m) {
    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Index.
 */
__export(require("./Conditions"));
__export(require("./Equals"));
__export(require("./Filtered"));
__export(require("./First"));
__export(require("./LengthOf"));
__export(require("./Limited"));
__export(require("./Mapped"));

},{"./Conditions":142,"./Equals":143,"./Filtered":144,"./First":145,"./LengthOf":146,"./Limited":147,"./Mapped":148}],150:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("..");
var index_2 = require("..");
var index_3 = require("../scalar");
/**
 * Park-Miller random source.
 * @see http://www.firstpr.com.au/dsp/rand31/
 *
 * For other alternative implementations in JS:
 * @see https://github.com/odogono/prng-parkmiller-js
 * @see https://github.com/SirAnthony/rand31
 * @see https://gist.github.com/blixt/f17b47c62508be59987b
 */
var ParkMillerRandom = ParkMillerRandom_1 = function () {
    /**
     * Ctor.
     * @param seed Seed number. If not provided will use a seed based on the current time.
     */
    function ParkMillerRandom() {
        var seed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {
            return Date.now();
        };
        (0, _classCallCheck3.default)(this, ParkMillerRandom);

        // make sure seed is number between 1 and MAX
        this.seed = new index_3.ScalarOf(function () {
            var source = new index_3.ScalarOf(seed).value();
            source = source === 0 ? 1 : source;
            return Math.abs(source) % ParkMillerRandom_1.MAX;
        });
    }
    /**
     * Next random value between 0 (inclusive) and 1 (exclusive).
     */


    (0, _createClass3.default)(ParkMillerRandom, [{
        key: "next",
        value: function next() {
            this.seed = new index_3.ScalarOf(this.seed.value() * 16807 % ParkMillerRandom_1.MAX);
            return this.seed.value() / ParkMillerRandom_1.MAX;
        }
    }]);
    return ParkMillerRandom;
}();
/**
 * Maximum (exclusive) possible value.
 */
ParkMillerRandom.MAX = 2147483647;
ParkMillerRandom = ParkMillerRandom_1 = __decorate([index_1.final, index_2.frozen], ParkMillerRandom);
exports.ParkMillerRandom = ParkMillerRandom;
var ParkMillerRandom_1;

},{"..":141,"../scalar":181,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],151:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("..");
var index_2 = require("..");
/**
 * RandomSource as {@link Random}.
 */
var RandomOf = function () {
    /**
     * Ctor.
     * @param source Random source.
     */
    function RandomOf(source) {
        (0, _classCallCheck3.default)(this, RandomOf);

        this.source = source;
    }
    /**
     * Next random value between 0 (inclusive) and 1 (exclusive).
     */


    (0, _createClass3.default)(RandomOf, [{
        key: "next",
        value: function next() {
            var arr = new Uint32Array(1);
            this.source.getRandomValues(arr);
            return arr[0] / Math.pow(2, 32);
        }
    }]);
    return RandomOf;
}();
RandomOf = __decorate([index_1.final, index_2.frozen], RandomOf);
exports.RandomOf = RandomOf;

},{"..":141,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],152:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("..");
var index_2 = require("..");
/**
 * Randomized bool.
 */
var RandomizedBool = function () {
    /**
     * Ctor.
     * @param random Random.
     */
    function RandomizedBool(random) {
        (0, _classCallCheck3.default)(this, RandomizedBool);

        this.random = random;
    }
    /**
     * Type determinant.
     */


    (0, _createClass3.default)(RandomizedBool, [{
        key: "isScalar",
        value: function isScalar() {
            return true;
        }
        /**
         * Get the value.
         */

    }, {
        key: "value",
        value: function value() {
            return this.random.next() >= 0.5;
        }
    }]);
    return RandomizedBool;
}();
RandomizedBool = __decorate([index_1.final, index_2.frozen], RandomizedBool);
exports.RandomizedBool = RandomizedBool;

},{"..":141,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],153:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("..");
var index_2 = require("..");
var index_3 = require("../scalar");
/**
 * Randomized floating point number.
 */
var RandomizedFloat = function () {
    /**
     * Ctor.
     * @param random Random.
     * @param min Minimum possible value (inclusive).
     * @param max Maximum possible value (inclusive).
     */
    function RandomizedFloat(random, min, max) {
        (0, _classCallCheck3.default)(this, RandomizedFloat);

        this.random = random;
        this.min = new index_3.ScalarOf(min);
        this.max = new index_3.ScalarOf(max);
    }
    /**
     * Type determinant.
     */


    (0, _createClass3.default)(RandomizedFloat, [{
        key: "isScalar",
        value: function isScalar() {
            return true;
        }
        /**
         * Get the value.
         */

    }, {
        key: "value",
        value: function value() {
            return this.min.value() + (this.max.value() - this.min.value()) * this.random.next();
        }
    }]);
    return RandomizedFloat;
}();
RandomizedFloat = __decorate([index_1.final, index_2.frozen], RandomizedFloat);
exports.RandomizedFloat = RandomizedFloat;

},{"..":141,"../scalar":181,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],154:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("..");
var index_2 = require("..");
var index_3 = require("./index");
/**
 * Randomized integer.
 */
var RandomizedInt = function () {
    /**
     * Ctor.
     * @param random Random.
     * @param min Minimum possible value (inclusive).
     * @param max Maximum possible value (inclusive).
     */
    function RandomizedInt(random, min, max) {
        (0, _classCallCheck3.default)(this, RandomizedInt);

        this.randomizedFloat = new index_3.RandomizedFloat(random, min, max);
    }
    /**
     * Type determinant.
     */


    (0, _createClass3.default)(RandomizedInt, [{
        key: "isScalar",
        value: function isScalar() {
            return true;
        }
        /**
         * Get the value.
         */

    }, {
        key: "value",
        value: function value() {
            return Math.round(this.randomizedFloat.value());
        }
    }]);
    return RandomizedInt;
}();
RandomizedInt = __decorate([index_1.final, index_2.frozen], RandomizedInt);
exports.RandomizedInt = RandomizedInt;

},{"..":141,"./index":156,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],155:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("..");
var index_2 = require("..");
var index_3 = require("./index");
/**
 * Randomized floating point number between 0 and 1.
 */
var RandomizedPercentage = function () {
    /**
     * Ctor.
     * @param random Random.
     */
    function RandomizedPercentage(random) {
        (0, _classCallCheck3.default)(this, RandomizedPercentage);

        this.randomizedFloat = new index_3.RandomizedFloat(random, 0, 1);
    }
    /**
     * Type determinant.
     */


    (0, _createClass3.default)(RandomizedPercentage, [{
        key: "isScalar",
        value: function isScalar() {
            return true;
        }
        /**
         * Get the value.
         */

    }, {
        key: "value",
        value: function value() {
            return this.randomizedFloat.value();
        }
    }]);
    return RandomizedPercentage;
}();
RandomizedPercentage = __decorate([index_1.final, index_2.frozen], RandomizedPercentage);
exports.RandomizedPercentage = RandomizedPercentage;

},{"..":141,"./index":156,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],156:[function(require,module,exports){
"use strict";

function __export(m) {
  for (var p in m) {
    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Index.
 */
__export(require("./ParkMillerRandom"));
__export(require("./RandomizedBool"));
__export(require("./RandomizedFloat"));
__export(require("./RandomizedInt"));
__export(require("./RandomizedPercentage"));
__export(require("./RandomOf"));

},{"./ParkMillerRandom":150,"./RandomOf":151,"./RandomizedBool":152,"./RandomizedFloat":153,"./RandomizedInt":154,"./RandomizedPercentage":155}],157:[function(require,module,exports){
"use strict";

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("..");
var index_2 = require("..");
var index_3 = require("../iterable");
/**
 * Logical conjunction operator.
 */
var And = function () {
    /**
     * Ctor.
     * @param conditions Conditions.
     */
    function And() {
        (0, _classCallCheck3.default)(this, And);

        for (var _len = arguments.length, conditions = Array(_len), _key = 0; _key < _len; _key++) {
            conditions[_key] = arguments[_key];
        }

        this.conditions = new index_3.Conditions(conditions);
    }
    /**
     * Type determinant.
     */


    (0, _createClass3.default)(And, [{
        key: "isScalar",
        value: function isScalar() {
            return true;
        }
        /**
         * Get the value.
         */

    }, {
        key: "value",
        value: function value() {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = (0, _getIterator3.default)(this.conditions), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var condition = _step.value;

                    if (!condition) {
                        return false;
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return true;
        }
    }]);
    return And;
}();
And = __decorate([index_1.final, index_2.frozen], And);
exports.And = And;

},{"..":141,"../iterable":149,"babel-runtime/core-js/get-iterator":1,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],158:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../function");
var index_2 = require("../function");
var index_3 = require("..");
var index_4 = require("..");
/**
 * Boolean of different possible inputs.
 */
var BoolOf = function () {
    /**
     * Ctor.
     * @param value Boolean-like value.
     */
    function BoolOf(value) {
        var toBool = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new index_2.ToBool();
        (0, _classCallCheck3.default)(this, BoolOf);

        this.bool = value;
        this.toBool = new index_1.FunctionOf(toBool);
    }
    /**
     * Type determinant.
     */


    (0, _createClass3.default)(BoolOf, [{
        key: "isScalar",
        value: function isScalar() {
            return true;
        }
        /**
         * Gets the value.
         */

    }, {
        key: "value",
        value: function value() {
            return this.toBool.apply(this.bool);
        }
    }]);
    return BoolOf;
}();
BoolOf = __decorate([index_3.final, index_4.frozen], BoolOf);
exports.BoolOf = BoolOf;

},{"..":141,"../function":140,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],159:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("..");
var index_2 = require("..");
var index_3 = require("./index");
/**
 * Cached scalar.
 */
var Cached = function () {
    /**
     * Ctor.
     * @param value Value.
     */
    function Cached(value) {
        (0, _classCallCheck3.default)(this, Cached);

        this.scalar = new index_3.ScalarOf(value);
        this.isCached = false;
    }
    /**
     * Type determinant.
     */


    (0, _createClass3.default)(Cached, [{
        key: "isScalar",
        value: function isScalar() {
            return true;
        }
        /**
         * Get the value.
         */

    }, {
        key: "value",
        value: function value() {
            if (!this.isCached) {
                this.cache = this.scalar.value();
                this.isCached = true;
            }
            return this.cache;
        }
    }]);
    return Cached;
}();
Cached = __decorate([index_1.final, index_2.frozen], Cached);
exports.Cached = Cached;

},{"..":141,"./index":181,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],160:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../function");
var index_2 = require("../function");
var index_3 = require("..");
var index_4 = require("..");
var index_5 = require("../iterable");
var index_6 = require("../iterable");
var index_7 = require("../iterable");
var index_8 = require("./index");
/**
 * Conditional scalar.
 */
var Conditioned = function () {
    /**
     * Ctor.
     *
     * @param alternative Fallback value when all conditions are false.
     * @param conditionConsequents Condition/consequent pairs.
     */
    function Conditioned(alternative) {
        (0, _classCallCheck3.default)(this, Conditioned);

        for (var _len = arguments.length, conditionConsequents = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            conditionConsequents[_key - 1] = arguments[_key];
        }

        this.firstConditionConsequent = new index_6.First(new index_5.Filtered(new index_7.Mapped(conditionConsequents, new index_2.ToConditionConsequentPair()), new index_1.IsTrue()));
        this.alternative = new index_8.ScalarOf(alternative);
    }
    /**
     * Type determinant.
     */


    (0, _createClass3.default)(Conditioned, [{
        key: "isScalar",
        value: function isScalar() {
            return true;
        }
        /**
         * Gets the value.
         */

    }, {
        key: "value",
        value: function value() {
            var first = this.firstConditionConsequent.value();
            return !first.done ? first.value[1].value() : this.alternative.value();
        }
    }]);
    return Conditioned;
}();
Conditioned = __decorate([index_3.final, index_4.frozen], Conditioned);
exports.Conditioned = Conditioned;

},{"..":141,"../function":140,"../iterable":149,"./index":181,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],161:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("..");
var index_2 = require("..");
/**
 * False scalar.
 */
var False = function () {
    function False() {
        (0, _classCallCheck3.default)(this, False);
    }

    (0, _createClass3.default)(False, [{
        key: "isScalar",

        /**
         * Type determinant.
         */
        value: function isScalar() {
            return true;
        }
        /**
         * Get the value.
         */

    }, {
        key: "value",
        value: function value() {
            return false;
        }
    }]);
    return False;
}();
False = __decorate([index_1.final, index_2.frozen], False);
exports.False = False;

},{"..":141,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],162:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("..");
var index_2 = require("..");
/**
 * Determines if an object has a property set to true.
 */
var HasTrueProperty = function () {
    /**
     * Ctor.
     * @param value Variable.
     * @param propertyName Name of the property.
     */
    function HasTrueProperty(value, propertyName) {
        (0, _classCallCheck3.default)(this, HasTrueProperty);

        this.isPropertyTrue = function () {
            return value !== null && (typeof value === "undefined" ? "undefined" : (0, _typeof3.default)(value)) === 'object' && value[propertyName] === true;
        };
    }
    /**
     * Type determinant.
     */


    (0, _createClass3.default)(HasTrueProperty, [{
        key: "isScalar",
        value: function isScalar() {
            return true;
        }
        /**
         * Get the value.
         */

    }, {
        key: "value",
        value: function value() {
            return this.isPropertyTrue();
        }
    }]);
    return HasTrueProperty;
}();
HasTrueProperty = __decorate([index_1.final, index_2.frozen], HasTrueProperty);
exports.HasTrueProperty = HasTrueProperty;

},{"..":141,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],163:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("..");
var index_2 = require("..");
/**
 * Determines if an object has a nullary function that returns true.
 */
var HasTrueResult = function () {
    /**
     * Ctor.
     * @param value Variable.
     * @param functionName Name of the function.
     */
    function HasTrueResult(value, functionName) {
        (0, _classCallCheck3.default)(this, HasTrueResult);

        this.isResultTrue = function () {
            return value !== null && (typeof value === "undefined" ? "undefined" : (0, _typeof3.default)(value)) === 'object' && typeof value[functionName] === 'function' && value[functionName]();
        };
    }
    /**
     * Type determinant.
     */


    (0, _createClass3.default)(HasTrueResult, [{
        key: "isScalar",
        value: function isScalar() {
            return true;
        }
        /**
         * Get the value.
         */

    }, {
        key: "value",
        value: function value() {
            return this.isResultTrue();
        }
    }]);
    return HasTrueResult;
}();
HasTrueResult = __decorate([index_1.final, index_2.frozen], HasTrueResult);
exports.HasTrueResult = HasTrueResult;

},{"..":141,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],164:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("..");
var index_2 = require("..");
var index_3 = require("./index");
var index_4 = require("./index");
var index_5 = require("./index");
/**
 * Determines if scalar or value is null or undefined.
 */
var IsBlank = function () {
    /**
     * Ctor.
     * @param value Value.
     */
    function IsBlank(value) {
        (0, _classCallCheck3.default)(this, IsBlank);

        this.isBlank = new index_5.Or(new index_3.IsNull(value), new index_4.IsUndefined(value));
    }
    /**
     * Type determinant.
     */


    (0, _createClass3.default)(IsBlank, [{
        key: "isScalar",
        value: function isScalar() {
            return true;
        }
        /**
         * Get the value.
         */

    }, {
        key: "value",
        value: function value() {
            return this.isBlank.value();
        }
    }]);
    return IsBlank;
}();
IsBlank = __decorate([index_1.final, index_2.frozen], IsBlank);
exports.IsBlank = IsBlank;

},{"..":141,"./index":181,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],165:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("..");
var index_2 = require("..");
/**
 * Determines if variable is a standard JavaScript function.
 */
var IsJsFunction = function () {
    /**
     * Ctor.
     * @param val Variable to check.
     */
    function IsJsFunction(val) {
        (0, _classCallCheck3.default)(this, IsJsFunction);

        this.val = val;
    }
    /**
     * Type determinant.
     */


    (0, _createClass3.default)(IsJsFunction, [{
        key: "isScalar",
        value: function isScalar() {
            return true;
        }
        /**
         * Get the value.
         */

    }, {
        key: "value",
        value: function value() {
            return typeof this.val === 'function';
        }
    }]);
    return IsJsFunction;
}();
IsJsFunction = __decorate([index_1.final, index_2.frozen], IsJsFunction);
exports.IsJsFunction = IsJsFunction;

},{"..":141,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],166:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("..");
var index_2 = require("..");
var index_3 = require("./index");
var index_4 = require("./index");
/**
 * Determines if scalar or value is not null and not undefined.
 */
var IsNotBlank = function () {
    /**
     * Ctor.
     * @param value Value.
     */
    function IsNotBlank(value) {
        (0, _classCallCheck3.default)(this, IsNotBlank);

        this.scalar = new index_4.ScalarOf(value);
    }
    /**
     * Type determinant.
     */


    (0, _createClass3.default)(IsNotBlank, [{
        key: "isScalar",
        value: function isScalar() {
            return true;
        }
        /**
         * Get the value.
         */

    }, {
        key: "value",
        value: function value() {
            return !new index_3.IsBlank(this.scalar).value();
        }
    }]);
    return IsNotBlank;
}();
IsNotBlank = __decorate([index_1.final, index_2.frozen], IsNotBlank);
exports.IsNotBlank = IsNotBlank;

},{"..":141,"./index":181,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],167:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("..");
var index_2 = require("..");
var index_3 = require("./index");
/**
 * Determines if scalar or value is null.
 */
var IsNull = function () {
    /**
     * Ctor.
     * @param value Value.
     */
    function IsNull(value) {
        (0, _classCallCheck3.default)(this, IsNull);

        this.scalar = new index_3.ScalarOf(value);
    }
    /**
     * Type determinant.
     */


    (0, _createClass3.default)(IsNull, [{
        key: "isScalar",
        value: function isScalar() {
            return true;
        }
        /**
         * Get the value.
         */

    }, {
        key: "value",
        value: function value() {
            return this.scalar.value() === null;
        }
    }]);
    return IsNull;
}();
IsNull = __decorate([index_1.final, index_2.frozen], IsNull);
exports.IsNull = IsNull;

},{"..":141,"./index":181,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],168:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("..");
var index_2 = require("..");
var index_3 = require("./index");
/**
 * Determines if variable is an object.
 */
var IsObject = function () {
    /**
     * Ctor.
     * @param value Value.
     */
    function IsObject(value) {
        (0, _classCallCheck3.default)(this, IsObject);

        this.scalar = new index_3.ScalarOf(value);
    }
    /**
     * Type determinant.
     */


    (0, _createClass3.default)(IsObject, [{
        key: "isScalar",
        value: function isScalar() {
            return true;
        }
        /**
         * Get the value.
         */

    }, {
        key: "value",
        value: function value() {
            return (0, _typeof3.default)(this.scalar.value()) === 'object';
        }
    }]);
    return IsObject;
}();
IsObject = __decorate([index_1.final, index_2.frozen], IsObject);
exports.IsObject = IsObject;

},{"..":141,"./index":181,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],169:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("..");
var index_2 = require("..");
var index_3 = require("./index");
/**
 * Determines if variable is of type {@link Scalar}.
 */
var IsScalar = function () {
    /**
     * Ctor.
     * @param maybeScalar Variable to check.
     */
    function IsScalar(maybeScalar) {
        (0, _classCallCheck3.default)(this, IsScalar);

        this.isScalarType = new index_3.HasTrueResult(maybeScalar, 'isScalar');
    }
    /**
     * Type determinant.
     */


    (0, _createClass3.default)(IsScalar, [{
        key: "isScalar",
        value: function isScalar() {
            return true;
        }
        /**
         * Get the value.
         */

    }, {
        key: "value",
        value: function value() {
            return this.isScalarType.value();
        }
    }]);
    return IsScalar;
}();
IsScalar = __decorate([index_1.final, index_2.frozen], IsScalar);
exports.IsScalar = IsScalar;

},{"..":141,"./index":181,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],170:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("..");
var index_2 = require("..");
var index_3 = require("./index");
/**
 * Determines if scalar or value is undefined.
 */
var IsUndefined = function () {
    /**
     * Ctor.
     * @param value Value.
     */
    function IsUndefined(value) {
        (0, _classCallCheck3.default)(this, IsUndefined);

        this.scalar = new index_3.ScalarOf(value);
    }
    /**
     * Type determinant.
     */


    (0, _createClass3.default)(IsUndefined, [{
        key: "isScalar",
        value: function isScalar() {
            return true;
        }
        /**
         * Get the value.
         */

    }, {
        key: "value",
        value: function value() {
            return this.scalar.value() === undefined;
        }
    }]);
    return IsUndefined;
}();
IsUndefined = __decorate([index_1.final, index_2.frozen], IsUndefined);
exports.IsUndefined = IsUndefined;

},{"..":141,"./index":181,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],171:[function(require,module,exports){
"use strict";

var _map = require("babel-runtime/core-js/map");

var _map2 = _interopRequireDefault(_map);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../function");
var index_2 = require("..");
var index_3 = require("..");
var index_4 = require("../iterable");
/**
 * Map of iterable and callback.
 */
var MapOf = function () {
    /**
     * Ctor.
     * @param entries Items.
     * @param getEntry Function or standard JavaScript function to get key value entry.
     */
    function MapOf(entries, getEntry) {
        (0, _classCallCheck3.default)(this, MapOf);

        this.entries = entries;
        this.getEntry = new index_1.FunctionOf(getEntry);
    }
    /**
     * Type determinant.
     */


    (0, _createClass3.default)(MapOf, [{
        key: "isScalar",
        value: function isScalar() {
            return true;
        }
        /**
         * Gets the value.
         */

    }, {
        key: "value",
        value: function value() {
            return new _map2.default(new index_4.Mapped(this.entries, this.getEntry));
        }
    }]);
    return MapOf;
}();
MapOf = __decorate([index_2.final, index_3.frozen], MapOf);
exports.MapOf = MapOf;

},{"..":141,"../function":140,"../iterable":149,"babel-runtime/core-js/map":2,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],172:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("..");
var index_2 = require("..");
var index_3 = require("./index");
/**
 * Negates a logical condition.
 */
var Not = function () {
    /**
     * Ctor.
     * @param value Value.
     */
    function Not(value) {
        (0, _classCallCheck3.default)(this, Not);

        this.scalar = new index_3.ScalarOf(value);
    }
    /**
     * Type determinant.
     */


    (0, _createClass3.default)(Not, [{
        key: "isScalar",
        value: function isScalar() {
            return true;
        }
        /**
         * Get the value.
         */

    }, {
        key: "value",
        value: function value() {
            return !this.scalar.value();
        }
    }]);
    return Not;
}();
Not = __decorate([index_1.final, index_2.frozen], Not);
exports.Not = Not;

},{"..":141,"./index":181,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],173:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("..");
var index_2 = require("..");
/**
 * Null scalar.
 */
var Null = function () {
    function Null() {
        (0, _classCallCheck3.default)(this, Null);
    }

    (0, _createClass3.default)(Null, [{
        key: "isScalar",

        /**
         * Type determinant.
         */
        value: function isScalar() {
            return true;
        }
        /**
         * Get the value.
         */

    }, {
        key: "value",
        value: function value() {
            return null;
        }
    }]);
    return Null;
}();
Null = __decorate([index_1.final, index_2.frozen], Null);
exports.Null = Null;

},{"..":141,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],174:[function(require,module,exports){
"use strict";

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("..");
var index_2 = require("..");
var index_3 = require("../iterable");
/**
 * Logical disjunction operator.
 */
var Or = function () {
    /**
     * Ctor.
     * @param conditions Conditions.
     */
    function Or() {
        (0, _classCallCheck3.default)(this, Or);

        for (var _len = arguments.length, conditions = Array(_len), _key = 0; _key < _len; _key++) {
            conditions[_key] = arguments[_key];
        }

        this.conditions = new index_3.Conditions(conditions);
    }
    /**
     * Type determinant.
     */


    (0, _createClass3.default)(Or, [{
        key: "isScalar",
        value: function isScalar() {
            return true;
        }
        /**
         * Get the value.
         */

    }, {
        key: "value",
        value: function value() {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = (0, _getIterator3.default)(this.conditions), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var condition = _step.value;

                    if (condition) {
                        return true;
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return false;
        }
    }]);
    return Or;
}();
Or = __decorate([index_1.final, index_2.frozen], Or);
exports.Or = Or;

},{"..":141,"../iterable":149,"babel-runtime/core-js/get-iterator":1,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],175:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("..");
var index_2 = require("..");
var index_3 = require("./index");
/**
 * Rounded number.
 * Code adapted from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round.
 */
var Rounded = function () {
    /**
     * Ctor.
     * @param something Number.
     * @param precision Precision. E.g. 1 would round to 1 decimal place.
     */
    function Rounded(value, precision) {
        (0, _classCallCheck3.default)(this, Rounded);

        this.scalar = new index_3.ScalarOf(value);
        this.precision = new index_3.ScalarOf(precision);
    }
    /**
     * Type determinant.
     */


    (0, _createClass3.default)(Rounded, [{
        key: "isScalar",
        value: function isScalar() {
            return true;
        }
        /**
         * Get the value.
         */

    }, {
        key: "value",
        value: function value() {
            var factor = Math.pow(10, this.precision.value());
            return Math.round(this.scalar.value() * factor) / factor;
        }
    }]);
    return Rounded;
}();
Rounded = __decorate([index_1.final, index_2.frozen], Rounded);
exports.Rounded = Rounded;

},{"..":141,"./index":181,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],176:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../function");
var index_2 = require("..");
var index_3 = require("..");
/**
 * Scalar of different possible inputs.
 */
var ScalarOf = function () {
    /**
     * Ctor.
     * @param value Scalar, function that returns value, or value.
     */
    function ScalarOf(value) {
        var toValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new index_1.ToValue();
        (0, _classCallCheck3.default)(this, ScalarOf);

        this.val = value;
        this.toValue = toValue;
    }
    /**
     * Type determinant.
     */


    (0, _createClass3.default)(ScalarOf, [{
        key: "isScalar",
        value: function isScalar() {
            return true;
        }
        /**
         * Gets the value.
         */

    }, {
        key: "value",
        value: function value() {
            return this.toValue.apply(this.val);
        }
    }]);
    return ScalarOf;
}();
ScalarOf = __decorate([index_2.final, index_3.frozen], ScalarOf);
exports.ScalarOf = ScalarOf;

},{"..":141,"../function":140,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],177:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("..");
var index_2 = require("..");
var index_3 = require("./index");
/**
 * Ternary operation.
 */
var Ternary = function () {
    /**
     * Ctor.
     * @param condition Test condition.
     * @param consequent Return when condition is true.
     * @param alternative Return when condition is false.
     */
    function Ternary(condition, consequent, alternative) {
        (0, _classCallCheck3.default)(this, Ternary);

        this.condition = new index_3.ScalarOf(condition);
        this.consequent = new index_3.ScalarOf(consequent);
        this.alternative = new index_3.ScalarOf(alternative);
    }
    /**
     * Type determinant.
     */


    (0, _createClass3.default)(Ternary, [{
        key: "isScalar",
        value: function isScalar() {
            return true;
        }
        /**
         * Gets the value.
         */

    }, {
        key: "value",
        value: function value() {
            return this.condition.value() ? this.consequent.value() : this.alternative.value();
        }
    }]);
    return Ternary;
}();
Ternary = __decorate([index_1.final, index_2.frozen], Ternary);
exports.Ternary = Ternary;

},{"..":141,"./index":181,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],178:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("..");
var index_2 = require("..");
/**
 * True scalar.
 */
var True = function () {
    function True() {
        (0, _classCallCheck3.default)(this, True);
    }

    (0, _createClass3.default)(True, [{
        key: "isScalar",

        /**
         * Type determinant.
         */
        value: function isScalar() {
            return true;
        }
        /**
         * Get the value.
         */

    }, {
        key: "value",
        value: function value() {
            return true;
        }
    }]);
    return True;
}();
True = __decorate([index_1.final, index_2.frozen], True);
exports.True = True;

},{"..":141,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],179:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("..");
var index_2 = require("..");
/**
 * Undefined scalar.
 */
var Undefined = function () {
    function Undefined() {
        (0, _classCallCheck3.default)(this, Undefined);
    }

    (0, _createClass3.default)(Undefined, [{
        key: "isScalar",

        /**
         * Type determinant.
         */
        value: function isScalar() {
            return true;
        }
        /**
         * Get the value.
         */

    }, {
        key: "value",
        value: function value() {
            return undefined;
        }
    }]);
    return Undefined;
}();
Undefined = __decorate([index_1.final, index_2.frozen], Undefined);
exports.Undefined = Undefined;

},{"..":141,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],180:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("..");
var index_2 = require("..");
var index_3 = require("./index");
var index_4 = require("./index");
var index_5 = require("./index");
/**
 * Cached scalar.
 */
var WithFallback = function () {
    /**
     * Ctor.
     * @param value Value.
     * @param fallback Fallback value.
     */
    function WithFallback(value, fallback) {
        (0, _classCallCheck3.default)(this, WithFallback);

        this.scalar = new index_5.Ternary(new index_3.IsBlank(value), new index_4.ScalarOf(fallback), new index_4.ScalarOf(value));
    }
    /**
     * Type determinant.
     */


    (0, _createClass3.default)(WithFallback, [{
        key: "isScalar",
        value: function isScalar() {
            return true;
        }
        /**
         * Get the value.
         */

    }, {
        key: "value",
        value: function value() {
            return this.scalar.value();
        }
    }]);
    return WithFallback;
}();
WithFallback = __decorate([index_1.final, index_2.frozen], WithFallback);
exports.WithFallback = WithFallback;

},{"..":141,"./index":181,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],181:[function(require,module,exports){
"use strict";

function __export(m) {
  for (var p in m) {
    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Index.
 */
__export(require("./And"));
__export(require("./BoolOf"));
__export(require("./Cached"));
__export(require("./Conditioned"));
__export(require("./False"));
__export(require("./HasTrueProperty"));
__export(require("./HasTrueResult"));
__export(require("./IsBlank"));
__export(require("./IsJsFunction"));
__export(require("./IsNotBlank"));
__export(require("./IsNull"));
__export(require("./IsObject"));
__export(require("./IsScalar"));
__export(require("./IsUndefined"));
__export(require("./MapOf"));
__export(require("./Not"));
__export(require("./Null"));
__export(require("./Or"));
__export(require("./Rounded"));
__export(require("./ScalarOf"));
__export(require("./Ternary"));
__export(require("./True"));
__export(require("./Undefined"));
__export(require("./WithFallback"));

},{"./And":157,"./BoolOf":158,"./Cached":159,"./Conditioned":160,"./False":161,"./HasTrueProperty":162,"./HasTrueResult":163,"./IsBlank":164,"./IsJsFunction":165,"./IsNotBlank":166,"./IsNull":167,"./IsObject":168,"./IsScalar":169,"./IsUndefined":170,"./MapOf":171,"./Not":172,"./Null":173,"./Or":174,"./Rounded":175,"./ScalarOf":176,"./Ternary":177,"./True":178,"./Undefined":179,"./WithFallback":180}],182:[function(require,module,exports){
"use strict";

var _seal = require("babel-runtime/core-js/object/seal");

var _seal2 = _interopRequireDefault(_seal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Seal constructor and prototype.
 * @param target Target.
 */
function sealed(target) {
  (0, _seal2.default)(target);
  (0, _seal2.default)(target.prototype);
}
exports.sealed = sealed;

},{"babel-runtime/core-js/object/seal":8}]},{},[125])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvbWFwLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZnJlZXplLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L3NlYWwuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL2dldC1pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vbWFwLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZnJlZXplLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NlYWwuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaW5kZXguanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1pbnN0YW5jZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1mcm9tLWl0ZXJhYmxlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktbWV0aG9kcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktc3BlY2llcy1jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NsYXNzb2YuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29sbGVjdGlvbi1zdHJvbmcuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvbGxlY3Rpb24tdG8tanNvbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29sbGVjdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1rZXlzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mb3Itb2YuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXkuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jYWxsLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19tZXRhLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BkLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi1leHQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qtc2FwLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS1hbGwuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtY29sbGVjdGlvbi1mcm9tLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtY29sbGVjdGlvbi1vZi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXByb3RvLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtc3BlY2llcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL192YWxpZGF0ZS1jb2xsZWN0aW9uLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZGVmaW5lLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZXh0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYubWFwLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZnJlZXplLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LnNlYWwuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN5bWJvbC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcubWFwLmZyb20uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3Lm1hcC5vZi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcubWFwLnRvLWpzb24uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyIsIm5vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUtbW9kdWxlLmpzIiwibm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsInNyYy9tYWluLnRzIiwic3JjL21haW4vSWxsZWdhbEluaGVyaXRhbmNlRXJyb3IudHMiLCJzcmMvbWFpbi9JbGxlZ2FsU3RhdGVFcnJvci50cyIsInNyYy9tYWluL2ZpbmFsLnRzIiwic3JjL21haW4vZnJvemVuLnRzIiwic3JjL21haW4vZnVuY3Rpb24vQ2FjaGVkLnRzIiwic3JjL21haW4vZnVuY3Rpb24vQ29uZGl0aW9uZWQudHMiLCJzcmMvbWFpbi9mdW5jdGlvbi9GdW5jdGlvbk9mLnRzIiwic3JjL21haW4vZnVuY3Rpb24vSXNGdW5jdGlvbi50cyIsInNyYy9tYWluL2Z1bmN0aW9uL0lzVHJ1ZS50cyIsInNyYy9tYWluL2Z1bmN0aW9uL051bGxhcnlGdW5jdGlvbk9mLnRzIiwic3JjL21haW4vZnVuY3Rpb24vU2FmZU5hdmlnYXRpb24udHMiLCJzcmMvbWFpbi9mdW5jdGlvbi9Ub0Jvb2wudHMiLCJzcmMvbWFpbi9mdW5jdGlvbi9Ub0NvbmRpdGlvbkNvbnNlcXVlbnRQYWlyLnRzIiwic3JjL21haW4vZnVuY3Rpb24vVG9WYWx1ZS50cyIsInNyYy9tYWluL2Z1bmN0aW9uL2luZGV4LnRzIiwic3JjL21haW4vaW5kZXgudHMiLCJzcmMvbWFpbi9pdGVyYWJsZS9Db25kaXRpb25zLnRzIiwic3JjL21haW4vaXRlcmFibGUvRXF1YWxzLnRzIiwic3JjL21haW4vaXRlcmFibGUvRmlsdGVyZWQudHMiLCJzcmMvbWFpbi9pdGVyYWJsZS9GaXJzdC50cyIsInNyYy9tYWluL2l0ZXJhYmxlL0xlbmd0aE9mLnRzIiwic3JjL21haW4vaXRlcmFibGUvTGltaXRlZC50cyIsInNyYy9tYWluL2l0ZXJhYmxlL01hcHBlZC50cyIsInNyYy9tYWluL2l0ZXJhYmxlL2luZGV4LnRzIiwic3JjL21haW4vcmFuZG9tL1BhcmtNaWxsZXJSYW5kb20udHMiLCJzcmMvbWFpbi9yYW5kb20vUmFuZG9tT2YudHMiLCJzcmMvbWFpbi9yYW5kb20vUmFuZG9taXplZEJvb2wudHMiLCJzcmMvbWFpbi9yYW5kb20vUmFuZG9taXplZEZsb2F0LnRzIiwic3JjL21haW4vcmFuZG9tL1JhbmRvbWl6ZWRJbnQudHMiLCJzcmMvbWFpbi9yYW5kb20vUmFuZG9taXplZFBlcmNlbnRhZ2UudHMiLCJzcmMvbWFpbi9yYW5kb20vaW5kZXgudHMiLCJzcmMvbWFpbi9zY2FsYXIvQW5kLnRzIiwic3JjL21haW4vc2NhbGFyL0Jvb2xPZi50cyIsInNyYy9tYWluL3NjYWxhci9DYWNoZWQudHMiLCJzcmMvbWFpbi9zY2FsYXIvQ29uZGl0aW9uZWQudHMiLCJzcmMvbWFpbi9zY2FsYXIvRmFsc2UudHMiLCJzcmMvbWFpbi9zY2FsYXIvSGFzVHJ1ZVByb3BlcnR5LnRzIiwic3JjL21haW4vc2NhbGFyL0hhc1RydWVSZXN1bHQudHMiLCJzcmMvbWFpbi9zY2FsYXIvSXNCbGFuay50cyIsInNyYy9tYWluL3NjYWxhci9Jc0pzRnVuY3Rpb24udHMiLCJzcmMvbWFpbi9zY2FsYXIvSXNOb3RCbGFuay50cyIsInNyYy9tYWluL3NjYWxhci9Jc051bGwudHMiLCJzcmMvbWFpbi9zY2FsYXIvSXNPYmplY3QudHMiLCJzcmMvbWFpbi9zY2FsYXIvSXNTY2FsYXIudHMiLCJzcmMvbWFpbi9zY2FsYXIvSXNVbmRlZmluZWQudHMiLCJzcmMvbWFpbi9zY2FsYXIvTWFwT2YudHMiLCJzcmMvbWFpbi9zY2FsYXIvTm90LnRzIiwic3JjL21haW4vc2NhbGFyL051bGwudHMiLCJzcmMvbWFpbi9zY2FsYXIvT3IudHMiLCJzcmMvbWFpbi9zY2FsYXIvUm91bmRlZC50cyIsInNyYy9tYWluL3NjYWxhci9TY2FsYXJPZi50cyIsInNyYy9tYWluL3NjYWxhci9UZXJuYXJ5LnRzIiwic3JjL21haW4vc2NhbGFyL1RydWUudHMiLCJzcmMvbWFpbi9zY2FsYXIvVW5kZWZpbmVkLnRzIiwic3JjL21haW4vc2NhbGFyL1dpdGhGYWxsYmFjay50cyIsInNyYy9tYWluL3NjYWxhci9pbmRleC50cyIsInNyYy9tYWluL3NlYWxlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOztBQ0FBOztBQ0FBOztBQ0FBOztBQ0FBOztBQ0FBOztBQ0FBOztBQ0FBOztBQ0FBOztBQ0FBOztBQ0FBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0RBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0RUE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTs7QUNEQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMU9BO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBOztBQ0RBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFFRCxBQUVHLEFBQ0ksQUFBSzs7Ozs7OztBQUNSLEFBQU0sbUJBQUMsQUFBSSxLQUFDLEFBQU0sT0FBQyxBQUFLLEFBQUUsQUFBQyxBQUMvQjtBQUFDLEFBQ0o7Ozs7QUFoQ1ksQUFBWSwyQkFGeEIsUUFBSyxPQUNMLFFBQU0sU0FDTSxBQUFZLEFBZ0N4QjtBQWhDWSx1QkFBWTs7Ozs7Ozs7Ozs7QUNiekIsQUFFRzs7O0FBQ0gsaUJBQXNCO0FBRXRCLGlCQUF5QjtBQUN6QixpQkFBeUI7QUFHekIsaUJBQThCO0FBQzlCLGlCQUF3QjtBQUN4QixpQkFBa0M7QUFDbEMsaUJBQWdDO0FBQ2hDLGlCQUEwQjtBQUMxQixpQkFBK0I7QUFDL0IsaUJBQTZCO0FBQzdCLGlCQUF5QjtBQUN6QixpQkFBMkI7QUFDM0IsaUJBQTJCO0FBQzNCLGlCQUE4QjtBQUM5QixpQkFBd0I7QUFDeEIsaUJBQXNCO0FBQ3RCLGlCQUF1QjtBQUN2QixpQkFBcUI7QUFDckIsaUJBQTBCO0FBRzFCLGlCQUEyQjtBQUMzQixpQkFBMEI7QUFDMUIsaUJBQXVCO0FBQ3ZCLGlCQUE0QjtBQUM1QixpQkFBK0I7Ozs7Ozs7Ozs7OztBQy9CL0IsQUFHRzs7OztBQUNILGdCQUF1QixBQUFnQjtBQUNuQyxBQUFNLEFBQUMsQUFBSSxzQkFBQyxBQUFNLEFBQUMsQUFBQztBQUNwQixBQUFNLEFBQUMsQUFBSSxzQkFBQyxBQUFNLE9BQUMsQUFBUyxBQUFDLEFBQUMsQUFDbEM7QUFBQztBQUhELGlCQUdDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vbWFwXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGVcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZnJlZXplXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1wcm90b3R5cGUtb2ZcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NlYWxcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2ZcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvclwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIik7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmaW5lUHJvcGVydHkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgKDAsIF9kZWZpbmVQcm9wZXJ0eTIuZGVmYXVsdCkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfTtcbn0oKTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9zZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mXCIpO1xuXG52YXIgX3NldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NldFByb3RvdHlwZU9mKTtcblxudmFyIF9jcmVhdGUgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvY3JlYXRlXCIpO1xuXG52YXIgX2NyZWF0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGUpO1xuXG52YXIgX3R5cGVvZjIgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbnZhciBfdHlwZW9mMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R5cGVvZjIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgKHR5cGVvZiBzdXBlckNsYXNzID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6ICgwLCBfdHlwZW9mMy5kZWZhdWx0KShzdXBlckNsYXNzKSkpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gKDAsIF9jcmVhdGUyLmRlZmF1bHQpKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2YyLmRlZmF1bHQgPyAoMCwgX3NldFByb3RvdHlwZU9mMi5kZWZhdWx0KShzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF90eXBlb2YyID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgX3R5cGVvZjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90eXBlb2YyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHNlbGYsIGNhbGwpIHtcbiAgaWYgKCFzZWxmKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIGNhbGwgJiYgKCh0eXBlb2YgY2FsbCA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiAoMCwgX3R5cGVvZjMuZGVmYXVsdCkoY2FsbCkpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2l0ZXJhdG9yID0gcmVxdWlyZShcIi4uL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yXCIpO1xuXG52YXIgX2l0ZXJhdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2l0ZXJhdG9yKTtcblxudmFyIF9zeW1ib2wgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9zeW1ib2xcIik7XG5cbnZhciBfc3ltYm9sMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N5bWJvbCk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgX2l0ZXJhdG9yMi5kZWZhdWx0ID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gX3N5bWJvbDIuZGVmYXVsdCAmJiBvYmogIT09IF9zeW1ib2wyLmRlZmF1bHQucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgX3R5cGVvZihfaXRlcmF0b3IyLmRlZmF1bHQpID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG9iaik7XG59IDogZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICYmIHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBfc3ltYm9sMi5kZWZhdWx0ICYmIG9iaiAhPT0gX3N5bWJvbDIuZGVmYXVsdC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iaiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG9iaik7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCJyZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yJyk7XG4iLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYubWFwJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5tYXAudG8tanNvbicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcubWFwLm9mJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5tYXAuZnJvbScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykuTWFwO1xuIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZScpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGUoUCwgRCkge1xuICByZXR1cm4gJE9iamVjdC5jcmVhdGUoUCwgRCk7XG59O1xuIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eScpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKSB7XG4gIHJldHVybiAkT2JqZWN0LmRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2MpO1xufTtcbiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5mcmVlemUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5mcmVlemU7XG4iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KSB7XG4gIHJldHVybiAkT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KTtcbn07XG4iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnNlYWwnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5zZWFsO1xuIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5zZXRQcm90b3R5cGVPZjtcbiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN5bWJvbCcpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuU3ltYm9sO1xuIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fd2tzLWV4dCcpLmYoJ2l0ZXJhdG9yJyk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSwgZm9yYmlkZGVuRmllbGQpIHtcbiAgaWYgKCEoaXQgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikgfHwgKGZvcmJpZGRlbkZpZWxkICE9PSB1bmRlZmluZWQgJiYgZm9yYmlkZGVuRmllbGQgaW4gaXQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKG5hbWUgKyAnOiBpbmNvcnJlY3QgaW52b2NhdGlvbiEnKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwidmFyIGZvck9mID0gcmVxdWlyZSgnLi9fZm9yLW9mJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXIsIElURVJBVE9SKSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgZm9yT2YoaXRlciwgZmFsc2UsIHJlc3VsdC5wdXNoLCByZXN1bHQsIElURVJBVE9SKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4vX3RvLWFic29sdXRlLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0lPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgICAgaWYgKHZhbHVlICE9IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykge1xuICAgICAgaWYgKE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcbiIsIi8vIDAgLT4gQXJyYXkjZm9yRWFjaFxuLy8gMSAtPiBBcnJheSNtYXBcbi8vIDIgLT4gQXJyYXkjZmlsdGVyXG4vLyAzIC0+IEFycmF5I3NvbWVcbi8vIDQgLT4gQXJyYXkjZXZlcnlcbi8vIDUgLT4gQXJyYXkjZmluZFxuLy8gNiAtPiBBcnJheSNmaW5kSW5kZXhcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciBhc2MgPSByZXF1aXJlKCcuL19hcnJheS1zcGVjaWVzLWNyZWF0ZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoVFlQRSwgJGNyZWF0ZSkge1xuICB2YXIgSVNfTUFQID0gVFlQRSA9PSAxO1xuICB2YXIgSVNfRklMVEVSID0gVFlQRSA9PSAyO1xuICB2YXIgSVNfU09NRSA9IFRZUEUgPT0gMztcbiAgdmFyIElTX0VWRVJZID0gVFlQRSA9PSA0O1xuICB2YXIgSVNfRklORF9JTkRFWCA9IFRZUEUgPT0gNjtcbiAgdmFyIE5PX0hPTEVTID0gVFlQRSA9PSA1IHx8IElTX0ZJTkRfSU5ERVg7XG4gIHZhciBjcmVhdGUgPSAkY3JlYXRlIHx8IGFzYztcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgY2FsbGJhY2tmbiwgdGhhdCkge1xuICAgIHZhciBPID0gdG9PYmplY3QoJHRoaXMpO1xuICAgIHZhciBzZWxmID0gSU9iamVjdChPKTtcbiAgICB2YXIgZiA9IGN0eChjYWxsYmFja2ZuLCB0aGF0LCAzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoc2VsZi5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIHJlc3VsdCA9IElTX01BUCA/IGNyZWF0ZSgkdGhpcywgbGVuZ3RoKSA6IElTX0ZJTFRFUiA/IGNyZWF0ZSgkdGhpcywgMCkgOiB1bmRlZmluZWQ7XG4gICAgdmFyIHZhbCwgcmVzO1xuICAgIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoTk9fSE9MRVMgfHwgaW5kZXggaW4gc2VsZikge1xuICAgICAgdmFsID0gc2VsZltpbmRleF07XG4gICAgICByZXMgPSBmKHZhbCwgaW5kZXgsIE8pO1xuICAgICAgaWYgKFRZUEUpIHtcbiAgICAgICAgaWYgKElTX01BUCkgcmVzdWx0W2luZGV4XSA9IHJlczsgICAvLyBtYXBcbiAgICAgICAgZWxzZSBpZiAocmVzKSBzd2l0Y2ggKFRZUEUpIHtcbiAgICAgICAgICBjYXNlIDM6IHJldHVybiB0cnVlOyAgICAgICAgICAgICAvLyBzb21lXG4gICAgICAgICAgY2FzZSA1OiByZXR1cm4gdmFsOyAgICAgICAgICAgICAgLy8gZmluZFxuICAgICAgICAgIGNhc2UgNjogcmV0dXJuIGluZGV4OyAgICAgICAgICAgIC8vIGZpbmRJbmRleFxuICAgICAgICAgIGNhc2UgMjogcmVzdWx0LnB1c2godmFsKTsgICAgICAgIC8vIGZpbHRlclxuICAgICAgICB9IGVsc2UgaWYgKElTX0VWRVJZKSByZXR1cm4gZmFsc2U7IC8vIGV2ZXJ5XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBJU19GSU5EX0lOREVYID8gLTEgOiBJU19TT01FIHx8IElTX0VWRVJZID8gSVNfRVZFUlkgOiByZXN1bHQ7XG4gIH07XG59O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vX2lzLWFycmF5Jyk7XG52YXIgU1BFQ0lFUyA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9yaWdpbmFsKSB7XG4gIHZhciBDO1xuICBpZiAoaXNBcnJheShvcmlnaW5hbCkpIHtcbiAgICBDID0gb3JpZ2luYWwuY29uc3RydWN0b3I7XG4gICAgLy8gY3Jvc3MtcmVhbG0gZmFsbGJhY2tcbiAgICBpZiAodHlwZW9mIEMgPT0gJ2Z1bmN0aW9uJyAmJiAoQyA9PT0gQXJyYXkgfHwgaXNBcnJheShDLnByb3RvdHlwZSkpKSBDID0gdW5kZWZpbmVkO1xuICAgIGlmIChpc09iamVjdChDKSkge1xuICAgICAgQyA9IENbU1BFQ0lFU107XG4gICAgICBpZiAoQyA9PT0gbnVsbCkgQyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH0gcmV0dXJuIEMgPT09IHVuZGVmaW5lZCA/IEFycmF5IDogQztcbn07XG4iLCIvLyA5LjQuMi4zIEFycmF5U3BlY2llc0NyZWF0ZShvcmlnaW5hbEFycmF5LCBsZW5ndGgpXG52YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fYXJyYXktc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcmlnaW5hbCwgbGVuZ3RoKSB7XG4gIHJldHVybiBuZXcgKHNwZWNpZXNDb25zdHJ1Y3RvcihvcmlnaW5hbCkpKGxlbmd0aCk7XG59O1xuIiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcbi8vIEVTMyB3cm9uZyBoZXJlXG52YXIgQVJHID0gY29mKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVEFHKSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59O1xuIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgcmVkZWZpbmVBbGwgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBhbkluc3RhbmNlID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKTtcbnZhciBmb3JPZiA9IHJlcXVpcmUoJy4vX2Zvci1vZicpO1xudmFyICRpdGVyRGVmaW5lID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKTtcbnZhciBzdGVwID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJyk7XG52YXIgc2V0U3BlY2llcyA9IHJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyIGZhc3RLZXkgPSByZXF1aXJlKCcuL19tZXRhJykuZmFzdEtleTtcbnZhciB2YWxpZGF0ZSA9IHJlcXVpcmUoJy4vX3ZhbGlkYXRlLWNvbGxlY3Rpb24nKTtcbnZhciBTSVpFID0gREVTQ1JJUFRPUlMgPyAnX3MnIDogJ3NpemUnO1xuXG52YXIgZ2V0RW50cnkgPSBmdW5jdGlvbiAodGhhdCwga2V5KSB7XG4gIC8vIGZhc3QgY2FzZVxuICB2YXIgaW5kZXggPSBmYXN0S2V5KGtleSk7XG4gIHZhciBlbnRyeTtcbiAgaWYgKGluZGV4ICE9PSAnRicpIHJldHVybiB0aGF0Ll9pW2luZGV4XTtcbiAgLy8gZnJvemVuIG9iamVjdCBjYXNlXG4gIGZvciAoZW50cnkgPSB0aGF0Ll9mOyBlbnRyeTsgZW50cnkgPSBlbnRyeS5uKSB7XG4gICAgaWYgKGVudHJ5LmsgPT0ga2V5KSByZXR1cm4gZW50cnk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnZXRDb25zdHJ1Y3RvcjogZnVuY3Rpb24gKHdyYXBwZXIsIE5BTUUsIElTX01BUCwgQURERVIpIHtcbiAgICB2YXIgQyA9IHdyYXBwZXIoZnVuY3Rpb24gKHRoYXQsIGl0ZXJhYmxlKSB7XG4gICAgICBhbkluc3RhbmNlKHRoYXQsIEMsIE5BTUUsICdfaScpO1xuICAgICAgdGhhdC5fdCA9IE5BTUU7ICAgICAgICAgLy8gY29sbGVjdGlvbiB0eXBlXG4gICAgICB0aGF0Ll9pID0gY3JlYXRlKG51bGwpOyAvLyBpbmRleFxuICAgICAgdGhhdC5fZiA9IHVuZGVmaW5lZDsgICAgLy8gZmlyc3QgZW50cnlcbiAgICAgIHRoYXQuX2wgPSB1bmRlZmluZWQ7ICAgIC8vIGxhc3QgZW50cnlcbiAgICAgIHRoYXRbU0laRV0gPSAwOyAgICAgICAgIC8vIHNpemVcbiAgICAgIGlmIChpdGVyYWJsZSAhPSB1bmRlZmluZWQpIGZvck9mKGl0ZXJhYmxlLCBJU19NQVAsIHRoYXRbQURERVJdLCB0aGF0KTtcbiAgICB9KTtcbiAgICByZWRlZmluZUFsbChDLnByb3RvdHlwZSwge1xuICAgICAgLy8gMjMuMS4zLjEgTWFwLnByb3RvdHlwZS5jbGVhcigpXG4gICAgICAvLyAyMy4yLjMuMiBTZXQucHJvdG90eXBlLmNsZWFyKClcbiAgICAgIGNsZWFyOiBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICAgICAgZm9yICh2YXIgdGhhdCA9IHZhbGlkYXRlKHRoaXMsIE5BTUUpLCBkYXRhID0gdGhhdC5faSwgZW50cnkgPSB0aGF0Ll9mOyBlbnRyeTsgZW50cnkgPSBlbnRyeS5uKSB7XG4gICAgICAgICAgZW50cnkuciA9IHRydWU7XG4gICAgICAgICAgaWYgKGVudHJ5LnApIGVudHJ5LnAgPSBlbnRyeS5wLm4gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgZGVsZXRlIGRhdGFbZW50cnkuaV07XG4gICAgICAgIH1cbiAgICAgICAgdGhhdC5fZiA9IHRoYXQuX2wgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoYXRbU0laRV0gPSAwO1xuICAgICAgfSxcbiAgICAgIC8vIDIzLjEuMy4zIE1hcC5wcm90b3R5cGUuZGVsZXRlKGtleSlcbiAgICAgIC8vIDIzLjIuMy40IFNldC5wcm90b3R5cGUuZGVsZXRlKHZhbHVlKVxuICAgICAgJ2RlbGV0ZSc6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIHRoYXQgPSB2YWxpZGF0ZSh0aGlzLCBOQU1FKTtcbiAgICAgICAgdmFyIGVudHJ5ID0gZ2V0RW50cnkodGhhdCwga2V5KTtcbiAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgdmFyIG5leHQgPSBlbnRyeS5uO1xuICAgICAgICAgIHZhciBwcmV2ID0gZW50cnkucDtcbiAgICAgICAgICBkZWxldGUgdGhhdC5faVtlbnRyeS5pXTtcbiAgICAgICAgICBlbnRyeS5yID0gdHJ1ZTtcbiAgICAgICAgICBpZiAocHJldikgcHJldi5uID0gbmV4dDtcbiAgICAgICAgICBpZiAobmV4dCkgbmV4dC5wID0gcHJldjtcbiAgICAgICAgICBpZiAodGhhdC5fZiA9PSBlbnRyeSkgdGhhdC5fZiA9IG5leHQ7XG4gICAgICAgICAgaWYgKHRoYXQuX2wgPT0gZW50cnkpIHRoYXQuX2wgPSBwcmV2O1xuICAgICAgICAgIHRoYXRbU0laRV0tLTtcbiAgICAgICAgfSByZXR1cm4gISFlbnRyeTtcbiAgICAgIH0sXG4gICAgICAvLyAyMy4yLjMuNiBTZXQucHJvdG90eXBlLmZvckVhY2goY2FsbGJhY2tmbiwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgICAgIC8vIDIzLjEuMy41IE1hcC5wcm90b3R5cGUuZm9yRWFjaChjYWxsYmFja2ZuLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICAgICAgZm9yRWFjaDogZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja2ZuIC8qICwgdGhhdCA9IHVuZGVmaW5lZCAqLykge1xuICAgICAgICB2YWxpZGF0ZSh0aGlzLCBOQU1FKTtcbiAgICAgICAgdmFyIGYgPSBjdHgoY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQsIDMpO1xuICAgICAgICB2YXIgZW50cnk7XG4gICAgICAgIHdoaWxlIChlbnRyeSA9IGVudHJ5ID8gZW50cnkubiA6IHRoaXMuX2YpIHtcbiAgICAgICAgICBmKGVudHJ5LnYsIGVudHJ5LmssIHRoaXMpO1xuICAgICAgICAgIC8vIHJldmVydCB0byB0aGUgbGFzdCBleGlzdGluZyBlbnRyeVxuICAgICAgICAgIHdoaWxlIChlbnRyeSAmJiBlbnRyeS5yKSBlbnRyeSA9IGVudHJ5LnA7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyAyMy4xLjMuNyBNYXAucHJvdG90eXBlLmhhcyhrZXkpXG4gICAgICAvLyAyMy4yLjMuNyBTZXQucHJvdG90eXBlLmhhcyh2YWx1ZSlcbiAgICAgIGhhczogZnVuY3Rpb24gaGFzKGtleSkge1xuICAgICAgICByZXR1cm4gISFnZXRFbnRyeSh2YWxpZGF0ZSh0aGlzLCBOQU1FKSwga2V5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoREVTQ1JJUFRPUlMpIGRQKEMucHJvdG90eXBlLCAnc2l6ZScsIHtcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdmFsaWRhdGUodGhpcywgTkFNRSlbU0laRV07XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIEM7XG4gIH0sXG4gIGRlZjogZnVuY3Rpb24gKHRoYXQsIGtleSwgdmFsdWUpIHtcbiAgICB2YXIgZW50cnkgPSBnZXRFbnRyeSh0aGF0LCBrZXkpO1xuICAgIHZhciBwcmV2LCBpbmRleDtcbiAgICAvLyBjaGFuZ2UgZXhpc3RpbmcgZW50cnlcbiAgICBpZiAoZW50cnkpIHtcbiAgICAgIGVudHJ5LnYgPSB2YWx1ZTtcbiAgICAvLyBjcmVhdGUgbmV3IGVudHJ5XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoYXQuX2wgPSBlbnRyeSA9IHtcbiAgICAgICAgaTogaW5kZXggPSBmYXN0S2V5KGtleSwgdHJ1ZSksIC8vIDwtIGluZGV4XG4gICAgICAgIGs6IGtleSwgICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSBrZXlcbiAgICAgICAgdjogdmFsdWUsICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIHZhbHVlXG4gICAgICAgIHA6IHByZXYgPSB0aGF0Ll9sLCAgICAgICAgICAgICAvLyA8LSBwcmV2aW91cyBlbnRyeVxuICAgICAgICBuOiB1bmRlZmluZWQsICAgICAgICAgICAgICAgICAgLy8gPC0gbmV4dCBlbnRyeVxuICAgICAgICByOiBmYWxzZSAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gcmVtb3ZlZFxuICAgICAgfTtcbiAgICAgIGlmICghdGhhdC5fZikgdGhhdC5fZiA9IGVudHJ5O1xuICAgICAgaWYgKHByZXYpIHByZXYubiA9IGVudHJ5O1xuICAgICAgdGhhdFtTSVpFXSsrO1xuICAgICAgLy8gYWRkIHRvIGluZGV4XG4gICAgICBpZiAoaW5kZXggIT09ICdGJykgdGhhdC5faVtpbmRleF0gPSBlbnRyeTtcbiAgICB9IHJldHVybiB0aGF0O1xuICB9LFxuICBnZXRFbnRyeTogZ2V0RW50cnksXG4gIHNldFN0cm9uZzogZnVuY3Rpb24gKEMsIE5BTUUsIElTX01BUCkge1xuICAgIC8vIGFkZCAua2V5cywgLnZhbHVlcywgLmVudHJpZXMsIFtAQGl0ZXJhdG9yXVxuICAgIC8vIDIzLjEuMy40LCAyMy4xLjMuOCwgMjMuMS4zLjExLCAyMy4xLjMuMTIsIDIzLjIuMy41LCAyMy4yLjMuOCwgMjMuMi4zLjEwLCAyMy4yLjMuMTFcbiAgICAkaXRlckRlZmluZShDLCBOQU1FLCBmdW5jdGlvbiAoaXRlcmF0ZWQsIGtpbmQpIHtcbiAgICAgIHRoaXMuX3QgPSB2YWxpZGF0ZShpdGVyYXRlZCwgTkFNRSk7IC8vIHRhcmdldFxuICAgICAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgICAgICAgLy8ga2luZFxuICAgICAgdGhpcy5fbCA9IHVuZGVmaW5lZDsgICAgICAgICAgICAgICAgLy8gcHJldmlvdXNcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICB2YXIga2luZCA9IHRoYXQuX2s7XG4gICAgICB2YXIgZW50cnkgPSB0aGF0Ll9sO1xuICAgICAgLy8gcmV2ZXJ0IHRvIHRoZSBsYXN0IGV4aXN0aW5nIGVudHJ5XG4gICAgICB3aGlsZSAoZW50cnkgJiYgZW50cnkucikgZW50cnkgPSBlbnRyeS5wO1xuICAgICAgLy8gZ2V0IG5leHQgZW50cnlcbiAgICAgIGlmICghdGhhdC5fdCB8fCAhKHRoYXQuX2wgPSBlbnRyeSA9IGVudHJ5ID8gZW50cnkubiA6IHRoYXQuX3QuX2YpKSB7XG4gICAgICAgIC8vIG9yIGZpbmlzaCB0aGUgaXRlcmF0aW9uXG4gICAgICAgIHRoYXQuX3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybiBzdGVwKDEpO1xuICAgICAgfVxuICAgICAgLy8gcmV0dXJuIHN0ZXAgYnkga2luZFxuICAgICAgaWYgKGtpbmQgPT0gJ2tleXMnKSByZXR1cm4gc3RlcCgwLCBlbnRyeS5rKTtcbiAgICAgIGlmIChraW5kID09ICd2YWx1ZXMnKSByZXR1cm4gc3RlcCgwLCBlbnRyeS52KTtcbiAgICAgIHJldHVybiBzdGVwKDAsIFtlbnRyeS5rLCBlbnRyeS52XSk7XG4gICAgfSwgSVNfTUFQID8gJ2VudHJpZXMnIDogJ3ZhbHVlcycsICFJU19NQVAsIHRydWUpO1xuXG4gICAgLy8gYWRkIFtAQHNwZWNpZXNdLCAyMy4xLjIuMiwgMjMuMi4yLjJcbiAgICBzZXRTcGVjaWVzKE5BTUUpO1xuICB9XG59O1xuIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL0RhdmlkQnJ1YW50L01hcC1TZXQucHJvdG90eXBlLnRvSlNPTlxudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgZnJvbSA9IHJlcXVpcmUoJy4vX2FycmF5LWZyb20taXRlcmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE5BTUUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHRvSlNPTigpIHtcbiAgICBpZiAoY2xhc3NvZih0aGlzKSAhPSBOQU1FKSB0aHJvdyBUeXBlRXJyb3IoTkFNRSArIFwiI3RvSlNPTiBpc24ndCBnZW5lcmljXCIpO1xuICAgIHJldHVybiBmcm9tKHRoaXMpO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgbWV0YSA9IHJlcXVpcmUoJy4vX21ldGEnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciByZWRlZmluZUFsbCA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpO1xudmFyIGZvck9mID0gcmVxdWlyZSgnLi9fZm9yLW9mJyk7XG52YXIgYW5JbnN0YW5jZSA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGVhY2ggPSByZXF1aXJlKCcuL19hcnJheS1tZXRob2RzJykoMCk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChOQU1FLCB3cmFwcGVyLCBtZXRob2RzLCBjb21tb24sIElTX01BUCwgSVNfV0VBSykge1xuICB2YXIgQmFzZSA9IGdsb2JhbFtOQU1FXTtcbiAgdmFyIEMgPSBCYXNlO1xuICB2YXIgQURERVIgPSBJU19NQVAgPyAnc2V0JyA6ICdhZGQnO1xuICB2YXIgcHJvdG8gPSBDICYmIEMucHJvdG90eXBlO1xuICB2YXIgTyA9IHt9O1xuICBpZiAoIURFU0NSSVBUT1JTIHx8IHR5cGVvZiBDICE9ICdmdW5jdGlvbicgfHwgIShJU19XRUFLIHx8IHByb3RvLmZvckVhY2ggJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICBuZXcgQygpLmVudHJpZXMoKS5uZXh0KCk7XG4gIH0pKSkge1xuICAgIC8vIGNyZWF0ZSBjb2xsZWN0aW9uIGNvbnN0cnVjdG9yXG4gICAgQyA9IGNvbW1vbi5nZXRDb25zdHJ1Y3Rvcih3cmFwcGVyLCBOQU1FLCBJU19NQVAsIEFEREVSKTtcbiAgICByZWRlZmluZUFsbChDLnByb3RvdHlwZSwgbWV0aG9kcyk7XG4gICAgbWV0YS5ORUVEID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBDID0gd3JhcHBlcihmdW5jdGlvbiAodGFyZ2V0LCBpdGVyYWJsZSkge1xuICAgICAgYW5JbnN0YW5jZSh0YXJnZXQsIEMsIE5BTUUsICdfYycpO1xuICAgICAgdGFyZ2V0Ll9jID0gbmV3IEJhc2UoKTtcbiAgICAgIGlmIChpdGVyYWJsZSAhPSB1bmRlZmluZWQpIGZvck9mKGl0ZXJhYmxlLCBJU19NQVAsIHRhcmdldFtBRERFUl0sIHRhcmdldCk7XG4gICAgfSk7XG4gICAgZWFjaCgnYWRkLGNsZWFyLGRlbGV0ZSxmb3JFYWNoLGdldCxoYXMsc2V0LGtleXMsdmFsdWVzLGVudHJpZXMsdG9KU09OJy5zcGxpdCgnLCcpLCBmdW5jdGlvbiAoS0VZKSB7XG4gICAgICB2YXIgSVNfQURERVIgPSBLRVkgPT0gJ2FkZCcgfHwgS0VZID09ICdzZXQnO1xuICAgICAgaWYgKEtFWSBpbiBwcm90byAmJiAhKElTX1dFQUsgJiYgS0VZID09ICdjbGVhcicpKSBoaWRlKEMucHJvdG90eXBlLCBLRVksIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIGFuSW5zdGFuY2UodGhpcywgQywgS0VZKTtcbiAgICAgICAgaWYgKCFJU19BRERFUiAmJiBJU19XRUFLICYmICFpc09iamVjdChhKSkgcmV0dXJuIEtFWSA9PSAnZ2V0JyA/IHVuZGVmaW5lZCA6IGZhbHNlO1xuICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5fY1tLRVldKGEgPT09IDAgPyAwIDogYSwgYik7XG4gICAgICAgIHJldHVybiBJU19BRERFUiA/IHRoaXMgOiByZXN1bHQ7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBJU19XRUFLIHx8IGRQKEMucHJvdG90eXBlLCAnc2l6ZScsIHtcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYy5zaXplO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2V0VG9TdHJpbmdUYWcoQywgTkFNRSk7XG5cbiAgT1tOQU1FXSA9IEM7XG4gICRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GLCBPKTtcblxuICBpZiAoIUlTX1dFQUspIGNvbW1vbi5zZXRTdHJvbmcoQywgTkFNRSwgSVNfTUFQKTtcblxuICByZXR1cm4gQztcbn07XG4iLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0geyB2ZXJzaW9uOiAnMi41LjEnIH07XG5pZiAodHlwZW9mIF9fZSA9PSAnbnVtYmVyJykgX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIHRoYXQsIGxlbmd0aCkge1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZiAodGhhdCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZm47XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuIiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG4iLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTtcbiIsIi8vIGFsbCBlbnVtZXJhYmxlIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBzeW1ib2xzXG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QUyA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJyk7XG52YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIHJlc3VsdCA9IGdldEtleXMoaXQpO1xuICB2YXIgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgaWYgKGdldFN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IGdldFN5bWJvbHMoaXQpO1xuICAgIHZhciBpc0VudW0gPSBwSUUuZjtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAoc3ltYm9scy5sZW5ndGggPiBpKSBpZiAoaXNFbnVtLmNhbGwoaXQsIGtleSA9IHN5bWJvbHNbaSsrXSkpIHJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uICh0eXBlLCBuYW1lLCBzb3VyY2UpIHtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkY7XG4gIHZhciBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HO1xuICB2YXIgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuUztcbiAgdmFyIElTX1BST1RPID0gdHlwZSAmICRleHBvcnQuUDtcbiAgdmFyIElTX0JJTkQgPSB0eXBlICYgJGV4cG9ydC5CO1xuICB2YXIgSVNfV1JBUCA9IHR5cGUgJiAkZXhwb3J0Llc7XG4gIHZhciBleHBvcnRzID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSk7XG4gIHZhciBleHBQcm90byA9IGV4cG9ydHNbUFJPVE9UWVBFXTtcbiAgdmFyIHRhcmdldCA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV07XG4gIHZhciBrZXksIG93biwgb3V0O1xuICBpZiAoSVNfR0xPQkFMKSBzb3VyY2UgPSBuYW1lO1xuICBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIGlmIChvd24gJiYga2V5IGluIGV4cG9ydHMpIGNvbnRpbnVlO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gb3duID8gdGFyZ2V0W2tleV0gOiBzb3VyY2Vba2V5XTtcbiAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcbiAgICBleHBvcnRzW2tleV0gPSBJU19HTE9CQUwgJiYgdHlwZW9mIHRhcmdldFtrZXldICE9ICdmdW5jdGlvbicgPyBzb3VyY2Vba2V5XVxuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgOiBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbClcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlIHRoZW0gaW4gbGlicmFyeVxuICAgIDogSVNfV1JBUCAmJiB0YXJnZXRba2V5XSA9PSBvdXQgPyAoZnVuY3Rpb24gKEMpIHtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBDKSB7XG4gICAgICAgICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgQygpO1xuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gbmV3IEMoYSk7XG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBuZXcgQyhhLCBiKTtcbiAgICAgICAgICB9IHJldHVybiBuZXcgQyhhLCBiLCBjKTtcbiAgICAgICAgfSByZXR1cm4gQy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICAgIEZbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcbiAgICAgIHJldHVybiBGO1xuICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuICAgIH0pKG91dCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUubWV0aG9kcy4lTkFNRSVcbiAgICBpZiAoSVNfUFJPVE8pIHtcbiAgICAgIChleHBvcnRzLnZpcnR1YWwgfHwgKGV4cG9ydHMudmlydHVhbCA9IHt9KSlba2V5XSA9IG91dDtcbiAgICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5wcm90b3R5cGUuJU5BTUUlXG4gICAgICBpZiAodHlwZSAmICRleHBvcnQuUiAmJiBleHBQcm90byAmJiAhZXhwUHJvdG9ba2V5XSkgaGlkZShleHBQcm90bywga2V5LCBvdXQpO1xuICAgIH1cbiAgfVxufTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbiIsInZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJyk7XG52YXIgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGdldEl0ZXJGbiA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG52YXIgQlJFQUsgPSB7fTtcbnZhciBSRVRVUk4gPSB7fTtcbnZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmFibGUsIGVudHJpZXMsIGZuLCB0aGF0LCBJVEVSQVRPUikge1xuICB2YXIgaXRlckZuID0gSVRFUkFUT1IgPyBmdW5jdGlvbiAoKSB7IHJldHVybiBpdGVyYWJsZTsgfSA6IGdldEl0ZXJGbihpdGVyYWJsZSk7XG4gIHZhciBmID0gY3R4KGZuLCB0aGF0LCBlbnRyaWVzID8gMiA6IDEpO1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIgbGVuZ3RoLCBzdGVwLCBpdGVyYXRvciwgcmVzdWx0O1xuICBpZiAodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXRlcmFibGUgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgLy8gZmFzdCBjYXNlIGZvciBhcnJheXMgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yXG4gIGlmIChpc0FycmF5SXRlcihpdGVyRm4pKSBmb3IgKGxlbmd0aCA9IHRvTGVuZ3RoKGl0ZXJhYmxlLmxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgcmVzdWx0ID0gZW50cmllcyA/IGYoYW5PYmplY3Qoc3RlcCA9IGl0ZXJhYmxlW2luZGV4XSlbMF0sIHN0ZXBbMV0pIDogZihpdGVyYWJsZVtpbmRleF0pO1xuICAgIGlmIChyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKSByZXR1cm4gcmVzdWx0O1xuICB9IGVsc2UgZm9yIChpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKGl0ZXJhYmxlKTsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOykge1xuICAgIHJlc3VsdCA9IGNhbGwoaXRlcmF0b3IsIGYsIHN0ZXAudmFsdWUsIGVudHJpZXMpO1xuICAgIGlmIChyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKSByZXR1cm4gcmVzdWx0O1xuICB9XG59O1xuZXhwb3J0cy5CUkVBSyA9IEJSRUFLO1xuZXhwb3J0cy5SRVRVUk4gPSBSRVRVUk47XG4iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZiAodHlwZW9mIF9fZyA9PSAnbnVtYmVyJykgX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4iLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuIiwidmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG5tb2R1bGUuZXhwb3J0cyA9IGRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG4iLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xuIiwiLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICE9PSB1bmRlZmluZWQgJiYgKEl0ZXJhdG9ycy5BcnJheSA9PT0gaXQgfHwgQXJyYXlQcm90b1tJVEVSQVRPUl0gPT09IGl0KTtcbn07XG4iLCIvLyA3LjIuMiBJc0FycmF5KGFyZ3VtZW50KVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJnKSB7XG4gIHJldHVybiBjb2YoYXJnKSA9PSAnQXJyYXknO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuIiwiLy8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVudHJpZXMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgfSBjYXRjaCAoZSkge1xuICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYgKHJldCAhPT0gdW5kZWZpbmVkKSBhbk9iamVjdChyZXQuY2FsbChpdGVyYXRvcikpO1xuICAgIHRocm93IGU7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIGRlc2NyaXB0b3IgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpIHtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7IG5leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCkgfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciAkaXRlckNyZWF0ZSA9IHJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgQlVHR1kgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSk7IC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbnZhciBGRl9JVEVSQVRPUiA9ICdAQGl0ZXJhdG9yJztcbnZhciBLRVlTID0gJ2tleXMnO1xudmFyIFZBTFVFUyA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCkge1xuICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbiAoa2luZCkge1xuICAgIGlmICghQlVHR1kgJiYga2luZCBpbiBwcm90bykgcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH07XG4gIHZhciBUQUcgPSBOQU1FICsgJyBJdGVyYXRvcic7XG4gIHZhciBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVM7XG4gIHZhciBWQUxVRVNfQlVHID0gZmFsc2U7XG4gIHZhciBwcm90byA9IEJhc2UucHJvdG90eXBlO1xuICB2YXIgJG5hdGl2ZSA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXTtcbiAgdmFyICRkZWZhdWx0ID0gJG5hdGl2ZSB8fCBnZXRNZXRob2QoREVGQVVMVCk7XG4gIHZhciAkZW50cmllcyA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWQ7XG4gIHZhciAkYW55TmF0aXZlID0gTkFNRSA9PSAnQXJyYXknID8gcHJvdG8uZW50cmllcyB8fCAkbmF0aXZlIDogJG5hdGl2ZTtcbiAgdmFyIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYgKCRhbnlOYXRpdmUpIHtcbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKCRhbnlOYXRpdmUuY2FsbChuZXcgQmFzZSgpKSk7XG4gICAgaWYgKEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlICYmIEl0ZXJhdG9yUHJvdG90eXBlLm5leHQpIHtcbiAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgICAgLy8gZml4IGZvciBzb21lIG9sZCBlbmdpbmVzXG4gICAgICBpZiAoIUxJQlJBUlkgJiYgIWhhcyhJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IpKSBoaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYgKERFRl9WQUxVRVMgJiYgJG5hdGl2ZSAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUykge1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZiAoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpIHtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddID0gcmV0dXJuVGhpcztcbiAgaWYgKERFRkFVTFQpIHtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6IElTX1NFVCA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogJGVudHJpZXNcbiAgICB9O1xuICAgIGlmIChGT1JDRUQpIGZvciAoa2V5IGluIG1ldGhvZHMpIHtcbiAgICAgIGlmICghKGtleSBpbiBwcm90bykpIHJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxuICByZXR1cm4gbWV0aG9kcztcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkb25lLCB2YWx1ZSkge1xuICByZXR1cm4geyB2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZSB9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge307XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHRydWU7XG4iLCJ2YXIgTUVUQSA9IHJlcXVpcmUoJy4vX3VpZCcpKCdtZXRhJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBzZXREZXNjID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBpZCA9IDA7XG52YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0cnVlO1xufTtcbnZhciBGUkVFWkUgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBpc0V4dGVuc2libGUoT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHt9KSk7XG59KTtcbnZhciBzZXRNZXRhID0gZnVuY3Rpb24gKGl0KSB7XG4gIHNldERlc2MoaXQsIE1FVEEsIHsgdmFsdWU6IHtcbiAgICBpOiAnTycgKyArK2lkLCAvLyBvYmplY3QgSURcbiAgICB3OiB7fSAgICAgICAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IH0pO1xufTtcbnZhciBmYXN0S2V5ID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgLy8gcmV0dXJuIHByaW1pdGl2ZSB3aXRoIHByZWZpeFxuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJyA/IGl0IDogKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyA/ICdTJyA6ICdQJykgKyBpdDtcbiAgaWYgKCFoYXMoaXQsIE1FVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiAnRic7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuICdFJztcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gb2JqZWN0IElEXG4gIH0gcmV0dXJuIGl0W01FVEFdLmk7XG59O1xudmFyIGdldFdlYWsgPSBmdW5jdGlvbiAoaXQsIGNyZWF0ZSkge1xuICBpZiAoIWhhcyhpdCwgTUVUQSkpIHtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmICghaXNFeHRlbnNpYmxlKGl0KSkgcmV0dXJuIHRydWU7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuIGZhbHNlO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBoYXNoIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gcmV0dXJuIGl0W01FVEFdLnc7XG59O1xuLy8gYWRkIG1ldGFkYXRhIG9uIGZyZWV6ZS1mYW1pbHkgbWV0aG9kcyBjYWxsaW5nXG52YXIgb25GcmVlemUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKEZSRUVaRSAmJiBtZXRhLk5FRUQgJiYgaXNFeHRlbnNpYmxlKGl0KSAmJiAhaGFzKGl0LCBNRVRBKSkgc2V0TWV0YShpdCk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgbWV0YSA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBLRVk6IE1FVEEsXG4gIE5FRUQ6IGZhbHNlLFxuICBmYXN0S2V5OiBmYXN0S2V5LFxuICBnZXRXZWFrOiBnZXRXZWFrLFxuICBvbkZyZWV6ZTogb25GcmVlemVcbn07XG4iLCIvLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGRQcyA9IHJlcXVpcmUoJy4vX29iamVjdC1kcHMnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBFbXB0eSA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2lmcmFtZScpO1xuICB2YXIgaSA9IGVudW1CdWdLZXlzLmxlbmd0aDtcbiAgdmFyIGx0ID0gJzwnO1xuICB2YXIgZ3QgPSAnPic7XG4gIHZhciBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHJlcXVpcmUoJy4vX2h0bWwnKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zY3JpcHQtdXJsXG4gIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XG4gIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShsdCArICdzY3JpcHQnICsgZ3QgKyAnZG9jdW1lbnQuRj1PYmplY3QnICsgbHQgKyAnL3NjcmlwdCcgKyBndCk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICB3aGlsZSAoaS0tKSBkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcykge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoTyAhPT0gbnVsbCkge1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHkoKTtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkUHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBkUCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKTtcbiAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG4gIHZhciBQO1xuICB3aGlsZSAobGVuZ3RoID4gaSkgZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59O1xuIiwidmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciBnT1BEID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGdPUEQgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCkge1xuICBPID0gdG9JT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZ09QRChPLCBQKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmIChoYXMoTywgUCkpIHJldHVybiBjcmVhdGVEZXNjKCFwSUUuZi5jYWxsKE8sIFApLCBPW1BdKTtcbn07XG4iLCIvLyBmYWxsYmFjayBmb3IgSUUxMSBidWdneSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB3aXRoIGlmcmFtZSBhbmQgd2luZG93XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGdPUE4gPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmY7XG52YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxudmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcbiAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG5cbnZhciBnZXRXaW5kb3dOYW1lcyA9IGZ1bmN0aW9uIChpdCkge1xuICB0cnkge1xuICAgIHJldHVybiBnT1BOKGl0KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB3aW5kb3dOYW1lcy5zbGljZSgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCkge1xuICByZXR1cm4gd2luZG93TmFtZXMgJiYgdG9TdHJpbmcuY2FsbChpdCkgPT0gJ1tvYmplY3QgV2luZG93XScgPyBnZXRXaW5kb3dOYW1lcyhpdCkgOiBnT1BOKHRvSU9iamVjdChpdCkpO1xufTtcbiIsIi8vIDE5LjEuMi43IC8gMTUuMi4zLjQgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKS5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07XG4iLCJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuIiwiLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gKE8pIHtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZiAoaGFzKE8sIElFX1BST1RPKSkgcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZiAodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcikge1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07XG4iLCJ2YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGFycmF5SW5kZXhPZiA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykoZmFsc2UpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWVzKSB7XG4gIHZhciBPID0gdG9JT2JqZWN0KG9iamVjdCk7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBPKSBpZiAoa2V5ICE9IElFX1BST1RPKSBoYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSBpZiAoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKSB7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pIHtcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG4iLCJleHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiIsIi8vIG1vc3QgT2JqZWN0IG1ldGhvZHMgYnkgRVM2IHNob3VsZCBhY2NlcHQgcHJpbWl0aXZlc1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSwgZXhlYykge1xuICB2YXIgZm4gPSAoY29yZS5PYmplY3QgfHwge30pW0tFWV0gfHwgT2JqZWN0W0tFWV07XG4gIHZhciBleHAgPSB7fTtcbiAgZXhwW0tFWV0gPSBleGVjKGZuKTtcbiAgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiBmYWlscyhmdW5jdGlvbiAoKSB7IGZuKDEpOyB9KSwgJ09iamVjdCcsIGV4cCk7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcbiIsInZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGFyZ2V0LCBzcmMsIHNhZmUpIHtcbiAgZm9yICh2YXIga2V5IGluIHNyYykge1xuICAgIGlmIChzYWZlICYmIHRhcmdldFtrZXldKSB0YXJnZXRba2V5XSA9IHNyY1trZXldO1xuICAgIGVsc2UgaGlkZSh0YXJnZXQsIGtleSwgc3JjW2tleV0pO1xuICB9IHJldHVybiB0YXJnZXQ7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19oaWRlJyk7XG4iLCIndXNlIHN0cmljdCc7XG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL3Byb3Bvc2FsLXNldG1hcC1vZmZyb20vXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBmb3JPZiA9IHJlcXVpcmUoJy4vX2Zvci1vZicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDT0xMRUNUSU9OKSB7XG4gICRleHBvcnQoJGV4cG9ydC5TLCBDT0xMRUNUSU9OLCB7IGZyb206IGZ1bmN0aW9uIGZyb20oc291cmNlIC8qICwgbWFwRm4sIHRoaXNBcmcgKi8pIHtcbiAgICB2YXIgbWFwRm4gPSBhcmd1bWVudHNbMV07XG4gICAgdmFyIG1hcHBpbmcsIEEsIG4sIGNiO1xuICAgIGFGdW5jdGlvbih0aGlzKTtcbiAgICBtYXBwaW5nID0gbWFwRm4gIT09IHVuZGVmaW5lZDtcbiAgICBpZiAobWFwcGluZykgYUZ1bmN0aW9uKG1hcEZuKTtcbiAgICBpZiAoc291cmNlID09IHVuZGVmaW5lZCkgcmV0dXJuIG5ldyB0aGlzKCk7XG4gICAgQSA9IFtdO1xuICAgIGlmIChtYXBwaW5nKSB7XG4gICAgICBuID0gMDtcbiAgICAgIGNiID0gY3R4KG1hcEZuLCBhcmd1bWVudHNbMl0sIDIpO1xuICAgICAgZm9yT2Yoc291cmNlLCBmYWxzZSwgZnVuY3Rpb24gKG5leHRJdGVtKSB7XG4gICAgICAgIEEucHVzaChjYihuZXh0SXRlbSwgbisrKSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yT2Yoc291cmNlLCBmYWxzZSwgQS5wdXNoLCBBKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyB0aGlzKEEpO1xuICB9IH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vcHJvcG9zYWwtc2V0bWFwLW9mZnJvbS9cbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKENPTExFQ1RJT04pIHtcbiAgJGV4cG9ydCgkZXhwb3J0LlMsIENPTExFQ1RJT04sIHsgb2Y6IGZ1bmN0aW9uIG9mKCkge1xuICAgIHZhciBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHZhciBBID0gQXJyYXkobGVuZ3RoKTtcbiAgICB3aGlsZSAobGVuZ3RoLS0pIEFbbGVuZ3RoXSA9IGFyZ3VtZW50c1tsZW5ndGhdO1xuICAgIHJldHVybiBuZXcgdGhpcyhBKTtcbiAgfSB9KTtcbn07XG4iLCIvLyBXb3JrcyB3aXRoIF9fcHJvdG9fXyBvbmx5LiBPbGQgdjggY2FuJ3Qgd29yayB3aXRoIG51bGwgcHJvdG8gb2JqZWN0cy5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGNoZWNrID0gZnVuY3Rpb24gKE8sIHByb3RvKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBpZiAoIWlzT2JqZWN0KHByb3RvKSAmJiBwcm90byAhPT0gbnVsbCkgdGhyb3cgVHlwZUVycm9yKHByb3RvICsgXCI6IGNhbid0IHNldCBhcyBwcm90b3R5cGUhXCIpO1xufTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCAoJ19fcHJvdG9fXycgaW4ge30gPyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgZnVuY3Rpb24gKHRlc3QsIGJ1Z2d5LCBzZXQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHNldCA9IHJlcXVpcmUoJy4vX2N0eCcpKEZ1bmN0aW9uLmNhbGwsIHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJykuZihPYmplY3QucHJvdG90eXBlLCAnX19wcm90b19fJykuc2V0LCAyKTtcbiAgICAgICAgc2V0KHRlc3QsIFtdKTtcbiAgICAgICAgYnVnZ3kgPSAhKHRlc3QgaW5zdGFuY2VvZiBBcnJheSk7XG4gICAgICB9IGNhdGNoIChlKSB7IGJ1Z2d5ID0gdHJ1ZTsgfVxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIHNldFByb3RvdHlwZU9mKE8sIHByb3RvKSB7XG4gICAgICAgIGNoZWNrKE8sIHByb3RvKTtcbiAgICAgICAgaWYgKGJ1Z2d5KSBPLl9fcHJvdG9fXyA9IHByb3RvO1xuICAgICAgICBlbHNlIHNldChPLCBwcm90byk7XG4gICAgICAgIHJldHVybiBPO1xuICAgICAgfTtcbiAgICB9KHt9LCBmYWxzZSkgOiB1bmRlZmluZWQpLFxuICBjaGVjazogY2hlY2tcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciBTUEVDSUVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZKSB7XG4gIHZhciBDID0gdHlwZW9mIGNvcmVbS0VZXSA9PSAnZnVuY3Rpb24nID8gY29yZVtLRVldIDogZ2xvYmFsW0tFWV07XG4gIGlmIChERVNDUklQVE9SUyAmJiBDICYmICFDW1NQRUNJRVNdKSBkUC5mKEMsIFNQRUNJRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9XG4gIH0pO1xufTtcbiIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgdGFnLCBzdGF0KSB7XG4gIGlmIChpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKSBkZWYoaXQsIFRBRywgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWcgfSk7XG59O1xuIiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59O1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFRPX1NUUklORykge1xuICByZXR1cm4gZnVuY3Rpb24gKHRoYXQsIHBvcykge1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpO1xuICAgIHZhciBpID0gdG9JbnRlZ2VyKHBvcyk7XG4gICAgdmFyIGwgPSBzLmxlbmd0aDtcbiAgICB2YXIgYSwgYjtcbiAgICBpZiAoaSA8IDAgfHwgaSA+PSBsKSByZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcbiIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbmRleCwgbGVuZ3RoKSB7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59O1xuIiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCA9IE1hdGguY2VpbDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG4iLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuIiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG4iLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcbiIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBTKSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICghUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcbiIsInZhciBpZCA9IDA7XG52YXIgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgVFlQRSkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSB8fCBpdC5fdCAhPT0gVFlQRSkgdGhyb3cgVHlwZUVycm9yKCdJbmNvbXBhdGlibGUgcmVjZWl2ZXIsICcgKyBUWVBFICsgJyByZXF1aXJlZCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgd2tzRXh0ID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgdmFyICRTeW1ib2wgPSBjb3JlLlN5bWJvbCB8fCAoY29yZS5TeW1ib2wgPSBMSUJSQVJZID8ge30gOiBnbG9iYWwuU3ltYm9sIHx8IHt9KTtcbiAgaWYgKG5hbWUuY2hhckF0KDApICE9ICdfJyAmJiAhKG5hbWUgaW4gJFN5bWJvbCkpIGRlZmluZVByb3BlcnR5KCRTeW1ib2wsIG5hbWUsIHsgdmFsdWU6IHdrc0V4dC5mKG5hbWUpIH0pO1xufTtcbiIsImV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX3drcycpO1xuIiwidmFyIHN0b3JlID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xudmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbDtcbnZhciBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xuIiwidmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCAhPSB1bmRlZmluZWQpIHJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBnZXQgPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3IgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIGl0ZXJGbiA9IGdldChpdCk7XG4gIGlmICh0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICByZXR1cm4gYW5PYmplY3QoaXRlckZuLmNhbGwoaXQpKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpO1xudmFyIHN0ZXAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24gKGl0ZXJhdGVkLCBraW5kKSB7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBraW5kID0gdGhpcy5faztcbiAgdmFyIGluZGV4ID0gdGhpcy5faSsrO1xuICBpZiAoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpIHtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmIChraW5kID09ICdrZXlzJykgcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZiAoa2luZCA9PSAndmFsdWVzJykgcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHN0cm9uZyA9IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24tc3Ryb25nJyk7XG52YXIgdmFsaWRhdGUgPSByZXF1aXJlKCcuL192YWxpZGF0ZS1jb2xsZWN0aW9uJyk7XG52YXIgTUFQID0gJ01hcCc7XG5cbi8vIDIzLjEgTWFwIE9iamVjdHNcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29sbGVjdGlvbicpKE1BUCwgZnVuY3Rpb24gKGdldCkge1xuICByZXR1cm4gZnVuY3Rpb24gTWFwKCkgeyByZXR1cm4gZ2V0KHRoaXMsIGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTsgfTtcbn0sIHtcbiAgLy8gMjMuMS4zLjYgTWFwLnByb3RvdHlwZS5nZXQoa2V5KVxuICBnZXQ6IGZ1bmN0aW9uIGdldChrZXkpIHtcbiAgICB2YXIgZW50cnkgPSBzdHJvbmcuZ2V0RW50cnkodmFsaWRhdGUodGhpcywgTUFQKSwga2V5KTtcbiAgICByZXR1cm4gZW50cnkgJiYgZW50cnkudjtcbiAgfSxcbiAgLy8gMjMuMS4zLjkgTWFwLnByb3RvdHlwZS5zZXQoa2V5LCB2YWx1ZSlcbiAgc2V0OiBmdW5jdGlvbiBzZXQoa2V5LCB2YWx1ZSkge1xuICAgIHJldHVybiBzdHJvbmcuZGVmKHZhbGlkYXRlKHRoaXMsIE1BUCksIGtleSA9PT0gMCA/IDAgOiBrZXksIHZhbHVlKTtcbiAgfVxufSwgc3Ryb25nLCB0cnVlKTtcbiIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4vLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0JywgeyBjcmVhdGU6IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKSB9KTtcbiIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4vLyAxOS4xLjIuNCAvIDE1LjIuMy42IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSwgJ09iamVjdCcsIHsgZGVmaW5lUHJvcGVydHk6IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmYgfSk7XG4iLCIvLyAxOS4xLjIuNSBPYmplY3QuZnJlZXplKE8pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBtZXRhID0gcmVxdWlyZSgnLi9fbWV0YScpLm9uRnJlZXplO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2ZyZWV6ZScsIGZ1bmN0aW9uICgkZnJlZXplKSB7XG4gIHJldHVybiBmdW5jdGlvbiBmcmVlemUoaXQpIHtcbiAgICByZXR1cm4gJGZyZWV6ZSAmJiBpc09iamVjdChpdCkgPyAkZnJlZXplKG1ldGEoaXQpKSA6IGl0O1xuICB9O1xufSk7XG4iLCIvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpLmY7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgnZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJywgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpIHtcbiAgICByZXR1cm4gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0b0lPYmplY3QoaXQpLCBrZXkpO1xuICB9O1xufSk7XG4iLCIvLyAxOS4xLjIuOSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyICRnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKTtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdnZXRQcm90b3R5cGVPZicsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGdldFByb3RvdHlwZU9mKGl0KSB7XG4gICAgcmV0dXJuICRnZXRQcm90b3R5cGVPZih0b09iamVjdChpdCkpO1xuICB9O1xufSk7XG4iLCIvLyAxOS4xLjIuMTcgT2JqZWN0LnNlYWwoTylcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIG1ldGEgPSByZXF1aXJlKCcuL19tZXRhJykub25GcmVlemU7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgnc2VhbCcsIGZ1bmN0aW9uICgkc2VhbCkge1xuICByZXR1cm4gZnVuY3Rpb24gc2VhbChpdCkge1xuICAgIHJldHVybiAkc2VhbCAmJiBpc09iamVjdChpdCkgPyAkc2VhbChtZXRhKGl0KSkgOiBpdDtcbiAgfTtcbn0pO1xuIiwiLy8gMTkuMS4zLjE5IE9iamVjdC5zZXRQcm90b3R5cGVPZihPLCBwcm90bylcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHsgc2V0UHJvdG90eXBlT2Y6IHJlcXVpcmUoJy4vX3NldC1wcm90bycpLnNldCB9KTtcbiIsIiIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbiAoaXRlcmF0ZWQpIHtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBpbmRleCA9IHRoaXMuX2k7XG4gIHZhciBwb2ludDtcbiAgaWYgKGluZGV4ID49IE8ubGVuZ3RoKSByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7IHZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2UgfTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gRUNNQVNjcmlwdCA2IHN5bWJvbHMgc2hpbVxudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIE1FVEEgPSByZXF1aXJlKCcuL19tZXRhJykuS0VZO1xudmFyICRmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xudmFyIHdrcyA9IHJlcXVpcmUoJy4vX3drcycpO1xudmFyIHdrc0V4dCA9IHJlcXVpcmUoJy4vX3drcy1leHQnKTtcbnZhciB3a3NEZWZpbmUgPSByZXF1aXJlKCcuL193a3MtZGVmaW5lJyk7XG52YXIgZW51bUtleXMgPSByZXF1aXJlKCcuL19lbnVtLWtleXMnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi9faXMtYXJyYXknKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgX2NyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBnT1BORXh0ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4tZXh0Jyk7XG52YXIgJEdPUEQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpO1xudmFyICREUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BEID0gJEdPUEQuZjtcbnZhciBkUCA9ICREUC5mO1xudmFyIGdPUE4gPSBnT1BORXh0LmY7XG52YXIgJFN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG52YXIgJEpTT04gPSBnbG9iYWwuSlNPTjtcbnZhciBfc3RyaW5naWZ5ID0gJEpTT04gJiYgJEpTT04uc3RyaW5naWZ5O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xudmFyIEhJRERFTiA9IHdrcygnX2hpZGRlbicpO1xudmFyIFRPX1BSSU1JVElWRSA9IHdrcygndG9QcmltaXRpdmUnKTtcbnZhciBpc0VudW0gPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbnZhciBTeW1ib2xSZWdpc3RyeSA9IHNoYXJlZCgnc3ltYm9sLXJlZ2lzdHJ5Jyk7XG52YXIgQWxsU3ltYm9scyA9IHNoYXJlZCgnc3ltYm9scycpO1xudmFyIE9QU3ltYm9scyA9IHNoYXJlZCgnb3Atc3ltYm9scycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0W1BST1RPVFlQRV07XG52YXIgVVNFX05BVElWRSA9IHR5cGVvZiAkU3ltYm9sID09ICdmdW5jdGlvbic7XG52YXIgUU9iamVjdCA9IGdsb2JhbC5RT2JqZWN0O1xuLy8gRG9uJ3QgdXNlIHNldHRlcnMgaW4gUXQgU2NyaXB0LCBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTczXG52YXIgc2V0dGVyID0gIVFPYmplY3QgfHwgIVFPYmplY3RbUFJPVE9UWVBFXSB8fCAhUU9iamVjdFtQUk9UT1RZUEVdLmZpbmRDaGlsZDtcblxuLy8gZmFsbGJhY2sgZm9yIG9sZCBBbmRyb2lkLCBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9Njg3XG52YXIgc2V0U3ltYm9sRGVzYyA9IERFU0NSSVBUT1JTICYmICRmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBfY3JlYXRlKGRQKHt9LCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRQKHRoaXMsICdhJywgeyB2YWx1ZTogNyB9KS5hOyB9XG4gIH0pKS5hICE9IDc7XG59KSA/IGZ1bmN0aW9uIChpdCwga2V5LCBEKSB7XG4gIHZhciBwcm90b0Rlc2MgPSBnT1BEKE9iamVjdFByb3RvLCBrZXkpO1xuICBpZiAocHJvdG9EZXNjKSBkZWxldGUgT2JqZWN0UHJvdG9ba2V5XTtcbiAgZFAoaXQsIGtleSwgRCk7XG4gIGlmIChwcm90b0Rlc2MgJiYgaXQgIT09IE9iamVjdFByb3RvKSBkUChPYmplY3RQcm90bywga2V5LCBwcm90b0Rlc2MpO1xufSA6IGRQO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uICh0YWcpIHtcbiAgdmFyIHN5bSA9IEFsbFN5bWJvbHNbdGFnXSA9IF9jcmVhdGUoJFN5bWJvbFtQUk9UT1RZUEVdKTtcbiAgc3ltLl9rID0gdGFnO1xuICByZXR1cm4gc3ltO1xufTtcblxudmFyIGlzU3ltYm9sID0gVVNFX05BVElWRSAmJiB0eXBlb2YgJFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJyA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgaW5zdGFuY2VvZiAkU3ltYm9sO1xufTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIEQpIHtcbiAgaWYgKGl0ID09PSBPYmplY3RQcm90bykgJGRlZmluZVByb3BlcnR5KE9QU3ltYm9scywga2V5LCBEKTtcbiAgYW5PYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBhbk9iamVjdChEKTtcbiAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkpKSB7XG4gICAgaWYgKCFELmVudW1lcmFibGUpIHtcbiAgICAgIGlmICghaGFzKGl0LCBISURERU4pKSBkUChpdCwgSElEREVOLCBjcmVhdGVEZXNjKDEsIHt9KSk7XG4gICAgICBpdFtISURERU5dW2tleV0gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkgaXRbSElEREVOXVtrZXldID0gZmFsc2U7XG4gICAgICBEID0gX2NyZWF0ZShELCB7IGVudW1lcmFibGU6IGNyZWF0ZURlc2MoMCwgZmFsc2UpIH0pO1xuICAgIH0gcmV0dXJuIHNldFN5bWJvbERlc2MoaXQsIGtleSwgRCk7XG4gIH0gcmV0dXJuIGRQKGl0LCBrZXksIEQpO1xufTtcbnZhciAkZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoaXQsIFApIHtcbiAgYW5PYmplY3QoaXQpO1xuICB2YXIga2V5cyA9IGVudW1LZXlzKFAgPSB0b0lPYmplY3QoUCkpO1xuICB2YXIgaSA9IDA7XG4gIHZhciBsID0ga2V5cy5sZW5ndGg7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChsID4gaSkgJGRlZmluZVByb3BlcnR5KGl0LCBrZXkgPSBrZXlzW2krK10sIFBba2V5XSk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgJGNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpdCwgUCkge1xuICByZXR1cm4gUCA9PT0gdW5kZWZpbmVkID8gX2NyZWF0ZShpdCkgOiAkZGVmaW5lUHJvcGVydGllcyhfY3JlYXRlKGl0KSwgUCk7XG59O1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSkge1xuICB2YXIgRSA9IGlzRW51bS5jYWxsKHRoaXMsIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSkpO1xuICBpZiAodGhpcyA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIEUgfHwgIWhhcyh0aGlzLCBrZXkpIHx8ICFoYXMoQWxsU3ltYm9scywga2V5KSB8fCBoYXModGhpcywgSElEREVOKSAmJiB0aGlzW0hJRERFTl1ba2V5XSA/IEUgOiB0cnVlO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpIHtcbiAgaXQgPSB0b0lPYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBpZiAoaXQgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKSByZXR1cm47XG4gIHZhciBEID0gZ09QRChpdCwga2V5KTtcbiAgaWYgKEQgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIShoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSkgRC5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgcmV0dXJuIEQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eU5hbWVzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCkge1xuICB2YXIgbmFtZXMgPSBnT1BOKHRvSU9iamVjdChpdCkpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBpID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIHtcbiAgICBpZiAoIWhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiBrZXkgIT0gSElEREVOICYmIGtleSAhPSBNRVRBKSByZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpIHtcbiAgdmFyIElTX09QID0gaXQgPT09IE9iamVjdFByb3RvO1xuICB2YXIgbmFtZXMgPSBnT1BOKElTX09QID8gT1BTeW1ib2xzIDogdG9JT2JqZWN0KGl0KSk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGkgPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkge1xuICAgIGlmIChoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYgKElTX09QID8gaGFzKE9iamVjdFByb3RvLCBrZXkpIDogdHJ1ZSkpIHJlc3VsdC5wdXNoKEFsbFN5bWJvbHNba2V5XSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8vIDE5LjQuMS4xIFN5bWJvbChbZGVzY3JpcHRpb25dKVxuaWYgKCFVU0VfTkFUSVZFKSB7XG4gICRTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woKSB7XG4gICAgaWYgKHRoaXMgaW5zdGFuY2VvZiAkU3ltYm9sKSB0aHJvdyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvciEnKTtcbiAgICB2YXIgdGFnID0gdWlkKGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTtcbiAgICB2YXIgJHNldCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgaWYgKHRoaXMgPT09IE9iamVjdFByb3RvKSAkc2V0LmNhbGwoT1BTeW1ib2xzLCB2YWx1ZSk7XG4gICAgICBpZiAoaGFzKHRoaXMsIEhJRERFTikgJiYgaGFzKHRoaXNbSElEREVOXSwgdGFnKSkgdGhpc1tISURERU5dW3RhZ10gPSBmYWxzZTtcbiAgICAgIHNldFN5bWJvbERlc2ModGhpcywgdGFnLCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG4gICAgfTtcbiAgICBpZiAoREVTQ1JJUFRPUlMgJiYgc2V0dGVyKSBzZXRTeW1ib2xEZXNjKE9iamVjdFByb3RvLCB0YWcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCBzZXQ6ICRzZXQgfSk7XG4gICAgcmV0dXJuIHdyYXAodGFnKTtcbiAgfTtcbiAgcmVkZWZpbmUoJFN5bWJvbFtQUk9UT1RZUEVdLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5faztcbiAgfSk7XG5cbiAgJEdPUEQuZiA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICREUC5mID0gJGRlZmluZVByb3BlcnR5O1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmYgPSBnT1BORXh0LmYgPSAkZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpLmYgPSAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJykuZiA9ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbiAgaWYgKERFU0NSSVBUT1JTICYmICFyZXF1aXJlKCcuL19saWJyYXJ5JykpIHtcbiAgICByZWRlZmluZShPYmplY3RQcm90bywgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJywgJHByb3BlcnR5SXNFbnVtZXJhYmxlLCB0cnVlKTtcbiAgfVxuXG4gIHdrc0V4dC5mID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gd3JhcCh3a3MobmFtZSkpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7IFN5bWJvbDogJFN5bWJvbCB9KTtcblxuZm9yICh2YXIgZXM2U3ltYm9scyA9IChcbiAgLy8gMTkuNC4yLjIsIDE5LjQuMi4zLCAxOS40LjIuNCwgMTkuNC4yLjYsIDE5LjQuMi44LCAxOS40LjIuOSwgMTkuNC4yLjEwLCAxOS40LjIuMTEsIDE5LjQuMi4xMiwgMTkuNC4yLjEzLCAxOS40LjIuMTRcbiAgJ2hhc0luc3RhbmNlLGlzQ29uY2F0U3ByZWFkYWJsZSxpdGVyYXRvcixtYXRjaCxyZXBsYWNlLHNlYXJjaCxzcGVjaWVzLHNwbGl0LHRvUHJpbWl0aXZlLHRvU3RyaW5nVGFnLHVuc2NvcGFibGVzJ1xuKS5zcGxpdCgnLCcpLCBqID0gMDsgZXM2U3ltYm9scy5sZW5ndGggPiBqOyl3a3MoZXM2U3ltYm9sc1tqKytdKTtcblxuZm9yICh2YXIgd2VsbEtub3duU3ltYm9scyA9ICRrZXlzKHdrcy5zdG9yZSksIGsgPSAwOyB3ZWxsS25vd25TeW1ib2xzLmxlbmd0aCA+IGs7KSB3a3NEZWZpbmUod2VsbEtub3duU3ltYm9sc1trKytdKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ1N5bWJvbCcsIHtcbiAgLy8gMTkuNC4yLjEgU3ltYm9sLmZvcihrZXkpXG4gICdmb3InOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIGhhcyhTeW1ib2xSZWdpc3RyeSwga2V5ICs9ICcnKVxuICAgICAgPyBTeW1ib2xSZWdpc3RyeVtrZXldXG4gICAgICA6IFN5bWJvbFJlZ2lzdHJ5W2tleV0gPSAkU3ltYm9sKGtleSk7XG4gIH0sXG4gIC8vIDE5LjQuMi41IFN5bWJvbC5rZXlGb3Ioc3ltKVxuICBrZXlGb3I6IGZ1bmN0aW9uIGtleUZvcihzeW0pIHtcbiAgICBpZiAoIWlzU3ltYm9sKHN5bSkpIHRocm93IFR5cGVFcnJvcihzeW0gKyAnIGlzIG5vdCBhIHN5bWJvbCEnKTtcbiAgICBmb3IgKHZhciBrZXkgaW4gU3ltYm9sUmVnaXN0cnkpIGlmIChTeW1ib2xSZWdpc3RyeVtrZXldID09PSBzeW0pIHJldHVybiBrZXk7XG4gIH0sXG4gIHVzZVNldHRlcjogZnVuY3Rpb24gKCkgeyBzZXR0ZXIgPSB0cnVlOyB9LFxuICB1c2VTaW1wbGU6IGZ1bmN0aW9uICgpIHsgc2V0dGVyID0gZmFsc2U7IH1cbn0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnT2JqZWN0Jywge1xuICAvLyAxOS4xLjIuMiBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4gIGNyZWF0ZTogJGNyZWF0ZSxcbiAgLy8gMTkuMS4yLjQgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4gIGRlZmluZVByb3BlcnR5OiAkZGVmaW5lUHJvcGVydHksXG4gIC8vIDE5LjEuMi4zIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpXG4gIGRlZmluZVByb3BlcnRpZXM6ICRkZWZpbmVQcm9wZXJ0aWVzLFxuICAvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJGdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgLy8gMTkuMS4yLjcgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbiAgZ2V0T3duUHJvcGVydHlOYW1lczogJGdldE93blByb3BlcnR5TmFtZXMsXG4gIC8vIDE5LjEuMi44IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoTylcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiAkZ2V0T3duUHJvcGVydHlTeW1ib2xzXG59KTtcblxuLy8gMjQuMy4yIEpTT04uc3RyaW5naWZ5KHZhbHVlIFssIHJlcGxhY2VyIFssIHNwYWNlXV0pXG4kSlNPTiAmJiAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICghVVNFX05BVElWRSB8fCAkZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgUyA9ICRTeW1ib2woKTtcbiAgLy8gTVMgRWRnZSBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMge31cbiAgLy8gV2ViS2l0IGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyBudWxsXG4gIC8vIFY4IHRocm93cyBvbiBib3hlZCBzeW1ib2xzXG4gIHJldHVybiBfc3RyaW5naWZ5KFtTXSkgIT0gJ1tudWxsXScgfHwgX3N0cmluZ2lmeSh7IGE6IFMgfSkgIT0gJ3t9JyB8fCBfc3RyaW5naWZ5KE9iamVjdChTKSkgIT0gJ3t9Jztcbn0pKSwgJ0pTT04nLCB7XG4gIHN0cmluZ2lmeTogZnVuY3Rpb24gc3RyaW5naWZ5KGl0KSB7XG4gICAgaWYgKGl0ID09PSB1bmRlZmluZWQgfHwgaXNTeW1ib2woaXQpKSByZXR1cm47IC8vIElFOCByZXR1cm5zIHN0cmluZyBvbiB1bmRlZmluZWRcbiAgICB2YXIgYXJncyA9IFtpdF07XG4gICAgdmFyIGkgPSAxO1xuICAgIHZhciByZXBsYWNlciwgJHJlcGxhY2VyO1xuICAgIHdoaWxlIChhcmd1bWVudHMubGVuZ3RoID4gaSkgYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICByZXBsYWNlciA9IGFyZ3NbMV07XG4gICAgaWYgKHR5cGVvZiByZXBsYWNlciA9PSAnZnVuY3Rpb24nKSAkcmVwbGFjZXIgPSByZXBsYWNlcjtcbiAgICBpZiAoJHJlcGxhY2VyIHx8ICFpc0FycmF5KHJlcGxhY2VyKSkgcmVwbGFjZXIgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgaWYgKCRyZXBsYWNlcikgdmFsdWUgPSAkcmVwbGFjZXIuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICAgIGlmICghaXNTeW1ib2wodmFsdWUpKSByZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICBhcmdzWzFdID0gcmVwbGFjZXI7XG4gICAgcmV0dXJuIF9zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3MpO1xuICB9XG59KTtcblxuLy8gMTkuNC4zLjQgU3ltYm9sLnByb3RvdHlwZVtAQHRvUHJpbWl0aXZlXShoaW50KVxuJFN5bWJvbFtQUk9UT1RZUEVdW1RPX1BSSU1JVElWRV0gfHwgcmVxdWlyZSgnLi9faGlkZScpKCRTeW1ib2xbUFJPVE9UWVBFXSwgVE9fUFJJTUlUSVZFLCAkU3ltYm9sW1BST1RPVFlQRV0udmFsdWVPZik7XG4vLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZygkU3ltYm9sLCAnU3ltYm9sJyk7XG4vLyAyMC4yLjEuOSBNYXRoW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhNYXRoLCAnTWF0aCcsIHRydWUpO1xuLy8gMjQuMy4zIEpTT05bQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKGdsb2JhbC5KU09OLCAnSlNPTicsIHRydWUpO1xuIiwiLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9wcm9wb3NhbC1zZXRtYXAtb2Zmcm9tLyNzZWMtbWFwLmZyb21cbnJlcXVpcmUoJy4vX3NldC1jb2xsZWN0aW9uLWZyb20nKSgnTWFwJyk7XG4iLCIvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL3Byb3Bvc2FsLXNldG1hcC1vZmZyb20vI3NlYy1tYXAub2ZcbnJlcXVpcmUoJy4vX3NldC1jb2xsZWN0aW9uLW9mJykoJ01hcCcpO1xuIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL0RhdmlkQnJ1YW50L01hcC1TZXQucHJvdG90eXBlLnRvSlNPTlxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LlIsICdNYXAnLCB7IHRvSlNPTjogcmVxdWlyZSgnLi9fY29sbGVjdGlvbi10by1qc29uJykoJ01hcCcpIH0pO1xuIiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdhc3luY0l0ZXJhdG9yJyk7XG4iLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ29ic2VydmFibGUnKTtcbiIsInJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciBUT19TVFJJTkdfVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbnZhciBET01JdGVyYWJsZXMgPSAoJ0NTU1J1bGVMaXN0LENTU1N0eWxlRGVjbGFyYXRpb24sQ1NTVmFsdWVMaXN0LENsaWVudFJlY3RMaXN0LERPTVJlY3RMaXN0LERPTVN0cmluZ0xpc3QsJyArXG4gICdET01Ub2tlbkxpc3QsRGF0YVRyYW5zZmVySXRlbUxpc3QsRmlsZUxpc3QsSFRNTEFsbENvbGxlY3Rpb24sSFRNTENvbGxlY3Rpb24sSFRNTEZvcm1FbGVtZW50LEhUTUxTZWxlY3RFbGVtZW50LCcgK1xuICAnTWVkaWFMaXN0LE1pbWVUeXBlQXJyYXksTmFtZWROb2RlTWFwLE5vZGVMaXN0LFBhaW50UmVxdWVzdExpc3QsUGx1Z2luLFBsdWdpbkFycmF5LFNWR0xlbmd0aExpc3QsU1ZHTnVtYmVyTGlzdCwnICtcbiAgJ1NWR1BhdGhTZWdMaXN0LFNWR1BvaW50TGlzdCxTVkdTdHJpbmdMaXN0LFNWR1RyYW5zZm9ybUxpc3QsU291cmNlQnVmZmVyTGlzdCxTdHlsZVNoZWV0TGlzdCxUZXh0VHJhY2tDdWVMaXN0LCcgK1xuICAnVGV4dFRyYWNrTGlzdCxUb3VjaExpc3QnKS5zcGxpdCgnLCcpO1xuXG5mb3IgKHZhciBpID0gMDsgaSA8IERPTUl0ZXJhYmxlcy5sZW5ndGg7IGkrKykge1xuICB2YXIgTkFNRSA9IERPTUl0ZXJhYmxlc1tpXTtcbiAgdmFyIENvbGxlY3Rpb24gPSBnbG9iYWxbTkFNRV07XG4gIHZhciBwcm90byA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIGlmIChwcm90byAmJiAhcHJvdG9bVE9fU1RSSU5HX1RBR10pIGhpZGUocHJvdG8sIFRPX1NUUklOR19UQUcsIE5BTUUpO1xuICBJdGVyYXRvcnNbTkFNRV0gPSBJdGVyYXRvcnMuQXJyYXk7XG59XG4iLCIvLyBUaGlzIG1ldGhvZCBvZiBvYnRhaW5pbmcgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QgbmVlZHMgdG8gYmVcbi8vIGtlcHQgaWRlbnRpY2FsIHRvIHRoZSB3YXkgaXQgaXMgb2J0YWluZWQgaW4gcnVudGltZS5qc1xudmFyIGcgPSAoZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzIH0pKCkgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xuXG4vLyBVc2UgYGdldE93blByb3BlcnR5TmFtZXNgIGJlY2F1c2Ugbm90IGFsbCBicm93c2VycyBzdXBwb3J0IGNhbGxpbmdcbi8vIGBoYXNPd25Qcm9wZXJ0eWAgb24gdGhlIGdsb2JhbCBgc2VsZmAgb2JqZWN0IGluIGEgd29ya2VyLiBTZWUgIzE4My5cbnZhciBoYWRSdW50aW1lID0gZy5yZWdlbmVyYXRvclJ1bnRpbWUgJiZcbiAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZykuaW5kZXhPZihcInJlZ2VuZXJhdG9yUnVudGltZVwiKSA+PSAwO1xuXG4vLyBTYXZlIHRoZSBvbGQgcmVnZW5lcmF0b3JSdW50aW1lIGluIGNhc2UgaXQgbmVlZHMgdG8gYmUgcmVzdG9yZWQgbGF0ZXIuXG52YXIgb2xkUnVudGltZSA9IGhhZFJ1bnRpbWUgJiYgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG5cbi8vIEZvcmNlIHJlZXZhbHV0YXRpb24gb2YgcnVudGltZS5qcy5cbmcucmVnZW5lcmF0b3JSdW50aW1lID0gdW5kZWZpbmVkO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL3J1bnRpbWVcIik7XG5cbmlmIChoYWRSdW50aW1lKSB7XG4gIC8vIFJlc3RvcmUgdGhlIG9yaWdpbmFsIHJ1bnRpbWUuXG4gIGcucmVnZW5lcmF0b3JSdW50aW1lID0gb2xkUnVudGltZTtcbn0gZWxzZSB7XG4gIC8vIFJlbW92ZSB0aGUgZ2xvYmFsIHByb3BlcnR5IGFkZGVkIGJ5IHJ1bnRpbWUuanMuXG4gIHRyeSB7XG4gICAgZGVsZXRlIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuICB9IGNhdGNoKGUpIHtcbiAgICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcbiAgfVxufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogaHR0cHM6Ly9yYXcuZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9tYXN0ZXIvTElDRU5TRSBmaWxlLiBBblxuICogYWRkaXRpb25hbCBncmFudCBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluXG4gKiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuIShmdW5jdGlvbihnbG9iYWwpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICB2YXIgaW5Nb2R1bGUgPSB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiO1xuICB2YXIgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIGlmIChydW50aW1lKSB7XG4gICAgaWYgKGluTW9kdWxlKSB7XG4gICAgICAvLyBJZiByZWdlbmVyYXRvclJ1bnRpbWUgaXMgZGVmaW5lZCBnbG9iYWxseSBhbmQgd2UncmUgaW4gYSBtb2R1bGUsXG4gICAgICAvLyBtYWtlIHRoZSBleHBvcnRzIG9iamVjdCBpZGVudGljYWwgdG8gcmVnZW5lcmF0b3JSdW50aW1lLlxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBydW50aW1lO1xuICAgIH1cbiAgICAvLyBEb24ndCBib3RoZXIgZXZhbHVhdGluZyB0aGUgcmVzdCBvZiB0aGlzIGZpbGUgaWYgdGhlIHJ1bnRpbWUgd2FzXG4gICAgLy8gYWxyZWFkeSBkZWZpbmVkIGdsb2JhbGx5LlxuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIERlZmluZSB0aGUgcnVudGltZSBnbG9iYWxseSAoYXMgZXhwZWN0ZWQgYnkgZ2VuZXJhdGVkIGNvZGUpIGFzIGVpdGhlclxuICAvLyBtb2R1bGUuZXhwb3J0cyAoaWYgd2UncmUgaW4gYSBtb2R1bGUpIG9yIGEgbmV3LCBlbXB0eSBvYmplY3QuXG4gIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lID0gaW5Nb2R1bGUgPyBtb2R1bGUuZXhwb3J0cyA6IHt9O1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIHJ1bnRpbWUud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9XG4gICAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgcnVudGltZS5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIHJ1bnRpbWUuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLiBJZiB0aGUgUHJvbWlzZSBpcyByZWplY3RlZCwgaG93ZXZlciwgdGhlXG4gICAgICAgICAgLy8gcmVzdWx0IGZvciB0aGlzIGl0ZXJhdGlvbiB3aWxsIGJlIHJlamVjdGVkIHdpdGggdGhlIHNhbWVcbiAgICAgICAgICAvLyByZWFzb24uIE5vdGUgdGhhdCByZWplY3Rpb25zIG9mIHlpZWxkZWQgUHJvbWlzZXMgYXJlIG5vdFxuICAgICAgICAgIC8vIHRocm93biBiYWNrIGludG8gdGhlIGdlbmVyYXRvciBmdW5jdGlvbiwgYXMgaXMgdGhlIGNhc2VcbiAgICAgICAgICAvLyB3aGVuIGFuIGF3YWl0ZWQgUHJvbWlzZSBpcyByZWplY3RlZC4gVGhpcyBkaWZmZXJlbmNlIGluXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYmV0d2VlbiB5aWVsZCBhbmQgYXdhaXQgaXMgaW1wb3J0YW50LCBiZWNhdXNlIGl0XG4gICAgICAgICAgLy8gYWxsb3dzIHRoZSBjb25zdW1lciB0byBkZWNpZGUgd2hhdCB0byBkbyB3aXRoIHRoZSB5aWVsZGVkXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIChzd2FsbG93IGl0IGFuZCBjb250aW51ZSwgbWFudWFsbHkgLnRocm93IGl0IGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBnZW5lcmF0b3IsIGFiYW5kb24gaXRlcmF0aW9uLCB3aGF0ZXZlcikuIFdpdGhcbiAgICAgICAgICAvLyBhd2FpdCwgYnkgY29udHJhc3QsIHRoZXJlIGlzIG5vIG9wcG9ydHVuaXR5IHRvIGV4YW1pbmUgdGhlXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIHJlYXNvbiBvdXRzaWRlIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIHNvIHRoZVxuICAgICAgICAgIC8vIG9ubHkgb3B0aW9uIGlzIHRvIHRocm93IGl0IGZyb20gdGhlIGF3YWl0IGV4cHJlc3Npb24sIGFuZFxuICAgICAgICAgIC8vIGxldCB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhbmRsZSB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgcnVudGltZS5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgcnVudGltZS5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpXG4gICAgKTtcblxuICAgIHJldHVybiBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBydW50aW1lLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgcnVudGltZS52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcbn0pKFxuICAvLyBJbiBzbG9wcHkgbW9kZSwgdW5ib3VuZCBgdGhpc2AgcmVmZXJzIHRvIHRoZSBnbG9iYWwgb2JqZWN0LCBmYWxsYmFjayB0b1xuICAvLyBGdW5jdGlvbiBjb25zdHJ1Y3RvciBpZiB3ZSdyZSBpbiBnbG9iYWwgc3RyaWN0IG1vZGUuIFRoYXQgaXMgc2FkbHkgYSBmb3JtXG4gIC8vIG9mIGluZGlyZWN0IGV2YWwgd2hpY2ggdmlvbGF0ZXMgQ29udGVudCBTZWN1cml0eSBQb2xpY3kuXG4gIChmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMgfSkoKSB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKClcbik7XG4iLCIvKipcclxuICogTWFpbi5cclxuICovXHJcbmltcG9ydCAqIGFzIGZ1bmMgZnJvbSAnQG1haW4vZnVuY3Rpb24vaW5kZXgnO1xyXG5pbXBvcnQgKiBhcyBpdGVyYWJsZSBmcm9tICdAbWFpbi9pdGVyYWJsZS9pbmRleCc7XHJcbmltcG9ydCAqIGFzIHJhbmRvbSBmcm9tICdAbWFpbi9yYW5kb20vaW5kZXgnO1xyXG5pbXBvcnQgKiBhcyBzY2FsYXIgZnJvbSAnQG1haW4vc2NhbGFyL2luZGV4JztcclxuXHJcbmV4cG9ydCAqIGZyb20gJ0BtYWluL2luZGV4JztcclxuXHJcbmV4cG9ydCB7XHJcbiAgICBmdW5jLFxyXG4gICAgaXRlcmFibGUsXHJcbiAgICByYW5kb20sXHJcbiAgICBzY2FsYXJcclxufTtcclxuIiwiLyoqXHJcbiAqIElsbGVnYWwgaW5oZXJpdGFuY2UgZXhjZXB0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIElsbGVnYWxJbmhlcml0YW5jZUVycm9yIGV4dGVuZHMgRXJyb3Ige1xyXG4gICAgY29uc3RydWN0b3IobWVzc2FnZT86IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xyXG4gICAgICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIHRoaXMuY29uc3RydWN0b3IpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBJbGxlZ2FsIHN0YXRlIGV4Y2VwdGlvbi5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBJbGxlZ2FsU3RhdGVFcnJvciBleHRlbmRzIEVycm9yIHtcclxuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2U/OiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihtZXNzYWdlKTtcclxuICAgICAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbGxlZ2FsSW5oZXJpdGFuY2VFcnJvciB9IGZyb20gJ0BtYWluL2luZGV4JztcclxuXHJcbi8qKlxyXG4gKiBQcmV2ZW50IGluc3RhbmNlcyBmcm9tIGluaGVyaXRlZCBjbGFzc2VzLlxyXG4gKiBAcGFyYW0gdGFyZ2V0IENsYXNzLlxyXG4gKi9cclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG5leHBvcnQgZnVuY3Rpb24gZmluYWw8VCBleHRlbmRzIHsgbmV3ICguLi5hcmdzOiBhbnlbXSk6IG9iamVjdCB9Pih0YXJnZXQ6IFQpOiBUIHtcclxuICAgIHJldHVybiBjbGFzcyBGaW5hbCBleHRlbmRzIHRhcmdldCB7XHJcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gICAgICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XHJcbiAgICAgICAgICAgIGlmIChuZXcudGFyZ2V0ICE9PSBGaW5hbCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IElsbGVnYWxJbmhlcml0YW5jZUVycm9yKCdDYW5ub3QgaW5oZXJpdCBmcm9tIGZpbmFsIGNsYXNzJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3VwZXIoLi4uYXJncyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG4iLCIvKipcclxuICogRnJlZXplIGNvbnN0cnVjdG9yIGFuZCBwcm90b3R5cGUuXHJcbiAqIEBwYXJhbSB0YXJnZXQgVGFyZ2V0LlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGZyb3plbih0YXJnZXQ6IEZ1bmN0aW9uKTogdm9pZCB7XHJcbiAgICBPYmplY3QuZnJlZXplKHRhcmdldCk7XHJcbiAgICBPYmplY3QuZnJlZXplKHRhcmdldC5wcm90b3R5cGUpO1xyXG59XHJcbiIsImltcG9ydCB7IEZ1bmN0aW9uIH0gZnJvbSAnQG1haW4vZnVuY3Rpb24vaW5kZXgnO1xyXG5pbXBvcnQgeyBGdW5jdGlvbkxpa2UgfSBmcm9tICdAbWFpbi9mdW5jdGlvbi9pbmRleCc7XHJcbmltcG9ydCB7IEZ1bmN0aW9uT2YgfSBmcm9tICdAbWFpbi9mdW5jdGlvbi9pbmRleCc7XHJcbmltcG9ydCB7IGZpbmFsIH0gZnJvbSAnQG1haW4vaW5kZXgnO1xyXG5pbXBvcnQgeyBmcm96ZW4gfSBmcm9tICdAbWFpbi9pbmRleCc7XHJcblxyXG4vKipcclxuICogRnVuY3Rpb24gdGhhdCBjYWNoZXMgcmVzdWx0cy5cclxuICovXHJcbkBmaW5hbFxyXG5AZnJvemVuXHJcbmV4cG9ydCBjbGFzcyBDYWNoZWQ8WCwgWT4gaW1wbGVtZW50cyBGdW5jdGlvbjxYLCBZPiB7XHJcbiAgICAvKipcclxuICAgICAqIEZ1bmN0aW9uIGNhbGxiYWNrLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGZ1bmM6IEZ1bmN0aW9uPFgsIFk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVzdWx0cyBtYXAuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgY2FjaGU6IE1hcDxYLCBZPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEN0b3IuXHJcbiAgICAgKiBAcGFyYW0gZnVuYyBGdW5jdGlvbiBjYWxsYmFjay5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoZnVuYzogRnVuY3Rpb25MaWtlPFgsIFk+KSB7XHJcbiAgICAgICAgdGhpcy5mdW5jID0gbmV3IEZ1bmN0aW9uT2YoZnVuYyk7XHJcbiAgICAgICAgdGhpcy5jYWNoZSA9IG5ldyBNYXAoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFR5cGUgZGV0ZXJtaW5hbnQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpc0Z1bmN0aW9uKCk6IHRydWUge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQXBwbHkgdGhlIGZ1bmN0aW9uIHRvIHRoZSBpbnB1dC5cclxuICAgICAqIEBwYXJhbSBpbnB1dCBJbnB1dC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGFwcGx5KGlucHV0OiBYKTogWSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhY2hlLmhhcyhpbnB1dCkpIHtcclxuICAgICAgICAgICAgdGhpcy5jYWNoZS5zZXQoaW5wdXQsIHRoaXMuZnVuYy5hcHBseShpbnB1dCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIDxZPnRoaXMuY2FjaGUuZ2V0KGlucHV0KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBGdW5jdGlvbiB9IGZyb20gJ0BtYWluL2Z1bmN0aW9uL2luZGV4JztcclxuaW1wb3J0IHsgRnVuY3Rpb25MaWtlIH0gZnJvbSAnQG1haW4vZnVuY3Rpb24vaW5kZXgnO1xyXG5pbXBvcnQgeyBGdW5jdGlvbk9mIH0gZnJvbSAnQG1haW4vZnVuY3Rpb24vaW5kZXgnO1xyXG5pbXBvcnQgeyBmaW5hbCB9IGZyb20gJ0BtYWluL2luZGV4JztcclxuaW1wb3J0IHsgZnJvemVuIH0gZnJvbSAnQG1haW4vaW5kZXgnO1xyXG5cclxuLyoqXHJcbiAqIEZ1bmN0aW9uIHRoYXQgZXhlY3V0ZXMgY29uZGl0aW9uYWxseS5cclxuICovXHJcbkBmaW5hbFxyXG5AZnJvemVuXHJcbmV4cG9ydCBjbGFzcyBDb25kaXRpb25lZDxYPiBpbXBsZW1lbnRzIEZ1bmN0aW9uPFgsIHZvaWQ+IHtcclxuICAgIC8qKlxyXG4gICAgICogQ29uZGl0aW9uLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvbmRpdGlvbjogRnVuY3Rpb248WCwgYm9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGdW5jdGlvbi5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBmdW5jOiBGdW5jdGlvbjxYLCB2b2lkPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEN0b3IuXHJcbiAgICAgKiBAcGFyYW0gY29uZGl0aW9uIENvbmRpdGlvbi5cclxuICAgICAqIEBwYXJhbSBmdW5jIEZ1bmN0aW9uLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25kaXRpb246IEZ1bmN0aW9uTGlrZTxYLCBib29sZWFuPiwgZnVuYzogRnVuY3Rpb25MaWtlPFgsIHZvaWQ+KSB7XHJcbiAgICAgICAgdGhpcy5jb25kaXRpb24gPSBuZXcgRnVuY3Rpb25PZihjb25kaXRpb24pO1xyXG4gICAgICAgIHRoaXMuZnVuYyA9IG5ldyBGdW5jdGlvbk9mKGZ1bmMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVHlwZSBkZXRlcm1pbmFudC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGlzRnVuY3Rpb24oKTogdHJ1ZSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBcHBseSB0aGUgZnVuY3Rpb24gdG8gdGhlIGlucHV0LlxyXG4gICAgICogQHBhcmFtIGlucHV0IElucHV0LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXBwbHkoaW5wdXQ6IFgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5jb25kaXRpb24uYXBwbHkoaW5wdXQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZnVuYy5hcHBseShpbnB1dCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEZ1bmN0aW9uIH0gZnJvbSAnQG1haW4vZnVuY3Rpb24vaW5kZXgnO1xyXG5pbXBvcnQgeyBGdW5jdGlvbkxpa2UgfSBmcm9tICdAbWFpbi9mdW5jdGlvbi9pbmRleCc7XHJcbmltcG9ydCB7IGZpbmFsIH0gZnJvbSAnQG1haW4vaW5kZXgnO1xyXG5pbXBvcnQgeyBmcm96ZW4gfSBmcm9tICdAbWFpbi9pbmRleCc7XHJcbmltcG9ydCB7IENhY2hlZCB9IGZyb20gJ0BtYWluL3NjYWxhci9pbmRleCc7XHJcbmltcG9ydCB7IFNjYWxhciB9IGZyb20gJ0BtYWluL3NjYWxhci9pbmRleCc7XHJcblxyXG4vKipcclxuICogRnVuY3Rpb24gb2Ygc2V2ZXJhbCBwb3NzaWJsZSB0eXBlcy5cclxuICovXHJcbkBmaW5hbFxyXG5AZnJvemVuXHJcbmV4cG9ydCBjbGFzcyBGdW5jdGlvbk9mPFgsIFk+IGltcGxlbWVudHMgRnVuY3Rpb248WCwgWT4ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBGdW5jdGlvbiBjYWxsYmFjay5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBmdW5jOiBTY2FsYXI8KGlucHV0OiBYKSA9PiBZPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEN0b3IuXHJcbiAgICAgKiBAcGFyYW0gZnVuYyBGdW5jdGlvbiBjYWxsYmFjay5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoZnVuYzogRnVuY3Rpb25MaWtlPFgsIFk+KSB7XHJcbiAgICAgICAgdGhpcy5mdW5jID0gbmV3IENhY2hlZCgoKTogKChpbnB1dDogWCkgPT4gWSkgPT5cclxuICAgICAgICAgICAgICAgIHR5cGVvZiBmdW5jID09PSAnZnVuY3Rpb24nID9cclxuICAgICAgICAgICAgICAgIGZ1bmMgOlxyXG4gICAgICAgICAgICAgICAgKGlucHV0OiBYKTogWSA9PiBmdW5jLmFwcGx5KGlucHV0KVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUeXBlIGRldGVybWluYW50LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaXNGdW5jdGlvbigpOiB0cnVlIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFwcGx5IHRoZSBmdW5jdGlvbiB0byB0aGUgaW5wdXQuXHJcbiAgICAgKiBAcGFyYW0gaW5wdXQgSW5wdXQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhcHBseShpbnB1dDogWCk6IFkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZ1bmMudmFsdWUoKShpbnB1dCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgZmluYWwgfSBmcm9tICdAbWFpbi9pbmRleCc7XHJcbmltcG9ydCB7IGZyb3plbiB9IGZyb20gJ0BtYWluL2luZGV4JztcclxuaW1wb3J0IHsgSGFzVHJ1ZVJlc3VsdCB9IGZyb20gJ0BtYWluL3NjYWxhci9pbmRleCc7XHJcbmltcG9ydCB7IFNjYWxhciB9IGZyb20gJ0BtYWluL3NjYWxhci9pbmRleCc7XHJcblxyXG4vKipcclxuICogRGV0ZXJtaW5lcyBpZiB2YXJpYWJsZSBpcyBvZiB0eXBlIHtAbGluayBGdW5jdGlvbn0uXHJcbiAqL1xyXG5AZmluYWxcclxuQGZyb3plblxyXG5leHBvcnQgY2xhc3MgSXNGdW5jdGlvbjxUPiBpbXBsZW1lbnRzIFNjYWxhcjxib29sZWFuPiB7XHJcbiAgICAvKipcclxuICAgICAqIENvbmRpdGlvbi5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBpc0Z1bmN0aW9uOiBTY2FsYXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDdG9yLlxyXG4gICAgICogQHBhcmFtIG1heWJlRnVuYyBWYXJpYWJsZSB0byBjaGVjay5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobWF5YmVGdW5jOiBUKSB7XHJcbiAgICAgICAgdGhpcy5pc0Z1bmN0aW9uID0gbmV3IEhhc1RydWVSZXN1bHQobWF5YmVGdW5jLCAnaXNGdW5jdGlvbicpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVHlwZSBkZXRlcm1pbmFudC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGlzU2NhbGFyKCk6IHRydWUge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHZhbHVlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzRnVuY3Rpb24udmFsdWUoKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBGdW5jdGlvbiB9IGZyb20gJ0BtYWluL2Z1bmN0aW9uL2luZGV4JztcclxuaW1wb3J0IHsgZmluYWwgfSBmcm9tICdAbWFpbi9pbmRleCc7XHJcbmltcG9ydCB7IGZyb3plbiB9IGZyb20gJ0BtYWluL2luZGV4JztcclxuaW1wb3J0IHsgQm9vbExpa2UgfSBmcm9tICdAbWFpbi9zY2FsYXIvaW5kZXgnO1xyXG5pbXBvcnQgeyBCb29sT2YgfSBmcm9tICdAbWFpbi9zY2FsYXIvaW5kZXgnO1xyXG5cclxuLyoqXHJcbiAqIEZ1bmN0aW9uIHRoYXQgY2FjaGVzIHJlc3VsdHMuXHJcbiAqL1xyXG5AZmluYWxcclxuQGZyb3plblxyXG5leHBvcnQgY2xhc3MgSXNUcnVlPFQ+IGltcGxlbWVudHMgRnVuY3Rpb248Qm9vbExpa2U8VD4sIGJvb2xlYW4+IHtcclxuICAgIC8qKlxyXG4gICAgICogVHlwZSBkZXRlcm1pbmFudC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGlzRnVuY3Rpb24oKTogdHJ1ZSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBcHBseSB0aGUgZnVuY3Rpb24gdG8gdGhlIGlucHV0LlxyXG4gICAgICogQHBhcmFtIGlucHV0IElucHV0LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXBwbHkoaW5wdXQ6IEJvb2xMaWtlPFQ+KTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBCb29sT2YoaW5wdXQpLnZhbHVlKCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRnVuY3Rpb24gfSBmcm9tICdAbWFpbi9mdW5jdGlvbi9pbmRleCc7XHJcbmltcG9ydCB7IEZ1bmN0aW9uT2YgfSBmcm9tICdAbWFpbi9mdW5jdGlvbi9pbmRleCc7XHJcbmltcG9ydCB7IE51bGxhcnlGdW5jdGlvbiB9IGZyb20gJ0BtYWluL2Z1bmN0aW9uL2luZGV4JztcclxuaW1wb3J0IHsgZmluYWwgfSBmcm9tICdAbWFpbi9pbmRleCc7XHJcbmltcG9ydCB7IGZyb3plbiB9IGZyb20gJ0BtYWluL2luZGV4JztcclxuXHJcbi8qKlxyXG4gKiBGdW5jdGlvbiB3aXRob3V0IGFyZ3VtZW50cy5cclxuICovXHJcbkBmaW5hbFxyXG5AZnJvemVuXHJcbmV4cG9ydCBjbGFzcyBOdWxsYXJ5RnVuY3Rpb25PZjxZPiBpbXBsZW1lbnRzIE51bGxhcnlGdW5jdGlvbjxZPiB7XHJcbiAgICAvKipcclxuICAgICAqIEZ1bmN0aW9uIGNhbGxiYWNrLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGZ1bmM6IEZ1bmN0aW9uPHVuZGVmaW5lZCwgWT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDdG9yLlxyXG4gICAgICogQHBhcmFtIGZ1bmMgRnVuY3Rpb24gY2FsbGJhY2suXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGZ1bmM6ICgpID0+IFkpIHtcclxuICAgICAgICB0aGlzLmZ1bmMgPSBuZXcgRnVuY3Rpb25PZjx1bmRlZmluZWQsIFk+KGZ1bmMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVHlwZSBkZXRlcm1pbmFudC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGlzRnVuY3Rpb24oKTogdHJ1ZSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBcHBseSB0aGUgZnVuY3Rpb24gdG8gdGhlIGlucHV0LlxyXG4gICAgICogQHBhcmFtIGlucHV0IElucHV0LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXBwbHkoaW5wdXQ/OiB1bmRlZmluZWQpOiBZIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5mdW5jLmFwcGx5KGlucHV0KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb25kaXRpb25lZCB9IGZyb20gJ0BtYWluL2Z1bmN0aW9uL2luZGV4JztcclxuaW1wb3J0IHsgRnVuY3Rpb24gfSBmcm9tICdAbWFpbi9mdW5jdGlvbi9pbmRleCc7XHJcbmltcG9ydCB7IEZ1bmN0aW9uTGlrZSB9IGZyb20gJ0BtYWluL2Z1bmN0aW9uL2luZGV4JztcclxuaW1wb3J0IHsgZmluYWwgfSBmcm9tICdAbWFpbi9pbmRleCc7XHJcbmltcG9ydCB7IGZyb3plbiB9IGZyb20gJ0BtYWluL2luZGV4JztcclxuaW1wb3J0IHsgSXNOb3RCbGFuayB9IGZyb20gJ0BtYWluL3NjYWxhci9pbmRleCc7XHJcblxyXG4vKipcclxuICogRnVuY3Rpb24gdGhhdCBleGVjdXRlcyB3aGVuIGlucHV0IGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZC5cclxuICovXHJcbkBmaW5hbFxyXG5AZnJvemVuXHJcbmV4cG9ydCBjbGFzcyBTYWZlTmF2aWdhdGlvbjxYPiBpbXBsZW1lbnRzIEZ1bmN0aW9uPFgsIHZvaWQ+IHtcclxuICAgIC8qKlxyXG4gICAgICogRnVuY3Rpb24uXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgZnVuYzogRnVuY3Rpb248WCwgdm9pZD47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDdG9yLlxyXG4gICAgICogQHBhcmFtIGZ1bmMgRnVuY3Rpb24uXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGZ1bmM6IEZ1bmN0aW9uTGlrZTxYLCB2b2lkPikge1xyXG4gICAgICAgIHRoaXMuZnVuYyA9IG5ldyBDb25kaXRpb25lZChcclxuICAgICAgICAgICAgKGlucHV0OiBYKTogYm9vbGVhbiA9PiBuZXcgSXNOb3RCbGFuayhpbnB1dCkudmFsdWUoKSxcclxuICAgICAgICAgICAgZnVuY1xyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUeXBlIGRldGVybWluYW50LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaXNGdW5jdGlvbigpOiB0cnVlIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFwcGx5IHRoZSBmdW5jdGlvbiB0byB0aGUgaW5wdXQuXHJcbiAgICAgKiBAcGFyYW0gaW5wdXQgSW5wdXQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhcHBseShpbnB1dDogWCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZnVuYy5hcHBseShpbnB1dCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRnVuY3Rpb24gfSBmcm9tICdAbWFpbi9mdW5jdGlvbi9pbmRleCc7XHJcbmltcG9ydCB7IEZ1bmN0aW9uTGlrZSB9IGZyb20gJ0BtYWluL2Z1bmN0aW9uL2luZGV4JztcclxuaW1wb3J0IHsgRnVuY3Rpb25PZiB9IGZyb20gJ0BtYWluL2Z1bmN0aW9uL2luZGV4JztcclxuaW1wb3J0IHsgVG9WYWx1ZSB9IGZyb20gJ0BtYWluL2Z1bmN0aW9uL2luZGV4JztcclxuaW1wb3J0IHsgZmluYWwgfSBmcm9tICdAbWFpbi9pbmRleCc7XHJcbmltcG9ydCB7IGZyb3plbiB9IGZyb20gJ0BtYWluL2luZGV4JztcclxuaW1wb3J0IHsgQm9vbExpa2UgfSBmcm9tICdAbWFpbi9zY2FsYXIvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb25kaXRpb25Db25zZXF1ZW50TGlrZVBhaXIgfSBmcm9tICdAbWFpbi9zY2FsYXIvaW5kZXgnO1xyXG5pbXBvcnQgeyBTY2FsYXJMaWtlIH0gZnJvbSAnQG1haW4vc2NhbGFyL2luZGV4JztcclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBib29sZWFuLWxpa2UgdHlwZXMgdG8gYm9vbGVhbi5cclxuICovXHJcbkBmaW5hbFxyXG5AZnJvemVuXHJcbmV4cG9ydCBjbGFzcyBUb0Jvb2w8VD4gaW1wbGVtZW50cyBGdW5jdGlvbjxCb29sTGlrZTxUPiwgYm9vbGVhbj4ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBGdW5jdGlvbiB0byBjb252ZXJ0IHNjYWxhci1saWtlIGJvb2xlYW5zIHRvIGJvb2xlYW4gcHJpbWl0aXZlcy5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSB0b1ZhbHVlOiBGdW5jdGlvbjxTY2FsYXJMaWtlPGJvb2xlYW4+LCBib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEN0b3IuXHJcbiAgICAgKiBAcGFyYW0gdG9WYWx1ZSBGdW5jdGlvbiB0byBjb252ZXJ0IHNjYWxhci1saWtlIGJvb2xlYW5zIHRvIGJvb2xlYW4gcHJpbWl0aXZlcy5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IodG9WYWx1ZTogRnVuY3Rpb25MaWtlPFNjYWxhckxpa2U8Ym9vbGVhbj4sIGJvb2xlYW4+ID0gbmV3IFRvVmFsdWUoKSkge1xyXG4gICAgICAgIHRoaXMudG9WYWx1ZSA9IG5ldyBGdW5jdGlvbk9mKHRvVmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVHlwZSBkZXRlcm1pbmFudC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGlzRnVuY3Rpb24oKTogdHJ1ZSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBcHBseSB0aGUgZnVuY3Rpb24gdG8gdGhlIGlucHV0LlxyXG4gICAgICogQHBhcmFtIGlucHV0IElucHV0LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXBwbHkoaW5wdXQ6IEJvb2xMaWtlPFQ+KTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3QgaXNDb25kaXRpb25Db25zZXF1ZW50TGlrZVBhaXI6IGJvb2xlYW4gPSAoQXJyYXkuaXNBcnJheShpbnB1dCkgJiYgaW5wdXQubGVuZ3RoID09PSAyKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9WYWx1ZS5hcHBseShcclxuICAgICAgICAgICAgaXNDb25kaXRpb25Db25zZXF1ZW50TGlrZVBhaXIgP1xyXG4gICAgICAgICAgICAoPENvbmRpdGlvbkNvbnNlcXVlbnRMaWtlUGFpcjxUPj5pbnB1dClbMF0gOlxyXG4gICAgICAgICAgICA8U2NhbGFyTGlrZTxib29sZWFuPj5pbnB1dFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRnVuY3Rpb24gfSBmcm9tICdAbWFpbi9mdW5jdGlvbi9pbmRleCc7XHJcbmltcG9ydCB7IGZpbmFsIH0gZnJvbSAnQG1haW4vaW5kZXgnO1xyXG5pbXBvcnQgeyBmcm96ZW4gfSBmcm9tICdAbWFpbi9pbmRleCc7XHJcbmltcG9ydCB7IENvbmRpdGlvbkNvbnNlcXVlbnRMaWtlUGFpciB9IGZyb20gJ0BtYWluL3NjYWxhci9pbmRleCc7XHJcbmltcG9ydCB7IENvbmRpdGlvbkNvbnNlcXVlbnRQYWlyIH0gZnJvbSAnQG1haW4vc2NhbGFyL2luZGV4JztcclxuaW1wb3J0IHsgU2NhbGFyT2YgfSBmcm9tICdAbWFpbi9zY2FsYXIvaW5kZXgnO1xyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHtAbGluayBDb25kaXRpb25Db25zZXF1ZW50TGlrZVBhaXJ9IHRvIHtAbGluayBUb0NvbmRpdGlvbkNvbnNlcXVlbnRQYWlyfS5cclxuICovXHJcbkBmaW5hbFxyXG5AZnJvemVuXHJcbmV4cG9ydCBjbGFzcyBUb0NvbmRpdGlvbkNvbnNlcXVlbnRQYWlyPFQ+IGltcGxlbWVudHMgRnVuY3Rpb248Q29uZGl0aW9uQ29uc2VxdWVudExpa2VQYWlyPFQ+LCBDb25kaXRpb25Db25zZXF1ZW50UGFpcjxUPj4ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUeXBlIGRldGVybWluYW50LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaXNGdW5jdGlvbigpOiB0cnVlIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFwcGx5IHRoZSBmdW5jdGlvbiB0byB0aGUgaW5wdXQuXHJcbiAgICAgKiBAcGFyYW0gaW5wdXQgSW5wdXQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhcHBseShpbnB1dDogQ29uZGl0aW9uQ29uc2VxdWVudExpa2VQYWlyPFQ+KTogQ29uZGl0aW9uQ29uc2VxdWVudFBhaXI8VD4ge1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIG5ldyBTY2FsYXJPZihpbnB1dFswXSksXHJcbiAgICAgICAgICAgIG5ldyBTY2FsYXJPZihpbnB1dFsxXSlcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEZ1bmN0aW9uIH0gZnJvbSAnQG1haW4vZnVuY3Rpb24vaW5kZXgnO1xyXG5pbXBvcnQgeyBJc0Z1bmN0aW9uIH0gZnJvbSAnQG1haW4vZnVuY3Rpb24vaW5kZXgnO1xyXG5pbXBvcnQgeyBmaW5hbCB9IGZyb20gJ0BtYWluL2luZGV4JztcclxuaW1wb3J0IHsgZnJvemVuIH0gZnJvbSAnQG1haW4vaW5kZXgnO1xyXG5pbXBvcnQgeyBJc1NjYWxhciB9IGZyb20gJ0BtYWluL3NjYWxhci9pbmRleCc7XHJcbmltcG9ydCB7IFNjYWxhciB9IGZyb20gJ0BtYWluL3NjYWxhci9pbmRleCc7XHJcbmltcG9ydCB7IFNjYWxhckxpa2UgfSBmcm9tICdAbWFpbi9zY2FsYXIvaW5kZXgnO1xyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHNjYWxhci1saWtlIHR5cGVzIHRvIHRoZWlyIHJlc3BlY3RpdmUgdmFsdWVzLlxyXG4gKi9cclxuQGZpbmFsXHJcbkBmcm96ZW5cclxuZXhwb3J0IGNsYXNzIFRvVmFsdWU8VD4gaW1wbGVtZW50cyBGdW5jdGlvbjxTY2FsYXJMaWtlPFQ+LCBUPiB7XHJcbiAgICAvKipcclxuICAgICAqIFR5cGUgZGV0ZXJtaW5hbnQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpc0Z1bmN0aW9uKCk6IHRydWUge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQXBwbHkgdGhlIGZ1bmN0aW9uIHRvIHRoZSBpbnB1dC5cclxuICAgICAqIEBwYXJhbSBpbnB1dCBJbnB1dC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGFwcGx5KGlucHV0OiBTY2FsYXJMaWtlPFQ+KTogVCB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICByZXR1cm4gaW5wdXQoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKG5ldyBJc1NjYWxhcihpbnB1dCkudmFsdWUoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gKDxTY2FsYXI8VD4+aW5wdXQpLnZhbHVlKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChuZXcgSXNGdW5jdGlvbihpbnB1dCkudmFsdWUoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gKDxGdW5jdGlvbjx1bmRlZmluZWQsIFQ+PmlucHV0KS5hcHBseSh1bmRlZmluZWQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8VD5pbnB1dDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIEluZGV4XHJcbiAqL1xyXG5leHBvcnQgKiBmcm9tICcuL0NhY2hlZCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vQ29uZGl0aW9uZWQnO1xyXG5leHBvcnQgKiBmcm9tICcuL0Z1bmN0aW9uJztcclxuZXhwb3J0ICogZnJvbSAnLi9GdW5jdGlvbkxpa2UnO1xyXG5leHBvcnQgKiBmcm9tICcuL0Z1bmN0aW9uT2YnO1xyXG5leHBvcnQgKiBmcm9tICcuL0lzRnVuY3Rpb24nO1xyXG5leHBvcnQgKiBmcm9tICcuL0lzVHJ1ZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vTnVsbGFyeUZ1bmN0aW9uJztcclxuZXhwb3J0ICogZnJvbSAnLi9OdWxsYXJ5RnVuY3Rpb25PZic7XHJcbmV4cG9ydCAqIGZyb20gJy4vU2FmZU5hdmlnYXRpb24nO1xyXG5leHBvcnQgKiBmcm9tICcuL1RvQm9vbCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vVG9Db25kaXRpb25Db25zZXF1ZW50UGFpcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vVG9WYWx1ZSc7XHJcbiIsIi8qKlxyXG4gKiBNYWluIGluZGV4LlxyXG4gKi9cclxuZXhwb3J0ICogZnJvbSAnLi9maW5hbCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZnJvemVuJztcclxuZXhwb3J0ICogZnJvbSAnLi9JbGxlZ2FsSW5oZXJpdGFuY2VFcnJvcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vSWxsZWdhbFN0YXRlRXJyb3InO1xyXG5leHBvcnQgKiBmcm9tICcuL3NlYWxlZCc7XHJcbiIsImltcG9ydCB7IFRvQm9vbCB9IGZyb20gJ0BtYWluL2Z1bmN0aW9uL2luZGV4JztcclxuaW1wb3J0IHsgZmluYWwgfSBmcm9tICdAbWFpbi9pbmRleCc7XHJcbmltcG9ydCB7IGZyb3plbiB9IGZyb20gJ0BtYWluL2luZGV4JztcclxuaW1wb3J0IHsgTWFwcGVkIH0gZnJvbSAnQG1haW4vaXRlcmFibGUvaW5kZXgnO1xyXG5pbXBvcnQgeyBTY2FsYXJMaWtlIH0gZnJvbSAnQG1haW4vc2NhbGFyL2luZGV4JztcclxuXHJcbi8qKlxyXG4gKiBJdGVyYWJsZSBvZiBsb2dpY2FsIGNvbmRpdGlvbnMuXHJcbiAqL1xyXG5AZmluYWxcclxuQGZyb3plblxyXG5leHBvcnQgY2xhc3MgQ29uZGl0aW9ucyBpbXBsZW1lbnRzIEl0ZXJhYmxlPGJvb2xlYW4+IHtcclxuICAgIC8qKlxyXG4gICAgICogSXRlcmFibGUuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgY29uZGl0aW9uczogSXRlcmFibGU8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDdG9yLlxyXG4gICAgICogQHBhcmFtIGNvbmRpdGlvbnMgQ29uZGl0aW9ucy5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoY29uZGl0aW9uczogSXRlcmFibGU8U2NhbGFyTGlrZTxib29sZWFuPj4pIHtcclxuICAgICAgICB0aGlzLmNvbmRpdGlvbnMgPSBuZXcgTWFwcGVkKGNvbmRpdGlvbnMsIG5ldyBUb0Jvb2woKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJdGVyYXRvci5cclxuICAgICAqL1xyXG4gICAgcHVibGljIFtTeW1ib2wuaXRlcmF0b3JdKCk6IEl0ZXJhdG9yPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb25kaXRpb25zW1N5bWJvbC5pdGVyYXRvcl0oKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBmaW5hbCB9IGZyb20gJ0BtYWluL2luZGV4JztcclxuaW1wb3J0IHsgZnJvemVuIH0gZnJvbSAnQG1haW4vaW5kZXgnO1xyXG5pbXBvcnQgeyBTY2FsYXIgfSBmcm9tICdAbWFpbi9zY2FsYXIvaW5kZXgnO1xyXG5cclxuLyoqXHJcbiAqIEl0ZXJhYmxlcyBlcXVhbHMuXHJcbiAqL1xyXG5AZmluYWxcclxuQGZyb3plblxyXG5leHBvcnQgY2xhc3MgRXF1YWxzPFQ+IGltcGxlbWVudHMgU2NhbGFyPGJvb2xlYW4+IHtcclxuICAgIC8qKlxyXG4gICAgICogU291cmNlIHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHNvdXJjZTogSXRlcmFibGU8VD47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb21wYXJlZCB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBjb21wYXJlZDogSXRlcmFibGU8VD47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDdG9yLlxyXG4gICAgICogQHBhcmFtIHNvdXJjZSBWYWx1ZS5cclxuICAgICAqIEBwYXJhbSBjb21wYXJlZCBDb21wYXJlZC5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3Ioc291cmNlOiBJdGVyYWJsZTxUPiwgY29tcGFyZWQ6IEl0ZXJhYmxlPFQ+KSB7XHJcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XHJcbiAgICAgICAgdGhpcy5jb21wYXJlZCA9IGNvbXBhcmVkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVHlwZSBkZXRlcm1pbmFudC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGlzU2NhbGFyKCk6IHRydWUge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB2YWx1ZSgpOiBib29sZWFuIHtcclxuICAgICAgICBsZXQgcmVzdWx0OiBib29sZWFuID0gdHJ1ZTtcclxuICAgICAgICBjb25zdCBzb3VyY2VJdGVyYXRvcjogSXRlcmF0b3I8VD4gPSB0aGlzLnNvdXJjZVtTeW1ib2wuaXRlcmF0b3JdKCk7XHJcbiAgICAgICAgY29uc3QgY29tcGFyZWRJdGVyYXRvcjogSXRlcmF0b3I8VD4gPSB0aGlzLmNvbXBhcmVkW1N5bWJvbC5pdGVyYXRvcl0oKTtcclxuXHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICBjb25zdCBzb3VyY2VOZXh0OiBJdGVyYXRvclJlc3VsdDxUPiA9IHNvdXJjZUl0ZXJhdG9yLm5leHQoKTtcclxuICAgICAgICAgICAgY29uc3QgY29tcGFyZWROZXh0OiBJdGVyYXRvclJlc3VsdDxUPiA9IGNvbXBhcmVkSXRlcmF0b3IubmV4dCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNvdXJjZU5leHQuZG9uZSA9PT0gY29tcGFyZWROZXh0LmRvbmUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzb3VyY2VOZXh0LnZhbHVlICE9PSBjb21wYXJlZE5leHQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNvdXJjZU5leHQuZG9uZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gd2hpbGUgKHJlc3VsdCk7XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRnVuY3Rpb24gfSBmcm9tICdAbWFpbi9mdW5jdGlvbi9pbmRleCc7XHJcbmltcG9ydCB7IEZ1bmN0aW9uTGlrZSB9IGZyb20gJ0BtYWluL2Z1bmN0aW9uL2luZGV4JztcclxuaW1wb3J0IHsgRnVuY3Rpb25PZiB9IGZyb20gJ0BtYWluL2Z1bmN0aW9uL2luZGV4JztcclxuaW1wb3J0IHsgZmluYWwgfSBmcm9tICdAbWFpbi9pbmRleCc7XHJcbmltcG9ydCB7IGZyb3plbiB9IGZyb20gJ0BtYWluL2luZGV4JztcclxuXHJcbi8qKlxyXG4gKiBGaWx0ZXJlZCBpdGVyYWJsZS5cclxuICovXHJcbkBmaW5hbFxyXG5AZnJvemVuXHJcbmV4cG9ydCBjbGFzcyBGaWx0ZXJlZDxUPiBpbXBsZW1lbnRzIEl0ZXJhYmxlPFQ+IHtcclxuICAgIC8qKlxyXG4gICAgICogSXRlcmFibGUuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgaXRlcmFibGU6IEl0ZXJhYmxlPFQ+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRnVuY3Rpb24uXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgZnVuYzogRnVuY3Rpb248VCwgYm9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDdG9yLlxyXG4gICAgICogQHBhcmFtIGl0ZXJhYmxlIEl0ZXJhYmxlLlxyXG4gICAgICogQHBhcmFtIGZ1bmMgRnVuY3Rpb24uXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGl0ZXJhYmxlOiBJdGVyYWJsZTxUPiwgZnVuYzogRnVuY3Rpb25MaWtlPFQsIGJvb2xlYW4+KSB7XHJcbiAgICAgICAgdGhpcy5pdGVyYWJsZSA9IGl0ZXJhYmxlO1xyXG4gICAgICAgIHRoaXMuZnVuYyA9IG5ldyBGdW5jdGlvbk9mKGZ1bmMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSXRlcmF0b3IuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyAqW1N5bWJvbC5pdGVyYXRvcl0oKTogSXRlcmF0b3I8VD4ge1xyXG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLml0ZXJhYmxlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZ1bmMuYXBwbHkoaXRlbSkpIHtcclxuICAgICAgICAgICAgICAgIHlpZWxkIGl0ZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgZmluYWwgfSBmcm9tICdAbWFpbi9pbmRleCc7XHJcbmltcG9ydCB7IGZyb3plbiB9IGZyb20gJ0BtYWluL2luZGV4JztcclxuaW1wb3J0IHsgTGltaXRlZCB9IGZyb20gJ0BtYWluL2l0ZXJhYmxlL2luZGV4JztcclxuaW1wb3J0IHsgU2NhbGFyIH0gZnJvbSAnQG1haW4vc2NhbGFyL2luZGV4JztcclxuXHJcbi8qKlxyXG4gKiBGaXJzdCBpdGVtIG9mIGl0ZXJhYmxlLlxyXG4gKi9cclxuQGZpbmFsXHJcbkBmcm96ZW5cclxuZXhwb3J0IGNsYXNzIEZpcnN0PFQ+IGltcGxlbWVudHMgU2NhbGFyPEl0ZXJhdG9yUmVzdWx0PFQ+PiB7XHJcbiAgICAvKipcclxuICAgICAqIFNvdXJjZSB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBzb3VyY2U6IEl0ZXJhYmxlPFQ+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3Rvci5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBWYWx1ZS5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IodmFsdWU6IEl0ZXJhYmxlPFQ+KSB7XHJcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBuZXcgTGltaXRlZCh2YWx1ZSwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUeXBlIGRldGVybWluYW50LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaXNTY2FsYXIoKTogdHJ1ZSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHZhbHVlKCk6IEl0ZXJhdG9yUmVzdWx0PFQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zb3VyY2VbU3ltYm9sLml0ZXJhdG9yXSgpXHJcbiAgICAgICAgICAgIC5uZXh0KCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgZmluYWwgfSBmcm9tICdAbWFpbi9pbmRleCc7XHJcbmltcG9ydCB7IGZyb3plbiB9IGZyb20gJ0BtYWluL2luZGV4JztcclxuaW1wb3J0IHsgU2NhbGFyIH0gZnJvbSAnQG1haW4vc2NhbGFyL2luZGV4JztcclxuXHJcbi8qKlxyXG4gKiBMZW5ndGggb2YgaXRlcmFibGUuXHJcbiAqL1xyXG5AZmluYWxcclxuQGZyb3plblxyXG5leHBvcnQgY2xhc3MgTGVuZ3RoT2Y8VD4gaW1wbGVtZW50cyBTY2FsYXI8bnVtYmVyPiB7XHJcbiAgICAvKipcclxuICAgICAqIFNvdXJjZSB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBzb3VyY2U6IEl0ZXJhYmxlPFQ+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3Rvci5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBWYWx1ZS5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IodmFsdWU6IEl0ZXJhYmxlPFQ+KSB7XHJcbiAgICAgICAgdGhpcy5zb3VyY2UgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFR5cGUgZGV0ZXJtaW5hbnQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpc1NjYWxhcigpOiB0cnVlIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdmFsdWUoKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgbGVuZ3RoOiBudW1iZXIgPSAwO1xyXG5cclxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dmFyaWFibGUtbmFtZVxyXG4gICAgICAgIGZvciAoY29uc3QgX2l0ZW0gb2YgdGhpcy5zb3VyY2UpIHtcclxuICAgICAgICAgICAgbGVuZ3RoICs9IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbGVuZ3RoO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGZpbmFsIH0gZnJvbSAnQG1haW4vaW5kZXgnO1xyXG5pbXBvcnQgeyBmcm96ZW4gfSBmcm9tICdAbWFpbi9pbmRleCc7XHJcbmltcG9ydCB7IFNjYWxhciB9IGZyb20gJ0BtYWluL3NjYWxhci9pbmRleCc7XHJcbmltcG9ydCB7IFNjYWxhckxpa2UgfSBmcm9tICdAbWFpbi9zY2FsYXIvaW5kZXgnO1xyXG5pbXBvcnQgeyBTY2FsYXJPZiB9IGZyb20gJ0BtYWluL3NjYWxhci9pbmRleCc7XHJcblxyXG4vKipcclxuICogTGltaXRlZCBpdGVyYWJsZS5cclxuICovXHJcbkBmaW5hbFxyXG5AZnJvemVuXHJcbmV4cG9ydCBjbGFzcyBMaW1pdGVkPFQ+IGltcGxlbWVudHMgSXRlcmFibGU8VD4ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBJdGVyYWJsZS5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBpdGVyYWJsZTogSXRlcmFibGU8VD47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGdW5jdGlvbi5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBsaW1pdDogU2NhbGFyPG51bWJlcj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDdG9yLlxyXG4gICAgICogQHBhcmFtIGl0ZXJhYmxlIEl0ZXJhYmxlLlxyXG4gICAgICogQHBhcmFtIG51bWJlciBMaW1pdC5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoaXRlcmFibGU6IEl0ZXJhYmxlPFQ+LCBsaW1pdDogU2NhbGFyTGlrZTxudW1iZXI+KSB7XHJcbiAgICAgICAgdGhpcy5pdGVyYWJsZSA9IGl0ZXJhYmxlO1xyXG4gICAgICAgIHRoaXMubGltaXQgPSBuZXcgU2NhbGFyT2YobGltaXQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSXRlcmF0b3IuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyAqW1N5bWJvbC5pdGVyYXRvcl0oKTogSXRlcmF0b3I8VD4ge1xyXG4gICAgICAgIGxldCBjb3VudDogbnVtYmVyID0gMDtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMuaXRlcmFibGUpIHtcclxuICAgICAgICAgICAgaWYgKGNvdW50ID49IHRoaXMubGltaXQudmFsdWUoKSkge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgeWllbGQgaXRlbTtcclxuICAgICAgICAgICAgY291bnQgKz0gMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRnVuY3Rpb24gfSBmcm9tICdAbWFpbi9mdW5jdGlvbi9pbmRleCc7XHJcbmltcG9ydCB7IEZ1bmN0aW9uTGlrZSB9IGZyb20gJ0BtYWluL2Z1bmN0aW9uL2luZGV4JztcclxuaW1wb3J0IHsgRnVuY3Rpb25PZiB9IGZyb20gJ0BtYWluL2Z1bmN0aW9uL2luZGV4JztcclxuaW1wb3J0IHsgZmluYWwgfSBmcm9tICdAbWFpbi9pbmRleCc7XHJcbmltcG9ydCB7IGZyb3plbiB9IGZyb20gJ0BtYWluL2luZGV4JztcclxuXHJcbi8qKlxyXG4gKiBNYXBwZWQgaXRlcmFibGUuXHJcbiAqL1xyXG5AZmluYWxcclxuQGZyb3plblxyXG5leHBvcnQgY2xhc3MgTWFwcGVkPFgsIFk+IGltcGxlbWVudHMgSXRlcmFibGU8WT4ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBJdGVyYWJsZS5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBpdGVyYWJsZTogSXRlcmFibGU8WD47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGdW5jdGlvbi5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBmdW5jOiBGdW5jdGlvbjxYLCBZPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEN0b3IuXHJcbiAgICAgKiBAcGFyYW0gaXRlcmFibGUgSXRlcmFibGUuXHJcbiAgICAgKiBAcGFyYW0gZnVuYyBGdW5jdGlvbi5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoaXRlcmFibGU6IEl0ZXJhYmxlPFg+LCBmdW5jOiBGdW5jdGlvbkxpa2U8WCwgWT4pIHtcclxuICAgICAgICB0aGlzLml0ZXJhYmxlID0gaXRlcmFibGU7XHJcbiAgICAgICAgdGhpcy5mdW5jID0gbmV3IEZ1bmN0aW9uT2YoZnVuYyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJdGVyYXRvci5cclxuICAgICAqL1xyXG4gICAgcHVibGljICpbU3ltYm9sLml0ZXJhdG9yXSgpOiBJdGVyYXRvcjxZPiB7XHJcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMuaXRlcmFibGUpIHtcclxuICAgICAgICAgICAgeWllbGQgdGhpcy5mdW5jLmFwcGx5KGl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvKipcclxuICogSW5kZXguXHJcbiAqL1xyXG5leHBvcnQgKiBmcm9tICcuL0NvbmRpdGlvbnMnO1xyXG5leHBvcnQgKiBmcm9tICcuL0VxdWFscyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vRmlsdGVyZWQnO1xyXG5leHBvcnQgKiBmcm9tICcuL0ZpcnN0JztcclxuZXhwb3J0ICogZnJvbSAnLi9MZW5ndGhPZic7XHJcbmV4cG9ydCAqIGZyb20gJy4vTGltaXRlZCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vTWFwcGVkJztcclxuIiwiaW1wb3J0IHsgZmluYWwgfSBmcm9tICdAbWFpbi9pbmRleCc7XHJcbmltcG9ydCB7IGZyb3plbiB9IGZyb20gJ0BtYWluL2luZGV4JztcclxuaW1wb3J0IHsgUmFuZG9tIH0gZnJvbSAnQG1haW4vcmFuZG9tL2luZGV4JztcclxuaW1wb3J0IHsgU2NhbGFyIH0gZnJvbSAnQG1haW4vc2NhbGFyL2luZGV4JztcclxuaW1wb3J0IHsgU2NhbGFyTGlrZSB9IGZyb20gJ0BtYWluL3NjYWxhci9pbmRleCc7XHJcbmltcG9ydCB7IFNjYWxhck9mIH0gZnJvbSAnQG1haW4vc2NhbGFyL2luZGV4JztcclxuXHJcbi8qKlxyXG4gKiBQYXJrLU1pbGxlciByYW5kb20gc291cmNlLlxyXG4gKiBAc2VlIGh0dHA6Ly93d3cuZmlyc3Rwci5jb20uYXUvZHNwL3JhbmQzMS9cclxuICpcclxuICogRm9yIG90aGVyIGFsdGVybmF0aXZlIGltcGxlbWVudGF0aW9ucyBpbiBKUzpcclxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vb2RvZ29uby9wcm5nLXBhcmttaWxsZXItanNcclxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vU2lyQW50aG9ueS9yYW5kMzFcclxuICogQHNlZSBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9ibGl4dC9mMTdiNDdjNjI1MDhiZTU5OTg3YlxyXG4gKi9cclxuQGZpbmFsXHJcbkBmcm96ZW5cclxuZXhwb3J0IGNsYXNzIFBhcmtNaWxsZXJSYW5kb20gaW1wbGVtZW50cyBSYW5kb20ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBNYXhpbXVtIChleGNsdXNpdmUpIHBvc3NpYmxlIHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBNQVg6IG51bWJlciA9IDIxNDc0ODM2NDc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBOZXh0IHNlZWQuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc2VlZDogU2NhbGFyPG51bWJlcj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDdG9yLlxyXG4gICAgICogQHBhcmFtIHNlZWQgU2VlZCBudW1iZXIuIElmIG5vdCBwcm92aWRlZCB3aWxsIHVzZSBhIHNlZWQgYmFzZWQgb24gdGhlIGN1cnJlbnQgdGltZS5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3Ioc2VlZDogU2NhbGFyTGlrZTxudW1iZXI+ID0gKCk6IG51bWJlciA9PiBEYXRlLm5vdygpKSB7XHJcbiAgICAgICAgLy8gbWFrZSBzdXJlIHNlZWQgaXMgbnVtYmVyIGJldHdlZW4gMSBhbmQgTUFYXHJcbiAgICAgICAgdGhpcy5zZWVkID0gbmV3IFNjYWxhck9mKCgpOiBudW1iZXIgPT4ge1xyXG4gICAgICAgICAgICBsZXQgc291cmNlOiBudW1iZXIgPSBuZXcgU2NhbGFyT2Yoc2VlZCkudmFsdWUoKTtcclxuICAgICAgICAgICAgc291cmNlID0gKHNvdXJjZSA9PT0gMCA/IDEgOiBzb3VyY2UpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIE1hdGguYWJzKHNvdXJjZSkgJSBQYXJrTWlsbGVyUmFuZG9tLk1BWDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE5leHQgcmFuZG9tIHZhbHVlIGJldHdlZW4gMCAoaW5jbHVzaXZlKSBhbmQgMSAoZXhjbHVzaXZlKS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIG5leHQoKTogbnVtYmVyIHtcclxuICAgICAgICB0aGlzLnNlZWQgPSBuZXcgU2NhbGFyT2YoKHRoaXMuc2VlZC52YWx1ZSgpICogMTY4MDcpICUgUGFya01pbGxlclJhbmRvbS5NQVgpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5zZWVkLnZhbHVlKCkgLyBQYXJrTWlsbGVyUmFuZG9tLk1BWDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBmaW5hbCB9IGZyb20gJ0BtYWluL2luZGV4JztcclxuaW1wb3J0IHsgZnJvemVuIH0gZnJvbSAnQG1haW4vaW5kZXgnO1xyXG5pbXBvcnQgeyBSYW5kb20gfSBmcm9tICdAbWFpbi9yYW5kb20vaW5kZXgnO1xyXG5cclxuLyoqXHJcbiAqIFJhbmRvbVNvdXJjZSBhcyB7QGxpbmsgUmFuZG9tfS5cclxuICovXHJcbkBmaW5hbFxyXG5AZnJvemVuXHJcbmV4cG9ydCBjbGFzcyBSYW5kb21PZiBpbXBsZW1lbnRzIFJhbmRvbSB7XHJcbiAgICAvKipcclxuICAgICAqIFJhbmRvbSBzb3VyY2UuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgc291cmNlOiBSYW5kb21Tb3VyY2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDdG9yLlxyXG4gICAgICogQHBhcmFtIHNvdXJjZSBSYW5kb20gc291cmNlLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihzb3VyY2U6IFJhbmRvbVNvdXJjZSkge1xyXG4gICAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTmV4dCByYW5kb20gdmFsdWUgYmV0d2VlbiAwIChpbmNsdXNpdmUpIGFuZCAxIChleGNsdXNpdmUpLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbmV4dCgpOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IGFycjogVWludDMyQXJyYXkgPSBuZXcgVWludDMyQXJyYXkoMSk7XHJcbiAgICAgICAgdGhpcy5zb3VyY2UuZ2V0UmFuZG9tVmFsdWVzKGFycik7XHJcblxyXG4gICAgICAgIHJldHVybiBhcnJbMF0gLyBNYXRoLnBvdygyLCAzMik7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgZmluYWwgfSBmcm9tICdAbWFpbi9pbmRleCc7XHJcbmltcG9ydCB7IGZyb3plbiB9IGZyb20gJ0BtYWluL2luZGV4JztcclxuaW1wb3J0IHsgUmFuZG9tIH0gZnJvbSAnQG1haW4vcmFuZG9tL2luZGV4JztcclxuaW1wb3J0IHsgU2NhbGFyIH0gZnJvbSAnQG1haW4vc2NhbGFyL2luZGV4JztcclxuXHJcbi8qKlxyXG4gKiBSYW5kb21pemVkIGJvb2wuXHJcbiAqL1xyXG5AZmluYWxcclxuQGZyb3plblxyXG5leHBvcnQgY2xhc3MgUmFuZG9taXplZEJvb2wgaW1wbGVtZW50cyBTY2FsYXI8Ym9vbGVhbj4ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBSYW5kb20uXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgcmFuZG9tOiBSYW5kb207XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDdG9yLlxyXG4gICAgICogQHBhcmFtIHJhbmRvbSBSYW5kb20uXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHJhbmRvbTogUmFuZG9tKSB7XHJcbiAgICAgICAgdGhpcy5yYW5kb20gPSByYW5kb207XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUeXBlIGRldGVybWluYW50LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaXNTY2FsYXIoKTogdHJ1ZSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdmFsdWUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmFuZG9tLm5leHQoKSA+PSAwLjU7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgZmluYWwgfSBmcm9tICdAbWFpbi9pbmRleCc7XHJcbmltcG9ydCB7IGZyb3plbiB9IGZyb20gJ0BtYWluL2luZGV4JztcclxuaW1wb3J0IHsgUmFuZG9tIH0gZnJvbSAnQG1haW4vcmFuZG9tL2luZGV4JztcclxuaW1wb3J0IHsgU2NhbGFyIH0gZnJvbSAnQG1haW4vc2NhbGFyL2luZGV4JztcclxuaW1wb3J0IHsgU2NhbGFyTGlrZSB9IGZyb20gJ0BtYWluL3NjYWxhci9pbmRleCc7XHJcbmltcG9ydCB7IFNjYWxhck9mIH0gZnJvbSAnQG1haW4vc2NhbGFyL2luZGV4JztcclxuXHJcbi8qKlxyXG4gKiBSYW5kb21pemVkIGZsb2F0aW5nIHBvaW50IG51bWJlci5cclxuICovXHJcbkBmaW5hbFxyXG5AZnJvemVuXHJcbmV4cG9ydCBjbGFzcyBSYW5kb21pemVkRmxvYXQgaW1wbGVtZW50cyBTY2FsYXI8bnVtYmVyPiB7XHJcbiAgICAvKipcclxuICAgICAqIFJhbmRvbS5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSByYW5kb206IFJhbmRvbTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIE1pbmltdW0gcG9zc2libGUgdmFsdWUgKGluY2x1c2l2ZSkuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbWluOiBTY2FsYXI8bnVtYmVyPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIE1heGltdW0gcG9zc2libGUgdmFsdWUgKGluY2x1c2l2ZSkuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbWF4OiBTY2FsYXI8bnVtYmVyPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEN0b3IuXHJcbiAgICAgKiBAcGFyYW0gcmFuZG9tIFJhbmRvbS5cclxuICAgICAqIEBwYXJhbSBtaW4gTWluaW11bSBwb3NzaWJsZSB2YWx1ZSAoaW5jbHVzaXZlKS5cclxuICAgICAqIEBwYXJhbSBtYXggTWF4aW11bSBwb3NzaWJsZSB2YWx1ZSAoaW5jbHVzaXZlKS5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IocmFuZG9tOiBSYW5kb20sIG1pbjogU2NhbGFyTGlrZTxudW1iZXI+LCBtYXg6IFNjYWxhckxpa2U8bnVtYmVyPikge1xyXG4gICAgICAgIHRoaXMucmFuZG9tID0gcmFuZG9tO1xyXG4gICAgICAgIHRoaXMubWluID0gbmV3IFNjYWxhck9mKG1pbik7XHJcbiAgICAgICAgdGhpcy5tYXggPSBuZXcgU2NhbGFyT2YobWF4KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFR5cGUgZGV0ZXJtaW5hbnQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpc1NjYWxhcigpOiB0cnVlIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB2YWx1ZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1pbi52YWx1ZSgpICsgKHRoaXMubWF4LnZhbHVlKCkgLSB0aGlzLm1pbi52YWx1ZSgpKSAqIHRoaXMucmFuZG9tLm5leHQoKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBmaW5hbCB9IGZyb20gJ0BtYWluL2luZGV4JztcclxuaW1wb3J0IHsgZnJvemVuIH0gZnJvbSAnQG1haW4vaW5kZXgnO1xyXG5pbXBvcnQgeyBSYW5kb20gfSBmcm9tICdAbWFpbi9yYW5kb20vaW5kZXgnO1xyXG5pbXBvcnQgeyBSYW5kb21pemVkRmxvYXQgfSBmcm9tICdAbWFpbi9yYW5kb20vaW5kZXgnO1xyXG5pbXBvcnQgeyBTY2FsYXIgfSBmcm9tICdAbWFpbi9zY2FsYXIvaW5kZXgnO1xyXG5pbXBvcnQgeyBTY2FsYXJMaWtlIH0gZnJvbSAnQG1haW4vc2NhbGFyL2luZGV4JztcclxuXHJcbi8qKlxyXG4gKiBSYW5kb21pemVkIGludGVnZXIuXHJcbiAqL1xyXG5AZmluYWxcclxuQGZyb3plblxyXG5leHBvcnQgY2xhc3MgUmFuZG9taXplZEludCBpbXBsZW1lbnRzIFNjYWxhcjxudW1iZXI+IHtcclxuICAgIC8qKlxyXG4gICAgICogUmFuZG9taXplZCBmbG9hdGluZyBwb2ludCBudW1iZXIuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgcmFuZG9taXplZEZsb2F0OiBTY2FsYXI8bnVtYmVyPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEN0b3IuXHJcbiAgICAgKiBAcGFyYW0gcmFuZG9tIFJhbmRvbS5cclxuICAgICAqIEBwYXJhbSBtaW4gTWluaW11bSBwb3NzaWJsZSB2YWx1ZSAoaW5jbHVzaXZlKS5cclxuICAgICAqIEBwYXJhbSBtYXggTWF4aW11bSBwb3NzaWJsZSB2YWx1ZSAoaW5jbHVzaXZlKS5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IocmFuZG9tOiBSYW5kb20sIG1pbjogU2NhbGFyTGlrZTxudW1iZXI+LCBtYXg6IFNjYWxhckxpa2U8bnVtYmVyPikge1xyXG4gICAgICAgIHRoaXMucmFuZG9taXplZEZsb2F0ID0gbmV3IFJhbmRvbWl6ZWRGbG9hdChyYW5kb20sIG1pbiwgbWF4KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFR5cGUgZGV0ZXJtaW5hbnQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpc1NjYWxhcigpOiB0cnVlIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB2YWx1ZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHRoaXMucmFuZG9taXplZEZsb2F0LnZhbHVlKCkpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGZpbmFsIH0gZnJvbSAnQG1haW4vaW5kZXgnO1xyXG5pbXBvcnQgeyBmcm96ZW4gfSBmcm9tICdAbWFpbi9pbmRleCc7XHJcbmltcG9ydCB7IFJhbmRvbSB9IGZyb20gJ0BtYWluL3JhbmRvbS9pbmRleCc7XHJcbmltcG9ydCB7IFJhbmRvbWl6ZWRGbG9hdCB9IGZyb20gJ0BtYWluL3JhbmRvbS9pbmRleCc7XHJcbmltcG9ydCB7IFNjYWxhciB9IGZyb20gJ0BtYWluL3NjYWxhci9pbmRleCc7XHJcblxyXG4vKipcclxuICogUmFuZG9taXplZCBmbG9hdGluZyBwb2ludCBudW1iZXIgYmV0d2VlbiAwIGFuZCAxLlxyXG4gKi9cclxuQGZpbmFsXHJcbkBmcm96ZW5cclxuZXhwb3J0IGNsYXNzIFJhbmRvbWl6ZWRQZXJjZW50YWdlIGltcGxlbWVudHMgU2NhbGFyPG51bWJlcj4ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBSYW5kb21pemVkIGZsb2F0aW5nIHBvaW50IG51bWJlci5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSByYW5kb21pemVkRmxvYXQ6IFNjYWxhcjxudW1iZXI+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3Rvci5cclxuICAgICAqIEBwYXJhbSByYW5kb20gUmFuZG9tLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihyYW5kb206IFJhbmRvbSkge1xyXG4gICAgICAgIHRoaXMucmFuZG9taXplZEZsb2F0ID0gbmV3IFJhbmRvbWl6ZWRGbG9hdChyYW5kb20sIDAsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVHlwZSBkZXRlcm1pbmFudC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGlzU2NhbGFyKCk6IHRydWUge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHZhbHVlKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmFuZG9taXplZEZsb2F0LnZhbHVlKCk7XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIEluZGV4LlxyXG4gKi9cclxuZXhwb3J0ICogZnJvbSAnLi9QYXJrTWlsbGVyUmFuZG9tJztcclxuZXhwb3J0ICogZnJvbSAnLi9SYW5kb20nO1xyXG5leHBvcnQgKiBmcm9tICcuL1JhbmRvbWl6ZWRCb29sJztcclxuZXhwb3J0ICogZnJvbSAnLi9SYW5kb21pemVkRmxvYXQnO1xyXG5leHBvcnQgKiBmcm9tICcuL1JhbmRvbWl6ZWRJbnQnO1xyXG5leHBvcnQgKiBmcm9tICcuL1JhbmRvbWl6ZWRQZXJjZW50YWdlJztcclxuZXhwb3J0ICogZnJvbSAnLi9SYW5kb21PZic7XHJcbiIsImltcG9ydCB7IGZpbmFsIH0gZnJvbSAnQG1haW4vaW5kZXgnO1xyXG5pbXBvcnQgeyBmcm96ZW4gfSBmcm9tICdAbWFpbi9pbmRleCc7XHJcbmltcG9ydCB7IENvbmRpdGlvbnMgfSBmcm9tICdAbWFpbi9pdGVyYWJsZS9pbmRleCc7XHJcbmltcG9ydCB7IFNjYWxhciB9IGZyb20gJ0BtYWluL3NjYWxhci9pbmRleCc7XHJcbmltcG9ydCB7IFNjYWxhckxpa2UgfSBmcm9tICdAbWFpbi9zY2FsYXIvaW5kZXgnO1xyXG5cclxuLyoqXHJcbiAqIExvZ2ljYWwgY29uanVuY3Rpb24gb3BlcmF0b3IuXHJcbiAqL1xyXG5AZmluYWxcclxuQGZyb3plblxyXG5leHBvcnQgY2xhc3MgQW5kIGltcGxlbWVudHMgU2NhbGFyPGJvb2xlYW4+IHtcclxuICAgIC8qKlxyXG4gICAgICogQ29uZGl0aW9ucy5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBjb25kaXRpb25zOiBJdGVyYWJsZTxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEN0b3IuXHJcbiAgICAgKiBAcGFyYW0gY29uZGl0aW9ucyBDb25kaXRpb25zLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvciguLi5jb25kaXRpb25zOiBTY2FsYXJMaWtlPGJvb2xlYW4+W10pIHtcclxuICAgICAgICB0aGlzLmNvbmRpdGlvbnMgPSBuZXcgQ29uZGl0aW9ucyhjb25kaXRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFR5cGUgZGV0ZXJtaW5hbnQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpc1NjYWxhcigpOiB0cnVlIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB2YWx1ZSgpOiBib29sZWFuIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGNvbmRpdGlvbiBvZiB0aGlzLmNvbmRpdGlvbnMpIHtcclxuICAgICAgICAgICAgaWYgKCFjb25kaXRpb24pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRnVuY3Rpb24gfSBmcm9tICdAbWFpbi9mdW5jdGlvbi9pbmRleCc7XHJcbmltcG9ydCB7IEZ1bmN0aW9uTGlrZSB9IGZyb20gJ0BtYWluL2Z1bmN0aW9uL2luZGV4JztcclxuaW1wb3J0IHsgRnVuY3Rpb25PZiB9IGZyb20gJ0BtYWluL2Z1bmN0aW9uL2luZGV4JztcclxuaW1wb3J0IHsgVG9Cb29sIH0gZnJvbSAnQG1haW4vZnVuY3Rpb24vaW5kZXgnO1xyXG5pbXBvcnQgeyBmaW5hbCB9IGZyb20gJ0BtYWluL2luZGV4JztcclxuaW1wb3J0IHsgZnJvemVuIH0gZnJvbSAnQG1haW4vaW5kZXgnO1xyXG5pbXBvcnQgeyBCb29sTGlrZSB9IGZyb20gJ0BtYWluL3NjYWxhci9pbmRleCc7XHJcbmltcG9ydCB7IFNjYWxhciB9IGZyb20gJ0BtYWluL3NjYWxhci9pbmRleCc7XHJcblxyXG4vKipcclxuICogQm9vbGVhbiBvZiBkaWZmZXJlbnQgcG9zc2libGUgaW5wdXRzLlxyXG4gKi9cclxuQGZpbmFsXHJcbkBmcm96ZW5cclxuZXhwb3J0IGNsYXNzIEJvb2xPZjxUPiBpbXBsZW1lbnRzIFNjYWxhcjxib29sZWFuPiB7XHJcbiAgICAvKipcclxuICAgICAqIEJvb2xlYW4uXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgYm9vbDogQm9vbExpa2U8VD47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGdW5jdGlvbiB0byBjb252ZXJ0IGJvb2wtbGlrZSB0eXBlcyB0byBib29sZWFuIHByaW1pdGl2ZS5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSB0b0Jvb2w6IEZ1bmN0aW9uPEJvb2xMaWtlPFQ+LCBib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEN0b3IuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgQm9vbGVhbi1saWtlIHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZTogQm9vbExpa2U8VD4sIHRvQm9vbDogRnVuY3Rpb25MaWtlPEJvb2xMaWtlPFQ+LCBib29sZWFuPiA9IG5ldyBUb0Jvb2woKSkge1xyXG4gICAgICAgIHRoaXMuYm9vbCA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMudG9Cb29sID0gbmV3IEZ1bmN0aW9uT2YodG9Cb29sKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFR5cGUgZGV0ZXJtaW5hbnQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpc1NjYWxhcigpOiB0cnVlIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdmFsdWUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9Cb29sLmFwcGx5KHRoaXMuYm9vbCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgZmluYWwgfSBmcm9tICdAbWFpbi9pbmRleCc7XHJcbmltcG9ydCB7IGZyb3plbiB9IGZyb20gJ0BtYWluL2luZGV4JztcclxuaW1wb3J0IHsgU2NhbGFyIH0gZnJvbSAnQG1haW4vc2NhbGFyL2luZGV4JztcclxuaW1wb3J0IHsgU2NhbGFyTGlrZSB9IGZyb20gJ0BtYWluL3NjYWxhci9pbmRleCc7XHJcbmltcG9ydCB7IFNjYWxhck9mIH0gZnJvbSAnQG1haW4vc2NhbGFyL2luZGV4JztcclxuXHJcbi8qKlxyXG4gKiBDYWNoZWQgc2NhbGFyLlxyXG4gKi9cclxuQGZpbmFsXHJcbkBmcm96ZW5cclxuZXhwb3J0IGNsYXNzIENhY2hlZDxUPiBpbXBsZW1lbnRzIFNjYWxhcjxUPiB7XHJcbiAgICAvKipcclxuICAgICAqIFNjYWxhci5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBzY2FsYXI6IFNjYWxhcjxUPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFdoZXRoZXIge0BsaW5rIHNjYWxhcn0gaXMgY2FjaGVkLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGlzQ2FjaGVkOiBib29sZWFuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FjaGVkIHZhbHVlIGZyb20gc2NhbGFyLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNhY2hlOiBUO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3Rvci5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBWYWx1ZS5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IodmFsdWU6IFNjYWxhckxpa2U8VD4pIHtcclxuICAgICAgICB0aGlzLnNjYWxhciA9IG5ldyBTY2FsYXJPZih2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5pc0NhY2hlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVHlwZSBkZXRlcm1pbmFudC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGlzU2NhbGFyKCk6IHRydWUge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHZhbHVlKCk6IFQge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0NhY2hlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmNhY2hlID0gdGhpcy5zY2FsYXIudmFsdWUoKTtcclxuICAgICAgICAgICAgdGhpcy5pc0NhY2hlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJc1RydWUgfSBmcm9tICdAbWFpbi9mdW5jdGlvbi9pbmRleCc7XHJcbmltcG9ydCB7IFRvQ29uZGl0aW9uQ29uc2VxdWVudFBhaXIgfSBmcm9tICdAbWFpbi9mdW5jdGlvbi9pbmRleCc7XHJcbmltcG9ydCB7IGZpbmFsIH0gZnJvbSAnQG1haW4vaW5kZXgnO1xyXG5pbXBvcnQgeyBmcm96ZW4gfSBmcm9tICdAbWFpbi9pbmRleCc7XHJcbmltcG9ydCB7IEZpbHRlcmVkIH0gZnJvbSAnQG1haW4vaXRlcmFibGUvaW5kZXgnO1xyXG5pbXBvcnQgeyBGaXJzdCB9IGZyb20gJ0BtYWluL2l0ZXJhYmxlL2luZGV4JztcclxuaW1wb3J0IHsgTWFwcGVkIH0gZnJvbSAnQG1haW4vaXRlcmFibGUvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb25kaXRpb25Db25zZXF1ZW50TGlrZVBhaXIgfSBmcm9tICdAbWFpbi9zY2FsYXIvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb25kaXRpb25Db25zZXF1ZW50UGFpciB9IGZyb20gJ0BtYWluL3NjYWxhci9pbmRleCc7XHJcbmltcG9ydCB7IFNjYWxhciB9IGZyb20gJ0BtYWluL3NjYWxhci9pbmRleCc7XHJcbmltcG9ydCB7IFNjYWxhckxpa2UgfSBmcm9tICdAbWFpbi9zY2FsYXIvaW5kZXgnO1xyXG5pbXBvcnQgeyBTY2FsYXJPZiB9IGZyb20gJ0BtYWluL3NjYWxhci9pbmRleCc7XHJcblxyXG4vKipcclxuICogQ29uZGl0aW9uYWwgc2NhbGFyLlxyXG4gKi9cclxuQGZpbmFsXHJcbkBmcm96ZW5cclxuZXhwb3J0IGNsYXNzIENvbmRpdGlvbmVkPFQ+IGltcGxlbWVudHMgU2NhbGFyPFQ+IHtcclxuICAgIC8qKlxyXG4gICAgICogQ29uZGl0aW9uL2NvbnNlcXVlbnQgcGFpcnMuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgZmlyc3RDb25kaXRpb25Db25zZXF1ZW50OiBTY2FsYXI8SXRlcmF0b3JSZXN1bHQ8Q29uZGl0aW9uQ29uc2VxdWVudFBhaXI8VD4+PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEZhbGxiYWNrIHZhbHVlIHdoZW4gYWxsIGNvbmRpdGlvbnMgYXJlIGZhbHNlLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGFsdGVybmF0aXZlOiBTY2FsYXI8VD47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDdG9yLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBhbHRlcm5hdGl2ZSBGYWxsYmFjayB2YWx1ZSB3aGVuIGFsbCBjb25kaXRpb25zIGFyZSBmYWxzZS5cclxuICAgICAqIEBwYXJhbSBjb25kaXRpb25Db25zZXF1ZW50cyBDb25kaXRpb24vY29uc2VxdWVudCBwYWlycy5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoYWx0ZXJuYXRpdmU6IFNjYWxhckxpa2U8VD4sIC4uLmNvbmRpdGlvbkNvbnNlcXVlbnRzOiBDb25kaXRpb25Db25zZXF1ZW50TGlrZVBhaXI8VD5bXSkge1xyXG4gICAgICAgIHRoaXMuZmlyc3RDb25kaXRpb25Db25zZXF1ZW50ID1cclxuICAgICAgICAgICAgbmV3IEZpcnN0KFxyXG4gICAgICAgICAgICAgICAgbmV3IEZpbHRlcmVkKFxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBNYXBwZWQoY29uZGl0aW9uQ29uc2VxdWVudHMsIG5ldyBUb0NvbmRpdGlvbkNvbnNlcXVlbnRQYWlyPFQ+KCkpLFxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBJc1RydWUoKVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuYWx0ZXJuYXRpdmUgPSBuZXcgU2NhbGFyT2YoYWx0ZXJuYXRpdmUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVHlwZSBkZXRlcm1pbmFudC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGlzU2NhbGFyKCk6IHRydWUge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB2YWx1ZSgpOiBUIHtcclxuICAgICAgICBjb25zdCBmaXJzdDogSXRlcmF0b3JSZXN1bHQ8Q29uZGl0aW9uQ29uc2VxdWVudFBhaXI8VD4+ID0gdGhpcy5maXJzdENvbmRpdGlvbkNvbnNlcXVlbnQudmFsdWUoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICFmaXJzdC5kb25lID8gZmlyc3QudmFsdWVbMV0udmFsdWUoKSA6IHRoaXMuYWx0ZXJuYXRpdmUudmFsdWUoKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBmaW5hbCB9IGZyb20gJ0BtYWluL2luZGV4JztcclxuaW1wb3J0IHsgZnJvemVuIH0gZnJvbSAnQG1haW4vaW5kZXgnO1xyXG5pbXBvcnQgeyBTY2FsYXIgfSBmcm9tICdAbWFpbi9zY2FsYXIvaW5kZXgnO1xyXG5cclxuLyoqXHJcbiAqIEZhbHNlIHNjYWxhci5cclxuICovXHJcbkBmaW5hbFxyXG5AZnJvemVuXHJcbmV4cG9ydCBjbGFzcyBGYWxzZSBpbXBsZW1lbnRzIFNjYWxhcjxib29sZWFuPiB7XHJcbiAgICAvKipcclxuICAgICAqIFR5cGUgZGV0ZXJtaW5hbnQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpc1NjYWxhcigpOiB0cnVlIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB2YWx1ZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgZmluYWwgfSBmcm9tICdAbWFpbi9pbmRleCc7XHJcbmltcG9ydCB7IGZyb3plbiB9IGZyb20gJ0BtYWluL2luZGV4JztcclxuaW1wb3J0IHsgU2NhbGFyIH0gZnJvbSAnQG1haW4vc2NhbGFyL2luZGV4JztcclxuXHJcbi8qKlxyXG4gKiBEZXRlcm1pbmVzIGlmIGFuIG9iamVjdCBoYXMgYSBwcm9wZXJ0eSBzZXQgdG8gdHJ1ZS5cclxuICovXHJcbkBmaW5hbFxyXG5AZnJvemVuXHJcbmV4cG9ydCBjbGFzcyBIYXNUcnVlUHJvcGVydHk8VD4gaW1wbGVtZW50cyBTY2FsYXI8Ym9vbGVhbj4ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25kaXRpb24uXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgaXNQcm9wZXJ0eVRydWU6ICgpID0+IGJvb2xlYW47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDdG9yLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFZhcmlhYmxlLlxyXG4gICAgICogQHBhcmFtIHByb3BlcnR5TmFtZSBOYW1lIG9mIHRoZSBwcm9wZXJ0eS5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IodmFsdWU6IFQsIHByb3BlcnR5TmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5pc1Byb3BlcnR5VHJ1ZSA9ICgpOiBib29sZWFuID0+XHJcbiAgICAgICAgICAgIHZhbHVlICE9PSBudWxsICYmXHJcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiZcclxuICAgICAgICAgICAgKDx7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfT48T2JqZWN0PnZhbHVlKVtwcm9wZXJ0eU5hbWVdID09PSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVHlwZSBkZXRlcm1pbmFudC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGlzU2NhbGFyKCk6IHRydWUge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHZhbHVlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzUHJvcGVydHlUcnVlKCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgZmluYWwgfSBmcm9tICdAbWFpbi9pbmRleCc7XHJcbmltcG9ydCB7IGZyb3plbiB9IGZyb20gJ0BtYWluL2luZGV4JztcclxuaW1wb3J0IHsgU2NhbGFyIH0gZnJvbSAnQG1haW4vc2NhbGFyL2luZGV4JztcclxuXHJcbi8qKlxyXG4gKiBEZXRlcm1pbmVzIGlmIGFuIG9iamVjdCBoYXMgYSBudWxsYXJ5IGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0cnVlLlxyXG4gKi9cclxuQGZpbmFsXHJcbkBmcm96ZW5cclxuZXhwb3J0IGNsYXNzIEhhc1RydWVSZXN1bHQ8VD4gaW1wbGVtZW50cyBTY2FsYXI8Ym9vbGVhbj4ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25kaXRpb24uXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgaXNSZXN1bHRUcnVlOiAoKSA9PiBib29sZWFuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3Rvci5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBWYXJpYWJsZS5cclxuICAgICAqIEBwYXJhbSBmdW5jdGlvbk5hbWUgTmFtZSBvZiB0aGUgZnVuY3Rpb24uXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiBULCBmdW5jdGlvbk5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuaXNSZXN1bHRUcnVlID0gKCk6IGJvb2xlYW4gPT5cclxuICAgICAgICAgICAgdmFsdWUgIT09IG51bGwgJiZcclxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJlxyXG4gICAgICAgICAgICB0eXBlb2YgKDx7IFtrZXk6IHN0cmluZ106ICgpID0+IHRydWUgfT48T2JqZWN0PnZhbHVlKVtmdW5jdGlvbk5hbWVdID09PSAnZnVuY3Rpb24nICYmXHJcbiAgICAgICAgICAgICg8eyBba2V5OiBzdHJpbmddOiAoKSA9PiB0cnVlIH0+PE9iamVjdD52YWx1ZSlbZnVuY3Rpb25OYW1lXSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVHlwZSBkZXRlcm1pbmFudC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGlzU2NhbGFyKCk6IHRydWUge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHZhbHVlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzUmVzdWx0VHJ1ZSgpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGZpbmFsIH0gZnJvbSAnQG1haW4vaW5kZXgnO1xyXG5pbXBvcnQgeyBmcm96ZW4gfSBmcm9tICdAbWFpbi9pbmRleCc7XHJcbmltcG9ydCB7IElzTnVsbCB9IGZyb20gJ0BtYWluL3NjYWxhci9pbmRleCc7XHJcbmltcG9ydCB7IElzVW5kZWZpbmVkIH0gZnJvbSAnQG1haW4vc2NhbGFyL2luZGV4JztcclxuaW1wb3J0IHsgT3IgfSBmcm9tICdAbWFpbi9zY2FsYXIvaW5kZXgnO1xyXG5pbXBvcnQgeyBTY2FsYXIgfSBmcm9tICdAbWFpbi9zY2FsYXIvaW5kZXgnO1xyXG5pbXBvcnQgeyBTY2FsYXJMaWtlIH0gZnJvbSAnQG1haW4vc2NhbGFyL2luZGV4JztcclxuXHJcbi8qKlxyXG4gKiBEZXRlcm1pbmVzIGlmIHNjYWxhciBvciB2YWx1ZSBpcyBudWxsIG9yIHVuZGVmaW5lZC5cclxuICovXHJcbkBmaW5hbFxyXG5AZnJvemVuXHJcbmV4cG9ydCBjbGFzcyBJc0JsYW5rPFQ+IGltcGxlbWVudHMgU2NhbGFyPGJvb2xlYW4+IHtcclxuICAgIC8qKlxyXG4gICAgICogU2NhbGFyLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGlzQmxhbms6IFNjYWxhcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEN0b3IuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVmFsdWUuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiBTY2FsYXJMaWtlPFQ+KSB7XHJcbiAgICAgICAgdGhpcy5pc0JsYW5rID0gbmV3IE9yKFxyXG4gICAgICAgICAgICBuZXcgSXNOdWxsKHZhbHVlKSxcclxuICAgICAgICAgICAgbmV3IElzVW5kZWZpbmVkKHZhbHVlKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUeXBlIGRldGVybWluYW50LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaXNTY2FsYXIoKTogdHJ1ZSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdmFsdWUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNCbGFuay52YWx1ZSgpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGZpbmFsIH0gZnJvbSAnQG1haW4vaW5kZXgnO1xyXG5pbXBvcnQgeyBmcm96ZW4gfSBmcm9tICdAbWFpbi9pbmRleCc7XHJcbmltcG9ydCB7IFNjYWxhciB9IGZyb20gJ0BtYWluL3NjYWxhci9pbmRleCc7XHJcblxyXG4vKipcclxuICogRGV0ZXJtaW5lcyBpZiB2YXJpYWJsZSBpcyBhIHN0YW5kYXJkIEphdmFTY3JpcHQgZnVuY3Rpb24uXHJcbiAqL1xyXG5AZmluYWxcclxuQGZyb3plblxyXG5leHBvcnQgY2xhc3MgSXNKc0Z1bmN0aW9uPFQ+IGltcGxlbWVudHMgU2NhbGFyPGJvb2xlYW4+IHtcclxuICAgIC8qKlxyXG4gICAgICogVmFyaWFibGUgdG8gY2hlY2suXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgdmFsOiBUO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3Rvci5cclxuICAgICAqIEBwYXJhbSB2YWwgVmFyaWFibGUgdG8gY2hlY2suXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHZhbDogVCkge1xyXG4gICAgICAgIHRoaXMudmFsID0gdmFsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVHlwZSBkZXRlcm1pbmFudC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGlzU2NhbGFyKCk6IHRydWUge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHZhbHVlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2YgdGhpcy52YWwgPT09ICdmdW5jdGlvbic7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgZmluYWwgfSBmcm9tICdAbWFpbi9pbmRleCc7XHJcbmltcG9ydCB7IGZyb3plbiB9IGZyb20gJ0BtYWluL2luZGV4JztcclxuaW1wb3J0IHsgU2NhbGFyIH0gZnJvbSAnQG1haW4vc2NhbGFyL2luZGV4JztcclxuaW1wb3J0IHsgSXNCbGFuayB9IGZyb20gJ0BtYWluL3NjYWxhci9pbmRleCc7XHJcbmltcG9ydCB7IFNjYWxhckxpa2UgfSBmcm9tICdAbWFpbi9zY2FsYXIvaW5kZXgnO1xyXG5pbXBvcnQgeyBTY2FsYXJPZiB9IGZyb20gJ0BtYWluL3NjYWxhci9pbmRleCc7XHJcblxyXG4vKipcclxuICogRGV0ZXJtaW5lcyBpZiBzY2FsYXIgb3IgdmFsdWUgaXMgbm90IG51bGwgYW5kIG5vdCB1bmRlZmluZWQuXHJcbiAqL1xyXG5AZmluYWxcclxuQGZyb3plblxyXG5leHBvcnQgY2xhc3MgSXNOb3RCbGFuazxUPiBpbXBsZW1lbnRzIFNjYWxhcjxib29sZWFuPiB7XHJcbiAgICAvKipcclxuICAgICAqIFNjYWxhci5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBzY2FsYXI6IFNjYWxhcjxUPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEN0b3IuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVmFsdWUuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiBTY2FsYXJMaWtlPFQ+KSB7XHJcbiAgICAgICAgdGhpcy5zY2FsYXIgPSBuZXcgU2NhbGFyT2YodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVHlwZSBkZXRlcm1pbmFudC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGlzU2NhbGFyKCk6IHRydWUge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHZhbHVlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAhKG5ldyBJc0JsYW5rKHRoaXMuc2NhbGFyKS52YWx1ZSgpKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBmaW5hbCB9IGZyb20gJ0BtYWluL2luZGV4JztcclxuaW1wb3J0IHsgZnJvemVuIH0gZnJvbSAnQG1haW4vaW5kZXgnO1xyXG5pbXBvcnQgeyBTY2FsYXIgfSBmcm9tICdAbWFpbi9zY2FsYXIvaW5kZXgnO1xyXG5pbXBvcnQgeyBTY2FsYXJMaWtlIH0gZnJvbSAnQG1haW4vc2NhbGFyL2luZGV4JztcclxuaW1wb3J0IHsgU2NhbGFyT2YgfSBmcm9tICdAbWFpbi9zY2FsYXIvaW5kZXgnO1xyXG5cclxuLyoqXHJcbiAqIERldGVybWluZXMgaWYgc2NhbGFyIG9yIHZhbHVlIGlzIG51bGwuXHJcbiAqL1xyXG5AZmluYWxcclxuQGZyb3plblxyXG5leHBvcnQgY2xhc3MgSXNOdWxsPFQ+IGltcGxlbWVudHMgU2NhbGFyPGJvb2xlYW4+IHtcclxuICAgIC8qKlxyXG4gICAgICogU2NhbGFyLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHNjYWxhcjogU2NhbGFyPFQ+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3Rvci5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBWYWx1ZS5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IodmFsdWU6IFNjYWxhckxpa2U8VD4pIHtcclxuICAgICAgICB0aGlzLnNjYWxhciA9IG5ldyBTY2FsYXJPZih2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUeXBlIGRldGVybWluYW50LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaXNTY2FsYXIoKTogdHJ1ZSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdmFsdWUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NhbGFyLnZhbHVlKCkgPT09IG51bGw7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgZmluYWwgfSBmcm9tICdAbWFpbi9pbmRleCc7XHJcbmltcG9ydCB7IGZyb3plbiB9IGZyb20gJ0BtYWluL2luZGV4JztcclxuaW1wb3J0IHsgU2NhbGFyIH0gZnJvbSAnQG1haW4vc2NhbGFyL2luZGV4JztcclxuaW1wb3J0IHsgU2NhbGFyTGlrZSB9IGZyb20gJ0BtYWluL3NjYWxhci9pbmRleCc7XHJcbmltcG9ydCB7IFNjYWxhck9mIH0gZnJvbSAnQG1haW4vc2NhbGFyL2luZGV4JztcclxuXHJcbi8qKlxyXG4gKiBEZXRlcm1pbmVzIGlmIHZhcmlhYmxlIGlzIGFuIG9iamVjdC5cclxuICovXHJcbkBmaW5hbFxyXG5AZnJvemVuXHJcbmV4cG9ydCBjbGFzcyBJc09iamVjdDxUPiBpbXBsZW1lbnRzIFNjYWxhcjxib29sZWFuPiB7XHJcbiAgICAvKipcclxuICAgICAqIFNjYWxhci5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBzY2FsYXI6IFNjYWxhcjxUPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEN0b3IuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVmFsdWUuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiBTY2FsYXJMaWtlPFQ+KSB7XHJcbiAgICAgICAgdGhpcy5zY2FsYXIgPSBuZXcgU2NhbGFyT2YodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVHlwZSBkZXRlcm1pbmFudC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGlzU2NhbGFyKCk6IHRydWUge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHZhbHVlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2YgdGhpcy5zY2FsYXIudmFsdWUoKSA9PT0gJ29iamVjdCc7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgZmluYWwgfSBmcm9tICdAbWFpbi9pbmRleCc7XHJcbmltcG9ydCB7IGZyb3plbiB9IGZyb20gJ0BtYWluL2luZGV4JztcclxuaW1wb3J0IHsgSGFzVHJ1ZVJlc3VsdCB9IGZyb20gJ0BtYWluL3NjYWxhci9pbmRleCc7XHJcbmltcG9ydCB7IFNjYWxhciB9IGZyb20gJ0BtYWluL3NjYWxhci9pbmRleCc7XHJcblxyXG4vKipcclxuICogRGV0ZXJtaW5lcyBpZiB2YXJpYWJsZSBpcyBvZiB0eXBlIHtAbGluayBTY2FsYXJ9LlxyXG4gKi9cclxuQGZpbmFsXHJcbkBmcm96ZW5cclxuZXhwb3J0IGNsYXNzIElzU2NhbGFyPFQ+IGltcGxlbWVudHMgU2NhbGFyPGJvb2xlYW4+IHtcclxuICAgIC8qKlxyXG4gICAgICogQ29uZGl0aW9uLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGlzU2NhbGFyVHlwZTogU2NhbGFyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3Rvci5cclxuICAgICAqIEBwYXJhbSBtYXliZVNjYWxhciBWYXJpYWJsZSB0byBjaGVjay5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobWF5YmVTY2FsYXI6IFQpIHtcclxuICAgICAgICB0aGlzLmlzU2NhbGFyVHlwZSA9IG5ldyBIYXNUcnVlUmVzdWx0KG1heWJlU2NhbGFyLCAnaXNTY2FsYXInKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFR5cGUgZGV0ZXJtaW5hbnQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpc1NjYWxhcigpOiB0cnVlIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB2YWx1ZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc1NjYWxhclR5cGUudmFsdWUoKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBmaW5hbCB9IGZyb20gJ0BtYWluL2luZGV4JztcclxuaW1wb3J0IHsgZnJvemVuIH0gZnJvbSAnQG1haW4vaW5kZXgnO1xyXG5pbXBvcnQgeyBTY2FsYXIgfSBmcm9tICdAbWFpbi9zY2FsYXIvaW5kZXgnO1xyXG5pbXBvcnQgeyBTY2FsYXJMaWtlIH0gZnJvbSAnQG1haW4vc2NhbGFyL2luZGV4JztcclxuaW1wb3J0IHsgU2NhbGFyT2YgfSBmcm9tICdAbWFpbi9zY2FsYXIvaW5kZXgnO1xyXG5cclxuLyoqXHJcbiAqIERldGVybWluZXMgaWYgc2NhbGFyIG9yIHZhbHVlIGlzIHVuZGVmaW5lZC5cclxuICovXHJcbkBmaW5hbFxyXG5AZnJvemVuXHJcbmV4cG9ydCBjbGFzcyBJc1VuZGVmaW5lZDxUPiBpbXBsZW1lbnRzIFNjYWxhcjxib29sZWFuPiB7XHJcbiAgICAvKipcclxuICAgICAqIFNjYWxhci5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBzY2FsYXI6IFNjYWxhcjxUPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEN0b3IuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVmFsdWUuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiBTY2FsYXJMaWtlPFQ+KSB7XHJcbiAgICAgICAgdGhpcy5zY2FsYXIgPSBuZXcgU2NhbGFyT2YodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVHlwZSBkZXRlcm1pbmFudC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGlzU2NhbGFyKCk6IHRydWUge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHZhbHVlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNjYWxhci52YWx1ZSgpID09PSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRnVuY3Rpb24gfSBmcm9tICdAbWFpbi9mdW5jdGlvbi9pbmRleCc7XHJcbmltcG9ydCB7IEZ1bmN0aW9uTGlrZSB9IGZyb20gJ0BtYWluL2Z1bmN0aW9uL2luZGV4JztcclxuaW1wb3J0IHsgRnVuY3Rpb25PZiB9IGZyb20gJ0BtYWluL2Z1bmN0aW9uL2luZGV4JztcclxuaW1wb3J0IHsgZmluYWwgfSBmcm9tICdAbWFpbi9pbmRleCc7XHJcbmltcG9ydCB7IGZyb3plbiB9IGZyb20gJ0BtYWluL2luZGV4JztcclxuaW1wb3J0IHsgTWFwcGVkIH0gZnJvbSAnQG1haW4vaXRlcmFibGUvaW5kZXgnO1xyXG5pbXBvcnQgeyBTY2FsYXIgfSBmcm9tICdAbWFpbi9zY2FsYXIvaW5kZXgnO1xyXG5cclxuLyoqXHJcbiAqIE1hcCBvZiBpdGVyYWJsZSBhbmQgY2FsbGJhY2suXHJcbiAqL1xyXG5AZmluYWxcclxuQGZyb3plblxyXG5leHBvcnQgY2xhc3MgTWFwT2Y8WiwgSywgVj4gaW1wbGVtZW50cyBTY2FsYXI8TWFwPEssIFY+PiB7XHJcbiAgICAvKipcclxuICAgICAqIEl0ZW1zLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGVudHJpZXM6IEl0ZXJhYmxlPFo+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRnVuY3Rpb24gdG8gZ2V0IGtleSB2YWx1ZSBlbnRyeS5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBnZXRFbnRyeTogRnVuY3Rpb248WiwgW0ssIFZdPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEN0b3IuXHJcbiAgICAgKiBAcGFyYW0gZW50cmllcyBJdGVtcy5cclxuICAgICAqIEBwYXJhbSBnZXRFbnRyeSBGdW5jdGlvbiBvciBzdGFuZGFyZCBKYXZhU2NyaXB0IGZ1bmN0aW9uIHRvIGdldCBrZXkgdmFsdWUgZW50cnkuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGVudHJpZXM6IEl0ZXJhYmxlPFo+LCBnZXRFbnRyeTogRnVuY3Rpb25MaWtlPFosIFtLLCBWXT4pIHtcclxuICAgICAgICB0aGlzLmVudHJpZXMgPSBlbnRyaWVzO1xyXG4gICAgICAgIHRoaXMuZ2V0RW50cnkgPSBuZXcgRnVuY3Rpb25PZihnZXRFbnRyeSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUeXBlIGRldGVybWluYW50LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaXNTY2FsYXIoKTogdHJ1ZSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHZhbHVlKCk6IE1hcDxLLCBWPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBNYXAoXHJcbiAgICAgICAgICAgIG5ldyBNYXBwZWQodGhpcy5lbnRyaWVzLCB0aGlzLmdldEVudHJ5KVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgZmluYWwgfSBmcm9tICdAbWFpbi9pbmRleCc7XHJcbmltcG9ydCB7IGZyb3plbiB9IGZyb20gJ0BtYWluL2luZGV4JztcclxuaW1wb3J0IHsgU2NhbGFyIH0gZnJvbSAnQG1haW4vc2NhbGFyL2luZGV4JztcclxuaW1wb3J0IHsgU2NhbGFyTGlrZSB9IGZyb20gJ0BtYWluL3NjYWxhci9pbmRleCc7XHJcbmltcG9ydCB7IFNjYWxhck9mIH0gZnJvbSAnQG1haW4vc2NhbGFyL2luZGV4JztcclxuXHJcbi8qKlxyXG4gKiBOZWdhdGVzIGEgbG9naWNhbCBjb25kaXRpb24uXHJcbiAqL1xyXG5AZmluYWxcclxuQGZyb3plblxyXG5leHBvcnQgY2xhc3MgTm90IGltcGxlbWVudHMgU2NhbGFyPGJvb2xlYW4+IHtcclxuICAgIC8qKlxyXG4gICAgICogU2NhbGFyLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHNjYWxhcjogU2NhbGFyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3Rvci5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBWYWx1ZS5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IodmFsdWU6IFNjYWxhckxpa2U8Ym9vbGVhbj4pIHtcclxuICAgICAgICB0aGlzLnNjYWxhciA9IG5ldyBTY2FsYXJPZih2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUeXBlIGRldGVybWluYW50LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaXNTY2FsYXIoKTogdHJ1ZSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdmFsdWUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICF0aGlzLnNjYWxhci52YWx1ZSgpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGZpbmFsIH0gZnJvbSAnQG1haW4vaW5kZXgnO1xyXG5pbXBvcnQgeyBmcm96ZW4gfSBmcm9tICdAbWFpbi9pbmRleCc7XHJcbmltcG9ydCB7IFNjYWxhciB9IGZyb20gJ0BtYWluL3NjYWxhci9pbmRleCc7XHJcblxyXG4vKipcclxuICogTnVsbCBzY2FsYXIuXHJcbiAqL1xyXG5AZmluYWxcclxuQGZyb3plblxyXG5leHBvcnQgY2xhc3MgTnVsbCBpbXBsZW1lbnRzIFNjYWxhcjxudWxsPiB7XHJcbiAgICAvKipcclxuICAgICAqIFR5cGUgZGV0ZXJtaW5hbnQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpc1NjYWxhcigpOiB0cnVlIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB2YWx1ZSgpOiBudWxsIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBmaW5hbCB9IGZyb20gJ0BtYWluL2luZGV4JztcclxuaW1wb3J0IHsgZnJvemVuIH0gZnJvbSAnQG1haW4vaW5kZXgnO1xyXG5pbXBvcnQgeyBDb25kaXRpb25zIH0gZnJvbSAnQG1haW4vaXRlcmFibGUvaW5kZXgnO1xyXG5pbXBvcnQgeyBTY2FsYXIgfSBmcm9tICdAbWFpbi9zY2FsYXIvaW5kZXgnO1xyXG5pbXBvcnQgeyBTY2FsYXJMaWtlIH0gZnJvbSAnQG1haW4vc2NhbGFyL2luZGV4JztcclxuXHJcbi8qKlxyXG4gKiBMb2dpY2FsIGRpc2p1bmN0aW9uIG9wZXJhdG9yLlxyXG4gKi9cclxuQGZpbmFsXHJcbkBmcm96ZW5cclxuZXhwb3J0IGNsYXNzIE9yIGltcGxlbWVudHMgU2NhbGFyPGJvb2xlYW4+IHtcclxuICAgIC8qKlxyXG4gICAgICogQ29uZGl0aW9ucy5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBjb25kaXRpb25zOiBJdGVyYWJsZTxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEN0b3IuXHJcbiAgICAgKiBAcGFyYW0gY29uZGl0aW9ucyBDb25kaXRpb25zLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvciguLi5jb25kaXRpb25zOiBTY2FsYXJMaWtlPGJvb2xlYW4+W10pIHtcclxuICAgICAgICB0aGlzLmNvbmRpdGlvbnMgPSBuZXcgQ29uZGl0aW9ucyhjb25kaXRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFR5cGUgZGV0ZXJtaW5hbnQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpc1NjYWxhcigpOiB0cnVlIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB2YWx1ZSgpOiBib29sZWFuIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGNvbmRpdGlvbiBvZiB0aGlzLmNvbmRpdGlvbnMpIHtcclxuICAgICAgICAgICAgaWYgKGNvbmRpdGlvbikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBmaW5hbCB9IGZyb20gJ0BtYWluL2luZGV4JztcclxuaW1wb3J0IHsgZnJvemVuIH0gZnJvbSAnQG1haW4vaW5kZXgnO1xyXG5pbXBvcnQgeyBTY2FsYXIgfSBmcm9tICdAbWFpbi9zY2FsYXIvaW5kZXgnO1xyXG5pbXBvcnQgeyBTY2FsYXJMaWtlIH0gZnJvbSAnQG1haW4vc2NhbGFyL2luZGV4JztcclxuaW1wb3J0IHsgU2NhbGFyT2YgfSBmcm9tICdAbWFpbi9zY2FsYXIvaW5kZXgnO1xyXG5cclxuLyoqXHJcbiAqIFJvdW5kZWQgbnVtYmVyLlxyXG4gKiBDb2RlIGFkYXB0ZWQgZnJvbSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9NYXRoL3JvdW5kLlxyXG4gKi9cclxuQGZpbmFsXHJcbkBmcm96ZW5cclxuZXhwb3J0IGNsYXNzIFJvdW5kZWQgaW1wbGVtZW50cyBTY2FsYXI8bnVtYmVyPiB7XHJcbiAgICAvKipcclxuICAgICAqIE51bWJlci5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBzY2FsYXI6IFNjYWxhcjxudW1iZXI+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogUHJlY2lzaW9uLiBFLmcuIDEgd291bGQgcm91bmQgdG8gMSBkZWNpbWFsIHBsYWNlLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHByZWNpc2lvbjogU2NhbGFyPG51bWJlcj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDdG9yLlxyXG4gICAgICogQHBhcmFtIHNvbWV0aGluZyBOdW1iZXIuXHJcbiAgICAgKiBAcGFyYW0gcHJlY2lzaW9uIFByZWNpc2lvbi4gRS5nLiAxIHdvdWxkIHJvdW5kIHRvIDEgZGVjaW1hbCBwbGFjZS5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IodmFsdWU6IFNjYWxhckxpa2U8bnVtYmVyPiwgcHJlY2lzaW9uOiBTY2FsYXJMaWtlPG51bWJlcj4pIHtcclxuICAgICAgICB0aGlzLnNjYWxhciA9IG5ldyBTY2FsYXJPZih2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5wcmVjaXNpb24gPSBuZXcgU2NhbGFyT2YocHJlY2lzaW9uKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFR5cGUgZGV0ZXJtaW5hbnQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpc1NjYWxhcigpOiB0cnVlIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB2YWx1ZSgpOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IGZhY3RvcjogbnVtYmVyID0gTWF0aC5wb3coMTAsIHRoaXMucHJlY2lzaW9uLnZhbHVlKCkpO1xyXG5cclxuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCh0aGlzLnNjYWxhci52YWx1ZSgpICogZmFjdG9yKSAvIGZhY3RvcjtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBGdW5jdGlvbiB9IGZyb20gJ0BtYWluL2Z1bmN0aW9uL2luZGV4JztcclxuaW1wb3J0IHsgVG9WYWx1ZSB9IGZyb20gJ0BtYWluL2Z1bmN0aW9uL2luZGV4JztcclxuaW1wb3J0IHsgZmluYWwgfSBmcm9tICdAbWFpbi9pbmRleCc7XHJcbmltcG9ydCB7IGZyb3plbiB9IGZyb20gJ0BtYWluL2luZGV4JztcclxuaW1wb3J0IHsgU2NhbGFyIH0gZnJvbSAnQG1haW4vc2NhbGFyL2luZGV4JztcclxuaW1wb3J0IHsgU2NhbGFyTGlrZSB9IGZyb20gJ0BtYWluL3NjYWxhci9pbmRleCc7XHJcblxyXG4vKipcclxuICogU2NhbGFyIG9mIGRpZmZlcmVudCBwb3NzaWJsZSBpbnB1dHMuXHJcbiAqL1xyXG5AZmluYWxcclxuQGZyb3plblxyXG5leHBvcnQgY2xhc3MgU2NhbGFyT2Y8VD4gaW1wbGVtZW50cyBTY2FsYXI8VD4ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBWYWx1ZS5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSB2YWw6IFNjYWxhckxpa2U8VD47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGdW5jdGlvbiB0byBjb252ZXJ0IHNjYWxhci1saWtlIHR5cGVzIHRvIHRoZWlyIHJlc3BlY3RpdmUgdmFsdWVzLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRvVmFsdWU6IEZ1bmN0aW9uPFNjYWxhckxpa2U8VD4sIFQ+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3Rvci5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBTY2FsYXIsIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB2YWx1ZSwgb3IgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiBTY2FsYXJMaWtlPFQ+LCB0b1ZhbHVlOiBGdW5jdGlvbjxTY2FsYXJMaWtlPFQ+LCBUPiA9IG5ldyBUb1ZhbHVlKCkpIHtcclxuICAgICAgICB0aGlzLnZhbCA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMudG9WYWx1ZSA9IHRvVmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUeXBlIGRldGVybWluYW50LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaXNTY2FsYXIoKTogdHJ1ZSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHZhbHVlKCk6IFQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRvVmFsdWUuYXBwbHkodGhpcy52YWwpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGZpbmFsIH0gZnJvbSAnQG1haW4vaW5kZXgnO1xyXG5pbXBvcnQgeyBmcm96ZW4gfSBmcm9tICdAbWFpbi9pbmRleCc7XHJcbmltcG9ydCB7IFNjYWxhciB9IGZyb20gJ0BtYWluL3NjYWxhci9pbmRleCc7XHJcbmltcG9ydCB7IFNjYWxhckxpa2UgfSBmcm9tICdAbWFpbi9zY2FsYXIvaW5kZXgnO1xyXG5pbXBvcnQgeyBTY2FsYXJPZiB9IGZyb20gJ0BtYWluL3NjYWxhci9pbmRleCc7XHJcblxyXG4vKipcclxuICogVGVybmFyeSBvcGVyYXRpb24uXHJcbiAqL1xyXG5AZmluYWxcclxuQGZyb3plblxyXG5leHBvcnQgY2xhc3MgVGVybmFyeTxUPiBpbXBsZW1lbnRzIFNjYWxhcjxUPiB7XHJcbiAgICAvKipcclxuICAgICAqIFRlc3QgY29uZGl0aW9uLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvbmRpdGlvbjogU2NhbGFyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIHdoZW4gY29uZGl0aW9uIGlzIHRydWUuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgY29uc2VxdWVudDogU2NhbGFyPFQ+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIHdoZW4gY29uZGl0aW9uIGlzIGZhbHNlLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGFsdGVybmF0aXZlOiBTY2FsYXI8VD47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDdG9yLlxyXG4gICAgICogQHBhcmFtIGNvbmRpdGlvbiBUZXN0IGNvbmRpdGlvbi5cclxuICAgICAqIEBwYXJhbSBjb25zZXF1ZW50IFJldHVybiB3aGVuIGNvbmRpdGlvbiBpcyB0cnVlLlxyXG4gICAgICogQHBhcmFtIGFsdGVybmF0aXZlIFJldHVybiB3aGVuIGNvbmRpdGlvbiBpcyBmYWxzZS5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoY29uZGl0aW9uOiBTY2FsYXJMaWtlPGJvb2xlYW4+LCBjb25zZXF1ZW50OiBTY2FsYXJMaWtlPFQ+LCBhbHRlcm5hdGl2ZTogU2NhbGFyTGlrZTxUPikge1xyXG4gICAgICAgIHRoaXMuY29uZGl0aW9uID0gbmV3IFNjYWxhck9mKGNvbmRpdGlvbik7XHJcbiAgICAgICAgdGhpcy5jb25zZXF1ZW50ID0gbmV3IFNjYWxhck9mKGNvbnNlcXVlbnQpO1xyXG4gICAgICAgIHRoaXMuYWx0ZXJuYXRpdmUgPSBuZXcgU2NhbGFyT2YoYWx0ZXJuYXRpdmUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVHlwZSBkZXRlcm1pbmFudC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGlzU2NhbGFyKCk6IHRydWUge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB2YWx1ZSgpOiBUIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb25kaXRpb24udmFsdWUoKSA/IHRoaXMuY29uc2VxdWVudC52YWx1ZSgpIDogdGhpcy5hbHRlcm5hdGl2ZS52YWx1ZSgpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGZpbmFsIH0gZnJvbSAnQG1haW4vaW5kZXgnO1xyXG5pbXBvcnQgeyBmcm96ZW4gfSBmcm9tICdAbWFpbi9pbmRleCc7XHJcbmltcG9ydCB7IFNjYWxhciB9IGZyb20gJ0BtYWluL3NjYWxhci9pbmRleCc7XHJcblxyXG4vKipcclxuICogVHJ1ZSBzY2FsYXIuXHJcbiAqL1xyXG5AZmluYWxcclxuQGZyb3plblxyXG5leHBvcnQgY2xhc3MgVHJ1ZSBpbXBsZW1lbnRzIFNjYWxhcjxib29sZWFuPiB7XHJcbiAgICAvKipcclxuICAgICAqIFR5cGUgZGV0ZXJtaW5hbnQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpc1NjYWxhcigpOiB0cnVlIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB2YWx1ZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBmaW5hbCB9IGZyb20gJ0BtYWluL2luZGV4JztcclxuaW1wb3J0IHsgZnJvemVuIH0gZnJvbSAnQG1haW4vaW5kZXgnO1xyXG5pbXBvcnQgeyBTY2FsYXIgfSBmcm9tICdAbWFpbi9zY2FsYXIvaW5kZXgnO1xyXG5cclxuLyoqXHJcbiAqIFVuZGVmaW5lZCBzY2FsYXIuXHJcbiAqL1xyXG5AZmluYWxcclxuQGZyb3plblxyXG5leHBvcnQgY2xhc3MgVW5kZWZpbmVkIGltcGxlbWVudHMgU2NhbGFyPHVuZGVmaW5lZD4ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUeXBlIGRldGVybWluYW50LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaXNTY2FsYXIoKTogdHJ1ZSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdmFsdWUoKTogdW5kZWZpbmVkIHtcclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGZpbmFsIH0gZnJvbSAnQG1haW4vaW5kZXgnO1xyXG5pbXBvcnQgeyBmcm96ZW4gfSBmcm9tICdAbWFpbi9pbmRleCc7XHJcbmltcG9ydCB7IElzQmxhbmsgfSBmcm9tICdAbWFpbi9zY2FsYXIvaW5kZXgnO1xyXG5pbXBvcnQgeyBTY2FsYXIgfSBmcm9tICdAbWFpbi9zY2FsYXIvaW5kZXgnO1xyXG5pbXBvcnQgeyBTY2FsYXJMaWtlIH0gZnJvbSAnQG1haW4vc2NhbGFyL2luZGV4JztcclxuaW1wb3J0IHsgU2NhbGFyT2YgfSBmcm9tICdAbWFpbi9zY2FsYXIvaW5kZXgnO1xyXG5pbXBvcnQgeyBUZXJuYXJ5IH0gZnJvbSAnQG1haW4vc2NhbGFyL2luZGV4JztcclxuXHJcbi8qKlxyXG4gKiBDYWNoZWQgc2NhbGFyLlxyXG4gKi9cclxuQGZpbmFsXHJcbkBmcm96ZW5cclxuZXhwb3J0IGNsYXNzIFdpdGhGYWxsYmFjazxUPiBpbXBsZW1lbnRzIFNjYWxhcjxUPiB7XHJcbiAgICAvKipcclxuICAgICAqIFNvdXJjZS5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBzY2FsYXI6IFNjYWxhcjxUPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEN0b3IuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVmFsdWUuXHJcbiAgICAgKiBAcGFyYW0gZmFsbGJhY2sgRmFsbGJhY2sgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiBTY2FsYXJMaWtlPFQ+LCBmYWxsYmFjazogU2NhbGFyTGlrZTxUPikge1xyXG4gICAgICAgIHRoaXMuc2NhbGFyID0gbmV3IFRlcm5hcnkoXHJcbiAgICAgICAgICAgIG5ldyBJc0JsYW5rKHZhbHVlKSxcclxuICAgICAgICAgICAgbmV3IFNjYWxhck9mKGZhbGxiYWNrKSxcclxuICAgICAgICAgICAgbmV3IFNjYWxhck9mKHZhbHVlKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUeXBlIGRldGVybWluYW50LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaXNTY2FsYXIoKTogdHJ1ZSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdmFsdWUoKTogVCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NhbGFyLnZhbHVlKCk7XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIEluZGV4LlxyXG4gKi9cclxuZXhwb3J0ICogZnJvbSAnLi9BbmQnO1xyXG5leHBvcnQgKiBmcm9tICcuL0Jvb2xMaWtlJztcclxuZXhwb3J0ICogZnJvbSAnLi9Cb29sT2YnO1xyXG5leHBvcnQgKiBmcm9tICcuL0NhY2hlZCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vQ29uZGl0aW9uQ29uc2VxdWVudExpa2VQYWlyJztcclxuZXhwb3J0ICogZnJvbSAnLi9Db25kaXRpb25Db25zZXF1ZW50UGFpcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vQ29uZGl0aW9uZWQnO1xyXG5leHBvcnQgKiBmcm9tICcuL0ZhbHNlJztcclxuZXhwb3J0ICogZnJvbSAnLi9IYXNUcnVlUHJvcGVydHknO1xyXG5leHBvcnQgKiBmcm9tICcuL0hhc1RydWVSZXN1bHQnO1xyXG5leHBvcnQgKiBmcm9tICcuL0lzQmxhbmsnO1xyXG5leHBvcnQgKiBmcm9tICcuL0lzSnNGdW5jdGlvbic7XHJcbmV4cG9ydCAqIGZyb20gJy4vSXNOb3RCbGFuayc7XHJcbmV4cG9ydCAqIGZyb20gJy4vSXNOdWxsJztcclxuZXhwb3J0ICogZnJvbSAnLi9Jc09iamVjdCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vSXNTY2FsYXInO1xyXG5leHBvcnQgKiBmcm9tICcuL0lzVW5kZWZpbmVkJztcclxuZXhwb3J0ICogZnJvbSAnLi9NYXBPZic7XHJcbmV4cG9ydCAqIGZyb20gJy4vTm90JztcclxuZXhwb3J0ICogZnJvbSAnLi9OdWxsJztcclxuZXhwb3J0ICogZnJvbSAnLi9Pcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vUm91bmRlZCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vU2NhbGFyJztcclxuZXhwb3J0ICogZnJvbSAnLi9TY2FsYXJMaWtlJztcclxuZXhwb3J0ICogZnJvbSAnLi9TY2FsYXJPZic7XHJcbmV4cG9ydCAqIGZyb20gJy4vVGVybmFyeSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vVHJ1ZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vVW5kZWZpbmVkJztcclxuZXhwb3J0ICogZnJvbSAnLi9XaXRoRmFsbGJhY2snO1xyXG4iLCIvKipcclxuICogU2VhbCBjb25zdHJ1Y3RvciBhbmQgcHJvdG90eXBlLlxyXG4gKiBAcGFyYW0gdGFyZ2V0IFRhcmdldC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZWFsZWQodGFyZ2V0OiBGdW5jdGlvbik6IHZvaWQge1xyXG4gICAgT2JqZWN0LnNlYWwodGFyZ2V0KTtcclxuICAgIE9iamVjdC5zZWFsKHRhcmdldC5wcm90b3R5cGUpO1xyXG59XHJcbiJdfQ==
