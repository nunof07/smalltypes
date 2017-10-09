(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
/// <reference path="../../typings/index.d.ts"/>
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
exports.BootState = BootState;
},{}],2:[function(require,module,exports){
"use strict";
/// <reference path="../../typings/index.d.ts"/>
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
        this._game.state.add('boot', new BootState_1.BootState());
        this._game.state.add('game', new GameState_1.GameState());
        this._game.state.start('boot');
    }
}
exports.EcsPong = EcsPong;
},{"./BootState":1,"./GameState":3}],3:[function(require,module,exports){
"use strict";
/// <reference path="../../typings/index.d.ts"/>
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./base/index");
const index_2 = require("./base/index");
const index_3 = require("./base/index");
const index_4 = require("./base/index");
const index_5 = require("./base/index");
const index_6 = require("./base/index");
const index_7 = require("./base/index");
const index_8 = require("./base/index");
const index_9 = require("./phaser/index");
const index_10 = require("./pong/index");
class GameState extends Phaser.State {
    init() {
        const font = new index_5.BaseBitmapFont('Press Start 2P', 'fonts/Press_Start_2P_0.png', 'fonts/Press_Start_2P.fnt', 32);
        const entities = new index_2.BaseEntityPool()
            .createMany([
            new index_10.Score(new index_4.BasePosition(0.25 * this.game.world.width - 2 * font.size(), 4 * font.size()), font),
            new index_10.Score(new index_4.BasePosition(0.75 * this.game.world.width - 2 * font.size(), 4 * font.size()), font)
        ]);
        this.ecs = new index_1.BaseWorld(entities, new index_3.BaseSystemCollection([
            new index_9.PhaserBitmapTextSystem(entities, this.game.load, this.game.add)
        ]));
    }
    preload() {
        new index_8.PhaseExecute(this.ecs.systems(), index_6.Load.ID)
            .execute();
    }
    create() {
        new index_8.PhaseExecute(this.ecs.systems(), index_7.Start.ID)
            .execute();
    }
}
exports.GameState = GameState;
},{"./base/index":19,"./phaser/index":46,"./pong/index":54}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../id/index");
class BaseComponentId extends index_1.BaseId {
}
exports.BaseComponentId = BaseComponentId;
},{"../id/index":18}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../system/index");
class ComponentDuplicateError extends index_1.DuplicateError {
    constructor(...args) {
        super(...args);
    }
}
exports.ComponentDuplicateError = ComponentDuplicateError;
},{"../../system/index":63}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../system/index");
class ComponentNotFoundError extends index_1.NotFoundError {
    constructor(...args) {
        super(...args);
    }
}
exports.ComponentNotFoundError = ComponentNotFoundError;
},{"../../system/index":63}],7:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./BaseComponentId"));
__export(require("./ComponentDuplicateError"));
__export(require("./ComponentNotFoundError"));
},{"./BaseComponentId":4,"./ComponentDuplicateError":5,"./ComponentNotFoundError":6}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../component/index");
const index_2 = require("../component/index");
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
            throw new index_2.ComponentDuplicateError();
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
    detach(id) {
        this.components.delete(id);
        return this;
    }
    has(components) {
        return components.every(id => this.components.has(id));
    }
    get(component) {
        if (!this.components.has(component)) {
            throw new index_1.ComponentNotFoundError();
        }
        return this.components.get(component);
    }
}
exports.BaseEntity = BaseEntity;
},{"../component/index":7}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../id/index");
class BaseEntityId extends index_1.BaseId {
}
exports.BaseEntityId = BaseEntityId;
},{"../id/index":18}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseEntity_1 = require("./BaseEntity");
const BaseEntityId_1 = require("./BaseEntityId");
class BaseEntityPool {
    constructor() {
        this.pool = [];
    }
    getNewId() {
        return new BaseEntityId_1.BaseEntityId(this.pool.length + '');
    }
    create(components) {
        const entity = new BaseEntity_1.BaseEntity(this.getNewId(), new Map(components.map(component => [component.id(), component])));
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
exports.BaseEntityPool = BaseEntityPool;
},{"./BaseEntity":8,"./BaseEntityId":9}],11:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EntitySearch_1 = require("./EntitySearch");
class ComponentSearch {
    constructor(id, entitySearch = new EntitySearch_1.EntitySearch(id)) {
        this.id = id;
        this.entitySearch = entitySearch;
    }
    find(pool) {
        return this.entitySearch.find(pool)
            .map(entity => entity.get(this.id));
    }
}
exports.ComponentSearch = ComponentSearch;
},{"./EntitySearch":12}],12:[function(require,module,exports){
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
exports.EntitySearch = EntitySearch;
},{}],13:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./BaseEntity"));
__export(require("./BaseEntityId"));
__export(require("./BaseEntityPool"));
__export(require("./ComponentSearch"));
__export(require("./EntitySearch"));
},{"./BaseEntity":8,"./BaseEntityId":9,"./BaseEntityPool":10,"./ComponentSearch":11,"./EntitySearch":12}],14:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseBitmapFont {
    constructor(key, imagePath, atlasPath, size) {
        this.key = key;
        this.imagePath = imagePath;
        this.atlasPath = atlasPath;
        this.fontSize = size;
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
    size() {
        return this.fontSize;
    }
}
exports.BaseBitmapFont = BaseBitmapFont;
},{}],15:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../entity/index");
const index_2 = require("../text/index");
class BitmapFontSearch {
    constructor(search = new index_1.ComponentSearch(index_2.BaseBitmapText.ID)) {
        this.search = search;
    }
    find(pool) {
        return [...new Set(// unique set
            this.search.find(pool)
                .map(text => text.font()))];
    }
}
exports.BitmapFontSearch = BitmapFontSearch;
},{"../entity/index":13,"../text/index":35}],16:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./BaseBitmapFont"));
__export(require("./BitmapFontSearch"));
},{"./BaseBitmapFont":14,"./BitmapFontSearch":15}],17:[function(require,module,exports){
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
exports.BaseId = BaseId;
},{}],18:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./BaseId"));
},{"./BaseId":17}],19:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./component/index"));
__export(require("./entity/index"));
__export(require("./font/index"));
__export(require("./id/index"));
__export(require("./phase/index"));
__export(require("./position/index"));
__export(require("./system/index"));
__export(require("./text/index"));
__export(require("./world/index"));
},{"./component/index":7,"./entity/index":13,"./font/index":16,"./id/index":18,"./phase/index":25,"./position/index":27,"./system/index":31,"./text/index":35,"./world/index":37}],20:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../id/index");
class BasePhaseId extends index_1.BaseId {
}
exports.BasePhaseId = BasePhaseId;
},{"../id/index":18}],21:[function(require,module,exports){
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
exports.BasePhasePool = BasePhasePool;
},{}],22:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BasePhaseId_1 = require("./BasePhaseId");
class Load {
    id() {
        return Load.ID;
    }
}
Load.ID = new BasePhaseId_1.BasePhaseId(Load.name);
exports.Load = Load;
},{"./BasePhaseId":20}],23:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../system/index");
class PhaseExecute {
    constructor(systems, search) {
        this.systems = systems;
        this.search = (search instanceof index_1.PhaseSearch) ? search : new index_1.PhaseSearch(search);
    }
    execute() {
        this.search.find(this.systems)
            .forEach(phase => phase.execute());
    }
}
exports.PhaseExecute = PhaseExecute;
},{"../system/index":31}],24:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BasePhaseId_1 = require("./BasePhaseId");
class Start {
    id() {
        return Start.ID;
    }
}
Start.ID = new BasePhaseId_1.BasePhaseId(Start.name);
exports.Start = Start;
},{"./BasePhaseId":20}],25:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./BasePhaseId"));
__export(require("./BasePhasePool"));
__export(require("./Load"));
__export(require("./PhaseExecute"));
__export(require("./Start"));
},{"./BasePhaseId":20,"./BasePhasePool":21,"./Load":22,"./PhaseExecute":23,"./Start":24}],26:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BasePosition {
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
exports.BasePosition = BasePosition;
},{}],27:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./BasePosition"));
},{"./BasePosition":26}],28:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../phase/index");
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
exports.BaseSystem = BaseSystem;
},{"../phase/index":25}],29:[function(require,module,exports){
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
exports.BaseSystemCollection = BaseSystemCollection;
},{}],30:[function(require,module,exports){
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
exports.PhaseSearch = PhaseSearch;
},{}],31:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./BaseSystem"));
__export(require("./BaseSystemCollection"));
__export(require("./PhaseSearch"));
},{"./BaseSystem":28,"./BaseSystemCollection":29,"./PhaseSearch":30}],32:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../core/index");
const index_2 = require("../component/index");
class BaseBitmapText {
    constructor(position, font, text) {
        this.textPosition = position;
        this.textFont = font;
        this.writeText = new index_1.ReadWriteText(text);
    }
    id() {
        return BaseBitmapText.ID;
    }
    position() {
        return this.textPosition;
    }
    font() {
        return this.textFont;
    }
    text() {
        return this.writeText;
    }
}
BaseBitmapText.ID = new index_2.BaseComponentId(BaseBitmapText.name);
exports.BaseBitmapText = BaseBitmapText;
},{"../../core/index":38,"../component/index":7}],33:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ReadText {
    constructor(text) {
        this.text = text;
    }
    value() {
        return this.text;
    }
}
exports.ReadText = ReadText;
},{}],34:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ReadWriteText {
    constructor(text) {
        this.text = text;
    }
    value() {
        return this.text;
    }
    update(text) {
        this.text = text;
    }
}
exports.ReadWriteText = ReadWriteText;
},{}],35:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./BaseBitmapText"));
__export(require("./ReadText"));
__export(require("./ReadWriteText"));
},{"./BaseBitmapText":32,"./ReadText":33,"./ReadWriteText":34}],36:[function(require,module,exports){
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
exports.BaseWorld = BaseWorld;
},{}],37:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./BaseWorld"));
},{"./BaseWorld":36}],38:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
},{}],39:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BitmapFont {
    constructor(key, imagePath, atlasPath, size) {
        this.key = key;
        this.imagePath = imagePath;
        this.atlasPath = atlasPath;
        this.fontSize = size;
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
    size() {
        return this.fontSize;
    }
}
exports.default = BitmapFont;
},{}],40:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../base/index");
const index_2 = require("../text/index");
class BitmapFontSearch {
    constructor(search = new index_1.ComponentSearch(index_2.BaseBitmapText.ID)) {
        this.search = search;
    }
    find(pool) {
        return [...new Set(// unique set
            this.search.find(pool)
                .map(text => text.font()))];
    }
}
exports.default = BitmapFontSearch;
},{"../base/index":19,"../text/index":74}],41:[function(require,module,exports){
"use strict";
/// <reference path="../../../typings/index.d.ts"/>
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
},{}],42:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BitmapFont_1 = require("./BitmapFont");
exports.BitmapFont = BitmapFont_1.default;
const BitmapFontSearch_1 = require("./BitmapFontSearch");
exports.BitmapFontSearch = BitmapFontSearch_1.default;
const PhaserBitmapFontLoad_1 = require("./PhaserBitmapFontLoad");
exports.PhaserBitmapFontLoad = PhaserBitmapFontLoad_1.default;
},{"./BitmapFont":39,"./BitmapFontSearch":40,"./PhaserBitmapFontLoad":41}],43:[function(require,module,exports){
"use strict";
/// <reference path="../../typings/index.d.ts"/>
Object.defineProperty(exports, "__esModule", { value: true });
const EcsPong_1 = require("./EcsPong");
new EcsPong_1.EcsPong().start();
},{"./EcsPong":2}],44:[function(require,module,exports){
"use strict";
/// <reference path="../../../../typings/index.d.ts"/>
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
exports.PhaserBitmapFontLoad = PhaserBitmapFontLoad;
},{}],45:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./PhaserBitmapFontLoad"));
},{"./PhaserBitmapFontLoad":44}],46:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./font/index"));
__export(require("./text/index"));
},{"./font/index":45,"./text/index":53}],47:[function(require,module,exports){
"use strict";
/// <reference path="../../../../typings/index.d.ts"/>
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../base/index");
const index_2 = require("../../base/index");
const index_3 = require("../text/index");
class PhaserBitmapText {
    constructor(text, font) {
        this.bitmapText = text;
        this.textFont = font;
    }
    id() {
        return PhaserBitmapText.ID;
    }
    position() {
        return new index_2.BasePosition(this.bitmapText.x, this.bitmapText.y);
    }
    font() {
        return this.textFont;
    }
    text() {
        return new index_3.PhaserText(this.bitmapText);
    }
}
PhaserBitmapText.ID = new index_1.BaseComponentId(PhaserBitmapText.name);
exports.PhaserBitmapText = PhaserBitmapText;
},{"../../base/index":19,"../text/index":53}],48:[function(require,module,exports){
"use strict";
/// <reference path="../../../../typings/index.d.ts"/>
Object.defineProperty(exports, "__esModule", { value: true });
class PhaserBitmapTextFactory {
    constructor(factory) {
        this.factory = factory;
    }
    create(text) {
        return this.factory.bitmapText(Math.floor(text.position().x()), Math.floor(text.position().y()), text.font().id(), text.text().value(), text.font().size());
    }
}
exports.PhaserBitmapTextFactory = PhaserBitmapTextFactory;
},{}],49:[function(require,module,exports){
"use strict";
/// <reference path="../../../../typings/index.d.ts"/>
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../base/index");
const index_2 = require("../../base/index");
const index_3 = require("../font/index");
class PhaserBitmapTextLoad extends index_1.Load {
    constructor(entities, loader) {
        super();
        this.entities = entities;
        this.loader = loader;
    }
    execute() {
        new index_3.PhaserBitmapFontLoad(this.loader)
            .load(new index_2.BitmapFontSearch()
            .find(this.entities));
    }
}
exports.PhaserBitmapTextLoad = PhaserBitmapTextLoad;
},{"../../base/index":19,"../font/index":45}],50:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../base/index");
const index_2 = require("../../base/index");
const index_3 = require("../../base/index");
const PhaserBitmapText_1 = require("./PhaserBitmapText");
class PhaserBitmapTextStart extends index_1.Start {
    constructor(entities, factory) {
        super();
        this.entities = entities;
        this.factory = factory;
    }
    execute() {
        new index_2.EntitySearch(index_3.BaseBitmapText.ID)
            .find(this.entities)
            .forEach(entity => {
            const text = entity.get(index_3.BaseBitmapText.ID);
            entity
                .attach(new PhaserBitmapText_1.PhaserBitmapText(this.factory.create(text), text.font()))
                .detach(text.id());
        });
    }
}
exports.PhaserBitmapTextStart = PhaserBitmapTextStart;
},{"../../base/index":19,"./PhaserBitmapText":47}],51:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../base/index");
const PhaserBitmapTextLoad_1 = require("./PhaserBitmapTextLoad");
const PhaserBitmapTextStart_1 = require("./PhaserBitmapTextStart");
const PhaserBitmapTextFactory_1 = require("./PhaserBitmapTextFactory");
/**
 * Loads and creates bitmap text using Phaser.
 */
