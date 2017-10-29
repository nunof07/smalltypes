import { Component } from '@main/core/index';
import { final } from '@main/system/index';
import { frozen } from '@main/system/index';

/**
 * Align game to parent container.
 */
@final
@frozen
export class Aligned implements Component {
    /**
     * Scale manager.
     */
    private scale: Phaser.ScaleManager;

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
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
    }
}
