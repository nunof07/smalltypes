(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}

},{}],2:[function(require,module,exports){
module.exports = require('./lib/EntityManager.js')

},{"./lib/EntityManager.js":4}],3:[function(require,module,exports){
var EventEmitter = require('events').EventEmitter
var util = require('util')

module.exports = Entity

util.inherits(Entity, EventEmitter)

/**
 * Basic component-driven object with facade functions for interacting with the
 * injected EntityManager object.
 * @constructor
 */
function Entity () {
  /**
   * Unique identifier.
   */
  this.id = nextId++

  /**
   * Ref to the manager for this facade, injected right after being
   * instantiated.
   * @private
   */
  this._manager = null

  /**
   * List of all the types of components on this entity.
   * @type {Array.<Function>}
   * @private
   */
  this._Components = []

  /**
   * All tags that this entity currently has.
   * @type {Array.<String>}
   * @private
   */
  this._tags = []

  // All entities are event emitters.
  EventEmitter.call(this)
}

/**
 * Re-init for pooling purposes.
 * @private
 */
Entity.prototype.__init = function () {
  this.id = nextId++
  this._manager = null
  this._Components.length = 0
  this._tags.length = 0
}

var nextId = 0

/**
 * @param {Function} TComponent
 * @return {Entity} This entity.
 */
Entity.prototype.addComponent = function (TComponent) {
  this._manager.entityAddComponent(this, TComponent)
  return this
}

/**
 * @param {Function} TComponent
 * @return {Entity} This entity.
 */
Entity.prototype.removeComponent = function (TComponent) {
  this._manager.entityRemoveComponent(this, TComponent)
  return this
}

/**
 * @param {Function} TComponent
 * @return {boolean} True if this entity has TComponent.
 */
Entity.prototype.hasComponent = function (TComponent) {
  return !!~this._Components.indexOf(TComponent)
}

/**
 * Drop all components.
 */
Entity.prototype.removeAllComponents = function () {
  return this._manager.entityRemoveAllComponents(this)
}

/**
 * @param {Array.<Function>} Components
 * @return {boolean} True if entity has all Components.
 */
Entity.prototype.hasAllComponents = function (Components) {
  var b = true

  for (var i = 0; i < Components.length; i++) {
    var C = Components[i]
    b &= !!~this._Components.indexOf(C)
  }

  return b
}

/**
 * @param {String} tag
 * @return {boolean} True if entity has tag.
 */
Entity.prototype.hasTag = function (tag) {
  return !!~this._tags.indexOf(tag)
}

/**
 * @param {String} tag
 * @return {Entity} This entity.
 */
Entity.prototype.addTag = function (tag) {
  this._manager.entityAddTag(this, tag)
  return this
}

/**
 * @param {String} tag
 * @return {Entity} This entity.
 */
Entity.prototype.removeTag = function (tag) {
  this._manager.entityRemoveTag(this, tag)
  return this
}

/**
 * Remove the entity.
 * @return {void}
 */
Entity.prototype.remove = function () {
  return this._manager.removeEntity(this)
}

},{"events":1,"util":14}],4:[function(require,module,exports){
module.exports = function () {
  return new EntityManager()
}

var Entity = require('./Entity.js')
var createPool = require('reuse-pool')
var getName = require('typedef').getName

/**
 * Manage, create, and destroy entities. Can use methods to mutate entities
 * (tags, components) directly or via the facade on the Entity.
 * @constructor
 */
function EntityManager () {
  /**
   * Map of tags to the list of their entities.
   * @private
   */
  this._tags = {}

  /**
   * @type {Array.<Entity>}
   * @private
   */
  this._entities = []

  /**
   * @type {Array.<Group>}
   * @private
   */
  this._groups = {}

  /**
   * Pool entities.
   * @private
   */
  this._entityPool = createPool(function () { return new Entity() })

  /**
   * Map of component names to their respective object pools.
   * @private
   */
  this._componentPools = {}
}

/**
 * Used for indexing our component groups.
 * @constructor
 * @param {Array.<Function>} Components
 * @param {Array<Entity>} entities
 */
function Group (Components, entities) {
  this.Components = Components || []
  this.entities = entities || []
}

/**
 * Get a new entity.
 * @return {Entity}
 */
EntityManager.prototype.createEntity = function () {
  var entity = this._entityPool.get()

  this._entities.push(entity)
  entity._manager = this
  return entity
}

/**
 * Cleanly remove entities based on tag. Avoids loop issues.
 * @param {String} tag
 */
EntityManager.prototype.removeEntitiesByTag = function (tag) {
  var entities = this._tags[tag]

  if (!entities) return

  for (var x = entities.length - 1; x >= 0; x--) {
    var entity = entities[x]
    entity.remove()
  }
}

/**
 * Dump all entities out of the manager. Avoids loop issues.
 */
EntityManager.prototype.removeAllEntities = function () {
  for (var x = this._entities.length - 1; x >= 0; x--) {
    this._entities[x].remove()
  }
}

/**
 * Drop an entity. Returns it to the pool and fires all events for removing
 * components as well.
 * @param {Entity} entity
 */
EntityManager.prototype.removeEntity = function (entity) {
  var index = this._entities.indexOf(entity)

  if (!~index) {
    throw new Error('Tried to remove entity not in list')
  }

  this.entityRemoveAllComponents(entity)

  // Remove from entity list
  // entity.emit('removed')
  this._entities.splice(index, 1)

  // Remove entity from any tag groups and clear the on-entity ref
  entity._tags.length = 0
  for (var tag in this._tags) {
    var entities = this._tags[tag]
    var n = entities.indexOf(entity)
    if (~n) entities.splice(n, 1)
  }

  // Prevent any acecss and free
  entity._manager = null
  this._entityPool.recycle(entity)
  entity.removeAllListeners()
}

/**
 * @param {Entity} entity
 * @param {String} tag
 */
EntityManager.prototype.entityAddTag = function (entity, tag) {
  var entities = this._tags[tag]

  if (!entities) {
    entities = this._tags[tag] = []
  }

  // Don't add if already there
  if (~entities.indexOf(entity)) return

  // Add to our tag index AND the list on the entity
  entities.push(entity)
  entity._tags.push(tag)
}

/**
 * @param {Entity} entity
 * @param {String} tag
 */
EntityManager.prototype.entityRemoveTag = function (entity, tag) {
  var entities = this._tags[tag]
  if (!entities) return

  var index = entities.indexOf(entity)
  if (!~index) return

  // Remove from our index AND the list on the entity
  entities.splice(index, 1)
  entity._tags.splice(entity._tags.indexOf(tag), 1)
}

/**
 * @param {Entity} entity
 * @param {Function} Component
 */
EntityManager.prototype.entityAddComponent = function (entity, Component) {
  if (~entity._Components.indexOf(Component)) return

  entity._Components.push(Component)

  // Create the reference on the entity to this component
  var cName = componentPropertyName(Component)
  entity[cName] = new Component(entity)

  entity[cName].entity = entity

  // Check each indexed group to see if we need to add this entity to the list
  for (var groupName in this._groups) {
    var group = this._groups[groupName]

    // Only add this entity to a group index if this component is in the group,
    // this entity has all the components of the group, and its not already in
    // the index.
    if (!~group.Components.indexOf(Component)) {
      continue
    }
    if (!entity.hasAllComponents(group.Components)) {
      continue
    }
    if (~group.entities.indexOf(entity)) {
      continue
    }

    group.entities.push(entity)
  }

  entity.emit('component added', Component)
}

/**
 * Drop all components on an entity. Avoids loop issues.
 * @param {Entity} entity
 */
EntityManager.prototype.entityRemoveAllComponents = function (entity) {
  var Cs = entity._Components

  for (var j = Cs.length - 1; j >= 0; j--) {
    var C = Cs[j]
    entity.removeComponent(C)
  }
}

/**
 * @param {Entity} entity
 * @param {Function} Component
 */
EntityManager.prototype.entityRemoveComponent = function (entity, Component) {
  var index = entity._Components.indexOf(Component)
  if (!~index) return

  entity.emit('component removed', Component)

  // Check each indexed group to see if we need to remove it
  for (var groupName in this._groups) {
    var group = this._groups[groupName]

    if (!~group.Components.indexOf(Component)) {
      continue
    }
    if (!entity.hasAllComponents(group.Components)) {
      continue
    }

    var loc = group.entities.indexOf(entity)
    if (~loc) {
      group.entities.splice(loc, 1)
    }
  }

  // Remove T listing on entity and property ref, then free the component.
  var propName = componentPropertyName(Component)
  entity._Components.splice(index, 1)
  delete entity[propName]
}

/**
 * Get a list of entities that have a certain set of components.
 * @param {Array.<Function>} Components
 * @return {Array.<Entity>}
 */
EntityManager.prototype.queryComponents = function (Components) {
  var group = this._groups[groupKey(Components)]

  if (!group) {
    group = this._indexGroup(Components)
  }

  return group.entities
}

/**
 * Get a list of entities that all have a certain tag.
 * @param {String} tag
 * @return {Array.<Entity>}
 */
EntityManager.prototype.queryTag = function (tag) {
  var entities = this._tags[tag]

  if (entities === undefined) {
    entities = this._tags[tag] = []
  }

  return entities
}

/**
 * @return {Number} Total number of entities.
 */
EntityManager.prototype.count = function () {
  return this._entities.length
}

/**
 * Create an index of entities with a set of components.
 * @param {Array.<Function>} Components
 * @private
 */
EntityManager.prototype._indexGroup = function (Components) {
  var key = groupKey(Components)

  if (this._groups[key]) return

  var group = this._groups[key] = new Group(Components)

  for (var n = 0; n < this._entities.length; n++) {
    var entity = this._entities[n]
    if (entity.hasAllComponents(Components)) {
      group.entities.push(entity)
    }
  }

  return group
}

/**
 * @param {Function} Component
 * @return {String}
 * @private
 */
function componentPropertyName (Component) {
  var name = getName(Component)
  if (!name) {
    throw new Error('Component property name is empty, ' +
                    'try naming your component function')
  }
  return name.charAt(0).toLowerCase() + name.slice(1)
}

/**
 * @param {Array.<Function>} Components
 * @return {String}
 * @private
 */
function groupKey (Components) {
  var names = []
  for (var n = 0; n < Components.length; n++) {
    var T = Components[n]
    names.push(getName(T))
  }

  return names
    .map(function (x) { return x.toLowerCase() })
    .sort()
    .join('-')
}

},{"./Entity.js":3,"reuse-pool":6,"typedef":7}],5:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],6:[function(require,module,exports){
var EMPTY = {};
var NO_OP = function() {};

module.exports = reusePool;
function reusePool(factory, opts) {
    return new ReusePool(factory, opts);
}

function ReusePool(factory, opts) {
    this._factory = factory;
    this._recycled = [];
    opts = opts || EMPTY;
    this._prepare = opts.prepare || NO_OP;
    this._max = opts.max || Infinity;
}

ReusePool.prototype.get = function() {
    if (this._recycled.length) {
        var obj = this._recycled.pop();
        this._prepare(obj);
        return obj;
    } else {
        return this._factory();
    }
}

ReusePool.prototype.recycle = function(obj) {
	if (this._recycled.length < this._max) {
		this._recycled.push(obj);	
	}
}

},{}],7:[function(require,module,exports){
module.exports = {

  'extends'      : require('./lib/extends.js'),
  'mixin'        : require('./lib/mixin.js'),
  'getArguments' : require('./lib/getArguments.js'),
  'getName'      : require('./lib/getName.js')

};



},{"./lib/extends.js":8,"./lib/getArguments.js":9,"./lib/getName.js":10,"./lib/mixin.js":11}],8:[function(require,module,exports){
module.exports = extends_;

/**
 * The well documented, oft-used (Coffeescript, Typescript, ES6... etc) extends
 * pattern to get some sort of single-inheritance in Javascript.  Modify a
 * Child class to have inherited the static members via copying and link the
 * prototypes.
 * @param {Function} Child Child constructor function.
 * @param {Function} Parent Parent contrusctor function.
 * @return {Function} The Child constructor.
 */
function extends_(Child, Parent)
{
  // Drop in statics
  for (var key in Parent) {
    if (!Child.hasOwnProperty(key) && Parent.hasOwnProperty(key)) {
      Child[key] = Parent[key];
    }
  }

  // Give static to access parent
  Child.Super = Parent;

  // Child's prototype property is an object with the parent's prototype
  // property its [[prototype]] + constructor
  if (Object.create instanceof Function) {
    Child.prototype = Object.create(Parent.prototype, {
      constructor: { value: Child }
    });
  } else {
    // IE8 and below shim
    var T = makeT(Child);
    T.prototype = Parent.prototype;
    Child.prototype = new T();
  }

  return Child;
}

/**
 * @param {Function} Child
 * @return {Function}
 */
function makeT(Child)
{
  return function T() { this.constructor = Child; };
}


},{}],9:[function(require,module,exports){
module.exports = getArguments;

var FUNCTION_ARGS = /^\w*function[^\(]*\(([^\)]+)/;

/**
 * Get the parameter names of a function.
 * @param {Function} f A function.
 * @return {Array.<String>} An array of the argument names of a function.
 */
function getArguments(f)
{
  var ret = [];
  var args = f.toString().match(FUNCTION_ARGS);

  if (args) {
    args = args[1]
      .replace(/[ ]*,[ ]*/, ',')
      .split(',');
    for (var n = 0; n < args.length; n++) {
      var a = args[n].replace(/^\s+|\s+$/g, '');
      if (a) ret.push(a);
    }
  }

  return ret;
}


},{}],10:[function(require,module,exports){
module.exports = getName;

var FUNCTION_NAME = /function\s+([^\s(]+)/;

/**
 * Get the name of a function (e.g. constructor)
 * @param {Function} f
 * @return {String} The function name.
 */
function getName(f)
{
  var name = '';

  if (f instanceof Function) {
    if (f.name) {
      return f.name;
    }

    var match = f.toString().match(FUNCTION_NAME);

    if (match) {
      name = match[1];
    }
  } else if (f && f.constructor instanceof Function) {
    name = getName(f.constructor);
  }

  return name;
}

},{}],11:[function(require,module,exports){
module.exports = mixin_;

/**
 * Add all own properties of mixin to the prototype property of class T
 * @param {Function} T Class we want to mix into.
 * @param {Function|Object} mixin Mixin we want to mixt
 */
function mixin_(T, mixin)
{
  // If we're mixing in a class (constructor function), then first mix in all
  // things hanging directly off the mixin as "statics", then switch the mixin
  // ref to point to the prototype
  if (mixin instanceof Function) {
    for (var k in mixin) {
      T[k] = mixin[k];
    }
    mixin = mixin.prototype;
  }

  // Dump everything on the mixin into the prototype of our class
  for (var key in mixin) {
    if (mixin.hasOwnProperty(key)) {
      T.prototype[key] = mixin[key];
    }
  }
}


},{}],12:[function(require,module,exports){
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],13:[function(require,module,exports){
module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}
},{}],14:[function(require,module,exports){
(function (process,global){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = require('./support/isBuffer');

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = require('inherits');

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./support/isBuffer":13,"_process":5,"inherits":12}],15:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BootState_1 = require("./states/BootState");
var PreloaderState_1 = require("./states/PreloaderState");
var GameState_1 = require("./states/GameState");
var PongGame = /** @class */ (function () {
    function PongGame() {
        this._game = new Phaser.Game({
            width: 1024,
            height: 576,
            renderer: Phaser.AUTO,
            parent: 'game-container'
        });
    }
    PongGame.prototype.start = function () {
        this._game.state.add('boot', new BootState_1.default());
        this._game.state.add('preloader', new PreloaderState_1.default());
        this._game.state.add('game', new GameState_1.default());
        this._game.state.start('boot');
    };
    return PongGame;
}());
exports.default = PongGame;
},{"./states/BootState":32,"./states/GameState":33,"./states/PreloaderState":34}],16:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Randomizer = /** @class */ (function () {
    function Randomizer() {
    }
    Randomizer.prototype.boolean = function () {
        return Math.random() >= 0.5;
    };
    return Randomizer;
}());
exports.default = Randomizer;
},{}],17:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CoreComponentId_1 = require("../core/CoreComponentId");
var Collide = /** @class */ (function () {
    function Collide() {
    }
    Collide.prototype.id = function () {
        return new CoreComponentId_1.default('collide');
    };
    return Collide;
}());
exports.default = Collide;
},{"../core/CoreComponentId":20}],18:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CoreComponentId_1 = require("../core/CoreComponentId");
var Display = /** @class */ (function () {
    function Display() {
    }
    Display.prototype.id = function () {
        return new CoreComponentId_1.default('display');
    };
    return Display;
}());
exports.default = Display;
},{"../core/CoreComponentId":20}],19:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CoreComponentId_1 = require("../core/CoreComponentId");
var Move = /** @class */ (function () {
    function Move() {
    }
    Move.prototype.id = function () {
        return new CoreComponentId_1.default('move');
    };
    return Move;
}());
exports.default = Move;
},{"../core/CoreComponentId":20}],20:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CoreComponentId = /** @class */ (function () {
    function CoreComponentId(id) {
        this.id = id;
    }
    CoreComponentId.prototype.get = function () {
        return this.id;
    };
    return CoreComponentId;
}());
exports.default = CoreComponentId;
},{}],21:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TypeComponentRegistry = /** @class */ (function () {
    function TypeComponentRegistry() {
        this.types = {};
    }
    TypeComponentRegistry.prototype.add = function (component) {
        var key = component.id().get();
        this.types[key] = component.constructor;
        return this.types[key];
    };
    TypeComponentRegistry.prototype.get = function (id) {
        return this.types[id.get()];
    };
    TypeComponentRegistry.prototype.getAll = function (ids) {
        var _this = this;
        return ids.map(function (id) { return _this.get(id); });
    };
    return TypeComponentRegistry;
}());
exports.default = TypeComponentRegistry;
},{}],22:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NanoEntity = /** @class */ (function () {
    /**
     *
     * @param entity Entity created from nano-ecs.
     */
    function NanoEntity(entity, registry) {
        this.entity = entity;
        this.registry = registry;
    }
    NanoEntity.prototype.id = function () {
        return this.entity.id;
    };
    NanoEntity.prototype.attach = function (component) {
        this.registry.add(component);
        this.entity.addComponent(component);
    };
    NanoEntity.prototype.has = function (components) {
        return this.entity.hasAllComponents(this.registry.getAll(components));
    };
    NanoEntity.prototype.get = function (component) {
        return this.entity[component.get()];
    };
    return NanoEntity;
}());
exports.default = NanoEntity;
},{}],23:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nano = require("nano-ecs");
var TypeComponentRegistry_1 = require("../core/TypeComponentRegistry");
var NanoEntity_1 = require("./NanoEntity");
var NanoEntityPool = /** @class */ (function () {
    function NanoEntityPool() {
        this.nano = nano();
        this.entities = {};
        this.registry = new TypeComponentRegistry_1.default();
    }
    NanoEntityPool.prototype.create = function () {
        var entity = this.nano.createEntity();
        this.entities[entity.id] = new NanoEntity_1.default(entity, this.registry);
        return this.entities[entity.id];
    };
    NanoEntityPool.prototype.query = function (components) {
        var _this = this;
        var entities = this.nano.queryComponents(this.registry.getAll(components));
        return entities.map(function (entity) {
            return _this.entities[entity.id];
        });
    };
    return NanoEntityPool;
}());
exports.default = NanoEntityPool;
},{"../core/TypeComponentRegistry":21,"./NanoEntity":22,"nano-ecs":2}],24:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Move_1 = require("./components/Move");
var Collide_1 = require("./components/Collide");
var Display_1 = require("./components/Display");
var NanoEntityPool_1 = require("./nano/NanoEntityPool");
var CoreComponentId_1 = require("./core/CoreComponentId");
function default_1() {
    var pool = new NanoEntityPool_1.default();
    var first = pool.create();
    first.attach(new Move_1.default());
    first.attach(new Display_1.default());
    console.log('first has Move, Display', first.has([new CoreComponentId_1.default('move'), new CoreComponentId_1.default('display')]));
    console.log('first has Collide', first.has([new CoreComponentId_1.default('collide')]));
    var second = pool.create();
    second.attach(new Collide_1.default());
    console.log('second has Move, Display', second.has([new CoreComponentId_1.default('move'), new CoreComponentId_1.default('display')]));
    console.log('second has Collide', second.has([new CoreComponentId_1.default('collide')]));
    console.log('all entities with Move, Display', pool.query([new CoreComponentId_1.default('move'), new CoreComponentId_1.default('display')]));
    console.log('all entities with Collide', pool.query([new CoreComponentId_1.default('collide')]));
    console.log('all entities with Move', pool.query([new CoreComponentId_1.default('move')]));
}
exports.default = default_1;
;
},{"./components/Collide":17,"./components/Display":18,"./components/Move":19,"./core/CoreComponentId":20,"./nano/NanoEntityPool":23}],25:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Randomizer_1 = require("../Randomizer");
var Ball = /** @class */ (function () {
    function Ball(state, velocity, goLeft, randomizer) {
        if (velocity === void 0) { velocity = 400; }
        if (goLeft === void 0) { goLeft = true; }
        if (randomizer === void 0) { randomizer = new Randomizer_1.default(); }
        this._state = state;
        this._velocity = velocity;
        this._isLaunched = false;
        this._randomizer = randomizer;
        this._goLeft = goLeft;
    }
    Ball.prototype.create = function () {
        this._sprite = this._state.game.add.sprite(this._state.game.world.centerX, this._state.game.world.centerY, 'ball');
        this._sprite.anchor.setTo(0.5, 0.5);
        this._state.game.physics.arcade.enable(this._sprite);
        this._sprite.body.collideWorldBounds = true;
        this._sprite.body.bounce.setTo(1, 1);
    };
    Ball.prototype.reset = function (goLeft) {
        this._sprite.x = this._state.game.world.centerX;
        this._sprite.y = this._state.game.world.centerY;
        this._sprite.body.velocity.setTo(0, 0);
        this._isLaunched = false;
        this._goLeft = goLeft;
    };
    Ball.prototype.launch = function () {
        var xMultiplier = this._goLeft ? -1 : 1;
        var yMultiplier = this._randomizer.boolean() ? -1 : 1;
        this._sprite.body.velocity.x = xMultiplier * this._velocity;
        this._sprite.body.velocity.y = yMultiplier * this._velocity;
        this._isLaunched = true;
    };
    Ball.prototype.toggle = function () {
        if (this._isLaunched) {
            this.reset(this._goLeft);
            return false;
        }
        else {
            this.launch();
            return true;
        }
    };
    Object.defineProperty(Ball.prototype, "sprite", {
        get: function () {
            return this._sprite;
        },
        enumerable: true,
        configurable: true
    });
    return Ball;
}());
exports.default = Ball;
},{"../Randomizer":16}],26:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Score_1 = require("./Score");
var Computer = /** @class */ (function () {
    function Computer(state, paddle, ball, maxVelocity, score) {
        if (maxVelocity === void 0) { maxVelocity = 250; }
        if (score === void 0) { score = new Score_1.default(state); }
        this._state = state;
        this._paddle = paddle;
        this._ball = ball;
        this._maxVelocity = maxVelocity;
        this._score = score;
    }
    Computer.prototype.create = function () {
        this._paddle.create(this._state.game.world.width - 8, this._state.game.world.centerY);
        this._score.create(this._state.game.world.width - 128, 128);
    };
    Computer.prototype.update = function () {
        this._paddle.sprite.body.velocity.setTo(this._ball.sprite.body.velocity.y);
        this._paddle.sprite.body.velocity.x = 0;
        this._paddle.sprite.body.maxVelocity.y = this._maxVelocity;
    };
    Object.defineProperty(Computer.prototype, "paddle", {
        get: function () {
            return this._paddle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Computer.prototype, "score", {
        get: function () {
            return this._score;
        },
        enumerable: true,
        configurable: true
    });
    return Computer;
}());
exports.default = Computer;
},{"./Score":30}],27:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Score_1 = require("./Score");
var Human = /** @class */ (function () {
    function Human(state, paddle, score) {
        if (score === void 0) { score = new Score_1.default(state); }
        this._state = state;
        this._paddle = paddle;
        this._score = score;
    }
    Human.prototype.create = function () {
        this._paddle.create(0, this._state.game.world.centerY);
        this._score.create(128, 128);
    };
    Human.prototype.update = function () {
        this._paddle.move(this._state.game.input.y);
    };
    Object.defineProperty(Human.prototype, "paddle", {
        get: function () {
            return this._paddle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Human.prototype, "score", {
        get: function () {
            return this._score;
        },
        enumerable: true,
        configurable: true
    });
    return Human;
}());
exports.default = Human;
},{"./Score":30}],28:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Music = /** @class */ (function () {
    function Music(state) {
        this._state = state;
    }
    Music.prototype.create = function () {
        this._sound = this._state.game.add.audio('music');
    };
    Music.prototype.toggle = function (play) {
        if (play) {
            if (this._sound.paused) {
                this._sound.resume();
            }
            else {
                this._sound.play();
            }
            return true;
        }
        else {
            this._sound.pause();
            return false;
        }
    };
    Music.prototype.pause = function () {
        this._sound.pause();
    };
    return Music;
}());
exports.default = Music;
},{}],29:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Paddle = /** @class */ (function () {
    function Paddle(state) {
        this._state = state;
    }
    Paddle.prototype.create = function (x, y) {
        this._sprite = this._state.game.add.sprite(x, y, 'paddle');
        this._sprite.anchor.setTo(0.5, 0.5);
        this._state.game.physics.arcade.enable(this._sprite);
        this._sprite.body.collideWorldBounds = true;
        this._sprite.body.immovable = true;
        this._sprite.scale.setTo(0.5, 0.5);
        this._minY = 0.5 * this._sprite.height;
        this._maxY = this._state.game.world.height - 0.5 * this._sprite.height;
    };
    Paddle.prototype.move = function (y) {
        this._sprite.y = y;
        if (this._sprite.y < this._minY) {
            this._sprite.y = this._minY;
        }
        else if (this._sprite.y > this._maxY) {
            this._sprite.y = this._maxY;
        }
    };
    Object.defineProperty(Paddle.prototype, "sprite", {
        get: function () {
            return this._sprite;
        },
        enumerable: true,
        configurable: true
    });
    return Paddle;
}());
exports.default = Paddle;
},{}],30:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Score = /** @class */ (function () {
    function Score(state) {
        this._state = state;
        this._value = 0;
    }
    Score.prototype.create = function (x, y) {
        this._bitmap = this._state.game.add.bitmapText(Math.floor(x), Math.floor(y), 'Press Start 2P', '0', 32);
    };
    Score.prototype.increase = function () {
        this._value += 1;
        this._bitmap.text = '' + this._value;
    };
    return Score;
}());
exports.default = Score;
},{}],31:[function(require,module,exports){
"use strict";
/// <reference path="../typings/index.d.ts"/>
Object.defineProperty(exports, "__esModule", { value: true });
var test_1 = require("./ecs/test");
test_1.default();
var PongGame_1 = require("./PongGame");
new PongGame_1.default().start();
},{"./PongGame":15,"./ecs/test":24}],32:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BootState = /** @class */ (function (_super) {
    __extends(BootState, _super);
    function BootState() {
        return _super.call(this) || this;
    }
    BootState.prototype.init = function () {
        // scale to fit screen
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.scale.forceLandscape = true;
        this.game.scale.windowConstraints.bottom = 'visual'; // make sure it doesn't go over screen height
        this.game.scale.refresh();
        // keep pixels sharp
        this.game.antialias = false;
        this.game.stage.smoothed = false;
        Phaser.Canvas.setImageRenderingCrisp(this.game.canvas);
    };
    BootState.prototype.update = function () {
        this.game.state.start('preloader');
    };
    return BootState;
}(Phaser.State));
exports.default = BootState;
},{}],33:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Human_1 = require("../entities/Human");
var Computer_1 = require("../entities/Computer");
var Ball_1 = require("../entities/Ball");
var Paddle_1 = require("../entities/Paddle");
var Music_1 = require("../entities/Music");
var GameState = /** @class */ (function (_super) {
    __extends(GameState, _super);
    function GameState() {
        var _this = _super.call(this) || this;
        _this._ball = new Ball_1.default(_this);
        _this._players = [
            new Human_1.default(_this, new Paddle_1.default(_this)),
            new Computer_1.default(_this, new Paddle_1.default(_this), _this._ball)
        ];
        _this._music = new Music_1.default(_this);
        return _this;
    }
    GameState.prototype.create = function () {
        var _this = this;
        this._music.create();
        this._ball.create();
        this._players.forEach(function (player) { return player.create(); });
        this.game.input.onDown.add(function () {
            _this._music.toggle(_this._ball.toggle());
        }, this);
    };
    GameState.prototype.update = function () {
        var _this = this;
        this._players.forEach(function (player) {
            player.update();
            _this.game.physics.arcade.collide(player.paddle.sprite, _this._ball.sprite, function () { return _this.game.sound.play('hit'); });
        });
        if (this._ball.sprite.body.blocked.up || this._ball.sprite.body.blocked.down) {
            this.game.sound.play('wall');
        }
        if (this._ball.sprite.body.blocked.left) {
            this.score(this._players[1], false);
        }
        if (this._ball.sprite.body.blocked.right) {
            this.score(this._players[0], true);
        }
    };
    GameState.prototype.score = function (player, goLeft) {
        player.score.increase();
        this.game.sound.play('score');
        this._ball.reset(goLeft);
        this._music.pause();
    };
    return GameState;
}(Phaser.State));
exports.default = GameState;
},{"../entities/Ball":25,"../entities/Computer":26,"../entities/Human":27,"../entities/Music":28,"../entities/Paddle":29}],34:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var PreloaderState = /** @class */ (function (_super) {
    __extends(PreloaderState, _super);
    function PreloaderState() {
        return _super.call(this) || this;
    }
    PreloaderState.prototype.preload = function () {
        this.game.load.image('paddle', 'images/paddle.png');
        this.game.load.image('ball', 'images/ball.png');
        this.game.load.bitmapFont('Press Start 2P', 'fonts/Press_Start_2P_0.png', 'fonts/Press_Start_2P.fnt');
        this.game.load.audio('hit', ['audio/hit.wav']);
        this.game.load.audio('score', ['audio/score.wav']);
        this.game.load.audio('wall', ['audio/wall.wav']);
        this.game.load.audio('music', ['audio/at-night-psg.mp3', 'audio/at-night-psg.ogg']);
    };
    PreloaderState.prototype.update = function () {
        this.game.state.start('game');
    };
    return PreloaderState;
}(Phaser.State));
exports.default = PreloaderState;
},{}]},{},[31])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvZXZlbnRzL2V2ZW50cy5qcyIsIm5vZGVfbW9kdWxlcy9uYW5vLWVjcy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9uYW5vLWVjcy9saWIvRW50aXR5LmpzIiwibm9kZV9tb2R1bGVzL25hbm8tZWNzL2xpYi9FbnRpdHlNYW5hZ2VyLmpzIiwibm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIm5vZGVfbW9kdWxlcy9yZXVzZS1wb29sL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3R5cGVkZWYvaW5kZXguanMiLCJub2RlX21vZHVsZXMvdHlwZWRlZi9saWIvZXh0ZW5kcy5qcyIsIm5vZGVfbW9kdWxlcy90eXBlZGVmL2xpYi9nZXRBcmd1bWVudHMuanMiLCJub2RlX21vZHVsZXMvdHlwZWRlZi9saWIvZ2V0TmFtZS5qcyIsIm5vZGVfbW9kdWxlcy90eXBlZGVmL2xpYi9taXhpbi5qcyIsIm5vZGVfbW9kdWxlcy91dGlsL25vZGVfbW9kdWxlcy9pbmhlcml0cy9pbmhlcml0c19icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL3V0aWwvc3VwcG9ydC9pc0J1ZmZlckJyb3dzZXIuanMiLCJub2RlX21vZHVsZXMvdXRpbC91dGlsLmpzIiwic3JjL1BvbmdHYW1lLnRzIiwic3JjL1JhbmRvbWl6ZXIudHMiLCJzcmMvZWNzL2NvbXBvbmVudHMvQ29sbGlkZS50cyIsInNyYy9lY3MvY29tcG9uZW50cy9EaXNwbGF5LnRzIiwic3JjL2Vjcy9jb21wb25lbnRzL01vdmUudHMiLCJzcmMvZWNzL2NvcmUvQ29yZUNvbXBvbmVudElkLnRzIiwic3JjL2Vjcy9jb3JlL1R5cGVDb21wb25lbnRSZWdpc3RyeS50cyIsInNyYy9lY3MvbmFuby9OYW5vRW50aXR5LnRzIiwic3JjL2Vjcy9uYW5vL05hbm9FbnRpdHlQb29sLnRzIiwic3JjL2Vjcy90ZXN0LnRzIiwic3JjL2VudGl0aWVzL0JhbGwudHMiLCJzcmMvZW50aXRpZXMvQ29tcHV0ZXIudHMiLCJzcmMvZW50aXRpZXMvSHVtYW4udHMiLCJzcmMvZW50aXRpZXMvTXVzaWMudHMiLCJzcmMvZW50aXRpZXMvUGFkZGxlLnRzIiwic3JjL2VudGl0aWVzL1Njb3JlLnRzIiwic3JjL21haW4udHMiLCJzcmMvc3RhdGVzL0Jvb3RTdGF0ZS50cyIsInNyYy9zdGF0ZXMvR2FtZVN0YXRlLnRzIiwic3JjL3N0YXRlcy9QcmVsb2FkZXJTdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5U0E7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUUsQ0FBQyx3QkFBd0IsRUFBRSx3QkFBd0IsQ0FBQyxDQUFDLENBQUM7SUFDeEYsQ0FBQztJQUVNLCtCQUFNLEdBQWI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FsQkEsQUFrQkMsQ0FsQjJDLE1BQU0sQ0FBQyxLQUFLLEdBa0J2RCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuZnVuY3Rpb24gRXZlbnRFbWl0dGVyKCkge1xuICB0aGlzLl9ldmVudHMgPSB0aGlzLl9ldmVudHMgfHwge307XG4gIHRoaXMuX21heExpc3RlbmVycyA9IHRoaXMuX21heExpc3RlbmVycyB8fCB1bmRlZmluZWQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50RW1pdHRlcjtcblxuLy8gQmFja3dhcmRzLWNvbXBhdCB3aXRoIG5vZGUgMC4xMC54XG5FdmVudEVtaXR0ZXIuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHMgPSB1bmRlZmluZWQ7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9tYXhMaXN0ZW5lcnMgPSB1bmRlZmluZWQ7XG5cbi8vIEJ5IGRlZmF1bHQgRXZlbnRFbWl0dGVycyB3aWxsIHByaW50IGEgd2FybmluZyBpZiBtb3JlIHRoYW4gMTAgbGlzdGVuZXJzIGFyZVxuLy8gYWRkZWQgdG8gaXQuIFRoaXMgaXMgYSB1c2VmdWwgZGVmYXVsdCB3aGljaCBoZWxwcyBmaW5kaW5nIG1lbW9yeSBsZWFrcy5cbkV2ZW50RW1pdHRlci5kZWZhdWx0TWF4TGlzdGVuZXJzID0gMTA7XG5cbi8vIE9idmlvdXNseSBub3QgYWxsIEVtaXR0ZXJzIHNob3VsZCBiZSBsaW1pdGVkIHRvIDEwLiBUaGlzIGZ1bmN0aW9uIGFsbG93c1xuLy8gdGhhdCB0byBiZSBpbmNyZWFzZWQuIFNldCB0byB6ZXJvIGZvciB1bmxpbWl0ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnNldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uKG4pIHtcbiAgaWYgKCFpc051bWJlcihuKSB8fCBuIDwgMCB8fCBpc05hTihuKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ24gbXVzdCBiZSBhIHBvc2l0aXZlIG51bWJlcicpO1xuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSBuO1xuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgdmFyIGVyLCBoYW5kbGVyLCBsZW4sIGFyZ3MsIGksIGxpc3RlbmVycztcblxuICBpZiAoIXRoaXMuX2V2ZW50cylcbiAgICB0aGlzLl9ldmVudHMgPSB7fTtcblxuICAvLyBJZiB0aGVyZSBpcyBubyAnZXJyb3InIGV2ZW50IGxpc3RlbmVyIHRoZW4gdGhyb3cuXG4gIGlmICh0eXBlID09PSAnZXJyb3InKSB7XG4gICAgaWYgKCF0aGlzLl9ldmVudHMuZXJyb3IgfHxcbiAgICAgICAgKGlzT2JqZWN0KHRoaXMuX2V2ZW50cy5lcnJvcikgJiYgIXRoaXMuX2V2ZW50cy5lcnJvci5sZW5ndGgpKSB7XG4gICAgICBlciA9IGFyZ3VtZW50c1sxXTtcbiAgICAgIGlmIChlciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIHRocm93IGVyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQXQgbGVhc3QgZ2l2ZSBzb21lIGtpbmQgb2YgY29udGV4dCB0byB0aGUgdXNlclxuICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdVbmNhdWdodCwgdW5zcGVjaWZpZWQgXCJlcnJvclwiIGV2ZW50LiAoJyArIGVyICsgJyknKTtcbiAgICAgICAgZXJyLmNvbnRleHQgPSBlcjtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZXIgPSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgaWYgKGlzVW5kZWZpbmVkKGhhbmRsZXIpKVxuICAgIHJldHVybiBmYWxzZTtcblxuICBpZiAoaXNGdW5jdGlvbihoYW5kbGVyKSkge1xuICAgIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgLy8gZmFzdCBjYXNlc1xuICAgICAgY2FzZSAxOlxuICAgICAgICBoYW5kbGVyLmNhbGwodGhpcyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICBoYW5kbGVyLmNhbGwodGhpcywgYXJndW1lbnRzWzFdKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8gc2xvd2VyXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgICAgaGFuZGxlci5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNPYmplY3QoaGFuZGxlcikpIHtcbiAgICBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICBsaXN0ZW5lcnMgPSBoYW5kbGVyLnNsaWNlKCk7XG4gICAgbGVuID0gbGlzdGVuZXJzLmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspXG4gICAgICBsaXN0ZW5lcnNbaV0uYXBwbHkodGhpcywgYXJncyk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgbTtcblxuICBpZiAoIWlzRnVuY3Rpb24obGlzdGVuZXIpKVxuICAgIHRocm93IFR5cGVFcnJvcignbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMpXG4gICAgdGhpcy5fZXZlbnRzID0ge307XG5cbiAgLy8gVG8gYXZvaWQgcmVjdXJzaW9uIGluIHRoZSBjYXNlIHRoYXQgdHlwZSA9PT0gXCJuZXdMaXN0ZW5lclwiISBCZWZvcmVcbiAgLy8gYWRkaW5nIGl0IHRvIHRoZSBsaXN0ZW5lcnMsIGZpcnN0IGVtaXQgXCJuZXdMaXN0ZW5lclwiLlxuICBpZiAodGhpcy5fZXZlbnRzLm5ld0xpc3RlbmVyKVxuICAgIHRoaXMuZW1pdCgnbmV3TGlzdGVuZXInLCB0eXBlLFxuICAgICAgICAgICAgICBpc0Z1bmN0aW9uKGxpc3RlbmVyLmxpc3RlbmVyKSA/XG4gICAgICAgICAgICAgIGxpc3RlbmVyLmxpc3RlbmVyIDogbGlzdGVuZXIpO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgIC8vIE9wdGltaXplIHRoZSBjYXNlIG9mIG9uZSBsaXN0ZW5lci4gRG9uJ3QgbmVlZCB0aGUgZXh0cmEgYXJyYXkgb2JqZWN0LlxuICAgIHRoaXMuX2V2ZW50c1t0eXBlXSA9IGxpc3RlbmVyO1xuICBlbHNlIGlmIChpc09iamVjdCh0aGlzLl9ldmVudHNbdHlwZV0pKVxuICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgZ290IGFuIGFycmF5LCBqdXN0IGFwcGVuZC5cbiAgICB0aGlzLl9ldmVudHNbdHlwZV0ucHVzaChsaXN0ZW5lcik7XG4gIGVsc2VcbiAgICAvLyBBZGRpbmcgdGhlIHNlY29uZCBlbGVtZW50LCBuZWVkIHRvIGNoYW5nZSB0byBhcnJheS5cbiAgICB0aGlzLl9ldmVudHNbdHlwZV0gPSBbdGhpcy5fZXZlbnRzW3R5cGVdLCBsaXN0ZW5lcl07XG5cbiAgLy8gQ2hlY2sgZm9yIGxpc3RlbmVyIGxlYWtcbiAgaWYgKGlzT2JqZWN0KHRoaXMuX2V2ZW50c1t0eXBlXSkgJiYgIXRoaXMuX2V2ZW50c1t0eXBlXS53YXJuZWQpIHtcbiAgICBpZiAoIWlzVW5kZWZpbmVkKHRoaXMuX21heExpc3RlbmVycykpIHtcbiAgICAgIG0gPSB0aGlzLl9tYXhMaXN0ZW5lcnM7XG4gICAgfSBlbHNlIHtcbiAgICAgIG0gPSBFdmVudEVtaXR0ZXIuZGVmYXVsdE1heExpc3RlbmVycztcbiAgICB9XG5cbiAgICBpZiAobSAmJiBtID4gMCAmJiB0aGlzLl9ldmVudHNbdHlwZV0ubGVuZ3RoID4gbSkge1xuICAgICAgdGhpcy5fZXZlbnRzW3R5cGVdLndhcm5lZCA9IHRydWU7XG4gICAgICBjb25zb2xlLmVycm9yKCcobm9kZSkgd2FybmluZzogcG9zc2libGUgRXZlbnRFbWl0dGVyIG1lbW9yeSAnICtcbiAgICAgICAgICAgICAgICAgICAgJ2xlYWsgZGV0ZWN0ZWQuICVkIGxpc3RlbmVycyBhZGRlZC4gJyArXG4gICAgICAgICAgICAgICAgICAgICdVc2UgZW1pdHRlci5zZXRNYXhMaXN0ZW5lcnMoKSB0byBpbmNyZWFzZSBsaW1pdC4nLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ldmVudHNbdHlwZV0ubGVuZ3RoKTtcbiAgICAgIGlmICh0eXBlb2YgY29uc29sZS50cmFjZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBub3Qgc3VwcG9ydGVkIGluIElFIDEwXG4gICAgICAgIGNvbnNvbGUudHJhY2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub24gPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICBpZiAoIWlzRnVuY3Rpb24obGlzdGVuZXIpKVxuICAgIHRocm93IFR5cGVFcnJvcignbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cbiAgdmFyIGZpcmVkID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gZygpIHtcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGcpO1xuXG4gICAgaWYgKCFmaXJlZCkge1xuICAgICAgZmlyZWQgPSB0cnVlO1xuICAgICAgbGlzdGVuZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBnLmxpc3RlbmVyID0gbGlzdGVuZXI7XG4gIHRoaXMub24odHlwZSwgZyk7XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vLyBlbWl0cyBhICdyZW1vdmVMaXN0ZW5lcicgZXZlbnQgaWZmIHRoZSBsaXN0ZW5lciB3YXMgcmVtb3ZlZFxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHZhciBsaXN0LCBwb3NpdGlvbiwgbGVuZ3RoLCBpO1xuXG4gIGlmICghaXNGdW5jdGlvbihsaXN0ZW5lcikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCdsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblxuICBpZiAoIXRoaXMuX2V2ZW50cyB8fCAhdGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgIHJldHVybiB0aGlzO1xuXG4gIGxpc3QgPSB0aGlzLl9ldmVudHNbdHlwZV07XG4gIGxlbmd0aCA9IGxpc3QubGVuZ3RoO1xuICBwb3NpdGlvbiA9IC0xO1xuXG4gIGlmIChsaXN0ID09PSBsaXN0ZW5lciB8fFxuICAgICAgKGlzRnVuY3Rpb24obGlzdC5saXN0ZW5lcikgJiYgbGlzdC5saXN0ZW5lciA9PT0gbGlzdGVuZXIpKSB7XG4gICAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgICBpZiAodGhpcy5fZXZlbnRzLnJlbW92ZUxpc3RlbmVyKVxuICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIGxpc3RlbmVyKTtcblxuICB9IGVsc2UgaWYgKGlzT2JqZWN0KGxpc3QpKSB7XG4gICAgZm9yIChpID0gbGVuZ3RoOyBpLS0gPiAwOykge1xuICAgICAgaWYgKGxpc3RbaV0gPT09IGxpc3RlbmVyIHx8XG4gICAgICAgICAgKGxpc3RbaV0ubGlzdGVuZXIgJiYgbGlzdFtpXS5saXN0ZW5lciA9PT0gbGlzdGVuZXIpKSB7XG4gICAgICAgIHBvc2l0aW9uID0gaTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBvc2l0aW9uIDwgMClcbiAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgaWYgKGxpc3QubGVuZ3RoID09PSAxKSB7XG4gICAgICBsaXN0Lmxlbmd0aCA9IDA7XG4gICAgICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuICAgIH0gZWxzZSB7XG4gICAgICBsaXN0LnNwbGljZShwb3NpdGlvbiwgMSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2V2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0ZW5lcik7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID0gZnVuY3Rpb24odHlwZSkge1xuICB2YXIga2V5LCBsaXN0ZW5lcnM7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMpXG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgLy8gbm90IGxpc3RlbmluZyBmb3IgcmVtb3ZlTGlzdGVuZXIsIG5vIG5lZWQgdG8gZW1pdFxuICBpZiAoIXRoaXMuX2V2ZW50cy5yZW1vdmVMaXN0ZW5lcikge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKVxuICAgICAgdGhpcy5fZXZlbnRzID0ge307XG4gICAgZWxzZSBpZiAodGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgICAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIGVtaXQgcmVtb3ZlTGlzdGVuZXIgZm9yIGFsbCBsaXN0ZW5lcnMgb24gYWxsIGV2ZW50c1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgIGZvciAoa2V5IGluIHRoaXMuX2V2ZW50cykge1xuICAgICAgaWYgKGtleSA9PT0gJ3JlbW92ZUxpc3RlbmVyJykgY29udGludWU7XG4gICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycyhrZXkpO1xuICAgIH1cbiAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycygncmVtb3ZlTGlzdGVuZXInKTtcbiAgICB0aGlzLl9ldmVudHMgPSB7fTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICBpZiAoaXNGdW5jdGlvbihsaXN0ZW5lcnMpKSB7XG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnMpO1xuICB9IGVsc2UgaWYgKGxpc3RlbmVycykge1xuICAgIC8vIExJRk8gb3JkZXJcbiAgICB3aGlsZSAobGlzdGVuZXJzLmxlbmd0aClcbiAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzW2xpc3RlbmVycy5sZW5ndGggLSAxXSk7XG4gIH1cbiAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24odHlwZSkge1xuICB2YXIgcmV0O1xuICBpZiAoIXRoaXMuX2V2ZW50cyB8fCAhdGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgIHJldCA9IFtdO1xuICBlbHNlIGlmIChpc0Z1bmN0aW9uKHRoaXMuX2V2ZW50c1t0eXBlXSkpXG4gICAgcmV0ID0gW3RoaXMuX2V2ZW50c1t0eXBlXV07XG4gIGVsc2VcbiAgICByZXQgPSB0aGlzLl9ldmVudHNbdHlwZV0uc2xpY2UoKTtcbiAgcmV0dXJuIHJldDtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJDb3VudCA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgaWYgKHRoaXMuX2V2ZW50cykge1xuICAgIHZhciBldmxpc3RlbmVyID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuXG4gICAgaWYgKGlzRnVuY3Rpb24oZXZsaXN0ZW5lcikpXG4gICAgICByZXR1cm4gMTtcbiAgICBlbHNlIGlmIChldmxpc3RlbmVyKVxuICAgICAgcmV0dXJuIGV2bGlzdGVuZXIubGVuZ3RoO1xuICB9XG4gIHJldHVybiAwO1xufTtcblxuRXZlbnRFbWl0dGVyLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbihlbWl0dGVyLCB0eXBlKSB7XG4gIHJldHVybiBlbWl0dGVyLmxpc3RlbmVyQ291bnQodHlwZSk7XG59O1xuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuZnVuY3Rpb24gaXNOdW1iZXIoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnbnVtYmVyJztcbn1cblxuZnVuY3Rpb24gaXNPYmplY3QoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnb2JqZWN0JyAmJiBhcmcgIT09IG51bGw7XG59XG5cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKGFyZykge1xuICByZXR1cm4gYXJnID09PSB2b2lkIDA7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL0VudGl0eU1hbmFnZXIuanMnKVxuIiwidmFyIEV2ZW50RW1pdHRlciA9IHJlcXVpcmUoJ2V2ZW50cycpLkV2ZW50RW1pdHRlclxudmFyIHV0aWwgPSByZXF1aXJlKCd1dGlsJylcblxubW9kdWxlLmV4cG9ydHMgPSBFbnRpdHlcblxudXRpbC5pbmhlcml0cyhFbnRpdHksIEV2ZW50RW1pdHRlcilcblxuLyoqXG4gKiBCYXNpYyBjb21wb25lbnQtZHJpdmVuIG9iamVjdCB3aXRoIGZhY2FkZSBmdW5jdGlvbnMgZm9yIGludGVyYWN0aW5nIHdpdGggdGhlXG4gKiBpbmplY3RlZCBFbnRpdHlNYW5hZ2VyIG9iamVjdC5cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBFbnRpdHkgKCkge1xuICAvKipcbiAgICogVW5pcXVlIGlkZW50aWZpZXIuXG4gICAqL1xuICB0aGlzLmlkID0gbmV4dElkKytcblxuICAvKipcbiAgICogUmVmIHRvIHRoZSBtYW5hZ2VyIGZvciB0aGlzIGZhY2FkZSwgaW5qZWN0ZWQgcmlnaHQgYWZ0ZXIgYmVpbmdcbiAgICogaW5zdGFudGlhdGVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgdGhpcy5fbWFuYWdlciA9IG51bGxcblxuICAvKipcbiAgICogTGlzdCBvZiBhbGwgdGhlIHR5cGVzIG9mIGNvbXBvbmVudHMgb24gdGhpcyBlbnRpdHkuXG4gICAqIEB0eXBlIHtBcnJheS48RnVuY3Rpb24+fVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgdGhpcy5fQ29tcG9uZW50cyA9IFtdXG5cbiAgLyoqXG4gICAqIEFsbCB0YWdzIHRoYXQgdGhpcyBlbnRpdHkgY3VycmVudGx5IGhhcy5cbiAgICogQHR5cGUge0FycmF5LjxTdHJpbmc+fVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgdGhpcy5fdGFncyA9IFtdXG5cbiAgLy8gQWxsIGVudGl0aWVzIGFyZSBldmVudCBlbWl0dGVycy5cbiAgRXZlbnRFbWl0dGVyLmNhbGwodGhpcylcbn1cblxuLyoqXG4gKiBSZS1pbml0IGZvciBwb29saW5nIHB1cnBvc2VzLlxuICogQHByaXZhdGVcbiAqL1xuRW50aXR5LnByb3RvdHlwZS5fX2luaXQgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuaWQgPSBuZXh0SWQrK1xuICB0aGlzLl9tYW5hZ2VyID0gbnVsbFxuICB0aGlzLl9Db21wb25lbnRzLmxlbmd0aCA9IDBcbiAgdGhpcy5fdGFncy5sZW5ndGggPSAwXG59XG5cbnZhciBuZXh0SWQgPSAwXG5cbi8qKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gVENvbXBvbmVudFxuICogQHJldHVybiB7RW50aXR5fSBUaGlzIGVudGl0eS5cbiAqL1xuRW50aXR5LnByb3RvdHlwZS5hZGRDb21wb25lbnQgPSBmdW5jdGlvbiAoVENvbXBvbmVudCkge1xuICB0aGlzLl9tYW5hZ2VyLmVudGl0eUFkZENvbXBvbmVudCh0aGlzLCBUQ29tcG9uZW50KVxuICByZXR1cm4gdGhpc1xufVxuXG4vKipcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFRDb21wb25lbnRcbiAqIEByZXR1cm4ge0VudGl0eX0gVGhpcyBlbnRpdHkuXG4gKi9cbkVudGl0eS5wcm90b3R5cGUucmVtb3ZlQ29tcG9uZW50ID0gZnVuY3Rpb24gKFRDb21wb25lbnQpIHtcbiAgdGhpcy5fbWFuYWdlci5lbnRpdHlSZW1vdmVDb21wb25lbnQodGhpcywgVENvbXBvbmVudClcbiAgcmV0dXJuIHRoaXNcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBUQ29tcG9uZW50XG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHRoaXMgZW50aXR5IGhhcyBUQ29tcG9uZW50LlxuICovXG5FbnRpdHkucHJvdG90eXBlLmhhc0NvbXBvbmVudCA9IGZ1bmN0aW9uIChUQ29tcG9uZW50KSB7XG4gIHJldHVybiAhIX50aGlzLl9Db21wb25lbnRzLmluZGV4T2YoVENvbXBvbmVudClcbn1cblxuLyoqXG4gKiBEcm9wIGFsbCBjb21wb25lbnRzLlxuICovXG5FbnRpdHkucHJvdG90eXBlLnJlbW92ZUFsbENvbXBvbmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLl9tYW5hZ2VyLmVudGl0eVJlbW92ZUFsbENvbXBvbmVudHModGhpcylcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0FycmF5LjxGdW5jdGlvbj59IENvbXBvbmVudHNcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgZW50aXR5IGhhcyBhbGwgQ29tcG9uZW50cy5cbiAqL1xuRW50aXR5LnByb3RvdHlwZS5oYXNBbGxDb21wb25lbnRzID0gZnVuY3Rpb24gKENvbXBvbmVudHMpIHtcbiAgdmFyIGIgPSB0cnVlXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBDb21wb25lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIEMgPSBDb21wb25lbnRzW2ldXG4gICAgYiAmPSAhIX50aGlzLl9Db21wb25lbnRzLmluZGV4T2YoQylcbiAgfVxuXG4gIHJldHVybiBiXG59XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IHRhZ1xuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBlbnRpdHkgaGFzIHRhZy5cbiAqL1xuRW50aXR5LnByb3RvdHlwZS5oYXNUYWcgPSBmdW5jdGlvbiAodGFnKSB7XG4gIHJldHVybiAhIX50aGlzLl90YWdzLmluZGV4T2YodGFnKVxufVxuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSB0YWdcbiAqIEByZXR1cm4ge0VudGl0eX0gVGhpcyBlbnRpdHkuXG4gKi9cbkVudGl0eS5wcm90b3R5cGUuYWRkVGFnID0gZnVuY3Rpb24gKHRhZykge1xuICB0aGlzLl9tYW5hZ2VyLmVudGl0eUFkZFRhZyh0aGlzLCB0YWcpXG4gIHJldHVybiB0aGlzXG59XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IHRhZ1xuICogQHJldHVybiB7RW50aXR5fSBUaGlzIGVudGl0eS5cbiAqL1xuRW50aXR5LnByb3RvdHlwZS5yZW1vdmVUYWcgPSBmdW5jdGlvbiAodGFnKSB7XG4gIHRoaXMuX21hbmFnZXIuZW50aXR5UmVtb3ZlVGFnKHRoaXMsIHRhZylcbiAgcmV0dXJuIHRoaXNcbn1cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGVudGl0eS5cbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbkVudGl0eS5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5fbWFuYWdlci5yZW1vdmVFbnRpdHkodGhpcylcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gbmV3IEVudGl0eU1hbmFnZXIoKVxufVxuXG52YXIgRW50aXR5ID0gcmVxdWlyZSgnLi9FbnRpdHkuanMnKVxudmFyIGNyZWF0ZVBvb2wgPSByZXF1aXJlKCdyZXVzZS1wb29sJylcbnZhciBnZXROYW1lID0gcmVxdWlyZSgndHlwZWRlZicpLmdldE5hbWVcblxuLyoqXG4gKiBNYW5hZ2UsIGNyZWF0ZSwgYW5kIGRlc3Ryb3kgZW50aXRpZXMuIENhbiB1c2UgbWV0aG9kcyB0byBtdXRhdGUgZW50aXRpZXNcbiAqICh0YWdzLCBjb21wb25lbnRzKSBkaXJlY3RseSBvciB2aWEgdGhlIGZhY2FkZSBvbiB0aGUgRW50aXR5LlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIEVudGl0eU1hbmFnZXIgKCkge1xuICAvKipcbiAgICogTWFwIG9mIHRhZ3MgdG8gdGhlIGxpc3Qgb2YgdGhlaXIgZW50aXRpZXMuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICB0aGlzLl90YWdzID0ge31cblxuICAvKipcbiAgICogQHR5cGUge0FycmF5LjxFbnRpdHk+fVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgdGhpcy5fZW50aXRpZXMgPSBbXVxuXG4gIC8qKlxuICAgKiBAdHlwZSB7QXJyYXkuPEdyb3VwPn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHRoaXMuX2dyb3VwcyA9IHt9XG5cbiAgLyoqXG4gICAqIFBvb2wgZW50aXRpZXMuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICB0aGlzLl9lbnRpdHlQb29sID0gY3JlYXRlUG9vbChmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgRW50aXR5KCkgfSlcblxuICAvKipcbiAgICogTWFwIG9mIGNvbXBvbmVudCBuYW1lcyB0byB0aGVpciByZXNwZWN0aXZlIG9iamVjdCBwb29scy5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHRoaXMuX2NvbXBvbmVudFBvb2xzID0ge31cbn1cblxuLyoqXG4gKiBVc2VkIGZvciBpbmRleGluZyBvdXIgY29tcG9uZW50IGdyb3Vwcy5cbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheS48RnVuY3Rpb24+fSBDb21wb25lbnRzXG4gKiBAcGFyYW0ge0FycmF5PEVudGl0eT59IGVudGl0aWVzXG4gKi9cbmZ1bmN0aW9uIEdyb3VwIChDb21wb25lbnRzLCBlbnRpdGllcykge1xuICB0aGlzLkNvbXBvbmVudHMgPSBDb21wb25lbnRzIHx8IFtdXG4gIHRoaXMuZW50aXRpZXMgPSBlbnRpdGllcyB8fCBbXVxufVxuXG4vKipcbiAqIEdldCBhIG5ldyBlbnRpdHkuXG4gKiBAcmV0dXJuIHtFbnRpdHl9XG4gKi9cbkVudGl0eU1hbmFnZXIucHJvdG90eXBlLmNyZWF0ZUVudGl0eSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGVudGl0eSA9IHRoaXMuX2VudGl0eVBvb2wuZ2V0KClcblxuICB0aGlzLl9lbnRpdGllcy5wdXNoKGVudGl0eSlcbiAgZW50aXR5Ll9tYW5hZ2VyID0gdGhpc1xuICByZXR1cm4gZW50aXR5XG59XG5cbi8qKlxuICogQ2xlYW5seSByZW1vdmUgZW50aXRpZXMgYmFzZWQgb24gdGFnLiBBdm9pZHMgbG9vcCBpc3N1ZXMuXG4gKiBAcGFyYW0ge1N0cmluZ30gdGFnXG4gKi9cbkVudGl0eU1hbmFnZXIucHJvdG90eXBlLnJlbW92ZUVudGl0aWVzQnlUYWcgPSBmdW5jdGlvbiAodGFnKSB7XG4gIHZhciBlbnRpdGllcyA9IHRoaXMuX3RhZ3NbdGFnXVxuXG4gIGlmICghZW50aXRpZXMpIHJldHVyblxuXG4gIGZvciAodmFyIHggPSBlbnRpdGllcy5sZW5ndGggLSAxOyB4ID49IDA7IHgtLSkge1xuICAgIHZhciBlbnRpdHkgPSBlbnRpdGllc1t4XVxuICAgIGVudGl0eS5yZW1vdmUoKVxuICB9XG59XG5cbi8qKlxuICogRHVtcCBhbGwgZW50aXRpZXMgb3V0IG9mIHRoZSBtYW5hZ2VyLiBBdm9pZHMgbG9vcCBpc3N1ZXMuXG4gKi9cbkVudGl0eU1hbmFnZXIucHJvdG90eXBlLnJlbW92ZUFsbEVudGl0aWVzID0gZnVuY3Rpb24gKCkge1xuICBmb3IgKHZhciB4ID0gdGhpcy5fZW50aXRpZXMubGVuZ3RoIC0gMTsgeCA+PSAwOyB4LS0pIHtcbiAgICB0aGlzLl9lbnRpdGllc1t4XS5yZW1vdmUoKVxuICB9XG59XG5cbi8qKlxuICogRHJvcCBhbiBlbnRpdHkuIFJldHVybnMgaXQgdG8gdGhlIHBvb2wgYW5kIGZpcmVzIGFsbCBldmVudHMgZm9yIHJlbW92aW5nXG4gKiBjb21wb25lbnRzIGFzIHdlbGwuXG4gKiBAcGFyYW0ge0VudGl0eX0gZW50aXR5XG4gKi9cbkVudGl0eU1hbmFnZXIucHJvdG90eXBlLnJlbW92ZUVudGl0eSA9IGZ1bmN0aW9uIChlbnRpdHkpIHtcbiAgdmFyIGluZGV4ID0gdGhpcy5fZW50aXRpZXMuaW5kZXhPZihlbnRpdHkpXG5cbiAgaWYgKCF+aW5kZXgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1RyaWVkIHRvIHJlbW92ZSBlbnRpdHkgbm90IGluIGxpc3QnKVxuICB9XG5cbiAgdGhpcy5lbnRpdHlSZW1vdmVBbGxDb21wb25lbnRzKGVudGl0eSlcblxuICAvLyBSZW1vdmUgZnJvbSBlbnRpdHkgbGlzdFxuICAvLyBlbnRpdHkuZW1pdCgncmVtb3ZlZCcpXG4gIHRoaXMuX2VudGl0aWVzLnNwbGljZShpbmRleCwgMSlcblxuICAvLyBSZW1vdmUgZW50aXR5IGZyb20gYW55IHRhZyBncm91cHMgYW5kIGNsZWFyIHRoZSBvbi1lbnRpdHkgcmVmXG4gIGVudGl0eS5fdGFncy5sZW5ndGggPSAwXG4gIGZvciAodmFyIHRhZyBpbiB0aGlzLl90YWdzKSB7XG4gICAgdmFyIGVudGl0aWVzID0gdGhpcy5fdGFnc1t0YWddXG4gICAgdmFyIG4gPSBlbnRpdGllcy5pbmRleE9mKGVudGl0eSlcbiAgICBpZiAofm4pIGVudGl0aWVzLnNwbGljZShuLCAxKVxuICB9XG5cbiAgLy8gUHJldmVudCBhbnkgYWNlY3NzIGFuZCBmcmVlXG4gIGVudGl0eS5fbWFuYWdlciA9IG51bGxcbiAgdGhpcy5fZW50aXR5UG9vbC5yZWN5Y2xlKGVudGl0eSlcbiAgZW50aXR5LnJlbW92ZUFsbExpc3RlbmVycygpXG59XG5cbi8qKlxuICogQHBhcmFtIHtFbnRpdHl9IGVudGl0eVxuICogQHBhcmFtIHtTdHJpbmd9IHRhZ1xuICovXG5FbnRpdHlNYW5hZ2VyLnByb3RvdHlwZS5lbnRpdHlBZGRUYWcgPSBmdW5jdGlvbiAoZW50aXR5LCB0YWcpIHtcbiAgdmFyIGVudGl0aWVzID0gdGhpcy5fdGFnc1t0YWddXG5cbiAgaWYgKCFlbnRpdGllcykge1xuICAgIGVudGl0aWVzID0gdGhpcy5fdGFnc1t0YWddID0gW11cbiAgfVxuXG4gIC8vIERvbid0IGFkZCBpZiBhbHJlYWR5IHRoZXJlXG4gIGlmICh+ZW50aXRpZXMuaW5kZXhPZihlbnRpdHkpKSByZXR1cm5cblxuICAvLyBBZGQgdG8gb3VyIHRhZyBpbmRleCBBTkQgdGhlIGxpc3Qgb24gdGhlIGVudGl0eVxuICBlbnRpdGllcy5wdXNoKGVudGl0eSlcbiAgZW50aXR5Ll90YWdzLnB1c2godGFnKVxufVxuXG4vKipcbiAqIEBwYXJhbSB7RW50aXR5fSBlbnRpdHlcbiAqIEBwYXJhbSB7U3RyaW5nfSB0YWdcbiAqL1xuRW50aXR5TWFuYWdlci5wcm90b3R5cGUuZW50aXR5UmVtb3ZlVGFnID0gZnVuY3Rpb24gKGVudGl0eSwgdGFnKSB7XG4gIHZhciBlbnRpdGllcyA9IHRoaXMuX3RhZ3NbdGFnXVxuICBpZiAoIWVudGl0aWVzKSByZXR1cm5cblxuICB2YXIgaW5kZXggPSBlbnRpdGllcy5pbmRleE9mKGVudGl0eSlcbiAgaWYgKCF+aW5kZXgpIHJldHVyblxuXG4gIC8vIFJlbW92ZSBmcm9tIG91ciBpbmRleCBBTkQgdGhlIGxpc3Qgb24gdGhlIGVudGl0eVxuICBlbnRpdGllcy5zcGxpY2UoaW5kZXgsIDEpXG4gIGVudGl0eS5fdGFncy5zcGxpY2UoZW50aXR5Ll90YWdzLmluZGV4T2YodGFnKSwgMSlcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0VudGl0eX0gZW50aXR5XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBDb21wb25lbnRcbiAqL1xuRW50aXR5TWFuYWdlci5wcm90b3R5cGUuZW50aXR5QWRkQ29tcG9uZW50ID0gZnVuY3Rpb24gKGVudGl0eSwgQ29tcG9uZW50KSB7XG4gIGlmICh+ZW50aXR5Ll9Db21wb25lbnRzLmluZGV4T2YoQ29tcG9uZW50KSkgcmV0dXJuXG5cbiAgZW50aXR5Ll9Db21wb25lbnRzLnB1c2goQ29tcG9uZW50KVxuXG4gIC8vIENyZWF0ZSB0aGUgcmVmZXJlbmNlIG9uIHRoZSBlbnRpdHkgdG8gdGhpcyBjb21wb25lbnRcbiAgdmFyIGNOYW1lID0gY29tcG9uZW50UHJvcGVydHlOYW1lKENvbXBvbmVudClcbiAgZW50aXR5W2NOYW1lXSA9IG5ldyBDb21wb25lbnQoZW50aXR5KVxuXG4gIGVudGl0eVtjTmFtZV0uZW50aXR5ID0gZW50aXR5XG5cbiAgLy8gQ2hlY2sgZWFjaCBpbmRleGVkIGdyb3VwIHRvIHNlZSBpZiB3ZSBuZWVkIHRvIGFkZCB0aGlzIGVudGl0eSB0byB0aGUgbGlzdFxuICBmb3IgKHZhciBncm91cE5hbWUgaW4gdGhpcy5fZ3JvdXBzKSB7XG4gICAgdmFyIGdyb3VwID0gdGhpcy5fZ3JvdXBzW2dyb3VwTmFtZV1cblxuICAgIC8vIE9ubHkgYWRkIHRoaXMgZW50aXR5IHRvIGEgZ3JvdXAgaW5kZXggaWYgdGhpcyBjb21wb25lbnQgaXMgaW4gdGhlIGdyb3VwLFxuICAgIC8vIHRoaXMgZW50aXR5IGhhcyBhbGwgdGhlIGNvbXBvbmVudHMgb2YgdGhlIGdyb3VwLCBhbmQgaXRzIG5vdCBhbHJlYWR5IGluXG4gICAgLy8gdGhlIGluZGV4LlxuICAgIGlmICghfmdyb3VwLkNvbXBvbmVudHMuaW5kZXhPZihDb21wb25lbnQpKSB7XG4gICAgICBjb250aW51ZVxuICAgIH1cbiAgICBpZiAoIWVudGl0eS5oYXNBbGxDb21wb25lbnRzKGdyb3VwLkNvbXBvbmVudHMpKSB7XG4gICAgICBjb250aW51ZVxuICAgIH1cbiAgICBpZiAofmdyb3VwLmVudGl0aWVzLmluZGV4T2YoZW50aXR5KSkge1xuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBncm91cC5lbnRpdGllcy5wdXNoKGVudGl0eSlcbiAgfVxuXG4gIGVudGl0eS5lbWl0KCdjb21wb25lbnQgYWRkZWQnLCBDb21wb25lbnQpXG59XG5cbi8qKlxuICogRHJvcCBhbGwgY29tcG9uZW50cyBvbiBhbiBlbnRpdHkuIEF2b2lkcyBsb29wIGlzc3Vlcy5cbiAqIEBwYXJhbSB7RW50aXR5fSBlbnRpdHlcbiAqL1xuRW50aXR5TWFuYWdlci5wcm90b3R5cGUuZW50aXR5UmVtb3ZlQWxsQ29tcG9uZW50cyA9IGZ1bmN0aW9uIChlbnRpdHkpIHtcbiAgdmFyIENzID0gZW50aXR5Ll9Db21wb25lbnRzXG5cbiAgZm9yICh2YXIgaiA9IENzLmxlbmd0aCAtIDE7IGogPj0gMDsgai0tKSB7XG4gICAgdmFyIEMgPSBDc1tqXVxuICAgIGVudGl0eS5yZW1vdmVDb21wb25lbnQoQylcbiAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7RW50aXR5fSBlbnRpdHlcbiAqIEBwYXJhbSB7RnVuY3Rpb259IENvbXBvbmVudFxuICovXG5FbnRpdHlNYW5hZ2VyLnByb3RvdHlwZS5lbnRpdHlSZW1vdmVDb21wb25lbnQgPSBmdW5jdGlvbiAoZW50aXR5LCBDb21wb25lbnQpIHtcbiAgdmFyIGluZGV4ID0gZW50aXR5Ll9Db21wb25lbnRzLmluZGV4T2YoQ29tcG9uZW50KVxuICBpZiAoIX5pbmRleCkgcmV0dXJuXG5cbiAgZW50aXR5LmVtaXQoJ2NvbXBvbmVudCByZW1vdmVkJywgQ29tcG9uZW50KVxuXG4gIC8vIENoZWNrIGVhY2ggaW5kZXhlZCBncm91cCB0byBzZWUgaWYgd2UgbmVlZCB0byByZW1vdmUgaXRcbiAgZm9yICh2YXIgZ3JvdXBOYW1lIGluIHRoaXMuX2dyb3Vwcykge1xuICAgIHZhciBncm91cCA9IHRoaXMuX2dyb3Vwc1tncm91cE5hbWVdXG5cbiAgICBpZiAoIX5ncm91cC5Db21wb25lbnRzLmluZGV4T2YoQ29tcG9uZW50KSkge1xuICAgICAgY29udGludWVcbiAgICB9XG4gICAgaWYgKCFlbnRpdHkuaGFzQWxsQ29tcG9uZW50cyhncm91cC5Db21wb25lbnRzKSkge1xuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICB2YXIgbG9jID0gZ3JvdXAuZW50aXRpZXMuaW5kZXhPZihlbnRpdHkpXG4gICAgaWYgKH5sb2MpIHtcbiAgICAgIGdyb3VwLmVudGl0aWVzLnNwbGljZShsb2MsIDEpXG4gICAgfVxuICB9XG5cbiAgLy8gUmVtb3ZlIFQgbGlzdGluZyBvbiBlbnRpdHkgYW5kIHByb3BlcnR5IHJlZiwgdGhlbiBmcmVlIHRoZSBjb21wb25lbnQuXG4gIHZhciBwcm9wTmFtZSA9IGNvbXBvbmVudFByb3BlcnR5TmFtZShDb21wb25lbnQpXG4gIGVudGl0eS5fQ29tcG9uZW50cy5zcGxpY2UoaW5kZXgsIDEpXG4gIGRlbGV0ZSBlbnRpdHlbcHJvcE5hbWVdXG59XG5cbi8qKlxuICogR2V0IGEgbGlzdCBvZiBlbnRpdGllcyB0aGF0IGhhdmUgYSBjZXJ0YWluIHNldCBvZiBjb21wb25lbnRzLlxuICogQHBhcmFtIHtBcnJheS48RnVuY3Rpb24+fSBDb21wb25lbnRzXG4gKiBAcmV0dXJuIHtBcnJheS48RW50aXR5Pn1cbiAqL1xuRW50aXR5TWFuYWdlci5wcm90b3R5cGUucXVlcnlDb21wb25lbnRzID0gZnVuY3Rpb24gKENvbXBvbmVudHMpIHtcbiAgdmFyIGdyb3VwID0gdGhpcy5fZ3JvdXBzW2dyb3VwS2V5KENvbXBvbmVudHMpXVxuXG4gIGlmICghZ3JvdXApIHtcbiAgICBncm91cCA9IHRoaXMuX2luZGV4R3JvdXAoQ29tcG9uZW50cylcbiAgfVxuXG4gIHJldHVybiBncm91cC5lbnRpdGllc1xufVxuXG4vKipcbiAqIEdldCBhIGxpc3Qgb2YgZW50aXRpZXMgdGhhdCBhbGwgaGF2ZSBhIGNlcnRhaW4gdGFnLlxuICogQHBhcmFtIHtTdHJpbmd9IHRhZ1xuICogQHJldHVybiB7QXJyYXkuPEVudGl0eT59XG4gKi9cbkVudGl0eU1hbmFnZXIucHJvdG90eXBlLnF1ZXJ5VGFnID0gZnVuY3Rpb24gKHRhZykge1xuICB2YXIgZW50aXRpZXMgPSB0aGlzLl90YWdzW3RhZ11cblxuICBpZiAoZW50aXRpZXMgPT09IHVuZGVmaW5lZCkge1xuICAgIGVudGl0aWVzID0gdGhpcy5fdGFnc1t0YWddID0gW11cbiAgfVxuXG4gIHJldHVybiBlbnRpdGllc1xufVxuXG4vKipcbiAqIEByZXR1cm4ge051bWJlcn0gVG90YWwgbnVtYmVyIG9mIGVudGl0aWVzLlxuICovXG5FbnRpdHlNYW5hZ2VyLnByb3RvdHlwZS5jb3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuX2VudGl0aWVzLmxlbmd0aFxufVxuXG4vKipcbiAqIENyZWF0ZSBhbiBpbmRleCBvZiBlbnRpdGllcyB3aXRoIGEgc2V0IG9mIGNvbXBvbmVudHMuXG4gKiBAcGFyYW0ge0FycmF5LjxGdW5jdGlvbj59IENvbXBvbmVudHNcbiAqIEBwcml2YXRlXG4gKi9cbkVudGl0eU1hbmFnZXIucHJvdG90eXBlLl9pbmRleEdyb3VwID0gZnVuY3Rpb24gKENvbXBvbmVudHMpIHtcbiAgdmFyIGtleSA9IGdyb3VwS2V5KENvbXBvbmVudHMpXG5cbiAgaWYgKHRoaXMuX2dyb3Vwc1trZXldKSByZXR1cm5cblxuICB2YXIgZ3JvdXAgPSB0aGlzLl9ncm91cHNba2V5XSA9IG5ldyBHcm91cChDb21wb25lbnRzKVxuXG4gIGZvciAodmFyIG4gPSAwOyBuIDwgdGhpcy5fZW50aXRpZXMubGVuZ3RoOyBuKyspIHtcbiAgICB2YXIgZW50aXR5ID0gdGhpcy5fZW50aXRpZXNbbl1cbiAgICBpZiAoZW50aXR5Lmhhc0FsbENvbXBvbmVudHMoQ29tcG9uZW50cykpIHtcbiAgICAgIGdyb3VwLmVudGl0aWVzLnB1c2goZW50aXR5KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBncm91cFxufVxuXG4vKipcbiAqIEBwYXJhbSB7RnVuY3Rpb259IENvbXBvbmVudFxuICogQHJldHVybiB7U3RyaW5nfVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY29tcG9uZW50UHJvcGVydHlOYW1lIChDb21wb25lbnQpIHtcbiAgdmFyIG5hbWUgPSBnZXROYW1lKENvbXBvbmVudClcbiAgaWYgKCFuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDb21wb25lbnQgcHJvcGVydHkgbmFtZSBpcyBlbXB0eSwgJyArXG4gICAgICAgICAgICAgICAgICAgICd0cnkgbmFtaW5nIHlvdXIgY29tcG9uZW50IGZ1bmN0aW9uJylcbiAgfVxuICByZXR1cm4gbmFtZS5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSArIG5hbWUuc2xpY2UoMSlcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0FycmF5LjxGdW5jdGlvbj59IENvbXBvbmVudHNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGdyb3VwS2V5IChDb21wb25lbnRzKSB7XG4gIHZhciBuYW1lcyA9IFtdXG4gIGZvciAodmFyIG4gPSAwOyBuIDwgQ29tcG9uZW50cy5sZW5ndGg7IG4rKykge1xuICAgIHZhciBUID0gQ29tcG9uZW50c1tuXVxuICAgIG5hbWVzLnB1c2goZ2V0TmFtZShUKSlcbiAgfVxuXG4gIHJldHVybiBuYW1lc1xuICAgIC5tYXAoZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHgudG9Mb3dlckNhc2UoKSB9KVxuICAgIC5zb3J0KClcbiAgICAuam9pbignLScpXG59XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwidmFyIEVNUFRZID0ge307XG52YXIgTk9fT1AgPSBmdW5jdGlvbigpIHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJldXNlUG9vbDtcbmZ1bmN0aW9uIHJldXNlUG9vbChmYWN0b3J5LCBvcHRzKSB7XG4gICAgcmV0dXJuIG5ldyBSZXVzZVBvb2woZmFjdG9yeSwgb3B0cyk7XG59XG5cbmZ1bmN0aW9uIFJldXNlUG9vbChmYWN0b3J5LCBvcHRzKSB7XG4gICAgdGhpcy5fZmFjdG9yeSA9IGZhY3Rvcnk7XG4gICAgdGhpcy5fcmVjeWNsZWQgPSBbXTtcbiAgICBvcHRzID0gb3B0cyB8fCBFTVBUWTtcbiAgICB0aGlzLl9wcmVwYXJlID0gb3B0cy5wcmVwYXJlIHx8IE5PX09QO1xuICAgIHRoaXMuX21heCA9IG9wdHMubWF4IHx8IEluZmluaXR5O1xufVxuXG5SZXVzZVBvb2wucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9yZWN5Y2xlZC5sZW5ndGgpIHtcbiAgICAgICAgdmFyIG9iaiA9IHRoaXMuX3JlY3ljbGVkLnBvcCgpO1xuICAgICAgICB0aGlzLl9wcmVwYXJlKG9iaik7XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZhY3RvcnkoKTtcbiAgICB9XG59XG5cblJldXNlUG9vbC5wcm90b3R5cGUucmVjeWNsZSA9IGZ1bmN0aW9uKG9iaikge1xuXHRpZiAodGhpcy5fcmVjeWNsZWQubGVuZ3RoIDwgdGhpcy5fbWF4KSB7XG5cdFx0dGhpcy5fcmVjeWNsZWQucHVzaChvYmopO1x0XG5cdH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXG4gICdleHRlbmRzJyAgICAgIDogcmVxdWlyZSgnLi9saWIvZXh0ZW5kcy5qcycpLFxuICAnbWl4aW4nICAgICAgICA6IHJlcXVpcmUoJy4vbGliL21peGluLmpzJyksXG4gICdnZXRBcmd1bWVudHMnIDogcmVxdWlyZSgnLi9saWIvZ2V0QXJndW1lbnRzLmpzJyksXG4gICdnZXROYW1lJyAgICAgIDogcmVxdWlyZSgnLi9saWIvZ2V0TmFtZS5qcycpXG5cbn07XG5cblxuIiwibW9kdWxlLmV4cG9ydHMgPSBleHRlbmRzXztcblxuLyoqXG4gKiBUaGUgd2VsbCBkb2N1bWVudGVkLCBvZnQtdXNlZCAoQ29mZmVlc2NyaXB0LCBUeXBlc2NyaXB0LCBFUzYuLi4gZXRjKSBleHRlbmRzXG4gKiBwYXR0ZXJuIHRvIGdldCBzb21lIHNvcnQgb2Ygc2luZ2xlLWluaGVyaXRhbmNlIGluIEphdmFzY3JpcHQuICBNb2RpZnkgYVxuICogQ2hpbGQgY2xhc3MgdG8gaGF2ZSBpbmhlcml0ZWQgdGhlIHN0YXRpYyBtZW1iZXJzIHZpYSBjb3B5aW5nIGFuZCBsaW5rIHRoZVxuICogcHJvdG90eXBlcy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IENoaWxkIENoaWxkIGNvbnN0cnVjdG9yIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gUGFyZW50IFBhcmVudCBjb250cnVzY3RvciBmdW5jdGlvbi5cbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSBUaGUgQ2hpbGQgY29uc3RydWN0b3IuXG4gKi9cbmZ1bmN0aW9uIGV4dGVuZHNfKENoaWxkLCBQYXJlbnQpXG57XG4gIC8vIERyb3AgaW4gc3RhdGljc1xuICBmb3IgKHZhciBrZXkgaW4gUGFyZW50KSB7XG4gICAgaWYgKCFDaGlsZC5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIFBhcmVudC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBDaGlsZFtrZXldID0gUGFyZW50W2tleV07XG4gICAgfVxuICB9XG5cbiAgLy8gR2l2ZSBzdGF0aWMgdG8gYWNjZXNzIHBhcmVudFxuICBDaGlsZC5TdXBlciA9IFBhcmVudDtcblxuICAvLyBDaGlsZCdzIHByb3RvdHlwZSBwcm9wZXJ0eSBpcyBhbiBvYmplY3Qgd2l0aCB0aGUgcGFyZW50J3MgcHJvdG90eXBlXG4gIC8vIHByb3BlcnR5IGl0cyBbW3Byb3RvdHlwZV1dICsgY29uc3RydWN0b3JcbiAgaWYgKE9iamVjdC5jcmVhdGUgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgIENoaWxkLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoUGFyZW50LnByb3RvdHlwZSwge1xuICAgICAgY29uc3RydWN0b3I6IHsgdmFsdWU6IENoaWxkIH1cbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBJRTggYW5kIGJlbG93IHNoaW1cbiAgICB2YXIgVCA9IG1ha2VUKENoaWxkKTtcbiAgICBULnByb3RvdHlwZSA9IFBhcmVudC5wcm90b3R5cGU7XG4gICAgQ2hpbGQucHJvdG90eXBlID0gbmV3IFQoKTtcbiAgfVxuXG4gIHJldHVybiBDaGlsZDtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBDaGlsZFxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIG1ha2VUKENoaWxkKVxue1xuICByZXR1cm4gZnVuY3Rpb24gVCgpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IENoaWxkOyB9O1xufVxuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGdldEFyZ3VtZW50cztcblxudmFyIEZVTkNUSU9OX0FSR1MgPSAvXlxcdypmdW5jdGlvblteXFwoXSpcXCgoW15cXCldKykvO1xuXG4vKipcbiAqIEdldCB0aGUgcGFyYW1ldGVyIG5hbWVzIG9mIGEgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmIEEgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtBcnJheS48U3RyaW5nPn0gQW4gYXJyYXkgb2YgdGhlIGFyZ3VtZW50IG5hbWVzIG9mIGEgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGdldEFyZ3VtZW50cyhmKVxue1xuICB2YXIgcmV0ID0gW107XG4gIHZhciBhcmdzID0gZi50b1N0cmluZygpLm1hdGNoKEZVTkNUSU9OX0FSR1MpO1xuXG4gIGlmIChhcmdzKSB7XG4gICAgYXJncyA9IGFyZ3NbMV1cbiAgICAgIC5yZXBsYWNlKC9bIF0qLFsgXSovLCAnLCcpXG4gICAgICAuc3BsaXQoJywnKTtcbiAgICBmb3IgKHZhciBuID0gMDsgbiA8IGFyZ3MubGVuZ3RoOyBuKyspIHtcbiAgICAgIHZhciBhID0gYXJnc1tuXS5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJyk7XG4gICAgICBpZiAoYSkgcmV0LnB1c2goYSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJldDtcbn1cblxuIiwibW9kdWxlLmV4cG9ydHMgPSBnZXROYW1lO1xuXG52YXIgRlVOQ1RJT05fTkFNRSA9IC9mdW5jdGlvblxccysoW15cXHMoXSspLztcblxuLyoqXG4gKiBHZXQgdGhlIG5hbWUgb2YgYSBmdW5jdGlvbiAoZS5nLiBjb25zdHJ1Y3RvcilcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZcbiAqIEByZXR1cm4ge1N0cmluZ30gVGhlIGZ1bmN0aW9uIG5hbWUuXG4gKi9cbmZ1bmN0aW9uIGdldE5hbWUoZilcbntcbiAgdmFyIG5hbWUgPSAnJztcblxuICBpZiAoZiBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgaWYgKGYubmFtZSkge1xuICAgICAgcmV0dXJuIGYubmFtZTtcbiAgICB9XG5cbiAgICB2YXIgbWF0Y2ggPSBmLnRvU3RyaW5nKCkubWF0Y2goRlVOQ1RJT05fTkFNRSk7XG5cbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgIG5hbWUgPSBtYXRjaFsxXTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoZiAmJiBmLmNvbnN0cnVjdG9yIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICBuYW1lID0gZ2V0TmFtZShmLmNvbnN0cnVjdG9yKTtcbiAgfVxuXG4gIHJldHVybiBuYW1lO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBtaXhpbl87XG5cbi8qKlxuICogQWRkIGFsbCBvd24gcHJvcGVydGllcyBvZiBtaXhpbiB0byB0aGUgcHJvdG90eXBlIHByb3BlcnR5IG9mIGNsYXNzIFRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFQgQ2xhc3Mgd2Ugd2FudCB0byBtaXggaW50by5cbiAqIEBwYXJhbSB7RnVuY3Rpb258T2JqZWN0fSBtaXhpbiBNaXhpbiB3ZSB3YW50IHRvIG1peHRcbiAqL1xuZnVuY3Rpb24gbWl4aW5fKFQsIG1peGluKVxue1xuICAvLyBJZiB3ZSdyZSBtaXhpbmcgaW4gYSBjbGFzcyAoY29uc3RydWN0b3IgZnVuY3Rpb24pLCB0aGVuIGZpcnN0IG1peCBpbiBhbGxcbiAgLy8gdGhpbmdzIGhhbmdpbmcgZGlyZWN0bHkgb2ZmIHRoZSBtaXhpbiBhcyBcInN0YXRpY3NcIiwgdGhlbiBzd2l0Y2ggdGhlIG1peGluXG4gIC8vIHJlZiB0byBwb2ludCB0byB0aGUgcHJvdG90eXBlXG4gIGlmIChtaXhpbiBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgZm9yICh2YXIgayBpbiBtaXhpbikge1xuICAgICAgVFtrXSA9IG1peGluW2tdO1xuICAgIH1cbiAgICBtaXhpbiA9IG1peGluLnByb3RvdHlwZTtcbiAgfVxuXG4gIC8vIER1bXAgZXZlcnl0aGluZyBvbiB0aGUgbWl4aW4gaW50byB0aGUgcHJvdG90eXBlIG9mIG91ciBjbGFzc1xuICBmb3IgKHZhciBrZXkgaW4gbWl4aW4pIHtcbiAgICBpZiAobWl4aW4uaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgVC5wcm90b3R5cGVba2V5XSA9IG1peGluW2tleV07XG4gICAgfVxuICB9XG59XG5cbiIsImlmICh0eXBlb2YgT2JqZWN0LmNyZWF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAvLyBpbXBsZW1lbnRhdGlvbiBmcm9tIHN0YW5kYXJkIG5vZGUuanMgJ3V0aWwnIG1vZHVsZVxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaGVyaXRzKGN0b3IsIHN1cGVyQ3Rvcikge1xuICAgIGN0b3Iuc3VwZXJfID0gc3VwZXJDdG9yXG4gICAgY3Rvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ3Rvci5wcm90b3R5cGUsIHtcbiAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgIHZhbHVlOiBjdG9yLFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xufSBlbHNlIHtcbiAgLy8gb2xkIHNjaG9vbCBzaGltIGZvciBvbGQgYnJvd3NlcnNcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmhlcml0cyhjdG9yLCBzdXBlckN0b3IpIHtcbiAgICBjdG9yLnN1cGVyXyA9IHN1cGVyQ3RvclxuICAgIHZhciBUZW1wQ3RvciA9IGZ1bmN0aW9uICgpIHt9XG4gICAgVGVtcEN0b3IucHJvdG90eXBlID0gc3VwZXJDdG9yLnByb3RvdHlwZVxuICAgIGN0b3IucHJvdG90eXBlID0gbmV3IFRlbXBDdG9yKClcbiAgICBjdG9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGN0b3JcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0J1ZmZlcihhcmcpIHtcbiAgcmV0dXJuIGFyZyAmJiB0eXBlb2YgYXJnID09PSAnb2JqZWN0J1xuICAgICYmIHR5cGVvZiBhcmcuY29weSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICYmIHR5cGVvZiBhcmcuZmlsbCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICYmIHR5cGVvZiBhcmcucmVhZFVJbnQ4ID09PSAnZnVuY3Rpb24nO1xufSIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG52YXIgZm9ybWF0UmVnRXhwID0gLyVbc2RqJV0vZztcbmV4cG9ydHMuZm9ybWF0ID0gZnVuY3Rpb24oZikge1xuICBpZiAoIWlzU3RyaW5nKGYpKSB7XG4gICAgdmFyIG9iamVjdHMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgb2JqZWN0cy5wdXNoKGluc3BlY3QoYXJndW1lbnRzW2ldKSk7XG4gICAgfVxuICAgIHJldHVybiBvYmplY3RzLmpvaW4oJyAnKTtcbiAgfVxuXG4gIHZhciBpID0gMTtcbiAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gIHZhciBsZW4gPSBhcmdzLmxlbmd0aDtcbiAgdmFyIHN0ciA9IFN0cmluZyhmKS5yZXBsYWNlKGZvcm1hdFJlZ0V4cCwgZnVuY3Rpb24oeCkge1xuICAgIGlmICh4ID09PSAnJSUnKSByZXR1cm4gJyUnO1xuICAgIGlmIChpID49IGxlbikgcmV0dXJuIHg7XG4gICAgc3dpdGNoICh4KSB7XG4gICAgICBjYXNlICclcyc6IHJldHVybiBTdHJpbmcoYXJnc1tpKytdKTtcbiAgICAgIGNhc2UgJyVkJzogcmV0dXJuIE51bWJlcihhcmdzW2krK10pO1xuICAgICAgY2FzZSAnJWonOlxuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShhcmdzW2krK10pO1xuICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgcmV0dXJuICdbQ2lyY3VsYXJdJztcbiAgICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHg7XG4gICAgfVxuICB9KTtcbiAgZm9yICh2YXIgeCA9IGFyZ3NbaV07IGkgPCBsZW47IHggPSBhcmdzWysraV0pIHtcbiAgICBpZiAoaXNOdWxsKHgpIHx8ICFpc09iamVjdCh4KSkge1xuICAgICAgc3RyICs9ICcgJyArIHg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ciArPSAnICcgKyBpbnNwZWN0KHgpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc3RyO1xufTtcblxuXG4vLyBNYXJrIHRoYXQgYSBtZXRob2Qgc2hvdWxkIG5vdCBiZSB1c2VkLlxuLy8gUmV0dXJucyBhIG1vZGlmaWVkIGZ1bmN0aW9uIHdoaWNoIHdhcm5zIG9uY2UgYnkgZGVmYXVsdC5cbi8vIElmIC0tbm8tZGVwcmVjYXRpb24gaXMgc2V0LCB0aGVuIGl0IGlzIGEgbm8tb3AuXG5leHBvcnRzLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKGZuLCBtc2cpIHtcbiAgLy8gQWxsb3cgZm9yIGRlcHJlY2F0aW5nIHRoaW5ncyBpbiB0aGUgcHJvY2VzcyBvZiBzdGFydGluZyB1cC5cbiAgaWYgKGlzVW5kZWZpbmVkKGdsb2JhbC5wcm9jZXNzKSkge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBleHBvcnRzLmRlcHJlY2F0ZShmbiwgbXNnKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH1cblxuICBpZiAocHJvY2Vzcy5ub0RlcHJlY2F0aW9uID09PSB0cnVlKSB7XG4gICAgcmV0dXJuIGZuO1xuICB9XG5cbiAgdmFyIHdhcm5lZCA9IGZhbHNlO1xuICBmdW5jdGlvbiBkZXByZWNhdGVkKCkge1xuICAgIGlmICghd2FybmVkKSB7XG4gICAgICBpZiAocHJvY2Vzcy50aHJvd0RlcHJlY2F0aW9uKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtc2cpO1xuICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLnRyYWNlRGVwcmVjYXRpb24pIHtcbiAgICAgICAgY29uc29sZS50cmFjZShtc2cpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihtc2cpO1xuICAgICAgfVxuICAgICAgd2FybmVkID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICByZXR1cm4gZGVwcmVjYXRlZDtcbn07XG5cblxudmFyIGRlYnVncyA9IHt9O1xudmFyIGRlYnVnRW52aXJvbjtcbmV4cG9ydHMuZGVidWdsb2cgPSBmdW5jdGlvbihzZXQpIHtcbiAgaWYgKGlzVW5kZWZpbmVkKGRlYnVnRW52aXJvbikpXG4gICAgZGVidWdFbnZpcm9uID0gcHJvY2Vzcy5lbnYuTk9ERV9ERUJVRyB8fCAnJztcbiAgc2V0ID0gc2V0LnRvVXBwZXJDYXNlKCk7XG4gIGlmICghZGVidWdzW3NldF0pIHtcbiAgICBpZiAobmV3IFJlZ0V4cCgnXFxcXGInICsgc2V0ICsgJ1xcXFxiJywgJ2knKS50ZXN0KGRlYnVnRW52aXJvbikpIHtcbiAgICAgIHZhciBwaWQgPSBwcm9jZXNzLnBpZDtcbiAgICAgIGRlYnVnc1tzZXRdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBtc2cgPSBleHBvcnRzLmZvcm1hdC5hcHBseShleHBvcnRzLCBhcmd1bWVudHMpO1xuICAgICAgICBjb25zb2xlLmVycm9yKCclcyAlZDogJXMnLCBzZXQsIHBpZCwgbXNnKTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlYnVnc1tzZXRdID0gZnVuY3Rpb24oKSB7fTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRlYnVnc1tzZXRdO1xufTtcblxuXG4vKipcbiAqIEVjaG9zIHRoZSB2YWx1ZSBvZiBhIHZhbHVlLiBUcnlzIHRvIHByaW50IHRoZSB2YWx1ZSBvdXRcbiAqIGluIHRoZSBiZXN0IHdheSBwb3NzaWJsZSBnaXZlbiB0aGUgZGlmZmVyZW50IHR5cGVzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogVGhlIG9iamVjdCB0byBwcmludCBvdXQuXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0cyBPcHRpb25hbCBvcHRpb25zIG9iamVjdCB0aGF0IGFsdGVycyB0aGUgb3V0cHV0LlxuICovXG4vKiBsZWdhY3k6IG9iaiwgc2hvd0hpZGRlbiwgZGVwdGgsIGNvbG9ycyovXG5mdW5jdGlvbiBpbnNwZWN0KG9iaiwgb3B0cykge1xuICAvLyBkZWZhdWx0IG9wdGlvbnNcbiAgdmFyIGN0eCA9IHtcbiAgICBzZWVuOiBbXSxcbiAgICBzdHlsaXplOiBzdHlsaXplTm9Db2xvclxuICB9O1xuICAvLyBsZWdhY3kuLi5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPj0gMykgY3R4LmRlcHRoID0gYXJndW1lbnRzWzJdO1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+PSA0KSBjdHguY29sb3JzID0gYXJndW1lbnRzWzNdO1xuICBpZiAoaXNCb29sZWFuKG9wdHMpKSB7XG4gICAgLy8gbGVnYWN5Li4uXG4gICAgY3R4LnNob3dIaWRkZW4gPSBvcHRzO1xuICB9IGVsc2UgaWYgKG9wdHMpIHtcbiAgICAvLyBnb3QgYW4gXCJvcHRpb25zXCIgb2JqZWN0XG4gICAgZXhwb3J0cy5fZXh0ZW5kKGN0eCwgb3B0cyk7XG4gIH1cbiAgLy8gc2V0IGRlZmF1bHQgb3B0aW9uc1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LnNob3dIaWRkZW4pKSBjdHguc2hvd0hpZGRlbiA9IGZhbHNlO1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LmRlcHRoKSkgY3R4LmRlcHRoID0gMjtcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5jb2xvcnMpKSBjdHguY29sb3JzID0gZmFsc2U7XG4gIGlmIChpc1VuZGVmaW5lZChjdHguY3VzdG9tSW5zcGVjdCkpIGN0eC5jdXN0b21JbnNwZWN0ID0gdHJ1ZTtcbiAgaWYgKGN0eC5jb2xvcnMpIGN0eC5zdHlsaXplID0gc3R5bGl6ZVdpdGhDb2xvcjtcbiAgcmV0dXJuIGZvcm1hdFZhbHVlKGN0eCwgb2JqLCBjdHguZGVwdGgpO1xufVxuZXhwb3J0cy5pbnNwZWN0ID0gaW5zcGVjdDtcblxuXG4vLyBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0FOU0lfZXNjYXBlX2NvZGUjZ3JhcGhpY3Ncbmluc3BlY3QuY29sb3JzID0ge1xuICAnYm9sZCcgOiBbMSwgMjJdLFxuICAnaXRhbGljJyA6IFszLCAyM10sXG4gICd1bmRlcmxpbmUnIDogWzQsIDI0XSxcbiAgJ2ludmVyc2UnIDogWzcsIDI3XSxcbiAgJ3doaXRlJyA6IFszNywgMzldLFxuICAnZ3JleScgOiBbOTAsIDM5XSxcbiAgJ2JsYWNrJyA6IFszMCwgMzldLFxuICAnYmx1ZScgOiBbMzQsIDM5XSxcbiAgJ2N5YW4nIDogWzM2LCAzOV0sXG4gICdncmVlbicgOiBbMzIsIDM5XSxcbiAgJ21hZ2VudGEnIDogWzM1LCAzOV0sXG4gICdyZWQnIDogWzMxLCAzOV0sXG4gICd5ZWxsb3cnIDogWzMzLCAzOV1cbn07XG5cbi8vIERvbid0IHVzZSAnYmx1ZScgbm90IHZpc2libGUgb24gY21kLmV4ZVxuaW5zcGVjdC5zdHlsZXMgPSB7XG4gICdzcGVjaWFsJzogJ2N5YW4nLFxuICAnbnVtYmVyJzogJ3llbGxvdycsXG4gICdib29sZWFuJzogJ3llbGxvdycsXG4gICd1bmRlZmluZWQnOiAnZ3JleScsXG4gICdudWxsJzogJ2JvbGQnLFxuICAnc3RyaW5nJzogJ2dyZWVuJyxcbiAgJ2RhdGUnOiAnbWFnZW50YScsXG4gIC8vIFwibmFtZVwiOiBpbnRlbnRpb25hbGx5IG5vdCBzdHlsaW5nXG4gICdyZWdleHAnOiAncmVkJ1xufTtcblxuXG5mdW5jdGlvbiBzdHlsaXplV2l0aENvbG9yKHN0ciwgc3R5bGVUeXBlKSB7XG4gIHZhciBzdHlsZSA9IGluc3BlY3Quc3R5bGVzW3N0eWxlVHlwZV07XG5cbiAgaWYgKHN0eWxlKSB7XG4gICAgcmV0dXJuICdcXHUwMDFiWycgKyBpbnNwZWN0LmNvbG9yc1tzdHlsZV1bMF0gKyAnbScgKyBzdHIgK1xuICAgICAgICAgICAnXFx1MDAxYlsnICsgaW5zcGVjdC5jb2xvcnNbc3R5bGVdWzFdICsgJ20nO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBzdHI7XG4gIH1cbn1cblxuXG5mdW5jdGlvbiBzdHlsaXplTm9Db2xvcihzdHIsIHN0eWxlVHlwZSkge1xuICByZXR1cm4gc3RyO1xufVxuXG5cbmZ1bmN0aW9uIGFycmF5VG9IYXNoKGFycmF5KSB7XG4gIHZhciBoYXNoID0ge307XG5cbiAgYXJyYXkuZm9yRWFjaChmdW5jdGlvbih2YWwsIGlkeCkge1xuICAgIGhhc2hbdmFsXSA9IHRydWU7XG4gIH0pO1xuXG4gIHJldHVybiBoYXNoO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdFZhbHVlKGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcykge1xuICAvLyBQcm92aWRlIGEgaG9vayBmb3IgdXNlci1zcGVjaWZpZWQgaW5zcGVjdCBmdW5jdGlvbnMuXG4gIC8vIENoZWNrIHRoYXQgdmFsdWUgaXMgYW4gb2JqZWN0IHdpdGggYW4gaW5zcGVjdCBmdW5jdGlvbiBvbiBpdFxuICBpZiAoY3R4LmN1c3RvbUluc3BlY3QgJiZcbiAgICAgIHZhbHVlICYmXG4gICAgICBpc0Z1bmN0aW9uKHZhbHVlLmluc3BlY3QpICYmXG4gICAgICAvLyBGaWx0ZXIgb3V0IHRoZSB1dGlsIG1vZHVsZSwgaXQncyBpbnNwZWN0IGZ1bmN0aW9uIGlzIHNwZWNpYWxcbiAgICAgIHZhbHVlLmluc3BlY3QgIT09IGV4cG9ydHMuaW5zcGVjdCAmJlxuICAgICAgLy8gQWxzbyBmaWx0ZXIgb3V0IGFueSBwcm90b3R5cGUgb2JqZWN0cyB1c2luZyB0aGUgY2lyY3VsYXIgY2hlY2suXG4gICAgICAhKHZhbHVlLmNvbnN0cnVjdG9yICYmIHZhbHVlLmNvbnN0cnVjdG9yLnByb3RvdHlwZSA9PT0gdmFsdWUpKSB7XG4gICAgdmFyIHJldCA9IHZhbHVlLmluc3BlY3QocmVjdXJzZVRpbWVzLCBjdHgpO1xuICAgIGlmICghaXNTdHJpbmcocmV0KSkge1xuICAgICAgcmV0ID0gZm9ybWF0VmFsdWUoY3R4LCByZXQsIHJlY3Vyc2VUaW1lcyk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvLyBQcmltaXRpdmUgdHlwZXMgY2Fubm90IGhhdmUgcHJvcGVydGllc1xuICB2YXIgcHJpbWl0aXZlID0gZm9ybWF0UHJpbWl0aXZlKGN0eCwgdmFsdWUpO1xuICBpZiAocHJpbWl0aXZlKSB7XG4gICAgcmV0dXJuIHByaW1pdGl2ZTtcbiAgfVxuXG4gIC8vIExvb2sgdXAgdGhlIGtleXMgb2YgdGhlIG9iamVjdC5cbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSk7XG4gIHZhciB2aXNpYmxlS2V5cyA9IGFycmF5VG9IYXNoKGtleXMpO1xuXG4gIGlmIChjdHguc2hvd0hpZGRlbikge1xuICAgIGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh2YWx1ZSk7XG4gIH1cblxuICAvLyBJRSBkb2Vzbid0IG1ha2UgZXJyb3IgZmllbGRzIG5vbi1lbnVtZXJhYmxlXG4gIC8vIGh0dHA6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS9pZS9kd3c1MnNidCh2PXZzLjk0KS5hc3B4XG4gIGlmIChpc0Vycm9yKHZhbHVlKVxuICAgICAgJiYgKGtleXMuaW5kZXhPZignbWVzc2FnZScpID49IDAgfHwga2V5cy5pbmRleE9mKCdkZXNjcmlwdGlvbicpID49IDApKSB7XG4gICAgcmV0dXJuIGZvcm1hdEVycm9yKHZhbHVlKTtcbiAgfVxuXG4gIC8vIFNvbWUgdHlwZSBvZiBvYmplY3Qgd2l0aG91dCBwcm9wZXJ0aWVzIGNhbiBiZSBzaG9ydGN1dHRlZC5cbiAgaWYgKGtleXMubGVuZ3RoID09PSAwKSB7XG4gICAgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgICB2YXIgbmFtZSA9IHZhbHVlLm5hbWUgPyAnOiAnICsgdmFsdWUubmFtZSA6ICcnO1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKCdbRnVuY3Rpb24nICsgbmFtZSArICddJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gICAgaWYgKGlzUmVnRXhwKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSksICdyZWdleHAnKTtcbiAgICB9XG4gICAgaWYgKGlzRGF0ZSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZShEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSwgJ2RhdGUnKTtcbiAgICB9XG4gICAgaWYgKGlzRXJyb3IodmFsdWUpKSB7XG4gICAgICByZXR1cm4gZm9ybWF0RXJyb3IodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBiYXNlID0gJycsIGFycmF5ID0gZmFsc2UsIGJyYWNlcyA9IFsneycsICd9J107XG5cbiAgLy8gTWFrZSBBcnJheSBzYXkgdGhhdCB0aGV5IGFyZSBBcnJheVxuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICBhcnJheSA9IHRydWU7XG4gICAgYnJhY2VzID0gWydbJywgJ10nXTtcbiAgfVxuXG4gIC8vIE1ha2UgZnVuY3Rpb25zIHNheSB0aGF0IHRoZXkgYXJlIGZ1bmN0aW9uc1xuICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICB2YXIgbiA9IHZhbHVlLm5hbWUgPyAnOiAnICsgdmFsdWUubmFtZSA6ICcnO1xuICAgIGJhc2UgPSAnIFtGdW5jdGlvbicgKyBuICsgJ10nO1xuICB9XG5cbiAgLy8gTWFrZSBSZWdFeHBzIHNheSB0aGF0IHRoZXkgYXJlIFJlZ0V4cHNcbiAgaWYgKGlzUmVnRXhwKHZhbHVlKSkge1xuICAgIGJhc2UgPSAnICcgKyBSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICB9XG5cbiAgLy8gTWFrZSBkYXRlcyB3aXRoIHByb3BlcnRpZXMgZmlyc3Qgc2F5IHRoZSBkYXRlXG4gIGlmIChpc0RhdGUodmFsdWUpKSB7XG4gICAgYmFzZSA9ICcgJyArIERhdGUucHJvdG90eXBlLnRvVVRDU3RyaW5nLmNhbGwodmFsdWUpO1xuICB9XG5cbiAgLy8gTWFrZSBlcnJvciB3aXRoIG1lc3NhZ2UgZmlyc3Qgc2F5IHRoZSBlcnJvclxuICBpZiAoaXNFcnJvcih2YWx1ZSkpIHtcbiAgICBiYXNlID0gJyAnICsgZm9ybWF0RXJyb3IodmFsdWUpO1xuICB9XG5cbiAgaWYgKGtleXMubGVuZ3RoID09PSAwICYmICghYXJyYXkgfHwgdmFsdWUubGVuZ3RoID09IDApKSB7XG4gICAgcmV0dXJuIGJyYWNlc1swXSArIGJhc2UgKyBicmFjZXNbMV07XG4gIH1cblxuICBpZiAocmVjdXJzZVRpbWVzIDwgMCkge1xuICAgIGlmIChpc1JlZ0V4cCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZShSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLCAncmVnZXhwJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZSgnW09iamVjdF0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfVxuXG4gIGN0eC5zZWVuLnB1c2godmFsdWUpO1xuXG4gIHZhciBvdXRwdXQ7XG4gIGlmIChhcnJheSkge1xuICAgIG91dHB1dCA9IGZvcm1hdEFycmF5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleXMpO1xuICB9IGVsc2Uge1xuICAgIG91dHB1dCA9IGtleXMubWFwKGZ1bmN0aW9uKGtleSkge1xuICAgICAgcmV0dXJuIGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleSwgYXJyYXkpO1xuICAgIH0pO1xuICB9XG5cbiAgY3R4LnNlZW4ucG9wKCk7XG5cbiAgcmV0dXJuIHJlZHVjZVRvU2luZ2xlU3RyaW5nKG91dHB1dCwgYmFzZSwgYnJhY2VzKTtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRQcmltaXRpdmUoY3R4LCB2YWx1ZSkge1xuICBpZiAoaXNVbmRlZmluZWQodmFsdWUpKVxuICAgIHJldHVybiBjdHguc3R5bGl6ZSgndW5kZWZpbmVkJywgJ3VuZGVmaW5lZCcpO1xuICBpZiAoaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgdmFyIHNpbXBsZSA9ICdcXCcnICsgSlNPTi5zdHJpbmdpZnkodmFsdWUpLnJlcGxhY2UoL15cInxcIiQvZywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvJy9nLCBcIlxcXFwnXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxcXFwiL2csICdcIicpICsgJ1xcJyc7XG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKHNpbXBsZSwgJ3N0cmluZycpO1xuICB9XG4gIGlmIChpc051bWJlcih2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCcnICsgdmFsdWUsICdudW1iZXInKTtcbiAgaWYgKGlzQm9vbGVhbih2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCcnICsgdmFsdWUsICdib29sZWFuJyk7XG4gIC8vIEZvciBzb21lIHJlYXNvbiB0eXBlb2YgbnVsbCBpcyBcIm9iamVjdFwiLCBzbyBzcGVjaWFsIGNhc2UgaGVyZS5cbiAgaWYgKGlzTnVsbCh2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCdudWxsJywgJ251bGwnKTtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRFcnJvcih2YWx1ZSkge1xuICByZXR1cm4gJ1snICsgRXJyb3IucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpICsgJ10nO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdEFycmF5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleXMpIHtcbiAgdmFyIG91dHB1dCA9IFtdO1xuICBmb3IgKHZhciBpID0gMCwgbCA9IHZhbHVlLmxlbmd0aDsgaSA8IGw7ICsraSkge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eSh2YWx1ZSwgU3RyaW5nKGkpKSkge1xuICAgICAgb3V0cHV0LnB1c2goZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cyxcbiAgICAgICAgICBTdHJpbmcoaSksIHRydWUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3V0cHV0LnB1c2goJycpO1xuICAgIH1cbiAgfVxuICBrZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgaWYgKCFrZXkubWF0Y2goL15cXGQrJC8pKSB7XG4gICAgICBvdXRwdXQucHVzaChmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLFxuICAgICAgICAgIGtleSwgdHJ1ZSkpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5LCBhcnJheSkge1xuICB2YXIgbmFtZSwgc3RyLCBkZXNjO1xuICBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih2YWx1ZSwga2V5KSB8fCB7IHZhbHVlOiB2YWx1ZVtrZXldIH07XG4gIGlmIChkZXNjLmdldCkge1xuICAgIGlmIChkZXNjLnNldCkge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tHZXR0ZXIvU2V0dGVyXScsICdzcGVjaWFsJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbR2V0dGVyXScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChkZXNjLnNldCkge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tTZXR0ZXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH1cbiAgaWYgKCFoYXNPd25Qcm9wZXJ0eSh2aXNpYmxlS2V5cywga2V5KSkge1xuICAgIG5hbWUgPSAnWycgKyBrZXkgKyAnXSc7XG4gIH1cbiAgaWYgKCFzdHIpIHtcbiAgICBpZiAoY3R4LnNlZW4uaW5kZXhPZihkZXNjLnZhbHVlKSA8IDApIHtcbiAgICAgIGlmIChpc051bGwocmVjdXJzZVRpbWVzKSkge1xuICAgICAgICBzdHIgPSBmb3JtYXRWYWx1ZShjdHgsIGRlc2MudmFsdWUsIG51bGwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RyID0gZm9ybWF0VmFsdWUoY3R4LCBkZXNjLnZhbHVlLCByZWN1cnNlVGltZXMgLSAxKTtcbiAgICAgIH1cbiAgICAgIGlmIChzdHIuaW5kZXhPZignXFxuJykgPiAtMSkge1xuICAgICAgICBpZiAoYXJyYXkpIHtcbiAgICAgICAgICBzdHIgPSBzdHIuc3BsaXQoJ1xcbicpLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgICAgICByZXR1cm4gJyAgJyArIGxpbmU7XG4gICAgICAgICAgfSkuam9pbignXFxuJykuc3Vic3RyKDIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0ciA9ICdcXG4nICsgc3RyLnNwbGl0KCdcXG4nKS5tYXAoZnVuY3Rpb24obGluZSkge1xuICAgICAgICAgICAgcmV0dXJuICcgICAnICsgbGluZTtcbiAgICAgICAgICB9KS5qb2luKCdcXG4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW0NpcmN1bGFyXScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9XG4gIGlmIChpc1VuZGVmaW5lZChuYW1lKSkge1xuICAgIGlmIChhcnJheSAmJiBrZXkubWF0Y2goL15cXGQrJC8pKSB7XG4gICAgICByZXR1cm4gc3RyO1xuICAgIH1cbiAgICBuYW1lID0gSlNPTi5zdHJpbmdpZnkoJycgKyBrZXkpO1xuICAgIGlmIChuYW1lLm1hdGNoKC9eXCIoW2EtekEtWl9dW2EtekEtWl8wLTldKilcIiQvKSkge1xuICAgICAgbmFtZSA9IG5hbWUuc3Vic3RyKDEsIG5hbWUubGVuZ3RoIC0gMik7XG4gICAgICBuYW1lID0gY3R4LnN0eWxpemUobmFtZSwgJ25hbWUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmFtZSA9IG5hbWUucmVwbGFjZSgvJy9nLCBcIlxcXFwnXCIpXG4gICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcXCIvZywgJ1wiJylcbiAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLyheXCJ8XCIkKS9nLCBcIidcIik7XG4gICAgICBuYW1lID0gY3R4LnN0eWxpemUobmFtZSwgJ3N0cmluZycpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuYW1lICsgJzogJyArIHN0cjtcbn1cblxuXG5mdW5jdGlvbiByZWR1Y2VUb1NpbmdsZVN0cmluZyhvdXRwdXQsIGJhc2UsIGJyYWNlcykge1xuICB2YXIgbnVtTGluZXNFc3QgPSAwO1xuICB2YXIgbGVuZ3RoID0gb3V0cHV0LnJlZHVjZShmdW5jdGlvbihwcmV2LCBjdXIpIHtcbiAgICBudW1MaW5lc0VzdCsrO1xuICAgIGlmIChjdXIuaW5kZXhPZignXFxuJykgPj0gMCkgbnVtTGluZXNFc3QrKztcbiAgICByZXR1cm4gcHJldiArIGN1ci5yZXBsYWNlKC9cXHUwMDFiXFxbXFxkXFxkP20vZywgJycpLmxlbmd0aCArIDE7XG4gIH0sIDApO1xuXG4gIGlmIChsZW5ndGggPiA2MCkge1xuICAgIHJldHVybiBicmFjZXNbMF0gK1xuICAgICAgICAgICAoYmFzZSA9PT0gJycgPyAnJyA6IGJhc2UgKyAnXFxuICcpICtcbiAgICAgICAgICAgJyAnICtcbiAgICAgICAgICAgb3V0cHV0LmpvaW4oJyxcXG4gICcpICtcbiAgICAgICAgICAgJyAnICtcbiAgICAgICAgICAgYnJhY2VzWzFdO1xuICB9XG5cbiAgcmV0dXJuIGJyYWNlc1swXSArIGJhc2UgKyAnICcgKyBvdXRwdXQuam9pbignLCAnKSArICcgJyArIGJyYWNlc1sxXTtcbn1cblxuXG4vLyBOT1RFOiBUaGVzZSB0eXBlIGNoZWNraW5nIGZ1bmN0aW9ucyBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBgaW5zdGFuY2VvZmBcbi8vIGJlY2F1c2UgaXQgaXMgZnJhZ2lsZSBhbmQgY2FuIGJlIGVhc2lseSBmYWtlZCB3aXRoIGBPYmplY3QuY3JlYXRlKClgLlxuZnVuY3Rpb24gaXNBcnJheShhcikge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShhcik7XG59XG5leHBvcnRzLmlzQXJyYXkgPSBpc0FycmF5O1xuXG5mdW5jdGlvbiBpc0Jvb2xlYW4oYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnYm9vbGVhbic7XG59XG5leHBvcnRzLmlzQm9vbGVhbiA9IGlzQm9vbGVhbjtcblxuZnVuY3Rpb24gaXNOdWxsKGFyZykge1xuICByZXR1cm4gYXJnID09PSBudWxsO1xufVxuZXhwb3J0cy5pc051bGwgPSBpc051bGw7XG5cbmZ1bmN0aW9uIGlzTnVsbE9yVW5kZWZpbmVkKGFyZykge1xuICByZXR1cm4gYXJnID09IG51bGw7XG59XG5leHBvcnRzLmlzTnVsbE9yVW5kZWZpbmVkID0gaXNOdWxsT3JVbmRlZmluZWQ7XG5cbmZ1bmN0aW9uIGlzTnVtYmVyKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ251bWJlcic7XG59XG5leHBvcnRzLmlzTnVtYmVyID0gaXNOdW1iZXI7XG5cbmZ1bmN0aW9uIGlzU3RyaW5nKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ3N0cmluZyc7XG59XG5leHBvcnRzLmlzU3RyaW5nID0gaXNTdHJpbmc7XG5cbmZ1bmN0aW9uIGlzU3ltYm9sKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ3N5bWJvbCc7XG59XG5leHBvcnRzLmlzU3ltYm9sID0gaXNTeW1ib2w7XG5cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKGFyZykge1xuICByZXR1cm4gYXJnID09PSB2b2lkIDA7XG59XG5leHBvcnRzLmlzVW5kZWZpbmVkID0gaXNVbmRlZmluZWQ7XG5cbmZ1bmN0aW9uIGlzUmVnRXhwKHJlKSB7XG4gIHJldHVybiBpc09iamVjdChyZSkgJiYgb2JqZWN0VG9TdHJpbmcocmUpID09PSAnW29iamVjdCBSZWdFeHBdJztcbn1cbmV4cG9ydHMuaXNSZWdFeHAgPSBpc1JlZ0V4cDtcblxuZnVuY3Rpb24gaXNPYmplY3QoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnb2JqZWN0JyAmJiBhcmcgIT09IG51bGw7XG59XG5leHBvcnRzLmlzT2JqZWN0ID0gaXNPYmplY3Q7XG5cbmZ1bmN0aW9uIGlzRGF0ZShkKSB7XG4gIHJldHVybiBpc09iamVjdChkKSAmJiBvYmplY3RUb1N0cmluZyhkKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufVxuZXhwb3J0cy5pc0RhdGUgPSBpc0RhdGU7XG5cbmZ1bmN0aW9uIGlzRXJyb3IoZSkge1xuICByZXR1cm4gaXNPYmplY3QoZSkgJiZcbiAgICAgIChvYmplY3RUb1N0cmluZyhlKSA9PT0gJ1tvYmplY3QgRXJyb3JdJyB8fCBlIGluc3RhbmNlb2YgRXJyb3IpO1xufVxuZXhwb3J0cy5pc0Vycm9yID0gaXNFcnJvcjtcblxuZnVuY3Rpb24gaXNGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdmdW5jdGlvbic7XG59XG5leHBvcnRzLmlzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uO1xuXG5mdW5jdGlvbiBpc1ByaW1pdGl2ZShhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gbnVsbCB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ2Jvb2xlYW4nIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnbnVtYmVyJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3N0cmluZycgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdzeW1ib2wnIHx8ICAvLyBFUzYgc3ltYm9sXG4gICAgICAgICB0eXBlb2YgYXJnID09PSAndW5kZWZpbmVkJztcbn1cbmV4cG9ydHMuaXNQcmltaXRpdmUgPSBpc1ByaW1pdGl2ZTtcblxuZXhwb3J0cy5pc0J1ZmZlciA9IHJlcXVpcmUoJy4vc3VwcG9ydC9pc0J1ZmZlcicpO1xuXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyhvKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobyk7XG59XG5cblxuZnVuY3Rpb24gcGFkKG4pIHtcbiAgcmV0dXJuIG4gPCAxMCA/ICcwJyArIG4udG9TdHJpbmcoMTApIDogbi50b1N0cmluZygxMCk7XG59XG5cblxudmFyIG1vbnRocyA9IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLFxuICAgICAgICAgICAgICAnT2N0JywgJ05vdicsICdEZWMnXTtcblxuLy8gMjYgRmViIDE2OjE5OjM0XG5mdW5jdGlvbiB0aW1lc3RhbXAoKSB7XG4gIHZhciBkID0gbmV3IERhdGUoKTtcbiAgdmFyIHRpbWUgPSBbcGFkKGQuZ2V0SG91cnMoKSksXG4gICAgICAgICAgICAgIHBhZChkLmdldE1pbnV0ZXMoKSksXG4gICAgICAgICAgICAgIHBhZChkLmdldFNlY29uZHMoKSldLmpvaW4oJzonKTtcbiAgcmV0dXJuIFtkLmdldERhdGUoKSwgbW9udGhzW2QuZ2V0TW9udGgoKV0sIHRpbWVdLmpvaW4oJyAnKTtcbn1cblxuXG4vLyBsb2cgaXMganVzdCBhIHRoaW4gd3JhcHBlciB0byBjb25zb2xlLmxvZyB0aGF0IHByZXBlbmRzIGEgdGltZXN0YW1wXG5leHBvcnRzLmxvZyA9IGZ1bmN0aW9uKCkge1xuICBjb25zb2xlLmxvZygnJXMgLSAlcycsIHRpbWVzdGFtcCgpLCBleHBvcnRzLmZvcm1hdC5hcHBseShleHBvcnRzLCBhcmd1bWVudHMpKTtcbn07XG5cblxuLyoqXG4gKiBJbmhlcml0IHRoZSBwcm90b3R5cGUgbWV0aG9kcyBmcm9tIG9uZSBjb25zdHJ1Y3RvciBpbnRvIGFub3RoZXIuXG4gKlxuICogVGhlIEZ1bmN0aW9uLnByb3RvdHlwZS5pbmhlcml0cyBmcm9tIGxhbmcuanMgcmV3cml0dGVuIGFzIGEgc3RhbmRhbG9uZVxuICogZnVuY3Rpb24gKG5vdCBvbiBGdW5jdGlvbi5wcm90b3R5cGUpLiBOT1RFOiBJZiB0aGlzIGZpbGUgaXMgdG8gYmUgbG9hZGVkXG4gKiBkdXJpbmcgYm9vdHN0cmFwcGluZyB0aGlzIGZ1bmN0aW9uIG5lZWRzIHRvIGJlIHJld3JpdHRlbiB1c2luZyBzb21lIG5hdGl2ZVxuICogZnVuY3Rpb25zIGFzIHByb3RvdHlwZSBzZXR1cCB1c2luZyBub3JtYWwgSmF2YVNjcmlwdCBkb2VzIG5vdCB3b3JrIGFzXG4gKiBleHBlY3RlZCBkdXJpbmcgYm9vdHN0cmFwcGluZyAoc2VlIG1pcnJvci5qcyBpbiByMTE0OTAzKS5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjdG9yIENvbnN0cnVjdG9yIGZ1bmN0aW9uIHdoaWNoIG5lZWRzIHRvIGluaGVyaXQgdGhlXG4gKiAgICAgcHJvdG90eXBlLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gc3VwZXJDdG9yIENvbnN0cnVjdG9yIGZ1bmN0aW9uIHRvIGluaGVyaXQgcHJvdG90eXBlIGZyb20uXG4gKi9cbmV4cG9ydHMuaW5oZXJpdHMgPSByZXF1aXJlKCdpbmhlcml0cycpO1xuXG5leHBvcnRzLl9leHRlbmQgPSBmdW5jdGlvbihvcmlnaW4sIGFkZCkge1xuICAvLyBEb24ndCBkbyBhbnl0aGluZyBpZiBhZGQgaXNuJ3QgYW4gb2JqZWN0XG4gIGlmICghYWRkIHx8ICFpc09iamVjdChhZGQpKSByZXR1cm4gb3JpZ2luO1xuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoYWRkKTtcbiAgdmFyIGkgPSBrZXlzLmxlbmd0aDtcbiAgd2hpbGUgKGktLSkge1xuICAgIG9yaWdpbltrZXlzW2ldXSA9IGFkZFtrZXlzW2ldXTtcbiAgfVxuICByZXR1cm4gb3JpZ2luO1xufTtcblxuZnVuY3Rpb24gaGFzT3duUHJvcGVydHkob2JqLCBwcm9wKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTtcbn1cbiIsImltcG9ydCBCb290U3RhdGUgZnJvbSAnLi9zdGF0ZXMvQm9vdFN0YXRlJztcclxuaW1wb3J0IFByZWxvYWRlclN0YXRlIGZyb20gJy4vc3RhdGVzL1ByZWxvYWRlclN0YXRlJztcclxuaW1wb3J0IEdhbWVTdGF0ZSBmcm9tICcuL3N0YXRlcy9HYW1lU3RhdGUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9uZ0dhbWUge1xyXG5cdHByaXZhdGUgX2dhbWU6IFBoYXNlci5HYW1lO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuX2dhbWUgPSBuZXcgUGhhc2VyLkdhbWUoe1xyXG5cdFx0XHR3aWR0aDogMTAyNCxcclxuXHRcdFx0aGVpZ2h0OiA1NzYsXHJcblx0XHRcdHJlbmRlcmVyOiBQaGFzZXIuQVVUTyxcclxuXHRcdFx0cGFyZW50OiAnZ2FtZS1jb250YWluZXInXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGFydCgpIHtcclxuXHRcdHRoaXMuX2dhbWUuc3RhdGUuYWRkKCdib290JywgbmV3IEJvb3RTdGF0ZSgpKTtcclxuXHRcdHRoaXMuX2dhbWUuc3RhdGUuYWRkKCdwcmVsb2FkZXInLCBuZXcgUHJlbG9hZGVyU3RhdGUoKSk7XHJcblx0XHR0aGlzLl9nYW1lLnN0YXRlLmFkZCgnZ2FtZScsIG5ldyBHYW1lU3RhdGUoKSk7XHJcblx0XHR0aGlzLl9nYW1lLnN0YXRlLnN0YXJ0KCdib290Jyk7XHJcblx0fVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFuZG9taXplciB7XHJcbiAgICBwdWJsaWMgYm9vbGVhbigpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5yYW5kb20oKSA+PSAwLjU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvcmUvQ29tcG9uZW50JztcclxuaW1wb3J0IENvbXBvbmVudElkIGZyb20gJy4uL2NvcmUvQ29tcG9uZW50SWQnO1xyXG5pbXBvcnQgQ29yZUNvbXBvbmVudElkIGZyb20gJy4uL2NvcmUvQ29yZUNvbXBvbmVudElkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbGxpZGUgaW1wbGVtZW50cyBDb21wb25lbnQge1xyXG4gICAgXHJcbiAgICBpZCgpOiBDb21wb25lbnRJZCB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDb3JlQ29tcG9uZW50SWQoJ2NvbGxpZGUnKTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvcmUvQ29tcG9uZW50JztcclxuaW1wb3J0IENvbXBvbmVudElkIGZyb20gJy4uL2NvcmUvQ29tcG9uZW50SWQnO1xyXG5pbXBvcnQgQ29yZUNvbXBvbmVudElkIGZyb20gJy4uL2NvcmUvQ29yZUNvbXBvbmVudElkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc3BsYXkgaW1wbGVtZW50cyBDb21wb25lbnQge1xyXG4gICAgXHJcbiAgICBpZCgpOiBDb21wb25lbnRJZCB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDb3JlQ29tcG9uZW50SWQoJ2Rpc3BsYXknKTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvcmUvQ29tcG9uZW50JztcclxuaW1wb3J0IENvbXBvbmVudElkIGZyb20gJy4uL2NvcmUvQ29tcG9uZW50SWQnO1xyXG5pbXBvcnQgQ29yZUNvbXBvbmVudElkIGZyb20gJy4uL2NvcmUvQ29yZUNvbXBvbmVudElkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdmUgaW1wbGVtZW50cyBDb21wb25lbnQge1xyXG4gICAgXHJcbiAgICBpZCgpOiBDb21wb25lbnRJZCB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDb3JlQ29tcG9uZW50SWQoJ21vdmUnKTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgQ29tcG9uZW50SWQgZnJvbSAnLi9Db21wb25lbnRJZCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb3JlQ29tcG9uZW50SWQgaW1wbGVtZW50cyBDb21wb25lbnRJZCB7XHJcbiAgICBwcml2YXRlIGlkOiBzdHJpbmc7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGlkOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQ7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XHJcbmltcG9ydCBDb21wb25lbnRJZCBmcm9tICcuL0NvbXBvbmVudElkJztcclxuaW1wb3J0IENvbXBvbmVudFJlZ2lzdHJ5IGZyb20gJy4vQ29tcG9uZW50UmVnaXN0cnknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHlwZUNvbXBvbmVudFJlZ2lzdHJ5IGltcGxlbWVudHMgQ29tcG9uZW50UmVnaXN0cnkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBTdG9yZXMgdHlwZSBpbmZvcm1hdGlvbiBmb3IgZWFjaCBjb21wb25lbnQuXHJcbiAgICAgKiBLZXkgaXMgY29tcG9uZW50IGlkLlxyXG4gICAgICogVmFsdWUgaXMgY29tcG9uZW50IHR5cGUuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdHlwZXM6IGFueTtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy50eXBlcyA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGQoY29tcG9uZW50OiBDb21wb25lbnQpOiBhbnkge1xyXG4gICAgICAgIHZhciBrZXkgPSBjb21wb25lbnQuaWQoKS5nZXQoKTtcclxuICAgICAgICB0aGlzLnR5cGVzW2tleV0gPSBjb21wb25lbnQuY29uc3RydWN0b3I7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZXNba2V5XTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0KGlkOiBDb21wb25lbnRJZCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZXNbaWQuZ2V0KCldO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRBbGwoaWRzOiBDb21wb25lbnRJZFtdKTogYW55W10ge1xyXG4gICAgICAgIHJldHVybiBpZHMubWFwKGlkID0+IHRoaXMuZ2V0KGlkKSk7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IEVudGl0eSBmcm9tICcuLi9jb3JlL0VudGl0eSc7XHJcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29yZS9Db21wb25lbnQnO1xyXG5pbXBvcnQgQ29tcG9uZW50SWQgZnJvbSAnLi4vY29yZS9Db21wb25lbnRJZCc7XHJcbmltcG9ydCBDb21wb25lbnRSZWdpc3RyeSBmcm9tICcuLi9jb3JlL0NvbXBvbmVudFJlZ2lzdHJ5JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hbm9FbnRpdHkgaW1wbGVtZW50cyBFbnRpdHkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBFbnRpdHkgY3JlYXRlZCBmcm9tIG5hbm8tZWNzLlxyXG4gICAgICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vbm9mZmxlL25hbm8tZWNzI2VudGl0eS1hcGlcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBlbnRpdHk6IGFueTtcclxuXHJcbiAgICBwcml2YXRlIHJlZ2lzdHJ5OiBDb21wb25lbnRSZWdpc3RyeTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIGVudGl0eSBFbnRpdHkgY3JlYXRlZCBmcm9tIG5hbm8tZWNzLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihlbnRpdHk6IGFueSwgcmVnaXN0cnk6IENvbXBvbmVudFJlZ2lzdHJ5KSB7XHJcbiAgICAgICAgdGhpcy5lbnRpdHkgPSBlbnRpdHk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RyeSA9IHJlZ2lzdHJ5O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpZCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVudGl0eS5pZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXR0YWNoKGNvbXBvbmVudDogQ29tcG9uZW50KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RyeS5hZGQoY29tcG9uZW50KTtcclxuICAgICAgICB0aGlzLmVudGl0eS5hZGRDb21wb25lbnQoY29tcG9uZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGFzKGNvbXBvbmVudHM6IENvbXBvbmVudElkW10pOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbnRpdHkuaGFzQWxsQ29tcG9uZW50cyhcclxuICAgICAgICAgICAgdGhpcy5yZWdpc3RyeS5nZXRBbGwoY29tcG9uZW50cylcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQoY29tcG9uZW50OiBDb21wb25lbnRJZCk6IENvbXBvbmVudCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZW50aXR5W2NvbXBvbmVudC5nZXQoKV07XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgKiBhcyBuYW5vIGZyb20gJ25hbm8tZWNzJztcclxuaW1wb3J0IEVudGl0eSBmcm9tICcuLi9jb3JlL0VudGl0eSc7XHJcbmltcG9ydCBFbnRpdHlQb29sIGZyb20gJy4uL2NvcmUvRW50aXR5UG9vbCc7XHJcbmltcG9ydCBDb21wb25lbnRJZCBmcm9tICcuLi9jb3JlL0NvbXBvbmVudElkJztcclxuaW1wb3J0IENvbXBvbmVudFJlZ2lzdHJ5IGZyb20gJy4uL2NvcmUvQ29tcG9uZW50UmVnaXN0cnknO1xyXG5pbXBvcnQgVHlwZUNvbXBvbmVudFJlZ2lzdHJ5IGZyb20gJy4uL2NvcmUvVHlwZUNvbXBvbmVudFJlZ2lzdHJ5JztcclxuaW1wb3J0IE5hbm9FbnRpdHkgZnJvbSAnLi9OYW5vRW50aXR5JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hbm9FbnRpdHlQb29sIGltcGxlbWVudHMgRW50aXR5UG9vbCB7XHJcbiAgICAvKipcclxuICAgICAqIEVudGl0eSBtYW5hZ2VyIGZyb20gbmFuby1lY3MuXHJcbiAgICAgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9ub2ZmbGUvbmFuby1lY3MjZW50aXR5LW1hbmFnZXItYXBpXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgbmFubzogYW55O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRW50aXRpZXMgaGFzaCBjb2xsZWN0aW9uLlxyXG4gICAgICogS2V5cyBhcmUgZW50aXR5IElEcy5cclxuICAgICAqIFZhbHVlcyBhcmUgZW50aXR5IG9iamVjdHMuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZW50aXRpZXM6IGFueTtcclxuXHJcbiAgICBwcml2YXRlIHJlZ2lzdHJ5OiBDb21wb25lbnRSZWdpc3RyeTtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5uYW5vID0gbmFubygpO1xyXG4gICAgICAgIHRoaXMuZW50aXRpZXMgPSB7fTtcclxuICAgICAgICB0aGlzLnJlZ2lzdHJ5ID0gbmV3IFR5cGVDb21wb25lbnRSZWdpc3RyeSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjcmVhdGUoKTogRW50aXR5IHtcclxuICAgICAgICBjb25zdCBlbnRpdHkgPSB0aGlzLm5hbm8uY3JlYXRlRW50aXR5KCk7XHJcbiAgICAgICAgdGhpcy5lbnRpdGllc1tlbnRpdHkuaWRdID0gbmV3IE5hbm9FbnRpdHkoZW50aXR5LCB0aGlzLnJlZ2lzdHJ5KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZW50aXRpZXNbZW50aXR5LmlkXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcXVlcnkoY29tcG9uZW50czogQ29tcG9uZW50SWRbXSk6IEVudGl0eVtdIHtcclxuICAgICAgICBjb25zdCBlbnRpdGllcyA9IHRoaXMubmFuby5xdWVyeUNvbXBvbmVudHMoXHJcbiAgICAgICAgICAgIHRoaXMucmVnaXN0cnkuZ2V0QWxsKGNvbXBvbmVudHMpXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGVudGl0aWVzLm1hcCgoZW50aXR5OiBhbnkpID0+XHJcbiAgICAgICAgICAgIHRoaXMuZW50aXRpZXNbZW50aXR5LmlkXVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IE1vdmUgZnJvbSBcIi4vY29tcG9uZW50cy9Nb3ZlXCI7XHJcbmltcG9ydCBDb2xsaWRlIGZyb20gXCIuL2NvbXBvbmVudHMvQ29sbGlkZVwiO1xyXG5pbXBvcnQgRGlzcGxheSBmcm9tIFwiLi9jb21wb25lbnRzL0Rpc3BsYXlcIjtcclxuaW1wb3J0IFR5cGVDb21wb25lbnRSZWdpc3RyeSBmcm9tICcuL2NvcmUvVHlwZUNvbXBvbmVudFJlZ2lzdHJ5JztcclxuaW1wb3J0IE5hbm9FbnRpdHlQb29sIGZyb20gJy4vbmFuby9OYW5vRW50aXR5UG9vbCc7XHJcbmltcG9ydCBDb3JlQ29tcG9uZW50SWQgZnJvbSBcIi4vY29yZS9Db3JlQ29tcG9uZW50SWRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IHBvb2wgPSBuZXcgTmFub0VudGl0eVBvb2woKTtcclxuICAgIGNvbnN0IGZpcnN0ID0gcG9vbC5jcmVhdGUoKTtcclxuICAgIGZpcnN0LmF0dGFjaChuZXcgTW92ZSgpKTtcclxuICAgIGZpcnN0LmF0dGFjaChuZXcgRGlzcGxheSgpKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZygnZmlyc3QgaGFzIE1vdmUsIERpc3BsYXknLCBmaXJzdC5oYXMoW25ldyBDb3JlQ29tcG9uZW50SWQoJ21vdmUnKSwgbmV3IENvcmVDb21wb25lbnRJZCgnZGlzcGxheScpXSkpO1xyXG4gICAgY29uc29sZS5sb2coJ2ZpcnN0IGhhcyBDb2xsaWRlJywgZmlyc3QuaGFzKFtuZXcgQ29yZUNvbXBvbmVudElkKCdjb2xsaWRlJyldKSk7XHJcblxyXG4gICAgY29uc3Qgc2Vjb25kID0gcG9vbC5jcmVhdGUoKTtcclxuICAgIHNlY29uZC5hdHRhY2gobmV3IENvbGxpZGUoKSk7XHJcbiAgICBcclxuICAgIGNvbnNvbGUubG9nKCdzZWNvbmQgaGFzIE1vdmUsIERpc3BsYXknLCBzZWNvbmQuaGFzKFtuZXcgQ29yZUNvbXBvbmVudElkKCdtb3ZlJyksIG5ldyBDb3JlQ29tcG9uZW50SWQoJ2Rpc3BsYXknKV0pKTtcclxuICAgIGNvbnNvbGUubG9nKCdzZWNvbmQgaGFzIENvbGxpZGUnLCBzZWNvbmQuaGFzKFtuZXcgQ29yZUNvbXBvbmVudElkKCdjb2xsaWRlJyldKSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ2FsbCBlbnRpdGllcyB3aXRoIE1vdmUsIERpc3BsYXknLCBwb29sLnF1ZXJ5KFtuZXcgQ29yZUNvbXBvbmVudElkKCdtb3ZlJyksIG5ldyBDb3JlQ29tcG9uZW50SWQoJ2Rpc3BsYXknKV0pKTtcclxuICAgIGNvbnNvbGUubG9nKCdhbGwgZW50aXRpZXMgd2l0aCBDb2xsaWRlJywgcG9vbC5xdWVyeShbbmV3IENvcmVDb21wb25lbnRJZCgnY29sbGlkZScpXSkpO1xyXG4gICAgY29uc29sZS5sb2coJ2FsbCBlbnRpdGllcyB3aXRoIE1vdmUnLCBwb29sLnF1ZXJ5KFtuZXcgQ29yZUNvbXBvbmVudElkKCdtb3ZlJyldKSk7XHJcbn07IiwiaW1wb3J0IFJhbmRvbWl6ZXIgZnJvbSAnLi4vUmFuZG9taXplcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYWxsIHtcclxuICAgIHByaXZhdGUgX3N0YXRlOiBQaGFzZXIuU3RhdGU7XHJcbiAgICBwcml2YXRlIF9zcHJpdGU6IFBoYXNlci5TcHJpdGU7XHJcbiAgICBwcml2YXRlIF9pc0xhdW5jaGVkOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBfdmVsb2NpdHk6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX3JhbmRvbWl6ZXI6IFJhbmRvbWl6ZXI7XHJcbiAgICBwcml2YXRlIF9nb0xlZnQ6IGJvb2xlYW47XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgc3RhdGU6IFBoYXNlci5TdGF0ZSxcclxuICAgICAgICB2ZWxvY2l0eTogbnVtYmVyID0gNDAwLFxyXG4gICAgICAgIGdvTGVmdDogYm9vbGVhbiA9IHRydWUsXHJcbiAgICAgICAgcmFuZG9taXplcjogUmFuZG9taXplciA9IG5ldyBSYW5kb21pemVyKClcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuX3N0YXRlID0gc3RhdGU7XHJcbiAgICAgICAgdGhpcy5fdmVsb2NpdHkgPSB2ZWxvY2l0eTtcclxuICAgICAgICB0aGlzLl9pc0xhdW5jaGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fcmFuZG9taXplciA9IHJhbmRvbWl6ZXI7XHJcbiAgICAgICAgdGhpcy5fZ29MZWZ0ID0gZ29MZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjcmVhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fc3ByaXRlID0gdGhpcy5fc3RhdGUuZ2FtZS5hZGQuc3ByaXRlKHRoaXMuX3N0YXRlLmdhbWUud29ybGQuY2VudGVyWCwgdGhpcy5fc3RhdGUuZ2FtZS53b3JsZC5jZW50ZXJZLCAnYmFsbCcpO1xyXG4gICAgICAgIHRoaXMuX3Nwcml0ZS5hbmNob3Iuc2V0VG8oMC41LCAwLjUpO1xyXG4gICAgICAgIHRoaXMuX3N0YXRlLmdhbWUucGh5c2ljcy5hcmNhZGUuZW5hYmxlKHRoaXMuX3Nwcml0ZSk7XHJcbiAgICAgICAgdGhpcy5fc3ByaXRlLmJvZHkuY29sbGlkZVdvcmxkQm91bmRzID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9zcHJpdGUuYm9keS5ib3VuY2Uuc2V0VG8oMSwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlc2V0KGdvTGVmdDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3Nwcml0ZS54ID0gdGhpcy5fc3RhdGUuZ2FtZS53b3JsZC5jZW50ZXJYO1xyXG4gICAgICAgIHRoaXMuX3Nwcml0ZS55ID0gdGhpcy5fc3RhdGUuZ2FtZS53b3JsZC5jZW50ZXJZO1xyXG4gICAgICAgIHRoaXMuX3Nwcml0ZS5ib2R5LnZlbG9jaXR5LnNldFRvKDAsIDApO1xyXG4gICAgICAgIHRoaXMuX2lzTGF1bmNoZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9nb0xlZnQgPSBnb0xlZnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxhdW5jaCgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgeE11bHRpcGxpZXIgPSB0aGlzLl9nb0xlZnQgPyAtMSA6IDE7XHJcbiAgICAgICAgbGV0IHlNdWx0aXBsaWVyID0gdGhpcy5fcmFuZG9taXplci5ib29sZWFuKCkgPyAtMSA6IDE7XHJcbiAgICAgICAgdGhpcy5fc3ByaXRlLmJvZHkudmVsb2NpdHkueCA9IHhNdWx0aXBsaWVyICogdGhpcy5fdmVsb2NpdHk7XHJcbiAgICAgICAgdGhpcy5fc3ByaXRlLmJvZHkudmVsb2NpdHkueSA9IHlNdWx0aXBsaWVyICogdGhpcy5fdmVsb2NpdHk7XHJcbiAgICAgICAgdGhpcy5faXNMYXVuY2hlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvZ2dsZSgpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5faXNMYXVuY2hlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0KHRoaXMuX2dvTGVmdCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxhdW5jaCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBzcHJpdGUoKTogUGhhc2VyLlNwcml0ZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Nwcml0ZTtcclxuICAgIH1cclxufSIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi9QbGF5ZXInO1xyXG5pbXBvcnQgUGFkZGxlIGZyb20gJy4vUGFkZGxlJztcclxuaW1wb3J0IEJhbGwgZnJvbSAnLi9CYWxsJztcclxuaW1wb3J0IFNjb3JlIGZyb20gJy4vU2NvcmUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcHV0ZXIgaW1wbGVtZW50cyBQbGF5ZXIge1xyXG4gICAgcHJpdmF0ZSBfc3RhdGU6IFBoYXNlci5TdGF0ZTtcclxuICAgIHByaXZhdGUgX3BhZGRsZTogUGFkZGxlO1xyXG4gICAgcHJpdmF0ZSBfYmFsbDogQmFsbDtcclxuICAgIHByaXZhdGUgX21heFZlbG9jaXR5OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9zY29yZTogU2NvcmU7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgc3RhdGU6IFBoYXNlci5TdGF0ZSxcclxuICAgICAgICBwYWRkbGU6IFBhZGRsZSxcclxuICAgICAgICBiYWxsOiBCYWxsLFxyXG4gICAgICAgIG1heFZlbG9jaXR5OiBudW1iZXIgPSAyNTAsXHJcbiAgICAgICAgc2NvcmU6IFNjb3JlID0gbmV3IFNjb3JlKHN0YXRlKVxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBzdGF0ZTtcclxuICAgICAgICB0aGlzLl9wYWRkbGUgPSBwYWRkbGU7XHJcbiAgICAgICAgdGhpcy5fYmFsbCA9IGJhbGw7XHJcbiAgICAgICAgdGhpcy5fbWF4VmVsb2NpdHkgPSBtYXhWZWxvY2l0eTtcclxuICAgICAgICB0aGlzLl9zY29yZSA9IHNjb3JlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjcmVhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fcGFkZGxlLmNyZWF0ZSh0aGlzLl9zdGF0ZS5nYW1lLndvcmxkLndpZHRoIC0gOCAsIHRoaXMuX3N0YXRlLmdhbWUud29ybGQuY2VudGVyWSk7XHJcbiAgICAgICAgdGhpcy5fc2NvcmUuY3JlYXRlKHRoaXMuX3N0YXRlLmdhbWUud29ybGQud2lkdGggLSAxMjgsIDEyOCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9wYWRkbGUuc3ByaXRlLmJvZHkudmVsb2NpdHkuc2V0VG8odGhpcy5fYmFsbC5zcHJpdGUuYm9keS52ZWxvY2l0eS55KTtcclxuICAgICAgICB0aGlzLl9wYWRkbGUuc3ByaXRlLmJvZHkudmVsb2NpdHkueCA9IDA7XHJcbiAgICAgICAgdGhpcy5fcGFkZGxlLnNwcml0ZS5ib2R5Lm1heFZlbG9jaXR5LnkgPSB0aGlzLl9tYXhWZWxvY2l0eTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcGFkZGxlKCk6IFBhZGRsZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhZGRsZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0IHNjb3JlKCk6IFNjb3JlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2NvcmU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUGxheWVyIGZyb20gJy4vUGxheWVyJztcclxuaW1wb3J0IFBhZGRsZSBmcm9tICcuL1BhZGRsZSc7XHJcbmltcG9ydCBTY29yZSBmcm9tICcuL1Njb3JlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEh1bWFuIGltcGxlbWVudHMgUGxheWVyIHtcclxuICAgIHByaXZhdGUgX3N0YXRlOiBQaGFzZXIuU3RhdGU7XHJcbiAgICBwcml2YXRlIF9wYWRkbGU6IFBhZGRsZTtcclxuICAgIHByaXZhdGUgX3Njb3JlOiBTY29yZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzdGF0ZTogUGhhc2VyLlN0YXRlLCBwYWRkbGU6IFBhZGRsZSwgc2NvcmU6IFNjb3JlID0gbmV3IFNjb3JlKHN0YXRlKSkge1xyXG4gICAgICAgIHRoaXMuX3N0YXRlID0gc3RhdGU7XHJcbiAgICAgICAgdGhpcy5fcGFkZGxlID0gcGFkZGxlO1xyXG4gICAgICAgIHRoaXMuX3Njb3JlID0gc2NvcmU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNyZWF0ZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9wYWRkbGUuY3JlYXRlKDAsIHRoaXMuX3N0YXRlLmdhbWUud29ybGQuY2VudGVyWSk7XHJcbiAgICAgICAgdGhpcy5fc2NvcmUuY3JlYXRlKDEyOCwgMTI4KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3BhZGRsZS5tb3ZlKHRoaXMuX3N0YXRlLmdhbWUuaW5wdXQueSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHBhZGRsZSgpOiBQYWRkbGUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wYWRkbGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNjb3JlKCk6IFNjb3JlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2NvcmU7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNdXNpYyB7XHJcbiAgICBwcml2YXRlIF9zdGF0ZTogUGhhc2VyLlN0YXRlO1xyXG4gICAgcHJpdmF0ZSBfc291bmQ6IFBoYXNlci5Tb3VuZDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzdGF0ZTogUGhhc2VyLlN0YXRlKSB7XHJcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBzdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY3JlYXRlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3NvdW5kID0gdGhpcy5fc3RhdGUuZ2FtZS5hZGQuYXVkaW8oJ211c2ljJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvZ2dsZShwbGF5OiBib29sZWFuKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHBsYXkpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3NvdW5kLnBhdXNlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc291bmQucmVzdW1lKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NvdW5kLnBhdXNlKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwYXVzZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9zb3VuZC5wYXVzZSgpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFkZGxlIHtcclxuICAgIHByaXZhdGUgX3Nwcml0ZTogUGhhc2VyLlNwcml0ZTtcclxuICAgIHByaXZhdGUgX3N0YXRlOiBQaGFzZXIuU3RhdGU7XHJcbiAgICBwcml2YXRlIF9taW5ZOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9tYXhZOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc3RhdGU6IFBoYXNlci5TdGF0ZSkge1xyXG4gICAgICAgIHRoaXMuX3N0YXRlID0gc3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNyZWF0ZSh4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3Nwcml0ZSA9IHRoaXMuX3N0YXRlLmdhbWUuYWRkLnNwcml0ZSh4LCB5LCAncGFkZGxlJyk7XHJcbiAgICAgICAgdGhpcy5fc3ByaXRlLmFuY2hvci5zZXRUbygwLjUsIDAuNSk7XHJcbiAgICAgICAgdGhpcy5fc3RhdGUuZ2FtZS5waHlzaWNzLmFyY2FkZS5lbmFibGUodGhpcy5fc3ByaXRlKTtcclxuICAgICAgICB0aGlzLl9zcHJpdGUuYm9keS5jb2xsaWRlV29ybGRCb3VuZHMgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX3Nwcml0ZS5ib2R5LmltbW92YWJsZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fc3ByaXRlLnNjYWxlLnNldFRvKDAuNSwgMC41KTtcclxuICAgICAgICB0aGlzLl9taW5ZID0gMC41ICogdGhpcy5fc3ByaXRlLmhlaWdodDtcclxuICAgICAgICB0aGlzLl9tYXhZID0gdGhpcy5fc3RhdGUuZ2FtZS53b3JsZC5oZWlnaHQgLSAwLjUgKiB0aGlzLl9zcHJpdGUuaGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtb3ZlKHk6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3Nwcml0ZS55ID0geTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX3Nwcml0ZS55IDwgdGhpcy5fbWluWSkge1xyXG4gICAgICAgICAgICB0aGlzLl9zcHJpdGUueSA9IHRoaXMuX21pblk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9zcHJpdGUueSA+IHRoaXMuX21heFkpIHtcclxuICAgICAgICAgICAgdGhpcy5fc3ByaXRlLnkgPSB0aGlzLl9tYXhZO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHNwcml0ZSgpOiBQaGFzZXIuU3ByaXRlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3ByaXRlO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcmUge1xyXG4gICAgcHJpdmF0ZSBfc3RhdGU6IFBoYXNlci5TdGF0ZTtcclxuICAgIHByaXZhdGUgX2JpdG1hcDogUGhhc2VyLkJpdG1hcFRleHQ7XHJcbiAgICBwcml2YXRlIF92YWx1ZTogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHN0YXRlOiBQaGFzZXIuU3RhdGUpIHtcclxuICAgICAgICB0aGlzLl9zdGF0ZSA9IHN0YXRlO1xyXG4gICAgICAgIHRoaXMuX3ZhbHVlID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY3JlYXRlKHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fYml0bWFwID0gdGhpcy5fc3RhdGUuZ2FtZS5hZGQuYml0bWFwVGV4dChNYXRoLmZsb29yKHgpLCBNYXRoLmZsb29yKHkpLCAnUHJlc3MgU3RhcnQgMlAnLCAnMCcsIDMyKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5jcmVhc2UoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fdmFsdWUgKz0gMTtcclxuICAgICAgICB0aGlzLl9iaXRtYXAudGV4dCA9ICcnICsgdGhpcy5fdmFsdWU7XHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdHlwaW5ncy9pbmRleC5kLnRzXCIvPlxyXG5cclxuaW1wb3J0IHRlc3QgZnJvbSAnLi9lY3MvdGVzdCc7XHJcbnRlc3QoKTtcclxuaW1wb3J0IFBvbmdHYW1lIGZyb20gJy4vUG9uZ0dhbWUnO1xyXG5cclxubmV3IFBvbmdHYW1lKCkuc3RhcnQoKTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBCb290U3RhdGUgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5pdCgpIHtcclxuICAgICAgICAvLyBzY2FsZSB0byBmaXQgc2NyZWVuXHJcbiAgICAgICAgdGhpcy5zY2FsZS5zY2FsZU1vZGUgPSBQaGFzZXIuU2NhbGVNYW5hZ2VyLlNIT1dfQUxMO1xyXG4gICAgICAgIHRoaXMuc2NhbGUuZnVsbFNjcmVlblNjYWxlTW9kZSA9IFBoYXNlci5TY2FsZU1hbmFnZXIuU0hPV19BTEw7XHJcbiAgICAgICAgdGhpcy5zY2FsZS5wYWdlQWxpZ25Ib3Jpem9udGFsbHkgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2NhbGUucGFnZUFsaWduVmVydGljYWxseSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zY2FsZS5mb3JjZUxhbmRzY2FwZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5nYW1lLnNjYWxlLndpbmRvd0NvbnN0cmFpbnRzLmJvdHRvbSA9ICd2aXN1YWwnOyAvLyBtYWtlIHN1cmUgaXQgZG9lc24ndCBnbyBvdmVyIHNjcmVlbiBoZWlnaHRcclxuICAgICAgICB0aGlzLmdhbWUuc2NhbGUucmVmcmVzaCgpO1xyXG5cclxuICAgICAgICAvLyBrZWVwIHBpeGVscyBzaGFycFxyXG4gICAgICAgIHRoaXMuZ2FtZS5hbnRpYWxpYXMgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmdhbWUuc3RhZ2Uuc21vb3RoZWQgPSBmYWxzZTtcclxuICAgICAgICBQaGFzZXIuQ2FudmFzLnNldEltYWdlUmVuZGVyaW5nQ3Jpc3AodGhpcy5nYW1lLmNhbnZhcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZSgpIHtcclxuICAgICAgICB0aGlzLmdhbWUuc3RhdGUuc3RhcnQoJ3ByZWxvYWRlcicpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFBsYXllciBmcm9tICcuLi9lbnRpdGllcy9QbGF5ZXInO1xyXG5pbXBvcnQgSHVtYW4gZnJvbSAnLi4vZW50aXRpZXMvSHVtYW4nO1xyXG5pbXBvcnQgQ29tcHV0ZXIgZnJvbSAnLi4vZW50aXRpZXMvQ29tcHV0ZXInO1xyXG5pbXBvcnQgQmFsbCBmcm9tICcuLi9lbnRpdGllcy9CYWxsJztcclxuaW1wb3J0IFBhZGRsZSBmcm9tICcuLi9lbnRpdGllcy9QYWRkbGUnO1xyXG5pbXBvcnQgTXVzaWMgZnJvbSAnLi4vZW50aXRpZXMvTXVzaWMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVN0YXRlIGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcclxuICAgIHByaXZhdGUgX3BsYXllcnM6IFBsYXllcltdO1xyXG4gICAgcHJpdmF0ZSBfYmFsbDogQmFsbDtcclxuICAgIHByaXZhdGUgX211c2ljOiBNdXNpYztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuX2JhbGwgPSBuZXcgQmFsbCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9wbGF5ZXJzID0gW1xyXG4gICAgICAgICAgICBuZXcgSHVtYW4odGhpcywgbmV3IFBhZGRsZSh0aGlzKSksXHJcbiAgICAgICAgICAgIG5ldyBDb21wdXRlcih0aGlzLCBuZXcgUGFkZGxlKHRoaXMpLCB0aGlzLl9iYWxsKVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgdGhpcy5fbXVzaWMgPSBuZXcgTXVzaWModGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNyZWF0ZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9tdXNpYy5jcmVhdGUoKTtcclxuICAgICAgICB0aGlzLl9iYWxsLmNyZWF0ZSgpO1xyXG4gICAgICAgIHRoaXMuX3BsYXllcnMuZm9yRWFjaChwbGF5ZXIgPT4gcGxheWVyLmNyZWF0ZSgpKTtcclxuICAgICAgICB0aGlzLmdhbWUuaW5wdXQub25Eb3duLmFkZCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX211c2ljLnRvZ2dsZShcclxuICAgICAgICAgICAgICAgIHRoaXMuX2JhbGwudG9nZ2xlKClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3BsYXllcnMuZm9yRWFjaChwbGF5ZXIgPT4ge1xyXG4gICAgICAgICAgICBwbGF5ZXIudXBkYXRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5waHlzaWNzLmFyY2FkZS5jb2xsaWRlKFxyXG4gICAgICAgICAgICAgICAgcGxheWVyLnBhZGRsZS5zcHJpdGUsXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9iYWxsLnNwcml0ZSxcclxuICAgICAgICAgICAgICAgICgpID0+IHRoaXMuZ2FtZS5zb3VuZC5wbGF5KCdoaXQnKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fYmFsbC5zcHJpdGUuYm9keS5ibG9ja2VkLnVwIHx8IHRoaXMuX2JhbGwuc3ByaXRlLmJvZHkuYmxvY2tlZC5kb3duKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5zb3VuZC5wbGF5KCd3YWxsJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5fYmFsbC5zcHJpdGUuYm9keS5ibG9ja2VkLmxlZnQpIHtcclxuICAgICAgICAgICAgdGhpcy5zY29yZSh0aGlzLl9wbGF5ZXJzWzFdLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLl9iYWxsLnNwcml0ZS5ib2R5LmJsb2NrZWQucmlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy5zY29yZSh0aGlzLl9wbGF5ZXJzWzBdLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNjb3JlKHBsYXllcjogUGxheWVyLCBnb0xlZnQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICBwbGF5ZXIuc2NvcmUuaW5jcmVhc2UoKTtcclxuICAgICAgICB0aGlzLmdhbWUuc291bmQucGxheSgnc2NvcmUnKTtcclxuICAgICAgICB0aGlzLl9iYWxsLnJlc2V0KGdvTGVmdCk7XHJcbiAgICAgICAgdGhpcy5fbXVzaWMucGF1c2UoKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByZWxvYWRlclN0YXRlIGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHByZWxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQuaW1hZ2UoJ3BhZGRsZScsICdpbWFnZXMvcGFkZGxlLnBuZycpO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCdiYWxsJywgJ2ltYWdlcy9iYWxsLnBuZycpO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLmJpdG1hcEZvbnQoJ1ByZXNzIFN0YXJ0IDJQJywgJ2ZvbnRzL1ByZXNzX1N0YXJ0XzJQXzAucG5nJywgJ2ZvbnRzL1ByZXNzX1N0YXJ0XzJQLmZudCcpO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLmF1ZGlvKCdoaXQnLCBbJ2F1ZGlvL2hpdC53YXYnXSk7XHJcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQuYXVkaW8oJ3Njb3JlJywgWydhdWRpby9zY29yZS53YXYnXSk7XHJcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQuYXVkaW8oJ3dhbGwnLCBbJ2F1ZGlvL3dhbGwud2F2J10pO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLmF1ZGlvKCdtdXNpYycsIFsnYXVkaW8vYXQtbmlnaHQtcHNnLm1wMycsICdhdWRpby9hdC1uaWdodC1wc2cub2dnJ10pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KCdnYW1lJyk7XHJcbiAgICB9XHJcbn0iXX0=
