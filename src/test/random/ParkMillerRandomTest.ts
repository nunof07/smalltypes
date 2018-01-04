import {
    ParkMillerRandom,
    Rounded,
    ScalarOf
} from '@main';
import { expect } from 'chai';
import { suite, test } from 'mocha-typescript';

/**
 * {@link ParkMillerRandom} test.
 */
@suite
export class ParkMillerRandomTest {
    @test
    public defaultConstructor(): void {
        expect(
            () => new ParkMillerRandom().next()
        ).to.not.throw();
    }

    @test
    public zeroAsSeed(): void {
        expect(
            new ParkMillerRandom(0).next()
        ).to.not.equal(0);
    }

    @test
    public returnsRandomSequence(): void {
        const rnd: ParkMillerRandom = new ParkMillerRandom(new ScalarOf(1337));
        expect([
            round(rnd.next()),
            round(rnd.next()),
            round(rnd.next()),
            round(rnd.next()),
            round(rnd.next())
        ]).to.deep.equal([
            round(0.010463855699852042),
            round(0.8660227474132659),
            round(0.24431577475942476),
            round(0.2152263816516969),
            round(0.30979642007024794)
        ]);

        function round(n: number): number {
            return new Rounded(n, 10).value();
        }
    }
}
