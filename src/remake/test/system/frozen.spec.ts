/**
 * Frozen decorator test.
 */
import { Frozen } from '@test/system/Frozen';
import { expect } from 'chai';
import * as mocha from 'mocha';

describe('frozen decorator', () => {

    it('should be frozen', () => {
        expect(Object.isFrozen(Frozen)).to.equal(true, 'frozen must be true');
    });

    it('should be frozen prototype', () => {
        expect(Object.isFrozen(Frozen.prototype)).to.equal(true, 'frozen prototype must be true');
    });

    it('should allow instances', () => {
        expect(() => new Frozen()).to.not.throw();
    });

});
