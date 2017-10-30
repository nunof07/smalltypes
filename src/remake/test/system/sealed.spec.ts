/**
 * Sealed decorator test.
 */
import { Sealed } from '@test/system/Sealed';
import { expect } from 'chai';

describe('sealed decorator', () => {

    it('should be sealed', () => {
        expect(Object.isSealed(Sealed)).to.equal(true, 'sealed must be true');
    });

});
