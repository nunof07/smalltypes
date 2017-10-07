import { BaseWorld } from './base/index';
import { BaseEntityPool } from './base/index';
import { BaseSystemCollection } from './base/index';
import { ScorePrefab } from './score/index';
import { Position } from './position/index';
import { BitmapFont } from './bitmapText/index';
import { PhaserBitmapText } from './bitmapText/index';

export default class GameState extends Phaser.State {
    private ecs: BaseWorld;

    init(): void {
        const font = new BitmapFont('Press Start 2P', 'fonts/Press_Start_2P_0.png', 'fonts/Press_Start_2P.fnt');
        this.ecs = new BaseWorld(
            new BaseEntityPool()
                .createMany([
                    new ScorePrefab(new Position(128, 128), font),
                    new ScorePrefab(new Position(this.game.world.width - 128, 128), font)
                ]),
            new BaseSystemCollection()
                .registerMany([
                    new PhaserBitmapText(this.game.load, this.game.add)
                ])
        );
    }

    preload(): void {
        this.ecs.initialize();
    }

    create(): void {
        this.ecs.start();
    }

    update(): void {
        this.ecs.process();
    }
}