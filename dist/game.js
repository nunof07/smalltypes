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
        const charSize = 32;
        const entities = new index_2.BaseEntityPool()
            .createMany([
            new index_4.Score(new index_5.Position(0.25 * this.game.world.width - 2 * charSize, 4 * charSize), font, charSize),
            new index_4.Score(new index_5.Position(0.75 * this.game.world.width - 2 * charSize, 4 * charSize), font, charSize)
        ]);
        this.ecs = new index_1.BaseWorld(entities, new index_3.BaseSystemCollection([
            new index_7.PhaserBitmapTextSystem(entities, this.game.load, this.game.add)
        ]));
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
const index_1 = require("../bitmapText/index");
const ScoreComponent_1 = require("./ScoreComponent");
class Score {
    constructor(position, font, charSize) {
        this.position = position;
        this.font = font;
        this.charSize = charSize;
    }
    create() {
        return [
            new ScoreComponent_1.default(),
            new index_1.BitmapText(this.position, this.font, this.charSize, '0')
        ];
    }
}
exports.default = Score;
},{"../bitmapText/index":32,"./ScoreComponent":37}],37:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../base/index");
class ScoreComponent {
    constructor() {
        this.score = 0;
    }
    id() {
        return ScoreComponent.ID;
    }
    value() {
        return this.score;
    }
    increment() {
        this.score += 1;
    }
}
ScoreComponent.ID = new index_1.BaseComponentId(ScoreComponent.name);
exports.default = ScoreComponent;
},{"../base/index":22}],38:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ScoreComponent_1 = require("./ScoreComponent");
exports.ScoreComponent = ScoreComponent_1.default;
const Score_1 = require("./Score");
exports.Score = Score_1.default;
},{"./Score":36,"./ScoreComponent":37}],39:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZWNzL0Jvb3RTdGF0ZS50cyIsInNyYy9lY3MvRWNzUG9uZy50cyIsInNyYy9lY3MvR2FtZVN0YXRlLnRzIiwic3JjL2Vjcy9iYXNlL0Jhc2VDb21wb25lbnRJZC50cyIsInNyYy9lY3MvYmFzZS9CYXNlRW50aXR5LnRzIiwic3JjL2Vjcy9iYXNlL0Jhc2VFbnRpdHlJZC50cyIsInNyYy9lY3MvYmFzZS9CYXNlRW50aXR5UG9vbC50cyIsInNyYy9lY3MvYmFzZS9CYXNlSWQudHMiLCJzcmMvZWNzL2Jhc2UvQmFzZVBoYXNlSWQudHMiLCJzcmMvZWNzL2Jhc2UvQmFzZVBoYXNlUG9vbC50cyIsInNyYy9lY3MvYmFzZS9CYXNlU3lzdGVtLnRzIiwic3JjL2Vjcy9iYXNlL0Jhc2VTeXN0ZW1Db2xsZWN0aW9uLnRzIiwic3JjL2Vjcy9iYXNlL0Jhc2VXb3JsZC50cyIsInNyYy9lY3MvYmFzZS9Db21wb25lbnREdXBsaWNhdGVFcnJvci50cyIsInNyYy9lY3MvYmFzZS9Db21wb25lbnROb3RGb3VuZEVycm9yLnRzIiwic3JjL2Vjcy9iYXNlL0NvbXBvbmVudFNlYXJjaC50cyIsInNyYy9lY3MvYmFzZS9FbnRpdHlTZWFyY2gudHMiLCJzcmMvZWNzL2Jhc2UvTG9hZC50cyIsInNyYy9lY3MvYmFzZS9QaGFzZUV4ZWN1dGUudHMiLCJzcmMvZWNzL2Jhc2UvUGhhc2VTZWFyY2gudHMiLCJzcmMvZWNzL2Jhc2UvU3RhcnQudHMiLCJzcmMvZWNzL2Jhc2UvaW5kZXgudHMiLCJzcmMvZWNzL2JpdG1hcFRleHQvQml0bWFwRm9udC50cyIsInNyYy9lY3MvYml0bWFwVGV4dC9CaXRtYXBGb250U2VhcmNoLnRzIiwic3JjL2Vjcy9iaXRtYXBUZXh0L0JpdG1hcFRleHQudHMiLCJzcmMvZWNzL2JpdG1hcFRleHQvQml0bWFwVGV4dFNlYXJjaC50cyIsInNyYy9lY3MvYml0bWFwVGV4dC9QaGFzZXJCaXRtYXBGb250TG9hZC50cyIsInNyYy9lY3MvYml0bWFwVGV4dC9QaGFzZXJCaXRtYXBUZXh0RmFjdG9yeS50cyIsInNyYy9lY3MvYml0bWFwVGV4dC9QaGFzZXJCaXRtYXBUZXh0TG9hZC50cyIsInNyYy9lY3MvYml0bWFwVGV4dC9QaGFzZXJCaXRtYXBUZXh0U3RhcnQudHMiLCJzcmMvZWNzL2JpdG1hcFRleHQvUGhhc2VyQml0bWFwVGV4dFN5c3RlbS50cyIsInNyYy9lY3MvYml0bWFwVGV4dC9pbmRleC50cyIsInNyYy9lY3MvbWFpbi50cyIsInNyYy9lY3MvcG9zaXRpb24vUG9zaXRpb24udHMiLCJzcmMvZWNzL3Bvc2l0aW9uL2luZGV4LnRzIiwic3JjL2Vjcy9zY29yZS9TY29yZS50cyIsInNyYy9lY3Mvc2NvcmUvU2NvcmVDb21wb25lbnQudHMiLCJzcmMvZWNzL3Njb3JlL2luZGV4LnRzIiwic3JjL2Vjcy9zeXN0ZW0vRHVwbGljYXRlRXJyb3IudHMiLCJzcmMvZWNzL3N5c3RlbS9Ob3RGb3VuZEVycm9yLnRzIiwic3JjL2Vjcy9zeXN0ZW0vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLGVBQStCLFNBQVEsTUFBTSxDQUFDLEtBQUs7SUFDL0M7UUFDSSxLQUFLLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFTSxJQUFJO1FBQ1Asc0JBQXNCO1FBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDO1FBQ3BELElBQUksQ0FBQyxLQUFLLENBQUMsbUJBQW1CLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUM7UUFDOUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUM7UUFDeEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUM7UUFDdEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsQ0FBQyw2Q0FBNkM7UUFDbEcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFMUIsb0JBQW9CO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pDLE1BQU0sQ0FBQyxNQUFNLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRU0sTUFBTTtRQUNULElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsQyxDQUFDO0NBQ0o7QUF4QkQsNEJBd0JDOzs7O0FDeEJELDJDQUFvQztBQUNwQywyQ0FBb0M7QUFFcEM7SUFHSTtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ3pCLEtBQUssRUFBRSxJQUFJO1lBQ1gsTUFBTSxFQUFFLEdBQUc7WUFDWCxRQUFRLEVBQUUsTUFBTSxDQUFDLElBQUk7WUFDckIsTUFBTSxFQUFFLGdCQUFnQjtTQUMzQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sS0FBSztRQUNSLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxtQkFBUyxFQUFFLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksbUJBQVMsRUFBRSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25DLENBQUM7Q0FDSjtBQWpCRCwwQkFpQkM7Ozs7QUNwQkQsd0NBQXlDO0FBQ3pDLHdDQUE4QztBQUM5Qyx3Q0FBb0Q7QUFDcEQseUNBQXNDO0FBQ3RDLDRDQUE0QztBQUM1Qyw4Q0FBZ0Q7QUFDaEQsOENBQTREO0FBQzVELHdDQUFvQztBQUNwQyx3Q0FBcUM7QUFDckMseUNBQTRDO0FBRTVDLGVBQStCLFNBQVEsTUFBTSxDQUFDLEtBQUs7SUFHL0MsSUFBSTtRQUNBLE1BQU0sSUFBSSxHQUFHLElBQUksa0JBQVUsQ0FBQyxnQkFBZ0IsRUFBRSw0QkFBNEIsRUFBRSwwQkFBMEIsQ0FBQyxDQUFDO1FBQ3hHLE1BQU0sUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNwQixNQUFNLFFBQVEsR0FBRyxJQUFJLHNCQUFjLEVBQUU7YUFDaEMsVUFBVSxDQUFDO1lBQ1IsSUFBSSxhQUFLLENBQ0wsSUFBSSxnQkFBUSxDQUNSLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLFFBQVEsRUFDM0MsQ0FBQyxHQUFHLFFBQVEsQ0FDZixFQUNELElBQUksRUFDSixRQUFRLENBQ1g7WUFDRCxJQUFJLGFBQUssQ0FDTCxJQUFJLGdCQUFRLENBQ1IsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsUUFBUSxFQUMzQyxDQUFDLEdBQUcsUUFBUSxDQUNmLEVBQ0QsSUFBSSxFQUNKLFFBQVEsQ0FBQztTQUNoQixDQUFDLENBQUM7UUFDUCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksaUJBQVMsQ0FDcEIsUUFBUSxFQUNSLElBQUksNEJBQW9CLENBQUM7WUFDckIsSUFBSSw4QkFBc0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7U0FDdEUsQ0FBQyxDQUNMLENBQUM7SUFDTixDQUFDO0lBRUQsT0FBTztRQUNILElBQUkscUJBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFLFlBQUksQ0FBQyxFQUFFLENBQUM7YUFDeEMsT0FBTyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELE1BQU07UUFDRixJQUFJLHFCQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsRUFBRSxhQUFLLENBQUMsRUFBRSxDQUFDO2FBQ3pDLE9BQU8sRUFBRSxDQUFDO0lBQ25CLENBQUM7Q0FDSjtBQXpDRCw0QkF5Q0M7Ozs7QUNuREQscUNBQThCO0FBRTlCLHFCQUFxQyxTQUFRLGdCQUFNO0NBQ2xEO0FBREQsa0NBQ0M7Ozs7QUNBRCxxRUFBOEQ7QUFDOUQsdUVBQWdFO0FBRWhFO0lBSUksWUFDSSxFQUFZLEVBQ1osYUFBMEMsSUFBSSxHQUFHLEVBQUU7UUFFbkQsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELEVBQUU7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBRUQsTUFBTSxDQUFDLFNBQW9CO1FBQ3ZCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QyxNQUFNLElBQUksaUNBQXVCLEVBQUUsQ0FBQztRQUN4QyxDQUFDO1FBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBRS9DLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELFVBQVUsQ0FBQyxVQUF1QjtRQUM5QixVQUFVLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxHQUFHLENBQUMsVUFBeUI7UUFDekIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCxHQUFHLENBQXNCLFNBQXNCO1FBQzNDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLE1BQU0sSUFBSSxnQ0FBc0IsRUFBRSxDQUFDO1FBQ3ZDLENBQUM7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFNLENBQUM7SUFDL0MsQ0FBQztDQUVKO0FBN0NELDZCQTZDQzs7OztBQ25ERCxxQ0FBOEI7QUFFOUIsa0JBQWtDLFNBQVEsZ0JBQU07Q0FDL0M7QUFERCwrQkFDQzs7OztBQ0VELDZDQUFzQztBQUN0QyxpREFBMEM7QUFFMUM7SUFHSTtRQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFTyxRQUFRO1FBQ1osTUFBTSxDQUFDLElBQUksc0JBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsTUFBTSxDQUFDLFVBQXdCO1FBQzNCLE1BQU0sTUFBTSxHQUFHLElBQUksb0JBQVUsQ0FDekIsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUNmLElBQUksR0FBRyxDQUNILFVBQVUsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxTQUFTLENBQTZCLENBQUMsQ0FDdkYsQ0FDSixDQUFDO1FBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFdkIsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRUQsVUFBVSxDQUFDLE9BQWlCO1FBQ3hCLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FDUCxNQUFNLENBQUMsTUFBTSxFQUFFLENBQ2xCLENBQUM7UUFDTixDQUFDLENBQUMsQ0FBQztRQUVILE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELFFBQVE7UUFDSixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDO0NBRUo7QUFyQ0QsaUNBcUNDOzs7O0FDNUNEO0lBR0ksWUFBWSxFQUF3QjtRQUNoQyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxZQUFZLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDN0IsRUFBUyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7WUFDcEIsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQsS0FBSztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQ25CLENBQUM7Q0FDSjtBQVpELHlCQVlDOzs7O0FDYkQscUNBQThCO0FBRTlCLGlCQUFpQyxTQUFRLGdCQUFNO0NBQzlDO0FBREQsOEJBQ0M7Ozs7QUNBRDtJQUdJLFlBQVksTUFBcUM7UUFDN0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLE1BQU0sWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDNUMsSUFBSSxHQUFHLENBQ0gsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUNmLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBcUIsQ0FDMUMsQ0FDSixDQUFDO0lBQ1YsQ0FBQztJQUVELEdBQUcsQ0FBQyxFQUFXO1FBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxHQUFHLENBQWtCLEVBQVc7UUFDNUIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBTSxDQUFDO0lBQ3BDLENBQUM7Q0FDSjtBQW5CRCxnQ0FtQkM7Ozs7QUNuQkQseUNBQThDO0FBRTlDO0lBR0ksWUFBWSxNQUFpRDtRQUN6RCxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsTUFBTSxZQUFZLEtBQUssSUFBSSxNQUFNLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNqRSxJQUFJLHFCQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUMzQixNQUFNLENBQUM7SUFDZixDQUFDO0lBRUQsTUFBTTtRQUNGLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7Q0FDSjtBQVpELDZCQVlDOzs7O0FDWkQ7SUFHSSxZQUFZLE9BQWtCO1FBQzFCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxJQUFJLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBRUQsUUFBUSxDQUFDLE1BQWM7UUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFMUIsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsWUFBWSxDQUFDLE9BQWlCO1FBQzFCLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztRQUVILE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELE1BQU0sQ0FBQyxFQUFXO1FBQ2QsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQ2hDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQzFCLENBQUM7SUFDTixDQUFDO0NBQ0o7QUExQkQsdUNBMEJDOzs7O0FDNUJEO0lBSUksWUFBWSxRQUFvQixFQUFFLE9BQXlCO1FBQ3ZELElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO1FBQzNCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxPQUFPLENBQUM7SUFDcEMsQ0FBQztJQUVELFFBQVE7UUFDSixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUMzQixDQUFDO0lBRUQsT0FBTztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDakMsQ0FBQztDQUNKO0FBaEJELDRCQWdCQzs7OztBQ3BCRCwyQ0FBaUQ7QUFFakQsNkJBQTZDLFNBQVEsc0JBQWM7SUFDL0QsWUFBWSxHQUFHLElBQVc7UUFDdEIsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDbkIsQ0FBQztDQUNKO0FBSkQsMENBSUM7Ozs7QUNORCwyQ0FBZ0Q7QUFFaEQsNEJBQTRDLFNBQVEscUJBQWE7SUFDN0QsWUFBWSxHQUFHLElBQVc7UUFDdEIsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDbkIsQ0FBQztDQUNKO0FBSkQseUNBSUM7Ozs7QUNERCxpREFBMEM7QUFFMUM7SUFJSSxZQUNJLEVBQWUsRUFDZixlQUE2QixJQUFJLHNCQUFZLENBQUMsRUFBRSxDQUFDO1FBRWpELElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7SUFDckMsQ0FBQztJQUVELElBQUksQ0FBQyxJQUFnQjtRQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQzlCLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQztDQUNKO0FBaEJELGtDQWdCQzs7OztBQ2pCRDtJQUdJLFlBQVksR0FBZ0M7UUFDeEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsV0FBVyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDM0MsR0FBb0IsQ0FBQyxDQUFDO1lBQ3RCLENBQUMsR0FBa0IsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCxJQUFJLENBQUMsSUFBZ0I7UUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7YUFDakIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDO0NBQ0o7QUFiRCwrQkFhQzs7OztBQ2pCRCwrQ0FBd0M7QUFFeEM7SUFHSSxFQUFFO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7QUFKc0IsT0FBRSxHQUFHLElBQUkscUJBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFEM0QsdUJBUUM7Ozs7QUNWRCwrQ0FBd0M7QUFFeEM7SUFJSSxZQUFZLE9BQXlCLEVBQUUsTUFBNkI7UUFDaEUsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLE1BQU0sWUFBWSxxQkFBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxxQkFBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3JGLENBQUM7SUFFRCxPQUFPO1FBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUN6QixPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUMzQyxDQUFDO0NBQ0o7QUFiRCwrQkFhQzs7OztBQ1pEO0lBR0ksWUFBWSxFQUFXO1FBQ25CLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCxJQUFJLENBQUMsT0FBeUI7UUFDMUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQzthQUN6QixHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7Q0FDSjtBQVhELDhCQVdDOzs7O0FDZEQsK0NBQXdDO0FBRXhDO0lBR0ksRUFBRTtRQUNFLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO0lBQ3BCLENBQUM7O0FBSnNCLFFBQUUsR0FBRyxJQUFJLHFCQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRDVELHdCQVFDOzs7O0FDWkQsdURBQWdEO0FBb0I1QywwQkFwQkcseUJBQWUsQ0FvQkg7QUFuQm5CLDZDQUFzQztBQW9CbEMscUJBcEJHLG9CQUFVLENBb0JIO0FBbkJkLGlEQUEwQztBQW9CdEMsdUJBcEJHLHNCQUFZLENBb0JIO0FBbkJoQixxREFBOEM7QUFvQjFDLHlCQXBCRyx3QkFBYyxDQW9CSDtBQW5CbEIscUNBQThCO0FBb0IxQixpQkFwQkcsZ0JBQU0sQ0FvQkg7QUFuQlYsK0NBQXdDO0FBb0JwQyxzQkFwQkcscUJBQVcsQ0FvQkg7QUFuQmYsbURBQTRDO0FBb0J4Qyx3QkFwQkcsdUJBQWEsQ0FvQkg7QUFuQmpCLDZDQUFzQztBQW9CbEMscUJBcEJHLG9CQUFVLENBb0JIO0FBbkJkLGlFQUEwRDtBQW9CdEQsK0JBcEJHLDhCQUFvQixDQW9CSDtBQW5CeEIsMkNBQW9DO0FBb0JoQyxvQkFwQkcsbUJBQVMsQ0FvQkg7QUFuQmIsdUVBQWdFO0FBb0I1RCxrQ0FwQkcsaUNBQXVCLENBb0JIO0FBbkIzQixxRUFBOEQ7QUFvQjFELGlDQXBCRyxnQ0FBc0IsQ0FvQkg7QUFuQjFCLHVEQUFnRDtBQW9CNUMsMEJBcEJHLHlCQUFlLENBb0JIO0FBbkJuQixpREFBMEM7QUFvQnRDLHVCQXBCRyxzQkFBWSxDQW9CSDtBQW5CaEIsaUNBQTBCO0FBb0J0QixlQXBCRyxjQUFJLENBb0JIO0FBbkJSLGlEQUEwQztBQW9CdEMsdUJBcEJHLHNCQUFZLENBb0JIO0FBbkJoQiwrQ0FBd0M7QUFvQnBDLHNCQXBCRyxxQkFBVyxDQW9CSDtBQW5CZixtQ0FBNEI7QUFvQnhCLGdCQXBCRyxlQUFLLENBb0JIOzs7O0FDckNUO0lBS0ksWUFBWSxHQUFXLEVBQUUsU0FBaUIsRUFBRSxTQUFpQjtRQUN6RCxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQy9CLENBQUM7SUFFRCxFQUFFO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDcEIsQ0FBQztJQUVELEtBQUs7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBRUQsS0FBSztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7Q0FDSjtBQXRCRCw2QkFzQkM7Ozs7QUNqQkQseURBQWtEO0FBRWxEO0lBR0ksWUFBWSxTQUFzQyxJQUFJLDBCQUFnQixFQUFFO1FBQ3BFLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxJQUFJLENBQUMsSUFBZ0I7UUFDakIsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxhQUFhO1lBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztpQkFDakIsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQ2hDLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSjtBQWJELG1DQWFDOzs7O0FDbEJELHlDQUFnRDtBQUloRDtJQVFJLFlBQVksUUFBa0IsRUFBRSxJQUFnQixFQUFFLElBQVksRUFBRSxPQUFlLEVBQUU7UUFDN0UsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUM7UUFDN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVELEVBQUU7UUFDRSxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsUUFBUTtRQUNKLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzdCLENBQUM7SUFFRCxJQUFJO1FBQ0EsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQztJQUVELElBQUk7UUFDQSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBRUQsS0FBSztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxNQUFNLENBQUMsS0FBYTtRQUNoQixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUVsQixNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7O0FBdENzQixhQUFFLEdBQUcsSUFBSSx1QkFBZSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQURyRSw2QkF5Q0M7Ozs7QUMvQ0QseUNBQTZDO0FBQzdDLHlDQUFnRDtBQUNoRCw2Q0FBc0M7QUFFdEMsc0JBQXNDLFNBQVEsdUJBQTJCO0lBQ3JFLFlBQVksZUFBNkIsSUFBSSxvQkFBWSxDQUFDLG9CQUFVLENBQUMsRUFBRSxDQUFDO1FBQ3BFLEtBQUssQ0FBQyxvQkFBVSxDQUFDLEVBQUUsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUN2QyxDQUFDO0NBQ0o7QUFKRCxtQ0FJQzs7OztBQ05EO0lBR0ksWUFBWSxNQUFxQjtRQUM3QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN6QixDQUFDO0lBRUQsSUFBSSxDQUFDLEtBQW1CO1FBQ3BCLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQ2xCLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFDVCxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQ1osSUFBSSxDQUFDLEtBQUssRUFBRSxDQUNmLENBQUM7UUFDTixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFVCxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7Q0FDSjtBQWxCRCx1Q0FrQkM7Ozs7QUNsQkQ7SUFHSSxZQUFZLE9BQWlDO1FBQ3pDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQzNCLENBQUM7SUFFRCxNQUFNLENBQUMsSUFBZ0I7UUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQy9CLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQy9CLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFDaEIsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUNaLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FDZCxDQUFDO1FBRUYsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0NBQ0o7QUFsQkQsb0NBa0JDOzs7O0FDcEJELHlDQUFxQztBQUVyQyxpRUFBMEQ7QUFDMUQseURBQWtEO0FBRWxELDBCQUEwQyxTQUFRLFlBQUk7SUFJbEQsWUFBWSxRQUFvQixFQUFFLE1BQXFCO1FBQ25ELEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDekIsQ0FBQztJQUVELE9BQU87UUFDSCxJQUFJLDhCQUFvQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQ3RDLElBQUksMEJBQWdCLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUM3QyxDQUFDO0lBQ04sQ0FBQztDQUNKO0FBZkQsdUNBZUM7Ozs7QUNwQkQseUNBQXNDO0FBRXRDLHlEQUFrRDtBQUNsRCx1RUFBZ0U7QUFFaEUsMkJBQTJDLFNBQVEsYUFBSztJQUlwRCxZQUFZLFFBQW9CLEVBQUUsT0FBaUM7UUFDL0QsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUMzQixDQUFDO0lBRUQsT0FBTztRQUNILE1BQU0sT0FBTyxHQUFHLElBQUksaUNBQXVCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzFELElBQUksMEJBQWdCLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUNyQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDWixPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztDQUNKO0FBakJELHdDQWlCQzs7OztBQ2xCRCx5Q0FBMkM7QUFFM0MsaUVBQTBEO0FBQzFELG1FQUE0RDtBQUU1RDs7R0FFRztBQUNILDRCQUE0QyxTQUFRLGtCQUFVO0lBQzFELFlBQVksUUFBb0IsRUFBRSxNQUFxQixFQUFFLE9BQWlDO1FBQ3RGLEtBQUssQ0FBQztZQUNGLElBQUksOEJBQW9CLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQztZQUMxQyxJQUFJLCtCQUFxQixDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUM7U0FDL0MsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNKO0FBUEQseUNBT0M7Ozs7QUNuQkQsNkNBQXNDO0FBV2xDLHFCQVhHLG9CQUFVLENBV0g7QUFWZCx5REFBa0Q7QUFXOUMsMkJBWEcsMEJBQWdCLENBV0g7QUFWcEIsNkNBQXNDO0FBV2xDLHFCQVhHLG9CQUFVLENBV0g7QUFWZCx5REFBa0Q7QUFXOUMsMkJBWEcsMEJBQWdCLENBV0g7QUFWcEIsaUVBQTBEO0FBV3RELCtCQVhHLDhCQUFvQixDQVdIO0FBVnhCLHVFQUFnRTtBQVc1RCxrQ0FYRyxpQ0FBdUIsQ0FXSDtBQVYzQixpRUFBMEQ7QUFXdEQsK0JBWEcsOEJBQW9CLENBV0g7QUFWeEIsbUVBQTREO0FBV3hELGdDQVhHLCtCQUFxQixDQVdIO0FBVnpCLHFFQUE4RDtBQVcxRCxpQ0FYRyxnQ0FBc0IsQ0FXSDs7O0FDbkIxQixnREFBZ0Q7O0FBRWhELHVDQUFnQztBQUVoQyxJQUFJLGlCQUFPLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7OztBQ0p0QjtJQUdJLFlBQVksQ0FBUyxFQUFFLENBQVM7UUFDNUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsQ0FBQztRQUNHLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxDQUFDO1FBQ0csTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0IsQ0FBQztDQUNKO0FBZEQsMkJBY0M7Ozs7QUNkRCx5Q0FBa0M7QUFHOUIsbUJBSEcsa0JBQVEsQ0FHSDs7OztBQ0RaLCtDQUFpRDtBQUdqRCxxREFBOEM7QUFFOUM7SUFLSSxZQUFZLFFBQWtCLEVBQUUsSUFBZ0IsRUFBRSxRQUFnQjtRQUM5RCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUM3QixDQUFDO0lBRUQsTUFBTTtRQUNGLE1BQU0sQ0FBQztZQUNILElBQUksd0JBQWMsRUFBRTtZQUNwQixJQUFJLGtCQUFVLENBQ1YsSUFBSSxDQUFDLFFBQVEsRUFDYixJQUFJLENBQUMsSUFBSSxFQUNULElBQUksQ0FBQyxRQUFRLEVBQ2IsR0FBRyxDQUNOO1NBQ0osQ0FBQztJQUNOLENBQUM7Q0FDSjtBQXRCRCx3QkFzQkM7Ozs7QUMzQkQseUNBQWdEO0FBRWhEO0lBS0k7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztJQUNuQixDQUFDO0lBRUQsRUFBRTtRQUNFLE1BQU0sQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCxLQUFLO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVELFNBQVM7UUFDTCxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztJQUNwQixDQUFDOztBQWxCc0IsaUJBQUUsR0FBRyxJQUFJLHVCQUFlLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRHpFLGlDQXFCQzs7OztBQ3pCRCxxREFBOEM7QUFJMUMseUJBSkcsd0JBQWMsQ0FJSDtBQUhsQixtQ0FBNEI7QUFJeEIsZ0JBSkcsZUFBSyxDQUlIOzs7O0FDTFQsb0JBQW9DLFNBQVEsS0FBSztJQUM3QyxZQUFZLEdBQUcsSUFBVztRQUN0QixLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUNmLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFDbEQsQ0FBQztDQUNKO0FBTEQsaUNBS0M7Ozs7QUNMRCxtQkFBbUMsU0FBUSxLQUFLO0lBQzVDLFlBQVksR0FBRyxJQUFXO1FBQ3RCLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ2YsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxhQUFhLENBQUMsQ0FBQztJQUNqRCxDQUFDO0NBQ0o7QUFMRCxnQ0FLQzs7OztBQ0xELHFEQUE4QztBQUkxQyx5QkFKRyx3QkFBYyxDQUlIO0FBSGxCLG1EQUE0QztBQUl4Qyx3QkFKRyx1QkFBYSxDQUlIIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvb3RTdGF0ZSBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbml0KCkge1xyXG4gICAgICAgIC8vIHNjYWxlIHRvIGZpdCBzY3JlZW5cclxuICAgICAgICB0aGlzLnNjYWxlLnNjYWxlTW9kZSA9IFBoYXNlci5TY2FsZU1hbmFnZXIuU0hPV19BTEw7XHJcbiAgICAgICAgdGhpcy5zY2FsZS5mdWxsU2NyZWVuU2NhbGVNb2RlID0gUGhhc2VyLlNjYWxlTWFuYWdlci5TSE9XX0FMTDtcclxuICAgICAgICB0aGlzLnNjYWxlLnBhZ2VBbGlnbkhvcml6b250YWxseSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zY2FsZS5wYWdlQWxpZ25WZXJ0aWNhbGx5ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNjYWxlLmZvcmNlTGFuZHNjYXBlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmdhbWUuc2NhbGUud2luZG93Q29uc3RyYWludHMuYm90dG9tID0gJ3Zpc3VhbCc7IC8vIG1ha2Ugc3VyZSBpdCBkb2Vzbid0IGdvIG92ZXIgc2NyZWVuIGhlaWdodFxyXG4gICAgICAgIHRoaXMuZ2FtZS5zY2FsZS5yZWZyZXNoKCk7XHJcblxyXG4gICAgICAgIC8vIGtlZXAgcGl4ZWxzIHNoYXJwXHJcbiAgICAgICAgdGhpcy5nYW1lLmFudGlhbGlhcyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5zdGFnZS5zbW9vdGhlZCA9IGZhbHNlO1xyXG4gICAgICAgIFBoYXNlci5DYW52YXMuc2V0SW1hZ2VSZW5kZXJpbmdDcmlzcCh0aGlzLmdhbWUuY2FudmFzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZS5zdGF0ZS5zdGFydCgnZ2FtZScpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IEJvb3RTdGF0ZSBmcm9tICcuL0Jvb3RTdGF0ZSc7XHJcbmltcG9ydCBHYW1lU3RhdGUgZnJvbSAnLi9HYW1lU3RhdGUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWNzUG9uZyB7XHJcbiAgICBwcml2YXRlIF9nYW1lOiBQaGFzZXIuR2FtZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9nYW1lID0gbmV3IFBoYXNlci5HYW1lKHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMjQsXHJcbiAgICAgICAgICAgIGhlaWdodDogNTc2LFxyXG4gICAgICAgICAgICByZW5kZXJlcjogUGhhc2VyLkFVVE8sXHJcbiAgICAgICAgICAgIHBhcmVudDogJ2dhbWUtY29udGFpbmVyJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLl9nYW1lLnN0YXRlLmFkZCgnYm9vdCcsIG5ldyBCb290U3RhdGUoKSk7XHJcbiAgICAgICAgdGhpcy5fZ2FtZS5zdGF0ZS5hZGQoJ2dhbWUnLCBuZXcgR2FtZVN0YXRlKCkpO1xyXG4gICAgICAgIHRoaXMuX2dhbWUuc3RhdGUuc3RhcnQoJ2Jvb3QnKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEJhc2VXb3JsZCB9IGZyb20gJy4vYmFzZS9pbmRleCc7XHJcbmltcG9ydCB7IEJhc2VFbnRpdHlQb29sIH0gZnJvbSAnLi9iYXNlL2luZGV4JztcclxuaW1wb3J0IHsgQmFzZVN5c3RlbUNvbGxlY3Rpb24gfSBmcm9tICcuL2Jhc2UvaW5kZXgnO1xyXG5pbXBvcnQgeyBTY29yZSB9IGZyb20gJy4vc2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gJy4vcG9zaXRpb24vaW5kZXgnO1xyXG5pbXBvcnQgeyBCaXRtYXBGb250IH0gZnJvbSAnLi9iaXRtYXBUZXh0L2luZGV4JztcclxuaW1wb3J0IHsgUGhhc2VyQml0bWFwVGV4dFN5c3RlbSB9IGZyb20gJy4vYml0bWFwVGV4dC9pbmRleCc7XHJcbmltcG9ydCB7IExvYWQgfSBmcm9tICcuL2Jhc2UvaW5kZXgnO1xyXG5pbXBvcnQgeyBTdGFydCB9IGZyb20gJy4vYmFzZS9pbmRleCc7XHJcbmltcG9ydCB7IFBoYXNlRXhlY3V0ZSB9IGZyb20gJy4vYmFzZS9pbmRleCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lU3RhdGUgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xyXG4gICAgcHJpdmF0ZSBlY3M6IEJhc2VXb3JsZDtcclxuXHJcbiAgICBpbml0KCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGZvbnQgPSBuZXcgQml0bWFwRm9udCgnUHJlc3MgU3RhcnQgMlAnLCAnZm9udHMvUHJlc3NfU3RhcnRfMlBfMC5wbmcnLCAnZm9udHMvUHJlc3NfU3RhcnRfMlAuZm50Jyk7XHJcbiAgICAgICAgY29uc3QgY2hhclNpemUgPSAzMjtcclxuICAgICAgICBjb25zdCBlbnRpdGllcyA9IG5ldyBCYXNlRW50aXR5UG9vbCgpXHJcbiAgICAgICAgICAgIC5jcmVhdGVNYW55KFtcclxuICAgICAgICAgICAgICAgIG5ldyBTY29yZShcclxuICAgICAgICAgICAgICAgICAgICBuZXcgUG9zaXRpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMjUgKiB0aGlzLmdhbWUud29ybGQud2lkdGggLSAyICogY2hhclNpemUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDQgKiBjaGFyU2l6ZVxyXG4gICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udCxcclxuICAgICAgICAgICAgICAgICAgICBjaGFyU2l6ZVxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIG5ldyBTY29yZShcclxuICAgICAgICAgICAgICAgICAgICBuZXcgUG9zaXRpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNzUgKiB0aGlzLmdhbWUud29ybGQud2lkdGggLSAyICogY2hhclNpemUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDQgKiBjaGFyU2l6ZVxyXG4gICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udCxcclxuICAgICAgICAgICAgICAgICAgICBjaGFyU2l6ZSlcclxuICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgdGhpcy5lY3MgPSBuZXcgQmFzZVdvcmxkKFxyXG4gICAgICAgICAgICBlbnRpdGllcyxcclxuICAgICAgICAgICAgbmV3IEJhc2VTeXN0ZW1Db2xsZWN0aW9uKFtcclxuICAgICAgICAgICAgICAgIG5ldyBQaGFzZXJCaXRtYXBUZXh0U3lzdGVtKGVudGl0aWVzLCB0aGlzLmdhbWUubG9hZCwgdGhpcy5nYW1lLmFkZClcclxuICAgICAgICAgICAgXSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHByZWxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgbmV3IFBoYXNlRXhlY3V0ZSh0aGlzLmVjcy5zeXN0ZW1zKCksIExvYWQuSUQpXHJcbiAgICAgICAgICAgIC5leGVjdXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlKCk6IHZvaWQge1xyXG4gICAgICAgIG5ldyBQaGFzZUV4ZWN1dGUodGhpcy5lY3Muc3lzdGVtcygpLCBTdGFydC5JRClcclxuICAgICAgICAgICAgLmV4ZWN1dGUoKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IENvbXBvbmVudElkIH0gZnJvbSAnLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCBCYXNlSWQgZnJvbSAnLi9CYXNlSWQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZUNvbXBvbmVudElkIGV4dGVuZHMgQmFzZUlkIGltcGxlbWVudHMgQ29tcG9uZW50SWQge1xyXG59IiwiaW1wb3J0IHsgRW50aXR5IH0gZnJvbSAnLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IEVudGl0eUlkIH0gZnJvbSAnLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRJZCB9IGZyb20gJy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgQ29tcG9uZW50Tm90Rm91bmRFcnJvciBmcm9tICcuL0NvbXBvbmVudE5vdEZvdW5kRXJyb3InO1xyXG5pbXBvcnQgQ29tcG9uZW50RHVwbGljYXRlRXJyb3IgZnJvbSAnLi9Db21wb25lbnREdXBsaWNhdGVFcnJvcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlRW50aXR5IGltcGxlbWVudHMgRW50aXR5IHtcclxuICAgIHByaXZhdGUgZW50aXR5SWQ6IEVudGl0eUlkO1xyXG4gICAgcHJpdmF0ZSBjb21wb25lbnRzOiBNYXA8Q29tcG9uZW50SWQsIENvbXBvbmVudD47XHJcblxyXG4gICAgY29uc3RydWN0b3IgKFxyXG4gICAgICAgIGlkOiBFbnRpdHlJZCxcclxuICAgICAgICBjb21wb25lbnRzOiBNYXA8Q29tcG9uZW50SWQsIENvbXBvbmVudD4gPSBuZXcgTWFwKClcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IGNvbXBvbmVudHM7XHJcbiAgICAgICAgdGhpcy5lbnRpdHlJZCA9IGlkO1xyXG4gICAgfVxyXG5cclxuICAgIGlkKCk6IEVudGl0eUlkIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbnRpdHlJZDtcclxuICAgIH1cclxuXHJcbiAgICBhdHRhY2goY29tcG9uZW50OiBDb21wb25lbnQpOiBFbnRpdHkge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbXBvbmVudHMuaGFzKGNvbXBvbmVudC5pZCgpKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgQ29tcG9uZW50RHVwbGljYXRlRXJyb3IoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLnNldChjb21wb25lbnQuaWQoKSwgY29tcG9uZW50KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgYXR0YWNoTWFueShjb21wb25lbnRzOiBDb21wb25lbnRbXSk6IEVudGl0eSB7XHJcbiAgICAgICAgY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYXR0YWNoKGNvbXBvbmVudCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGhhcyhjb21wb25lbnRzOiBDb21wb25lbnRJZFtdKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHMuZXZlcnkoaWQgPT4gdGhpcy5jb21wb25lbnRzLmhhcyhpZCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldDxUIGV4dGVuZHMgQ29tcG9uZW50Pihjb21wb25lbnQ6IENvbXBvbmVudElkKTogVCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNvbXBvbmVudHMuaGFzKGNvbXBvbmVudCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IENvbXBvbmVudE5vdEZvdW5kRXJyb3IoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudHMuZ2V0KGNvbXBvbmVudCkgYXMgVDtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBFbnRpdHlJZCB9IGZyb20gJy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgQmFzZUlkIGZyb20gJy4vQmFzZUlkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VFbnRpdHlJZCBleHRlbmRzIEJhc2VJZCBpbXBsZW1lbnRzIEVudGl0eUlkIHtcclxufSIsImltcG9ydCB7IEVudGl0eSB9IGZyb20gJy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBFbnRpdHlJZCB9IGZyb20gJy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBFbnRpdHlQb29sIH0gZnJvbSAnLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFByZWZhYiB9IGZyb20gJy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQ29tcG9uZW50SWQgfSBmcm9tICcuLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IEJhc2VFbnRpdHkgZnJvbSAnLi9CYXNlRW50aXR5JztcclxuaW1wb3J0IEJhc2VFbnRpdHlJZCBmcm9tICcuL0Jhc2VFbnRpdHlJZCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlRW50aXR5UG9vbCBpbXBsZW1lbnRzIEVudGl0eVBvb2wge1xyXG4gICAgcHJpdmF0ZSBwb29sOiBFbnRpdHlbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnBvb2wgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldE5ld0lkKCk6IEVudGl0eUlkIHtcclxuICAgICAgICByZXR1cm4gbmV3IEJhc2VFbnRpdHlJZCh0aGlzLnBvb2wubGVuZ3RoICsgJycpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZShjb21wb25lbnRzPzogQ29tcG9uZW50W10pOiBFbnRpdHkge1xyXG4gICAgICAgIGNvbnN0IGVudGl0eSA9IG5ldyBCYXNlRW50aXR5KFxyXG4gICAgICAgICAgICB0aGlzLmdldE5ld0lkKCksXHJcbiAgICAgICAgICAgIG5ldyBNYXAoXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzLm1hcChjb21wb25lbnQgPT4gW2NvbXBvbmVudC5pZCgpLCBjb21wb25lbnRdIGFzIFtDb21wb25lbnRJZCwgQ29tcG9uZW50XSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5wb29sLnB1c2goZW50aXR5KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGVudGl0eTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVNYW55KHByZWZhYnM6IFByZWZhYltdKTogRW50aXR5UG9vbCB7XHJcbiAgICAgICAgcHJlZmFicy5mb3JFYWNoKHByZWZhYiA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlKFxyXG4gICAgICAgICAgICAgICAgcHJlZmFiLmNyZWF0ZSgpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGVudGl0aWVzKCk6IEVudGl0eVtdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wb29sO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7IElkIH0gZnJvbSAnLi4vY29yZS9pbmRleCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlSWQgaW1wbGVtZW50cyBJZCB7XHJcbiAgICBwcml2YXRlIGlkOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaWQ6IElkIHwgc3RyaW5nIHwgbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IChpZCBpbnN0YW5jZW9mIE9iamVjdCkgP1xyXG4gICAgICAgICAgICAoaWQgYXMgSWQpLnByaW50KCkgOlxyXG4gICAgICAgICAgICBpZCArICcnO1xyXG4gICAgfVxyXG5cclxuICAgIHByaW50KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQ7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBDb21wb25lbnRJZCB9IGZyb20gJy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgQmFzZUlkIGZyb20gJy4vQmFzZUlkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VQaGFzZUlkIGV4dGVuZHMgQmFzZUlkIGltcGxlbWVudHMgQ29tcG9uZW50SWQge1xyXG59IiwiaW1wb3J0IHsgUGhhc2VQb29sIH0gZnJvbSAnLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFBoYXNlIH0gZnJvbSAnLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFBoYXNlSWQgfSBmcm9tICcuLi9jb3JlL2luZGV4JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VQaGFzZVBvb2wgaW1wbGVtZW50cyBQaGFzZVBvb2wge1xyXG4gICAgcHJpdmF0ZSBwaGFzZXM6IE1hcDxQaGFzZUlkLCBQaGFzZT47XHJcblxyXG4gICAgY29uc3RydWN0b3IocGhhc2VzOiBQaGFzZVtdIHwgTWFwPFBoYXNlSWQsIFBoYXNlPikge1xyXG4gICAgICAgIHRoaXMucGhhc2VzID0gKHBoYXNlcyBpbnN0YW5jZW9mIE1hcCkgPyBwaGFzZXMgOlxyXG4gICAgICAgICAgICBuZXcgTWFwKFxyXG4gICAgICAgICAgICAgICAgcGhhc2VzLm1hcChwaGFzZSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIFtwaGFzZS5pZCgpLCBwaGFzZV0gYXMgW1BoYXNlSWQsIFBoYXNlXVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGhhcyhpZDogUGhhc2VJZCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBoYXNlcy5oYXMoaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldDxUIGV4dGVuZHMgUGhhc2U+KGlkOiBQaGFzZUlkKTogVCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGhhc2VzLmdldChpZCkgYXMgVDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFBoYXNlUG9vbCB9IGZyb20gJy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBTeXN0ZW0gfSBmcm9tICcuLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgUGhhc2UgfSBmcm9tICcuLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgUGhhc2VJZCB9IGZyb20gJy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBCYXNlUGhhc2VQb29sIH0gZnJvbSAnLi4vYmFzZS9pbmRleCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlU3lzdGVtIGltcGxlbWVudHMgU3lzdGVtIHtcclxuICAgIHByaXZhdGUgcGhhc2VQb29sOiBQaGFzZVBvb2w7XHJcblxyXG4gICAgY29uc3RydWN0b3IocGhhc2VzOiBQaGFzZVBvb2wgfCBQaGFzZVtdIHwgTWFwPFBoYXNlSWQsIFBoYXNlPikge1xyXG4gICAgICAgIHRoaXMucGhhc2VQb29sID0gKHBoYXNlcyBpbnN0YW5jZW9mIEFycmF5IHx8IHBoYXNlcyBpbnN0YW5jZW9mIE1hcCkgP1xyXG4gICAgICAgICAgICBuZXcgQmFzZVBoYXNlUG9vbChwaGFzZXMpIDpcclxuICAgICAgICAgICAgcGhhc2VzO1xyXG4gICAgfVxyXG5cclxuICAgIHBoYXNlcygpOiBQaGFzZVBvb2wge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBoYXNlUG9vbDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEVudGl0eSB9IGZyb20gJy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBFbnRpdHlQb29sIH0gZnJvbSAnLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFN5c3RlbSB9IGZyb20gJy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBTeXN0ZW1Db2xsZWN0aW9uIH0gZnJvbSAnLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFBoYXNlSWQgfSBmcm9tICcuLi9jb3JlL2luZGV4JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VTeXN0ZW1Db2xsZWN0aW9uIGltcGxlbWVudHMgU3lzdGVtQ29sbGVjdGlvbiB7XHJcbiAgICBwcml2YXRlIHN5c3RlbXM6IFN5c3RlbVtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHN5c3RlbXM/OiBTeXN0ZW1bXSkge1xyXG4gICAgICAgIHRoaXMuc3lzdGVtcyA9IHN5c3RlbXMgfHwgW107XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXIoc3lzdGVtOiBTeXN0ZW0pOiBTeXN0ZW1Db2xsZWN0aW9uIHtcclxuICAgICAgICB0aGlzLnN5c3RlbXMucHVzaChzeXN0ZW0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3Rlck1hbnkoc3lzdGVtczogU3lzdGVtW10pOiBTeXN0ZW1Db2xsZWN0aW9uIHtcclxuICAgICAgICBzeXN0ZW1zLmZvckVhY2goc3lzdGVtID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZWdpc3RlcihzeXN0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBmaWx0ZXIoaWQ6IFBoYXNlSWQpOiBTeXN0ZW1bXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3lzdGVtcy5maWx0ZXIoc3lzdGVtID0+XHJcbiAgICAgICAgICAgIHN5c3RlbS5waGFzZXMoKS5oYXMoaWQpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEVudGl0eVBvb2wgfSBmcm9tICcuLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgU3lzdGVtQ29sbGVjdGlvbiB9IGZyb20gJy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBXb3JsZCB9IGZyb20gJy4uL2NvcmUvaW5kZXgnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZVdvcmxkIGltcGxlbWVudHMgV29ybGQge1xyXG4gICAgcHJpdmF0ZSBlbnRpdHlQb29sOiBFbnRpdHlQb29sO1xyXG4gICAgcHJpdmF0ZSBzeXN0ZW1Db2xsZWN0aW9uOiBTeXN0ZW1Db2xsZWN0aW9uO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVudGl0aWVzOiBFbnRpdHlQb29sLCBzeXN0ZW1zOiBTeXN0ZW1Db2xsZWN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5lbnRpdHlQb29sID0gZW50aXRpZXM7XHJcbiAgICAgICAgdGhpcy5zeXN0ZW1Db2xsZWN0aW9uID0gc3lzdGVtcztcclxuICAgIH1cclxuXHJcbiAgICBlbnRpdGllcygpOiBFbnRpdHlQb29sIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbnRpdHlQb29sO1xyXG4gICAgfVxyXG5cclxuICAgIHN5c3RlbXMoKTogU3lzdGVtQ29sbGVjdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3lzdGVtQ29sbGVjdGlvbjtcclxuICAgIH1cclxufSIsImltcG9ydCB7IER1cGxpY2F0ZUVycm9yIH0gZnJvbSAnLi4vc3lzdGVtL2luZGV4JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudER1cGxpY2F0ZUVycm9yIGV4dGVuZHMgRHVwbGljYXRlRXJyb3Ige1xyXG4gICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHtcclxuICAgICAgICBzdXBlciguLi5hcmdzKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IE5vdEZvdW5kRXJyb3IgfSBmcm9tICcuLi9zeXN0ZW0vaW5kZXgnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50Tm90Rm91bmRFcnJvciBleHRlbmRzIE5vdEZvdW5kRXJyb3Ige1xyXG4gICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHtcclxuICAgICAgICBzdXBlciguLi5hcmdzKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFNlYXJjaCB9IGZyb20gJy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQ29tcG9uZW50SWQgfSBmcm9tICcuLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgRW50aXR5UG9vbCB9IGZyb20gJy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBFbnRpdHkgfSBmcm9tICcuLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IEVudGl0eVNlYXJjaCBmcm9tICcuL0VudGl0eVNlYXJjaCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnRTZWFyY2g8VCBleHRlbmRzIENvbXBvbmVudD4gaW1wbGVtZW50cyBTZWFyY2g8VD4ge1xyXG4gICAgcHJpdmF0ZSBpZDogQ29tcG9uZW50SWQ7XHJcbiAgICBwcml2YXRlIGVudGl0eVNlYXJjaDogRW50aXR5U2VhcmNoO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIGlkOiBDb21wb25lbnRJZCxcclxuICAgICAgICBlbnRpdHlTZWFyY2g6IEVudGl0eVNlYXJjaCA9IG5ldyBFbnRpdHlTZWFyY2goaWQpXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5lbnRpdHlTZWFyY2ggPSBlbnRpdHlTZWFyY2g7XHJcbiAgICB9XHJcblxyXG4gICAgZmluZChwb29sOiBFbnRpdHlQb29sKTogVFtdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbnRpdHlTZWFyY2guZmluZChwb29sKVxyXG4gICAgICAgICAgICAubWFwKGVudGl0eSA9PiBlbnRpdHkuZ2V0PFQ+KHRoaXMuaWQpKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEVudGl0eSB9IGZyb20gJy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBFbnRpdHlQb29sIH0gZnJvbSAnLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRJZCB9IGZyb20gJy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBTZWFyY2ggfSBmcm9tICcuLi9jb3JlL2luZGV4JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVudGl0eVNlYXJjaCBpbXBsZW1lbnRzIFNlYXJjaDxFbnRpdHk+IHtcclxuICAgIHByaXZhdGUgaWRzOiBDb21wb25lbnRJZFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGlkczogQ29tcG9uZW50SWRbXSB8IENvbXBvbmVudElkKSB7XHJcbiAgICAgICAgdGhpcy5pZHMgPSAoaWRzICYmIGlkcy5jb25zdHJ1Y3RvciA9PT0gQXJyYXkpID9cclxuICAgICAgICAgICAgaWRzIGFzIENvbXBvbmVudElkW10gOlxyXG4gICAgICAgICAgICBbaWRzIGFzIENvbXBvbmVudElkXTtcclxuICAgIH1cclxuXHJcbiAgICBmaW5kKHBvb2w6IEVudGl0eVBvb2wpOiBFbnRpdHlbXSB7XHJcbiAgICAgICAgcmV0dXJuIHBvb2wuZW50aXRpZXMoKVxyXG4gICAgICAgICAgICAuZmlsdGVyKGVudGl0eSA9PiBlbnRpdHkuaGFzKHRoaXMuaWRzKSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBQaGFzZSB9IGZyb20gJy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBQaGFzZUlkIH0gZnJvbSAnLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCBCYXNlUGhhc2VJZCBmcm9tICcuL0Jhc2VQaGFzZUlkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIExvYWQgaW1wbGVtZW50cyBQaGFzZSB7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IElEID0gbmV3IEJhc2VQaGFzZUlkKExvYWQubmFtZSk7XHJcblxyXG4gICAgaWQoKTogUGhhc2VJZCB7XHJcbiAgICAgICAgcmV0dXJuIExvYWQuSUQ7XHJcbiAgICB9XHJcblxyXG4gICAgYWJzdHJhY3QgZXhlY3V0ZSgpOiB2b2lkO1xyXG59IiwiaW1wb3J0IHsgU3lzdGVtQ29sbGVjdGlvbiB9IGZyb20gJy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBQaGFzZUlkIH0gZnJvbSAnLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCBQaGFzZVNlYXJjaCBmcm9tICcuL1BoYXNlU2VhcmNoJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBoYXNlRXhlY3V0ZSB7XHJcbiAgICBwcml2YXRlIHN5c3RlbXM6IFN5c3RlbUNvbGxlY3Rpb247XHJcbiAgICBwcml2YXRlIHNlYXJjaDogUGhhc2VTZWFyY2g7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc3lzdGVtczogU3lzdGVtQ29sbGVjdGlvbiwgc2VhcmNoOiBQaGFzZVNlYXJjaCB8IFBoYXNlSWQpIHtcclxuICAgICAgICB0aGlzLnN5c3RlbXMgPSBzeXN0ZW1zO1xyXG4gICAgICAgIHRoaXMuc2VhcmNoID0gKHNlYXJjaCBpbnN0YW5jZW9mIFBoYXNlU2VhcmNoKSA/IHNlYXJjaCA6IG5ldyBQaGFzZVNlYXJjaChzZWFyY2gpO1xyXG4gICAgfVxyXG5cclxuICAgIGV4ZWN1dGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZWFyY2guZmluZCh0aGlzLnN5c3RlbXMpXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKHBoYXNlID0+IHBoYXNlLmV4ZWN1dGUoKSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBTeXN0ZW1TZWFyY2ggfSBmcm9tICcuLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgU3lzdGVtQ29sbGVjdGlvbiB9IGZyb20gJy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBQaGFzZSB9IGZyb20gJy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBQaGFzZUlkIH0gZnJvbSAnLi4vY29yZS9pbmRleCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQaGFzZVNlYXJjaCBpbXBsZW1lbnRzIFN5c3RlbVNlYXJjaDxQaGFzZT4ge1xyXG4gICAgcHJpdmF0ZSBpZDogUGhhc2VJZDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpZDogUGhhc2VJZCkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIH1cclxuXHJcbiAgICBmaW5kKHN5c3RlbXM6IFN5c3RlbUNvbGxlY3Rpb24pOiBQaGFzZVtdIHtcclxuICAgICAgICByZXR1cm4gc3lzdGVtcy5maWx0ZXIodGhpcy5pZClcclxuICAgICAgICAgICAgLm1hcChzeXN0ZW0gPT4gc3lzdGVtLnBoYXNlcygpLmdldCh0aGlzLmlkKSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBQaGFzZSB9IGZyb20gJy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBQaGFzZUlkIH0gZnJvbSAnLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCBCYXNlUGhhc2VJZCBmcm9tICcuL0Jhc2VQaGFzZUlkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIFN0YXJ0IGltcGxlbWVudHMgUGhhc2Uge1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBJRCA9IG5ldyBCYXNlUGhhc2VJZChTdGFydC5uYW1lKTtcclxuXHJcbiAgICBpZCgpOiBQaGFzZUlkIHtcclxuICAgICAgICByZXR1cm4gU3RhcnQuSUQ7XHJcbiAgICB9XHJcblxyXG4gICAgYWJzdHJhY3QgZXhlY3V0ZSgpOiB2b2lkO1xyXG59IiwiaW1wb3J0IEJhc2VDb21wb25lbnRJZCBmcm9tICcuL0Jhc2VDb21wb25lbnRJZCc7XHJcbmltcG9ydCBCYXNlRW50aXR5IGZyb20gJy4vQmFzZUVudGl0eSc7XHJcbmltcG9ydCBCYXNlRW50aXR5SWQgZnJvbSAnLi9CYXNlRW50aXR5SWQnO1xyXG5pbXBvcnQgQmFzZUVudGl0eVBvb2wgZnJvbSAnLi9CYXNlRW50aXR5UG9vbCc7XHJcbmltcG9ydCBCYXNlSWQgZnJvbSAnLi9CYXNlSWQnO1xyXG5pbXBvcnQgQmFzZVBoYXNlSWQgZnJvbSAnLi9CYXNlUGhhc2VJZCc7XHJcbmltcG9ydCBCYXNlUGhhc2VQb29sIGZyb20gJy4vQmFzZVBoYXNlUG9vbCc7XHJcbmltcG9ydCBCYXNlU3lzdGVtIGZyb20gJy4vQmFzZVN5c3RlbSc7XHJcbmltcG9ydCBCYXNlU3lzdGVtQ29sbGVjdGlvbiBmcm9tICcuL0Jhc2VTeXN0ZW1Db2xsZWN0aW9uJztcclxuaW1wb3J0IEJhc2VXb3JsZCBmcm9tICcuL0Jhc2VXb3JsZCc7XHJcbmltcG9ydCBDb21wb25lbnREdXBsaWNhdGVFcnJvciBmcm9tICcuL0NvbXBvbmVudER1cGxpY2F0ZUVycm9yJztcclxuaW1wb3J0IENvbXBvbmVudE5vdEZvdW5kRXJyb3IgZnJvbSAnLi9Db21wb25lbnROb3RGb3VuZEVycm9yJztcclxuaW1wb3J0IENvbXBvbmVudFNlYXJjaCBmcm9tICcuL0NvbXBvbmVudFNlYXJjaCc7XHJcbmltcG9ydCBFbnRpdHlTZWFyY2ggZnJvbSAnLi9FbnRpdHlTZWFyY2gnO1xyXG5pbXBvcnQgTG9hZCBmcm9tICcuL0xvYWQnO1xyXG5pbXBvcnQgUGhhc2VFeGVjdXRlIGZyb20gJy4vUGhhc2VFeGVjdXRlJztcclxuaW1wb3J0IFBoYXNlU2VhcmNoIGZyb20gJy4vUGhhc2VTZWFyY2gnO1xyXG5pbXBvcnQgU3RhcnQgZnJvbSAnLi9TdGFydCc7XHJcblxyXG5leHBvcnQge1xyXG4gICAgQmFzZUNvbXBvbmVudElkLFxyXG4gICAgQmFzZUVudGl0eSxcclxuICAgIEJhc2VFbnRpdHlJZCxcclxuICAgIEJhc2VFbnRpdHlQb29sLFxyXG4gICAgQmFzZUlkLFxyXG4gICAgQmFzZVBoYXNlSWQsXHJcbiAgICBCYXNlUGhhc2VQb29sLFxyXG4gICAgQmFzZVN5c3RlbSxcclxuICAgIEJhc2VTeXN0ZW1Db2xsZWN0aW9uLFxyXG4gICAgQmFzZVdvcmxkLFxyXG4gICAgQ29tcG9uZW50RHVwbGljYXRlRXJyb3IsXHJcbiAgICBDb21wb25lbnROb3RGb3VuZEVycm9yLFxyXG4gICAgQ29tcG9uZW50U2VhcmNoLFxyXG4gICAgRW50aXR5U2VhcmNoLFxyXG4gICAgTG9hZCxcclxuICAgIFBoYXNlRXhlY3V0ZSxcclxuICAgIFBoYXNlU2VhcmNoLFxyXG4gICAgU3RhcnRcclxufTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBCaXRtYXBGb250IHtcclxuICAgIHByaXZhdGUga2V5OiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIGltYWdlUGF0aDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBhdGxhc1BhdGg6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihrZXk6IHN0cmluZywgaW1hZ2VQYXRoOiBzdHJpbmcsIGF0bGFzUGF0aDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5rZXkgPSBrZXk7XHJcbiAgICAgICAgdGhpcy5pbWFnZVBhdGggPSBpbWFnZVBhdGg7XHJcbiAgICAgICAgdGhpcy5hdGxhc1BhdGggPSBhdGxhc1BhdGg7XHJcbiAgICB9XHJcblxyXG4gICAgaWQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5rZXk7XHJcbiAgICB9XHJcblxyXG4gICAgaW1hZ2UoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbWFnZVBhdGg7XHJcbiAgICB9XHJcblxyXG4gICAgYXRsYXMoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hdGxhc1BhdGg7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBFbnRpdHlQb29sIH0gZnJvbSAnLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFNlYXJjaCB9IGZyb20gJy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRTZWFyY2ggfSBmcm9tICcuLi9iYXNlL2luZGV4JztcclxuaW1wb3J0IEJpdG1hcEZvbnQgZnJvbSAnLi9CaXRtYXBGb250JztcclxuaW1wb3J0IEJpdG1hcFRleHQgZnJvbSAnLi9CaXRtYXBUZXh0JztcclxuaW1wb3J0IEJpdG1hcFRleHRTZWFyY2ggZnJvbSAnLi9CaXRtYXBUZXh0U2VhcmNoJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJpdG1hcEZvbnRTZWFyY2ggaW1wbGVtZW50cyBTZWFyY2g8Qml0bWFwRm9udD4ge1xyXG4gICAgcHJpdmF0ZSBzZWFyY2g6IENvbXBvbmVudFNlYXJjaDxCaXRtYXBUZXh0PjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzZWFyY2g6IENvbXBvbmVudFNlYXJjaDxCaXRtYXBUZXh0PiA9IG5ldyBCaXRtYXBUZXh0U2VhcmNoKCkpIHtcclxuICAgICAgICB0aGlzLnNlYXJjaCA9IHNlYXJjaDtcclxuICAgIH1cclxuXHJcbiAgICBmaW5kKHBvb2w6IEVudGl0eVBvb2wpOiBCaXRtYXBGb250W10ge1xyXG4gICAgICAgIHJldHVybiBbLi4ubmV3IFNldCgvLyB1bmlxdWUgc2V0XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoLmZpbmQocG9vbClcclxuICAgICAgICAgICAgICAgIC5tYXAodGV4dCA9PiB0ZXh0LmZvbnQoKSlcclxuICAgICAgICApXTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRJZCB9IGZyb20gJy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50SWQgfSBmcm9tICcuLi9iYXNlL2luZGV4JztcclxuaW1wb3J0IHsgUG9zaXRpb24gfSBmcm9tICcuLi9wb3NpdGlvbi9pbmRleCc7XHJcbmltcG9ydCBCaXRtYXBGb250IGZyb20gJy4vQml0bWFwRm9udCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCaXRtYXBUZXh0IGltcGxlbWVudHMgQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgSUQgPSBuZXcgQmFzZUNvbXBvbmVudElkKEJpdG1hcFRleHQubmFtZSk7XHJcblxyXG4gICAgcHJpdmF0ZSB0ZXh0UG9zaXRpb246IFBvc2l0aW9uO1xyXG4gICAgcHJpdmF0ZSB0ZXh0Rm9udDogQml0bWFwRm9udDtcclxuICAgIHByaXZhdGUgdGV4dFNpemU6IG51bWJlcjtcclxuICAgIHByaXZhdGUgdGV4dDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uOiBQb3NpdGlvbiwgZm9udDogQml0bWFwRm9udCwgc2l6ZTogbnVtYmVyLCB0ZXh0OiBzdHJpbmcgPSAnJykge1xyXG4gICAgICAgIHRoaXMudGV4dFBvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICAgICAgdGhpcy50ZXh0Rm9udCA9IGZvbnQ7XHJcbiAgICAgICAgdGhpcy50ZXh0U2l6ZSA9IHNpemU7XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcclxuICAgIH1cclxuXHJcbiAgICBpZCgpOiBDb21wb25lbnRJZCB7XHJcbiAgICAgICAgcmV0dXJuIEJpdG1hcFRleHQuSUQ7XHJcbiAgICB9XHJcblxyXG4gICAgcG9zaXRpb24oKTogUG9zaXRpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRleHRQb3NpdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBmb250KCk6IEJpdG1hcEZvbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRleHRGb250O1xyXG4gICAgfVxyXG5cclxuICAgIHNpemUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50ZXh0U2l6ZTtcclxuICAgIH1cclxuXHJcbiAgICB2YWx1ZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKHZhbHVlOiBzdHJpbmcpOiBCaXRtYXBUZXh0IHtcclxuICAgICAgICB0aGlzLnRleHQgPSB2YWx1ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHsgRW50aXR5U2VhcmNoIH0gZnJvbSAnLi4vYmFzZS9pbmRleCc7XHJcbmltcG9ydCB7IENvbXBvbmVudFNlYXJjaCB9IGZyb20gJy4uL2Jhc2UvaW5kZXgnO1xyXG5pbXBvcnQgQml0bWFwVGV4dCBmcm9tICcuL0JpdG1hcFRleHQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQml0bWFwVGV4dFNlYXJjaCBleHRlbmRzIENvbXBvbmVudFNlYXJjaDxCaXRtYXBUZXh0PiB7XHJcbiAgICBjb25zdHJ1Y3RvcihlbnRpdHlTZWFyY2g6IEVudGl0eVNlYXJjaCA9IG5ldyBFbnRpdHlTZWFyY2goQml0bWFwVGV4dC5JRCkpIHtcclxuICAgICAgICBzdXBlcihCaXRtYXBUZXh0LklELCBlbnRpdHlTZWFyY2gpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IEJpdG1hcEZvbnQgZnJvbSAnLi9CaXRtYXBGb250JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBoYXNlckJpdG1hcEZvbnRMb2FkIHtcclxuICAgIHByaXZhdGUgbG9hZGVyOiBQaGFzZXIuTG9hZGVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGxvYWRlcjogUGhhc2VyLkxvYWRlcikge1xyXG4gICAgICAgIHRoaXMubG9hZGVyID0gbG9hZGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWQoZm9udHM6IEJpdG1hcEZvbnRbXSk6IFBoYXNlckJpdG1hcEZvbnRMb2FkIHtcclxuICAgICAgICBmb250cy5mb3JFYWNoKGZvbnQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRlci5iaXRtYXBGb250KFxyXG4gICAgICAgICAgICAgICAgZm9udC5pZCgpLFxyXG4gICAgICAgICAgICAgICAgZm9udC5pbWFnZSgpLFxyXG4gICAgICAgICAgICAgICAgZm9udC5hdGxhcygpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IEJpdG1hcFRleHQgZnJvbSAnLi9CaXRtYXBUZXh0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJpdG1hcFRleHRGYWN0b3J5IHtcclxuICAgIHByaXZhdGUgZmFjdG9yeTogUGhhc2VyLkdhbWVPYmplY3RGYWN0b3J5O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGZhY3Rvcnk6IFBoYXNlci5HYW1lT2JqZWN0RmFjdG9yeSkge1xyXG4gICAgICAgIHRoaXMuZmFjdG9yeSA9IGZhY3Rvcnk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlKHRleHQ6IEJpdG1hcFRleHQpOiBCaXRtYXBUZXh0RmFjdG9yeSB7XHJcbiAgICAgICAgdGhpcy5mYWN0b3J5LmJpdG1hcFRleHQoXHJcbiAgICAgICAgICAgIE1hdGguZmxvb3IodGV4dC5wb3NpdGlvbigpLngoKSksXHJcbiAgICAgICAgICAgIE1hdGguZmxvb3IodGV4dC5wb3NpdGlvbigpLnkoKSksXHJcbiAgICAgICAgICAgIHRleHQuZm9udCgpLmlkKCksXHJcbiAgICAgICAgICAgIHRleHQudmFsdWUoKSxcclxuICAgICAgICAgICAgdGV4dC5zaXplKClcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufSIsImltcG9ydCB7IExvYWQgfSBmcm9tICcuLi9iYXNlL2luZGV4JztcclxuaW1wb3J0IHsgRW50aXR5UG9vbCB9IGZyb20gJy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgUGhhc2VyQml0bWFwRm9udExvYWQgZnJvbSAnLi9QaGFzZXJCaXRtYXBGb250TG9hZCc7XHJcbmltcG9ydCBCaXRtYXBGb250U2VhcmNoIGZyb20gJy4vQml0bWFwRm9udFNlYXJjaCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQaGFzZXJCaXRtYXBUZXh0TG9hZCBleHRlbmRzIExvYWQge1xyXG4gICAgcHJpdmF0ZSBlbnRpdGllczogRW50aXR5UG9vbDtcclxuICAgIHByaXZhdGUgbG9hZGVyOiBQaGFzZXIuTG9hZGVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVudGl0aWVzOiBFbnRpdHlQb29sLCBsb2FkZXI6IFBoYXNlci5Mb2FkZXIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuZW50aXRpZXMgPSBlbnRpdGllcztcclxuICAgICAgICB0aGlzLmxvYWRlciA9IGxvYWRlcjtcclxuICAgIH1cclxuXHJcbiAgICBleGVjdXRlKCk6IHZvaWQge1xyXG4gICAgICAgIG5ldyBQaGFzZXJCaXRtYXBGb250TG9hZCh0aGlzLmxvYWRlcikubG9hZChcclxuICAgICAgICAgICAgbmV3IEJpdG1hcEZvbnRTZWFyY2goKS5maW5kKHRoaXMuZW50aXRpZXMpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFN0YXJ0IH0gZnJvbSAnLi4vYmFzZS9pbmRleCc7XHJcbmltcG9ydCB7IEVudGl0eVBvb2wgfSBmcm9tICcuLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IEJpdG1hcFRleHRTZWFyY2ggZnJvbSAnLi9CaXRtYXBUZXh0U2VhcmNoJztcclxuaW1wb3J0IFBoYXNlckJpdG1hcFRleHRGYWN0b3J5IGZyb20gJy4vUGhhc2VyQml0bWFwVGV4dEZhY3RvcnknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGhhc2VyQml0bWFwVGV4dFN0YXJ0IGV4dGVuZHMgU3RhcnQge1xyXG4gICAgcHJpdmF0ZSBlbnRpdGllczogRW50aXR5UG9vbDtcclxuICAgIHByaXZhdGUgZmFjdG9yeTogUGhhc2VyLkdhbWVPYmplY3RGYWN0b3J5O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVudGl0aWVzOiBFbnRpdHlQb29sLCBmYWN0b3J5OiBQaGFzZXIuR2FtZU9iamVjdEZhY3RvcnkpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuZW50aXRpZXMgPSBlbnRpdGllcztcclxuICAgICAgICB0aGlzLmZhY3RvcnkgPSBmYWN0b3J5O1xyXG4gICAgfVxyXG5cclxuICAgIGV4ZWN1dGUoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgZmFjdG9yeSA9IG5ldyBQaGFzZXJCaXRtYXBUZXh0RmFjdG9yeSh0aGlzLmZhY3RvcnkpO1xyXG4gICAgICAgIG5ldyBCaXRtYXBUZXh0U2VhcmNoKCkuZmluZCh0aGlzLmVudGl0aWVzKVxyXG4gICAgICAgICAgICAuZm9yRWFjaCh0ZXh0ID0+IHtcclxuICAgICAgICAgICAgICAgIGZhY3RvcnkuY3JlYXRlKHRleHQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFN5c3RlbSB9IGZyb20gJy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBFbnRpdHlQb29sIH0gZnJvbSAnLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFBoYXNlIH0gZnJvbSAnLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFBoYXNlSWQgfSBmcm9tICcuLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQmFzZVN5c3RlbSB9IGZyb20gJy4uL2Jhc2UvaW5kZXgnO1xyXG5pbXBvcnQgeyBCYXNlUGhhc2VQb29sIH0gZnJvbSAnLi4vYmFzZS9pbmRleCc7XHJcbmltcG9ydCBQaGFzZXJCaXRtYXBUZXh0TG9hZCBmcm9tICcuL1BoYXNlckJpdG1hcFRleHRMb2FkJztcclxuaW1wb3J0IFBoYXNlckJpdG1hcFRleHRTdGFydCBmcm9tICcuL1BoYXNlckJpdG1hcFRleHRTdGFydCc7XHJcblxyXG4vKipcclxuICogTG9hZHMgYW5kIGNyZWF0ZXMgYml0bWFwIHRleHQgdXNpbmcgUGhhc2VyLlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGhhc2VyQml0bWFwVGV4dFN5c3RlbSBleHRlbmRzIEJhc2VTeXN0ZW0ge1xyXG4gICAgY29uc3RydWN0b3IoZW50aXRpZXM6IEVudGl0eVBvb2wsIGxvYWRlcjogUGhhc2VyLkxvYWRlciwgZmFjdG9yeTogUGhhc2VyLkdhbWVPYmplY3RGYWN0b3J5KSB7XHJcbiAgICAgICAgc3VwZXIoW1xyXG4gICAgICAgICAgICBuZXcgUGhhc2VyQml0bWFwVGV4dExvYWQoZW50aXRpZXMsIGxvYWRlciksXHJcbiAgICAgICAgICAgIG5ldyBQaGFzZXJCaXRtYXBUZXh0U3RhcnQoZW50aXRpZXMsIGZhY3RvcnkpXHJcbiAgICAgICAgXSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQml0bWFwRm9udCBmcm9tICcuL0JpdG1hcEZvbnQnO1xyXG5pbXBvcnQgQml0bWFwRm9udFNlYXJjaCBmcm9tICcuL0JpdG1hcEZvbnRTZWFyY2gnO1xyXG5pbXBvcnQgQml0bWFwVGV4dCBmcm9tICcuL0JpdG1hcFRleHQnO1xyXG5pbXBvcnQgQml0bWFwVGV4dFNlYXJjaCBmcm9tICcuL0JpdG1hcFRleHRTZWFyY2gnO1xyXG5pbXBvcnQgUGhhc2VyQml0bWFwRm9udExvYWQgZnJvbSAnLi9QaGFzZXJCaXRtYXBGb250TG9hZCc7XHJcbmltcG9ydCBQaGFzZXJCaXRtYXBUZXh0RmFjdG9yeSBmcm9tICcuL1BoYXNlckJpdG1hcFRleHRGYWN0b3J5JztcclxuaW1wb3J0IFBoYXNlckJpdG1hcFRleHRMb2FkIGZyb20gJy4vUGhhc2VyQml0bWFwVGV4dExvYWQnO1xyXG5pbXBvcnQgUGhhc2VyQml0bWFwVGV4dFN0YXJ0IGZyb20gJy4vUGhhc2VyQml0bWFwVGV4dFN0YXJ0JztcclxuaW1wb3J0IFBoYXNlckJpdG1hcFRleHRTeXN0ZW0gZnJvbSAnLi9QaGFzZXJCaXRtYXBUZXh0U3lzdGVtJztcclxuXHJcbmV4cG9ydCB7XHJcbiAgICBCaXRtYXBGb250LFxyXG4gICAgQml0bWFwRm9udFNlYXJjaCxcclxuICAgIEJpdG1hcFRleHQsXHJcbiAgICBCaXRtYXBUZXh0U2VhcmNoLFxyXG4gICAgUGhhc2VyQml0bWFwRm9udExvYWQsXHJcbiAgICBQaGFzZXJCaXRtYXBUZXh0RmFjdG9yeSxcclxuICAgIFBoYXNlckJpdG1hcFRleHRMb2FkLFxyXG4gICAgUGhhc2VyQml0bWFwVGV4dFN0YXJ0LFxyXG4gICAgUGhhc2VyQml0bWFwVGV4dFN5c3RlbSxcclxufTsiLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9pbmRleC5kLnRzXCIvPlxyXG5cclxuaW1wb3J0IEVjc1BvbmcgZnJvbSAnLi9FY3NQb25nJztcclxuXHJcbm5ldyBFY3NQb25nKCkuc3RhcnQoKTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQb3NpdGlvbiB7XHJcbiAgICBwcml2YXRlIGNvb3JkaW5hdGVzOiBudW1iZXJbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuY29vcmRpbmF0ZXMgPSBbeCwgeV07XHJcbiAgICB9XHJcblxyXG4gICAgeCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvb3JkaW5hdGVzWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIHkoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb29yZGluYXRlc1sxXTtcclxuICAgIH1cclxufSIsImltcG9ydCBQb3NpdGlvbiBmcm9tICcuL1Bvc2l0aW9uJztcclxuXHJcbmV4cG9ydCB7XHJcbiAgICBQb3NpdGlvblxyXG59OyIsImltcG9ydCB7IFByZWZhYiB9IGZyb20gJy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQml0bWFwVGV4dCB9IGZyb20gJy4uL2JpdG1hcFRleHQvaW5kZXgnO1xyXG5pbXBvcnQgeyBCaXRtYXBGb250IH0gZnJvbSAnLi4vYml0bWFwVGV4dC9pbmRleCc7XHJcbmltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSAnLi4vcG9zaXRpb24vaW5kZXgnO1xyXG5pbXBvcnQgU2NvcmVDb21wb25lbnQgZnJvbSAnLi9TY29yZUNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY29yZSBpbXBsZW1lbnRzIFByZWZhYiB7XHJcbiAgICBwcml2YXRlIHBvc2l0aW9uOiBQb3NpdGlvbjtcclxuICAgIHByaXZhdGUgZm9udDogQml0bWFwRm9udDtcclxuICAgIHByaXZhdGUgY2hhclNpemU6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbjogUG9zaXRpb24sIGZvbnQ6IEJpdG1hcEZvbnQsIGNoYXJTaXplOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICAgICAgdGhpcy5mb250ID0gZm9udDtcclxuICAgICAgICB0aGlzLmNoYXJTaXplID0gY2hhclNpemU7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlKCk6IENvbXBvbmVudFtdIHtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICBuZXcgU2NvcmVDb21wb25lbnQoKSxcclxuICAgICAgICAgICAgbmV3IEJpdG1hcFRleHQoXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5mb250LFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyU2l6ZSxcclxuICAgICAgICAgICAgICAgICcwJ1xyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRJZCB9IGZyb20gJy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50SWQgfSBmcm9tICcuLi9iYXNlL2luZGV4JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjb3JlQ29tcG9uZW50IGltcGxlbWVudHMgQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgSUQgPSBuZXcgQmFzZUNvbXBvbmVudElkKFNjb3JlQ29tcG9uZW50Lm5hbWUpO1xyXG5cclxuICAgIHByaXZhdGUgc2NvcmU6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnNjb3JlID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBpZCgpOiBDb21wb25lbnRJZCB7XHJcbiAgICAgICAgcmV0dXJuIFNjb3JlQ29tcG9uZW50LklEO1xyXG4gICAgfVxyXG5cclxuICAgIHZhbHVlKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NvcmU7XHJcbiAgICB9XHJcblxyXG4gICAgaW5jcmVtZW50KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2NvcmUgKz0gMTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgU2NvcmVDb21wb25lbnQgZnJvbSAnLi9TY29yZUNvbXBvbmVudCc7XHJcbmltcG9ydCBTY29yZSBmcm9tICcuL1Njb3JlJztcclxuXHJcbmV4cG9ydCB7XHJcbiAgICBTY29yZUNvbXBvbmVudCxcclxuICAgIFNjb3JlXHJcbn07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHVwbGljYXRlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkge1xyXG4gICAgICAgIHN1cGVyKC4uLmFyZ3MpO1xyXG4gICAgICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIER1cGxpY2F0ZUVycm9yKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vdEZvdW5kRXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkge1xyXG4gICAgICAgIHN1cGVyKC4uLmFyZ3MpO1xyXG4gICAgICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIE5vdEZvdW5kRXJyb3IpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IER1cGxpY2F0ZUVycm9yIGZyb20gJy4vRHVwbGljYXRlRXJyb3InO1xyXG5pbXBvcnQgTm90Rm91bmRFcnJvciBmcm9tICcuL05vdEZvdW5kRXJyb3InO1xyXG5cclxuZXhwb3J0IHtcclxuICAgIER1cGxpY2F0ZUVycm9yLFxyXG4gICAgTm90Rm91bmRFcnJvclxyXG59OyJdfQ==
