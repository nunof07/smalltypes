(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}],2:[function(require,module,exports){
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
},{"./BootState":1,"./GameState":3}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./base/index");
const index_2 = require("./base/index");
const index_3 = require("./base/index");
const index_4 = require("./score/index");
const index_5 = require("./position/index");
const index_6 = require("./bitmapText/index");
const index_7 = require("./bitmapText/index");
const index_8 = require("./base/index");
const index_9 = require("./base/index");
const index_10 = require("./base/index");
class GameState extends Phaser.State {
    init() {
        const font = new index_6.BitmapFont('Press Start 2P', 'fonts/Press_Start_2P_0.png', 'fonts/Press_Start_2P.fnt');
        const entities = new index_2.BaseEntityPool()
            .createMany([
            new index_4.ScorePrefab(new index_5.Position(128, 128), font),
            new index_4.ScorePrefab(new index_5.Position(this.game.world.width - 128, 128), font)
        ]);
        const systems = new index_3.BaseSystemCollection([
            new index_7.PhaserBitmapTextSystem(entities, this.game.load, this.game.add)
        ]);
        this.ecs = new index_1.BaseWorld(entities, systems);
    }
    preload() {
        new index_10.PhaseExecute(this.ecs.systems(), index_8.Load.ID)
            .execute();
    }
    create() {
        new index_10.PhaseExecute(this.ecs.systems(), index_9.Start.ID)
            .execute();
    }
}
exports.default = GameState;
},{"./base/index":22,"./bitmapText/index":32,"./position/index":35,"./score/index":38}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseId_1 = require("./BaseId");
class BaseComponentId extends BaseId_1.default {
}
exports.default = BaseComponentId;
},{"./BaseId":8}],5:[function(require,module,exports){
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
},{"./ComponentDuplicateError":14,"./ComponentNotFoundError":15}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseId_1 = require("./BaseId");
class BaseEntityId extends BaseId_1.default {
}
exports.default = BaseEntityId;
},{"./BaseId":8}],7:[function(require,module,exports){
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
},{"./BaseEntity":5,"./BaseEntityId":6}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseId {
    constructor(id) {
        this.id = (id instanceof Object) ?
            id.print() :
            id + '';
    }
    print() {
        return this.id;
    }
}
exports.default = BaseId;
},{}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseId_1 = require("./BaseId");
class BasePhaseId extends BaseId_1.default {
}
exports.default = BasePhaseId;
},{"./BaseId":8}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BasePhasePool {
    constructor(phases) {
        this.phases = (phases instanceof Map) ? phases :
            new Map(phases.map(phase => [phase.id(), phase]));
    }
    has(id) {
        return this.phases.has(id);
    }
    get(id) {
        return this.phases.get(id);
    }
}
exports.default = BasePhasePool;
},{}],11:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../base/index");
class BaseSystem {
    constructor(phases) {
        this.phasePool = (phases instanceof Array || phases instanceof Map) ?
            new index_1.BasePhasePool(phases) :
            phases;
    }
    phases() {
        return this.phasePool;
    }
}
exports.default = BaseSystem;
},{"../base/index":22}],12:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseSystemCollection {
    constructor(systems) {
        this.systems = systems || [];
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
    filter(id) {
        return this.systems.filter(system => system.phases().has(id));
    }
}
exports.default = BaseSystemCollection;
},{}],13:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseWorld {
    constructor(entities, systems) {
        this.entityPool = entities;
        this.systemCollection = systems;
    }
    entities() {
        return this.entityPool;
    }
    systems() {
        return this.systemCollection;
    }
}
exports.default = BaseWorld;
},{}],14:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../system/index");
class ComponentDuplicateError extends index_1.DuplicateError {
    constructor(...args) {
        super(...args);
    }
}
exports.default = ComponentDuplicateError;
},{"../system/index":41}],15:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../system/index");
class ComponentNotFoundError extends index_1.NotFoundError {
    constructor(...args) {
        super(...args);
    }
}
exports.default = ComponentNotFoundError;
},{"../system/index":41}],16:[function(require,module,exports){
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
},{"./EntitySearch":17}],17:[function(require,module,exports){
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
},{}],18:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BasePhaseId_1 = require("./BasePhaseId");
class Load {
    id() {
        return Load.ID;
    }
}
Load.ID = new BasePhaseId_1.default(Load.name);
exports.default = Load;
},{"./BasePhaseId":9}],19:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PhaseSearch_1 = require("./PhaseSearch");
class PhaseExecute {
    constructor(systems, search) {
        this.systems = systems;
        this.search = (search instanceof PhaseSearch_1.default) ? search : new PhaseSearch_1.default(search);
    }
    execute() {
        this.search.find(this.systems)
            .forEach(phase => phase.execute());
    }
}
exports.default = PhaseExecute;
},{"./PhaseSearch":20}],20:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PhaseSearch {
    constructor(id) {
        this.id = id;
    }
    find(systems) {
        return systems.filter(this.id)
            .map(system => system.phases().get(this.id));
    }
}
exports.default = PhaseSearch;
},{}],21:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BasePhaseId_1 = require("./BasePhaseId");
class Start {
    id() {
        return Start.ID;
    }
}
Start.ID = new BasePhaseId_1.default(Start.name);
exports.default = Start;
},{"./BasePhaseId":9}],22:[function(require,module,exports){
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
const BaseId_1 = require("./BaseId");
exports.BaseId = BaseId_1.default;
const BasePhaseId_1 = require("./BasePhaseId");
exports.BasePhaseId = BasePhaseId_1.default;
const BasePhasePool_1 = require("./BasePhasePool");
exports.BasePhasePool = BasePhasePool_1.default;
const BaseSystem_1 = require("./BaseSystem");
exports.BaseSystem = BaseSystem_1.default;
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
const Load_1 = require("./Load");
exports.Load = Load_1.default;
const PhaseExecute_1 = require("./PhaseExecute");
exports.PhaseExecute = PhaseExecute_1.default;
const PhaseSearch_1 = require("./PhaseSearch");
exports.PhaseSearch = PhaseSearch_1.default;
const Start_1 = require("./Start");
exports.Start = Start_1.default;
},{"./BaseComponentId":4,"./BaseEntity":5,"./BaseEntityId":6,"./BaseEntityPool":7,"./BaseId":8,"./BasePhaseId":9,"./BasePhasePool":10,"./BaseSystem":11,"./BaseSystemCollection":12,"./BaseWorld":13,"./ComponentDuplicateError":14,"./ComponentNotFoundError":15,"./ComponentSearch":16,"./EntitySearch":17,"./Load":18,"./PhaseExecute":19,"./PhaseSearch":20,"./Start":21}],23:[function(require,module,exports){
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
},{}],24:[function(require,module,exports){
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
},{"./BitmapTextSearch":26}],25:[function(require,module,exports){
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
BitmapText.ID = new index_1.BaseComponentId(BitmapText.name);
exports.default = BitmapText;
},{"../base/index":22}],26:[function(require,module,exports){
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
},{"../base/index":22,"./BitmapText":25}],27:[function(require,module,exports){
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
},{}],28:[function(require,module,exports){
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
},{}],29:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../base/index");
const PhaserBitmapFontLoad_1 = require("./PhaserBitmapFontLoad");
const BitmapFontSearch_1 = require("./BitmapFontSearch");
class PhaserBitmapTextLoad extends index_1.Load {
    constructor(entities, loader) {
        super();
        this.entities = entities;
        this.loader = loader;
    }
    execute() {
        new PhaserBitmapFontLoad_1.default(this.loader).load(new BitmapFontSearch_1.default().find(this.entities));
    }
}
exports.default = PhaserBitmapTextLoad;
},{"../base/index":22,"./BitmapFontSearch":24,"./PhaserBitmapFontLoad":27}],30:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../base/index");
const BitmapTextSearch_1 = require("./BitmapTextSearch");
const PhaserBitmapTextFactory_1 = require("./PhaserBitmapTextFactory");
class PhaserBitmapTextStart extends index_1.Start {
    constructor(entities, factory) {
        super();
        this.entities = entities;
        this.factory = factory;
    }
    execute() {
        const factory = new PhaserBitmapTextFactory_1.default(this.factory);
        new BitmapTextSearch_1.default().find(this.entities)
            .forEach(text => {
            factory.create(text);
        });
    }
}
exports.default = PhaserBitmapTextStart;
},{"../base/index":22,"./BitmapTextSearch":26,"./PhaserBitmapTextFactory":28}],31:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../base/index");
const PhaserBitmapTextLoad_1 = require("./PhaserBitmapTextLoad");
const PhaserBitmapTextStart_1 = require("./PhaserBitmapTextStart");
/**
 * Loads and creates bitmap text using Phaser.
 */
