import { StateSteps } from '@main/core/index';
import { final } from '@main/system/index';
import { frozen } from '@main/system/index';

/**
 * Phaser state.
 */
@final
@frozen
export class State extends Phaser.State {
    private steps: StateSteps;

    constructor(steps: StateSteps) {
        super();
        this.steps = steps;
    }

    // tslint:disable-next-line:no-any
    public init(...args: any[]): void {
        //this.steps.initializable.init();
    }

    // public preload(): void {

    // }

    // public create(): void {

    // }

    // public update(): void {

    // }
}
