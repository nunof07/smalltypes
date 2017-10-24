(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Pong.
 */
var index_1 = require("./system");
console.log(index_1.hello());

},{"./system":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Hello world.
 */
function hello() {
  return 'Hello world!';
}
exports.hello = hello;

},{}],3:[function(require,module,exports){
"use strict";

function __export(m) {
  for (var p in m) {
    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Sytem index.
 */
__export(require("./hello"));
__export(require("./sealed"));

},{"./hello":2,"./sealed":4}],4:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvcmVtYWtlL21haW4vbWFpbi50cyIsInNyYy9yZW1ha2UvbWFpbi9zeXN0ZW0vaGVsbG8udHMiLCJzcmMvcmVtYWtlL21haW4vc3lzdGVtL2luZGV4LnRzIiwic3JjL3JlbWFrZS9tYWluL3N5c3RlbS9zZWFsZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUNBQSxBQUVHOzs7QUFDSCxjQUEyQztBQUMzQyxBQUFPLFFBQUMsQUFBRyxJQUFDLFFBQUssQUFBRSxBQUFDLEFBQUM7Ozs7OztBQ0pyQixBQUVHOzs7QUFDSDtBQUNJLEFBQU0sU0FBQyxBQUFjLEFBQUMsQUFDMUI7QUFBQztBQUZELGdCQUVDOzs7Ozs7Ozs7OztBQ0xELEFBRUc7OztBQUNILGlCQUF3QjtBQUN4QixpQkFBeUI7Ozs7OztBQ0p6QixBQUdHOzs7O0FBQ0gsZ0JBQXVCLEFBQWdCO0FBQ25DLEFBQU0sU0FBQyxBQUFJLEtBQUMsQUFBTSxBQUFDLEFBQUM7QUFDcEIsQUFBTSxTQUFDLEFBQUksS0FBQyxBQUFNLE9BQUMsQUFBUyxBQUFDLEFBQUMsQUFDbEM7QUFBQztBQUhELGlCQUdDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qKlxyXG4gKiBQb25nLlxyXG4gKi9cclxuaW1wb3J0IHsgaGVsbG8gfSBmcm9tICdAbWFpbi9zeXN0ZW0vaW5kZXgnO1xyXG5jb25zb2xlLmxvZyhoZWxsbygpKTtcclxuIiwiLyoqXHJcbiAqIEhlbGxvIHdvcmxkLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGhlbGxvKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gJ0hlbGxvIHdvcmxkISc7XHJcbn1cclxuIiwiLyoqXHJcbiAqIFN5dGVtIGluZGV4LlxyXG4gKi9cclxuZXhwb3J0ICogZnJvbSAnLi9oZWxsbyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vc2VhbGVkJztcclxuIiwiLyoqXHJcbiAqIFNlYWwgY29uc3RydWN0b3IgYW5kIHByb3RvdHlwZS5cclxuICogQHBhcmFtIHRhcmdldCBUYXJnZXQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2VhbGVkKHRhcmdldDogRnVuY3Rpb24pOiB2b2lkIHtcclxuICAgIE9iamVjdC5zZWFsKHRhcmdldCk7XHJcbiAgICBPYmplY3Quc2VhbCh0YXJnZXQucHJvdG90eXBlKTtcclxufVxyXG4iXX0=
