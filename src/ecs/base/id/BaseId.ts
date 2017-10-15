import { Id } from '@core/index';
import { Scalar } from '@system/index';
import { StringOf } from '@system/index';

export class BaseId implements Id {
    private scalar: Scalar<string>;

    constructor(id: Scalar<string> | Id | string) {
        this.scalar = typeof id === 'string' ?
            new StringOf(id) :
            id;
    }
    value(): string {
        return this.scalar.value();
    }
}