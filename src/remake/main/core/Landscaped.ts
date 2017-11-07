import { Component } from '@main/core/index';
import { final } from '@main/system/index';
import { frozen } from '@main/system/index';

/**
 * Force game to run in landscape orientation.
 */
@final
@frozen
export class Landscaped implements Component {
    /**
     * Scale manager.
     */
    private readonly scale: Phaser.ScaleManager;

    /**
     * Ctor.
     * @param scale Scale manager.
     */
    constructor(scale: Phaser.ScaleManager) {
        this.scale = scale;
    }

    /**
     * Execute.
     */
    public execute(): void {
        this.scale.forceLandscape = true;
    }
}
