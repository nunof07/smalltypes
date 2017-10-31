(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./pong");
/**
 * Main.
 */
new index_1.Pong().start();

},{"./pong":3}],2:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../system");
var index_2 = require("../system");
/**
 * Pong game.
 */
var Pong = function () {
    function Pong() {
        _classCallCheck(this, Pong);
    }

    _createClass(Pong, [{
        key: "start",

        /**
         * Start game.
         */
        value: function start() {
            throw new Error('Game not implemented.');
        }
    }]);

    return Pong;
}();
Pong = __decorate([index_1.final, index_2.frozen], Pong);
exports.Pong = Pong;

},{"../system":8}],3:[function(require,module,exports){
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
__export(require("./Pong"));

},{"./Pong":2}],4:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Illegal inheritance exception.
 */

var IllegalInheritanceError = function (_Error) {
    _inherits(IllegalInheritanceError, _Error);

    function IllegalInheritanceError(message) {
        _classCallCheck(this, IllegalInheritanceError);

        var _this = _possibleConstructorReturn(this, (IllegalInheritanceError.__proto__ || Object.getPrototypeOf(IllegalInheritanceError)).call(this, message));

        Error.captureStackTrace(_this, _this.constructor);
        return _this;
    }

    return IllegalInheritanceError;
}(Error);

exports.IllegalInheritanceError = IllegalInheritanceError;

},{}],5:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Illegal state exception.
 */

var IllegalStateError = function (_Error) {
    _inherits(IllegalStateError, _Error);

    function IllegalStateError(message) {
        _classCallCheck(this, IllegalStateError);

        var _this = _possibleConstructorReturn(this, (IllegalStateError.__proto__ || Object.getPrototypeOf(IllegalStateError)).call(this, message));

        Error.captureStackTrace(_this, _this.constructor);
        return _this;
    }

    return IllegalStateError;
}(Error);

exports.IllegalStateError = IllegalStateError;

},{}],6:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
/**
 * Prevent instances from inherited classes.
 * @param target Class.
 */
// tslint:disable-next-line:no-any
function final(target) {
    return function (_target) {
        _inherits(Final, _target);

        // tslint:disable-next-line:no-any
        function Final() {
            var _ref;

            _classCallCheck(this, Final);

            if (new.target !== Final) {
                throw new index_1.IllegalInheritanceError('Cannot inherit from final class');
            }

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return _possibleConstructorReturn(this, (_ref = Final.__proto__ || Object.getPrototypeOf(Final)).call.apply(_ref, [this].concat(args)));
        }

        return Final;
    }(target);
}
exports.final = final;

},{"./index":8}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Freeze constructor and prototype.
 * @param target Target.
 */
