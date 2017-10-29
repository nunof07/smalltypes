import { Function } from '@main/system/function/index';
import { final } from '@main/system/index';
import { frozen } from '@main/system/index';

/**
 * Procedure.
 */
@final
@frozen
export class Procedure<X> implements Function<X, void> {
    /**
     * Callback.
     */
    private procedure: (input: X) => void;

    /**
     * Ctor.
     * @param procedure Procedure callback.
     */
    constructor(procedure: (input: X) => void) {
        this.procedure = procedure;
    }

    /**
     * Apply the function to the input.
     * @param input Input.
     */
    public apply(input: X): void {
        this.procedure(input);
    }
}
