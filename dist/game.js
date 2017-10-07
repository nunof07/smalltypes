(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BootState extends Phaser.State {
    constructor() {
        super();
    }
    init() {
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
    }
    update() {
        this.game.state.start('game');
    }
}
exports.default = BootState;
},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BootState_1 = require("./BootState");
const GameState_1 = require("./GameState");
class EcsPong {
    constructor() {
        this._game = new Phaser.Game({
            width: 1024,
            height: 576,
            renderer: Phaser.AUTO,
            parent: 'game-container'
        });
    }
    start() {
        this._game.state.add('boot', new BootState_1.default());
        this._game.state.add('game', new GameState_1.default());
        this._game.state.start('boot');
    }
}
exports.default = EcsPong;
},{"./BootState":2,"./GameState":4}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./base/index");
const index_2 = require("./base/index");
const index_3 = require("./base/index");
const index_4 = require("./score/index");
const index_5 = require("./position/index");
const index_6 = require("./bitmapText/index");
const index_7 = require("./bitmapText/index");
class GameState extends Phaser.State {
    init() {
        const font = new index_6.BitmapFont('Press Start 2P', 'fonts/Press_Start_2P_0.png', 'fonts/Press_Start_2P.fnt');
        this.ecs = new index_1.BaseWorld(new index_2.BaseEntityPool()
            .createMany([
            new index_4.ScorePrefab(new index_5.Position(128, 128), font),
            new index_4.ScorePrefab(new index_5.Position(this.game.world.width - 128, 128), font)
        ]), new index_3.BaseSystemCollection()
            .registerMany([
            new index_7.PhaserBitmapText(this.game.load, this.game.add)
        ]));
    }
    preload() {
        this.ecs.initialize();
    }
    create() {
        this.ecs.start();
    }
    update() {
        this.ecs.process();
    }
}
exports.default = GameState;
},{"./base/index":15,"./bitmapText/index":23,"./position/index":26,"./score/index":29}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseComponentId {
    constructor(id) {
        this.id = id;
    }
    get() {
        return this.id;
    }
}
exports.default = BaseComponentId;
},{}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ComponentNotFoundError_1 = require("./ComponentNotFoundError");
const ComponentDuplicateError_1 = require("./ComponentDuplicateError");
class BaseEntity {
    constructor(id, components = new Map()) {
        this.components = components;
        this.entityId = id;
    }
    id() {
        return this.entityId;
    }
    attach(component) {
        if (this.components.has(component.id())) {
            throw new ComponentDuplicateError_1.default();
        }
        this.components.set(component.id(), component);
        return this;
    }
    attachMany(components) {
        components.forEach(component => {
            this.attach(component);
        });
        return this;
    }
    has(components) {
        return components.every(id => this.components.has(id));
    }
    get(component) {
        if (!this.components.has(component)) {
            throw new ComponentNotFoundError_1.default();
        }
        return this.components.get(component);
    }
}
exports.default = BaseEntity;
},{"./ComponentDuplicateError":11,"./ComponentNotFoundError":12}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseEntityId {
    constructor(id) {
        this.id = id;
    }
    get() {
        return this.id;
    }
}
exports.default = BaseEntityId;
},{}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseEntity_1 = require("./BaseEntity");
const BaseEntityId_1 = require("./BaseEntityId");
class BaseEntityPool {
    constructor() {
        this.pool = [];
    }
    getNewId() {
        return new BaseEntityId_1.default(this.pool.length + '');
    }
    create(components) {
        const entity = new BaseEntity_1.default(this.getNewId(), new Map(components.map(component => [component.id(), component])));
        this.pool.push(entity);
        return entity;
    }
    createMany(prefabs) {
        prefabs.forEach(prefab => {
            this.create(prefab.create());
        });
        return this;
    }
    entities() {
        return this.pool;
    }
}
exports.default = BaseEntityPool;
},{"./BaseEntity":6,"./BaseEntityId":7}],9:[function(require,module,exports){
(function (process){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseSystemCollection {
    constructor() {
        this.systems = [];
    }
    register(system) {
        this.systems.push(system);
        return this;
    }
    registerMany(systems) {
        systems.forEach(system => {
            this.register(system);
        });
        return this;
    }
    initialize(entities) {
        this.systems.forEach(system => {
            system.initialize(entities);
        });
        return this;
    }
    start(entities) {
        this.systems.forEach(system => {
            system.start(entities);
        });
        return this;
    }
    process(entities) {
        this.systems.forEach(system => {
            system.process(entities);
        });
        return this;
    }
}
exports.default = BaseSystemCollection;
}).call(this,require('_process'))

},{"_process":1}],10:[function(require,module,exports){
(function (process){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseWorld {
    constructor(entities, systems) {
        this.entities = entities;
        this.systems = systems;
    }
    initialize() {
        this.systems.initialize(this.entities);
        return this;
    }
    start() {
        this.systems.start(this.entities);
        return this;
    }
    process() {
        this.systems.process(this.entities);
        return this;
    }
}
exports.default = BaseWorld;
}).call(this,require('_process'))

},{"_process":1}],11:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../system/index");
class ComponentDuplicateError extends index_1.DuplicateError {
    constructor(...args) {
        super(...args);
    }
}
exports.default = ComponentDuplicateError;
},{"../system/index":32}],12:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../system/index");
class ComponentNotFoundError extends index_1.NotFoundError {
    constructor(...args) {
        super(...args);
    }
}
exports.default = ComponentNotFoundError;
},{"../system/index":32}],13:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EntitySearch_1 = require("./EntitySearch");
class ComponentSearch {
    constructor(id, entitySearch = new EntitySearch_1.default(id)) {
        this.id = id;
        this.entitySearch = entitySearch;
    }
    find(pool) {
        return this.entitySearch.find(pool)
            .map(entity => entity.get(this.id));
    }
}
exports.default = ComponentSearch;
},{"./EntitySearch":14}],14:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EntitySearch {
    constructor(ids) {
        this.ids = (ids && ids.constructor === Array) ?
            ids :
            [ids];
    }
    find(pool) {
        return pool.entities()
            .filter(entity => entity.has(this.ids));
    }
}
exports.default = EntitySearch;
},{}],15:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseComponentId_1 = require("./BaseComponentId");
exports.BaseComponentId = BaseComponentId_1.default;
const BaseEntity_1 = require("./BaseEntity");
exports.BaseEntity = BaseEntity_1.default;
const BaseEntityId_1 = require("./BaseEntityId");
exports.BaseEntityId = BaseEntityId_1.default;
const BaseEntityPool_1 = require("./BaseEntityPool");
exports.BaseEntityPool = BaseEntityPool_1.default;
const BaseSystemCollection_1 = require("./BaseSystemCollection");
exports.BaseSystemCollection = BaseSystemCollection_1.default;
const BaseWorld_1 = require("./BaseWorld");
exports.BaseWorld = BaseWorld_1.default;
const ComponentDuplicateError_1 = require("./ComponentDuplicateError");
exports.ComponentDuplicateError = ComponentDuplicateError_1.default;
const ComponentNotFoundError_1 = require("./ComponentNotFoundError");
exports.ComponentNotFoundError = ComponentNotFoundError_1.default;
const ComponentSearch_1 = require("./ComponentSearch");
exports.ComponentSearch = ComponentSearch_1.default;
const EntitySearch_1 = require("./EntitySearch");
exports.EntitySearch = EntitySearch_1.default;
},{"./BaseComponentId":5,"./BaseEntity":6,"./BaseEntityId":7,"./BaseEntityPool":8,"./BaseSystemCollection":9,"./BaseWorld":10,"./ComponentDuplicateError":11,"./ComponentNotFoundError":12,"./ComponentSearch":13,"./EntitySearch":14}],16:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BitmapFont {
    constructor(key, imagePath, atlasPath) {
        this.key = key;
        this.imagePath = imagePath;
        this.atlasPath = atlasPath;
    }
    id() {
        return this.key;
    }
    image() {
        return this.imagePath;
    }
    atlas() {
        return this.atlasPath;
    }
}
exports.default = BitmapFont;
},{}],17:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BitmapTextSearch_1 = require("./BitmapTextSearch");
class BitmapFontSearch {
    constructor(search = new BitmapTextSearch_1.default()) {
        this.search = search;
    }
    find(pool) {
        return [...new Set(// unique set
            this.search.find(pool)
                .map(text => text.font()))];
    }
}
exports.default = BitmapFontSearch;
},{"./BitmapTextSearch":19}],18:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../base/index");
class BitmapText {
    constructor(position, font, size, text = '') {
        this.textPosition = position;
        this.textFont = font;
        this.textSize = size;
        this.text = text;
    }
    id() {
        return BitmapText.ID;
    }
    position() {
        return this.textPosition;
    }
    font() {
        return this.textFont;
    }
    size() {
        return this.textSize;
    }
    value() {
        return this.text;
    }
    update(value) {
        this.text = value;
        return this;
    }
}
BitmapText.ID = new index_1.BaseComponentId('bitmapText');
exports.default = BitmapText;
},{"../base/index":15}],19:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../base/index");
const index_2 = require("../base/index");
const BitmapText_1 = require("./BitmapText");
class BitmapTextSearch extends index_2.ComponentSearch {
    constructor(entitySearch = new index_1.EntitySearch(BitmapText_1.default.ID)) {
        super(BitmapText_1.default.ID, entitySearch);
    }
}
exports.default = BitmapTextSearch;
},{"../base/index":15,"./BitmapText":18}],20:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PhaserBitmapFontLoad {
    constructor(loader) {
        this.loader = loader;
    }
    load(fonts) {
        fonts.forEach(font => {
            this.loader.bitmapFont(font.id(), font.image(), font.atlas());
        }, this);
        return this;
    }
}
exports.default = PhaserBitmapFontLoad;
},{}],21:[function(require,module,exports){
(function (process){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BitmapFontSearch_1 = require("./BitmapFontSearch");
const BitmapTextSearch_1 = require("./BitmapTextSearch");
const PhaserBitmapFontLoad_1 = require("./PhaserBitmapFontLoad");
const PhaserBitmapTextFactory_1 = require("./PhaserBitmapTextFactory");
/**
 * Loads and creates bitmap text using Phaser.
 */
class PhaserBitmapText {
    constructor(loader, factory) {
        this.loader = loader;
        this.factory = factory;
    }
    initialize(entities) {
        new PhaserBitmapFontLoad_1.default(this.loader).load(new BitmapFontSearch_1.default().find(entities));
        return this;
    }
    start(entities) {
        const factory = new PhaserBitmapTextFactory_1.default(this.factory);
        new BitmapTextSearch_1.default().find(entities)
            .forEach(text => {
            factory.create(text);
        });
        return this;
    }
    process(entities) {
        // nothing to do
        return this;
    }
}
exports.default = PhaserBitmapText;
}).call(this,require('_process'))

},{"./BitmapFontSearch":17,"./BitmapTextSearch":19,"./PhaserBitmapFontLoad":20,"./PhaserBitmapTextFactory":22,"_process":1}],22:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BitmapTextFactory {
    constructor(factory) {
        this.factory = factory;
    }
    create(text) {
        this.factory.bitmapText(Math.floor(text.position().x()), Math.floor(text.position().y()), text.font().id(), text.value(), text.size());
        return this;
    }
}
exports.default = BitmapTextFactory;
},{}],23:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BitmapFont_1 = require("./BitmapFont");
exports.BitmapFont = BitmapFont_1.default;
const BitmapFontSearch_1 = require("./BitmapFontSearch");
exports.BitmapFontSearch = BitmapFontSearch_1.default;
const BitmapText_1 = require("./BitmapText");
exports.BitmapText = BitmapText_1.default;
const BitmapTextSearch_1 = require("./BitmapTextSearch");
exports.BitmapTextSearch = BitmapTextSearch_1.default;
const PhaserBitmapFontLoad_1 = require("./PhaserBitmapFontLoad");
exports.PhaserBitmapFontLoad = PhaserBitmapFontLoad_1.default;
const PhaserBitmapText_1 = require("./PhaserBitmapText");
exports.PhaserBitmapText = PhaserBitmapText_1.default;
const PhaserBitmapTextFactory_1 = require("./PhaserBitmapTextFactory");
exports.PhaserBitmapTextFactory = PhaserBitmapTextFactory_1.default;
},{"./BitmapFont":16,"./BitmapFontSearch":17,"./BitmapText":18,"./BitmapTextSearch":19,"./PhaserBitmapFontLoad":20,"./PhaserBitmapText":21,"./PhaserBitmapTextFactory":22}],24:[function(require,module,exports){
"use strict";
/// <reference path="../../typings/index.d.ts"/>
Object.defineProperty(exports, "__esModule", { value: true });
const EcsPong_1 = require("./EcsPong");
new EcsPong_1.default().start();
},{"./EcsPong":3}],25:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Position {
    constructor(x, y) {
        this.coordinates = [x, y];
    }
    x() {
        return this.coordinates[0];
    }
    y() {
        return this.coordinates[1];
    }
}
exports.default = Position;
},{}],26:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Position_1 = require("./Position");
exports.Position = Position_1.default;
},{"./Position":25}],27:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../base/index");
class Score {
    constructor() {
        this.score = 0;
    }
    id() {
        return Score.ID;
    }
    value() {
        return this.score;
    }
    increment() {
        this.score += 1;
    }
}
Score.ID = new index_1.BaseComponentId('score');
exports.default = Score;
},{"../base/index":15}],28:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../bitmapText/index");
const Score_1 = require("./Score");
class ScorePrefab {
    constructor(position, font) {
        this.position = position;
        this.font = font;
    }
    create() {
        return [
            new Score_1.default(),
            new index_1.BitmapText(this.position, this.font, 32, '0')
        ];
    }
}
exports.default = ScorePrefab;
},{"../bitmapText/index":23,"./Score":27}],29:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Score_1 = require("./Score");
exports.Score = Score_1.default;
const ScorePrefab_1 = require("./ScorePrefab");
exports.ScorePrefab = ScorePrefab_1.default;
},{"./Score":27,"./ScorePrefab":28}],30:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DuplicateError extends Error {
    constructor(...args) {
        super(...args);
        Error.captureStackTrace(this, DuplicateError);
    }
}
exports.default = DuplicateError;
},{}],31:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NotFoundError extends Error {
    constructor(...args) {
        super(...args);
        Error.captureStackTrace(this, NotFoundError);
    }
}
exports.default = NotFoundError;
},{}],32:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DuplicateError_1 = require("./DuplicateError");
exports.DuplicateError = DuplicateError_1.default;
const NotFoundError_1 = require("./NotFoundError");
exports.NotFoundError = NotFoundError_1.default;
},{"./DuplicateError":30,"./NotFoundError":31}],33:[function(require,module,exports){
"use strict";
/// <reference path="../typings/index.d.ts"/>
Object.defineProperty(exports, "__esModule", { value: true });
// import PongGame from './PongGame';
// new PongGame().start();
require("./ecs/main");
},{"./ecs/main":24}]},{},[33])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwic3JjL2Vjcy9Cb290U3RhdGUudHMiLCJzcmMvZWNzL0Vjc1BvbmcudHMiLCJzcmMvZWNzL0dhbWVTdGF0ZS50cyIsInNyYy9lY3MvYmFzZS9CYXNlQ29tcG9uZW50SWQudHMiLCJzcmMvZWNzL2Jhc2UvQmFzZUVudGl0eS50cyIsInNyYy9lY3MvYmFzZS9CYXNlRW50aXR5SWQudHMiLCJzcmMvZWNzL2Jhc2UvQmFzZUVudGl0eVBvb2wudHMiLCJzcmMvZWNzL2Jhc2UvQmFzZVN5c3RlbUNvbGxlY3Rpb24udHMiLCJzcmMvZWNzL2Jhc2UvQmFzZVdvcmxkLnRzIiwic3JjL2Vjcy9iYXNlL0NvbXBvbmVudER1cGxpY2F0ZUVycm9yLnRzIiwic3JjL2Vjcy9iYXNlL0NvbXBvbmVudE5vdEZvdW5kRXJyb3IudHMiLCJzcmMvZWNzL2Jhc2UvQ29tcG9uZW50U2VhcmNoLnRzIiwic3JjL2Vjcy9iYXNlL0VudGl0eVNlYXJjaC50cyIsInNyYy9lY3MvYmFzZS9pbmRleC50cyIsInNyYy9lY3MvYml0bWFwVGV4dC9CaXRtYXBGb250LnRzIiwic3JjL2Vjcy9iaXRtYXBUZXh0L0JpdG1hcEZvbnRTZWFyY2gudHMiLCJzcmMvZWNzL2JpdG1hcFRleHQvQml0bWFwVGV4dC50cyIsInNyYy9lY3MvYml0bWFwVGV4dC9CaXRtYXBUZXh0U2VhcmNoLnRzIiwic3JjL2Vjcy9iaXRtYXBUZXh0L1BoYXNlckJpdG1hcEZvbnRMb2FkLnRzIiwic3JjL2Vjcy9iaXRtYXBUZXh0L1BoYXNlckJpdG1hcFRleHQudHMiLCJzcmMvZWNzL2JpdG1hcFRleHQvUGhhc2VyQml0bWFwVGV4dEZhY3RvcnkudHMiLCJzcmMvZWNzL2JpdG1hcFRleHQvaW5kZXgudHMiLCJzcmMvZWNzL21haW4udHMiLCJzcmMvZWNzL3Bvc2l0aW9uL1Bvc2l0aW9uLnRzIiwic3JjL2Vjcy9wb3NpdGlvbi9pbmRleC50cyIsInNyYy9lY3Mvc2NvcmUvU2NvcmUudHMiLCJzcmMvZWNzL3Njb3JlL1Njb3JlUHJlZmFiLnRzIiwic3JjL2Vjcy9zY29yZS9pbmRleC50cyIsInNyYy9lY3Mvc3lzdGVtL0R1cGxpY2F0ZUVycm9yLnRzIiwic3JjL2Vjcy9zeXN0ZW0vTm90Rm91bmRFcnJvci50cyIsInNyYy9lY3Mvc3lzdGVtL2luZGV4LnRzIiwic3JjL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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O0FDTGpCLDZDQUE2Qzs7QUFFN0MscUNBQXFDO0FBRXJDLDBCQUEwQjtBQUMxQixzQkFBb0IiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvb3RTdGF0ZSBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbml0KCkge1xyXG4gICAgICAgIC8vIHNjYWxlIHRvIGZpdCBzY3JlZW5cclxuICAgICAgICB0aGlzLnNjYWxlLnNjYWxlTW9kZSA9IFBoYXNlci5TY2FsZU1hbmFnZXIuU0hPV19BTEw7XHJcbiAgICAgICAgdGhpcy5zY2FsZS5mdWxsU2NyZWVuU2NhbGVNb2RlID0gUGhhc2VyLlNjYWxlTWFuYWdlci5TSE9XX0FMTDtcclxuICAgICAgICB0aGlzLnNjYWxlLnBhZ2VBbGlnbkhvcml6b250YWxseSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zY2FsZS5wYWdlQWxpZ25WZXJ0aWNhbGx5ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNjYWxlLmZvcmNlTGFuZHNjYXBlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmdhbWUuc2NhbGUud2luZG93Q29uc3RyYWludHMuYm90dG9tID0gJ3Zpc3VhbCc7IC8vIG1ha2Ugc3VyZSBpdCBkb2Vzbid0IGdvIG92ZXIgc2NyZWVuIGhlaWdodFxyXG4gICAgICAgIHRoaXMuZ2FtZS5zY2FsZS5yZWZyZXNoKCk7XHJcblxyXG4gICAgICAgIC8vIGtlZXAgcGl4ZWxzIHNoYXJwXHJcbiAgICAgICAgdGhpcy5nYW1lLmFudGlhbGlhcyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5zdGFnZS5zbW9vdGhlZCA9IGZhbHNlO1xyXG4gICAgICAgIFBoYXNlci5DYW52YXMuc2V0SW1hZ2VSZW5kZXJpbmdDcmlzcCh0aGlzLmdhbWUuY2FudmFzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZS5zdGF0ZS5zdGFydCgnZ2FtZScpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IEJvb3RTdGF0ZSBmcm9tICcuL0Jvb3RTdGF0ZSc7XHJcbmltcG9ydCBHYW1lU3RhdGUgZnJvbSAnLi9HYW1lU3RhdGUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWNzUG9uZyB7XHJcbiAgICBwcml2YXRlIF9nYW1lOiBQaGFzZXIuR2FtZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9nYW1lID0gbmV3IFBoYXNlci5HYW1lKHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMjQsXHJcbiAgICAgICAgICAgIGhlaWdodDogNTc2LFxyXG4gICAgICAgICAgICByZW5kZXJlcjogUGhhc2VyLkFVVE8sXHJcbiAgICAgICAgICAgIHBhcmVudDogJ2dhbWUtY29udGFpbmVyJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLl9nYW1lLnN0YXRlLmFkZCgnYm9vdCcsIG5ldyBCb290U3RhdGUoKSk7XHJcbiAgICAgICAgdGhpcy5fZ2FtZS5zdGF0ZS5hZGQoJ2dhbWUnLCBuZXcgR2FtZVN0YXRlKCkpO1xyXG4gICAgICAgIHRoaXMuX2dhbWUuc3RhdGUuc3RhcnQoJ2Jvb3QnKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEJhc2VXb3JsZCB9IGZyb20gJy4vYmFzZS9pbmRleCc7XHJcbmltcG9ydCB7IEJhc2VFbnRpdHlQb29sIH0gZnJvbSAnLi9iYXNlL2luZGV4JztcclxuaW1wb3J0IHsgQmFzZVN5c3RlbUNvbGxlY3Rpb24gfSBmcm9tICcuL2Jhc2UvaW5kZXgnO1xyXG5pbXBvcnQgeyBTY29yZVByZWZhYiB9IGZyb20gJy4vc2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gJy4vcG9zaXRpb24vaW5kZXgnO1xyXG5pbXBvcnQgeyBCaXRtYXBGb250IH0gZnJvbSAnLi9iaXRtYXBUZXh0L2luZGV4JztcclxuaW1wb3J0IHsgUGhhc2VyQml0bWFwVGV4dCB9IGZyb20gJy4vYml0bWFwVGV4dC9pbmRleCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lU3RhdGUgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xyXG4gICAgcHJpdmF0ZSBlY3M6IEJhc2VXb3JsZDtcclxuXHJcbiAgICBpbml0KCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGZvbnQgPSBuZXcgQml0bWFwRm9udCgnUHJlc3MgU3RhcnQgMlAnLCAnZm9udHMvUHJlc3NfU3RhcnRfMlBfMC5wbmcnLCAnZm9udHMvUHJlc3NfU3RhcnRfMlAuZm50Jyk7XHJcbiAgICAgICAgdGhpcy5lY3MgPSBuZXcgQmFzZVdvcmxkKFxyXG4gICAgICAgICAgICBuZXcgQmFzZUVudGl0eVBvb2woKVxyXG4gICAgICAgICAgICAgICAgLmNyZWF0ZU1hbnkoW1xyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBTY29yZVByZWZhYihuZXcgUG9zaXRpb24oMTI4LCAxMjgpLCBmb250KSxcclxuICAgICAgICAgICAgICAgICAgICBuZXcgU2NvcmVQcmVmYWIobmV3IFBvc2l0aW9uKHRoaXMuZ2FtZS53b3JsZC53aWR0aCAtIDEyOCwgMTI4KSwgZm9udClcclxuICAgICAgICAgICAgICAgIF0pLFxyXG4gICAgICAgICAgICBuZXcgQmFzZVN5c3RlbUNvbGxlY3Rpb24oKVxyXG4gICAgICAgICAgICAgICAgLnJlZ2lzdGVyTWFueShbXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IFBoYXNlckJpdG1hcFRleHQodGhpcy5nYW1lLmxvYWQsIHRoaXMuZ2FtZS5hZGQpXHJcbiAgICAgICAgICAgICAgICBdKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJlbG9hZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmVjcy5pbml0aWFsaXplKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZWNzLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZWNzLnByb2Nlc3MoKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IENvbXBvbmVudElkIH0gZnJvbSAnLi4vY29yZS9pbmRleCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlQ29tcG9uZW50SWQgaW1wbGVtZW50cyBDb21wb25lbnRJZCB7XHJcbiAgICBwcml2YXRlIGlkOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaWQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pZDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEVudGl0eSB9IGZyb20gJy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBFbnRpdHlJZCB9IGZyb20gJy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQ29tcG9uZW50SWQgfSBmcm9tICcuLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IENvbXBvbmVudE5vdEZvdW5kRXJyb3IgZnJvbSAnLi9Db21wb25lbnROb3RGb3VuZEVycm9yJztcclxuaW1wb3J0IENvbXBvbmVudER1cGxpY2F0ZUVycm9yIGZyb20gJy4vQ29tcG9uZW50RHVwbGljYXRlRXJyb3InO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZUVudGl0eSBpbXBsZW1lbnRzIEVudGl0eSB7XHJcbiAgICBwcml2YXRlIGVudGl0eUlkOiBFbnRpdHlJZDtcclxuICAgIHByaXZhdGUgY29tcG9uZW50czogTWFwPENvbXBvbmVudElkLCBDb21wb25lbnQ+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yIChcclxuICAgICAgICBpZDogRW50aXR5SWQsXHJcbiAgICAgICAgY29tcG9uZW50czogTWFwPENvbXBvbmVudElkLCBDb21wb25lbnQ+ID0gbmV3IE1hcCgpXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSBjb21wb25lbnRzO1xyXG4gICAgICAgIHRoaXMuZW50aXR5SWQgPSBpZDtcclxuICAgIH1cclxuXHJcbiAgICBpZCgpOiBFbnRpdHlJZCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZW50aXR5SWQ7XHJcbiAgICB9XHJcblxyXG4gICAgYXR0YWNoKGNvbXBvbmVudDogQ29tcG9uZW50KTogRW50aXR5IHtcclxuICAgICAgICBpZiAodGhpcy5jb21wb25lbnRzLmhhcyhjb21wb25lbnQuaWQoKSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IENvbXBvbmVudER1cGxpY2F0ZUVycm9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5zZXQoY29tcG9uZW50LmlkKCksIGNvbXBvbmVudCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGF0dGFjaE1hbnkoY29tcG9uZW50czogQ29tcG9uZW50W10pOiBFbnRpdHkge1xyXG4gICAgICAgIGNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmF0dGFjaChjb21wb25lbnQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBoYXMoY29tcG9uZW50czogQ29tcG9uZW50SWRbXSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBjb21wb25lbnRzLmV2ZXJ5KGlkID0+IHRoaXMuY29tcG9uZW50cy5oYXMoaWQpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQ8VCBleHRlbmRzIENvbXBvbmVudD4oY29tcG9uZW50OiBDb21wb25lbnRJZCk6IFQge1xyXG4gICAgICAgIGlmICghdGhpcy5jb21wb25lbnRzLmhhcyhjb21wb25lbnQpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBDb21wb25lbnROb3RGb3VuZEVycm9yKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnRzLmdldChjb21wb25lbnQpIGFzIFQ7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHsgRW50aXR5SWQgfSBmcm9tICcuLi9jb3JlL2luZGV4JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VFbnRpdHlJZCBpbXBsZW1lbnRzIEVudGl0eUlkIHtcclxuICAgIHByaXZhdGUgaWQ6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlkO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRW50aXR5IH0gZnJvbSAnLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IEVudGl0eUlkIH0gZnJvbSAnLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IEVudGl0eVBvb2wgfSBmcm9tICcuLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgUHJlZmFiIH0gZnJvbSAnLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRJZCB9IGZyb20gJy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgQmFzZUVudGl0eSBmcm9tICcuL0Jhc2VFbnRpdHknO1xyXG5pbXBvcnQgQmFzZUVudGl0eUlkIGZyb20gJy4vQmFzZUVudGl0eUlkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VFbnRpdHlQb29sIGltcGxlbWVudHMgRW50aXR5UG9vbCB7XHJcbiAgICBwcml2YXRlIHBvb2w6IEVudGl0eVtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMucG9vbCA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0TmV3SWQoKTogRW50aXR5SWQge1xyXG4gICAgICAgIHJldHVybiBuZXcgQmFzZUVudGl0eUlkKHRoaXMucG9vbC5sZW5ndGggKyAnJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlKGNvbXBvbmVudHM/OiBDb21wb25lbnRbXSk6IEVudGl0eSB7XHJcbiAgICAgICAgY29uc3QgZW50aXR5ID0gbmV3IEJhc2VFbnRpdHkoXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0TmV3SWQoKSxcclxuICAgICAgICAgICAgbmV3IE1hcChcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMubWFwKGNvbXBvbmVudCA9PiBbY29tcG9uZW50LmlkKCksIGNvbXBvbmVudF0gYXMgW0NvbXBvbmVudElkLCBDb21wb25lbnRdKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLnBvb2wucHVzaChlbnRpdHkpO1xyXG5cclxuICAgICAgICByZXR1cm4gZW50aXR5O1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZU1hbnkocHJlZmFiczogUHJlZmFiW10pOiBFbnRpdHlQb29sIHtcclxuICAgICAgICBwcmVmYWJzLmZvckVhY2gocHJlZmFiID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGUoXHJcbiAgICAgICAgICAgICAgICBwcmVmYWIuY3JlYXRlKClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZW50aXRpZXMoKTogRW50aXR5W10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvb2w7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHsgRW50aXR5IH0gZnJvbSAnLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IEVudGl0eVBvb2wgfSBmcm9tICcuLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgU3lzdGVtIH0gZnJvbSAnLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFN5c3RlbUNvbGxlY3Rpb24gfSBmcm9tICcuLi9jb3JlL2luZGV4JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VTeXN0ZW1Db2xsZWN0aW9uIGltcGxlbWVudHMgU3lzdGVtQ29sbGVjdGlvbiB7XHJcbiAgICBwcml2YXRlIHN5c3RlbXM6IFN5c3RlbVtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuc3lzdGVtcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyKHN5c3RlbTogU3lzdGVtKTogU3lzdGVtQ29sbGVjdGlvbiB7XHJcbiAgICAgICAgdGhpcy5zeXN0ZW1zLnB1c2goc3lzdGVtKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJNYW55KHN5c3RlbXM6IFN5c3RlbVtdKTogU3lzdGVtQ29sbGVjdGlvbiB7XHJcbiAgICAgICAgc3lzdGVtcy5mb3JFYWNoKHN5c3RlbSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXIoc3lzdGVtKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdGlhbGl6ZShlbnRpdGllczogRW50aXR5UG9vbCk6IFN5c3RlbUNvbGxlY3Rpb24ge1xyXG4gICAgICAgIHRoaXMuc3lzdGVtcy5mb3JFYWNoKHN5c3RlbSA9PiB7XHJcbiAgICAgICAgICAgIHN5c3RlbS5pbml0aWFsaXplKGVudGl0aWVzKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoZW50aXRpZXM6IEVudGl0eVBvb2wpOiBTeXN0ZW1Db2xsZWN0aW9uIHtcclxuICAgICAgICB0aGlzLnN5c3RlbXMuZm9yRWFjaChzeXN0ZW0gPT4ge1xyXG4gICAgICAgICAgICBzeXN0ZW0uc3RhcnQoZW50aXRpZXMpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwcm9jZXNzKGVudGl0aWVzOiBFbnRpdHlQb29sKTogU3lzdGVtQ29sbGVjdGlvbiB7XHJcbiAgICAgICAgdGhpcy5zeXN0ZW1zLmZvckVhY2goc3lzdGVtID0+IHtcclxuICAgICAgICAgICAgc3lzdGVtLnByb2Nlc3MoZW50aXRpZXMpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufSIsImltcG9ydCB7IEVudGl0eVBvb2wgfSBmcm9tICcuLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgU3lzdGVtQ29sbGVjdGlvbiB9IGZyb20gJy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBXb3JsZCB9IGZyb20gJy4uL2NvcmUvaW5kZXgnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VXb3JsZCBpbXBsZW1lbnRzIFdvcmxkIHtcclxuICAgIHByaXZhdGUgZW50aXRpZXM6IEVudGl0eVBvb2w7XHJcbiAgICBwcml2YXRlIHN5c3RlbXM6IFN5c3RlbUNvbGxlY3Rpb247XHJcblxyXG4gICAgY29uc3RydWN0b3IoZW50aXRpZXM6IEVudGl0eVBvb2wsIHN5c3RlbXM6IFN5c3RlbUNvbGxlY3Rpb24pIHtcclxuICAgICAgICB0aGlzLmVudGl0aWVzID0gZW50aXRpZXM7XHJcbiAgICAgICAgdGhpcy5zeXN0ZW1zID0gc3lzdGVtcztcclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsaXplKCk6IFdvcmxkIHtcclxuICAgICAgICB0aGlzLnN5c3RlbXMuaW5pdGlhbGl6ZSh0aGlzLmVudGl0aWVzKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpOiBXb3JsZCB7XHJcbiAgICAgICAgdGhpcy5zeXN0ZW1zLnN0YXJ0KHRoaXMuZW50aXRpZXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHByb2Nlc3MoKTogV29ybGQge1xyXG4gICAgICAgIHRoaXMuc3lzdGVtcy5wcm9jZXNzKHRoaXMuZW50aXRpZXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRHVwbGljYXRlRXJyb3IgfSBmcm9tICcuLi9zeXN0ZW0vaW5kZXgnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50RHVwbGljYXRlRXJyb3IgZXh0ZW5kcyBEdXBsaWNhdGVFcnJvciB7XHJcbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkge1xyXG4gICAgICAgIHN1cGVyKC4uLmFyZ3MpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgTm90Rm91bmRFcnJvciB9IGZyb20gJy4uL3N5c3RlbS9pbmRleCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnROb3RGb3VuZEVycm9yIGV4dGVuZHMgTm90Rm91bmRFcnJvciB7XHJcbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkge1xyXG4gICAgICAgIHN1cGVyKC4uLmFyZ3MpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgU2VhcmNoIH0gZnJvbSAnLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRJZCB9IGZyb20gJy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBFbnRpdHlQb29sIH0gZnJvbSAnLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IEVudGl0eSB9IGZyb20gJy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgRW50aXR5U2VhcmNoIGZyb20gJy4vRW50aXR5U2VhcmNoJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudFNlYXJjaDxUIGV4dGVuZHMgQ29tcG9uZW50PiBpbXBsZW1lbnRzIFNlYXJjaDxUPiB7XHJcbiAgICBwcml2YXRlIGlkOiBDb21wb25lbnRJZDtcclxuICAgIHByaXZhdGUgZW50aXR5U2VhcmNoOiBFbnRpdHlTZWFyY2g7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgaWQ6IENvbXBvbmVudElkLFxyXG4gICAgICAgIGVudGl0eVNlYXJjaDogRW50aXR5U2VhcmNoID0gbmV3IEVudGl0eVNlYXJjaChpZClcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLmVudGl0eVNlYXJjaCA9IGVudGl0eVNlYXJjaDtcclxuICAgIH1cclxuXHJcbiAgICBmaW5kKHBvb2w6IEVudGl0eVBvb2wpOiBUW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVudGl0eVNlYXJjaC5maW5kKHBvb2wpXHJcbiAgICAgICAgICAgIC5tYXAoZW50aXR5ID0+IGVudGl0eS5nZXQ8VD4odGhpcy5pZCkpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRW50aXR5IH0gZnJvbSAnLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IEVudGl0eVBvb2wgfSBmcm9tICcuLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IENvbXBvbmVudElkIH0gZnJvbSAnLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFNlYXJjaCB9IGZyb20gJy4uL2NvcmUvaW5kZXgnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW50aXR5U2VhcmNoIGltcGxlbWVudHMgU2VhcmNoPEVudGl0eT4ge1xyXG4gICAgcHJpdmF0ZSBpZHM6IENvbXBvbmVudElkW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoaWRzOiBDb21wb25lbnRJZFtdIHwgQ29tcG9uZW50SWQpIHtcclxuICAgICAgICB0aGlzLmlkcyA9IChpZHMgJiYgaWRzLmNvbnN0cnVjdG9yID09PSBBcnJheSkgP1xyXG4gICAgICAgICAgICBpZHMgYXMgQ29tcG9uZW50SWRbXSA6XHJcbiAgICAgICAgICAgIFtpZHMgYXMgQ29tcG9uZW50SWRdO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbmQocG9vbDogRW50aXR5UG9vbCk6IEVudGl0eVtdIHtcclxuICAgICAgICByZXR1cm4gcG9vbC5lbnRpdGllcygpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoZW50aXR5ID0+IGVudGl0eS5oYXModGhpcy5pZHMpKTtcclxuICAgIH1cclxufSIsImltcG9ydCBCYXNlQ29tcG9uZW50SWQgZnJvbSAnLi9CYXNlQ29tcG9uZW50SWQnO1xyXG5pbXBvcnQgQmFzZUVudGl0eSBmcm9tICcuL0Jhc2VFbnRpdHknO1xyXG5pbXBvcnQgQmFzZUVudGl0eUlkIGZyb20gJy4vQmFzZUVudGl0eUlkJztcclxuaW1wb3J0IEJhc2VFbnRpdHlQb29sIGZyb20gJy4vQmFzZUVudGl0eVBvb2wnO1xyXG5pbXBvcnQgQmFzZVN5c3RlbUNvbGxlY3Rpb24gZnJvbSAnLi9CYXNlU3lzdGVtQ29sbGVjdGlvbic7XHJcbmltcG9ydCBCYXNlV29ybGQgZnJvbSAnLi9CYXNlV29ybGQnO1xyXG5pbXBvcnQgQ29tcG9uZW50RHVwbGljYXRlRXJyb3IgZnJvbSAnLi9Db21wb25lbnREdXBsaWNhdGVFcnJvcic7XHJcbmltcG9ydCBDb21wb25lbnROb3RGb3VuZEVycm9yIGZyb20gJy4vQ29tcG9uZW50Tm90Rm91bmRFcnJvcic7XHJcbmltcG9ydCBDb21wb25lbnRTZWFyY2ggZnJvbSAnLi9Db21wb25lbnRTZWFyY2gnO1xyXG5pbXBvcnQgRW50aXR5U2VhcmNoIGZyb20gJy4vRW50aXR5U2VhcmNoJztcclxuXHJcbmV4cG9ydCB7XHJcbiAgICBCYXNlQ29tcG9uZW50SWQsXHJcbiAgICBCYXNlRW50aXR5LFxyXG4gICAgQmFzZUVudGl0eUlkLFxyXG4gICAgQmFzZUVudGl0eVBvb2wsXHJcbiAgICBCYXNlU3lzdGVtQ29sbGVjdGlvbixcclxuICAgIEJhc2VXb3JsZCxcclxuICAgIENvbXBvbmVudER1cGxpY2F0ZUVycm9yLFxyXG4gICAgQ29tcG9uZW50Tm90Rm91bmRFcnJvcixcclxuICAgIENvbXBvbmVudFNlYXJjaCxcclxuICAgIEVudGl0eVNlYXJjaFxyXG59OyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJpdG1hcEZvbnQge1xyXG4gICAgcHJpdmF0ZSBrZXk6IHN0cmluZztcclxuICAgIHByaXZhdGUgaW1hZ2VQYXRoOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIGF0bGFzUGF0aDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGtleTogc3RyaW5nLCBpbWFnZVBhdGg6IHN0cmluZywgYXRsYXNQYXRoOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmtleSA9IGtleTtcclxuICAgICAgICB0aGlzLmltYWdlUGF0aCA9IGltYWdlUGF0aDtcclxuICAgICAgICB0aGlzLmF0bGFzUGF0aCA9IGF0bGFzUGF0aDtcclxuICAgIH1cclxuXHJcbiAgICBpZCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmtleTtcclxuICAgIH1cclxuXHJcbiAgICBpbWFnZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmltYWdlUGF0aDtcclxuICAgIH1cclxuXHJcbiAgICBhdGxhcygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmF0bGFzUGF0aDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEVudGl0eVBvb2wgfSBmcm9tICcuLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgU2VhcmNoIH0gZnJvbSAnLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IENvbXBvbmVudFNlYXJjaCB9IGZyb20gJy4uL2Jhc2UvaW5kZXgnO1xyXG5pbXBvcnQgQml0bWFwRm9udCBmcm9tICcuL0JpdG1hcEZvbnQnO1xyXG5pbXBvcnQgQml0bWFwVGV4dCBmcm9tICcuL0JpdG1hcFRleHQnO1xyXG5pbXBvcnQgQml0bWFwVGV4dFNlYXJjaCBmcm9tICcuL0JpdG1hcFRleHRTZWFyY2gnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQml0bWFwRm9udFNlYXJjaCBpbXBsZW1lbnRzIFNlYXJjaDxCaXRtYXBGb250PiB7XHJcbiAgICBwcml2YXRlIHNlYXJjaDogQ29tcG9uZW50U2VhcmNoPEJpdG1hcFRleHQ+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNlYXJjaDogQ29tcG9uZW50U2VhcmNoPEJpdG1hcFRleHQ+ID0gbmV3IEJpdG1hcFRleHRTZWFyY2goKSkge1xyXG4gICAgICAgIHRoaXMuc2VhcmNoID0gc2VhcmNoO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbmQocG9vbDogRW50aXR5UG9vbCk6IEJpdG1hcEZvbnRbXSB7XHJcbiAgICAgICAgcmV0dXJuIFsuLi5uZXcgU2V0KC8vIHVuaXF1ZSBzZXRcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2guZmluZChwb29sKVxyXG4gICAgICAgICAgICAgICAgLm1hcCh0ZXh0ID0+IHRleHQuZm9udCgpKVxyXG4gICAgICAgICldO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IENvbXBvbmVudElkIH0gZnJvbSAnLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IEJhc2VDb21wb25lbnRJZCB9IGZyb20gJy4uL2Jhc2UvaW5kZXgnO1xyXG5pbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gJy4uL3Bvc2l0aW9uL2luZGV4JztcclxuaW1wb3J0IEJpdG1hcEZvbnQgZnJvbSAnLi9CaXRtYXBGb250JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJpdG1hcFRleHQgaW1wbGVtZW50cyBDb21wb25lbnQge1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBJRCA9IG5ldyBCYXNlQ29tcG9uZW50SWQoJ2JpdG1hcFRleHQnKTtcclxuXHJcbiAgICBwcml2YXRlIHRleHRQb3NpdGlvbjogUG9zaXRpb247XHJcbiAgICBwcml2YXRlIHRleHRGb250OiBCaXRtYXBGb250O1xyXG4gICAgcHJpdmF0ZSB0ZXh0U2l6ZTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSB0ZXh0OiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocG9zaXRpb246IFBvc2l0aW9uLCBmb250OiBCaXRtYXBGb250LCBzaXplOiBudW1iZXIsIHRleHQ6IHN0cmluZyA9ICcnKSB7XHJcbiAgICAgICAgdGhpcy50ZXh0UG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgICAgICB0aGlzLnRleHRGb250ID0gZm9udDtcclxuICAgICAgICB0aGlzLnRleHRTaXplID0gc2l6ZTtcclxuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIGlkKCk6IENvbXBvbmVudElkIHtcclxuICAgICAgICByZXR1cm4gQml0bWFwVGV4dC5JRDtcclxuICAgIH1cclxuXHJcbiAgICBwb3NpdGlvbigpOiBQb3NpdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dFBvc2l0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIGZvbnQoKTogQml0bWFwRm9udCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dEZvbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2l6ZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRleHRTaXplO1xyXG4gICAgfVxyXG5cclxuICAgIHZhbHVlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dDtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUodmFsdWU6IHN0cmluZyk6IEJpdG1hcFRleHQge1xyXG4gICAgICAgIHRoaXMudGV4dCA9IHZhbHVlO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBFbnRpdHlTZWFyY2ggfSBmcm9tICcuLi9iYXNlL2luZGV4JztcclxuaW1wb3J0IHsgQ29tcG9uZW50U2VhcmNoIH0gZnJvbSAnLi4vYmFzZS9pbmRleCc7XHJcbmltcG9ydCBCaXRtYXBUZXh0IGZyb20gJy4vQml0bWFwVGV4dCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCaXRtYXBUZXh0U2VhcmNoIGV4dGVuZHMgQ29tcG9uZW50U2VhcmNoPEJpdG1hcFRleHQ+IHtcclxuICAgIGNvbnN0cnVjdG9yKGVudGl0eVNlYXJjaDogRW50aXR5U2VhcmNoID0gbmV3IEVudGl0eVNlYXJjaChCaXRtYXBUZXh0LklEKSkge1xyXG4gICAgICAgIHN1cGVyKEJpdG1hcFRleHQuSUQsIGVudGl0eVNlYXJjaCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQml0bWFwRm9udCBmcm9tICcuL0JpdG1hcEZvbnQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGhhc2VyQml0bWFwRm9udExvYWQge1xyXG4gICAgcHJpdmF0ZSBsb2FkZXI6IFBoYXNlci5Mb2FkZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IobG9hZGVyOiBQaGFzZXIuTG9hZGVyKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkZXIgPSBsb2FkZXI7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZChmb250czogQml0bWFwRm9udFtdKTogUGhhc2VyQml0bWFwRm9udExvYWQge1xyXG4gICAgICAgIGZvbnRzLmZvckVhY2goZm9udCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZGVyLmJpdG1hcEZvbnQoXHJcbiAgICAgICAgICAgICAgICBmb250LmlkKCksXHJcbiAgICAgICAgICAgICAgICBmb250LmltYWdlKCksXHJcbiAgICAgICAgICAgICAgICBmb250LmF0bGFzKClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBTeXN0ZW0gfSBmcm9tICcuLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgRW50aXR5UG9vbCB9IGZyb20gJy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgQml0bWFwVGV4dCBmcm9tICcuL0JpdG1hcFRleHQnO1xyXG5pbXBvcnQgQml0bWFwRm9udFNlYXJjaCBmcm9tICcuL0JpdG1hcEZvbnRTZWFyY2gnO1xyXG5pbXBvcnQgQml0bWFwVGV4dFNlYXJjaCBmcm9tICcuL0JpdG1hcFRleHRTZWFyY2gnO1xyXG5pbXBvcnQgUGhhc2VyQml0bWFwRm9udExvYWQgZnJvbSAnLi9QaGFzZXJCaXRtYXBGb250TG9hZCc7XHJcbmltcG9ydCBQaGFzZXJCaXRtYXBUZXh0RmFjdG9yeSBmcm9tICcuL1BoYXNlckJpdG1hcFRleHRGYWN0b3J5JztcclxuXHJcbi8qKlxyXG4gKiBMb2FkcyBhbmQgY3JlYXRlcyBiaXRtYXAgdGV4dCB1c2luZyBQaGFzZXIuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQaGFzZXJCaXRtYXBUZXh0IGltcGxlbWVudHMgU3lzdGVtIHtcclxuICAgIHByaXZhdGUgbG9hZGVyOiBQaGFzZXIuTG9hZGVyO1xyXG4gICAgcHJpdmF0ZSBmYWN0b3J5OiBQaGFzZXIuR2FtZU9iamVjdEZhY3Rvcnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IobG9hZGVyOiBQaGFzZXIuTG9hZGVyLCBmYWN0b3J5OiBQaGFzZXIuR2FtZU9iamVjdEZhY3RvcnkpIHtcclxuICAgICAgICB0aGlzLmxvYWRlciA9IGxvYWRlcjtcclxuICAgICAgICB0aGlzLmZhY3RvcnkgPSBmYWN0b3J5O1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRpYWxpemUoZW50aXRpZXM6IEVudGl0eVBvb2wpOiBTeXN0ZW0ge1xyXG4gICAgICAgIG5ldyBQaGFzZXJCaXRtYXBGb250TG9hZCh0aGlzLmxvYWRlcikubG9hZChcclxuICAgICAgICAgICAgbmV3IEJpdG1hcEZvbnRTZWFyY2goKS5maW5kKGVudGl0aWVzKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KGVudGl0aWVzOiBFbnRpdHlQb29sKTogU3lzdGVtIHtcclxuICAgICAgICBjb25zdCBmYWN0b3J5ID0gbmV3IFBoYXNlckJpdG1hcFRleHRGYWN0b3J5KHRoaXMuZmFjdG9yeSk7XHJcbiAgICAgICAgbmV3IEJpdG1hcFRleHRTZWFyY2goKS5maW5kKGVudGl0aWVzKVxyXG4gICAgICAgICAgICAuZm9yRWFjaCh0ZXh0ID0+IHtcclxuICAgICAgICAgICAgICAgIGZhY3RvcnkuY3JlYXRlKHRleHQpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvY2VzcyhlbnRpdGllczogRW50aXR5UG9vbCk6IFN5c3RlbSB7XHJcbiAgICAgICAgLy8gbm90aGluZyB0byBkb1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IEJpdG1hcFRleHQgZnJvbSAnLi9CaXRtYXBUZXh0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJpdG1hcFRleHRGYWN0b3J5IHtcclxuICAgIHByaXZhdGUgZmFjdG9yeTogUGhhc2VyLkdhbWVPYmplY3RGYWN0b3J5O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGZhY3Rvcnk6IFBoYXNlci5HYW1lT2JqZWN0RmFjdG9yeSkge1xyXG4gICAgICAgIHRoaXMuZmFjdG9yeSA9IGZhY3Rvcnk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlKHRleHQ6IEJpdG1hcFRleHQpOiBCaXRtYXBUZXh0RmFjdG9yeSB7XHJcbiAgICAgICAgdGhpcy5mYWN0b3J5LmJpdG1hcFRleHQoXHJcbiAgICAgICAgICAgIE1hdGguZmxvb3IodGV4dC5wb3NpdGlvbigpLngoKSksXHJcbiAgICAgICAgICAgIE1hdGguZmxvb3IodGV4dC5wb3NpdGlvbigpLnkoKSksXHJcbiAgICAgICAgICAgIHRleHQuZm9udCgpLmlkKCksXHJcbiAgICAgICAgICAgIHRleHQudmFsdWUoKSxcclxuICAgICAgICAgICAgdGV4dC5zaXplKClcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufSIsImltcG9ydCBCaXRtYXBGb250IGZyb20gJy4vQml0bWFwRm9udCc7XHJcbmltcG9ydCBCaXRtYXBGb250U2VhcmNoIGZyb20gJy4vQml0bWFwRm9udFNlYXJjaCc7XHJcbmltcG9ydCBCaXRtYXBUZXh0IGZyb20gJy4vQml0bWFwVGV4dCc7XHJcbmltcG9ydCBCaXRtYXBUZXh0U2VhcmNoIGZyb20gJy4vQml0bWFwVGV4dFNlYXJjaCc7XHJcbmltcG9ydCBQaGFzZXJCaXRtYXBGb250TG9hZCBmcm9tICcuL1BoYXNlckJpdG1hcEZvbnRMb2FkJztcclxuaW1wb3J0IFBoYXNlckJpdG1hcFRleHQgZnJvbSAnLi9QaGFzZXJCaXRtYXBUZXh0JztcclxuaW1wb3J0IFBoYXNlckJpdG1hcFRleHRGYWN0b3J5IGZyb20gJy4vUGhhc2VyQml0bWFwVGV4dEZhY3RvcnknO1xyXG5cclxuZXhwb3J0IHtcclxuICAgIEJpdG1hcEZvbnQsXHJcbiAgICBCaXRtYXBGb250U2VhcmNoLFxyXG4gICAgQml0bWFwVGV4dCxcclxuICAgIEJpdG1hcFRleHRTZWFyY2gsXHJcbiAgICBQaGFzZXJCaXRtYXBGb250TG9hZCxcclxuICAgIFBoYXNlckJpdG1hcFRleHQsXHJcbiAgICBQaGFzZXJCaXRtYXBUZXh0RmFjdG9yeVxyXG59OyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL2luZGV4LmQudHNcIi8+XHJcblxyXG5pbXBvcnQgRWNzUG9uZyBmcm9tICcuL0Vjc1BvbmcnO1xyXG5cclxubmV3IEVjc1BvbmcoKS5zdGFydCgpOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvc2l0aW9uIHtcclxuICAgIHByaXZhdGUgY29vcmRpbmF0ZXM6IG51bWJlcltdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5jb29yZGluYXRlcyA9IFt4LCB5XTtcclxuICAgIH1cclxuXHJcbiAgICB4KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29vcmRpbmF0ZXNbMF07XHJcbiAgICB9XHJcblxyXG4gICAgeSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvb3JkaW5hdGVzWzFdO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFBvc2l0aW9uIGZyb20gJy4vUG9zaXRpb24nO1xyXG5cclxuZXhwb3J0IHtcclxuICAgIFBvc2l0aW9uXHJcbn07IiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IENvbXBvbmVudElkIH0gZnJvbSAnLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IEJhc2VDb21wb25lbnRJZCB9IGZyb20gJy4uL2Jhc2UvaW5kZXgnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcmUgaW1wbGVtZW50cyBDb21wb25lbnQge1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBJRCA9IG5ldyBCYXNlQ29tcG9uZW50SWQoJ3Njb3JlJyk7XHJcblxyXG4gICAgcHJpdmF0ZSBzY29yZTogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGlkKCk6IENvbXBvbmVudElkIHtcclxuICAgICAgICByZXR1cm4gU2NvcmUuSUQ7XHJcbiAgICB9XHJcblxyXG4gICAgdmFsdWUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zY29yZTtcclxuICAgIH1cclxuXHJcbiAgICBpbmNyZW1lbnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zY29yZSArPSAxO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7IFByZWZhYiB9IGZyb20gJy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQml0bWFwVGV4dCB9IGZyb20gJy4uL2JpdG1hcFRleHQvaW5kZXgnO1xyXG5pbXBvcnQgeyBCaXRtYXBGb250IH0gZnJvbSAnLi4vYml0bWFwVGV4dC9pbmRleCc7XHJcbmltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSAnLi4vcG9zaXRpb24vaW5kZXgnO1xyXG5pbXBvcnQgU2NvcmUgZnJvbSAnLi9TY29yZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY29yZVByZWZhYiBpbXBsZW1lbnRzIFByZWZhYiB7XHJcbiAgICBwcml2YXRlIHBvc2l0aW9uOiBQb3NpdGlvbjtcclxuICAgIHByaXZhdGUgZm9udDogQml0bWFwRm9udDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbjogUG9zaXRpb24sIGZvbnQ6IEJpdG1hcEZvbnQpIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICAgICAgdGhpcy5mb250ID0gZm9udDtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGUoKTogQ29tcG9uZW50W10ge1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIG5ldyBTY29yZSgpLFxyXG4gICAgICAgICAgICBuZXcgQml0bWFwVGV4dChcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24sXHJcbiAgICAgICAgICAgICAgICB0aGlzLmZvbnQsXHJcbiAgICAgICAgICAgICAgICAzMixcclxuICAgICAgICAgICAgICAgICcwJ1xyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxufSIsImltcG9ydCBTY29yZSBmcm9tICcuL1Njb3JlJztcclxuaW1wb3J0IFNjb3JlUHJlZmFiIGZyb20gJy4vU2NvcmVQcmVmYWInO1xyXG5cclxuZXhwb3J0IHtcclxuICAgIFNjb3JlLFxyXG4gICAgU2NvcmVQcmVmYWJcclxufTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBEdXBsaWNhdGVFcnJvciBleHRlbmRzIEVycm9yIHtcclxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XHJcbiAgICAgICAgc3VwZXIoLi4uYXJncyk7XHJcbiAgICAgICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgRHVwbGljYXRlRXJyb3IpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm90Rm91bmRFcnJvciBleHRlbmRzIEVycm9yIHtcclxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XHJcbiAgICAgICAgc3VwZXIoLi4uYXJncyk7XHJcbiAgICAgICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgTm90Rm91bmRFcnJvcik7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgRHVwbGljYXRlRXJyb3IgZnJvbSAnLi9EdXBsaWNhdGVFcnJvcic7XHJcbmltcG9ydCBOb3RGb3VuZEVycm9yIGZyb20gJy4vTm90Rm91bmRFcnJvcic7XHJcblxyXG5leHBvcnQge1xyXG4gICAgRHVwbGljYXRlRXJyb3IsXHJcbiAgICBOb3RGb3VuZEVycm9yXHJcbn07IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3R5cGluZ3MvaW5kZXguZC50c1wiLz5cclxuXHJcbi8vIGltcG9ydCBQb25nR2FtZSBmcm9tICcuL1BvbmdHYW1lJztcclxuXHJcbi8vIG5ldyBQb25nR2FtZSgpLnN0YXJ0KCk7XHJcbmltcG9ydCAnLi9lY3MvbWFpbic7Il19
