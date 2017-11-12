import { First } from '@main/system/iterable/index';
import { Scalar } from '@main/system/scalar/index';
import { expect } from 'chai';
import { suite } from 'mocha-typescript';
import { test } from 'mocha-typescript';

/**
 * {@link First} test.
 */
@suite
export class FirstTest {
    @test
    public firstValue(): void {
        expect(
            new First([1, 2, 3]).value().value
        ).to.equal(
            1
        );
    }

    @test
    public afterIterate(): void {
        expect(
            ((): number => {
                const iterable: Iterable<number> = [1, 2, 3];
                const next: Scalar<IteratorResult<number>> = new First(iterable);
                const limit: number = 2;
                let count: number = 0;

                // tslint:disable-next-line:variable-name
                for (const _item of iterable) {
                    count += 1;

                    if (count >= limit) {
                        break;
                    }
                }

                return next.value().value;
            })()
        ).to.equal(
            1
        );
    }

    @test
    public emptyIterable(): void {
        expect(
            new First([]).value().done
        ).to.equal(
            true,
            'Next on empty iterable must return done'
        );
    }
}
