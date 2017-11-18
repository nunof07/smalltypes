import { ParkMillerRandom } from '@main/system/random/index';
import { ScalarOf } from '@main/system/scalar/index';
import { expect } from 'chai';
import { suite } from 'mocha-typescript';
import { test } from 'mocha-typescript';

/**
 * {@link ParkMillerRandom} test.
 */
@suite
export class ParkMillerRandomTest {
    @test
    public returnsRandomSequence(): void {
        const rnd: ParkMillerRandom = new ParkMillerRandom(new ScalarOf(1337));
        expect([
            rnd.next(),
            rnd.next(),
            rnd.next(),
            rnd.next(),
            rnd.next()
        ]).to.be.equalTo([
            0.010463855699852042,
            0.8660227474132659,
            0.24431577475942476,
            0.2152263816516969,
            0.30979642007024794
        ]);
    }
}
