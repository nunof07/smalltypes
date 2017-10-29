import { Game } from '@main/core/index';
import { final } from '@main/system/index';
import { frozen } from '@main/system/index';

/**
 * Pong game.
 */
@final
@frozen
export class Pong implements Game {
    /**
     * Start game.
     */
    public start(): void {
        throw new Error('Game not implemented.');
    }
}