function frozen(target) {
  Object.freeze(target);
  Object.freeze(target.prototype);
}
exports.frozen = frozen;

},{}],8:[function(require,module,exports){
"use strict";

function __export(m) {
    for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./final"));
__export(require("./frozen"));
__export(require("./IllegalInheritanceError"));
__export(require("./IllegalStateError"));
__export(require("./sealed"));

},{"./IllegalInheritanceError":4,"./IllegalStateError":5,"./final":6,"./frozen":7,"./sealed":9}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Seal constructor and prototype.
 * @param target Target.
 */
function sealed(target) {
  Object.seal(target);
  Object.seal(target.prototype);
}
exports.sealed = sealed;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvcmVtYWtlL21haW4vbWFpbi50cyIsInNyYy9yZW1ha2UvbWFpbi9wb25nL1BvbmcudHMiLCJzcmMvcmVtYWtlL21haW4vcG9uZy9pbmRleC50cyIsInNyYy9yZW1ha2UvbWFpbi9zeXN0ZW0vSWxsZWdhbEluaGVyaXRhbmNlRXJyb3IudHMiLCJzcmMvcmVtYWtlL21haW4vc3lzdGVtL0lsbGVnYWxTdGF0ZUVycm9yLnRzIiwic3JjL3JlbWFrZS9tYWluL3N5c3RlbS9maW5hbC50cyIsInNyYy9yZW1ha2UvbWFpbi9zeXN0ZW0vZnJvemVuLnRzIiwic3JjL3JlbWFrZS9tYWluL3N5c3RlbS9pbmRleC50cyIsInNyYy9yZW1ha2UvbWFpbi9zeXN0ZW0vc2VhbGVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FDQUEsY0FBd0M7QUFFeEMsQUFFRzs7O0FBQ0gsSUFBSSxRQUFJLEFBQUUsT0FBQyxBQUFLLEFBQUUsQUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKbkIsY0FBMkM7QUFDM0MsY0FBNEM7QUFFNUMsQUFFRzs7O0FBR0g7QUFBQSxBQUFhLEFBQUk7Ozs7Ozs7QUFDYixBQUVHLEFBQ0ksQUFBSzs7OztBQUNSLGtCQUFNLElBQUksQUFBSyxNQUFDLEFBQXVCLEFBQUMsQUFBQyxBQUM3QztBQUFDLEFBQ0o7Ozs7O0FBUFksQUFBSSxtQkFGaEIsUUFBSyxPQUNMLFFBQU0sU0FDTSxBQUFJLEFBT2hCO0FBUFksZUFBSTs7Ozs7Ozs7Ozs7QUNUakIsQUFFRzs7O0FBQ0gsaUJBQXVCOzs7Ozs7Ozs7Ozs7QUNIdkIsQUFFRyxBQUNIOzs7O0lBQXFDOzs7QUFDakMscUNBQVksQUFBZ0I7QUFDeEIsQUFBSzs7c0pBQUMsQUFBTyxBQUFDLEFBQUM7O0FBQ2YsQUFBSyxjQUFDLEFBQWlCLEFBQUMsQUFBSSx5QkFBRSxBQUFJLE1BQUMsQUFBVyxBQUFDLEFBQUMsQUFDcEQ7O0FBQUMsQUFDSjs7O0VBTDRDLEFBQUs7O0FBQWxELGtDQUtDOzs7Ozs7Ozs7Ozs7QUNSRCxBQUVHLEFBQ0g7Ozs7SUFBK0I7OztBQUMzQiwrQkFBWSxBQUFnQjtBQUN4QixBQUFLOzswSUFBQyxBQUFPLEFBQUMsQUFBQzs7QUFDZixBQUFLLGNBQUMsQUFBaUIsQUFBQyxBQUFJLHlCQUFFLEFBQUksTUFBQyxBQUFXLEFBQUMsQUFBQyxBQUNwRDs7QUFBQyxBQUNKOzs7RUFMc0MsQUFBSzs7QUFBNUMsNEJBS0M7Ozs7Ozs7Ozs7OztBQ1JELGNBQTZEO0FBRTdELEFBR0c7Ozs7QUFDSCxBQUFrQztBQUNsQyxlQUFrRSxBQUFTO0FBQ3ZFLEFBQU0sQUFBQyxBQUFZOzs7QUFDZixBQUFrQztBQUNsQyxBQUFZOzs7OztBQUNSLEFBQUUsQUFBQyxnQkFBQyxBQUFHLElBQUMsQUFBTSxXQUFLLEFBQUssQUFBQyxPQUFDLEFBQUM7QUFDdkIsc0JBQU0sSUFBSSxRQUF1Qix3QkFBQyxBQUFpQyxBQUFDLEFBQUMsQUFDekU7QUFBQyxBQUNELEFBQUssQUFBQzs7O0FBSkssQUFBVzs7OzRJQUliLEFBQUksQUFBQyxBQUFDLEFBQ25CO0FBQUMsQUFDSixBQUFDLEFBQ047OztNQVQrQixBQUFNO0FBU3BDO0FBVkQsZ0JBVUM7Ozs7OztBQ2pCRCxBQUdHOzs7O0FBQ0gsZ0JBQXVCLEFBQWdCO0FBQ25DLEFBQU0sU0FBQyxBQUFNLE9BQUMsQUFBTSxBQUFDLEFBQUM7QUFDdEIsQUFBTSxTQUFDLEFBQU0sT0FBQyxBQUFNLE9BQUMsQUFBUyxBQUFDLEFBQUMsQUFDcEM7QUFBQztBQUhELGlCQUdDOzs7Ozs7Ozs7OztBQ0hELGlCQUF3QjtBQUN4QixpQkFBeUI7QUFDekIsaUJBQTBDO0FBQzFDLGlCQUFvQztBQUVwQyxpQkFBeUI7Ozs7OztBQ1R6QixBQUdHOzs7O0FBQ0gsZ0JBQXVCLEFBQWdCO0FBQ25DLEFBQU0sU0FBQyxBQUFJLEtBQUMsQUFBTSxBQUFDLEFBQUM7QUFDcEIsQUFBTSxTQUFDLEFBQUksS0FBQyxBQUFNLE9BQUMsQUFBUyxBQUFDLEFBQUMsQUFDbEM7QUFBQztBQUhELGlCQUdDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCB7IFBvbmcgfSBmcm9tICdAbWFpbi9wb25nL2luZGV4JztcclxuXHJcbi8qKlxyXG4gKiBNYWluLlxyXG4gKi9cclxubmV3IFBvbmcoKS5zdGFydCgpO1xyXG4iLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSAnQG1haW4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IGZpbmFsIH0gZnJvbSAnQG1haW4vc3lzdGVtL2luZGV4JztcclxuaW1wb3J0IHsgZnJvemVuIH0gZnJvbSAnQG1haW4vc3lzdGVtL2luZGV4JztcclxuXHJcbi8qKlxyXG4gKiBQb25nIGdhbWUuXHJcbiAqL1xyXG5AZmluYWxcclxuQGZyb3plblxyXG5leHBvcnQgY2xhc3MgUG9uZyBpbXBsZW1lbnRzIEdhbWUge1xyXG4gICAgLyoqXHJcbiAgICAgKiBTdGFydCBnYW1lLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdHYW1lIG5vdCBpbXBsZW1lbnRlZC4nKTtcclxuICAgIH1cclxufVxyXG4iLCIvKipcclxuICogSW5kZXguXHJcbiAqL1xyXG5leHBvcnQgKiBmcm9tICcuL1BvbmcnO1xyXG4iLCIvKipcclxuICogSWxsZWdhbCBpbmhlcml0YW5jZSBleGNlcHRpb24uXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgSWxsZWdhbEluaGVyaXRhbmNlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlPzogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIobWVzc2FnZSk7XHJcbiAgICAgICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgdGhpcy5jb25zdHJ1Y3Rvcik7XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIElsbGVnYWwgc3RhdGUgZXhjZXB0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIElsbGVnYWxTdGF0ZUVycm9yIGV4dGVuZHMgRXJyb3Ige1xyXG4gICAgY29uc3RydWN0b3IobWVzc2FnZT86IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xyXG4gICAgICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIHRoaXMuY29uc3RydWN0b3IpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IElsbGVnYWxJbmhlcml0YW5jZUVycm9yIH0gZnJvbSAnQG1haW4vc3lzdGVtL2luZGV4JztcclxuXHJcbi8qKlxyXG4gKiBQcmV2ZW50IGluc3RhbmNlcyBmcm9tIGluaGVyaXRlZCBjbGFzc2VzLlxyXG4gKiBAcGFyYW0gdGFyZ2V0IENsYXNzLlxyXG4gKi9cclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG5leHBvcnQgZnVuY3Rpb24gZmluYWw8VCBleHRlbmRzIHsgbmV3ICguLi5hcmdzOiBhbnlbXSk6IG9iamVjdCB9Pih0YXJnZXQ6IFQpOiBUIHtcclxuICAgIHJldHVybiBjbGFzcyBGaW5hbCBleHRlbmRzIHRhcmdldCB7XHJcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gICAgICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XHJcbiAgICAgICAgICAgIGlmIChuZXcudGFyZ2V0ICE9PSBGaW5hbCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IElsbGVnYWxJbmhlcml0YW5jZUVycm9yKCdDYW5ub3QgaW5oZXJpdCBmcm9tIGZpbmFsIGNsYXNzJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3VwZXIoLi4uYXJncyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG4iLCIvKipcclxuICogRnJlZXplIGNvbnN0cnVjdG9yIGFuZCBwcm90b3R5cGUuXHJcbiAqIEBwYXJhbSB0YXJnZXQgVGFyZ2V0LlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGZyb3plbih0YXJnZXQ6IEZ1bmN0aW9uKTogdm9pZCB7XHJcbiAgICBPYmplY3QuZnJlZXplKHRhcmdldCk7XHJcbiAgICBPYmplY3QuZnJlZXplKHRhcmdldC5wcm90b3R5cGUpO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBTeXRlbSBpbmRleC5cclxuICovXHJcbmV4cG9ydCAqIGZyb20gJy4vQW55SW50QXJyYXknO1xyXG5leHBvcnQgKiBmcm9tICcuL2ZpbmFsJztcclxuZXhwb3J0ICogZnJvbSAnLi9mcm96ZW4nO1xyXG5leHBvcnQgKiBmcm9tICcuL0lsbGVnYWxJbmhlcml0YW5jZUVycm9yJztcclxuZXhwb3J0ICogZnJvbSAnLi9JbGxlZ2FsU3RhdGVFcnJvcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vSW50QXJyYXknO1xyXG5leHBvcnQgKiBmcm9tICcuL3NlYWxlZCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vVWludEFycmF5JztcclxuIiwiLyoqXHJcbiAqIFNlYWwgY29uc3RydWN0b3IgYW5kIHByb3RvdHlwZS5cclxuICogQHBhcmFtIHRhcmdldCBUYXJnZXQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2VhbGVkKHRhcmdldDogRnVuY3Rpb24pOiB2b2lkIHtcclxuICAgIE9iamVjdC5zZWFsKHRhcmdldCk7XHJcbiAgICBPYmplY3Quc2VhbCh0YXJnZXQucHJvdG90eXBlKTtcclxufVxyXG4iXX0=
