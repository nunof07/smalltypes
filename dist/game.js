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
},{"./base/index":19,"./phaser/index":41,"./pong/index":49}],4:[function(require,module,exports){
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
},{"../../system/index":56}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../system/index");
class ComponentNotFoundError extends index_1.NotFoundError {
    constructor(...args) {
        super(...args);
    }
}
exports.ComponentNotFoundError = ComponentNotFoundError;
},{"../../system/index":56}],7:[function(require,module,exports){
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
const index_1 = require("../component/index");
const ReadWriteText_1 = require("./ReadWriteText");
class BaseBitmapText {
    constructor(position, font, text) {
        this.textPosition = position;
        this.textFont = font;
        this.writeText = new ReadWriteText_1.ReadWriteText(text);
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
exports.BaseBitmapText = BaseBitmapText;
},{"../component/index":7,"./ReadWriteText":34}],33:[function(require,module,exports){
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
/// <reference path="../../typings/index.d.ts"/>
Object.defineProperty(exports, "__esModule", { value: true });
const EcsPong_1 = require("./EcsPong");
new EcsPong_1.EcsPong().start();
},{"./EcsPong":2}],39:[function(require,module,exports){
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
},{}],40:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./PhaserBitmapFontLoad"));
},{"./PhaserBitmapFontLoad":39}],41:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./font/index"));
__export(require("./text/index"));
},{"./font/index":40,"./text/index":48}],42:[function(require,module,exports){
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
},{"../../base/index":19,"../text/index":48}],43:[function(require,module,exports){
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
},{}],44:[function(require,module,exports){
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
},{"../../base/index":19,"../font/index":40}],45:[function(require,module,exports){
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
},{"../../base/index":19,"./PhaserBitmapText":42}],46:[function(require,module,exports){
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
},{"../../base/index":19,"./PhaserBitmapTextFactory":43,"./PhaserBitmapTextLoad":44,"./PhaserBitmapTextStart":45}],47:[function(require,module,exports){
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
},{}],48:[function(require,module,exports){
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
},{"./PhaserBitmapText":42,"./PhaserBitmapTextFactory":43,"./PhaserBitmapTextLoad":44,"./PhaserBitmapTextStart":45,"./PhaserBitmapTextSystem":46,"./PhaserText":47}],49:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./score/index"));
},{"./score/index":52}],50:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../base/index");
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
},{"../../base/index":19,"./ScoreComponent":51}],51:[function(require,module,exports){
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
},{"../../base/index":19}],52:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./Score"));
__export(require("./ScoreComponent"));
},{"./Score":50,"./ScoreComponent":51}],53:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DuplicateError extends Error {
    constructor(...args) {
        super(...args);
        Error.captureStackTrace(this, DuplicateError);
    }
}
exports.DuplicateError = DuplicateError;
},{}],54:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NotFoundError extends Error {
    constructor(...args) {
        super(...args);
        Error.captureStackTrace(this, NotFoundError);
    }
}
exports.NotFoundError = NotFoundError;
},{}],55:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./DuplicateError"));
__export(require("./NotFoundError"));
},{"./DuplicateError":53,"./NotFoundError":54}],56:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./errors/index"));
},{"./errors/index":55}]},{},[38])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZWNzL0Jvb3RTdGF0ZS50cyIsInNyYy9lY3MvRWNzUG9uZy50cyIsInNyYy9lY3MvR2FtZVN0YXRlLnRzIiwic3JjL2Vjcy9iYXNlL2NvbXBvbmVudC9CYXNlQ29tcG9uZW50SWQudHMiLCJzcmMvZWNzL2Jhc2UvY29tcG9uZW50L0NvbXBvbmVudER1cGxpY2F0ZUVycm9yLnRzIiwic3JjL2Vjcy9iYXNlL2NvbXBvbmVudC9Db21wb25lbnROb3RGb3VuZEVycm9yLnRzIiwic3JjL2Vjcy9iYXNlL2NvbXBvbmVudC9pbmRleC50cyIsInNyYy9lY3MvYmFzZS9lbnRpdHkvQmFzZUVudGl0eS50cyIsInNyYy9lY3MvYmFzZS9lbnRpdHkvQmFzZUVudGl0eUlkLnRzIiwic3JjL2Vjcy9iYXNlL2VudGl0eS9CYXNlRW50aXR5UG9vbC50cyIsInNyYy9lY3MvYmFzZS9lbnRpdHkvQ29tcG9uZW50U2VhcmNoLnRzIiwic3JjL2Vjcy9iYXNlL2VudGl0eS9FbnRpdHlTZWFyY2gudHMiLCJzcmMvZWNzL2Jhc2UvZW50aXR5L2luZGV4LnRzIiwic3JjL2Vjcy9iYXNlL2ZvbnQvQmFzZUJpdG1hcEZvbnQudHMiLCJzcmMvZWNzL2Jhc2UvZm9udC9CaXRtYXBGb250U2VhcmNoLnRzIiwic3JjL2Vjcy9iYXNlL2ZvbnQvaW5kZXgudHMiLCJzcmMvZWNzL2Jhc2UvaWQvQmFzZUlkLnRzIiwic3JjL2Vjcy9iYXNlL2lkL2luZGV4LnRzIiwic3JjL2Vjcy9iYXNlL2luZGV4LnRzIiwic3JjL2Vjcy9iYXNlL3BoYXNlL0Jhc2VQaGFzZUlkLnRzIiwic3JjL2Vjcy9iYXNlL3BoYXNlL0Jhc2VQaGFzZVBvb2wudHMiLCJzcmMvZWNzL2Jhc2UvcGhhc2UvTG9hZC50cyIsInNyYy9lY3MvYmFzZS9waGFzZS9QaGFzZUV4ZWN1dGUudHMiLCJzcmMvZWNzL2Jhc2UvcGhhc2UvU3RhcnQudHMiLCJzcmMvZWNzL2Jhc2UvcGhhc2UvaW5kZXgudHMiLCJzcmMvZWNzL2Jhc2UvcG9zaXRpb24vQmFzZVBvc2l0aW9uLnRzIiwic3JjL2Vjcy9iYXNlL3Bvc2l0aW9uL2luZGV4LnRzIiwic3JjL2Vjcy9iYXNlL3N5c3RlbS9CYXNlU3lzdGVtLnRzIiwic3JjL2Vjcy9iYXNlL3N5c3RlbS9CYXNlU3lzdGVtQ29sbGVjdGlvbi50cyIsInNyYy9lY3MvYmFzZS9zeXN0ZW0vUGhhc2VTZWFyY2gudHMiLCJzcmMvZWNzL2Jhc2Uvc3lzdGVtL2luZGV4LnRzIiwic3JjL2Vjcy9iYXNlL3RleHQvQmFzZUJpdG1hcFRleHQudHMiLCJzcmMvZWNzL2Jhc2UvdGV4dC9SZWFkVGV4dC50cyIsInNyYy9lY3MvYmFzZS90ZXh0L1JlYWRXcml0ZVRleHQudHMiLCJzcmMvZWNzL2Jhc2UvdGV4dC9pbmRleC50cyIsInNyYy9lY3MvYmFzZS93b3JsZC9CYXNlV29ybGQudHMiLCJzcmMvZWNzL2Jhc2Uvd29ybGQvaW5kZXgudHMiLCJzcmMvZWNzL21haW4udHMiLCJzcmMvZWNzL3BoYXNlci9mb250L1BoYXNlckJpdG1hcEZvbnRMb2FkLnRzIiwic3JjL2Vjcy9waGFzZXIvZm9udC9pbmRleC50cyIsInNyYy9lY3MvcGhhc2VyL2luZGV4LnRzIiwic3JjL2Vjcy9waGFzZXIvdGV4dC9QaGFzZXJCaXRtYXBUZXh0LnRzIiwic3JjL2Vjcy9waGFzZXIvdGV4dC9QaGFzZXJCaXRtYXBUZXh0RmFjdG9yeS50cyIsInNyYy9lY3MvcGhhc2VyL3RleHQvUGhhc2VyQml0bWFwVGV4dExvYWQudHMiLCJzcmMvZWNzL3BoYXNlci90ZXh0L1BoYXNlckJpdG1hcFRleHRTdGFydC50cyIsInNyYy9lY3MvcGhhc2VyL3RleHQvUGhhc2VyQml0bWFwVGV4dFN5c3RlbS50cyIsInNyYy9lY3MvcGhhc2VyL3RleHQvUGhhc2VyVGV4dC50cyIsInNyYy9lY3MvcGhhc2VyL3RleHQvaW5kZXgudHMiLCJzcmMvZWNzL3BvbmcvaW5kZXgudHMiLCJzcmMvZWNzL3Bvbmcvc2NvcmUvU2NvcmUudHMiLCJzcmMvZWNzL3Bvbmcvc2NvcmUvU2NvcmVDb21wb25lbnQudHMiLCJzcmMvZWNzL3Bvbmcvc2NvcmUvaW5kZXgudHMiLCJzcmMvZWNzL3N5c3RlbS9lcnJvcnMvRHVwbGljYXRlRXJyb3IudHMiLCJzcmMvZWNzL3N5c3RlbS9lcnJvcnMvTm90Rm91bmRFcnJvci50cyIsInNyYy9lY3Mvc3lzdGVtL2Vycm9ycy9pbmRleC50cyIsInNyYy9lY3Mvc3lzdGVtL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQ0FBLGdEQUFnRDs7QUFFaEQsZUFBdUIsU0FBUSxNQUFNLENBQUMsS0FBSztJQUN2QztRQUNJLEtBQUssRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUVNLElBQUk7UUFDUCxzQkFBc0I7UUFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUM7UUFDcEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQztRQUM5RCxJQUFJLENBQUMsS0FBSyxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQztRQUN4QyxJQUFJLENBQUMsS0FBSyxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQztRQUN0QyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxDQUFDLDZDQUE2QztRQUNsRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUUxQixvQkFBb0I7UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakMsTUFBTSxDQUFD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QjtBQUN4QixzQ0FBaUM7Ozs7QUNEakMsb0JBQTRCLFNBQVEsS0FBSztJQUNyQyxZQUFZLEdBQUcsSUFBVztRQUN0QixLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUNmLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFDbEQsQ0FBQztDQUNKO0FBTEQsd0NBS0M7Ozs7QUNMRCxtQkFBMkIsU0FBUSxLQUFLO0lBQ3BDLFlBQVksR0FBRyxJQUFXO1FBQ3RCLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ2YsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxhQUFhLENBQUMsQ0FBQztJQUNqRCxDQUFDO0NBQ0o7QUFMRCxzQ0FLQzs7Ozs7OztBQ0xELHNDQUFpQztBQUNqQyxxQ0FBZ0M7Ozs7Ozs7QUNEaEMsb0NBQStCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL2luZGV4LmQudHNcIi8+XHJcblxyXG5leHBvcnQgY2xhc3MgQm9vdFN0YXRlIGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluaXQoKSB7XHJcbiAgICAgICAgLy8gc2NhbGUgdG8gZml0IHNjcmVlblxyXG4gICAgICAgIHRoaXMuc2NhbGUuc2NhbGVNb2RlID0gUGhhc2VyLlNjYWxlTWFuYWdlci5TSE9XX0FMTDtcclxuICAgICAgICB0aGlzLnNjYWxlLmZ1bGxTY3JlZW5TY2FsZU1vZGUgPSBQaGFzZXIuU2NhbGVNYW5hZ2VyLlNIT1dfQUxMO1xyXG4gICAgICAgIHRoaXMuc2NhbGUucGFnZUFsaWduSG9yaXpvbnRhbGx5ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNjYWxlLnBhZ2VBbGlnblZlcnRpY2FsbHkgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2NhbGUuZm9yY2VMYW5kc2NhcGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5zY2FsZS53aW5kb3dDb25zdHJhaW50cy5ib3R0b20gPSAndmlzdWFsJzsgLy8gbWFrZSBzdXJlIGl0IGRvZXNuJ3QgZ28gb3ZlciBzY3JlZW4gaGVpZ2h0XHJcbiAgICAgICAgdGhpcy5nYW1lLnNjYWxlLnJlZnJlc2goKTtcclxuXHJcbiAgICAgICAgLy8ga2VlcCBwaXhlbHMgc2hhcnBcclxuICAgICAgICB0aGlzLmdhbWUuYW50aWFsaWFzID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5nYW1lLnN0YWdlLnNtb290aGVkID0gZmFsc2U7XHJcbiAgICAgICAgUGhhc2VyLkNhbnZhcy5zZXRJbWFnZVJlbmRlcmluZ0NyaXNwKHRoaXMuZ2FtZS5jYW52YXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KCdnYW1lJyk7XHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9pbmRleC5kLnRzXCIvPlxyXG5cclxuaW1wb3J0IHsgQm9vdFN0YXRlIH0gZnJvbSAnLi9Cb290U3RhdGUnO1xyXG5pbXBvcnQgeyBHYW1lU3RhdGUgfSBmcm9tICcuL0dhbWVTdGF0ZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgRWNzUG9uZyB7XHJcbiAgICBwcml2YXRlIF9nYW1lOiBQaGFzZXIuR2FtZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9nYW1lID0gbmV3IFBoYXNlci5HYW1lKHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMjQsXHJcbiAgICAgICAgICAgIGhlaWdodDogNTc2LFxyXG4gICAgICAgICAgICByZW5kZXJlcjogUGhhc2VyLkFVVE8sXHJcbiAgICAgICAgICAgIHBhcmVudDogJ2dhbWUtY29udGFpbmVyJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLl9nYW1lLnN0YXRlLmFkZCgnYm9vdCcsIG5ldyBCb290U3RhdGUoKSk7XHJcbiAgICAgICAgdGhpcy5fZ2FtZS5zdGF0ZS5hZGQoJ2dhbWUnLCBuZXcgR2FtZVN0YXRlKCkpO1xyXG4gICAgICAgIHRoaXMuX2dhbWUuc3RhdGUuc3RhcnQoJ2Jvb3QnKTtcclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL2luZGV4LmQudHNcIi8+XHJcblxyXG5pbXBvcnQgeyBCYXNlV29ybGQgfSBmcm9tICcuL2Jhc2UvaW5kZXgnO1xyXG5pbXBvcnQgeyBCYXNlRW50aXR5UG9vbCB9IGZyb20gJy4vYmFzZS9pbmRleCc7XHJcbmltcG9ydCB7IEJhc2VTeXN0ZW1Db2xsZWN0aW9uIH0gZnJvbSAnLi9iYXNlL2luZGV4JztcclxuaW1wb3J0IHsgQmFzZVBvc2l0aW9uIH0gZnJvbSAnLi9iYXNlL2luZGV4JztcclxuaW1wb3J0IHsgQmFzZUJpdG1hcEZvbnQgfSBmcm9tICcuL2Jhc2UvaW5kZXgnO1xyXG5pbXBvcnQgeyBMb2FkIH0gZnJvbSAnLi9iYXNlL2luZGV4JztcclxuaW1wb3J0IHsgU3RhcnQgfSBmcm9tICcuL2Jhc2UvaW5kZXgnO1xyXG5pbXBvcnQgeyBQaGFzZUV4ZWN1dGUgfSBmcm9tICcuL2Jhc2UvaW5kZXgnO1xyXG5pbXBvcnQgeyBQaGFzZXJCaXRtYXBUZXh0U3lzdGVtIH0gZnJvbSAnLi9waGFzZXIvaW5kZXgnO1xyXG5pbXBvcnQgeyBTY29yZSB9IGZyb20gJy4vcG9uZy9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZVN0YXRlIGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcclxuICAgIHByaXZhdGUgZWNzOiBCYXNlV29ybGQ7XHJcblxyXG4gICAgaW5pdCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBmb250ID0gbmV3IEJhc2VCaXRtYXBGb250KCdQcmVzcyBTdGFydCAyUCcsICdmb250cy9QcmVzc19TdGFydF8yUF8wLnBuZycsICdmb250cy9QcmVzc19TdGFydF8yUC5mbnQnLCAzMik7XHJcbiAgICAgICAgY29uc3QgZW50aXRpZXMgPSBuZXcgQmFzZUVudGl0eVBvb2woKVxyXG4gICAgICAgICAgICAuY3JlYXRlTWFueShbXHJcbiAgICAgICAgICAgICAgICBuZXcgU2NvcmUoXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IEJhc2VQb3NpdGlvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4yNSAqIHRoaXMuZ2FtZS53b3JsZC53aWR0aCAtIDIgKiBmb250LnNpemUoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgNCAqIGZvbnQuc2l6ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICBmb250XHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgbmV3IFNjb3JlKFxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBCYXNlUG9zaXRpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNzUgKiB0aGlzLmdhbWUud29ybGQud2lkdGggLSAyICogZm9udC5zaXplKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDQgKiBmb250LnNpemUoKVxyXG4gICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICBdKTtcclxuICAgICAgICB0aGlzLmVjcyA9IG5ldyBCYXNlV29ybGQoXHJcbiAgICAgICAgICAgIGVudGl0aWVzLFxyXG4gICAgICAgICAgICBuZXcgQmFzZVN5c3RlbUNvbGxlY3Rpb24oW1xyXG4gICAgICAgICAgICAgICAgbmV3IFBoYXNlckJpdG1hcFRleHRTeXN0ZW0oZW50aXRpZXMsIHRoaXMuZ2FtZS5sb2FkLCB0aGlzLmdhbWUuYWRkKVxyXG4gICAgICAgICAgICBdKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJlbG9hZCgpOiB2b2lkIHtcclxuICAgICAgICBuZXcgUGhhc2VFeGVjdXRlKHRoaXMuZWNzLnN5c3RlbXMoKSwgTG9hZC5JRClcclxuICAgICAgICAgICAgLmV4ZWN1dGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgbmV3IFBoYXNlRXhlY3V0ZSh0aGlzLmVjcy5zeXN0ZW1zKCksIFN0YXJ0LklEKVxyXG4gICAgICAgICAgICAuZXhlY3V0ZSgpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQ29tcG9uZW50SWQgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQmFzZUlkIH0gZnJvbSAnLi4vaWQvaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhc2VDb21wb25lbnRJZCBleHRlbmRzIEJhc2VJZCBpbXBsZW1lbnRzIENvbXBvbmVudElkIHtcclxufSIsImltcG9ydCB7IER1cGxpY2F0ZUVycm9yIH0gZnJvbSAnLi4vLi4vc3lzdGVtL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBDb21wb25lbnREdXBsaWNhdGVFcnJvciBleHRlbmRzIER1cGxpY2F0ZUVycm9yIHtcclxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XHJcbiAgICAgICAgc3VwZXIoLi4uYXJncyk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBOb3RGb3VuZEVycm9yIH0gZnJvbSAnLi4vLi4vc3lzdGVtL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBDb21wb25lbnROb3RGb3VuZEVycm9yIGV4dGVuZHMgTm90Rm91bmRFcnJvciB7XHJcbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkge1xyXG4gICAgICAgIHN1cGVyKC4uLmFyZ3MpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0ICogZnJvbSAnLi9CYXNlQ29tcG9uZW50SWQnO1xyXG5leHBvcnQgKiBmcm9tICcuL0NvbXBvbmVudER1cGxpY2F0ZUVycm9yJztcclxuZXhwb3J0ICogZnJvbSAnLi9Db21wb25lbnROb3RGb3VuZEVycm9yJzsiLCJpbXBvcnQgeyBFbnRpdHkgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgRW50aXR5SWQgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IENvbXBvbmVudElkIH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IENvbXBvbmVudE5vdEZvdW5kRXJyb3IgfSBmcm9tICcuLi9jb21wb25lbnQvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb21wb25lbnREdXBsaWNhdGVFcnJvciB9IGZyb20gJy4uL2NvbXBvbmVudC9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQmFzZUVudGl0eSBpbXBsZW1lbnRzIEVudGl0eSB7XHJcbiAgICBwcml2YXRlIGVudGl0eUlkOiBFbnRpdHlJZDtcclxuICAgIHByaXZhdGUgY29tcG9uZW50czogTWFwPENvbXBvbmVudElkLCBDb21wb25lbnQ+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yIChcclxuICAgICAgICBpZDogRW50aXR5SWQsXHJcbiAgICAgICAgY29tcG9uZW50czogTWFwPENvbXBvbmVudElkLCBDb21wb25lbnQ+ID0gbmV3IE1hcCgpXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSBjb21wb25lbnRzO1xyXG4gICAgICAgIHRoaXMuZW50aXR5SWQgPSBpZDtcclxuICAgIH1cclxuXHJcbiAgICBpZCgpOiBFbnRpdHlJZCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZW50aXR5SWQ7XHJcbiAgICB9XHJcblxyXG4gICAgYXR0YWNoKGNvbXBvbmVudDogQ29tcG9uZW50KTogRW50aXR5IHtcclxuICAgICAgICBpZiAodGhpcy5jb21wb25lbnRzLmhhcyhjb21wb25lbnQuaWQoKSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IENvbXBvbmVudER1cGxpY2F0ZUVycm9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5zZXQoY29tcG9uZW50LmlkKCksIGNvbXBvbmVudCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGF0dGFjaE1hbnkoY29tcG9uZW50czogQ29tcG9uZW50W10pOiBFbnRpdHkge1xyXG4gICAgICAgIGNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmF0dGFjaChjb21wb25lbnQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBkZXRhY2goaWQ6IENvbXBvbmVudElkKTogRW50aXR5IHtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMuZGVsZXRlKGlkKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgaGFzKGNvbXBvbmVudHM6IENvbXBvbmVudElkW10pOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gY29tcG9uZW50cy5ldmVyeShpZCA9PiB0aGlzLmNvbXBvbmVudHMuaGFzKGlkKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0PFQgZXh0ZW5kcyBDb21wb25lbnQ+KGNvbXBvbmVudDogQ29tcG9uZW50SWQpOiBUIHtcclxuICAgICAgICBpZiAoIXRoaXMuY29tcG9uZW50cy5oYXMoY29tcG9uZW50KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgQ29tcG9uZW50Tm90Rm91bmRFcnJvcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50cy5nZXQoY29tcG9uZW50KSBhcyBUO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7IEVudGl0eUlkIH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IEJhc2VJZCB9IGZyb20gJy4uL2lkL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNlRW50aXR5SWQgZXh0ZW5kcyBCYXNlSWQgaW1wbGVtZW50cyBFbnRpdHlJZCB7XHJcbn0iLCJpbXBvcnQgeyBFbnRpdHkgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgRW50aXR5SWQgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgRW50aXR5UG9vbCB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBQcmVmYWIgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IENvbXBvbmVudElkIH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IEJhc2VFbnRpdHkgfSBmcm9tICcuL0Jhc2VFbnRpdHknO1xyXG5pbXBvcnQgeyBCYXNlRW50aXR5SWQgfSBmcm9tICcuL0Jhc2VFbnRpdHlJZCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQmFzZUVudGl0eVBvb2wgaW1wbGVtZW50cyBFbnRpdHlQb29sIHtcclxuICAgIHByaXZhdGUgcG9vbDogRW50aXR5W107XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5wb29sID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXROZXdJZCgpOiBFbnRpdHlJZCB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBCYXNlRW50aXR5SWQodGhpcy5wb29sLmxlbmd0aCArICcnKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGUoY29tcG9uZW50cz86IENvbXBvbmVudFtdKTogRW50aXR5IHtcclxuICAgICAgICBjb25zdCBlbnRpdHkgPSBuZXcgQmFzZUVudGl0eShcclxuICAgICAgICAgICAgdGhpcy5nZXROZXdJZCgpLFxyXG4gICAgICAgICAgICBuZXcgTWFwKFxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50cy5tYXAoY29tcG9uZW50ID0+IFtjb21wb25lbnQuaWQoKSwgY29tcG9uZW50XSBhcyBbQ29tcG9uZW50SWQsIENvbXBvbmVudF0pXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMucG9vbC5wdXNoKGVudGl0eSk7XHJcblxyXG4gICAgICAgIHJldHVybiBlbnRpdHk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlTWFueShwcmVmYWJzOiBQcmVmYWJbXSk6IEVudGl0eVBvb2wge1xyXG4gICAgICAgIHByZWZhYnMuZm9yRWFjaChwcmVmYWIgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZShcclxuICAgICAgICAgICAgICAgIHByZWZhYi5jcmVhdGUoKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBlbnRpdGllcygpOiBFbnRpdHlbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9vbDtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBTZWFyY2ggfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IENvbXBvbmVudElkIH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IEVudGl0eVBvb2wgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgRW50aXR5IH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IEVudGl0eVNlYXJjaCB9IGZyb20gJy4vRW50aXR5U2VhcmNoJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRTZWFyY2g8VCBleHRlbmRzIENvbXBvbmVudD4gaW1wbGVtZW50cyBTZWFyY2g8VD4ge1xyXG4gICAgcHJpdmF0ZSBpZDogQ29tcG9uZW50SWQ7XHJcbiAgICBwcml2YXRlIGVudGl0eVNlYXJjaDogRW50aXR5U2VhcmNoO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIGlkOiBDb21wb25lbnRJZCxcclxuICAgICAgICBlbnRpdHlTZWFyY2g6IEVudGl0eVNlYXJjaCA9IG5ldyBFbnRpdHlTZWFyY2goaWQpXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5lbnRpdHlTZWFyY2ggPSBlbnRpdHlTZWFyY2g7XHJcbiAgICB9XHJcblxyXG4gICAgZmluZChwb29sOiBFbnRpdHlQb29sKTogVFtdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbnRpdHlTZWFyY2guZmluZChwb29sKVxyXG4gICAgICAgICAgICAubWFwKGVudGl0eSA9PiBlbnRpdHkuZ2V0PFQ+KHRoaXMuaWQpKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEVudGl0eSB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBFbnRpdHlQb29sIH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRJZCB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBTZWFyY2ggfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBFbnRpdHlTZWFyY2ggaW1wbGVtZW50cyBTZWFyY2g8RW50aXR5PiB7XHJcbiAgICBwcml2YXRlIGlkczogQ29tcG9uZW50SWRbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpZHM6IENvbXBvbmVudElkW10gfCBDb21wb25lbnRJZCkge1xyXG4gICAgICAgIHRoaXMuaWRzID0gKGlkcyAmJiBpZHMuY29uc3RydWN0b3IgPT09IEFycmF5KSA/XHJcbiAgICAgICAgICAgIGlkcyBhcyBDb21wb25lbnRJZFtdIDpcclxuICAgICAgICAgICAgW2lkcyBhcyBDb21wb25lbnRJZF07XHJcbiAgICB9XHJcblxyXG4gICAgZmluZChwb29sOiBFbnRpdHlQb29sKTogRW50aXR5W10ge1xyXG4gICAgICAgIHJldHVybiBwb29sLmVudGl0aWVzKClcclxuICAgICAgICAgICAgLmZpbHRlcihlbnRpdHkgPT4gZW50aXR5Lmhhcyh0aGlzLmlkcykpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0ICogZnJvbSAnLi9CYXNlRW50aXR5JztcclxuZXhwb3J0ICogZnJvbSAnLi9CYXNlRW50aXR5SWQnO1xyXG5leHBvcnQgKiBmcm9tICcuL0Jhc2VFbnRpdHlQb29sJztcclxuZXhwb3J0ICogZnJvbSAnLi9Db21wb25lbnRTZWFyY2gnO1xyXG5leHBvcnQgKiBmcm9tICcuL0VudGl0eVNlYXJjaCc7IiwiZXhwb3J0IGNsYXNzIEJhc2VCaXRtYXBGb250IHtcclxuICAgIHByaXZhdGUga2V5OiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIGltYWdlUGF0aDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBhdGxhc1BhdGg6IHN0cmluZztcclxuICAgIHByaXZhdGUgZm9udFNpemU6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihrZXk6IHN0cmluZywgaW1hZ2VQYXRoOiBzdHJpbmcsIGF0bGFzUGF0aDogc3RyaW5nLCBzaXplOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmtleSA9IGtleTtcclxuICAgICAgICB0aGlzLmltYWdlUGF0aCA9IGltYWdlUGF0aDtcclxuICAgICAgICB0aGlzLmF0bGFzUGF0aCA9IGF0bGFzUGF0aDtcclxuICAgICAgICB0aGlzLmZvbnRTaXplID0gc2l6ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmtleTtcclxuICAgIH1cclxuXHJcbiAgICBpbWFnZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmltYWdlUGF0aDtcclxuICAgIH1cclxuXHJcbiAgICBhdGxhcygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmF0bGFzUGF0aDtcclxuICAgIH1cclxuXHJcbiAgICBzaXplKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9udFNpemU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBFbnRpdHlQb29sIH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFNlYXJjaCB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBCaXRtYXBUZXh0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IEJpdG1hcEZvbnQgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQ29tcG9uZW50U2VhcmNoIH0gZnJvbSAnLi4vZW50aXR5L2luZGV4JztcclxuaW1wb3J0IHsgQmFzZUJpdG1hcFRleHQgfSBmcm9tICcuLi90ZXh0L2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBCaXRtYXBGb250U2VhcmNoIGltcGxlbWVudHMgU2VhcmNoPEJpdG1hcEZvbnQ+IHtcclxuICAgIHByaXZhdGUgc2VhcmNoOiBDb21wb25lbnRTZWFyY2g8Qml0bWFwVGV4dENvbXBvbmVudD47XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2VhcmNoOiBDb21wb25lbnRTZWFyY2g8Qml0bWFwVGV4dENvbXBvbmVudD4gPSBuZXcgQ29tcG9uZW50U2VhcmNoPEJpdG1hcFRleHRDb21wb25lbnQ+KEJhc2VCaXRtYXBUZXh0LklEKSkge1xyXG4gICAgICAgIHRoaXMuc2VhcmNoID0gc2VhcmNoO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbmQocG9vbDogRW50aXR5UG9vbCk6IEJpdG1hcEZvbnRbXSB7XHJcbiAgICAgICAgcmV0dXJuIFsuLi5uZXcgU2V0KC8vIHVuaXF1ZSBzZXRcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2guZmluZChwb29sKVxyXG4gICAgICAgICAgICAgICAgLm1hcCh0ZXh0ID0+IHRleHQuZm9udCgpKVxyXG4gICAgICAgICldO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0ICogZnJvbSAnLi9CYXNlQml0bWFwRm9udCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vQml0bWFwRm9udFNlYXJjaCc7IiwiaW1wb3J0IHsgSWQgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNlSWQgaW1wbGVtZW50cyBJZCB7XHJcbiAgICBwcml2YXRlIGlkOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaWQ6IElkIHwgc3RyaW5nIHwgbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IChpZCBpbnN0YW5jZW9mIE9iamVjdCkgP1xyXG4gICAgICAgICAgICAoaWQgYXMgSWQpLnByaW50KCkgOlxyXG4gICAgICAgICAgICBpZCArICcnO1xyXG4gICAgfVxyXG5cclxuICAgIHByaW50KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQ7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgKiBmcm9tICcuL0Jhc2VJZCc7IiwiZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnQvaW5kZXgnO1xyXG5leHBvcnQgKiBmcm9tICcuL2VudGl0eS9pbmRleCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZm9udC9pbmRleCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vaWQvaW5kZXgnO1xyXG5leHBvcnQgKiBmcm9tICcuL3BoYXNlL2luZGV4JztcclxuZXhwb3J0ICogZnJvbSAnLi9wb3NpdGlvbi9pbmRleCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vc3lzdGVtL2luZGV4JztcclxuZXhwb3J0ICogZnJvbSAnLi90ZXh0L2luZGV4JztcclxuZXhwb3J0ICogZnJvbSAnLi93b3JsZC9pbmRleCc7IiwiaW1wb3J0IHsgQ29tcG9uZW50SWQgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQmFzZUlkIH0gZnJvbSAnLi4vaWQvaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhc2VQaGFzZUlkIGV4dGVuZHMgQmFzZUlkIGltcGxlbWVudHMgQ29tcG9uZW50SWQge1xyXG59IiwiaW1wb3J0IHsgUGhhc2VQb29sIH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFBoYXNlIH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFBoYXNlSWQgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNlUGhhc2VQb29sIGltcGxlbWVudHMgUGhhc2VQb29sIHtcclxuICAgIHByaXZhdGUgcGhhc2VzOiBNYXA8UGhhc2VJZCwgUGhhc2U+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBoYXNlczogUGhhc2VbXSB8IE1hcDxQaGFzZUlkLCBQaGFzZT4pIHtcclxuICAgICAgICB0aGlzLnBoYXNlcyA9IChwaGFzZXMgaW5zdGFuY2VvZiBNYXApID8gcGhhc2VzIDpcclxuICAgICAgICAgICAgbmV3IE1hcChcclxuICAgICAgICAgICAgICAgIHBoYXNlcy5tYXAocGhhc2UgPT5cclxuICAgICAgICAgICAgICAgICAgICBbcGhhc2UuaWQoKSwgcGhhc2VdIGFzIFtQaGFzZUlkLCBQaGFzZV1cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBoYXMoaWQ6IFBoYXNlSWQpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5waGFzZXMuaGFzKGlkKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQ8VCBleHRlbmRzIFBoYXNlPihpZDogUGhhc2VJZCk6IFQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBoYXNlcy5nZXQoaWQpIGFzIFQ7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBQaGFzZSB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBQaGFzZUlkIH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IEJhc2VQaGFzZUlkIH0gZnJvbSAnLi9CYXNlUGhhc2VJZCc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTG9hZCBpbXBsZW1lbnRzIFBoYXNlIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgSUQgPSBuZXcgQmFzZVBoYXNlSWQoTG9hZC5uYW1lKTtcclxuXHJcbiAgICBpZCgpOiBQaGFzZUlkIHtcclxuICAgICAgICByZXR1cm4gTG9hZC5JRDtcclxuICAgIH1cclxuXHJcbiAgICBhYnN0cmFjdCBleGVjdXRlKCk6IHZvaWQ7XHJcbn0iLCJpbXBvcnQgeyBTeXN0ZW1Db2xsZWN0aW9uIH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFBoYXNlSWQgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgUGhhc2VTZWFyY2ggfSBmcm9tICcuLi9zeXN0ZW0vaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBoYXNlRXhlY3V0ZSB7XHJcbiAgICBwcml2YXRlIHN5c3RlbXM6IFN5c3RlbUNvbGxlY3Rpb247XHJcbiAgICBwcml2YXRlIHNlYXJjaDogUGhhc2VTZWFyY2g7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc3lzdGVtczogU3lzdGVtQ29sbGVjdGlvbiwgc2VhcmNoOiBQaGFzZVNlYXJjaCB8IFBoYXNlSWQpIHtcclxuICAgICAgICB0aGlzLnN5c3RlbXMgPSBzeXN0ZW1zO1xyXG4gICAgICAgIHRoaXMuc2VhcmNoID0gKHNlYXJjaCBpbnN0YW5jZW9mIFBoYXNlU2VhcmNoKSA/IHNlYXJjaCA6IG5ldyBQaGFzZVNlYXJjaChzZWFyY2gpO1xyXG4gICAgfVxyXG5cclxuICAgIGV4ZWN1dGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZWFyY2guZmluZCh0aGlzLnN5c3RlbXMpXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKHBoYXNlID0+IHBoYXNlLmV4ZWN1dGUoKSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBQaGFzZSB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBQaGFzZUlkIH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IEJhc2VQaGFzZUlkIH0gZnJvbSAnLi9CYXNlUGhhc2VJZCc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU3RhcnQgaW1wbGVtZW50cyBQaGFzZSB7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IElEID0gbmV3IEJhc2VQaGFzZUlkKFN0YXJ0Lm5hbWUpO1xyXG5cclxuICAgIGlkKCk6IFBoYXNlSWQge1xyXG4gICAgICAgIHJldHVybiBTdGFydC5JRDtcclxuICAgIH1cclxuXHJcbiAgICBhYnN0cmFjdCBleGVjdXRlKCk6IHZvaWQ7XHJcbn0iLCJleHBvcnQgKiBmcm9tICcuL0Jhc2VQaGFzZUlkJztcclxuZXhwb3J0ICogZnJvbSAnLi9CYXNlUGhhc2VQb29sJztcclxuZXhwb3J0ICogZnJvbSAnLi9Mb2FkJztcclxuZXhwb3J0ICogZnJvbSAnLi9QaGFzZUV4ZWN1dGUnO1xyXG5leHBvcnQgKiBmcm9tICcuL1N0YXJ0JzsiLCJpbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhc2VQb3NpdGlvbiBpbXBsZW1lbnRzIFBvc2l0aW9uIHtcclxuICAgIHByaXZhdGUgY29vcmRpbmF0ZXM6IG51bWJlcltdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5jb29yZGluYXRlcyA9IFt4LCB5XTtcclxuICAgIH1cclxuXHJcbiAgICB4KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29vcmRpbmF0ZXNbMF07XHJcbiAgICB9XHJcblxyXG4gICAgeSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvb3JkaW5hdGVzWzFdO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0ICogZnJvbSAnLi9CYXNlUG9zaXRpb24nOyIsImltcG9ydCB7IFBoYXNlUG9vbCB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBTeXN0ZW0gfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgUGhhc2UgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgUGhhc2VJZCB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBCYXNlUGhhc2VQb29sIH0gZnJvbSAnLi4vcGhhc2UvaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhc2VTeXN0ZW0gaW1wbGVtZW50cyBTeXN0ZW0ge1xyXG4gICAgcHJpdmF0ZSBwaGFzZVBvb2w6IFBoYXNlUG9vbDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwaGFzZXM6IFBoYXNlUG9vbCB8IFBoYXNlW10gfCBNYXA8UGhhc2VJZCwgUGhhc2U+KSB7XHJcbiAgICAgICAgdGhpcy5waGFzZVBvb2wgPSAocGhhc2VzIGluc3RhbmNlb2YgQXJyYXkgfHwgcGhhc2VzIGluc3RhbmNlb2YgTWFwKSA/XHJcbiAgICAgICAgICAgIG5ldyBCYXNlUGhhc2VQb29sKHBoYXNlcykgOlxyXG4gICAgICAgICAgICBwaGFzZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcGhhc2VzKCk6IFBoYXNlUG9vbCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGhhc2VQb29sO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgU3lzdGVtIH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFN5c3RlbUNvbGxlY3Rpb24gfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgUGhhc2VJZCB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhc2VTeXN0ZW1Db2xsZWN0aW9uIGltcGxlbWVudHMgU3lzdGVtQ29sbGVjdGlvbiB7XHJcbiAgICBwcml2YXRlIHN5c3RlbXM6IFN5c3RlbVtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHN5c3RlbXM/OiBTeXN0ZW1bXSkge1xyXG4gICAgICAgIHRoaXMuc3lzdGVtcyA9IHN5c3RlbXMgfHwgW107XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXIoc3lzdGVtOiBTeXN0ZW0pOiBTeXN0ZW1Db2xsZWN0aW9uIHtcclxuICAgICAgICB0aGlzLnN5c3RlbXMucHVzaChzeXN0ZW0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3Rlck1hbnkoc3lzdGVtczogU3lzdGVtW10pOiBTeXN0ZW1Db2xsZWN0aW9uIHtcclxuICAgICAgICBzeXN0ZW1zLmZvckVhY2goc3lzdGVtID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZWdpc3RlcihzeXN0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBmaWx0ZXIoaWQ6IFBoYXNlSWQpOiBTeXN0ZW1bXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3lzdGVtcy5maWx0ZXIoc3lzdGVtID0+XHJcbiAgICAgICAgICAgIHN5c3RlbS5waGFzZXMoKS5oYXMoaWQpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFN5c3RlbVNlYXJjaCB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBTeXN0ZW1Db2xsZWN0aW9uIH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFBoYXNlIH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFBoYXNlSWQgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBQaGFzZVNlYXJjaCBpbXBsZW1lbnRzIFN5c3RlbVNlYXJjaDxQaGFzZT4ge1xyXG4gICAgcHJpdmF0ZSBpZDogUGhhc2VJZDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpZDogUGhhc2VJZCkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIH1cclxuXHJcbiAgICBmaW5kKHN5c3RlbXM6IFN5c3RlbUNvbGxlY3Rpb24pOiBQaGFzZVtdIHtcclxuICAgICAgICByZXR1cm4gc3lzdGVtcy5maWx0ZXIodGhpcy5pZClcclxuICAgICAgICAgICAgLm1hcChzeXN0ZW0gPT4gc3lzdGVtLnBoYXNlcygpLmdldCh0aGlzLmlkKSk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgKiBmcm9tICcuL0Jhc2VTeXN0ZW0nO1xyXG5leHBvcnQgKiBmcm9tICcuL0Jhc2VTeXN0ZW1Db2xsZWN0aW9uJztcclxuZXhwb3J0ICogZnJvbSAnLi9QaGFzZVNlYXJjaCc7IiwiaW1wb3J0IHsgQml0bWFwRm9udCB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRJZCB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBCaXRtYXBUZXh0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFdyaXRlVGV4dCB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50SWQgfSBmcm9tICcuLi9jb21wb25lbnQvaW5kZXgnO1xyXG5pbXBvcnQgeyBSZWFkV3JpdGVUZXh0IH0gZnJvbSAnLi9SZWFkV3JpdGVUZXh0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNlQml0bWFwVGV4dCBpbXBsZW1lbnRzIEJpdG1hcFRleHRDb21wb25lbnQge1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBJRCA9IG5ldyBCYXNlQ29tcG9uZW50SWQoQmFzZUJpdG1hcFRleHQubmFtZSk7XHJcblxyXG4gICAgcHJpdmF0ZSB0ZXh0UG9zaXRpb246IFBvc2l0aW9uO1xyXG4gICAgcHJpdmF0ZSB0ZXh0Rm9udDogQml0bWFwRm9udDtcclxuICAgIHByaXZhdGUgd3JpdGVUZXh0OiBSZWFkV3JpdGVUZXh0O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uOiBQb3NpdGlvbiwgZm9udDogQml0bWFwRm9udCwgdGV4dDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy50ZXh0UG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgICAgICB0aGlzLnRleHRGb250ID0gZm9udDtcclxuICAgICAgICB0aGlzLndyaXRlVGV4dCA9IG5ldyBSZWFkV3JpdGVUZXh0KHRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGlkKCk6IENvbXBvbmVudElkIHtcclxuICAgICAgICByZXR1cm4gQmFzZUJpdG1hcFRleHQuSUQ7XHJcbiAgICB9XHJcblxyXG4gICAgcG9zaXRpb24oKTogUG9zaXRpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRleHRQb3NpdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBmb250KCk6IEJpdG1hcEZvbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRleHRGb250O1xyXG4gICAgfVxyXG5cclxuICAgIHRleHQoKTogV3JpdGVUZXh0IHtcclxuICAgICAgICByZXR1cm4gdGhpcy53cml0ZVRleHQ7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgUmVhZFRleHQgaW1wbGVtZW50cyBUZXh0IHtcclxuICAgIHByaXZhdGUgdGV4dDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHRleHQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgdmFsdWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50ZXh0O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgV3JpdGVUZXh0IH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgUmVhZFdyaXRlVGV4dCBpbXBsZW1lbnRzIFdyaXRlVGV4dCB7XHJcbiAgICBwcml2YXRlIHRleHQ6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0ZXh0OiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHZhbHVlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dDtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUodGV4dDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcclxuICAgIH1cclxufSIsImV4cG9ydCAqIGZyb20gJy4vQmFzZUJpdG1hcFRleHQnO1xyXG5leHBvcnQgKiBmcm9tICcuL1JlYWRUZXh0JztcclxuZXhwb3J0ICogZnJvbSAnLi9SZWFkV3JpdGVUZXh0JzsiLCJpbXBvcnQgeyBFbnRpdHlQb29sIH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFN5c3RlbUNvbGxlY3Rpb24gfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgV29ybGQgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNlV29ybGQgaW1wbGVtZW50cyBXb3JsZCB7XHJcbiAgICBwcml2YXRlIGVudGl0eVBvb2w6IEVudGl0eVBvb2w7XHJcbiAgICBwcml2YXRlIHN5c3RlbUNvbGxlY3Rpb246IFN5c3RlbUNvbGxlY3Rpb247XHJcblxyXG4gICAgY29uc3RydWN0b3IoZW50aXRpZXM6IEVudGl0eVBvb2wsIHN5c3RlbXM6IFN5c3RlbUNvbGxlY3Rpb24pIHtcclxuICAgICAgICB0aGlzLmVudGl0eVBvb2wgPSBlbnRpdGllcztcclxuICAgICAgICB0aGlzLnN5c3RlbUNvbGxlY3Rpb24gPSBzeXN0ZW1zO1xyXG4gICAgfVxyXG5cclxuICAgIGVudGl0aWVzKCk6IEVudGl0eVBvb2wge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVudGl0eVBvb2w7XHJcbiAgICB9XHJcblxyXG4gICAgc3lzdGVtcygpOiBTeXN0ZW1Db2xsZWN0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zeXN0ZW1Db2xsZWN0aW9uO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0ICogZnJvbSAnLi9CYXNlV29ybGQnOyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL2luZGV4LmQudHNcIi8+XHJcblxyXG5pbXBvcnQgeyBFY3NQb25nIH0gZnJvbSAnLi9FY3NQb25nJztcclxuXHJcbm5ldyBFY3NQb25nKCkuc3RhcnQoKTsiLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vLi4vdHlwaW5ncy9pbmRleC5kLnRzXCIvPlxyXG5cclxuaW1wb3J0IHsgQml0bWFwRm9udCB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBoYXNlckJpdG1hcEZvbnRMb2FkIHtcclxuICAgIHByaXZhdGUgbG9hZGVyOiBQaGFzZXIuTG9hZGVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGxvYWRlcjogUGhhc2VyLkxvYWRlcikge1xyXG4gICAgICAgIHRoaXMubG9hZGVyID0gbG9hZGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWQoZm9udHM6IEJpdG1hcEZvbnRbXSk6IFBoYXNlckJpdG1hcEZvbnRMb2FkIHtcclxuICAgICAgICBmb250cy5mb3JFYWNoKGZvbnQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRlci5iaXRtYXBGb250KFxyXG4gICAgICAgICAgICAgICAgZm9udC5pZCgpLFxyXG4gICAgICAgICAgICAgICAgZm9udC5pbWFnZSgpLFxyXG4gICAgICAgICAgICAgICAgZm9udC5hdGxhcygpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0ICogZnJvbSAnLi9QaGFzZXJCaXRtYXBGb250TG9hZCc7IiwiZXhwb3J0ICogZnJvbSAnLi9mb250L2luZGV4JztcclxuZXhwb3J0ICogZnJvbSAnLi90ZXh0L2luZGV4JzsiLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vLi4vdHlwaW5ncy9pbmRleC5kLnRzXCIvPlxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IENvbXBvbmVudElkIH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IEJpdG1hcEZvbnQgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQml0bWFwVGV4dENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBXcml0ZVRleHQgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQmFzZUNvbXBvbmVudElkIH0gZnJvbSAnLi4vLi4vYmFzZS9pbmRleCc7XHJcbmltcG9ydCB7IEJhc2VQb3NpdGlvbiB9IGZyb20gJy4uLy4uL2Jhc2UvaW5kZXgnO1xyXG5pbXBvcnQgeyBQaGFzZXJUZXh0IH0gZnJvbSAnLi4vdGV4dC9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgUGhhc2VyQml0bWFwVGV4dCBpbXBsZW1lbnRzIEJpdG1hcFRleHRDb21wb25lbnQge1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBJRCA9IG5ldyBCYXNlQ29tcG9uZW50SWQoUGhhc2VyQml0bWFwVGV4dC5uYW1lKTtcclxuXHJcbiAgICBwcml2YXRlIGJpdG1hcFRleHQ6IFBoYXNlci5CaXRtYXBUZXh0O1xyXG4gICAgcHJpdmF0ZSB0ZXh0Rm9udDogQml0bWFwRm9udDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0ZXh0OiBQaGFzZXIuQml0bWFwVGV4dCwgZm9udDogQml0bWFwRm9udCkge1xyXG4gICAgICAgIHRoaXMuYml0bWFwVGV4dCA9IHRleHQ7XHJcbiAgICAgICAgdGhpcy50ZXh0Rm9udCA9IGZvbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWQoKTogQ29tcG9uZW50SWQge1xyXG4gICAgICAgIHJldHVybiBQaGFzZXJCaXRtYXBUZXh0LklEO1xyXG4gICAgfVxyXG5cclxuICAgIHBvc2l0aW9uKCk6IFBvc2l0aW9uIHtcclxuICAgICAgICByZXR1cm4gbmV3IEJhc2VQb3NpdGlvbih0aGlzLmJpdG1hcFRleHQueCwgdGhpcy5iaXRtYXBUZXh0LnkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvbnQoKTogQml0bWFwRm9udCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dEZvbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgdGV4dCgpOiBXcml0ZVRleHQge1xyXG4gICAgICAgIHJldHVybiBuZXcgUGhhc2VyVGV4dCh0aGlzLmJpdG1hcFRleHQpO1xyXG4gICAgfVxyXG5cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi8uLi90eXBpbmdzL2luZGV4LmQudHNcIi8+XHJcblxyXG5pbXBvcnQgeyBCaXRtYXBUZXh0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgUGhhc2VyQml0bWFwVGV4dEZhY3Rvcnkge1xyXG4gICAgcHJpdmF0ZSBmYWN0b3J5OiBQaGFzZXIuR2FtZU9iamVjdEZhY3Rvcnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZmFjdG9yeTogUGhhc2VyLkdhbWVPYmplY3RGYWN0b3J5KSB7XHJcbiAgICAgICAgdGhpcy5mYWN0b3J5ID0gZmFjdG9yeTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGUodGV4dDogQml0bWFwVGV4dENvbXBvbmVudCk6IFBoYXNlci5CaXRtYXBUZXh0IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5mYWN0b3J5LmJpdG1hcFRleHQoXHJcbiAgICAgICAgICAgIE1hdGguZmxvb3IodGV4dC5wb3NpdGlvbigpLngoKSksXHJcbiAgICAgICAgICAgIE1hdGguZmxvb3IodGV4dC5wb3NpdGlvbigpLnkoKSksXHJcbiAgICAgICAgICAgIHRleHQuZm9udCgpLmlkKCksXHJcbiAgICAgICAgICAgIHRleHQudGV4dCgpLnZhbHVlKCksXHJcbiAgICAgICAgICAgIHRleHQuZm9udCgpLnNpemUoKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vLi4vdHlwaW5ncy9pbmRleC5kLnRzXCIvPlxyXG5cclxuaW1wb3J0IHsgRW50aXR5UG9vbCB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBMb2FkIH0gZnJvbSAnLi4vLi4vYmFzZS9pbmRleCc7XHJcbmltcG9ydCB7IEJpdG1hcEZvbnRTZWFyY2ggfSBmcm9tICcuLi8uLi9iYXNlL2luZGV4JztcclxuaW1wb3J0IHsgUGhhc2VyQml0bWFwRm9udExvYWQgfSBmcm9tICcuLi9mb250L2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBQaGFzZXJCaXRtYXBUZXh0TG9hZCBleHRlbmRzIExvYWQge1xyXG4gICAgcHJpdmF0ZSBlbnRpdGllczogRW50aXR5UG9vbDtcclxuICAgIHByaXZhdGUgbG9hZGVyOiBQaGFzZXIuTG9hZGVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVudGl0aWVzOiBFbnRpdHlQb29sLCBsb2FkZXI6IFBoYXNlci5Mb2FkZXIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuZW50aXRpZXMgPSBlbnRpdGllcztcclxuICAgICAgICB0aGlzLmxvYWRlciA9IGxvYWRlcjtcclxuICAgIH1cclxuXHJcbiAgICBleGVjdXRlKCk6IHZvaWQge1xyXG4gICAgICAgIG5ldyBQaGFzZXJCaXRtYXBGb250TG9hZCh0aGlzLmxvYWRlcilcclxuICAgICAgICAgICAgLmxvYWQoXHJcbiAgICAgICAgICAgICAgICBuZXcgQml0bWFwRm9udFNlYXJjaCgpXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbmQodGhpcy5lbnRpdGllcylcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEVudGl0eVBvb2wgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQml0bWFwVGV4dENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBTdGFydCB9IGZyb20gJy4uLy4uL2Jhc2UvaW5kZXgnO1xyXG5pbXBvcnQgeyBFbnRpdHlTZWFyY2ggfSBmcm9tICcuLi8uLi9iYXNlL2luZGV4JztcclxuaW1wb3J0IHsgQmFzZUJpdG1hcFRleHQgfSBmcm9tICcuLi8uLi9iYXNlL2luZGV4JztcclxuaW1wb3J0IHsgUGhhc2VyQml0bWFwVGV4dCB9IGZyb20gJy4vUGhhc2VyQml0bWFwVGV4dCc7XHJcbmltcG9ydCB7IFBoYXNlckJpdG1hcFRleHRGYWN0b3J5IH0gZnJvbSAnLi9QaGFzZXJCaXRtYXBUZXh0RmFjdG9yeSc7XHJcblxyXG5leHBvcnQgY2xhc3MgUGhhc2VyQml0bWFwVGV4dFN0YXJ0IGV4dGVuZHMgU3RhcnQge1xyXG4gICAgcHJpdmF0ZSBlbnRpdGllczogRW50aXR5UG9vbDtcclxuICAgIHByaXZhdGUgZmFjdG9yeTogUGhhc2VyQml0bWFwVGV4dEZhY3Rvcnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZW50aXRpZXM6IEVudGl0eVBvb2wsIGZhY3Rvcnk6IFBoYXNlckJpdG1hcFRleHRGYWN0b3J5KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmVudGl0aWVzID0gZW50aXRpZXM7XHJcbiAgICAgICAgdGhpcy5mYWN0b3J5ID0gZmFjdG9yeTtcclxuICAgIH1cclxuXHJcbiAgICBleGVjdXRlKCk6IHZvaWQge1xyXG4gICAgICAgIG5ldyBFbnRpdHlTZWFyY2goQmFzZUJpdG1hcFRleHQuSUQpXHJcbiAgICAgICAgICAgIC5maW5kKHRoaXMuZW50aXRpZXMpXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKGVudGl0eSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0ID0gZW50aXR5LmdldDxCaXRtYXBUZXh0Q29tcG9uZW50PihCYXNlQml0bWFwVGV4dC5JRCk7XHJcbiAgICAgICAgICAgICAgICBlbnRpdHlcclxuICAgICAgICAgICAgICAgICAgICAuYXR0YWNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgUGhhc2VyQml0bWFwVGV4dChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmFjdG9yeS5jcmVhdGUodGV4dCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LmZvbnQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIC5kZXRhY2godGV4dC5pZCgpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBFbnRpdHlQb29sIH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IEJhc2VTeXN0ZW0gfSBmcm9tICcuLi8uLi9iYXNlL2luZGV4JztcclxuaW1wb3J0IHsgUGhhc2VyQml0bWFwVGV4dExvYWQgfSBmcm9tICcuL1BoYXNlckJpdG1hcFRleHRMb2FkJztcclxuaW1wb3J0IHsgUGhhc2VyQml0bWFwVGV4dFN0YXJ0IH0gZnJvbSAnLi9QaGFzZXJCaXRtYXBUZXh0U3RhcnQnO1xyXG5pbXBvcnQgeyBQaGFzZXJCaXRtYXBUZXh0RmFjdG9yeSB9IGZyb20gJy4vUGhhc2VyQml0bWFwVGV4dEZhY3RvcnknO1xyXG5cclxuLyoqXHJcbiAqIExvYWRzIGFuZCBjcmVhdGVzIGJpdG1hcCB0ZXh0IHVzaW5nIFBoYXNlci5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBQaGFzZXJCaXRtYXBUZXh0U3lzdGVtIGV4dGVuZHMgQmFzZVN5c3RlbSB7XHJcbiAgICBjb25zdHJ1Y3RvcihlbnRpdGllczogRW50aXR5UG9vbCwgbG9hZGVyOiBQaGFzZXIuTG9hZGVyLCBmYWN0b3J5OiBQaGFzZXIuR2FtZU9iamVjdEZhY3RvcnkpIHtcclxuICAgICAgICBzdXBlcihbXHJcbiAgICAgICAgICAgIG5ldyBQaGFzZXJCaXRtYXBUZXh0TG9hZChlbnRpdGllcywgbG9hZGVyKSxcclxuICAgICAgICAgICAgbmV3IFBoYXNlckJpdG1hcFRleHRTdGFydChcclxuICAgICAgICAgICAgICAgIGVudGl0aWVzLFxyXG4gICAgICAgICAgICAgICAgbmV3IFBoYXNlckJpdG1hcFRleHRGYWN0b3J5KGZhY3RvcnkpXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICBdKTtcclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi8uLi90eXBpbmdzL2luZGV4LmQudHNcIi8+XHJcblxyXG5pbXBvcnQgeyBXcml0ZVRleHQgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBQaGFzZXJUZXh0IGltcGxlbWVudHMgV3JpdGVUZXh0IHtcclxuICAgIHByaXZhdGUgdGV4dE9iajogeyB0ZXh0OiBzdHJpbmcgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0ZXh0OiBQaGFzZXIuQml0bWFwVGV4dCkge1xyXG4gICAgICAgIHRoaXMudGV4dE9iaiA9IHRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgdmFsdWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50ZXh0T2JqLnRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKHRleHQ6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudGV4dE9iai50ZXh0ID0gdGV4dDtcclxuICAgIH1cclxufSIsImV4cG9ydCAqIGZyb20gJy4vUGhhc2VyQml0bWFwVGV4dCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vUGhhc2VyQml0bWFwVGV4dEZhY3RvcnknO1xyXG5leHBvcnQgKiBmcm9tICcuL1BoYXNlckJpdG1hcFRleHRMb2FkJztcclxuZXhwb3J0ICogZnJvbSAnLi9QaGFzZXJCaXRtYXBUZXh0U3RhcnQnO1xyXG5leHBvcnQgKiBmcm9tICcuL1BoYXNlckJpdG1hcFRleHRTeXN0ZW0nO1xyXG5leHBvcnQgKiBmcm9tICcuL1BoYXNlclRleHQnOyIsImV4cG9ydCAqIGZyb20gJy4vc2NvcmUvaW5kZXgnOyIsImltcG9ydCB7IFByZWZhYiB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQmFzZUJpdG1hcFRleHQgfSBmcm9tICcuLi8uLi9iYXNlL2luZGV4JztcclxuaW1wb3J0IHsgQml0bWFwRm9udCB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBTY29yZUNvbXBvbmVudCB9IGZyb20gJy4vU2NvcmVDb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNjb3JlIGltcGxlbWVudHMgUHJlZmFiIHtcclxuICAgIHByaXZhdGUgcG9zaXRpb246IFBvc2l0aW9uO1xyXG4gICAgcHJpdmF0ZSBmb250OiBCaXRtYXBGb250O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uOiBQb3NpdGlvbiwgZm9udDogQml0bWFwRm9udCkge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgICAgICB0aGlzLmZvbnQgPSBmb250O1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZSgpOiBDb21wb25lbnRbXSB7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgbmV3IFNjb3JlQ29tcG9uZW50KCksXHJcbiAgICAgICAgICAgIG5ldyBCYXNlQml0bWFwVGV4dChcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24sXHJcbiAgICAgICAgICAgICAgICB0aGlzLmZvbnQsXHJcbiAgICAgICAgICAgICAgICAnMCdcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQ29tcG9uZW50SWQgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQmFzZUNvbXBvbmVudElkIH0gZnJvbSAnLi4vLi4vYmFzZS9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgU2NvcmVDb21wb25lbnQgaW1wbGVtZW50cyBDb21wb25lbnQge1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBJRCA9IG5ldyBCYXNlQ29tcG9uZW50SWQoU2NvcmVDb21wb25lbnQubmFtZSk7XHJcblxyXG4gICAgcHJpdmF0ZSBzY29yZTogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGlkKCk6IENvbXBvbmVudElkIHtcclxuICAgICAgICByZXR1cm4gU2NvcmVDb21wb25lbnQuSUQ7XHJcbiAgICB9XHJcblxyXG4gICAgdmFsdWUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zY29yZTtcclxuICAgIH1cclxuXHJcbiAgICBpbmNyZW1lbnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zY29yZSArPSAxO1xyXG4gICAgfVxyXG5cclxufSIsImV4cG9ydCAqIGZyb20gJy4vU2NvcmUnO1xyXG5leHBvcnQgKiBmcm9tICcuL1Njb3JlQ29tcG9uZW50JzsiLCJleHBvcnQgY2xhc3MgRHVwbGljYXRlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkge1xyXG4gICAgICAgIHN1cGVyKC4uLmFyZ3MpO1xyXG4gICAgICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIER1cGxpY2F0ZUVycm9yKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBOb3RGb3VuZEVycm9yIGV4dGVuZHMgRXJyb3Ige1xyXG4gICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHtcclxuICAgICAgICBzdXBlciguLi5hcmdzKTtcclxuICAgICAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCBOb3RGb3VuZEVycm9yKTtcclxuICAgIH1cclxufSIsImV4cG9ydCAqIGZyb20gJy4vRHVwbGljYXRlRXJyb3InO1xyXG5leHBvcnQgKiBmcm9tICcuL05vdEZvdW5kRXJyb3InOyIsImV4cG9ydCAqIGZyb20gJy4vZXJyb3JzL2luZGV4JzsiXX0=
