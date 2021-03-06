import {
    Conditions,
    Scalar,
    ScalarLike
} from '@main';

/**
 * Logical disjunction operator.
 */
export class Or implements Scalar<boolean> {
    /**
     * Conditions.
     */
    private readonly conditions: Iterable<boolean>;

    /**
     * Ctor.
     * @param conditions Conditions.
     */
    constructor(...conditions: ScalarLike<boolean>[]) {
        this.conditions = new Conditions(conditions);
    }

    /**
     * Type determinant.
     */
    public isScalar(): true {
        return true;
    }

    /**
     * Get the value.
     */
    public value(): boolean {
        for (const condition of this.conditions) {
            if (condition) {
                return true;
            }
        }

        return false;
    }
}
