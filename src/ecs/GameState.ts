/// <reference path="../../typings/index.d.ts"/>

import { BaseWorld } from './base/index';
import { BaseEntityPool } from './base/index';
import { BaseSystemCollection } from './base/index';
import { Score } from './score/index';
import { BasePosition } from './position/index';
import { BitmapFont } from './font/index';
import { PhaserBitmapTextSystem } from './text/index';
import { Load } from './base/index';
import { Start } from './base/index';
import { PhaseExecute } from './base/index';

export default class GameState extends Phaser.State {
    private ecs: BaseWorld;

    init(): void {
        const font = new BitmapFont('Press Start 2P', 'fonts/Press_Start_2P_0.png', 'fonts/Press_Start_2P.fnt', 32);
        const entities = new BaseEntityPool()
            .createMany([
                new Score(
                    new BasePosition(
                        0.25 * this.game.world.width - 2 * font.size(),
                        4 * font.size()
                    ),
                    font
                ),
                new Score(
                    new BasePosition(
                        0.75 * this.game.world.width - 2 * font.size(),
                        4 * font.size()
                    ),
                    font
                )
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