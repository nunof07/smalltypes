import {
    ConditionConsequentPair,
    ToConditionConsequentPair
} from '@main';
import { expect } from 'chai';
import { suite, test } from 'mocha-typescript';

/**
 * {@link ToConditionConsequentPair} test.
 */
@suite
export class ToConditionConsequentPairTest {
    @test
    public isFunction(): void {
        expect(
            new ToConditionConsequentPair().isFunction()
        ).to.equal(true, 'Must be a function');
    }

    @test
    public converts(): void {
        const pair: ConditionConsequentPair<string> = new ToConditionConsequentPair<string>().apply([false, 'hello']);
        expect(
            pair[0].value() === false &&
            pair[1].value() === 'hello'
        ).to.equal(true, 'Must be an equivalent ConditionConsequentPair');
    }
}
