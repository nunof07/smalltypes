import { Frozen } from '@test/core/Frozen';
import { expect } from 'chai';
import { suite } from 'mocha-typescript';
import { test } from 'mocha-typescript';

/**
 * {@link frozen} decorator test.
 */
@suite
export class FrozenTest {
    @test
    public isFrozen(): void {
        expect(
            Object.isFrozen(Frozen)
        ).to.equal(true, 'frozen must be true');
    }

    @test
    public isFrozenPrototype(): void {
        expect(
            Object.isFrozen(Frozen.prototype)
        ).to.equal(true, 'frozen prototype must be true');
    }

    @test
    public allowsInstances(): void {
        expect(
            () => new Frozen()
        ).to.not.throw();
    }
}