class PhaserBitmapTextSystem extends index_1.BaseSystem {
    constructor(entities, loader, factory) {
        super([
            new PhaserBitmapTextLoad_1.PhaserBitmapTextLoad(entities, loader),
            new PhaserBitmapTextStart_1.PhaserBitmapTextStart(entities, new PhaserBitmapTextFactory_1.PhaserBitmapTextFactory(factory))
        ]);
    }
}
exports.PhaserBitmapTextSystem = PhaserBitmapTextSystem;
},{"../../base/index":19,"./PhaserBitmapTextFactory":48,"./PhaserBitmapTextLoad":49,"./PhaserBitmapTextStart":50}],52:[function(require,module,exports){
"use strict";
/// <reference path="../../../../typings/index.d.ts"/>
Object.defineProperty(exports, "__esModule", { value: true });
class PhaserText {
    constructor(text) {
        this.textObj = text;
    }
    value() {
        return this.textObj.text;
    }
    update(text) {
        this.textObj.text = text;
    }
}
exports.PhaserText = PhaserText;
},{}],53:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./PhaserBitmapText"));
__export(require("./PhaserBitmapTextFactory"));
__export(require("./PhaserBitmapTextLoad"));
__export(require("./PhaserBitmapTextStart"));
__export(require("./PhaserBitmapTextSystem"));
__export(require("./PhaserText"));
},{"./PhaserBitmapText":47,"./PhaserBitmapTextFactory":48,"./PhaserBitmapTextLoad":49,"./PhaserBitmapTextStart":50,"./PhaserBitmapTextSystem":51,"./PhaserText":52}],54:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./score/index"));
},{"./score/index":57}],55:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../text/index");
const ScoreComponent_1 = require("./ScoreComponent");
class Score {
    constructor(position, font) {
        this.position = position;
        this.font = font;
    }
    create() {
        return [
            new ScoreComponent_1.ScoreComponent(),
            new index_1.BaseBitmapText(this.position, this.font, '0')
        ];
    }
}
exports.Score = Score;
},{"../../text/index":74,"./ScoreComponent":56}],56:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../base/index");
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
exports.ScoreComponent = ScoreComponent;
},{"../../base/index":19}],57:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./Score"));
__export(require("./ScoreComponent"));
},{"./Score":55,"./ScoreComponent":56}],58:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BasePosition {
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
exports.default = BasePosition;
},{}],59:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BasePosition_1 = require("./BasePosition");
exports.BasePosition = BasePosition_1.default;
},{"./BasePosition":58}],60:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DuplicateError extends Error {
    constructor(...args) {
        super(...args);
        Error.captureStackTrace(this, DuplicateError);
    }
}
exports.DuplicateError = DuplicateError;
},{}],61:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NotFoundError extends Error {
    constructor(...args) {
        super(...args);
        Error.captureStackTrace(this, NotFoundError);
    }
}
exports.NotFoundError = NotFoundError;
},{}],62:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./DuplicateError"));
__export(require("./NotFoundError"));
},{"./DuplicateError":60,"./NotFoundError":61}],63:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./errors/index"));
},{"./errors/index":62}],64:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../base/index");
const ReadWriteTExt_1 = require("./ReadWriteTExt");
class BaseBitmapText {
    constructor(position, font, text) {
        this.textPosition = position;
        this.textFont = font;
        this.writeText = new ReadWriteTExt_1.default(text);
    }
    id() {
        return BaseBitmapText.ID;
    }
    position() {
        return this.textPosition;
    }
    font() {
        return this.textFont;
    }
    text() {
        return this.writeText;
    }
}
BaseBitmapText.ID = new index_1.BaseComponentId(BaseBitmapText.name);
exports.default = BaseBitmapText;
},{"../base/index":19,"./ReadWriteTExt":72}],65:[function(require,module,exports){
"use strict";
/// <reference path="../../../typings/index.d.ts"/>
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../base/index");
const index_2 = require("../position/index");
const PhaserText_1 = require("./PhaserText");
class PhaserBitmapText {
    constructor(text, font) {
        this.bitmapText = text;
        this.textFont = font;
    }
    id() {
        return PhaserBitmapText.ID;
    }
    position() {
        return new index_2.BasePosition(this.bitmapText.x, this.bitmapText.y);
    }
    font() {
        return this.textFont;
    }
    text() {
        return new PhaserText_1.default(this.bitmapText);
    }
}
PhaserBitmapText.ID = new index_1.BaseComponentId(PhaserBitmapText.name);
exports.default = PhaserBitmapText;
},{"../base/index":19,"../position/index":59,"./PhaserText":70}],66:[function(require,module,exports){
"use strict";
/// <reference path="../../../typings/index.d.ts"/>
Object.defineProperty(exports, "__esModule", { value: true });
class PhaserBitmapTextFactory {
    constructor(factory) {
        this.factory = factory;
    }
    create(text) {
        return this.factory.bitmapText(Math.floor(text.position().x()), Math.floor(text.position().y()), text.font().id(), text.text().value(), text.font().size());
    }
}
exports.default = PhaserBitmapTextFactory;
},{}],67:[function(require,module,exports){
"use strict";
/// <reference path="../../../typings/index.d.ts"/>
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../base/index");
const index_2 = require("../font/index");
const index_3 = require("../font/index");
class PhaserBitmapTextLoad extends index_1.Load {
    constructor(entities, loader) {
        super();
        this.entities = entities;
        this.loader = loader;
    }
    execute() {
        new index_3.PhaserBitmapFontLoad(this.loader)
            .load(new index_2.BitmapFontSearch()
            .find(this.entities));
    }
}
exports.default = PhaserBitmapTextLoad;
},{"../base/index":19,"../font/index":42}],68:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../base/index");
const index_2 = require("../base/index");
const BaseBitmapText_1 = require("./BaseBitmapText");
const PhaserBitmapText_1 = require("./PhaserBitmapText");
class PhaserBitmapTextStart extends index_1.Start {
    constructor(entities, factory) {
        super();
        this.entities = entities;
        this.factory = factory;
    }
    execute() {
        new index_2.EntitySearch(BaseBitmapText_1.default.ID)
            .find(this.entities)
            .forEach(entity => {
            const text = entity.get(BaseBitmapText_1.default.ID);
            entity
                .attach(new PhaserBitmapText_1.default(this.factory.create(text), text.font()))
                .detach(text.id());
        });
    }
}
exports.default = PhaserBitmapTextStart;
},{"../base/index":19,"./BaseBitmapText":64,"./PhaserBitmapText":65}],69:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../base/index");
const PhaserBitmapTextLoad_1 = require("./PhaserBitmapTextLoad");
const PhaserBitmapTextStart_1 = require("./PhaserBitmapTextStart");
const PhaserBitmapTextFactory_1 = require("./PhaserBitmapTextFactory");
/**
 * Loads and creates bitmap text using Phaser.
 */
