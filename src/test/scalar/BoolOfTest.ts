import { BoolOf } from '@main/scalar/index';
import { ScalarOf } from '@main/scalar/index';
import { expect } from 'chai';

/**
 * {@link BoolOf} test.
 */
export class BoolOfTest {
    private readonly bool: boolean;

    constructor(bool: boolean) {
        this.bool = bool;
    }

    public fromPrimitive(): void {
        expect(
            new BoolOf(this.bool).value()
        ).to.equal(this.bool, `From true primitive must be ${this.bool}`);
    }

    public fromScalar(): void {
        expect(
            new BoolOf(new ScalarOf(this.bool)).value()
        ).to.equal(this.bool, `From ${this.bool} scalar must be ${this.bool}`);
    }

    public fromJsFunction(): void {
        expect(
            new BoolOf((): boolean => this.bool).value()
        ).to.equal(this.bool, `From JS function that returns ${this.bool} must be ${this.bool}`);
    }

    public fromConditionConsequentPrimitivePair(): void {
        expect(
            new BoolOf([this.bool, 'something']).value()
        ).to.equal(this.bool, `From ConditionConsequentLikePair of ${this.bool} primitive must be ${this.bool}`);
    }

    public fromConditionConsequentScalarPair(): void {
        expect(
            new BoolOf([new ScalarOf(this.bool), 'something']).value()
        ).to.equal(this.bool, `From ConditionConsequentLikePair of ${this.bool} scalar must be ${this.bool}`);
    }

    public fromConditionConsequentJsFunctionPair(): void {
        expect(
            new BoolOf([(): boolean => this.bool, 'something']).value()
        ).to.equal(this.bool, `From ConditionConsequentLikePair of JS function that returns ${this.bool} must be ${this.bool}`);
    }
}
