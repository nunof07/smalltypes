import { final } from '@main/system/index';
import { frozen } from '@main/system/index';
import { IllegalStateException } from '@main/system/index';
import { IsBlank } from '@main/system/scalar/index';
import { Scalar } from '@main/system/scalar/index';

/**
 * Don't accept null or undefined.
 */
@final
@frozen
export class NoBlank<T> implements Scalar<T> {
    /**
     * Source.
     */
    private scalar: Scalar<T>;

    constructor(scalar: Scalar<T>) {
        this.scalar = scalar;
    }

    public value(): T {
        if (new IsBlank(this.scalar).value()) {
            throw new IllegalStateException('Must have a value');
        }

        return this.scalar.value();
    }
}
