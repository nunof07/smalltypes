import { BaseWorld } from './base/index';
import { BaseEntityPool } from './base/index';
import { BaseSystemCollection } from './base/index';
import { ScorePrefab } from './score/index';
import { Position } from './position/index';
import { BitmapFont } from './bitmapText/index';
import { PhaserBitmapTextSystem } from './bitmapText/index';
import { Load } from './base/index';
import { Start } from './base/index';
import { PhaseExecute } from './base/index';

export default class GameState extends Phaser.State {
    private ecs: BaseWorld;

    init(): void {
        const font = new BitmapFont('Press Start 2P', 'fonts/Press_Start_2P_0.png', 'fonts/Press_Start_2P.fnt');
        const entities = new BaseEntityPool()
            .createMany([
                new ScorePrefab(new Position(128, 128), font),
                new ScorePrefab(new Position(this.game.world.width - 128, 128), font)
            ]);
        const systems = new BaseSystemCollection([
            new PhaserBitmapTextSystem(entities, this.game.load, this.game.add)
        ]);
        this.ecs = new BaseWorld(entities, systems);
    }

    preload(): void {
        new PhaseExecute(this.ecs.systems(), Load.ID)
            .execute();
    }

    create(): void {
        new PhaseExecute(this.ecs.systems(), Start.ID)
            .execute();
    }
}