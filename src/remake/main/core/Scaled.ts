import { Component } from '@main/core/index';
import { final } from '@main/system/index';
import { frozen } from '@main/system/index';

/**
 * Scales game to fit screen.
 */
@final
@frozen
export class Scaled implements Component {
    /**
     * Game.
     */
    private readonly game: Phaser.Game;

    /**
     * Scale manager.
     */
    private readonly scale: Phaser.ScaleManager;

    /**
     * Ctor.
     * @param game Game.
     * @param scale Scale manager.
     */
    constructor(game: Phaser.Game, scale: Phaser.ScaleManager) {
        this.game = game;
        this.scale = scale;
    }

    /**
     * Execute.
     */
    public execute(): void {
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.windowConstraints.bottom = 'visual'; // make sure it doesn't go over screen height
        this.game.scale.refresh();
    }
}