class PhaserBitmapTextSystem extends index_1.BaseSystem {
    constructor(entities, loader, factory) {
        super([
            new PhaserBitmapTextLoad_1.default(entities, loader),
            new PhaserBitmapTextStart_1.default(entities, new PhaserBitmapTextFactory_1.default(factory))
        ]);
    }
}
exports.default = PhaserBitmapTextSystem;
},{"../base/index":19,"./PhaserBitmapTextFactory":66,"./PhaserBitmapTextLoad":67,"./PhaserBitmapTextStart":68}],70:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PhaserText {
    constructor(text) {
        this.textObj = text;
    }
    value() {
        return this.textObj.text;
    }
    update(text) {
        this.textObj.text = text;
    }
}
exports.default = PhaserText;
},{}],71:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ReadText {
    constructor(text) {
        this.text = text;
    }
    value() {
        return this.text;
    }
}
exports.default = ReadText;
},{}],72:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ReadWriteText {
    constructor(text) {
        this.text = text;
    }
    value() {
        return this.text;
    }
    update(text) {
        this.text = text;
    }
}
exports.default = ReadWriteText;
},{}],73:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ReadWriteText {
    constructor(text) {
        this.text = text;
    }
    value() {
        return this.text;
    }
    update(text) {
        this.text = text;
    }
}
exports.default = ReadWriteText;
},{}],74:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseBitmapText_1 = require("./BaseBitmapText");
exports.BaseBitmapText = BaseBitmapText_1.default;
const PhaserBitmapText_1 = require("./PhaserBitmapText");
exports.PhaserBitmapText = PhaserBitmapText_1.default;
const PhaserBitmapTextFactory_1 = require("./PhaserBitmapTextFactory");
exports.PhaserBitmapTextFactory = PhaserBitmapTextFactory_1.default;
const PhaserBitmapTextLoad_1 = require("./PhaserBitmapTextLoad");
exports.PhaserBitmapTextLoad = PhaserBitmapTextLoad_1.default;
const PhaserBitmapTextStart_1 = require("./PhaserBitmapTextStart");
exports.PhaserBitmapTextStart = PhaserBitmapTextStart_1.default;
const PhaserBitmapTextSystem_1 = require("./PhaserBitmapTextSystem");
exports.PhaserBitmapTextSystem = PhaserBitmapTextSystem_1.default;
const PhaserText_1 = require("./PhaserText");
exports.PhaserText = PhaserText_1.default;
const ReadText_1 = require("./ReadText");
exports.ReadText = ReadText_1.default;
const ReadWriteText_1 = require("./ReadWriteText");
exports.ReadWriteText = ReadWriteText_1.default;
},{"./BaseBitmapText":64,"./PhaserBitmapText":65,"./PhaserBitmapTextFactory":66,"./PhaserBitmapTextLoad":67,"./PhaserBitmapTextStart":68,"./PhaserBitmapTextSystem":69,"./PhaserText":70,"./ReadText":71,"./ReadWriteText":73}]},{},[43])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZWNzL0Jvb3RTdGF0ZS50cyIsInNyYy9lY3MvRWNzUG9uZy50cyIsInNyYy9lY3MvR2FtZVN0YXRlLnRzIiwic3JjL2Vjcy9iYXNlL2NvbXBvbmVudC9CYXNlQ29tcG9uZW50SWQudHMiLCJzcmMvZWNzL2Jhc2UvY29tcG9uZW50L0NvbXBvbmVudER1cGxpY2F0ZUVycm9yLnRzIiwic3JjL2Vjcy9iYXNlL2NvbXBvbmVudC9Db21wb25lbnROb3RGb3VuZEVycm9yLnRzIiwic3JjL2Vjcy9iYXNlL2NvbXBvbmVudC9pbmRleC50cyIsInNyYy9lY3MvYmFzZS9lbnRpdHkvQmFzZUVudGl0eS50cyIsInNyYy9lY3MvYmFzZS9lbnRpdHkvQmFzZUVudGl0eUlkLnRzIiwic3JjL2Vjcy9iYXNlL2VudGl0eS9CYXNlRW50aXR5UG9vbC50cyIsInNyYy9lY3MvYmFzZS9lbnRpdHkvQ29tcG9uZW50U2VhcmNoLnRzIiwic3JjL2Vjcy9iYXNlL2VudGl0eS9FbnRpdHlTZWFyY2gudHMiLCJzcmMvZWNzL2Jhc2UvZW50aXR5L2luZGV4LnRzIiwic3JjL2Vjcy9iYXNlL2ZvbnQvQmFzZUJpdG1hcEZvbnQudHMiLCJzcmMvZWNzL2Jhc2UvZm9udC9CaXRtYXBGb250U2VhcmNoLnRzIiwic3JjL2Vjcy9iYXNlL2ZvbnQvaW5kZXgudHMiLCJzcmMvZWNzL2Jhc2UvaWQvQmFzZUlkLnRzIiwic3JjL2Vjcy9iYXNlL2lkL2luZGV4LnRzIiwic3JjL2Vjcy9iYXNlL2luZGV4LnRzIiwic3JjL2Vjcy9iYXNlL3BoYXNlL0Jhc2VQaGFzZUlkLnRzIiwic3JjL2Vjcy9iYXNlL3BoYXNlL0Jhc2VQaGFzZVBvb2wudHMiLCJzcmMvZWNzL2Jhc2UvcGhhc2UvTG9hZC50cyIsInNyYy9lY3MvYmFzZS9waGFzZS9QaGFzZUV4ZWN1dGUudHMiLCJzcmMvZWNzL2Jhc2UvcGhhc2UvU3RhcnQudHMiLCJzcmMvZWNzL2Jhc2UvcGhhc2UvaW5kZXgudHMiLCJzcmMvZWNzL2Jhc2UvcG9zaXRpb24vQmFzZVBvc2l0aW9uLnRzIiwic3JjL2Vjcy9iYXNlL3Bvc2l0aW9uL2luZGV4LnRzIiwic3JjL2Vjcy9iYXNlL3N5c3RlbS9CYXNlU3lzdGVtLnRzIiwic3JjL2Vjcy9iYXNlL3N5c3RlbS9CYXNlU3lzdGVtQ29sbGVjdGlvbi50cyIsInNyYy9lY3MvYmFzZS9zeXN0ZW0vUGhhc2VTZWFyY2gudHMiLCJzcmMvZWNzL2Jhc2Uvc3lzdGVtL2luZGV4LnRzIiwic3JjL2Vjcy9iYXNlL3RleHQvQmFzZUJpdG1hcFRleHQudHMiLCJzcmMvZWNzL2Jhc2UvdGV4dC9SZWFkVGV4dC50cyIsInNyYy9lY3MvYmFzZS90ZXh0L1JlYWRXcml0ZVRleHQudHMiLCJzcmMvZWNzL2Jhc2UvdGV4dC9pbmRleC50cyIsInNyYy9lY3MvYmFzZS93b3JsZC9CYXNlV29ybGQudHMiLCJzcmMvZWNzL2Jhc2Uvd29ybGQvaW5kZXgudHMiLCJzcmMvZWNzL2ZvbnQvQml0bWFwRm9udC50cyIsInNyYy9lY3MvZm9udC9CaXRtYXBGb250U2VhcmNoLnRzIiwic3JjL2Vjcy9mb250L1BoYXNlckJpdG1hcEZvbnRMb2FkLnRzIiwic3JjL2Vjcy9mb250L2luZGV4LnRzIiwic3JjL2Vjcy9tYWluLnRzIiwic3JjL2Vjcy9waGFzZXIvZm9udC9QaGFzZXJCaXRtYXBGb250TG9hZC50cyIsInNyYy9lY3MvcGhhc2VyL2ZvbnQvaW5kZXgudHMiLCJzcmMvZWNzL3BoYXNlci9pbmRleC50cyIsInNyYy9lY3MvcGhhc2VyL3RleHQvUGhhc2VyQml0bWFwVGV4dC50cyIsInNyYy9lY3MvcGhhc2VyL3RleHQvUGhhc2VyQml0bWFwVGV4dEZhY3RvcnkudHMiLCJzcmMvZWNzL3BoYXNlci90ZXh0L1BoYXNlckJpdG1hcFRleHRMb2FkLnRzIiwic3JjL2Vjcy9waGFzZXIvdGV4dC9QaGFzZXJCaXRtYXBUZXh0U3RhcnQudHMiLCJzcmMvZWNzL3BoYXNlci90ZXh0L1BoYXNlckJpdG1hcFRleHRTeXN0ZW0udHMiLCJzcmMvZWNzL3BoYXNlci90ZXh0L1BoYXNlclRleHQudHMiLCJzcmMvZWNzL3BoYXNlci90ZXh0L2luZGV4LnRzIiwic3JjL2Vjcy9wb25nL2luZGV4LnRzIiwic3JjL2Vjcy9wb25nL3Njb3JlL1Njb3JlLnRzIiwic3JjL2Vjcy9wb25nL3Njb3JlL1Njb3JlQ29tcG9uZW50LnRzIiwic3JjL2Vjcy9wb25nL3Njb3JlL2luZGV4LnRzIiwic3JjL2Vjcy9wb3NpdGlvbi9CYXNlUG9zaXRpb24udHMiLCJzcmMvZWNzL3Bvc2l0aW9uL2luZGV4LnRzIiwic3JjL2Vjcy9zeXN0ZW0vZXJyb3JzL0R1cGxpY2F0ZUVycm9yLnRzIiwic3JjL2Vjcy9zeXN0ZW0vZXJyb3JzL05vdEZvdW5kRXJyb3IudHMiLCJzcmMvZWNzL3N5c3RlbS9lcnJvcnMvaW5kZXgudHMiLCJzcmMvZWNzL3N5c3RlbS9pbmRleC50cyIsInNyYy9lY3MvdGV4dC9CYXNlQml0bWFwVGV4dC50cyIsInNyYy9lY3MvdGV4dC9QaGFzZXJCaXRtYXBUZXh0LnRzIiwic3JjL2Vjcy90ZXh0L1BoYXNlckJpdG1hcFRleHRGYWN0b3J5LnRzIiwic3JjL2Vjcy90ZXh0L1BoYXNlckJpdG1hcFRleHRMb2FkLnRzIiwic3JjL2Vjcy90ZXh0L1BoYXNlckJpdG1hcFRleHRTdGFydC50cyIsInNyYy9lY3MvdGV4dC9QaGFzZXJCaXRtYXBUZXh0U3lzdGVtLnRzIiwic3JjL2Vjcy90ZXh0L1BoYXNlclRleHQudHMiLCJzcmMvZWNzL3RleHQvUmVhZFRleHQudHMiLCJzcmMvZWNzL3RleHQvUmVhZFdyaXRlVEV4dC50cyIsInNyYy9lY3MvdGV4dC9SZWFkV3JpdGVUZXh0LnRzIiwic3JjL2Vjcy90ZXh0L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQ0FBLGdEQUFnRDs7QUFFaEQsZUFBdUIsU0FBUSxNQUFNLENBQUMsS0FBSztJQUN2QztRQUNJLEtBQUssRUFBRSxDQUFDO0lBQ1os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c0IsQ0FlSDtBQWQxQiw2Q0FBc0M7QUFlbEMscUJBZkcsb0JBQVUsQ0FlSDtBQWRkLHlDQUFrQztBQWU5QixtQkFmRyxrQkFBUSxDQWVIO0FBZFosbURBQTRDO0FBZXhDLHdCQWZHLHVCQUFhLENBZUgiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvaW5kZXguZC50c1wiLz5cclxuXHJcbmV4cG9ydCBjbGFzcyBCb290U3RhdGUgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5pdCgpIHtcclxuICAgICAgICAvLyBzY2FsZSB0byBmaXQgc2NyZWVuXHJcbiAgICAgICAgdGhpcy5zY2FsZS5zY2FsZU1vZGUgPSBQaGFzZXIuU2NhbGVNYW5hZ2VyLlNIT1dfQUxMO1xyXG4gICAgICAgIHRoaXMuc2NhbGUuZnVsbFNjcmVlblNjYWxlTW9kZSA9IFBoYXNlci5TY2FsZU1hbmFnZXIuU0hPV19BTEw7XHJcbiAgICAgICAgdGhpcy5zY2FsZS5wYWdlQWxpZ25Ib3Jpem9udGFsbHkgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2NhbGUucGFnZUFsaWduVmVydGljYWxseSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zY2FsZS5mb3JjZUxhbmRzY2FwZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5nYW1lLnNjYWxlLndpbmRvd0NvbnN0cmFpbnRzLmJvdHRvbSA9ICd2aXN1YWwnOyAvLyBtYWtlIHN1cmUgaXQgZG9lc24ndCBnbyBvdmVyIHNjcmVlbiBoZWlnaHRcclxuICAgICAgICB0aGlzLmdhbWUuc2NhbGUucmVmcmVzaCgpO1xyXG5cclxuICAgICAgICAvLyBrZWVwIHBpeGVscyBzaGFycFxyXG4gICAgICAgIHRoaXMuZ2FtZS5hbnRpYWxpYXMgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmdhbWUuc3RhZ2Uuc21vb3RoZWQgPSBmYWxzZTtcclxuICAgICAgICBQaGFzZXIuQ2FudmFzLnNldEltYWdlUmVuZGVyaW5nQ3Jpc3AodGhpcy5nYW1lLmNhbnZhcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZSgpIHtcclxuICAgICAgICB0aGlzLmdhbWUuc3RhdGUuc3RhcnQoJ2dhbWUnKTtcclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL2luZGV4LmQudHNcIi8+XHJcblxyXG5pbXBvcnQgeyBCb290U3RhdGUgfSBmcm9tICcuL0Jvb3RTdGF0ZSc7XHJcbmltcG9ydCB7IEdhbWVTdGF0ZSB9IGZyb20gJy4vR2FtZVN0YXRlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBFY3NQb25nIHtcclxuICAgIHByaXZhdGUgX2dhbWU6IFBoYXNlci5HYW1lO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX2dhbWUgPSBuZXcgUGhhc2VyLkdhbWUoe1xyXG4gICAgICAgICAgICB3aWR0aDogMTAyNCxcclxuICAgICAgICAgICAgaGVpZ2h0OiA1NzYsXHJcbiAgICAgICAgICAgIHJlbmRlcmVyOiBQaGFzZXIuQVVUTyxcclxuICAgICAgICAgICAgcGFyZW50OiAnZ2FtZS1jb250YWluZXInXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuX2dhbWUuc3RhdGUuYWRkKCdib290JywgbmV3IEJvb3RTdGF0ZSgpKTtcclxuICAgICAgICB0aGlzLl9nYW1lLnN0YXRlLmFkZCgnZ2FtZScsIG5ldyBHYW1lU3RhdGUoKSk7XHJcbiAgICAgICAgdGhpcy5fZ2FtZS5zdGF0ZS5zdGFydCgnYm9vdCcpO1xyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvaW5kZXguZC50c1wiLz5cclxuXHJcbmltcG9ydCB7IEJhc2VXb3JsZCB9IGZyb20gJy4vYmFzZS9pbmRleCc7XHJcbmltcG9ydCB7IEJhc2VFbnRpdHlQb29sIH0gZnJvbSAnLi9iYXNlL2luZGV4JztcclxuaW1wb3J0IHsgQmFzZVN5c3RlbUNvbGxlY3Rpb24gfSBmcm9tICcuL2Jhc2UvaW5kZXgnO1xyXG5pbXBvcnQgeyBCYXNlUG9zaXRpb24gfSBmcm9tICcuL2Jhc2UvaW5kZXgnO1xyXG5pbXBvcnQgeyBCYXNlQml0bWFwRm9udCB9IGZyb20gJy4vYmFzZS9pbmRleCc7XHJcbmltcG9ydCB7IExvYWQgfSBmcm9tICcuL2Jhc2UvaW5kZXgnO1xyXG5pbXBvcnQgeyBTdGFydCB9IGZyb20gJy4vYmFzZS9pbmRleCc7XHJcbmltcG9ydCB7IFBoYXNlRXhlY3V0ZSB9IGZyb20gJy4vYmFzZS9pbmRleCc7XHJcbmltcG9ydCB7IFBoYXNlckJpdG1hcFRleHRTeXN0ZW0gfSBmcm9tICcuL3BoYXNlci9pbmRleCc7XHJcbmltcG9ydCB7IFNjb3JlIH0gZnJvbSAnLi9wb25nL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lU3RhdGUgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xyXG4gICAgcHJpdmF0ZSBlY3M6IEJhc2VXb3JsZDtcclxuXHJcbiAgICBpbml0KCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGZvbnQgPSBuZXcgQmFzZUJpdG1hcEZvbnQoJ1ByZXNzIFN0YXJ0IDJQJywgJ2ZvbnRzL1ByZXNzX1N0YXJ0XzJQXzAucG5nJywgJ2ZvbnRzL1ByZXNzX1N0YXJ0XzJQLmZudCcsIDMyKTtcclxuICAgICAgICBjb25zdCBlbnRpdGllcyA9IG5ldyBCYXNlRW50aXR5UG9vbCgpXHJcbiAgICAgICAgICAgIC5jcmVhdGVNYW55KFtcclxuICAgICAgICAgICAgICAgIG5ldyBTY29yZShcclxuICAgICAgICAgICAgICAgICAgICBuZXcgQmFzZVBvc2l0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjI1ICogdGhpcy5nYW1lLndvcmxkLndpZHRoIC0gMiAqIGZvbnQuc2l6ZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA0ICogZm9udC5zaXplKClcclxuICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBuZXcgU2NvcmUoXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IEJhc2VQb3NpdGlvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC43NSAqIHRoaXMuZ2FtZS53b3JsZC53aWR0aCAtIDIgKiBmb250LnNpemUoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgNCAqIGZvbnQuc2l6ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICBmb250XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgIHRoaXMuZWNzID0gbmV3IEJhc2VXb3JsZChcclxuICAgICAgICAgICAgZW50aXRpZXMsXHJcbiAgICAgICAgICAgIG5ldyBCYXNlU3lzdGVtQ29sbGVjdGlvbihbXHJcbiAgICAgICAgICAgICAgICBuZXcgUGhhc2VyQml0bWFwVGV4dFN5c3RlbShlbnRpdGllcywgdGhpcy5nYW1lLmxvYWQsIHRoaXMuZ2FtZS5hZGQpXHJcbiAgICAgICAgICAgIF0pXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwcmVsb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIG5ldyBQaGFzZUV4ZWN1dGUodGhpcy5lY3Muc3lzdGVtcygpLCBMb2FkLklEKVxyXG4gICAgICAgICAgICAuZXhlY3V0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZSgpOiB2b2lkIHtcclxuICAgICAgICBuZXcgUGhhc2VFeGVjdXRlKHRoaXMuZWNzLnN5c3RlbXMoKSwgU3RhcnQuSUQpXHJcbiAgICAgICAgICAgIC5leGVjdXRlKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBDb21wb25lbnRJZCB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBCYXNlSWQgfSBmcm9tICcuLi9pZC9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQmFzZUNvbXBvbmVudElkIGV4dGVuZHMgQmFzZUlkIGltcGxlbWVudHMgQ29tcG9uZW50SWQge1xyXG59IiwiaW1wb3J0IHsgRHVwbGljYXRlRXJyb3IgfSBmcm9tICcuLi8uLi9zeXN0ZW0vaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbXBvbmVudER1cGxpY2F0ZUVycm9yIGV4dGVuZHMgRHVwbGljYXRlRXJyb3Ige1xyXG4gICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHtcclxuICAgICAgICBzdXBlciguLi5hcmdzKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IE5vdEZvdW5kRXJyb3IgfSBmcm9tICcuLi8uLi9zeXN0ZW0vaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbXBvbmVudE5vdEZvdW5kRXJyb3IgZXh0ZW5kcyBOb3RGb3VuZEVycm9yIHtcclxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XHJcbiAgICAgICAgc3VwZXIoLi4uYXJncyk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgKiBmcm9tICcuL0Jhc2VDb21wb25lbnRJZCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vQ29tcG9uZW50RHVwbGljYXRlRXJyb3InO1xyXG5leHBvcnQgKiBmcm9tICcuL0NvbXBvbmVudE5vdEZvdW5kRXJyb3InOyIsImltcG9ydCB7IEVudGl0eSB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBFbnRpdHlJZCB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQ29tcG9uZW50SWQgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQ29tcG9uZW50Tm90Rm91bmRFcnJvciB9IGZyb20gJy4uL2NvbXBvbmVudC9pbmRleCc7XHJcbmltcG9ydCB7IENvbXBvbmVudER1cGxpY2F0ZUVycm9yIH0gZnJvbSAnLi4vY29tcG9uZW50L2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNlRW50aXR5IGltcGxlbWVudHMgRW50aXR5IHtcclxuICAgIHByaXZhdGUgZW50aXR5SWQ6IEVudGl0eUlkO1xyXG4gICAgcHJpdmF0ZSBjb21wb25lbnRzOiBNYXA8Q29tcG9uZW50SWQsIENvbXBvbmVudD47XHJcblxyXG4gICAgY29uc3RydWN0b3IgKFxyXG4gICAgICAgIGlkOiBFbnRpdHlJZCxcclxuICAgICAgICBjb21wb25lbnRzOiBNYXA8Q29tcG9uZW50SWQsIENvbXBvbmVudD4gPSBuZXcgTWFwKClcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IGNvbXBvbmVudHM7XHJcbiAgICAgICAgdGhpcy5lbnRpdHlJZCA9IGlkO1xyXG4gICAgfVxyXG5cclxuICAgIGlkKCk6IEVudGl0eUlkIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbnRpdHlJZDtcclxuICAgIH1cclxuXHJcbiAgICBhdHRhY2goY29tcG9uZW50OiBDb21wb25lbnQpOiBFbnRpdHkge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbXBvbmVudHMuaGFzKGNvbXBvbmVudC5pZCgpKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgQ29tcG9uZW50RHVwbGljYXRlRXJyb3IoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLnNldChjb21wb25lbnQuaWQoKSwgY29tcG9uZW50KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgYXR0YWNoTWFueShjb21wb25lbnRzOiBDb21wb25lbnRbXSk6IEVudGl0eSB7XHJcbiAgICAgICAgY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYXR0YWNoKGNvbXBvbmVudCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGRldGFjaChpZDogQ29tcG9uZW50SWQpOiBFbnRpdHkge1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5kZWxldGUoaWQpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBoYXMoY29tcG9uZW50czogQ29tcG9uZW50SWRbXSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBjb21wb25lbnRzLmV2ZXJ5KGlkID0+IHRoaXMuY29tcG9uZW50cy5oYXMoaWQpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQ8VCBleHRlbmRzIENvbXBvbmVudD4oY29tcG9uZW50OiBDb21wb25lbnRJZCk6IFQge1xyXG4gICAgICAgIGlmICghdGhpcy5jb21wb25lbnRzLmhhcyhjb21wb25lbnQpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBDb21wb25lbnROb3RGb3VuZEVycm9yKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnRzLmdldChjb21wb25lbnQpIGFzIFQ7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHsgRW50aXR5SWQgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQmFzZUlkIH0gZnJvbSAnLi4vaWQvaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhc2VFbnRpdHlJZCBleHRlbmRzIEJhc2VJZCBpbXBsZW1lbnRzIEVudGl0eUlkIHtcclxufSIsImltcG9ydCB7IEVudGl0eSB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBFbnRpdHlJZCB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBFbnRpdHlQb29sIH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFByZWZhYiB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQ29tcG9uZW50SWQgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQmFzZUVudGl0eSB9IGZyb20gJy4vQmFzZUVudGl0eSc7XHJcbmltcG9ydCB7IEJhc2VFbnRpdHlJZCB9IGZyb20gJy4vQmFzZUVudGl0eUlkJztcclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNlRW50aXR5UG9vbCBpbXBsZW1lbnRzIEVudGl0eVBvb2wge1xyXG4gICAgcHJpdmF0ZSBwb29sOiBFbnRpdHlbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnBvb2wgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldE5ld0lkKCk6IEVudGl0eUlkIHtcclxuICAgICAgICByZXR1cm4gbmV3IEJhc2VFbnRpdHlJZCh0aGlzLnBvb2wubGVuZ3RoICsgJycpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZShjb21wb25lbnRzPzogQ29tcG9uZW50W10pOiBFbnRpdHkge1xyXG4gICAgICAgIGNvbnN0IGVudGl0eSA9IG5ldyBCYXNlRW50aXR5KFxyXG4gICAgICAgICAgICB0aGlzLmdldE5ld0lkKCksXHJcbiAgICAgICAgICAgIG5ldyBNYXAoXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzLm1hcChjb21wb25lbnQgPT4gW2NvbXBvbmVudC5pZCgpLCBjb21wb25lbnRdIGFzIFtDb21wb25lbnRJZCwgQ29tcG9uZW50XSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5wb29sLnB1c2goZW50aXR5KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGVudGl0eTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVNYW55KHByZWZhYnM6IFByZWZhYltdKTogRW50aXR5UG9vbCB7XHJcbiAgICAgICAgcHJlZmFicy5mb3JFYWNoKHByZWZhYiA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlKFxyXG4gICAgICAgICAgICAgICAgcHJlZmFiLmNyZWF0ZSgpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGVudGl0aWVzKCk6IEVudGl0eVtdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wb29sO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7IFNlYXJjaCB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQ29tcG9uZW50SWQgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgRW50aXR5UG9vbCB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBFbnRpdHkgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgRW50aXR5U2VhcmNoIH0gZnJvbSAnLi9FbnRpdHlTZWFyY2gnO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbXBvbmVudFNlYXJjaDxUIGV4dGVuZHMgQ29tcG9uZW50PiBpbXBsZW1lbnRzIFNlYXJjaDxUPiB7XHJcbiAgICBwcml2YXRlIGlkOiBDb21wb25lbnRJZDtcclxuICAgIHByaXZhdGUgZW50aXR5U2VhcmNoOiBFbnRpdHlTZWFyY2g7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgaWQ6IENvbXBvbmVudElkLFxyXG4gICAgICAgIGVudGl0eVNlYXJjaDogRW50aXR5U2VhcmNoID0gbmV3IEVudGl0eVNlYXJjaChpZClcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLmVudGl0eVNlYXJjaCA9IGVudGl0eVNlYXJjaDtcclxuICAgIH1cclxuXHJcbiAgICBmaW5kKHBvb2w6IEVudGl0eVBvb2wpOiBUW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVudGl0eVNlYXJjaC5maW5kKHBvb2wpXHJcbiAgICAgICAgICAgIC5tYXAoZW50aXR5ID0+IGVudGl0eS5nZXQ8VD4odGhpcy5pZCkpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRW50aXR5IH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IEVudGl0eVBvb2wgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IENvbXBvbmVudElkIH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFNlYXJjaCB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVudGl0eVNlYXJjaCBpbXBsZW1lbnRzIFNlYXJjaDxFbnRpdHk+IHtcclxuICAgIHByaXZhdGUgaWRzOiBDb21wb25lbnRJZFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGlkczogQ29tcG9uZW50SWRbXSB8IENvbXBvbmVudElkKSB7XHJcbiAgICAgICAgdGhpcy5pZHMgPSAoaWRzICYmIGlkcy5jb25zdHJ1Y3RvciA9PT0gQXJyYXkpID9cclxuICAgICAgICAgICAgaWRzIGFzIENvbXBvbmVudElkW10gOlxyXG4gICAgICAgICAgICBbaWRzIGFzIENvbXBvbmVudElkXTtcclxuICAgIH1cclxuXHJcbiAgICBmaW5kKHBvb2w6IEVudGl0eVBvb2wpOiBFbnRpdHlbXSB7XHJcbiAgICAgICAgcmV0dXJuIHBvb2wuZW50aXRpZXMoKVxyXG4gICAgICAgICAgICAuZmlsdGVyKGVudGl0eSA9PiBlbnRpdHkuaGFzKHRoaXMuaWRzKSk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgKiBmcm9tICcuL0Jhc2VFbnRpdHknO1xyXG5leHBvcnQgKiBmcm9tICcuL0Jhc2VFbnRpdHlJZCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vQmFzZUVudGl0eVBvb2wnO1xyXG5leHBvcnQgKiBmcm9tICcuL0NvbXBvbmVudFNlYXJjaCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vRW50aXR5U2VhcmNoJzsiLCJleHBvcnQgY2xhc3MgQmFzZUJpdG1hcEZvbnQge1xyXG4gICAgcHJpdmF0ZSBrZXk6IHN0cmluZztcclxuICAgIHByaXZhdGUgaW1hZ2VQYXRoOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIGF0bGFzUGF0aDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBmb250U2l6ZTogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGtleTogc3RyaW5nLCBpbWFnZVBhdGg6IHN0cmluZywgYXRsYXNQYXRoOiBzdHJpbmcsIHNpemU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMua2V5ID0ga2V5O1xyXG4gICAgICAgIHRoaXMuaW1hZ2VQYXRoID0gaW1hZ2VQYXRoO1xyXG4gICAgICAgIHRoaXMuYXRsYXNQYXRoID0gYXRsYXNQYXRoO1xyXG4gICAgICAgIHRoaXMuZm9udFNpemUgPSBzaXplO1xyXG4gICAgfVxyXG5cclxuICAgIGlkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMua2V5O1xyXG4gICAgfVxyXG5cclxuICAgIGltYWdlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW1hZ2VQYXRoO1xyXG4gICAgfVxyXG5cclxuICAgIGF0bGFzKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXRsYXNQYXRoO1xyXG4gICAgfVxyXG5cclxuICAgIHNpemUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5mb250U2l6ZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEVudGl0eVBvb2wgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgU2VhcmNoIH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IEJpdG1hcFRleHRDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQml0bWFwRm9udCB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRTZWFyY2ggfSBmcm9tICcuLi9lbnRpdHkvaW5kZXgnO1xyXG5pbXBvcnQgeyBCYXNlQml0bWFwVGV4dCB9IGZyb20gJy4uL3RleHQvaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJpdG1hcEZvbnRTZWFyY2ggaW1wbGVtZW50cyBTZWFyY2g8Qml0bWFwRm9udD4ge1xyXG4gICAgcHJpdmF0ZSBzZWFyY2g6IENvbXBvbmVudFNlYXJjaDxCaXRtYXBUZXh0Q29tcG9uZW50PjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzZWFyY2g6IENvbXBvbmVudFNlYXJjaDxCaXRtYXBUZXh0Q29tcG9uZW50PiA9IG5ldyBDb21wb25lbnRTZWFyY2g8Qml0bWFwVGV4dENvbXBvbmVudD4oQmFzZUJpdG1hcFRleHQuSUQpKSB7XHJcbiAgICAgICAgdGhpcy5zZWFyY2ggPSBzZWFyY2g7XHJcbiAgICB9XHJcblxyXG4gICAgZmluZChwb29sOiBFbnRpdHlQb29sKTogQml0bWFwRm9udFtdIHtcclxuICAgICAgICByZXR1cm4gWy4uLm5ldyBTZXQoLy8gdW5pcXVlIHNldFxyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaC5maW5kKHBvb2wpXHJcbiAgICAgICAgICAgICAgICAubWFwKHRleHQgPT4gdGV4dC5mb250KCkpXHJcbiAgICAgICAgKV07XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgKiBmcm9tICcuL0Jhc2VCaXRtYXBGb250JztcclxuZXhwb3J0ICogZnJvbSAnLi9CaXRtYXBGb250U2VhcmNoJzsiLCJpbXBvcnQgeyBJZCB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhc2VJZCBpbXBsZW1lbnRzIElkIHtcclxuICAgIHByaXZhdGUgaWQ6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpZDogSWQgfCBzdHJpbmcgfCBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmlkID0gKGlkIGluc3RhbmNlb2YgT2JqZWN0KSA/XHJcbiAgICAgICAgICAgIChpZCBhcyBJZCkucHJpbnQoKSA6XHJcbiAgICAgICAgICAgIGlkICsgJyc7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpbnQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pZDtcclxuICAgIH1cclxufSIsImV4cG9ydCAqIGZyb20gJy4vQmFzZUlkJzsiLCJleHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudC9pbmRleCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZW50aXR5L2luZGV4JztcclxuZXhwb3J0ICogZnJvbSAnLi9mb250L2luZGV4JztcclxuZXhwb3J0ICogZnJvbSAnLi9pZC9pbmRleCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vcGhhc2UvaW5kZXgnO1xyXG5leHBvcnQgKiBmcm9tICcuL3Bvc2l0aW9uL2luZGV4JztcclxuZXhwb3J0ICogZnJvbSAnLi9zeXN0ZW0vaW5kZXgnO1xyXG5leHBvcnQgKiBmcm9tICcuL3RleHQvaW5kZXgnO1xyXG5leHBvcnQgKiBmcm9tICcuL3dvcmxkL2luZGV4JzsiLCJpbXBvcnQgeyBDb21wb25lbnRJZCB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBCYXNlSWQgfSBmcm9tICcuLi9pZC9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQmFzZVBoYXNlSWQgZXh0ZW5kcyBCYXNlSWQgaW1wbGVtZW50cyBDb21wb25lbnRJZCB7XHJcbn0iLCJpbXBvcnQgeyBQaGFzZVBvb2wgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgUGhhc2UgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgUGhhc2VJZCB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhc2VQaGFzZVBvb2wgaW1wbGVtZW50cyBQaGFzZVBvb2wge1xyXG4gICAgcHJpdmF0ZSBwaGFzZXM6IE1hcDxQaGFzZUlkLCBQaGFzZT47XHJcblxyXG4gICAgY29uc3RydWN0b3IocGhhc2VzOiBQaGFzZVtdIHwgTWFwPFBoYXNlSWQsIFBoYXNlPikge1xyXG4gICAgICAgIHRoaXMucGhhc2VzID0gKHBoYXNlcyBpbnN0YW5jZW9mIE1hcCkgPyBwaGFzZXMgOlxyXG4gICAgICAgICAgICBuZXcgTWFwKFxyXG4gICAgICAgICAgICAgICAgcGhhc2VzLm1hcChwaGFzZSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIFtwaGFzZS5pZCgpLCBwaGFzZV0gYXMgW1BoYXNlSWQsIFBoYXNlXVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGhhcyhpZDogUGhhc2VJZCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBoYXNlcy5oYXMoaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldDxUIGV4dGVuZHMgUGhhc2U+KGlkOiBQaGFzZUlkKTogVCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGhhc2VzLmdldChpZCkgYXMgVDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFBoYXNlIH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFBoYXNlSWQgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQmFzZVBoYXNlSWQgfSBmcm9tICcuL0Jhc2VQaGFzZUlkJztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBMb2FkIGltcGxlbWVudHMgUGhhc2Uge1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBJRCA9IG5ldyBCYXNlUGhhc2VJZChMb2FkLm5hbWUpO1xyXG5cclxuICAgIGlkKCk6IFBoYXNlSWQge1xyXG4gICAgICAgIHJldHVybiBMb2FkLklEO1xyXG4gICAgfVxyXG5cclxuICAgIGFic3RyYWN0IGV4ZWN1dGUoKTogdm9pZDtcclxufSIsImltcG9ydCB7IFN5c3RlbUNvbGxlY3Rpb24gfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgUGhhc2VJZCB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBQaGFzZVNlYXJjaCB9IGZyb20gJy4uL3N5c3RlbS9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgUGhhc2VFeGVjdXRlIHtcclxuICAgIHByaXZhdGUgc3lzdGVtczogU3lzdGVtQ29sbGVjdGlvbjtcclxuICAgIHByaXZhdGUgc2VhcmNoOiBQaGFzZVNlYXJjaDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzeXN0ZW1zOiBTeXN0ZW1Db2xsZWN0aW9uLCBzZWFyY2g6IFBoYXNlU2VhcmNoIHwgUGhhc2VJZCkge1xyXG4gICAgICAgIHRoaXMuc3lzdGVtcyA9IHN5c3RlbXM7XHJcbiAgICAgICAgdGhpcy5zZWFyY2ggPSAoc2VhcmNoIGluc3RhbmNlb2YgUGhhc2VTZWFyY2gpID8gc2VhcmNoIDogbmV3IFBoYXNlU2VhcmNoKHNlYXJjaCk7XHJcbiAgICB9XHJcblxyXG4gICAgZXhlY3V0ZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNlYXJjaC5maW5kKHRoaXMuc3lzdGVtcylcclxuICAgICAgICAgICAgLmZvckVhY2gocGhhc2UgPT4gcGhhc2UuZXhlY3V0ZSgpKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFBoYXNlIH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFBoYXNlSWQgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQmFzZVBoYXNlSWQgfSBmcm9tICcuL0Jhc2VQaGFzZUlkJztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTdGFydCBpbXBsZW1lbnRzIFBoYXNlIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgSUQgPSBuZXcgQmFzZVBoYXNlSWQoU3RhcnQubmFtZSk7XHJcblxyXG4gICAgaWQoKTogUGhhc2VJZCB7XHJcbiAgICAgICAgcmV0dXJuIFN0YXJ0LklEO1xyXG4gICAgfVxyXG5cclxuICAgIGFic3RyYWN0IGV4ZWN1dGUoKTogdm9pZDtcclxufSIsImV4cG9ydCAqIGZyb20gJy4vQmFzZVBoYXNlSWQnO1xyXG5leHBvcnQgKiBmcm9tICcuL0Jhc2VQaGFzZVBvb2wnO1xyXG5leHBvcnQgKiBmcm9tICcuL0xvYWQnO1xyXG5leHBvcnQgKiBmcm9tICcuL1BoYXNlRXhlY3V0ZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vU3RhcnQnOyIsImltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQmFzZVBvc2l0aW9uIGltcGxlbWVudHMgUG9zaXRpb24ge1xyXG4gICAgcHJpdmF0ZSBjb29yZGluYXRlczogbnVtYmVyW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmNvb3JkaW5hdGVzID0gW3gsIHldO1xyXG4gICAgfVxyXG5cclxuICAgIHgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb29yZGluYXRlc1swXTtcclxuICAgIH1cclxuXHJcbiAgICB5KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29vcmRpbmF0ZXNbMV07XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgKiBmcm9tICcuL0Jhc2VQb3NpdGlvbic7IiwiaW1wb3J0IHsgUGhhc2VQb29sIH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFN5c3RlbSB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBQaGFzZSB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBQaGFzZUlkIH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IEJhc2VQaGFzZVBvb2wgfSBmcm9tICcuLi9waGFzZS9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQmFzZVN5c3RlbSBpbXBsZW1lbnRzIFN5c3RlbSB7XHJcbiAgICBwcml2YXRlIHBoYXNlUG9vbDogUGhhc2VQb29sO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBoYXNlczogUGhhc2VQb29sIHwgUGhhc2VbXSB8IE1hcDxQaGFzZUlkLCBQaGFzZT4pIHtcclxuICAgICAgICB0aGlzLnBoYXNlUG9vbCA9IChwaGFzZXMgaW5zdGFuY2VvZiBBcnJheSB8fCBwaGFzZXMgaW5zdGFuY2VvZiBNYXApID9cclxuICAgICAgICAgICAgbmV3IEJhc2VQaGFzZVBvb2wocGhhc2VzKSA6XHJcbiAgICAgICAgICAgIHBoYXNlcztcclxuICAgIH1cclxuXHJcbiAgICBwaGFzZXMoKTogUGhhc2VQb29sIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5waGFzZVBvb2w7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBTeXN0ZW0gfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgU3lzdGVtQ29sbGVjdGlvbiB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBQaGFzZUlkIH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQmFzZVN5c3RlbUNvbGxlY3Rpb24gaW1wbGVtZW50cyBTeXN0ZW1Db2xsZWN0aW9uIHtcclxuICAgIHByaXZhdGUgc3lzdGVtczogU3lzdGVtW107XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc3lzdGVtcz86IFN5c3RlbVtdKSB7XHJcbiAgICAgICAgdGhpcy5zeXN0ZW1zID0gc3lzdGVtcyB8fCBbXTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlcihzeXN0ZW06IFN5c3RlbSk6IFN5c3RlbUNvbGxlY3Rpb24ge1xyXG4gICAgICAgIHRoaXMuc3lzdGVtcy5wdXNoKHN5c3RlbSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyTWFueShzeXN0ZW1zOiBTeXN0ZW1bXSk6IFN5c3RlbUNvbGxlY3Rpb24ge1xyXG4gICAgICAgIHN5c3RlbXMuZm9yRWFjaChzeXN0ZW0gPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyKHN5c3RlbSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbHRlcihpZDogUGhhc2VJZCk6IFN5c3RlbVtdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zeXN0ZW1zLmZpbHRlcihzeXN0ZW0gPT5cclxuICAgICAgICAgICAgc3lzdGVtLnBoYXNlcygpLmhhcyhpZClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgU3lzdGVtU2VhcmNoIH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFN5c3RlbUNvbGxlY3Rpb24gfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgUGhhc2UgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgUGhhc2VJZCB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBoYXNlU2VhcmNoIGltcGxlbWVudHMgU3lzdGVtU2VhcmNoPFBoYXNlPiB7XHJcbiAgICBwcml2YXRlIGlkOiBQaGFzZUlkO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGlkOiBQaGFzZUlkKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbmQoc3lzdGVtczogU3lzdGVtQ29sbGVjdGlvbik6IFBoYXNlW10ge1xyXG4gICAgICAgIHJldHVybiBzeXN0ZW1zLmZpbHRlcih0aGlzLmlkKVxyXG4gICAgICAgICAgICAubWFwKHN5c3RlbSA9PiBzeXN0ZW0ucGhhc2VzKCkuZ2V0KHRoaXMuaWQpKTtcclxuICAgIH1cclxufSIsImV4cG9ydCAqIGZyb20gJy4vQmFzZVN5c3RlbSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vQmFzZVN5c3RlbUNvbGxlY3Rpb24nO1xyXG5leHBvcnQgKiBmcm9tICcuL1BoYXNlU2VhcmNoJzsiLCJpbXBvcnQgeyBCaXRtYXBGb250IH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IENvbXBvbmVudElkIH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IEJpdG1hcFRleHRDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgUmVhZFdyaXRlVGV4dCB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBXcml0ZVRleHQgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQmFzZUNvbXBvbmVudElkIH0gZnJvbSAnLi4vY29tcG9uZW50L2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNlQml0bWFwVGV4dCBpbXBsZW1lbnRzIEJpdG1hcFRleHRDb21wb25lbnQge1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBJRCA9IG5ldyBCYXNlQ29tcG9uZW50SWQoQmFzZUJpdG1hcFRleHQubmFtZSk7XHJcblxyXG4gICAgcHJpdmF0ZSB0ZXh0UG9zaXRpb246IFBvc2l0aW9uO1xyXG4gICAgcHJpdmF0ZSB0ZXh0Rm9udDogQml0bWFwRm9udDtcclxuICAgIHByaXZhdGUgd3JpdGVUZXh0OiBSZWFkV3JpdGVUZXh0O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uOiBQb3NpdGlvbiwgZm9udDogQml0bWFwRm9udCwgdGV4dDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy50ZXh0UG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgICAgICB0aGlzLnRleHRGb250ID0gZm9udDtcclxuICAgICAgICB0aGlzLndyaXRlVGV4dCA9IG5ldyBSZWFkV3JpdGVUZXh0KHRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGlkKCk6IENvbXBvbmVudElkIHtcclxuICAgICAgICByZXR1cm4gQmFzZUJpdG1hcFRleHQuSUQ7XHJcbiAgICB9XHJcblxyXG4gICAgcG9zaXRpb24oKTogUG9zaXRpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRleHRQb3NpdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBmb250KCk6IEJpdG1hcEZvbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRleHRGb250O1xyXG4gICAgfVxyXG5cclxuICAgIHRleHQoKTogV3JpdGVUZXh0IHtcclxuICAgICAgICByZXR1cm4gdGhpcy53cml0ZVRleHQ7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgUmVhZFRleHQgaW1wbGVtZW50cyBUZXh0IHtcclxuICAgIHByaXZhdGUgdGV4dDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHRleHQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgdmFsdWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50ZXh0O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgV3JpdGVUZXh0IH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgUmVhZFdyaXRlVGV4dCBpbXBsZW1lbnRzIFdyaXRlVGV4dCB7XHJcbiAgICBwcml2YXRlIHRleHQ6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0ZXh0OiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHZhbHVlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dDtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUodGV4dDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcclxuICAgIH1cclxufSIsImV4cG9ydCAqIGZyb20gJy4vQmFzZUJpdG1hcFRleHQnO1xyXG5leHBvcnQgKiBmcm9tICcuL1JlYWRUZXh0JztcclxuZXhwb3J0ICogZnJvbSAnLi9SZWFkV3JpdGVUZXh0JzsiLCJpbXBvcnQgeyBFbnRpdHlQb29sIH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFN5c3RlbUNvbGxlY3Rpb24gfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgV29ybGQgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNlV29ybGQgaW1wbGVtZW50cyBXb3JsZCB7XHJcbiAgICBwcml2YXRlIGVudGl0eVBvb2w6IEVudGl0eVBvb2w7XHJcbiAgICBwcml2YXRlIHN5c3RlbUNvbGxlY3Rpb246IFN5c3RlbUNvbGxlY3Rpb247XHJcblxyXG4gICAgY29uc3RydWN0b3IoZW50aXRpZXM6IEVudGl0eVBvb2wsIHN5c3RlbXM6IFN5c3RlbUNvbGxlY3Rpb24pIHtcclxuICAgICAgICB0aGlzLmVudGl0eVBvb2wgPSBlbnRpdGllcztcclxuICAgICAgICB0aGlzLnN5c3RlbUNvbGxlY3Rpb24gPSBzeXN0ZW1zO1xyXG4gICAgfVxyXG5cclxuICAgIGVudGl0aWVzKCk6IEVudGl0eVBvb2wge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVudGl0eVBvb2w7XHJcbiAgICB9XHJcblxyXG4gICAgc3lzdGVtcygpOiBTeXN0ZW1Db2xsZWN0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zeXN0ZW1Db2xsZWN0aW9uO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0ICogZnJvbSAnLi9CYXNlV29ybGQnOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJpdG1hcEZvbnQge1xyXG4gICAgcHJpdmF0ZSBrZXk6IHN0cmluZztcclxuICAgIHByaXZhdGUgaW1hZ2VQYXRoOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIGF0bGFzUGF0aDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBmb250U2l6ZTogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGtleTogc3RyaW5nLCBpbWFnZVBhdGg6IHN0cmluZywgYXRsYXNQYXRoOiBzdHJpbmcsIHNpemU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMua2V5ID0ga2V5O1xyXG4gICAgICAgIHRoaXMuaW1hZ2VQYXRoID0gaW1hZ2VQYXRoO1xyXG4gICAgICAgIHRoaXMuYXRsYXNQYXRoID0gYXRsYXNQYXRoO1xyXG4gICAgICAgIHRoaXMuZm9udFNpemUgPSBzaXplO1xyXG4gICAgfVxyXG5cclxuICAgIGlkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMua2V5O1xyXG4gICAgfVxyXG5cclxuICAgIGltYWdlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW1hZ2VQYXRoO1xyXG4gICAgfVxyXG5cclxuICAgIGF0bGFzKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXRsYXNQYXRoO1xyXG4gICAgfVxyXG5cclxuICAgIHNpemUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5mb250U2l6ZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEVudGl0eVBvb2wgfSBmcm9tICcuLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgU2VhcmNoIH0gZnJvbSAnLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IENvbXBvbmVudFNlYXJjaCB9IGZyb20gJy4uL2Jhc2UvaW5kZXgnO1xyXG5pbXBvcnQgeyBCaXRtYXBUZXh0Q29tcG9uZW50IH0gZnJvbSAnLi4vdGV4dC9pbmRleCc7XHJcbmltcG9ydCB7IEJhc2VCaXRtYXBUZXh0IH0gZnJvbSAnLi4vdGV4dC9pbmRleCc7XHJcbmltcG9ydCBCaXRtYXBGb250IGZyb20gJy4vQml0bWFwRm9udCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCaXRtYXBGb250U2VhcmNoIGltcGxlbWVudHMgU2VhcmNoPEJpdG1hcEZvbnQ+IHtcclxuICAgIHByaXZhdGUgc2VhcmNoOiBDb21wb25lbnRTZWFyY2g8Qml0bWFwVGV4dENvbXBvbmVudD47XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2VhcmNoOiBDb21wb25lbnRTZWFyY2g8Qml0bWFwVGV4dENvbXBvbmVudD4gPSBuZXcgQ29tcG9uZW50U2VhcmNoPEJpdG1hcFRleHRDb21wb25lbnQ+KEJhc2VCaXRtYXBUZXh0LklEKSkge1xyXG4gICAgICAgIHRoaXMuc2VhcmNoID0gc2VhcmNoO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbmQocG9vbDogRW50aXR5UG9vbCk6IEJpdG1hcEZvbnRbXSB7XHJcbiAgICAgICAgcmV0dXJuIFsuLi5uZXcgU2V0KC8vIHVuaXF1ZSBzZXRcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2guZmluZChwb29sKVxyXG4gICAgICAgICAgICAgICAgLm1hcCh0ZXh0ID0+IHRleHQuZm9udCgpKVxyXG4gICAgICAgICldO1xyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvaW5kZXguZC50c1wiLz5cclxuXHJcbmltcG9ydCBCaXRtYXBGb250IGZyb20gJy4vQml0bWFwRm9udCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQaGFzZXJCaXRtYXBGb250TG9hZCB7XHJcbiAgICBwcml2YXRlIGxvYWRlcjogUGhhc2VyLkxvYWRlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihsb2FkZXI6IFBoYXNlci5Mb2FkZXIpIHtcclxuICAgICAgICB0aGlzLmxvYWRlciA9IGxvYWRlcjtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkKGZvbnRzOiBCaXRtYXBGb250W10pOiBQaGFzZXJCaXRtYXBGb250TG9hZCB7XHJcbiAgICAgICAgZm9udHMuZm9yRWFjaChmb250ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkZXIuYml0bWFwRm9udChcclxuICAgICAgICAgICAgICAgIGZvbnQuaWQoKSxcclxuICAgICAgICAgICAgICAgIGZvbnQuaW1hZ2UoKSxcclxuICAgICAgICAgICAgICAgIGZvbnQuYXRsYXMoKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufSIsImltcG9ydCBCaXRtYXBGb250IGZyb20gJy4vQml0bWFwRm9udCc7XHJcbmltcG9ydCBCaXRtYXBGb250U2VhcmNoIGZyb20gJy4vQml0bWFwRm9udFNlYXJjaCc7XHJcbmltcG9ydCBQaGFzZXJCaXRtYXBGb250TG9hZCBmcm9tICcuL1BoYXNlckJpdG1hcEZvbnRMb2FkJztcclxuXHJcbmV4cG9ydCB7XHJcbiAgICBCaXRtYXBGb250LFxyXG4gICAgQml0bWFwRm9udFNlYXJjaCxcclxuICAgIFBoYXNlckJpdG1hcEZvbnRMb2FkXHJcbn07IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvaW5kZXguZC50c1wiLz5cclxuXHJcbmltcG9ydCB7IEVjc1BvbmcgfSBmcm9tICcuL0Vjc1BvbmcnO1xyXG5cclxubmV3IEVjc1BvbmcoKS5zdGFydCgpOyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi8uLi90eXBpbmdzL2luZGV4LmQudHNcIi8+XHJcblxyXG5pbXBvcnQgeyBCaXRtYXBGb250IH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgUGhhc2VyQml0bWFwRm9udExvYWQge1xyXG4gICAgcHJpdmF0ZSBsb2FkZXI6IFBoYXNlci5Mb2FkZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IobG9hZGVyOiBQaGFzZXIuTG9hZGVyKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkZXIgPSBsb2FkZXI7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZChmb250czogQml0bWFwRm9udFtdKTogUGhhc2VyQml0bWFwRm9udExvYWQge1xyXG4gICAgICAgIGZvbnRzLmZvckVhY2goZm9udCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZGVyLmJpdG1hcEZvbnQoXHJcbiAgICAgICAgICAgICAgICBmb250LmlkKCksXHJcbiAgICAgICAgICAgICAgICBmb250LmltYWdlKCksXHJcbiAgICAgICAgICAgICAgICBmb250LmF0bGFzKClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgKiBmcm9tICcuL1BoYXNlckJpdG1hcEZvbnRMb2FkJzsiLCJleHBvcnQgKiBmcm9tICcuL2ZvbnQvaW5kZXgnO1xyXG5leHBvcnQgKiBmcm9tICcuL3RleHQvaW5kZXgnOyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi8uLi90eXBpbmdzL2luZGV4LmQudHNcIi8+XHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQ29tcG9uZW50SWQgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgUG9zaXRpb24gfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQml0bWFwRm9udCB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBCaXRtYXBUZXh0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFdyaXRlVGV4dCB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50SWQgfSBmcm9tICcuLi8uLi9iYXNlL2luZGV4JztcclxuaW1wb3J0IHsgQmFzZVBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vYmFzZS9pbmRleCc7XHJcbmltcG9ydCB7IFBoYXNlclRleHQgfSBmcm9tICcuLi90ZXh0L2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBQaGFzZXJCaXRtYXBUZXh0IGltcGxlbWVudHMgQml0bWFwVGV4dENvbXBvbmVudCB7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IElEID0gbmV3IEJhc2VDb21wb25lbnRJZChQaGFzZXJCaXRtYXBUZXh0Lm5hbWUpO1xyXG5cclxuICAgIHByaXZhdGUgYml0bWFwVGV4dDogUGhhc2VyLkJpdG1hcFRleHQ7XHJcbiAgICBwcml2YXRlIHRleHRGb250OiBCaXRtYXBGb250O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHRleHQ6IFBoYXNlci5CaXRtYXBUZXh0LCBmb250OiBCaXRtYXBGb250KSB7XHJcbiAgICAgICAgdGhpcy5iaXRtYXBUZXh0ID0gdGV4dDtcclxuICAgICAgICB0aGlzLnRleHRGb250ID0gZm9udDtcclxuICAgIH1cclxuXHJcbiAgICBpZCgpOiBDb21wb25lbnRJZCB7XHJcbiAgICAgICAgcmV0dXJuIFBoYXNlckJpdG1hcFRleHQuSUQ7XHJcbiAgICB9XHJcblxyXG4gICAgcG9zaXRpb24oKTogUG9zaXRpb24ge1xyXG4gICAgICAgIHJldHVybiBuZXcgQmFzZVBvc2l0aW9uKHRoaXMuYml0bWFwVGV4dC54LCB0aGlzLmJpdG1hcFRleHQueSk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9udCgpOiBCaXRtYXBGb250IHtcclxuICAgICAgICByZXR1cm4gdGhpcy50ZXh0Rm9udDtcclxuICAgIH1cclxuXHJcbiAgICB0ZXh0KCk6IFdyaXRlVGV4dCB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQaGFzZXJUZXh0KHRoaXMuYml0bWFwVGV4dCk7XHJcbiAgICB9XHJcblxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uLy4uL3R5cGluZ3MvaW5kZXguZC50c1wiLz5cclxuXHJcbmltcG9ydCB7IEJpdG1hcFRleHRDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBQaGFzZXJCaXRtYXBUZXh0RmFjdG9yeSB7XHJcbiAgICBwcml2YXRlIGZhY3Rvcnk6IFBoYXNlci5HYW1lT2JqZWN0RmFjdG9yeTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihmYWN0b3J5OiBQaGFzZXIuR2FtZU9iamVjdEZhY3RvcnkpIHtcclxuICAgICAgICB0aGlzLmZhY3RvcnkgPSBmYWN0b3J5O1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZSh0ZXh0OiBCaXRtYXBUZXh0Q29tcG9uZW50KTogUGhhc2VyLkJpdG1hcFRleHQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZhY3RvcnkuYml0bWFwVGV4dChcclxuICAgICAgICAgICAgTWF0aC5mbG9vcih0ZXh0LnBvc2l0aW9uKCkueCgpKSxcclxuICAgICAgICAgICAgTWF0aC5mbG9vcih0ZXh0LnBvc2l0aW9uKCkueSgpKSxcclxuICAgICAgICAgICAgdGV4dC5mb250KCkuaWQoKSxcclxuICAgICAgICAgICAgdGV4dC50ZXh0KCkudmFsdWUoKSxcclxuICAgICAgICAgICAgdGV4dC5mb250KCkuc2l6ZSgpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi8uLi90eXBpbmdzL2luZGV4LmQudHNcIi8+XHJcblxyXG5pbXBvcnQgeyBFbnRpdHlQb29sIH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IExvYWQgfSBmcm9tICcuLi8uLi9iYXNlL2luZGV4JztcclxuaW1wb3J0IHsgQml0bWFwRm9udFNlYXJjaCB9IGZyb20gJy4uLy4uL2Jhc2UvaW5kZXgnO1xyXG5pbXBvcnQgeyBQaGFzZXJCaXRtYXBGb250TG9hZCB9IGZyb20gJy4uL2ZvbnQvaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBoYXNlckJpdG1hcFRleHRMb2FkIGV4dGVuZHMgTG9hZCB7XHJcbiAgICBwcml2YXRlIGVudGl0aWVzOiBFbnRpdHlQb29sO1xyXG4gICAgcHJpdmF0ZSBsb2FkZXI6IFBoYXNlci5Mb2FkZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZW50aXRpZXM6IEVudGl0eVBvb2wsIGxvYWRlcjogUGhhc2VyLkxvYWRlcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5lbnRpdGllcyA9IGVudGl0aWVzO1xyXG4gICAgICAgIHRoaXMubG9hZGVyID0gbG9hZGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGV4ZWN1dGUoKTogdm9pZCB7XHJcbiAgICAgICAgbmV3IFBoYXNlckJpdG1hcEZvbnRMb2FkKHRoaXMubG9hZGVyKVxyXG4gICAgICAgICAgICAubG9hZChcclxuICAgICAgICAgICAgICAgIG5ldyBCaXRtYXBGb250U2VhcmNoKClcclxuICAgICAgICAgICAgICAgICAgICAuZmluZCh0aGlzLmVudGl0aWVzKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRW50aXR5UG9vbCB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBCaXRtYXBUZXh0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFN0YXJ0IH0gZnJvbSAnLi4vLi4vYmFzZS9pbmRleCc7XHJcbmltcG9ydCB7IEVudGl0eVNlYXJjaCB9IGZyb20gJy4uLy4uL2Jhc2UvaW5kZXgnO1xyXG5pbXBvcnQgeyBCYXNlQml0bWFwVGV4dCB9IGZyb20gJy4uLy4uL2Jhc2UvaW5kZXgnO1xyXG5pbXBvcnQgeyBQaGFzZXJCaXRtYXBUZXh0IH0gZnJvbSAnLi9QaGFzZXJCaXRtYXBUZXh0JztcclxuaW1wb3J0IHsgUGhhc2VyQml0bWFwVGV4dEZhY3RvcnkgfSBmcm9tICcuL1BoYXNlckJpdG1hcFRleHRGYWN0b3J5JztcclxuXHJcbmV4cG9ydCBjbGFzcyBQaGFzZXJCaXRtYXBUZXh0U3RhcnQgZXh0ZW5kcyBTdGFydCB7XHJcbiAgICBwcml2YXRlIGVudGl0aWVzOiBFbnRpdHlQb29sO1xyXG4gICAgcHJpdmF0ZSBmYWN0b3J5OiBQaGFzZXJCaXRtYXBUZXh0RmFjdG9yeTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbnRpdGllczogRW50aXR5UG9vbCwgZmFjdG9yeTogUGhhc2VyQml0bWFwVGV4dEZhY3RvcnkpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuZW50aXRpZXMgPSBlbnRpdGllcztcclxuICAgICAgICB0aGlzLmZhY3RvcnkgPSBmYWN0b3J5O1xyXG4gICAgfVxyXG5cclxuICAgIGV4ZWN1dGUoKTogdm9pZCB7XHJcbiAgICAgICAgbmV3IEVudGl0eVNlYXJjaChCYXNlQml0bWFwVGV4dC5JRClcclxuICAgICAgICAgICAgLmZpbmQodGhpcy5lbnRpdGllcylcclxuICAgICAgICAgICAgLmZvckVhY2goZW50aXR5ID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRleHQgPSBlbnRpdHkuZ2V0PEJpdG1hcFRleHRDb21wb25lbnQ+KEJhc2VCaXRtYXBUZXh0LklEKTtcclxuICAgICAgICAgICAgICAgIGVudGl0eVxyXG4gICAgICAgICAgICAgICAgICAgIC5hdHRhY2goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBQaGFzZXJCaXRtYXBUZXh0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mYWN0b3J5LmNyZWF0ZSh0ZXh0KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQuZm9udCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgLmRldGFjaCh0ZXh0LmlkKCkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEVudGl0eVBvb2wgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQmFzZVN5c3RlbSB9IGZyb20gJy4uLy4uL2Jhc2UvaW5kZXgnO1xyXG5pbXBvcnQgeyBQaGFzZXJCaXRtYXBUZXh0TG9hZCB9IGZyb20gJy4vUGhhc2VyQml0bWFwVGV4dExvYWQnO1xyXG5pbXBvcnQgeyBQaGFzZXJCaXRtYXBUZXh0U3RhcnQgfSBmcm9tICcuL1BoYXNlckJpdG1hcFRleHRTdGFydCc7XHJcbmltcG9ydCB7IFBoYXNlckJpdG1hcFRleHRGYWN0b3J5IH0gZnJvbSAnLi9QaGFzZXJCaXRtYXBUZXh0RmFjdG9yeSc7XHJcblxyXG4vKipcclxuICogTG9hZHMgYW5kIGNyZWF0ZXMgYml0bWFwIHRleHQgdXNpbmcgUGhhc2VyLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFBoYXNlckJpdG1hcFRleHRTeXN0ZW0gZXh0ZW5kcyBCYXNlU3lzdGVtIHtcclxuICAgIGNvbnN0cnVjdG9yKGVudGl0aWVzOiBFbnRpdHlQb29sLCBsb2FkZXI6IFBoYXNlci5Mb2FkZXIsIGZhY3Rvcnk6IFBoYXNlci5HYW1lT2JqZWN0RmFjdG9yeSkge1xyXG4gICAgICAgIHN1cGVyKFtcclxuICAgICAgICAgICAgbmV3IFBoYXNlckJpdG1hcFRleHRMb2FkKGVudGl0aWVzLCBsb2FkZXIpLFxyXG4gICAgICAgICAgICBuZXcgUGhhc2VyQml0bWFwVGV4dFN0YXJ0KFxyXG4gICAgICAgICAgICAgICAgZW50aXRpZXMsXHJcbiAgICAgICAgICAgICAgICBuZXcgUGhhc2VyQml0bWFwVGV4dEZhY3RvcnkoZmFjdG9yeSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIF0pO1xyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uLy4uL3R5cGluZ3MvaW5kZXguZC50c1wiLz5cclxuXHJcbmltcG9ydCB7IFdyaXRlVGV4dCB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBoYXNlclRleHQgaW1wbGVtZW50cyBXcml0ZVRleHQge1xyXG4gICAgcHJpdmF0ZSB0ZXh0T2JqOiB7IHRleHQgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0ZXh0OiBQaGFzZXIuQml0bWFwVGV4dCkge1xyXG4gICAgICAgIHRoaXMudGV4dE9iaiA9IHRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgdmFsdWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50ZXh0T2JqLnRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKHRleHQ6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudGV4dE9iai50ZXh0ID0gdGV4dDtcclxuICAgIH1cclxufSIsImV4cG9ydCAqIGZyb20gJy4vUGhhc2VyQml0bWFwVGV4dCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vUGhhc2VyQml0bWFwVGV4dEZhY3RvcnknO1xyXG5leHBvcnQgKiBmcm9tICcuL1BoYXNlckJpdG1hcFRleHRMb2FkJztcclxuZXhwb3J0ICogZnJvbSAnLi9QaGFzZXJCaXRtYXBUZXh0U3RhcnQnO1xyXG5leHBvcnQgKiBmcm9tICcuL1BoYXNlckJpdG1hcFRleHRTeXN0ZW0nO1xyXG5leHBvcnQgKiBmcm9tICcuL1BoYXNlclRleHQnOyIsImV4cG9ydCAqIGZyb20gJy4vc2NvcmUvaW5kZXgnOyIsImltcG9ydCB7IFByZWZhYiB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQmFzZUJpdG1hcFRleHQgfSBmcm9tICcuLi8uLi90ZXh0L2luZGV4JztcclxuaW1wb3J0IHsgQml0bWFwRm9udCB9IGZyb20gJy4uLy4uL2ZvbnQvaW5kZXgnO1xyXG5pbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gJy4uLy4uL3Bvc2l0aW9uL2luZGV4JztcclxuaW1wb3J0IHsgU2NvcmVDb21wb25lbnQgfSBmcm9tICcuL1Njb3JlQ29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBTY29yZSBpbXBsZW1lbnRzIFByZWZhYiB7XHJcbiAgICBwcml2YXRlIHBvc2l0aW9uOiBQb3NpdGlvbjtcclxuICAgIHByaXZhdGUgZm9udDogQml0bWFwRm9udDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbjogUG9zaXRpb24sIGZvbnQ6IEJpdG1hcEZvbnQpIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICAgICAgdGhpcy5mb250ID0gZm9udDtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGUoKTogQ29tcG9uZW50W10ge1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIG5ldyBTY29yZUNvbXBvbmVudCgpLFxyXG4gICAgICAgICAgICBuZXcgQmFzZUJpdG1hcFRleHQoXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5mb250LFxyXG4gICAgICAgICAgICAgICAgJzAnXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IENvbXBvbmVudElkIH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IEJhc2VDb21wb25lbnRJZCB9IGZyb20gJy4uLy4uL2Jhc2UvaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNjb3JlQ29tcG9uZW50IGltcGxlbWVudHMgQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgSUQgPSBuZXcgQmFzZUNvbXBvbmVudElkKFNjb3JlQ29tcG9uZW50Lm5hbWUpO1xyXG5cclxuICAgIHByaXZhdGUgc2NvcmU6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnNjb3JlID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBpZCgpOiBDb21wb25lbnRJZCB7XHJcbiAgICAgICAgcmV0dXJuIFNjb3JlQ29tcG9uZW50LklEO1xyXG4gICAgfVxyXG5cclxuICAgIHZhbHVlKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NvcmU7XHJcbiAgICB9XHJcblxyXG4gICAgaW5jcmVtZW50KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2NvcmUgKz0gMTtcclxuICAgIH1cclxuXHJcbn0iLCJleHBvcnQgKiBmcm9tICcuL1Njb3JlJztcclxuZXhwb3J0ICogZnJvbSAnLi9TY29yZUNvbXBvbmVudCc7IiwiaW1wb3J0IFBvc2l0aW9uIGZyb20gJy4vUG9zaXRpb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZVBvc2l0aW9uIGltcGxlbWVudHMgUG9zaXRpb24ge1xyXG4gICAgcHJpdmF0ZSBjb29yZGluYXRlczogbnVtYmVyW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmNvb3JkaW5hdGVzID0gW3gsIHldO1xyXG4gICAgfVxyXG5cclxuICAgIHgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb29yZGluYXRlc1swXTtcclxuICAgIH1cclxuXHJcbiAgICB5KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29vcmRpbmF0ZXNbMV07XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUG9zaXRpb24gZnJvbSAnLi9Qb3NpdGlvbic7XHJcbmltcG9ydCBCYXNlUG9zaXRpb24gZnJvbSAnLi9CYXNlUG9zaXRpb24nO1xyXG5cclxuZXhwb3J0IHtcclxuICAgIFBvc2l0aW9uLFxyXG4gICAgQmFzZVBvc2l0aW9uXHJcbn07IiwiZXhwb3J0IGNsYXNzIER1cGxpY2F0ZUVycm9yIGV4dGVuZHMgRXJyb3Ige1xyXG4gICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHtcclxuICAgICAgICBzdXBlciguLi5hcmdzKTtcclxuICAgICAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCBEdXBsaWNhdGVFcnJvcik7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgTm90Rm91bmRFcnJvciBleHRlbmRzIEVycm9yIHtcclxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XHJcbiAgICAgICAgc3VwZXIoLi4uYXJncyk7XHJcbiAgICAgICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgTm90Rm91bmRFcnJvcik7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgKiBmcm9tICcuL0R1cGxpY2F0ZUVycm9yJztcclxuZXhwb3J0ICogZnJvbSAnLi9Ob3RGb3VuZEVycm9yJzsiLCJleHBvcnQgKiBmcm9tICcuL2Vycm9ycy9pbmRleCc7IiwiaW1wb3J0IHsgQml0bWFwRm9udCB9IGZyb20gJy4uL2ZvbnQvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRJZCB9IGZyb20gJy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50SWQgfSBmcm9tICcuLi9iYXNlL2luZGV4JztcclxuaW1wb3J0IHsgUG9zaXRpb24gfSBmcm9tICcuLi9wb3NpdGlvbi9pbmRleCc7XHJcbmltcG9ydCBCaXRtYXBUZXh0Q29tcG9uZW50IGZyb20gJy4vQml0bWFwVGV4dENvbXBvbmVudCc7XHJcbmltcG9ydCBSZWFkV3JpdGVUZXh0IGZyb20gJy4vUmVhZFdyaXRlVEV4dCc7XHJcbmltcG9ydCBXcml0ZVRleHQgZnJvbSAnLi9Xcml0ZVRleHQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZUJpdG1hcFRleHQgaW1wbGVtZW50cyBCaXRtYXBUZXh0Q29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgSUQgPSBuZXcgQmFzZUNvbXBvbmVudElkKEJhc2VCaXRtYXBUZXh0Lm5hbWUpO1xyXG5cclxuICAgIHByaXZhdGUgdGV4dFBvc2l0aW9uOiBQb3NpdGlvbjtcclxuICAgIHByaXZhdGUgdGV4dEZvbnQ6IEJpdG1hcEZvbnQ7XHJcbiAgICBwcml2YXRlIHdyaXRlVGV4dDogUmVhZFdyaXRlVGV4dDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbjogUG9zaXRpb24sIGZvbnQ6IEJpdG1hcEZvbnQsIHRleHQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMudGV4dFBvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICAgICAgdGhpcy50ZXh0Rm9udCA9IGZvbnQ7XHJcbiAgICAgICAgdGhpcy53cml0ZVRleHQgPSBuZXcgUmVhZFdyaXRlVGV4dCh0ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBpZCgpOiBDb21wb25lbnRJZCB7XHJcbiAgICAgICAgcmV0dXJuIEJhc2VCaXRtYXBUZXh0LklEO1xyXG4gICAgfVxyXG5cclxuICAgIHBvc2l0aW9uKCk6IFBvc2l0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50ZXh0UG9zaXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgZm9udCgpOiBCaXRtYXBGb250IHtcclxuICAgICAgICByZXR1cm4gdGhpcy50ZXh0Rm9udDtcclxuICAgIH1cclxuXHJcbiAgICB0ZXh0KCk6IFdyaXRlVGV4dCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud3JpdGVUZXh0O1xyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvaW5kZXguZC50c1wiLz5cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRJZCB9IGZyb20gJy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50SWQgfSBmcm9tICcuLi9iYXNlL2luZGV4JztcclxuaW1wb3J0IHsgUG9zaXRpb24gfSBmcm9tICcuLi9wb3NpdGlvbi9pbmRleCc7XHJcbmltcG9ydCB7IEJhc2VQb3NpdGlvbiB9IGZyb20gJy4uL3Bvc2l0aW9uL2luZGV4JztcclxuaW1wb3J0IHsgQml0bWFwRm9udCB9IGZyb20gJy4uL2ZvbnQvaW5kZXgnO1xyXG5pbXBvcnQgQml0bWFwVGV4dENvbXBvbmVudCBmcm9tICcuL0JpdG1hcFRleHRDb21wb25lbnQnO1xyXG5pbXBvcnQgUGhhc2VyVGV4dCBmcm9tICcuL1BoYXNlclRleHQnO1xyXG5pbXBvcnQgV3JpdGVUZXh0IGZyb20gJy4vV3JpdGVUZXh0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBoYXNlckJpdG1hcFRleHQgaW1wbGVtZW50cyBCaXRtYXBUZXh0Q29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgSUQgPSBuZXcgQmFzZUNvbXBvbmVudElkKFBoYXNlckJpdG1hcFRleHQubmFtZSk7XHJcblxyXG4gICAgcHJpdmF0ZSBiaXRtYXBUZXh0OiBQaGFzZXIuQml0bWFwVGV4dDtcclxuICAgIHByaXZhdGUgdGV4dEZvbnQ6IEJpdG1hcEZvbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IodGV4dDogUGhhc2VyLkJpdG1hcFRleHQsIGZvbnQ6IEJpdG1hcEZvbnQpIHtcclxuICAgICAgICB0aGlzLmJpdG1hcFRleHQgPSB0ZXh0O1xyXG4gICAgICAgIHRoaXMudGV4dEZvbnQgPSBmb250O1xyXG4gICAgfVxyXG5cclxuICAgIGlkKCk6IENvbXBvbmVudElkIHtcclxuICAgICAgICByZXR1cm4gUGhhc2VyQml0bWFwVGV4dC5JRDtcclxuICAgIH1cclxuXHJcbiAgICBwb3NpdGlvbigpOiBQb3NpdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBCYXNlUG9zaXRpb24odGhpcy5iaXRtYXBUZXh0LngsIHRoaXMuYml0bWFwVGV4dC55KTtcclxuICAgIH1cclxuXHJcbiAgICBmb250KCk6IEJpdG1hcEZvbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRleHRGb250O1xyXG4gICAgfVxyXG5cclxuICAgIHRleHQoKTogV3JpdGVUZXh0IHtcclxuICAgICAgICByZXR1cm4gbmV3IFBoYXNlclRleHQodGhpcy5iaXRtYXBUZXh0KTtcclxuICAgIH1cclxuXHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vdHlwaW5ncy9pbmRleC5kLnRzXCIvPlxyXG5cclxuaW1wb3J0IEJpdG1hcFRleHRDb21wb25lbnQgZnJvbSAnLi9CaXRtYXBUZXh0Q29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBoYXNlckJpdG1hcFRleHRGYWN0b3J5IHtcclxuICAgIHByaXZhdGUgZmFjdG9yeTogUGhhc2VyLkdhbWVPYmplY3RGYWN0b3J5O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGZhY3Rvcnk6IFBoYXNlci5HYW1lT2JqZWN0RmFjdG9yeSkge1xyXG4gICAgICAgIHRoaXMuZmFjdG9yeSA9IGZhY3Rvcnk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlKHRleHQ6IEJpdG1hcFRleHRDb21wb25lbnQpOiBQaGFzZXIuQml0bWFwVGV4dCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmFjdG9yeS5iaXRtYXBUZXh0KFxyXG4gICAgICAgICAgICBNYXRoLmZsb29yKHRleHQucG9zaXRpb24oKS54KCkpLFxyXG4gICAgICAgICAgICBNYXRoLmZsb29yKHRleHQucG9zaXRpb24oKS55KCkpLFxyXG4gICAgICAgICAgICB0ZXh0LmZvbnQoKS5pZCgpLFxyXG4gICAgICAgICAgICB0ZXh0LnRleHQoKS52YWx1ZSgpLFxyXG4gICAgICAgICAgICB0ZXh0LmZvbnQoKS5zaXplKClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvaW5kZXguZC50c1wiLz5cclxuXHJcbmltcG9ydCB7IExvYWQgfSBmcm9tICcuLi9iYXNlL2luZGV4JztcclxuaW1wb3J0IHsgRW50aXR5UG9vbCB9IGZyb20gJy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBCaXRtYXBGb250U2VhcmNoIH0gZnJvbSAnLi4vZm9udC9pbmRleCc7XHJcbmltcG9ydCB7IFBoYXNlckJpdG1hcEZvbnRMb2FkIH0gZnJvbSAnLi4vZm9udC9pbmRleCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQaGFzZXJCaXRtYXBUZXh0TG9hZCBleHRlbmRzIExvYWQge1xyXG4gICAgcHJpdmF0ZSBlbnRpdGllczogRW50aXR5UG9vbDtcclxuICAgIHByaXZhdGUgbG9hZGVyOiBQaGFzZXIuTG9hZGVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVudGl0aWVzOiBFbnRpdHlQb29sLCBsb2FkZXI6IFBoYXNlci5Mb2FkZXIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuZW50aXRpZXMgPSBlbnRpdGllcztcclxuICAgICAgICB0aGlzLmxvYWRlciA9IGxvYWRlcjtcclxuICAgIH1cclxuXHJcbiAgICBleGVjdXRlKCk6IHZvaWQge1xyXG4gICAgICAgIG5ldyBQaGFzZXJCaXRtYXBGb250TG9hZCh0aGlzLmxvYWRlcilcclxuICAgICAgICAgICAgLmxvYWQoXHJcbiAgICAgICAgICAgICAgICBuZXcgQml0bWFwRm9udFNlYXJjaCgpXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbmQodGhpcy5lbnRpdGllcylcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFN0YXJ0IH0gZnJvbSAnLi4vYmFzZS9pbmRleCc7XHJcbmltcG9ydCB7IEVudGl0eVBvb2wgfSBmcm9tICcuLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgRW50aXR5U2VhcmNoIH0gZnJvbSAnLi4vYmFzZS9pbmRleCc7XHJcbmltcG9ydCBCYXNlQml0bWFwVGV4dCBmcm9tICcuL0Jhc2VCaXRtYXBUZXh0JztcclxuaW1wb3J0IEJpdG1hcFRleHRDb21wb25lbnQgZnJvbSAnLi9CaXRtYXBUZXh0Q29tcG9uZW50JztcclxuaW1wb3J0IFBoYXNlckJpdG1hcFRleHQgZnJvbSAnLi9QaGFzZXJCaXRtYXBUZXh0JztcclxuaW1wb3J0IFBoYXNlckJpdG1hcFRleHRGYWN0b3J5IGZyb20gJy4vUGhhc2VyQml0bWFwVGV4dEZhY3RvcnknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGhhc2VyQml0bWFwVGV4dFN0YXJ0IGV4dGVuZHMgU3RhcnQge1xyXG4gICAgcHJpdmF0ZSBlbnRpdGllczogRW50aXR5UG9vbDtcclxuICAgIHByaXZhdGUgZmFjdG9yeTogUGhhc2VyQml0bWFwVGV4dEZhY3Rvcnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZW50aXRpZXM6IEVudGl0eVBvb2wsIGZhY3Rvcnk6IFBoYXNlckJpdG1hcFRleHRGYWN0b3J5KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmVudGl0aWVzID0gZW50aXRpZXM7XHJcbiAgICAgICAgdGhpcy5mYWN0b3J5ID0gZmFjdG9yeTtcclxuICAgIH1cclxuXHJcbiAgICBleGVjdXRlKCk6IHZvaWQge1xyXG4gICAgICAgIG5ldyBFbnRpdHlTZWFyY2goQmFzZUJpdG1hcFRleHQuSUQpXHJcbiAgICAgICAgICAgIC5maW5kKHRoaXMuZW50aXRpZXMpXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKGVudGl0eSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0ID0gZW50aXR5LmdldDxCaXRtYXBUZXh0Q29tcG9uZW50PihCYXNlQml0bWFwVGV4dC5JRCk7XHJcbiAgICAgICAgICAgICAgICBlbnRpdHlcclxuICAgICAgICAgICAgICAgICAgICAuYXR0YWNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgUGhhc2VyQml0bWFwVGV4dChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmFjdG9yeS5jcmVhdGUodGV4dCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LmZvbnQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIC5kZXRhY2godGV4dC5pZCgpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBFbnRpdHlQb29sIH0gZnJvbSAnLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IEJhc2VTeXN0ZW0gfSBmcm9tICcuLi9iYXNlL2luZGV4JztcclxuaW1wb3J0IFBoYXNlckJpdG1hcFRleHRMb2FkIGZyb20gJy4vUGhhc2VyQml0bWFwVGV4dExvYWQnO1xyXG5pbXBvcnQgUGhhc2VyQml0bWFwVGV4dFN0YXJ0IGZyb20gJy4vUGhhc2VyQml0bWFwVGV4dFN0YXJ0JztcclxuaW1wb3J0IFBoYXNlckJpdG1hcFRleHRGYWN0b3J5IGZyb20gJy4vUGhhc2VyQml0bWFwVGV4dEZhY3RvcnknO1xyXG5cclxuLyoqXHJcbiAqIExvYWRzIGFuZCBjcmVhdGVzIGJpdG1hcCB0ZXh0IHVzaW5nIFBoYXNlci5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBoYXNlckJpdG1hcFRleHRTeXN0ZW0gZXh0ZW5kcyBCYXNlU3lzdGVtIHtcclxuICAgIGNvbnN0cnVjdG9yKGVudGl0aWVzOiBFbnRpdHlQb29sLCBsb2FkZXI6IFBoYXNlci5Mb2FkZXIsIGZhY3Rvcnk6IFBoYXNlci5HYW1lT2JqZWN0RmFjdG9yeSkge1xyXG4gICAgICAgIHN1cGVyKFtcclxuICAgICAgICAgICAgbmV3IFBoYXNlckJpdG1hcFRleHRMb2FkKGVudGl0aWVzLCBsb2FkZXIpLFxyXG4gICAgICAgICAgICBuZXcgUGhhc2VyQml0bWFwVGV4dFN0YXJ0KFxyXG4gICAgICAgICAgICAgICAgZW50aXRpZXMsXHJcbiAgICAgICAgICAgICAgICBuZXcgUGhhc2VyQml0bWFwVGV4dEZhY3RvcnkoZmFjdG9yeSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIF0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFdyaXRlVGV4dCBmcm9tICcuL1dyaXRlVGV4dCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQaGFzZXJUZXh0IGltcGxlbWVudHMgV3JpdGVUZXh0IHtcclxuICAgIHByaXZhdGUgdGV4dE9iajogeyB0ZXh0IH07XHJcblxyXG4gICAgY29uc3RydWN0b3IodGV4dDogUGhhc2VyLkJpdG1hcFRleHQpIHtcclxuICAgICAgICB0aGlzLnRleHRPYmogPSB0ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHZhbHVlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dE9iai50ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSh0ZXh0OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnRleHRPYmoudGV4dCA9IHRleHQ7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgVGV4dCBmcm9tICcuL1RleHQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhZFRleHQgaW1wbGVtZW50cyBUZXh0IHtcclxuICAgIHByaXZhdGUgdGV4dDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHRleHQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgdmFsdWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50ZXh0O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFdyaXRlVGV4dCBmcm9tICcuL1dyaXRlVGV4dCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWFkV3JpdGVUZXh0IGltcGxlbWVudHMgV3JpdGVUZXh0IHtcclxuICAgIHByaXZhdGUgdGV4dDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHRleHQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgdmFsdWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSh0ZXh0OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFdyaXRlVGV4dCBmcm9tICcuL1dyaXRlVGV4dCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWFkV3JpdGVUZXh0IGltcGxlbWVudHMgV3JpdGVUZXh0IHtcclxuICAgIHByaXZhdGUgdGV4dDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHRleHQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgdmFsdWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSh0ZXh0OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IEJhc2VCaXRtYXBUZXh0IGZyb20gJy4vQmFzZUJpdG1hcFRleHQnO1xyXG5pbXBvcnQgQml0bWFwVGV4dENvbXBvbmVudCBmcm9tICcuL0JpdG1hcFRleHRDb21wb25lbnQnO1xyXG5pbXBvcnQgUGhhc2VyQml0bWFwVGV4dCBmcm9tICcuL1BoYXNlckJpdG1hcFRleHQnO1xyXG5pbXBvcnQgUGhhc2VyQml0bWFwVGV4dEZhY3RvcnkgZnJvbSAnLi9QaGFzZXJCaXRtYXBUZXh0RmFjdG9yeSc7XHJcbmltcG9ydCBQaGFzZXJCaXRtYXBUZXh0TG9hZCBmcm9tICcuL1BoYXNlckJpdG1hcFRleHRMb2FkJztcclxuaW1wb3J0IFBoYXNlckJpdG1hcFRleHRTdGFydCBmcm9tICcuL1BoYXNlckJpdG1hcFRleHRTdGFydCc7XHJcbmltcG9ydCBQaGFzZXJCaXRtYXBUZXh0U3lzdGVtIGZyb20gJy4vUGhhc2VyQml0bWFwVGV4dFN5c3RlbSc7XHJcbmltcG9ydCBQaGFzZXJUZXh0IGZyb20gJy4vUGhhc2VyVGV4dCc7XHJcbmltcG9ydCBSZWFkVGV4dCBmcm9tICcuL1JlYWRUZXh0JztcclxuaW1wb3J0IFJlYWRXcml0ZVRleHQgZnJvbSAnLi9SZWFkV3JpdGVUZXh0JztcclxuaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0JztcclxuaW1wb3J0IFRleHRDb21wb25lbnQgZnJvbSAnLi9UZXh0Q29tcG9uZW50JztcclxuaW1wb3J0IFdyaXRlVGV4dCBmcm9tICcuL1dyaXRlVGV4dCc7XHJcblxyXG5leHBvcnQge1xyXG4gICAgQmFzZUJpdG1hcFRleHQsXHJcbiAgICBCaXRtYXBUZXh0Q29tcG9uZW50LFxyXG4gICAgUGhhc2VyQml0bWFwVGV4dCxcclxuICAgIFBoYXNlckJpdG1hcFRleHRGYWN0b3J5LFxyXG4gICAgUGhhc2VyQml0bWFwVGV4dExvYWQsXHJcbiAgICBQaGFzZXJCaXRtYXBUZXh0U3RhcnQsXHJcbiAgICBQaGFzZXJCaXRtYXBUZXh0U3lzdGVtLFxyXG4gICAgUGhhc2VyVGV4dCxcclxuICAgIFJlYWRUZXh0LFxyXG4gICAgUmVhZFdyaXRlVGV4dCxcclxuICAgIFRleHQsXHJcbiAgICBUZXh0Q29tcG9uZW50LFxyXG4gICAgV3JpdGVUZXh0XHJcbn07Il19
