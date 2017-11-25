import { ToConditionConsequentPair } from '@main/system/function/index';
import { ConditionConsequentPair } from '@main/system/scalar/index';
import { expect } from 'chai';
import { suite } from 'mocha-typescript';
import { test } from 'mocha-typescript';

/**
 * {@link ToConditionConsequentPair} test.
 */
@suite
export class ToConditionConsequentPairTest {
    @test
    public converts(): void {
        const pair: ConditionConsequentPair<string> = new ToConditionConsequentPair<string>().apply([false, 'hello']);
        expect(
            pair[0].value() === false &&
            pair[1].value() === 'hello'
        ).to.equal(true, 'Must be an equivalent ConditionConsequentPair');
    }
}
