import { Component } from '@main/core/index';
import { final } from '@main/system/index';
import { frozen } from '@main/system/index';

/**
 * Keep pixels sharp.
 */
@final
@frozen
export class Sharped implements Component {
    /**
     * Game.
     */
    private readonly game: Phaser.Game;

    /**
     * Ctor.
     * @param game Game.
     */
    constructor(game: Phaser.Game) {
        this.game = game;
    }

    /**
     * Execute.
     */
    public execute(): void {
        this.game.antialias = false;
        this.game.stage.smoothed = false;
        Phaser.Canvas.setImageRenderingCrisp(this.game.canvas);
    }
}
