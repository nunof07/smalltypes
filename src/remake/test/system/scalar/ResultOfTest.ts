import { ResultOf } from '@main/system/scalar/index';
import { expect } from 'chai';
import { suite } from 'mocha-typescript';
import { test } from 'mocha-typescript';

/**
 * {@link ResultOf} test.
 */
@suite
export class ResultOfTest {
    @test
    public isTrue(): void {
        expect(
           new ResultOf(
               (): boolean => true
           )
           .value()
        ).to.equal(
            true,
            'should be true'
        );
    }

    @test
    public isHelloWorld(): void {
        expect(
           new ResultOf(
               (): string => 'HelloWorld'
           )
           .value()
        ).to.equal(
            'HelloWorld',
            'should be HelloWorld'
        );
    }
}
