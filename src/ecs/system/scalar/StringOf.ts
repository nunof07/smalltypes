import { Scalar } from '@system/scalar/index';

export class StringOf implements Scalar<string> {
    private obj: { toString(): string };

    constructor(value: { toString(): string }) {
        this.obj = value;
    }
    value(): string {
        return this.obj.toString();
    }
}