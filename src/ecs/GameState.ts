import { BaseWorld } from './base/index';
import { BaseEntityPool } from './base/index';
import { BaseSystemCollection } from './base/index';
import { Score } from './score/index';
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
        const charSize = 32;
        const entities = new BaseEntityPool()
            .createMany([
                new Score(
                    new Position(
                        0.25 * this.game.world.width - 2 * charSize,
                        4 * charSize
                    ),
                    font,
                    charSize
                ),
                new Score(
                    new Position(
                        0.75 * this.game.world.width - 2 * charSize,
                        4 * charSize
                    ),
                    font,
                    charSize)
            ]);
        this.ecs = new BaseWorld(
            entities,
            new BaseSystemCollection([
                new PhaserBitmapTextSystem(entities, this.game.load, this.game.add)
            ])
        );
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