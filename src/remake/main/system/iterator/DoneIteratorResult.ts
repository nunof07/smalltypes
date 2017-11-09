import { final } from '@main/system/index';
import { frozen } from '@main/system/index';
import { Scalar } from '@main/system/scalar/index';

/**
 * Finished iterator result.
 */
@final
@frozen
export class DoneIteratorResult<T> implements Scalar<IteratorResult<T>> {
    /**
     * Get the value.
     */
    public value(): IteratorResult<T> {
        return <IteratorResult<T>>{
            done: true
        };
    }
}