class PhaserBitmapTextSystem extends index_1.BaseSystem {
    constructor(entities, loader, factory) {
        super([
            new PhaserBitmapTextLoad_1.default(entities, loader),
            new PhaserBitmapTextStart_1.default(entities, factory)
        ]);
    }
}
exports.default = PhaserBitmapTextSystem;
},{"../base/index":22,"./PhaserBitmapTextLoad":29,"./PhaserBitmapTextStart":30}],32:[function(require,module,exports){
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
const PhaserBitmapTextFactory_1 = require("./PhaserBitmapTextFactory");
exports.PhaserBitmapTextFactory = PhaserBitmapTextFactory_1.default;
const PhaserBitmapTextLoad_1 = require("./PhaserBitmapTextLoad");
exports.PhaserBitmapTextLoad = PhaserBitmapTextLoad_1.default;
const PhaserBitmapTextStart_1 = require("./PhaserBitmapTextStart");
exports.PhaserBitmapTextStart = PhaserBitmapTextStart_1.default;
const PhaserBitmapTextSystem_1 = require("./PhaserBitmapTextSystem");
exports.PhaserBitmapTextSystem = PhaserBitmapTextSystem_1.default;
},{"./BitmapFont":23,"./BitmapFontSearch":24,"./BitmapText":25,"./BitmapTextSearch":26,"./PhaserBitmapFontLoad":27,"./PhaserBitmapTextFactory":28,"./PhaserBitmapTextLoad":29,"./PhaserBitmapTextStart":30,"./PhaserBitmapTextSystem":31}],33:[function(require,module,exports){
"use strict";
/// <reference path="../../typings/index.d.ts"/>
Object.defineProperty(exports, "__esModule", { value: true });
const EcsPong_1 = require("./EcsPong");
new EcsPong_1.default().start();
},{"./EcsPong":2}],34:[function(require,module,exports){
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
},{}],35:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Position_1 = require("./Position");
exports.Position = Position_1.default;
},{"./Position":34}],36:[function(require,module,exports){
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
Score.ID = new index_1.BaseComponentId(Score.name);
exports.default = Score;
},{"../base/index":22}],37:[function(require,module,exports){
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
},{"../bitmapText/index":32,"./Score":36}],38:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Score_1 = require("./Score");
exports.Score = Score_1.default;
const ScorePrefab_1 = require("./ScorePrefab");
exports.ScorePrefab = ScorePrefab_1.default;
},{"./Score":36,"./ScorePrefab":37}],39:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DuplicateError extends Error {
    constructor(...args) {
        super(...args);
        Error.captureStackTrace(this, DuplicateError);
    }
}
exports.default = DuplicateError;
},{}],40:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NotFoundError extends Error {
    constructor(...args) {
        super(...args);
        Error.captureStackTrace(this, NotFoundError);
    }
}
exports.default = NotFoundError;
},{}],41:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DuplicateError_1 = require("./DuplicateError");
exports.DuplicateError = DuplicateError_1.default;
const NotFoundError_1 = require("./NotFoundError");
exports.NotFoundError = NotFoundError_1.default;
},{"./DuplicateError":39,"./NotFoundError":40}]},{},[33])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZWNzL0Jvb3RTdGF0ZS50cyIsInNyYy9lY3MvRWNzUG9uZy50cyIsInNyYy9lY3MvR2FtZVN0YXRlLnRzIiwic3JjL2Vjcy9iYXNlL0Jhc2VDb21wb25lbnRJZC50cyIsInNyYy9lY3MvYmFzZS9CYXNlRW50aXR5LnRzIiwic3JjL2Vjcy9iYXNlL0Jhc2VFbnRpdHlJZC50cyIsInNyYy9lY3MvYmFzZS9CYXNlRW50aXR5UG9vbC50cyIsInNyYy9lY3MvYmFzZS9CYXNlSWQudHMiLCJzcmMvZWNzL2Jhc2UvQmFzZVBoYXNlSWQudHMiLCJzcmMvZWNzL2Jhc2UvQmFzZVBoYXNlUG9vbC50cyIsInNyYy9lY3MvYmFzZS9CYXNlU3lzdGVtLnRzIiwic3JjL2Vjcy9iYXNlL0Jhc2VTeXN0ZW1Db2xsZWN0aW9uLnRzIiwic3JjL2Vjcy9iYXNlL0Jhc2VXb3JsZC50cyIsInNyYy9lY3MvYmFzZS9Db21wb25lbnREdXBsaWNhdGVFcnJvci50cyIsInNyYy9lY3MvYmFzZS9Db21wb25lbnROb3RGb3VuZEVycm9yLnRzIiwic3JjL2Vjcy9iYXNlL0NvbXBvbmVudFNlYXJjaC50cyIsInNyYy9lY3MvYmFzZS9FbnRpdHlTZWFyY2gudHMiLCJzcmMvZWNzL2Jhc2UvTG9hZC50cyIsInNyYy9lY3MvYmFzZS9QaGFzZUV4ZWN1dGUudHMiLCJzcmMvZWNzL2Jhc2UvUGhhc2VTZWFyY2gudHMiLCJzcmMvZWNzL2Jhc2UvU3RhcnQudHMiLCJzcmMvZWNzL2Jhc2UvaW5kZXgudHMiLCJzcmMvZWNzL2JpdG1hcFRleHQvQml0bWFwRm9udC50cyIsInNyYy9lY3MvYml0bWFwVGV4dC9CaXRtYXBGb250U2VhcmNoLnRzIiwic3JjL2Vjcy9iaXRtYXBUZXh0L0JpdG1hcFRleHQudHMiLCJzcmMvZWNzL2JpdG1hcFRleHQvQml0bWFwVGV4dFNlYXJjaC50cyIsInNyYy9lY3MvYml0bWFwVGV4dC9QaGFzZXJCaXRtYXBGb250TG9hZC50cyIsInNyYy9lY3MvYml0bWFwVGV4dC9QaGFzZXJCaXRtYXBUZXh0RmFjdG9yeS50cyIsInNyYy9lY3MvYml0bWFwVGV4dC9QaGFzZXJCaXRtYXBUZXh0TG9hZC50cyIsInNyYy9lY3MvYml0bWFwVGV4dC9QaGFzZXJCaXRtYXBUZXh0U3RhcnQudHMiLCJzcmMvZWNzL2JpdG1hcFRleHQvUGhhc2VyQml0bWFwVGV4dFN5c3RlbS50cyIsInNyYy9lY3MvYml0bWFwVGV4dC9pbmRleC50cyIsInNyYy9lY3MvbWFpbi50cyIsInNyYy9lY3MvcG9zaXRpb24vUG9zaXRpb24udHMiLCJzcmMvZWNzL3Bvc2l0aW9uL2luZGV4LnRzIiwic3JjL2Vjcy9zY29yZS9TY29yZS50cyIsInNyYy9lY3Mvc2NvcmUvU2NvcmVQcmVmYWIudHMiLCJzcmMvZWNzL3Njb3JlL2luZGV4LnRzIiwic3JjL2Vjcy9zeXN0ZW0vRHVwbGljYXRlRXJyb3IudHMiLCJzcmMvZWNzL3N5c3RlbS9Ob3RGb3VuZEVycm9yLnRzIiwic3JjL2Vjcy9zeXN0ZW0vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLGVBQStCLFNBQVEsTUFBTSxDQUFDLEtBQUs7SUFDL0M7UUFDSSxLQUFLLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFTSxJQUFJO1FBQ1Asc0JBQXNCO1FBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDO1FBQ3BELElBQUksQ0FBQyxLQUFLLENBQUMsbUJBQW1CLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUM7UUFDOUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUM7UUFDeEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUM7UUFDdEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJ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LEVBQUU7WUFDWCxJQUFJLGtCQUFVLENBQ1YsSUFBSSxDQUFDLFFBQVEsRUFDYixJQUFJLENBQUMsSUFBSSxFQUNULEVBQUUsRUFDRixHQUFHLENBQ047U0FDSixDQUFDO0lBQ04sQ0FBQztDQUNKO0FBcEJELDhCQW9CQzs7OztBQzNCRCxtQ0FBNEI7QUFJeEIsZ0JBSkcsZUFBSyxDQUlIO0FBSFQsK0NBQXdDO0FBSXBDLHNCQUpHLHFCQUFXLENBSUg7Ozs7QUNMZixvQkFBb0MsU0FBUSxLQUFLO0lBQzdDLFlBQVksR0FBRyxJQUFXO1FBQ3RCLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ2YsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxjQUFjLENBQUMsQ0FBQztJQUNsRCxDQUFDO0NBQ0o7QUFMRCxpQ0FLQzs7OztBQ0xELG1CQUFtQyxTQUFRLEtBQUs7SUFDNUMsWUFBWSxHQUFHLElBQVc7UUFDdEIsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDZixLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Q0FDSjtBQUxELGdDQUtDOzs7O0FDTEQscURBQThDO0FBSTFDLHlCQUpHLHdCQUFjLENBSUg7QUFIbEIsbURBQTRDO0FBSXhDLHdCQUpHLHVCQUFhLENBSUgiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9vdFN0YXRlIGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluaXQoKSB7XHJcbiAgICAgICAgLy8gc2NhbGUgdG8gZml0IHNjcmVlblxyXG4gICAgICAgIHRoaXMuc2NhbGUuc2NhbGVNb2RlID0gUGhhc2VyLlNjYWxlTWFuYWdlci5TSE9XX0FMTDtcclxuICAgICAgICB0aGlzLnNjYWxlLmZ1bGxTY3JlZW5TY2FsZU1vZGUgPSBQaGFzZXIuU2NhbGVNYW5hZ2VyLlNIT1dfQUxMO1xyXG4gICAgICAgIHRoaXMuc2NhbGUucGFnZUFsaWduSG9yaXpvbnRhbGx5ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNjYWxlLnBhZ2VBbGlnblZlcnRpY2FsbHkgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2NhbGUuZm9yY2VMYW5kc2NhcGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5zY2FsZS53aW5kb3dDb25zdHJhaW50cy5ib3R0b20gPSAndmlzdWFsJzsgLy8gbWFrZSBzdXJlIGl0IGRvZXNuJ3QgZ28gb3ZlciBzY3JlZW4gaGVpZ2h0XHJcbiAgICAgICAgdGhpcy5nYW1lLnNjYWxlLnJlZnJlc2goKTtcclxuXHJcbiAgICAgICAgLy8ga2VlcCBwaXhlbHMgc2hhcnBcclxuICAgICAgICB0aGlzLmdhbWUuYW50aWFsaWFzID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5nYW1lLnN0YWdlLnNtb290aGVkID0gZmFsc2U7XHJcbiAgICAgICAgUGhhc2VyLkNhbnZhcy5zZXRJbWFnZVJlbmRlcmluZ0NyaXNwKHRoaXMuZ2FtZS5jYW52YXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KCdnYW1lJyk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQm9vdFN0YXRlIGZyb20gJy4vQm9vdFN0YXRlJztcclxuaW1wb3J0IEdhbWVTdGF0ZSBmcm9tICcuL0dhbWVTdGF0ZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFY3NQb25nIHtcclxuICAgIHByaXZhdGUgX2dhbWU6IFBoYXNlci5HYW1lO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX2dhbWUgPSBuZXcgUGhhc2VyLkdhbWUoe1xyXG4gICAgICAgICAgICB3aWR0aDogMTAyNCxcclxuICAgICAgICAgICAgaGVpZ2h0OiA1NzYsXHJcbiAgICAgICAgICAgIHJlbmRlcmVyOiBQaGFzZXIuQVVUTyxcclxuICAgICAgICAgICAgcGFyZW50OiAnZ2FtZS1jb250YWluZXInXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuX2dhbWUuc3RhdGUuYWRkKCdib290JywgbmV3IEJvb3RTdGF0ZSgpKTtcclxuICAgICAgICB0aGlzLl9nYW1lLnN0YXRlLmFkZCgnZ2FtZScsIG5ldyBHYW1lU3RhdGUoKSk7XHJcbiAgICAgICAgdGhpcy5fZ2FtZS5zdGF0ZS5zdGFydCgnYm9vdCcpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQmFzZVdvcmxkIH0gZnJvbSAnLi9iYXNlL2luZGV4JztcclxuaW1wb3J0IHsgQmFzZUVudGl0eVBvb2wgfSBmcm9tICcuL2Jhc2UvaW5kZXgnO1xyXG5pbXBvcnQgeyBCYXNlU3lzdGVtQ29sbGVjdGlvbiB9IGZyb20gJy4vYmFzZS9pbmRleCc7XHJcbmltcG9ydCB7IFNjb3JlUHJlZmFiIH0gZnJvbSAnLi9zY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSAnLi9wb3NpdGlvbi9pbmRleCc7XHJcbmltcG9ydCB7IEJpdG1hcEZvbnQgfSBmcm9tICcuL2JpdG1hcFRleHQvaW5kZXgnO1xyXG5pbXBvcnQgeyBQaGFzZXJCaXRtYXBUZXh0U3lzdGVtIH0gZnJvbSAnLi9iaXRtYXBUZXh0L2luZGV4JztcclxuaW1wb3J0IHsgTG9hZCB9IGZyb20gJy4vYmFzZS9pbmRleCc7XHJcbmltcG9ydCB7IFN0YXJ0IH0gZnJvbSAnLi9iYXNlL2luZGV4JztcclxuaW1wb3J0IHsgUGhhc2VFeGVjdXRlIH0gZnJvbSAnLi9iYXNlL2luZGV4JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVTdGF0ZSBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XHJcbiAgICBwcml2YXRlIGVjczogQmFzZVdvcmxkO1xyXG5cclxuICAgIGluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgZm9udCA9IG5ldyBCaXRtYXBGb250KCdQcmVzcyBTdGFydCAyUCcsICdmb250cy9QcmVzc19TdGFydF8yUF8wLnBuZycsICdmb250cy9QcmVzc19TdGFydF8yUC5mbnQnKTtcclxuICAgICAgICBjb25zdCBlbnRpdGllcyA9IG5ldyBCYXNlRW50aXR5UG9vbCgpXHJcbiAgICAgICAgICAgIC5jcmVhdGVNYW55KFtcclxuICAgICAgICAgICAgICAgIG5ldyBTY29yZVByZWZhYihuZXcgUG9zaXRpb24oMTI4LCAxMjgpLCBmb250KSxcclxuICAgICAgICAgICAgICAgIG5ldyBTY29yZVByZWZhYihuZXcgUG9zaXRpb24odGhpcy5nYW1lLndvcmxkLndpZHRoIC0gMTI4LCAxMjgpLCBmb250KVxyXG4gICAgICAgICAgICBdKTtcclxuICAgICAgICBjb25zdCBzeXN0ZW1zID0gbmV3IEJhc2VTeXN0ZW1Db2xsZWN0aW9uKFtcclxuICAgICAgICAgICAgbmV3IFBoYXNlckJpdG1hcFRleHRTeXN0ZW0oZW50aXRpZXMsIHRoaXMuZ2FtZS5sb2FkLCB0aGlzLmdhbWUuYWRkKVxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIHRoaXMuZWNzID0gbmV3IEJhc2VXb3JsZChlbnRpdGllcywgc3lzdGVtcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJlbG9hZCgpOiB2b2lkIHtcclxuICAgICAgICBuZXcgUGhhc2VFeGVjdXRlKHRoaXMuZWNzLnN5c3RlbXMoKSwgTG9hZC5JRClcclxuICAgICAgICAgICAgLmV4ZWN1dGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgbmV3IFBoYXNlRXhlY3V0ZSh0aGlzLmVjcy5zeXN0ZW1zKCksIFN0YXJ0LklEKVxyXG4gICAgICAgICAgICAuZXhlY3V0ZSgpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQ29tcG9uZW50SWQgfSBmcm9tICcuLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IEJhc2VJZCBmcm9tICcuL0Jhc2VJZCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlQ29tcG9uZW50SWQgZXh0ZW5kcyBCYXNlSWQgaW1wbGVtZW50cyBDb21wb25lbnRJZCB7XHJcbn0iLCJpbXBvcnQgeyBFbnRpdHkgfSBmcm9tICcuLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgRW50aXR5SWQgfSBmcm9tICcuLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IENvbXBvbmVudElkIH0gZnJvbSAnLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCBDb21wb25lbnROb3RGb3VuZEVycm9yIGZyb20gJy4vQ29tcG9uZW50Tm90Rm91bmRFcnJvcic7XHJcbmltcG9ydCBDb21wb25lbnREdXBsaWNhdGVFcnJvciBmcm9tICcuL0NvbXBvbmVudER1cGxpY2F0ZUVycm9yJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VFbnRpdHkgaW1wbGVtZW50cyBFbnRpdHkge1xyXG4gICAgcHJpdmF0ZSBlbnRpdHlJZDogRW50aXR5SWQ7XHJcbiAgICBwcml2YXRlIGNvbXBvbmVudHM6IE1hcDxDb21wb25lbnRJZCwgQ29tcG9uZW50PjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAoXHJcbiAgICAgICAgaWQ6IEVudGl0eUlkLFxyXG4gICAgICAgIGNvbXBvbmVudHM6IE1hcDxDb21wb25lbnRJZCwgQ29tcG9uZW50PiA9IG5ldyBNYXAoKVxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0gY29tcG9uZW50cztcclxuICAgICAgICB0aGlzLmVudGl0eUlkID0gaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWQoKTogRW50aXR5SWQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVudGl0eUlkO1xyXG4gICAgfVxyXG5cclxuICAgIGF0dGFjaChjb21wb25lbnQ6IENvbXBvbmVudCk6IEVudGl0eSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50cy5oYXMoY29tcG9uZW50LmlkKCkpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBDb21wb25lbnREdXBsaWNhdGVFcnJvcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMuc2V0KGNvbXBvbmVudC5pZCgpLCBjb21wb25lbnQpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBhdHRhY2hNYW55KGNvbXBvbmVudHM6IENvbXBvbmVudFtdKTogRW50aXR5IHtcclxuICAgICAgICBjb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hdHRhY2goY29tcG9uZW50KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgaGFzKGNvbXBvbmVudHM6IENvbXBvbmVudElkW10pOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gY29tcG9uZW50cy5ldmVyeShpZCA9PiB0aGlzLmNvbXBvbmVudHMuaGFzKGlkKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0PFQgZXh0ZW5kcyBDb21wb25lbnQ+KGNvbXBvbmVudDogQ29tcG9uZW50SWQpOiBUIHtcclxuICAgICAgICBpZiAoIXRoaXMuY29tcG9uZW50cy5oYXMoY29tcG9uZW50KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgQ29tcG9uZW50Tm90Rm91bmRFcnJvcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50cy5nZXQoY29tcG9uZW50KSBhcyBUO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7IEVudGl0eUlkIH0gZnJvbSAnLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCBCYXNlSWQgZnJvbSAnLi9CYXNlSWQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZUVudGl0eUlkIGV4dGVuZHMgQmFzZUlkIGltcGxlbWVudHMgRW50aXR5SWQge1xyXG59IiwiaW1wb3J0IHsgRW50aXR5IH0gZnJvbSAnLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IEVudGl0eUlkIH0gZnJvbSAnLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IEVudGl0eVBvb2wgfSBmcm9tICcuLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgUHJlZmFiIH0gZnJvbSAnLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRJZCB9IGZyb20gJy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgQmFzZUVudGl0eSBmcm9tICcuL0Jhc2VFbnRpdHknO1xyXG5pbXBvcnQgQmFzZUVudGl0eUlkIGZyb20gJy4vQmFzZUVudGl0eUlkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VFbnRpdHlQb29sIGltcGxlbWVudHMgRW50aXR5UG9vbCB7XHJcbiAgICBwcml2YXRlIHBvb2w6IEVudGl0eVtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMucG9vbCA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0TmV3SWQoKTogRW50aXR5SWQge1xyXG4gICAgICAgIHJldHVybiBuZXcgQmFzZUVudGl0eUlkKHRoaXMucG9vbC5sZW5ndGggKyAnJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlKGNvbXBvbmVudHM/OiBDb21wb25lbnRbXSk6IEVudGl0eSB7XHJcbiAgICAgICAgY29uc3QgZW50aXR5ID0gbmV3IEJhc2VFbnRpdHkoXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0TmV3SWQoKSxcclxuICAgICAgICAgICAgbmV3IE1hcChcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMubWFwKGNvbXBvbmVudCA9PiBbY29tcG9uZW50LmlkKCksIGNvbXBvbmVudF0gYXMgW0NvbXBvbmVudElkLCBDb21wb25lbnRdKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLnBvb2wucHVzaChlbnRpdHkpO1xyXG5cclxuICAgICAgICByZXR1cm4gZW50aXR5O1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZU1hbnkocHJlZmFiczogUHJlZmFiW10pOiBFbnRpdHlQb29sIHtcclxuICAgICAgICBwcmVmYWJzLmZvckVhY2gocHJlZmFiID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGUoXHJcbiAgICAgICAgICAgICAgICBwcmVmYWIuY3JlYXRlKClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZW50aXRpZXMoKTogRW50aXR5W10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvb2w7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHsgSWQgfSBmcm9tICcuLi9jb3JlL2luZGV4JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VJZCBpbXBsZW1lbnRzIElkIHtcclxuICAgIHByaXZhdGUgaWQ6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpZDogSWQgfCBzdHJpbmcgfCBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmlkID0gKGlkIGluc3RhbmNlb2YgT2JqZWN0KSA/XHJcbiAgICAgICAgICAgIChpZCBhcyBJZCkucHJpbnQoKSA6XHJcbiAgICAgICAgICAgIGlkICsgJyc7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpbnQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pZDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IENvbXBvbmVudElkIH0gZnJvbSAnLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCBCYXNlSWQgZnJvbSAnLi9CYXNlSWQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZVBoYXNlSWQgZXh0ZW5kcyBCYXNlSWQgaW1wbGVtZW50cyBDb21wb25lbnRJZCB7XHJcbn0iLCJpbXBvcnQgeyBQaGFzZVBvb2wgfSBmcm9tICcuLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgUGhhc2UgfSBmcm9tICcuLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgUGhhc2VJZCB9IGZyb20gJy4uL2NvcmUvaW5kZXgnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZVBoYXNlUG9vbCBpbXBsZW1lbnRzIFBoYXNlUG9vbCB7XHJcbiAgICBwcml2YXRlIHBoYXNlczogTWFwPFBoYXNlSWQsIFBoYXNlPjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwaGFzZXM6IFBoYXNlW10gfCBNYXA8UGhhc2VJZCwgUGhhc2U+KSB7XHJcbiAgICAgICAgdGhpcy5waGFzZXMgPSAocGhhc2VzIGluc3RhbmNlb2YgTWFwKSA/IHBoYXNlcyA6XHJcbiAgICAgICAgICAgIG5ldyBNYXAoXHJcbiAgICAgICAgICAgICAgICBwaGFzZXMubWFwKHBoYXNlID0+XHJcbiAgICAgICAgICAgICAgICAgICAgW3BoYXNlLmlkKCksIHBoYXNlXSBhcyBbUGhhc2VJZCwgUGhhc2VdXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFzKGlkOiBQaGFzZUlkKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGhhc2VzLmhhcyhpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0PFQgZXh0ZW5kcyBQaGFzZT4oaWQ6IFBoYXNlSWQpOiBUIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5waGFzZXMuZ2V0KGlkKSBhcyBUO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgUGhhc2VQb29sIH0gZnJvbSAnLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFN5c3RlbSB9IGZyb20gJy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBQaGFzZSB9IGZyb20gJy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBQaGFzZUlkIH0gZnJvbSAnLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IEJhc2VQaGFzZVBvb2wgfSBmcm9tICcuLi9iYXNlL2luZGV4JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VTeXN0ZW0gaW1wbGVtZW50cyBTeXN0ZW0ge1xyXG4gICAgcHJpdmF0ZSBwaGFzZVBvb2w6IFBoYXNlUG9vbDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwaGFzZXM6IFBoYXNlUG9vbCB8IFBoYXNlW10gfCBNYXA8UGhhc2VJZCwgUGhhc2U+KSB7XHJcbiAgICAgICAgdGhpcy5waGFzZVBvb2wgPSAocGhhc2VzIGluc3RhbmNlb2YgQXJyYXkgfHwgcGhhc2VzIGluc3RhbmNlb2YgTWFwKSA/XHJcbiAgICAgICAgICAgIG5ldyBCYXNlUGhhc2VQb29sKHBoYXNlcykgOlxyXG4gICAgICAgICAgICBwaGFzZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcGhhc2VzKCk6IFBoYXNlUG9vbCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGhhc2VQb29sO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRW50aXR5IH0gZnJvbSAnLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IEVudGl0eVBvb2wgfSBmcm9tICcuLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgU3lzdGVtIH0gZnJvbSAnLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFN5c3RlbUNvbGxlY3Rpb24gfSBmcm9tICcuLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgUGhhc2VJZCB9IGZyb20gJy4uL2NvcmUvaW5kZXgnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZVN5c3RlbUNvbGxlY3Rpb24gaW1wbGVtZW50cyBTeXN0ZW1Db2xsZWN0aW9uIHtcclxuICAgIHByaXZhdGUgc3lzdGVtczogU3lzdGVtW107XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc3lzdGVtcz86IFN5c3RlbVtdKSB7XHJcbiAgICAgICAgdGhpcy5zeXN0ZW1zID0gc3lzdGVtcyB8fCBbXTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlcihzeXN0ZW06IFN5c3RlbSk6IFN5c3RlbUNvbGxlY3Rpb24ge1xyXG4gICAgICAgIHRoaXMuc3lzdGVtcy5wdXNoKHN5c3RlbSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyTWFueShzeXN0ZW1zOiBTeXN0ZW1bXSk6IFN5c3RlbUNvbGxlY3Rpb24ge1xyXG4gICAgICAgIHN5c3RlbXMuZm9yRWFjaChzeXN0ZW0gPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyKHN5c3RlbSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbHRlcihpZDogUGhhc2VJZCk6IFN5c3RlbVtdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zeXN0ZW1zLmZpbHRlcihzeXN0ZW0gPT5cclxuICAgICAgICAgICAgc3lzdGVtLnBoYXNlcygpLmhhcyhpZClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRW50aXR5UG9vbCB9IGZyb20gJy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBTeXN0ZW1Db2xsZWN0aW9uIH0gZnJvbSAnLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFdvcmxkIH0gZnJvbSAnLi4vY29yZS9pbmRleCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlV29ybGQgaW1wbGVtZW50cyBXb3JsZCB7XHJcbiAgICBwcml2YXRlIGVudGl0eVBvb2w6IEVudGl0eVBvb2w7XHJcbiAgICBwcml2YXRlIHN5c3RlbUNvbGxlY3Rpb246IFN5c3RlbUNvbGxlY3Rpb247XHJcblxyXG4gICAgY29uc3RydWN0b3IoZW50aXRpZXM6IEVudGl0eVBvb2wsIHN5c3RlbXM6IFN5c3RlbUNvbGxlY3Rpb24pIHtcclxuICAgICAgICB0aGlzLmVudGl0eVBvb2wgPSBlbnRpdGllcztcclxuICAgICAgICB0aGlzLnN5c3RlbUNvbGxlY3Rpb24gPSBzeXN0ZW1zO1xyXG4gICAgfVxyXG5cclxuICAgIGVudGl0aWVzKCk6IEVudGl0eVBvb2wge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVudGl0eVBvb2w7XHJcbiAgICB9XHJcblxyXG4gICAgc3lzdGVtcygpOiBTeXN0ZW1Db2xsZWN0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zeXN0ZW1Db2xsZWN0aW9uO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRHVwbGljYXRlRXJyb3IgfSBmcm9tICcuLi9zeXN0ZW0vaW5kZXgnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50RHVwbGljYXRlRXJyb3IgZXh0ZW5kcyBEdXBsaWNhdGVFcnJvciB7XHJcbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkge1xyXG4gICAgICAgIHN1cGVyKC4uLmFyZ3MpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgTm90Rm91bmRFcnJvciB9IGZyb20gJy4uL3N5c3RlbS9pbmRleCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnROb3RGb3VuZEVycm9yIGV4dGVuZHMgTm90Rm91bmRFcnJvciB7XHJcbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkge1xyXG4gICAgICAgIHN1cGVyKC4uLmFyZ3MpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgU2VhcmNoIH0gZnJvbSAnLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRJZCB9IGZyb20gJy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBFbnRpdHlQb29sIH0gZnJvbSAnLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IEVudGl0eSB9IGZyb20gJy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgRW50aXR5U2VhcmNoIGZyb20gJy4vRW50aXR5U2VhcmNoJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudFNlYXJjaDxUIGV4dGVuZHMgQ29tcG9uZW50PiBpbXBsZW1lbnRzIFNlYXJjaDxUPiB7XHJcbiAgICBwcml2YXRlIGlkOiBDb21wb25lbnRJZDtcclxuICAgIHByaXZhdGUgZW50aXR5U2VhcmNoOiBFbnRpdHlTZWFyY2g7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgaWQ6IENvbXBvbmVudElkLFxyXG4gICAgICAgIGVudGl0eVNlYXJjaDogRW50aXR5U2VhcmNoID0gbmV3IEVudGl0eVNlYXJjaChpZClcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLmVudGl0eVNlYXJjaCA9IGVudGl0eVNlYXJjaDtcclxuICAgIH1cclxuXHJcbiAgICBmaW5kKHBvb2w6IEVudGl0eVBvb2wpOiBUW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVudGl0eVNlYXJjaC5maW5kKHBvb2wpXHJcbiAgICAgICAgICAgIC5tYXAoZW50aXR5ID0+IGVudGl0eS5nZXQ8VD4odGhpcy5pZCkpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRW50aXR5IH0gZnJvbSAnLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IEVudGl0eVBvb2wgfSBmcm9tICcuLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IENvbXBvbmVudElkIH0gZnJvbSAnLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFNlYXJjaCB9IGZyb20gJy4uL2NvcmUvaW5kZXgnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW50aXR5U2VhcmNoIGltcGxlbWVudHMgU2VhcmNoPEVudGl0eT4ge1xyXG4gICAgcHJpdmF0ZSBpZHM6IENvbXBvbmVudElkW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoaWRzOiBDb21wb25lbnRJZFtdIHwgQ29tcG9uZW50SWQpIHtcclxuICAgICAgICB0aGlzLmlkcyA9IChpZHMgJiYgaWRzLmNvbnN0cnVjdG9yID09PSBBcnJheSkgP1xyXG4gICAgICAgICAgICBpZHMgYXMgQ29tcG9uZW50SWRbXSA6XHJcbiAgICAgICAgICAgIFtpZHMgYXMgQ29tcG9uZW50SWRdO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbmQocG9vbDogRW50aXR5UG9vbCk6IEVudGl0eVtdIHtcclxuICAgICAgICByZXR1cm4gcG9vbC5lbnRpdGllcygpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoZW50aXR5ID0+IGVudGl0eS5oYXModGhpcy5pZHMpKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFBoYXNlIH0gZnJvbSAnLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFBoYXNlSWQgfSBmcm9tICcuLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IEJhc2VQaGFzZUlkIGZyb20gJy4vQmFzZVBoYXNlSWQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgTG9hZCBpbXBsZW1lbnRzIFBoYXNlIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgSUQgPSBuZXcgQmFzZVBoYXNlSWQoTG9hZC5uYW1lKTtcclxuXHJcbiAgICBpZCgpOiBQaGFzZUlkIHtcclxuICAgICAgICByZXR1cm4gTG9hZC5JRDtcclxuICAgIH1cclxuXHJcbiAgICBhYnN0cmFjdCBleGVjdXRlKCk6IHZvaWQ7XHJcbn0iLCJpbXBvcnQgeyBTeXN0ZW1Db2xsZWN0aW9uIH0gZnJvbSAnLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFBoYXNlSWQgfSBmcm9tICcuLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IFBoYXNlU2VhcmNoIGZyb20gJy4vUGhhc2VTZWFyY2gnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGhhc2VFeGVjdXRlIHtcclxuICAgIHByaXZhdGUgc3lzdGVtczogU3lzdGVtQ29sbGVjdGlvbjtcclxuICAgIHByaXZhdGUgc2VhcmNoOiBQaGFzZVNlYXJjaDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzeXN0ZW1zOiBTeXN0ZW1Db2xsZWN0aW9uLCBzZWFyY2g6IFBoYXNlU2VhcmNoIHwgUGhhc2VJZCkge1xyXG4gICAgICAgIHRoaXMuc3lzdGVtcyA9IHN5c3RlbXM7XHJcbiAgICAgICAgdGhpcy5zZWFyY2ggPSAoc2VhcmNoIGluc3RhbmNlb2YgUGhhc2VTZWFyY2gpID8gc2VhcmNoIDogbmV3IFBoYXNlU2VhcmNoKHNlYXJjaCk7XHJcbiAgICB9XHJcblxyXG4gICAgZXhlY3V0ZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNlYXJjaC5maW5kKHRoaXMuc3lzdGVtcylcclxuICAgICAgICAgICAgLmZvckVhY2gocGhhc2UgPT4gcGhhc2UuZXhlY3V0ZSgpKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFN5c3RlbVNlYXJjaCB9IGZyb20gJy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBTeXN0ZW1Db2xsZWN0aW9uIH0gZnJvbSAnLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFBoYXNlIH0gZnJvbSAnLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFBoYXNlSWQgfSBmcm9tICcuLi9jb3JlL2luZGV4JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBoYXNlU2VhcmNoIGltcGxlbWVudHMgU3lzdGVtU2VhcmNoPFBoYXNlPiB7XHJcbiAgICBwcml2YXRlIGlkOiBQaGFzZUlkO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGlkOiBQaGFzZUlkKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbmQoc3lzdGVtczogU3lzdGVtQ29sbGVjdGlvbik6IFBoYXNlW10ge1xyXG4gICAgICAgIHJldHVybiBzeXN0ZW1zLmZpbHRlcih0aGlzLmlkKVxyXG4gICAgICAgICAgICAubWFwKHN5c3RlbSA9PiBzeXN0ZW0ucGhhc2VzKCkuZ2V0KHRoaXMuaWQpKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFBoYXNlIH0gZnJvbSAnLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFBoYXNlSWQgfSBmcm9tICcuLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IEJhc2VQaGFzZUlkIGZyb20gJy4vQmFzZVBoYXNlSWQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgU3RhcnQgaW1wbGVtZW50cyBQaGFzZSB7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IElEID0gbmV3IEJhc2VQaGFzZUlkKFN0YXJ0Lm5hbWUpO1xyXG5cclxuICAgIGlkKCk6IFBoYXNlSWQge1xyXG4gICAgICAgIHJldHVybiBTdGFydC5JRDtcclxuICAgIH1cclxuXHJcbiAgICBhYnN0cmFjdCBleGVjdXRlKCk6IHZvaWQ7XHJcbn0iLCJpbXBvcnQgQmFzZUNvbXBvbmVudElkIGZyb20gJy4vQmFzZUNvbXBvbmVudElkJztcclxuaW1wb3J0IEJhc2VFbnRpdHkgZnJvbSAnLi9CYXNlRW50aXR5JztcclxuaW1wb3J0IEJhc2VFbnRpdHlJZCBmcm9tICcuL0Jhc2VFbnRpdHlJZCc7XHJcbmltcG9ydCBCYXNlRW50aXR5UG9vbCBmcm9tICcuL0Jhc2VFbnRpdHlQb29sJztcclxuaW1wb3J0IEJhc2VJZCBmcm9tICcuL0Jhc2VJZCc7XHJcbmltcG9ydCBCYXNlUGhhc2VJZCBmcm9tICcuL0Jhc2VQaGFzZUlkJztcclxuaW1wb3J0IEJhc2VQaGFzZVBvb2wgZnJvbSAnLi9CYXNlUGhhc2VQb29sJztcclxuaW1wb3J0IEJhc2VTeXN0ZW0gZnJvbSAnLi9CYXNlU3lzdGVtJztcclxuaW1wb3J0IEJhc2VTeXN0ZW1Db2xsZWN0aW9uIGZyb20gJy4vQmFzZVN5c3RlbUNvbGxlY3Rpb24nO1xyXG5pbXBvcnQgQmFzZVdvcmxkIGZyb20gJy4vQmFzZVdvcmxkJztcclxuaW1wb3J0IENvbXBvbmVudER1cGxpY2F0ZUVycm9yIGZyb20gJy4vQ29tcG9uZW50RHVwbGljYXRlRXJyb3InO1xyXG5pbXBvcnQgQ29tcG9uZW50Tm90Rm91bmRFcnJvciBmcm9tICcuL0NvbXBvbmVudE5vdEZvdW5kRXJyb3InO1xyXG5pbXBvcnQgQ29tcG9uZW50U2VhcmNoIGZyb20gJy4vQ29tcG9uZW50U2VhcmNoJztcclxuaW1wb3J0IEVudGl0eVNlYXJjaCBmcm9tICcuL0VudGl0eVNlYXJjaCc7XHJcbmltcG9ydCBMb2FkIGZyb20gJy4vTG9hZCc7XHJcbmltcG9ydCBQaGFzZUV4ZWN1dGUgZnJvbSAnLi9QaGFzZUV4ZWN1dGUnO1xyXG5pbXBvcnQgUGhhc2VTZWFyY2ggZnJvbSAnLi9QaGFzZVNlYXJjaCc7XHJcbmltcG9ydCBTdGFydCBmcm9tICcuL1N0YXJ0JztcclxuXHJcbmV4cG9ydCB7XHJcbiAgICBCYXNlQ29tcG9uZW50SWQsXHJcbiAgICBCYXNlRW50aXR5LFxyXG4gICAgQmFzZUVudGl0eUlkLFxyXG4gICAgQmFzZUVudGl0eVBvb2wsXHJcbiAgICBCYXNlSWQsXHJcbiAgICBCYXNlUGhhc2VJZCxcclxuICAgIEJhc2VQaGFzZVBvb2wsXHJcbiAgICBCYXNlU3lzdGVtLFxyXG4gICAgQmFzZVN5c3RlbUNvbGxlY3Rpb24sXHJcbiAgICBCYXNlV29ybGQsXHJcbiAgICBDb21wb25lbnREdXBsaWNhdGVFcnJvcixcclxuICAgIENvbXBvbmVudE5vdEZvdW5kRXJyb3IsXHJcbiAgICBDb21wb25lbnRTZWFyY2gsXHJcbiAgICBFbnRpdHlTZWFyY2gsXHJcbiAgICBMb2FkLFxyXG4gICAgUGhhc2VFeGVjdXRlLFxyXG4gICAgUGhhc2VTZWFyY2gsXHJcbiAgICBTdGFydFxyXG59OyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJpdG1hcEZvbnQge1xyXG4gICAgcHJpdmF0ZSBrZXk6IHN0cmluZztcclxuICAgIHByaXZhdGUgaW1hZ2VQYXRoOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIGF0bGFzUGF0aDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGtleTogc3RyaW5nLCBpbWFnZVBhdGg6IHN0cmluZywgYXRsYXNQYXRoOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmtleSA9IGtleTtcclxuICAgICAgICB0aGlzLmltYWdlUGF0aCA9IGltYWdlUGF0aDtcclxuICAgICAgICB0aGlzLmF0bGFzUGF0aCA9IGF0bGFzUGF0aDtcclxuICAgIH1cclxuXHJcbiAgICBpZCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmtleTtcclxuICAgIH1cclxuXHJcbiAgICBpbWFnZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmltYWdlUGF0aDtcclxuICAgIH1cclxuXHJcbiAgICBhdGxhcygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmF0bGFzUGF0aDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEVudGl0eVBvb2wgfSBmcm9tICcuLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgU2VhcmNoIH0gZnJvbSAnLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IENvbXBvbmVudFNlYXJjaCB9IGZyb20gJy4uL2Jhc2UvaW5kZXgnO1xyXG5pbXBvcnQgQml0bWFwRm9udCBmcm9tICcuL0JpdG1hcEZvbnQnO1xyXG5pbXBvcnQgQml0bWFwVGV4dCBmcm9tICcuL0JpdG1hcFRleHQnO1xyXG5pbXBvcnQgQml0bWFwVGV4dFNlYXJjaCBmcm9tICcuL0JpdG1hcFRleHRTZWFyY2gnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQml0bWFwRm9udFNlYXJjaCBpbXBsZW1lbnRzIFNlYXJjaDxCaXRtYXBGb250PiB7XHJcbiAgICBwcml2YXRlIHNlYXJjaDogQ29tcG9uZW50U2VhcmNoPEJpdG1hcFRleHQ+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNlYXJjaDogQ29tcG9uZW50U2VhcmNoPEJpdG1hcFRleHQ+ID0gbmV3IEJpdG1hcFRleHRTZWFyY2goKSkge1xyXG4gICAgICAgIHRoaXMuc2VhcmNoID0gc2VhcmNoO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbmQocG9vbDogRW50aXR5UG9vbCk6IEJpdG1hcEZvbnRbXSB7XHJcbiAgICAgICAgcmV0dXJuIFsuLi5uZXcgU2V0KC8vIHVuaXF1ZSBzZXRcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2guZmluZChwb29sKVxyXG4gICAgICAgICAgICAgICAgLm1hcCh0ZXh0ID0+IHRleHQuZm9udCgpKVxyXG4gICAgICAgICldO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IENvbXBvbmVudElkIH0gZnJvbSAnLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IEJhc2VDb21wb25lbnRJZCB9IGZyb20gJy4uL2Jhc2UvaW5kZXgnO1xyXG5pbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gJy4uL3Bvc2l0aW9uL2luZGV4JztcclxuaW1wb3J0IEJpdG1hcEZvbnQgZnJvbSAnLi9CaXRtYXBGb250JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJpdG1hcFRleHQgaW1wbGVtZW50cyBDb21wb25lbnQge1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBJRCA9IG5ldyBCYXNlQ29tcG9uZW50SWQoQml0bWFwVGV4dC5uYW1lKTtcclxuXHJcbiAgICBwcml2YXRlIHRleHRQb3NpdGlvbjogUG9zaXRpb247XHJcbiAgICBwcml2YXRlIHRleHRGb250OiBCaXRtYXBGb250O1xyXG4gICAgcHJpdmF0ZSB0ZXh0U2l6ZTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSB0ZXh0OiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocG9zaXRpb246IFBvc2l0aW9uLCBmb250OiBCaXRtYXBGb250LCBzaXplOiBudW1iZXIsIHRleHQ6IHN0cmluZyA9ICcnKSB7XHJcbiAgICAgICAgdGhpcy50ZXh0UG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgICAgICB0aGlzLnRleHRGb250ID0gZm9udDtcclxuICAgICAgICB0aGlzLnRleHRTaXplID0gc2l6ZTtcclxuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIGlkKCk6IENvbXBvbmVudElkIHtcclxuICAgICAgICByZXR1cm4gQml0bWFwVGV4dC5JRDtcclxuICAgIH1cclxuXHJcbiAgICBwb3NpdGlvbigpOiBQb3NpdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dFBvc2l0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIGZvbnQoKTogQml0bWFwRm9udCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dEZvbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2l6ZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRleHRTaXplO1xyXG4gICAgfVxyXG5cclxuICAgIHZhbHVlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dDtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUodmFsdWU6IHN0cmluZyk6IEJpdG1hcFRleHQge1xyXG4gICAgICAgIHRoaXMudGV4dCA9IHZhbHVlO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBFbnRpdHlTZWFyY2ggfSBmcm9tICcuLi9iYXNlL2luZGV4JztcclxuaW1wb3J0IHsgQ29tcG9uZW50U2VhcmNoIH0gZnJvbSAnLi4vYmFzZS9pbmRleCc7XHJcbmltcG9ydCBCaXRtYXBUZXh0IGZyb20gJy4vQml0bWFwVGV4dCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCaXRtYXBUZXh0U2VhcmNoIGV4dGVuZHMgQ29tcG9uZW50U2VhcmNoPEJpdG1hcFRleHQ+IHtcclxuICAgIGNvbnN0cnVjdG9yKGVudGl0eVNlYXJjaDogRW50aXR5U2VhcmNoID0gbmV3IEVudGl0eVNlYXJjaChCaXRtYXBUZXh0LklEKSkge1xyXG4gICAgICAgIHN1cGVyKEJpdG1hcFRleHQuSUQsIGVudGl0eVNlYXJjaCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQml0bWFwRm9udCBmcm9tICcuL0JpdG1hcEZvbnQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGhhc2VyQml0bWFwRm9udExvYWQge1xyXG4gICAgcHJpdmF0ZSBsb2FkZXI6IFBoYXNlci5Mb2FkZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IobG9hZGVyOiBQaGFzZXIuTG9hZGVyKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkZXIgPSBsb2FkZXI7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZChmb250czogQml0bWFwRm9udFtdKTogUGhhc2VyQml0bWFwRm9udExvYWQge1xyXG4gICAgICAgIGZvbnRzLmZvckVhY2goZm9udCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZGVyLmJpdG1hcEZvbnQoXHJcbiAgICAgICAgICAgICAgICBmb250LmlkKCksXHJcbiAgICAgICAgICAgICAgICBmb250LmltYWdlKCksXHJcbiAgICAgICAgICAgICAgICBmb250LmF0bGFzKClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQml0bWFwVGV4dCBmcm9tICcuL0JpdG1hcFRleHQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQml0bWFwVGV4dEZhY3Rvcnkge1xyXG4gICAgcHJpdmF0ZSBmYWN0b3J5OiBQaGFzZXIuR2FtZU9iamVjdEZhY3Rvcnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZmFjdG9yeTogUGhhc2VyLkdhbWVPYmplY3RGYWN0b3J5KSB7XHJcbiAgICAgICAgdGhpcy5mYWN0b3J5ID0gZmFjdG9yeTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGUodGV4dDogQml0bWFwVGV4dCk6IEJpdG1hcFRleHRGYWN0b3J5IHtcclxuICAgICAgICB0aGlzLmZhY3RvcnkuYml0bWFwVGV4dChcclxuICAgICAgICAgICAgTWF0aC5mbG9vcih0ZXh0LnBvc2l0aW9uKCkueCgpKSxcclxuICAgICAgICAgICAgTWF0aC5mbG9vcih0ZXh0LnBvc2l0aW9uKCkueSgpKSxcclxuICAgICAgICAgICAgdGV4dC5mb250KCkuaWQoKSxcclxuICAgICAgICAgICAgdGV4dC52YWx1ZSgpLFxyXG4gICAgICAgICAgICB0ZXh0LnNpemUoKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgTG9hZCB9IGZyb20gJy4uL2Jhc2UvaW5kZXgnO1xyXG5pbXBvcnQgeyBFbnRpdHlQb29sIH0gZnJvbSAnLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCBQaGFzZXJCaXRtYXBGb250TG9hZCBmcm9tICcuL1BoYXNlckJpdG1hcEZvbnRMb2FkJztcclxuaW1wb3J0IEJpdG1hcEZvbnRTZWFyY2ggZnJvbSAnLi9CaXRtYXBGb250U2VhcmNoJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBoYXNlckJpdG1hcFRleHRMb2FkIGV4dGVuZHMgTG9hZCB7XHJcbiAgICBwcml2YXRlIGVudGl0aWVzOiBFbnRpdHlQb29sO1xyXG4gICAgcHJpdmF0ZSBsb2FkZXI6IFBoYXNlci5Mb2FkZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZW50aXRpZXM6IEVudGl0eVBvb2wsIGxvYWRlcjogUGhhc2VyLkxvYWRlcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5lbnRpdGllcyA9IGVudGl0aWVzO1xyXG4gICAgICAgIHRoaXMubG9hZGVyID0gbG9hZGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGV4ZWN1dGUoKTogdm9pZCB7XHJcbiAgICAgICAgbmV3IFBoYXNlckJpdG1hcEZvbnRMb2FkKHRoaXMubG9hZGVyKS5sb2FkKFxyXG4gICAgICAgICAgICBuZXcgQml0bWFwRm9udFNlYXJjaCgpLmZpbmQodGhpcy5lbnRpdGllcylcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgU3RhcnQgfSBmcm9tICcuLi9iYXNlL2luZGV4JztcclxuaW1wb3J0IHsgRW50aXR5UG9vbCB9IGZyb20gJy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgQml0bWFwVGV4dFNlYXJjaCBmcm9tICcuL0JpdG1hcFRleHRTZWFyY2gnO1xyXG5pbXBvcnQgUGhhc2VyQml0bWFwVGV4dEZhY3RvcnkgZnJvbSAnLi9QaGFzZXJCaXRtYXBUZXh0RmFjdG9yeSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQaGFzZXJCaXRtYXBUZXh0U3RhcnQgZXh0ZW5kcyBTdGFydCB7XHJcbiAgICBwcml2YXRlIGVudGl0aWVzOiBFbnRpdHlQb29sO1xyXG4gICAgcHJpdmF0ZSBmYWN0b3J5OiBQaGFzZXIuR2FtZU9iamVjdEZhY3Rvcnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZW50aXRpZXM6IEVudGl0eVBvb2wsIGZhY3Rvcnk6IFBoYXNlci5HYW1lT2JqZWN0RmFjdG9yeSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5lbnRpdGllcyA9IGVudGl0aWVzO1xyXG4gICAgICAgIHRoaXMuZmFjdG9yeSA9IGZhY3Rvcnk7XHJcbiAgICB9XHJcblxyXG4gICAgZXhlY3V0ZSgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBmYWN0b3J5ID0gbmV3IFBoYXNlckJpdG1hcFRleHRGYWN0b3J5KHRoaXMuZmFjdG9yeSk7XHJcbiAgICAgICAgbmV3IEJpdG1hcFRleHRTZWFyY2goKS5maW5kKHRoaXMuZW50aXRpZXMpXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKHRleHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgZmFjdG9yeS5jcmVhdGUodGV4dCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgU3lzdGVtIH0gZnJvbSAnLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IEVudGl0eVBvb2wgfSBmcm9tICcuLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgUGhhc2UgfSBmcm9tICcuLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgUGhhc2VJZCB9IGZyb20gJy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBCYXNlU3lzdGVtIH0gZnJvbSAnLi4vYmFzZS9pbmRleCc7XHJcbmltcG9ydCB7IEJhc2VQaGFzZVBvb2wgfSBmcm9tICcuLi9iYXNlL2luZGV4JztcclxuaW1wb3J0IFBoYXNlckJpdG1hcFRleHRMb2FkIGZyb20gJy4vUGhhc2VyQml0bWFwVGV4dExvYWQnO1xyXG5pbXBvcnQgUGhhc2VyQml0bWFwVGV4dFN0YXJ0IGZyb20gJy4vUGhhc2VyQml0bWFwVGV4dFN0YXJ0JztcclxuXHJcbi8qKlxyXG4gKiBMb2FkcyBhbmQgY3JlYXRlcyBiaXRtYXAgdGV4dCB1c2luZyBQaGFzZXIuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQaGFzZXJCaXRtYXBUZXh0U3lzdGVtIGV4dGVuZHMgQmFzZVN5c3RlbSB7XHJcbiAgICBjb25zdHJ1Y3RvcihlbnRpdGllczogRW50aXR5UG9vbCwgbG9hZGVyOiBQaGFzZXIuTG9hZGVyLCBmYWN0b3J5OiBQaGFzZXIuR2FtZU9iamVjdEZhY3RvcnkpIHtcclxuICAgICAgICBzdXBlcihbXHJcbiAgICAgICAgICAgIG5ldyBQaGFzZXJCaXRtYXBUZXh0TG9hZChlbnRpdGllcywgbG9hZGVyKSxcclxuICAgICAgICAgICAgbmV3IFBoYXNlckJpdG1hcFRleHRTdGFydChlbnRpdGllcywgZmFjdG9yeSlcclxuICAgICAgICBdKTtcclxuICAgIH1cclxufSIsImltcG9ydCBCaXRtYXBGb250IGZyb20gJy4vQml0bWFwRm9udCc7XHJcbmltcG9ydCBCaXRtYXBGb250U2VhcmNoIGZyb20gJy4vQml0bWFwRm9udFNlYXJjaCc7XHJcbmltcG9ydCBCaXRtYXBUZXh0IGZyb20gJy4vQml0bWFwVGV4dCc7XHJcbmltcG9ydCBCaXRtYXBUZXh0U2VhcmNoIGZyb20gJy4vQml0bWFwVGV4dFNlYXJjaCc7XHJcbmltcG9ydCBQaGFzZXJCaXRtYXBGb250TG9hZCBmcm9tICcuL1BoYXNlckJpdG1hcEZvbnRMb2FkJztcclxuaW1wb3J0IFBoYXNlckJpdG1hcFRleHRGYWN0b3J5IGZyb20gJy4vUGhhc2VyQml0bWFwVGV4dEZhY3RvcnknO1xyXG5pbXBvcnQgUGhhc2VyQml0bWFwVGV4dExvYWQgZnJvbSAnLi9QaGFzZXJCaXRtYXBUZXh0TG9hZCc7XHJcbmltcG9ydCBQaGFzZXJCaXRtYXBUZXh0U3RhcnQgZnJvbSAnLi9QaGFzZXJCaXRtYXBUZXh0U3RhcnQnO1xyXG5pbXBvcnQgUGhhc2VyQml0bWFwVGV4dFN5c3RlbSBmcm9tICcuL1BoYXNlckJpdG1hcFRleHRTeXN0ZW0nO1xyXG5cclxuZXhwb3J0IHtcclxuICAgIEJpdG1hcEZvbnQsXHJcbiAgICBCaXRtYXBGb250U2VhcmNoLFxyXG4gICAgQml0bWFwVGV4dCxcclxuICAgIEJpdG1hcFRleHRTZWFyY2gsXHJcbiAgICBQaGFzZXJCaXRtYXBGb250TG9hZCxcclxuICAgIFBoYXNlckJpdG1hcFRleHRGYWN0b3J5LFxyXG4gICAgUGhhc2VyQml0bWFwVGV4dExvYWQsXHJcbiAgICBQaGFzZXJCaXRtYXBUZXh0U3RhcnQsXHJcbiAgICBQaGFzZXJCaXRtYXBUZXh0U3lzdGVtLFxyXG59OyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL2luZGV4LmQudHNcIi8+XHJcblxyXG5pbXBvcnQgRWNzUG9uZyBmcm9tICcuL0Vjc1BvbmcnO1xyXG5cclxubmV3IEVjc1BvbmcoKS5zdGFydCgpOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvc2l0aW9uIHtcclxuICAgIHByaXZhdGUgY29vcmRpbmF0ZXM6IG51bWJlcltdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5jb29yZGluYXRlcyA9IFt4LCB5XTtcclxuICAgIH1cclxuXHJcbiAgICB4KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29vcmRpbmF0ZXNbMF07XHJcbiAgICB9XHJcblxyXG4gICAgeSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvb3JkaW5hdGVzWzFdO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFBvc2l0aW9uIGZyb20gJy4vUG9zaXRpb24nO1xyXG5cclxuZXhwb3J0IHtcclxuICAgIFBvc2l0aW9uXHJcbn07IiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IENvbXBvbmVudElkIH0gZnJvbSAnLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IEJhc2VDb21wb25lbnRJZCB9IGZyb20gJy4uL2Jhc2UvaW5kZXgnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcmUgaW1wbGVtZW50cyBDb21wb25lbnQge1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBJRCA9IG5ldyBCYXNlQ29tcG9uZW50SWQoU2NvcmUubmFtZSk7XHJcblxyXG4gICAgcHJpdmF0ZSBzY29yZTogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGlkKCk6IENvbXBvbmVudElkIHtcclxuICAgICAgICByZXR1cm4gU2NvcmUuSUQ7XHJcbiAgICB9XHJcblxyXG4gICAgdmFsdWUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zY29yZTtcclxuICAgIH1cclxuXHJcbiAgICBpbmNyZW1lbnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zY29yZSArPSAxO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7IFByZWZhYiB9IGZyb20gJy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQml0bWFwVGV4dCB9IGZyb20gJy4uL2JpdG1hcFRleHQvaW5kZXgnO1xyXG5pbXBvcnQgeyBCaXRtYXBGb250IH0gZnJvbSAnLi4vYml0bWFwVGV4dC9pbmRleCc7XHJcbmltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSAnLi4vcG9zaXRpb24vaW5kZXgnO1xyXG5pbXBvcnQgU2NvcmUgZnJvbSAnLi9TY29yZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY29yZVByZWZhYiBpbXBsZW1lbnRzIFByZWZhYiB7XHJcbiAgICBwcml2YXRlIHBvc2l0aW9uOiBQb3NpdGlvbjtcclxuICAgIHByaXZhdGUgZm9udDogQml0bWFwRm9udDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbjogUG9zaXRpb24sIGZvbnQ6IEJpdG1hcEZvbnQpIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICAgICAgdGhpcy5mb250ID0gZm9udDtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGUoKTogQ29tcG9uZW50W10ge1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIG5ldyBTY29yZSgpLFxyXG4gICAgICAgICAgICBuZXcgQml0bWFwVGV4dChcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24sXHJcbiAgICAgICAgICAgICAgICB0aGlzLmZvbnQsXHJcbiAgICAgICAgICAgICAgICAzMixcclxuICAgICAgICAgICAgICAgICcwJ1xyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxufSIsImltcG9ydCBTY29yZSBmcm9tICcuL1Njb3JlJztcclxuaW1wb3J0IFNjb3JlUHJlZmFiIGZyb20gJy4vU2NvcmVQcmVmYWInO1xyXG5cclxuZXhwb3J0IHtcclxuICAgIFNjb3JlLFxyXG4gICAgU2NvcmVQcmVmYWJcclxufTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBEdXBsaWNhdGVFcnJvciBleHRlbmRzIEVycm9yIHtcclxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XHJcbiAgICAgICAgc3VwZXIoLi4uYXJncyk7XHJcbiAgICAgICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgRHVwbGljYXRlRXJyb3IpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm90Rm91bmRFcnJvciBleHRlbmRzIEVycm9yIHtcclxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XHJcbiAgICAgICAgc3VwZXIoLi4uYXJncyk7XHJcbiAgICAgICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgTm90Rm91bmRFcnJvcik7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgRHVwbGljYXRlRXJyb3IgZnJvbSAnLi9EdXBsaWNhdGVFcnJvcic7XHJcbmltcG9ydCBOb3RGb3VuZEVycm9yIGZyb20gJy4vTm90Rm91bmRFcnJvcic7XHJcblxyXG5leHBvcnQge1xyXG4gICAgRHVwbGljYXRlRXJyb3IsXHJcbiAgICBOb3RGb3VuZEVycm9yXHJcbn07Il19
