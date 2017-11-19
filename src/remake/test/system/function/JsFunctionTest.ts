import { JsFunction } from '@main/system/function/index';
import { expect } from 'chai';
import { suite } from 'mocha-typescript';
import { test } from 'mocha-typescript';

/**
 * {@link JsFunction} test.
 */
@suite
export class JsFunctionTest {
    @test
    public fromJsFunction(): void {
        expect(
            new JsFunction(
                (input: string): string => input
            ).apply('hello')
        ).to.equal('hello');
    }
}
