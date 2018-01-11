import { Casted } from '@main';
import { expect } from 'chai';
import { suite, test } from 'mocha-typescript';

/**
 * {@link Casted} test.
 */
@suite
export class CastedTest {
    @test
    public isScalar(): void {
        expect(
            new Casted(1).isScalar()
        ).to.equal(true, 'Must be a scalar');
    }

    @test
    public castsNumber(): void {
        expect(
            // tslint:disable-next-line:no-any
            new Casted<number>(<any>5).value()
        ).to.equal(5);
    }

    @test
    public castsObject(): void {
        expect(
            // tslint:disable-next-line:no-any
            new Casted<{ readonly a: string }>(<any>{ a: 'hello' })
                .value()
                .a
        ).to.equal('hello');
    }
}
